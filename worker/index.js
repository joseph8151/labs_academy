/**
 * Plain JS (not TS) on purpose: this file sits outside the Next.js app and
 * must not be picked up by `next build`'s TypeScript check (tsconfig.json
 * includes all .ts files across the repo, but not .js files).
 *
 * fetch() only serves the static export (env.ASSETS.fetch) — Cloudflare
 * still hosts the site exactly as before. scheduled() is the only addition:
 * a weekly cron job that pulls visitor stats from Cloudflare's own GraphQL
 * Analytics API (no extra tracking script needed — Cloudflare already
 * counts every request to the zone) and emails a summary via Resend.
 *
 * Required secrets (see README section in this repo, or ask Claude):
 *   CF_API_TOKEN     - Cloudflare API token, "Zone / Analytics / Read" on this zone
 *   CF_ZONE_ID       - Zone ID for labsacademies.com (Cloudflare dashboard > Overview)
 *   RESEND_API_KEY   - API key from resend.com
 *   REPORT_FROM_EMAIL- e.g. "LABS Academy <reports@labsacademies.com>" or
 *                      "LABS Academy <onboarding@resend.dev>" before a domain is verified
 *   REPORT_TO_EMAIL  - where the weekly report should land (comma-separate
 *                      multiple addresses, e.g. "a@x.com, b@y.com")
 */

const worker = {
  async fetch(request, env) {
    const url = new URL(request.url);
    // Temporary manual-test route so the weekly report can be verified without
    // waiting for the Sunday cron — safe to remove once confirmed working.
    if (url.pathname === "/__trigger-weekly-report-x7f2q9") {
      const result = await sendWeeklyReport(env);
      return new Response(JSON.stringify(result, null, 2), {
        headers: { "Cache-Control": "no-store", "Content-Type": "application/json; charset=utf-8" },
      });
    }
    return env.ASSETS.fetch(request);
  },

  async scheduled(event, env, ctx) {
    ctx.waitUntil(sendWeeklyReport(env));
  },
};

export default worker;

async function sendWeeklyReport(env) {
  const diagnostics = {
    secretsPresent: {
      CF_API_TOKEN: Boolean(env.CF_API_TOKEN),
      CF_ZONE_ID: Boolean(env.CF_ZONE_ID),
      RESEND_API_KEY: Boolean(env.RESEND_API_KEY),
      REPORT_FROM_EMAIL: Boolean(env.REPORT_FROM_EMAIL),
      REPORT_TO_EMAIL: Boolean(env.REPORT_TO_EMAIL),
    },
  };

  const end = new Date();
  const start = new Date(end);
  start.setUTCDate(start.getUTCDate() - 7);

  const endStr = end.toISOString().slice(0, 10);
  const startStr = start.toISOString().slice(0, 10);

  const query = `
    query WeeklyStats($zoneTag: String!, $start: Date!, $end: Date!) {
      viewer {
        zones(filter: { zoneTag: $zoneTag }) {
          httpRequests1dGroups(
            limit: 14
            filter: { date_geq: $start, date_leq: $end }
            orderBy: [date_ASC]
          ) {
            dimensions { date }
            sum { requests pageViews }
            uniq { uniques }
          }
        }
      }
    }
  `;

  let gqlRes;
  try {
    gqlRes = await fetch("https://api.cloudflare.com/client/v4/graphql", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${env.CF_API_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query,
        variables: { zoneTag: env.CF_ZONE_ID, start: startStr, end: endStr },
      }),
    });
  } catch (err) {
    diagnostics.step = "cloudflare-graphql-fetch-threw";
    diagnostics.error = String(err);
    return diagnostics;
  }

  diagnostics.graphqlStatus = gqlRes.status;
  const gqlBodyText = await gqlRes.text();
  diagnostics.graphqlBody = gqlBodyText.slice(0, 800);

  if (!gqlRes.ok) {
    diagnostics.step = "cloudflare-graphql-not-ok";
    return diagnostics;
  }

  const gqlData = JSON.parse(gqlBodyText);
  if (gqlData.errors) {
    diagnostics.step = "cloudflare-graphql-errors-field";
    diagnostics.graphqlErrors = gqlData.errors;
    return diagnostics;
  }

  const rows = gqlData?.data?.viewer?.zones?.[0]?.httpRequests1dGroups ?? [];
  diagnostics.rowCount = rows.length;

  const totalUniques = rows.reduce((sum, r) => sum + (r.uniq?.uniques ?? 0), 0);
  const totalPageViews = rows.reduce((sum, r) => sum + (r.sum?.pageViews ?? 0), 0);
  diagnostics.totalUniques = totalUniques;
  diagnostics.totalPageViews = totalPageViews;

  const rowsHtml = rows
    .map(
      (r) => `
        <tr>
          <td style="padding:6px 14px;border-bottom:1px solid #e7ded0;">${r.dimensions.date}</td>
          <td style="padding:6px 14px;border-bottom:1px solid #e7ded0;">${r.uniq?.uniques ?? 0}</td>
          <td style="padding:6px 14px;border-bottom:1px solid #e7ded0;">${r.sum?.pageViews ?? 0}</td>
        </tr>`
    )
    .join("");

  const html = `
    <div style="font-family:-apple-system,sans-serif;max-width:480px;color:#2c2c2c;">
      <p style="font-size:12px;letter-spacing:0.1em;color:#b89b5e;font-weight:600;">LABS ACADEMY</p>
      <h2 style="margin:6px 0 2px;">주간 방문자 리포트</h2>
      <p style="color:#777168;margin:0 0 16px;">${startStr} ~ ${endStr}</p>
      <p style="font-size:18px;font-weight:600;margin:0 0 16px;">
        방문자(추정) ${totalUniques}명 · 페이지뷰 ${totalPageViews}
      </p>
      <table style="border-collapse:collapse;width:100%;font-size:13px;">
        <thead>
          <tr>
            <th style="text-align:left;padding:6px 14px;border-bottom:1px solid #2c2c2c;">날짜</th>
            <th style="text-align:left;padding:6px 14px;border-bottom:1px solid #2c2c2c;">방문자</th>
            <th style="text-align:left;padding:6px 14px;border-bottom:1px solid #2c2c2c;">페이지뷰</th>
          </tr>
        </thead>
        <tbody>${rowsHtml}</tbody>
      </table>
      <p style="color:#a8a196;font-size:11px;margin-top:20px;">
        Cloudflare 자체 트래픽 집계 기준이며, 실제 순수 방문자 수와 다소 차이가 있을 수 있습니다.
      </p>
    </div>
  `;

  let sendRes;
  try {
    sendRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: env.REPORT_FROM_EMAIL,
        // REPORT_TO_EMAIL may be a single address or a comma-separated list.
        to: env.REPORT_TO_EMAIL.split(",").map((addr) => addr.trim()).filter(Boolean),
        subject: `LABS Academy 주간 방문자 리포트 (${startStr} ~ ${endStr})`,
        html,
      }),
    });
  } catch (err) {
    diagnostics.step = "resend-fetch-threw";
    diagnostics.error = String(err);
    return diagnostics;
  }

  diagnostics.resendStatus = sendRes.status;
  diagnostics.resendBody = (await sendRes.text()).slice(0, 800);
  diagnostics.step = sendRes.ok ? "done" : "resend-not-ok";
  return diagnostics;
}

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
 *   REPORT_TO_EMAIL  - where the weekly report should land
 */

const worker = {
  async fetch(request, env) {
    return env.ASSETS.fetch(request);
  },

  async scheduled(event, env, ctx) {
    ctx.waitUntil(sendWeeklyReport(env));
  },
};

export default worker;

async function sendWeeklyReport(env) {
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

  const gqlRes = await fetch("https://api.cloudflare.com/client/v4/graphql", {
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

  if (!gqlRes.ok) {
    console.error("Cloudflare GraphQL request failed", await gqlRes.text());
    return;
  }

  const gqlData = await gqlRes.json();
  const rows = gqlData?.data?.viewer?.zones?.[0]?.httpRequests1dGroups ?? [];

  const totalUniques = rows.reduce((sum, r) => sum + (r.uniq?.uniques ?? 0), 0);
  const totalPageViews = rows.reduce((sum, r) => sum + (r.sum?.pageViews ?? 0), 0);

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

  const sendRes = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: env.REPORT_FROM_EMAIL,
      to: env.REPORT_TO_EMAIL,
      subject: `LABS Academy 주간 방문자 리포트 (${startStr} ~ ${endStr})`,
      html,
    }),
  });

  if (!sendRes.ok) {
    console.error("Resend send failed", await sendRes.text());
  }
}

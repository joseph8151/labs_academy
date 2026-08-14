export type ConsultClickPayload = {
  branch: string;
  program?: string;
  sourcePage?: string;
};

/**
 * Fires a `kakao_consult_click` event to window.gtag / dataLayer when analytics
 * is connected. Safe to call even when no analytics provider is installed yet.
 */
export function trackConsultClick(payload: ConsultClickPayload): void {
  if (typeof window === "undefined") return;

  try {
    const w = window as typeof window & {
      gtag?: (...args: unknown[]) => void;
      dataLayer?: unknown[];
    };

    if (typeof w.gtag === "function") {
      w.gtag("event", "kakao_consult_click", payload);
    }

    if (Array.isArray(w.dataLayer)) {
      w.dataLayer.push({ event: "kakao_consult_click", ...payload });
    }
  } catch {
    // Analytics must never break the consult flow.
  }
}

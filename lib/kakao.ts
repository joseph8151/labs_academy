import type { Location } from "@/data/locations";

export type ConsultAction =
  | { type: "kakao"; href: string; label: string }
  | { type: "tel"; href: string; label: string }
  | { type: "unavailable"; label: string };

/**
 * Never fabricates a KakaoTalk URL. If a branch hasn't provided one yet,
 * falls back to phone consult, then to a "channel not ready" state.
 */
export function getConsultAction(location: Location): ConsultAction {
  if (location.kakaoChannelUrl) {
    return { type: "kakao", href: location.kakaoChannelUrl, label: "카카오톡 상담" };
  }
  if (location.phone) {
    return { type: "tel", href: `tel:${location.phone.replace(/-/g, "")}`, label: "전화 상담" };
  }
  return { type: "unavailable", label: "상담 채널 준비중" };
}

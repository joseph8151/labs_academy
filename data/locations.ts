export type Location = {
  id: string;
  name: string;
  address: string;
  phone: string;
  kakaoId: string;
  /** Leave empty until the branch provides its official KakaoTalk channel URL. */
  kakaoChannelUrl: string;
  hours: string;
  mapUrl: string;
  programs: string[];
  /** Optional — add once the branch provides written directions from the nearest station/landmark. */
  directions?: string;
  /** Optional — add once real interior photos are confirmed for this branch. */
  gallery?: { label: string }[];
};

/**
 * Only branches with confirmed data are listed here.
 * Add a new entry (with kakaoChannelUrl once issued) to publish a new branch —
 * no component changes required.
 */
export const locations: Location[] = [
  {
    id: "suwon",
    name: "LABS 수원",
    address: "경기도 수원시 영통구 매탄동 371-1 3층",
    phone: "031-214-8131",
    kakaoId: "labssw",
    kakaoChannelUrl: "https://pf.kakao.com/_NlNdX/chat",
    hours: "운영시간 안내 준비중",
    mapUrl: "https://map.kakao.com/?q=" + encodeURIComponent("경기도 수원시 영통구 매탄동 371-1"),
    programs: ["영어회화", "비즈니스 영어", "시험대비", "중국어", "일본어"],
  },
];

export function getLocationById(id: string): Location | undefined {
  return locations.find((loc) => loc.id === id);
}

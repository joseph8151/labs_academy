export type Location = {
  id: string;
  name: string;
  address: string;
  /** Optional — add once the branch confirms its public phone number. */
  phone?: string;
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
    kakaoId: "수원랩스어학원",
    kakaoChannelUrl: "https://pf.kakao.com/_NlNdX/chat",
    hours: "운영시간 안내 준비중",
    mapUrl: "https://place.map.kakao.com/27354388",
    programs: ["영어회화", "비즈니스 영어", "시험대비", "중국어", "일본어"],
  },
  {
    id: "bundang",
    name: "LABS 분당",
    address: "경기도 성남시 분당구 백현로101번길 12, 304호 (수내동, 세인프라자)",
    kakaoId: "labs1",
    kakaoChannelUrl: "https://pf.kakao.com/_nUxedX/chat",
    hours: "운영시간 안내 준비중",
    mapUrl: "https://place.map.kakao.com/2025598842",
    programs: ["영어회화", "비즈니스 영어", "시험대비", "중국어", "일본어"],
  },
  {
    id: "ilsan",
    name: "LABS 일산",
    address: "경기도 고양시 일산동구 강석로 115, 8층 803호 (마두동, 장항빌딩)",
    kakaoId: "일산랩스어학원",
    kakaoChannelUrl: "https://pf.kakao.com/_dZNdX/chat",
    hours: "운영시간 안내 준비중",
    mapUrl: "https://place.map.kakao.com/233265720",
    programs: ["영어회화", "비즈니스 영어", "시험대비", "중국어", "일본어"],
  },
];

export function getLocationById(id: string): Location | undefined {
  return locations.find((loc) => loc.id === id);
}

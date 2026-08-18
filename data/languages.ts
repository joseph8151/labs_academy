export type LanguageTrack = {
  slug: string;
  code: string;
  name: string;
  nameKo: string;
  tagline: string;
  courses: string[];
  tests: string[];
};

export const languages: LanguageTrack[] = [
  {
    slug: "english",
    code: "EN",
    name: "English",
    nameKo: "영어",
    tagline: "회화부터 비즈니스, 유학·공인시험까지",
    courses: ["영어회화", "비즈니스 영어", "유학 영어", "국제학교 준비", "해외 면접", "이민 준비"],
    tests: ["SPA", "TEPS", "IELTS", "TOEFL", "DET", "PTE", "SAT", "OPIc"],
  },
  {
    slug: "chinese",
    code: "CN",
    name: "Chinese",
    nameKo: "중국어",
    tagline: "실전 회화와 공인 급수까지",
    courses: ["중국어 회화"],
    tests: ["HSK", "TSC", "BCT"],
  },
  {
    slug: "japanese",
    code: "JP",
    name: "Japanese",
    nameKo: "일본어",
    tagline: "일상 회화부터 급수 시험까지",
    courses: ["일본어 회화"],
    tests: ["JLPT", "JPT"],
  },
  {
    slug: "spanish",
    code: "ES",
    name: "Spanish",
    nameKo: "스페인어",
    tagline: "기초 회화부터 공인 자격까지",
    courses: ["스페인어 회화"],
    tests: ["DELE"],
  },
  {
    slug: "others",
    code: "＋",
    name: "Others",
    nameKo: "기타 언어",
    tagline: "독일어·프랑스어·러시아어 등 기타 언어 상담",
    courses: ["독일어", "프랑스어", "러시아어", "베트남어", "태국어", "이탈리아어"],
    tests: [],
  },
];

export function getLanguageBySlug(slug: string): LanguageTrack | undefined {
  return languages.find((l) => l.slug === slug);
}

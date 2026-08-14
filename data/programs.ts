export type Program = {
  slug: string;
  number: string;
  name: string;
  nameKo: string;
  summary: string;
  items: string[];
  audience: string[];
  intro: string;
};

export const programs: Program[] = [
  {
    slug: "conversation",
    number: "01",
    name: "Conversation",
    nameKo: "일상 및 실전 회화",
    summary: "일상 및 실전 회화",
    items: ["발음 및 억양", "Vocabulary", "Speaking Fluency", "Expression Correction"],
    audience: [
      "영어로 말할 때 긴장하는 분",
      "문법은 알지만 대화가 어려운 분",
      "해외생활을 준비하는 분",
      "꾸준하게 Speaking을 연습하고 싶은 분",
    ],
    intro:
      "정해진 진도가 아니라 지금 필요한 표현과 상황을 중심으로 말하기 훈련을 설계합니다. 발음, 억양, 표현 교정을 실시간 피드백과 함께 진행합니다.",
  },
  {
    slug: "business",
    number: "02",
    name: "Business",
    nameKo: "비즈니스 언어",
    summary: "업무와 커리어를 위한 실전 언어",
    items: ["Business English", "Presentation", "Meeting", "Negotiation", "Interview", "Email & Writing"],
    audience: [
      "외국계 기업 근무자",
      "해외 고객과 회의가 많은 직장인",
      "영어 발표가 필요한 직장인",
      "해외 출장 예정자",
    ],
    intro:
      "업무 상황별로 필요한 언어 영역을 진단하고, 실제 업무 맥락에 맞춘 표현과 커뮤니케이션 방식을 훈련합니다.",
  },
  {
    slug: "test-preparation",
    number: "03",
    name: "Test Preparation",
    nameKo: "시험 대비",
    summary: "OPIc · SPA · TEPS · IELTS · TOEFL · HSK · TSC · JLPT · JPT · DELE 등",
    items: ["OPIc", "SPA", "TEPS", "IELTS", "TOEFL", "HSK", "TSC", "JLPT", "JPT", "DELE"],
    audience: [
      "OPIc 점수가 필요한 분",
      "IELTS / TOEFL 시험을 준비하는 분",
      "목표 점수와 기한이 명확한 분",
      "취약 영역을 집중적으로 보완하고 싶은 분",
    ],
    intro:
      "시험별 채점 기준과 개인의 강·약점을 함께 분석해, 목표 점수 달성까지 필요한 영역을 우선순위에 따라 학습합니다.",
  },
  {
    slug: "private-intensive",
    number: "04",
    name: "Private Intensive",
    nameKo: "단기 집중 프로그램",
    summary: "면접 · 해외 출장 · 유학 · 시험 · 승진 · 이직 · 주재원 준비",
    items: ["면접 준비", "해외 출장", "유학 준비", "시험 대비", "승진", "이직", "주재원 준비"],
    audience: [
      "정해진 기한 안에 특정 목표를 준비해야 하는 분",
      "면접이나 출장을 앞두고 있는 분",
      "짧은 기간 동안 집중적으로 실력을 끌어올리고 싶은 분",
      "주재원 파견을 준비하는 분",
    ],
    intro:
      "목표 시점을 기준으로 학습 일정을 역산해 설계하는 단기 집중 프로그램입니다. 상담을 통해 필요한 기간과 밀도를 함께 정합니다.",
  },
];

export function getProgramBySlug(slug: string): Program | undefined {
  return programs.find((p) => p.slug === slug);
}

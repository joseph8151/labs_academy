export type IntensivePlan = {
  id: string;
  hours: number;
  name: string;
  tagline: string;
  /** Short Korean pull-line shown under the tagline. */
  punchline: string;
  recommended?: boolean;
  goals: string[];
  /** No confirmed price yet — keep as a placeholder until LABS finalizes tuition by branch/program. */
  priceLabel: string;
  ctaLabel: string;
};

export const plans: IntensivePlan[] = [
  {
    id: "20h",
    hours: 20,
    name: "20 HOURS",
    tagline: "RAPID",
    punchline: "필요한 것만 빠르게.",
    goals: ["시험 직전 집중", "외국계 면접", "해외출장", "급한 Speaking 준비"],
    priceLabel: "상담 시 안내",
    ctaLabel: "20시간 상담하기",
  },
  {
    id: "40h",
    hours: 40,
    name: "40 HOURS",
    tagline: "INTENSIVE",
    punchline: "단기간, 확실하게 집중.",
    recommended: true,
    goals: ["Speaking 집중", "OPIc", "Business English", "Interview"],
    priceLabel: "상담 시 안내",
    ctaLabel: "40시간 상담하기",
  },
  {
    id: "60h",
    hours: 60,
    name: "60 HOURS",
    tagline: "PROFESSIONAL",
    punchline: "실전에서 사용할 수 있는 단계까지.",
    goals: ["업무 영어", "Presentation", "IELTS / TOEFL", "종합 Speaking Training"],
    priceLabel: "상담 시 안내",
    ctaLabel: "60시간 상담하기",
  },
  {
    id: "80h",
    hours: 80,
    name: "80 HOURS",
    tagline: "IMMERSION",
    punchline: "영어 환경에 몰입하는 Intensive Program.",
    goals: ["유학 출국 전", "방학 집중", "휴직 집중", "종합 Language Training"],
    priceLabel: "상담 시 안내",
    ctaLabel: "80시간 상담하기",
  },
];

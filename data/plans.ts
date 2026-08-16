export type IntensivePlan = {
  id: string;
  hours: number;
  name: string;
  tagline: string;
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
    tagline: "ONE CLEAR GOAL",
    goals: ["외국계 면접 대비", "Presentation 준비", "해외출장 Speaking", "OPIc 집중 대비"],
    priceLabel: "상담 시 안내",
    ctaLabel: "20시간 상담하기",
  },
  {
    id: "40h",
    hours: 40,
    name: "40 HOURS",
    tagline: "PERFORMANCE UPGRADE",
    recommended: true,
    goals: ["Speaking + Pronunciation", "Business + Presentation", "Interview + Business Communication"],
    priceLabel: "상담 시 안내",
    ctaLabel: "40시간 상담하기",
  },
  {
    id: "60h",
    hours: 60,
    name: "60 HOURS",
    tagline: "INTENSIVE CHANGE",
    goals: ["Speaking + Listening + Vocabulary", "Business Communication", "시험 종합 대비"],
    priceLabel: "상담 시 안내",
    ctaLabel: "60시간 상담하기",
  },
  {
    id: "80h",
    hours: 80,
    name: "80 HOURS",
    tagline: "COMPLETE PROGRAM",
    goals: ["주재원 준비", "유학 · 해외생활 준비", "영어 종합 집중", "장기 목표를 단기간에 압축"],
    priceLabel: "상담 시 안내",
    ctaLabel: "80시간 상담하기",
  },
];

export type Plan = {
  id: string;
  name: string;
  tagline: string;
  featured?: boolean;
  features: string[];
  /** No confirmed price yet — keep as a placeholder until LABS finalizes tuition by branch/program. */
  priceLabel: string;
  ctaLabel: string;
};

export const plans: Plan[] = [
  {
    id: "start",
    name: "START",
    tagline: "가볍게 시작하는 1:1",
    features: ["주 1회 중심", "개인별 수업 설계", "1:1 피드백"],
    priceLabel: "상담 시 안내",
    ctaLabel: "수강 상담",
  },
  {
    id: "focus",
    name: "FOCUS",
    tagline: "꾸준히 실력을 만들고 싶은 분",
    featured: true,
    features: ["주 2회 중심", "개인별 커리큘럼", "과제 및 피드백", "학습 방향 점검"],
    priceLabel: "상담 시 안내",
    ctaLabel: "수강 시작하기",
  },
  {
    id: "intensive",
    name: "INTENSIVE",
    tagline: "시험·면접·출장처럼 기한이 있는 분",
    features: ["집중 수업 일정", "목표 중심 커리큘럼", "시험 / 면접 / Presentation 집중", "단기간 집중 피드백"],
    priceLabel: "프로그램별 상담",
    ctaLabel: "집중 프로그램 상담",
  },
];

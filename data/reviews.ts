export type ReviewCategory = "conversation" | "business" | "test-prep" | "online";

export type Review = {
  id: string;
  category: ReviewCategory;
  categoryLabel: string;
  studentLabel: string;
  quote: string;
};

/**
 * Placeholder testimonials only — no fabricated names, companies, or statistics.
 * Replace with verified student reviews as they are collected; keep this file
 * as the single source so the Reviews section updates without touching UI code.
 */
export const reviews: Review[] = [
  {
    id: "review-1",
    category: "conversation",
    categoryLabel: "Conversation",
    studentLabel: "직장인 수강생",
    quote:
      "정해진 진도가 아니라 제가 자주 쓰는 표현 위주로 수업이 짜여서, 실제 대화에서 훨씬 편하게 말하게 됐어요.",
  },
  {
    id: "review-2",
    category: "business",
    categoryLabel: "Business",
    studentLabel: "외국계 기업 재직 중 수강생",
    quote:
      "발표와 이메일처럼 제가 실제로 부딪히는 상황을 그대로 가져가서 연습할 수 있어서 도움이 많이 됐습니다.",
  },
  {
    id: "review-3",
    category: "test-prep",
    categoryLabel: "Test Prep",
    studentLabel: "IELTS 준비 수강생",
    quote:
      "제 약점이던 Writing Task 2를 집중적으로 봐주셔서, 부족했던 부분을 구체적으로 알고 준비할 수 있었어요.",
  },
  {
    id: "review-4",
    category: "online",
    categoryLabel: "Online",
    studentLabel: "LABS ON 수강생",
    quote:
      "출장이 잦아 고정 시간에 다니기 어려웠는데, 화상으로도 오프라인 수업과 비슷한 밀도로 진행돼서 만족스러웠습니다.",
  },
];

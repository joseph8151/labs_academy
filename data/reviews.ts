export type ReviewCategory = "conversation" | "business" | "test-prep" | "online";

export type StudentStory = {
  id: string;
  category: ReviewCategory;
  categoryLabel: string;
  program: string;
  branch: string;
  lessonType: string;
  before: string;
  goal: string;
  focus: string[];
  reviewText: string;
  reviewDate: string;
  /** Only reviews LABS has confirmed as actual, completed students may be marked true. */
  verified: boolean;
};

/**
 * No student review has been confirmed yet, so this stays empty rather than
 * shipping placeholder quotes attributed to invented students. The
 * StudentStory section hides itself gracefully until real, verified case
 * studies are added here — never fabricate a name, company, or comment.
 *
 * Shape to follow once real data is available:
 * {
 *   id: "case-001",
 *   category: "business",
 *   categoryLabel: "Business English",
 *   program: "business",
 *   branch: "suwon",
 *   lessonType: "Offline Private Lesson",
 *   before: "회의에서 영어로 의견을 바로 표현하기 어려움",
 *   goal: "해외팀과 영어 미팅 참여",
 *   focus: ["Speaking", "Business Expressions", "Presentation"],
 *   reviewText: "...",
 *   reviewDate: "2026-01",
 *   verified: true,
 * }
 */
export const studentStories: StudentStory[] = [];

export type Instructor = {
  id: string;
  isSample: true;
  type: "Native Instructor" | "Bilingual Instructor" | "Test Specialist" | "Business Language Specialist";
  language: string;
  focusAreas: string[];
  bio: string;
};

/**
 * No real instructor roster has been provided yet.
 * Every entry here is a clearly-labeled development placeholder —
 * replace with verified instructor data (name, credentials, career) before launch.
 * Do not invent names, schools, or work history.
 */
export const instructors: Instructor[] = [
  {
    id: "sample-native-en",
    isSample: true,
    type: "Native Instructor",
    language: "English",
    focusAreas: ["Conversation", "Pronunciation", "Business English"],
    bio: "SAMPLE PROFILE — 실제 강사 프로필로 교체 예정입니다.",
  },
  {
    id: "sample-bilingual-cn",
    isSample: true,
    type: "Bilingual Instructor",
    language: "Chinese",
    focusAreas: ["회화", "HSK", "TSC"],
    bio: "SAMPLE PROFILE — 실제 강사 프로필로 교체 예정입니다.",
  },
  {
    id: "sample-test-specialist",
    isSample: true,
    type: "Test Specialist",
    language: "English",
    focusAreas: ["IELTS", "TOEFL", "OPIc"],
    bio: "SAMPLE PROFILE — 실제 강사 프로필로 교체 예정입니다.",
  },
  {
    id: "sample-business-specialist",
    isSample: true,
    type: "Business Language Specialist",
    language: "English",
    focusAreas: ["Presentation", "Negotiation", "Email & Writing"],
    bio: "SAMPLE PROFILE — 실제 강사 프로필로 교체 예정입니다.",
  },
];

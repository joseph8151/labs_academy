export type StandardStep = {
  step: string;
  title: string;
  titleKo: string;
  desc: string;
  /** Only steps LABS has confirmed match its actual hiring process are shown. */
  confirmed: boolean;
};

/**
 * Describes how LABS evaluates and matches instructors. Marked `confirmed`
 * only for steps verified against LABS's actual hiring process — no
 * unverified claims (pass rates, rankings, "10+ years only") are added here.
 */
export const instructorStandardSteps: StandardStep[] = [
  {
    step: "01",
    title: "Profile Review",
    titleKo: "프로필 검토",
    desc: "전공·경력·교육 경험 확인",
    confirmed: true,
  },
  {
    step: "02",
    title: "Teaching Interview",
    titleKo: "수업 인터뷰",
    desc: "수업 방식 및 커뮤니케이션 확인",
    confirmed: true,
  },
  {
    step: "03",
    title: "Subject Matching",
    titleKo: "전문 영역 확인",
    desc: "회화·시험·비즈니스 등 전문 영역 확인",
    confirmed: true,
  },
  {
    step: "04",
    title: "Student Matching",
    titleKo: "수강생 매칭",
    desc: "수강 목적과 학습 스타일에 맞춰 강사 연결",
    confirmed: true,
  },
];

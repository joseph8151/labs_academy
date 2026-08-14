export type TestPrep = {
  slug: string;
  code: string;
  fullName: string;
  language: string;
  intro: string;
  audience: string[];
  diagnosisAreas: string[];
  method: string;
};

export const tests: TestPrep[] = [
  {
    slug: "opic",
    code: "OPIc",
    fullName: "Oral Proficiency Interview - computer",
    language: "영어",
    intro: "실전 인터뷰 형식의 말하기 평가로, 배경설문과 콤보셋 대응 전략이 점수를 가릅니다.",
    audience: ["취업·승진에 OPIc 등급이 필요한 분", "말하기 자신감이 부족한 분"],
    diagnosisAreas: ["배경설문 답변 구조", "콤보셋 대응력", "돌발 질문 대처"],
    method: "1:1 모의 인터뷰와 답변 구조화 훈련을 병행합니다.",
  },
  {
    slug: "spa",
    code: "SPA",
    fullName: "Situational Presentation & Assessment",
    language: "영어",
    intro: "실무 상황을 가정한 발표와 대응 능력을 평가하는 시험입니다.",
    audience: ["기업 채용·평가에 SPA 점수가 필요한 분"],
    diagnosisAreas: ["상황별 발표 구성", "즉흥 대응력", "발음·억양"],
    method: "실제 시험 상황을 재현한 모의 발표와 피드백 중심 수업을 진행합니다.",
  },
  {
    slug: "teps",
    code: "TEPS",
    fullName: "Test of English Proficiency developed by Seoul National University",
    language: "영어",
    intro: "청해·문법·독해·어휘 전 영역을 정밀하게 평가하는 국내 공인 시험입니다.",
    audience: ["편입·대학원·기업 인증에 TEPS 점수가 필요한 분"],
    diagnosisAreas: ["영역별 취약 유형", "시간 배분 전략"],
    method: "영역별 취약점을 진단한 뒤 문제 유형 중심으로 학습합니다.",
  },
  {
    slug: "ielts",
    code: "IELTS",
    fullName: "International English Language Testing System",
    language: "영어",
    intro: "유학·이민에 필요한 국제 공인 영어 시험으로, 4개 영역을 균형 있게 평가합니다.",
    audience: ["유학, 이민, 해외 취업을 준비하는 분", "목표 밴드 스코어가 명확한 분"],
    diagnosisAreas: ["Speaking 유창성", "Writing Task 1·2 구성", "Listening/Reading 정확도"],
    method: "목표 밴드에 맞춰 4개 영역의 학습 비중을 개인별로 조정합니다.",
  },
  {
    slug: "toefl",
    code: "TOEFL",
    fullName: "Test of English as a Foreign Language",
    language: "영어",
    intro: "북미권 유학에 주로 활용되는 학술 영어 능력 평가 시험입니다.",
    audience: ["북미권 대학·대학원 진학을 준비하는 분"],
    diagnosisAreas: ["Integrated Task 대응력", "Academic Vocabulary", "Speaking 논리 구성"],
    method: "학술적 주제에 대한 읽기·듣기·말하기·쓰기 통합 훈련을 진행합니다.",
  },
  {
    slug: "hsk",
    code: "HSK",
    fullName: "Hanyu Shuiping Kaoshi",
    language: "중국어",
    intro: "중국 정부 공인 중국어능력시험으로, 급수별 어휘와 문형이 명확히 구분됩니다.",
    audience: ["중국어 공인 급수가 필요한 분"],
    diagnosisAreas: ["급수별 어휘·문형", "듣기·독해 정확도"],
    method: "목표 급수의 출제 유형에 맞춰 어휘와 문형을 단계적으로 학습합니다.",
  },
  {
    slug: "tsc",
    code: "TSC",
    fullName: "Test of Spoken Chinese",
    language: "중국어",
    intro: "중국어 말하기 능력을 평가하는 시험으로, 실전 발화 훈련이 핵심입니다.",
    audience: ["중국어 말하기 공인 점수가 필요한 분"],
    diagnosisAreas: ["발음·성조", "즉흥 답변 구성력"],
    method: "실전 유형별 모의 테스트와 발화 교정을 반복합니다.",
  },
  {
    slug: "jlpt",
    code: "JLPT",
    fullName: "Japanese-Language Proficiency Test",
    language: "일본어",
    intro: "일본 정부 공인 일본어능력시험으로, 급수별 문자·어휘·문법·독해·청해를 평가합니다.",
    audience: ["일본어 공인 급수가 필요한 분"],
    diagnosisAreas: ["급수별 문법·어휘", "독해·청해 정확도"],
    method: "목표 급수 기준으로 취약 영역을 우선 보완합니다.",
  },
  {
    slug: "jpt",
    code: "JPT",
    fullName: "Japanese Proficiency Test",
    language: "일본어",
    intro: "청해와 독해 중심으로 실용 일본어 능력을 평가하는 시험입니다.",
    audience: ["기업 채용·인증에 JPT 점수가 필요한 분"],
    diagnosisAreas: ["청해 정확도", "독해 속도"],
    method: "실전 문제풀이와 청해 훈련을 병행합니다.",
  },
  {
    slug: "dele",
    code: "DELE",
    fullName: "Diplomas de Español como Lengua Extranjera",
    language: "스페인어",
    intro: "스페인 정부 공인 스페인어 능력 인증 시험입니다.",
    audience: ["스페인어 공인 자격이 필요한 분"],
    diagnosisAreas: ["말하기·쓰기 표현력", "듣기·읽기 정확도"],
    method: "목표 등급에 맞춘 영역별 집중 학습을 진행합니다.",
  },
];

export function getTestBySlug(slug: string): TestPrep | undefined {
  return tests.find((t) => t.slug === slug);
}

export type ReviewCategory = "conversation" | "business" | "test-prep" | "online";

export type StudentStory = {
  id: string;
  category: ReviewCategory;
  categoryLabel: string;
  /** Program or test slug this review relates to, when a confident match exists. */
  program?: string;
  /** Branch is left unset when the review itself doesn't specify one — never guessed. */
  branch?: string;
  lessonType?: string;
  before: string;
  goal: string;
  focus: string[];
  reviewText: string;
  reviewDate?: string;
  /** Only reviews LABS has confirmed as actual, completed students may be marked true. */
  verified: boolean;
};

export const studentStories: StudentStory[] = [
  {
    id: "review-01",
    category: "conversation",
    categoryLabel: "영어회화",
    program: "conversation",
    lessonType: "Private 1:1",
    before: "회의에서 알고 있는 표현도 바로 나오지 않음",
    goal: "실무 회의에서 자연스럽게 의견 전달",
    focus: ["Business Meeting Practice", "Sentence Structure Correction", "Speaking Fluency"],
    reviewText:
      "회사에서 영어로 회의를 해야 하는 일이 늘어나면서 등록했습니다. 영어를 아예 못하는 건 아니었는데 막상 회의에 들어가면 알고 있는 표현도 바로 나오지 않는 게 가장 큰 문제였어요. 1:1이라 제가 실제 회사에서 사용하는 자료나 상황을 중심으로 연습할 수 있어서 좋았습니다. 특히 선생님이 제가 자주 틀리는 문장 구조를 계속 잡아주셔서 예전보다 훨씬 자연스럽게 말하게 됐어요. 단기간에 집중해서 실무 영어를 정리하고 싶은 직장인에게 잘 맞는 것 같습니다.",
    verified: true,
  },
  {
    id: "review-02",
    category: "conversation",
    categoryLabel: "영어회화",
    program: "conversation",
    lessonType: "Private 1:1",
    before: "그룹수업에서는 실제로 말하는 시간이 많지 않았음",
    goal: "교환학생을 앞둔 회화 자신감",
    focus: ["Speaking Practice", "Confidence in Speaking", "Sentence Building"],
    reviewText:
      "교환학생을 앞두고 회화 때문에 시작했습니다. 그룹수업은 다른 사람들 눈치를 보느라 제가 실제로 말하는 시간이 생각보다 적었는데 1:1은 수업 내내 제가 계속 말해야 해서 확실히 다르더라고요. 처음에는 한 문장 만드는 것도 오래 걸렸는데 지금은 틀려도 일단 영어로 이야기하는 습관이 생겼어요.",
    verified: true,
  },
  {
    id: "review-03",
    category: "conversation",
    categoryLabel: "영어회화",
    program: "private-intensive",
    lessonType: "Private Intensive · 20H",
    before: "장기간 학원에 다니기 어려운 출국 일정",
    goal: "출장 미팅·제품 설명·식사 자리에서 바로 쓸 수 있는 회화",
    focus: ["Business Meeting Expressions", "Product Explanation", "Business Dining Conversation"],
    reviewText:
      "출국을 앞두고 20시간 집중과정으로 들었습니다. 장기간 학원에 다니기 어려워서 짧게 집중할 수 있는 과정이 가장 마음에 들었습니다. 공항, 호텔 같은 일반적인 여행영어보다 미팅, 제품 설명, 식사 자리에서 사용하는 표현을 중심으로 준비해주셔서 실제 출장에서도 바로 활용했습니다.",
    verified: true,
  },
  {
    id: "review-04",
    category: "business",
    categoryLabel: "비즈니스 영어",
    program: "business",
    lessonType: "Private 1:1",
    before: "이메일은 가능하지만 화상회의에서 즉석 의견 설명이 어려움",
    goal: "해외 본사와의 화상회의 대응력",
    focus: ["Meeting Simulation", "Disagreement Expressions", "Follow-up Questions"],
    reviewText:
      "해외 본사와 화상회의를 자주 하는데 이메일은 작성할 수 있어도 즉석에서 의견을 설명하는 게 어려웠습니다. 수업에서 제가 실제로 하는 업무를 기준으로 회의 시뮬레이션을 많이 했어요. 단순 회화보다 반대 의견을 부드럽게 말하는 방법이나 질문을 되받아치는 표현까지 배울 수 있어서 만족했습니다.",
    verified: true,
  },
  {
    id: "review-05",
    category: "business",
    categoryLabel: "비즈니스 영어",
    program: "business",
    lessonType: "Private Intensive · 40H",
    before: "문법은 맞지만 비즈니스 상황에서 전문적으로 들리지 않는 표현",
    goal: "해외 투자자 미팅 피칭 준비",
    focus: ["Pitching Practice", "Company Introduction", "Business Tone Correction"],
    reviewText:
      "해외 투자자 미팅을 준비하면서 40시간 과정을 신청했습니다. 제가 실제로 사용하는 회사 소개 자료를 바탕으로 피칭 연습을 했다는 점이 가장 좋았습니다. 문법적으로 맞는 영어보다 비즈니스 상황에서 어떻게 말해야 전문적으로 들리는지를 많이 교정받았습니다.",
    verified: true,
  },
  {
    id: "review-06",
    category: "business",
    categoryLabel: "비즈니스 영어",
    program: "business",
    lessonType: "Private 1:1",
    before: "높은 영어 점수에 비해 바이어 앞에서는 표현이 단순해짐",
    goal: "해외 바이어 대상 표현력 확장",
    focus: ["Expression Variety", "Speech Habit Correction", "Business Vocabulary"],
    reviewText:
      "영어점수는 높은 편이었지만 해외 바이어 앞에서는 표현이 너무 단순해지는 게 고민이었습니다. 제 말버릇이나 반복해서 사용하는 표현까지 바로바로 수정해주시니까 수업을 거듭할수록 표현의 폭이 넓어졌습니다. 해외영업이나 외국계 회사 다니는 분들에게 특히 추천하고 싶어요.",
    verified: true,
  },
  {
    id: "review-07",
    category: "test-prep",
    categoryLabel: "OPIc",
    program: "opic",
    lessonType: "Private 1:1",
    before: "스크립트만 암기해 예상치 못한 질문에 바로 막힘",
    goal: "취업에 필요한 OPIc 점수",
    focus: ["Answer Structuring", "Impromptu Response", "Speaking Practice"],
    reviewText:
      "취업 때문에 급하게 오픽 점수가 필요해서 시작했습니다. 혼자 공부할 때는 스크립트만 외웠는데 예상하지 못한 질문이 나오면 바로 막혔어요. 수업에서는 답변 구조를 먼저 잡고 어떤 질문이 나와도 응용할 수 있도록 계속 연습했습니다. 암기보다는 실제로 말하는 연습을 많이 한 게 도움이 됐습니다.",
    verified: true,
  },
  {
    id: "review-08",
    category: "test-prep",
    categoryLabel: "OPIc",
    program: "opic",
    lessonType: "Private 1:1",
    before: "답변이 짧고 취약한 문제 유형이 있었음",
    goal: "승진에 필요한 IH 이상 등급",
    focus: ["Weak Question Types", "Experience-based Answers", "Answer Elaboration"],
    reviewText:
      "승진 때문에 IH 이상이 필요해서 등록했습니다. 퇴근 후 시간이 많지 않아 필요한 부분만 집중적으로 하고 싶었는데 1:1이라 제가 부족한 문제 유형을 중심으로 수업할 수 있었습니다. 이전에는 답변이 너무 짧았는데 경험 설명과 이유를 자연스럽게 연결하는 방법을 배우면서 답변이 훨씬 풍부해졌습니다.",
    verified: true,
  },
  {
    id: "review-09",
    category: "test-prep",
    categoryLabel: "OPIc",
    program: "opic",
    lessonType: "Private 1:1",
    before: "오픽을 처음 준비해 시작점을 몰랐음",
    goal: "목표 등급에 맞는 답변 구성",
    focus: ["Level Diagnosis", "Answer Length & Expressions", "Real-time Feedback"],
    reviewText:
      "오픽을 처음 준비해서 어디서부터 시작해야 할지 몰랐습니다. 선생님이 제 현재 수준을 먼저 확인하고 목표 등급에 필요한 답변 길이와 표현을 정해주셨습니다. 특히 매번 답변하고 바로 피드백을 받으니까 혼자 녹음하면서 공부할 때보다 훨씬 효율적이었습니다.",
    verified: true,
  },
  {
    id: "review-10",
    category: "test-prep",
    categoryLabel: "SPA",
    program: "spa",
    lessonType: "Private 1:1",
    before: "일반 영어회화와 다른 시험 영어에 익숙하지 않음",
    goal: "사내 SPA 시험 대비",
    focus: ["Key-point Summarizing", "Timed Practice", "Test Simulation"],
    reviewText:
      "사내 SPA 시험 때문에 수강했습니다. 일반 영어회화하고 시험 영어는 확실히 다르더라고요. 질문을 듣자마자 핵심을 정리해서 답변하는 연습을 반복했고 실제 시험처럼 시간 제한을 두고 연습했습니다. 짧은 기간에 시험 감각을 잡는 데 도움이 많이 됐습니다.",
    verified: true,
  },
  {
    id: "review-11",
    category: "test-prep",
    categoryLabel: "영어 인터뷰",
    program: "private-intensive",
    lessonType: "Private 1:1",
    before: "예상 질문을 암기하는 방식으로만 준비",
    goal: "외국계 기업 영어면접 대비",
    focus: ["Answers Based on Real Experience", "Professional Expression Correction", "Mock Interview"],
    reviewText:
      "외국계 기업 영어면접을 준비했습니다. 인터넷에 있는 예상 질문을 외우는 방식이 아니라 제 경력과 실제 업무 경험에 맞춰 답변을 만들어주셔서 좋았습니다. 같은 내용이라도 영어로 어떻게 표현하면 더 전문적으로 들리는지 하나씩 수정해주셨습니다.",
    verified: true,
  },
  {
    id: "review-12",
    category: "test-prep",
    categoryLabel: "IELTS",
    program: "ielts",
    lessonType: "Private 1:1",
    before: "Speaking과 Writing이 계속 목표 점수에 도달하지 못함",
    goal: "영국 유학을 위한 IELTS 목표 점수",
    focus: ["Writing Feedback", "Paragraph Structuring", "Speaking Practice"],
    reviewText:
      "IELTS Speaking과 Writing이 계속 목표 점수에 안 나와서 등록했습니다. 특히 Writing은 혼자 공부할 때 무엇이 문제인지 정확히 알기 어려웠는데 문단 구성부터 표현까지 세세하게 첨삭받을 수 있었습니다. Speaking도 실제 시험처럼 계속 질문을 받으면서 연습해서 시험장에서 긴장이 훨씬 덜했습니다.",
    verified: true,
  },
  {
    id: "review-13",
    category: "test-prep",
    categoryLabel: "IELTS",
    program: "ielts",
    lessonType: "Private 1:1",
    before: "회사와 병행하며 준비할 시간 관리가 어려움",
    goal: "해외 대학원 진학을 위한 IELTS 준비",
    focus: ["Priority Area Planning", "Writing Focus", "Speaking Focus"],
    reviewText:
      "회사 다니면서 IELTS를 준비해야 해서 시간 관리가 가장 큰 문제였습니다. 처음 상담할 때부터 필요한 영역과 상대적으로 괜찮은 영역을 나눠서 계획을 잡았습니다. 모든 과목을 똑같이 공부하는 게 아니라 부족한 Writing과 Speaking에 시간을 집중할 수 있어서 효율적이었습니다.",
    verified: true,
  },
  {
    id: "review-14",
    category: "test-prep",
    categoryLabel: "IELTS",
    program: "ielts",
    lessonType: "Private 1:1",
    before: "오랜만에 다시 시작하는 영어 공부에 대한 부담",
    goal: "캐나다 이민에 필요한 IELTS 점수",
    focus: ["Fundamentals Review", "Error Explanation", "Test-focused Practice"],
    reviewText:
      "오랜만에 영어 공부를 다시 시작하다 보니 처음에는 걱정이 많았습니다. 선생님이 제 수준에 맞게 기초부터 다시 잡아주면서도 시험에 필요한 부분을 놓치지 않아 좋았습니다. 정답만 알려주는 수업보다는 제가 왜 틀리는지 설명해주는 방식이라 오래 기억에 남았습니다.",
    verified: true,
  },
  {
    id: "review-15",
    category: "test-prep",
    categoryLabel: "TOEFL",
    program: "toefl",
    lessonType: "Private 1:1",
    before: "혼자 준비하며 Speaking·Writing 점수가 오르지 않음",
    goal: "미국 대학 진학을 위한 TOEFL Speaking·Writing 향상",
    focus: ["Immediate Feedback", "Timed Response Practice", "Answer Structuring"],
    reviewText:
      "토플을 혼자 준비하다가 Speaking과 Writing 점수가 잘 오르지 않아 시작했습니다. 제가 말한 답변을 바로 듣고 어떤 부분이 부족한지 알려주셔서 좋았습니다. 특히 제한시간 안에 생각을 정리하고 말하는 연습을 많이 해서 예전보다 답변 시작이 빨라졌습니다.",
    verified: true,
  },
  {
    id: "review-16",
    category: "test-prep",
    categoryLabel: "TOEFL",
    program: "toefl",
    lessonType: "Private 1:1",
    before: "Reading은 괜찮지만 Speaking이 약함",
    goal: "교환학생 준비를 위한 TOEFL Speaking 향상",
    focus: ["Speaking-focused Practice", "Real-time Correction", "Repetition Practice"],
    reviewText:
      "Reading은 괜찮았는데 Speaking이 약해서 집중적으로 수업을 받았습니다. 1:1이라 수업시간 대부분을 실제 답변 연습에 사용할 수 있다는 게 가장 큰 장점이었습니다. 틀린 표현을 바로 고치고 다시 말하게 해주셔서 제 습관을 고치는 데 도움이 됐어요.",
    verified: true,
  },
  {
    id: "review-17",
    category: "test-prep",
    categoryLabel: "TOEFL",
    program: "toefl",
    lessonType: "Private Intensive · 60H",
    before: "목표 점수까지 준비 시간이 많지 않음",
    goal: "단기간 내 TOEFL 목표 점수 달성",
    focus: ["Level Diagnosis", "Weak Area Focus", "Time-efficient Study Plan"],
    reviewText:
      "목표 점수까지 시간이 많지 않아서 60시간 집중과정을 선택했습니다. 처음부터 네 영역을 전부 똑같이 공부하기보다 진단 후 약한 영역을 중심으로 시간 배분을 해주셨습니다. 단기간 준비하는 사람에게는 이런 방식이 훨씬 효율적인 것 같습니다.",
    verified: true,
  },
  {
    id: "review-18",
    category: "business",
    categoryLabel: "영어 프레젠테이션",
    program: "business",
    lessonType: "Private 1:1",
    before: "발표문을 그대로 번역해 부자연스러운 표현",
    goal: "해외 컨퍼런스 발표 준비",
    focus: ["Natural Phrasing", "Pronunciation & Stress", "Delivery Pacing"],
    reviewText:
      "해외 컨퍼런스 발표가 잡혀 급하게 수업을 신청했습니다. 발표문을 그냥 영어로 번역하는 것이 아니라 실제로 말했을 때 자연스럽도록 문장을 바꿔주셨습니다. 발음, 강세, 끊어 읽는 부분까지 같이 연습해서 발표 때 훨씬 안정적으로 진행할 수 있었습니다.",
    verified: true,
  },
  {
    id: "review-19",
    category: "business",
    categoryLabel: "영어 프레젠테이션",
    program: "business",
    lessonType: "Private 1:1",
    before: "전공 발표를 일반 회화 수업에서 준비할 수 있을지에 대한 우려",
    goal: "영어 논문 발표 및 Q&A 대응",
    focus: ["Presentation Flow", "Q&A Response Practice", "Impromptu Answering"],
    reviewText:
      "영어 논문 발표 때문에 들었습니다. 전공 내용이라 일반 회화 수업에서 준비하기 어렵지 않을까 걱정했는데 발표 흐름과 Q&A 대응을 중심으로 수업을 진행해주셨습니다. 예상 질문에 즉석으로 답하는 연습이 실제 발표에서 가장 도움이 됐습니다.",
    verified: true,
  },
  {
    id: "review-20",
    category: "conversation",
    categoryLabel: "중국어 회화",
    program: "chinese",
    lessonType: "Private 1:1",
    before: "HSK 공부는 했지만 실제 대화는 거의 불가능",
    goal: "중국 거래처 담당 업무 회화",
    focus: ["Business Expressions", "Repetition Practice", "Practical Conversation"],
    reviewText:
      "중국 거래처 담당을 맡으면서 중국어 회화를 다시 시작했습니다. 예전에 HSK 공부를 했지만 실제 대화는 거의 못하는 상태였어요. 수업에서는 업무 상황에서 자주 쓰는 표현을 중심으로 반복해서 말하게 해주셔서 실용적이었습니다.",
    verified: true,
  },
  {
    id: "review-21",
    category: "conversation",
    categoryLabel: "중국어 회화",
    program: "chinese",
    lessonType: "Private 1:1",
    before: "문법·단어는 알지만 실전 대화 경험이 부족",
    goal: "중국 유학 생활에 필요한 실전 회화",
    focus: ["Immersive Conversation", "Speaking Speed", "Practical Vocabulary"],
    reviewText:
      "문법이나 단어보다 실제 중국에서 생활할 때 사용할 수 있는 회화를 집중적으로 배우고 싶어서 등록했습니다. 선생님과 계속 중국어로 대화하다 보니 처음에는 부담스러웠지만 적응하고 나니 말하는 속도가 확실히 빨라졌습니다.",
    verified: true,
  },
  {
    id: "review-22",
    category: "test-prep",
    categoryLabel: "HSK",
    program: "hsk",
    lessonType: "Private 1:1",
    before: "독해와 쓰기에서 반복적으로 점수를 잃음",
    goal: "HSK 5급 목표 점수",
    focus: ["Error Pattern Analysis", "Mock Test Practice", "Time Management"],
    reviewText:
      "HSK 5급을 혼자 준비하다가 독해와 쓰기에서 계속 점수를 잃어서 수강했습니다. 문제를 많이 푸는 것보다 제가 자주 틀리는 유형을 분석해서 알려주시는 방식이 좋았습니다. 시험을 앞두고는 실전 문제 중심으로 진행해서 시간 배분도 많이 좋아졌습니다.",
    verified: true,
  },
  {
    id: "review-23",
    category: "test-prep",
    categoryLabel: "HSK",
    program: "hsk",
    lessonType: "Private 1:1",
    before: "준비 기간이 길지 않아 효율적인 학습이 필요",
    goal: "취업 서류용 HSK 점수",
    focus: ["Frequently Tested Vocabulary", "Focused Range Study", "Short-term Prep"],
    reviewText:
      "취업 서류 때문에 HSK 점수가 필요해서 단기과정을 선택했습니다. 공부할 시간이 길지 않았는데 시험에 자주 나오는 어휘와 유형을 중심으로 정리해주셨습니다. 혼자 여러 교재를 보는 것보다 정해진 범위를 집중적으로 공부할 수 있어서 편했습니다.",
    verified: true,
  },
  {
    id: "review-24",
    category: "conversation",
    categoryLabel: "일본어 회화",
    program: "japanese",
    lessonType: "Private 1:1",
    before: "일상회화는 가능하지만 경어·업무 표현이 부족",
    goal: "일본 본사 직원과의 업무 커뮤니케이션",
    focus: ["Business Japanese", "Keigo (경어)", "Workplace Scenario Practice"],
    reviewText:
      "일본 본사 직원들과 대화할 일이 많아져서 비즈니스 일본어를 시작했습니다. 일상회화는 어느 정도 가능했지만 경어와 회사에서 사용하는 표현이 많이 부족했습니다. 실제 업무 상황을 설정해서 연습하다 보니 표현이 훨씬 자연스러워졌습니다.",
    verified: true,
  },
  {
    id: "review-25",
    category: "conversation",
    categoryLabel: "일본어 회화",
    program: "japanese",
    lessonType: "Private 1:1",
    before: "시험보다 실생활 회화를 배우고 싶었음",
    goal: "여행·일상에서 활용 가능한 일본어 회화",
    focus: ["Travel & Culture Topics", "Conversational Practice", "Free Talk"],
    reviewText:
      "시험보다는 회화를 배우고 싶어서 등록했습니다. 교재만 따라가는 수업이 아니라 제가 관심 있는 여행, 음식, 문화 이야기를 많이 하면서 배우니까 수업이 지루하지 않았습니다. 일본 여행 갔을 때 예전보다 먼저 말을 걸 수 있게 된 게 가장 큰 변화였습니다.",
    verified: true,
  },
  {
    id: "review-26",
    category: "test-prep",
    categoryLabel: "JLPT",
    program: "jlpt",
    lessonType: "Private 1:1",
    before: "혼자 공부하면 오답 해설만 보고 넘어감",
    goal: "JLPT N2 목표 점수",
    focus: ["Similar Expression Comparison", "Timed Practice", "Grammar & Reading Focus"],
    reviewText:
      "JLPT N2를 준비하면서 문법과 독해를 집중적으로 공부했습니다. 혼자 공부하면 틀린 문제의 해설만 보고 넘어갔는데 수업에서는 비슷한 표현의 차이까지 같이 설명해주셔서 이해가 잘 됐습니다. 시험 직전에는 시간 안에 문제를 푸는 연습도 많이 했습니다.",
    verified: true,
  },
  {
    id: "review-27",
    category: "conversation",
    categoryLabel: "스페인어 회화",
    program: "spanish",
    lessonType: "Private 1:1",
    before: "완전 초보로 시작에 대한 부담",
    goal: "남미 근무를 위한 기본 생활 회화",
    focus: ["Practical Sentences", "Basic Greetings", "Everyday Conversation"],
    reviewText:
      "남미 근무를 앞두고 스페인어를 처음 시작했습니다. 완전 초보라 걱정했는데 처음부터 문법을 너무 어렵게 들어가기보다 실제 생활에서 필요한 문장을 중심으로 가르쳐주셔서 부담이 적었습니다. 짧은 기간이지만 기본적인 인사나 생활회화는 자신 있게 할 수 있게 됐습니다.",
    verified: true,
  },
  {
    id: "review-28",
    category: "conversation",
    categoryLabel: "스페인어 회화",
    program: "spanish",
    lessonType: "Private 1:1",
    before: "앱으로 공부해 단어는 알지만 입으로 나오지 않음",
    goal: "스페인 여행을 위한 실전 회화",
    focus: ["Q&A Practice", "Speaking Output", "Conversational Fluency"],
    reviewText:
      "스페인 여행을 계기로 스페인어를 제대로 배우고 싶어서 시작했습니다. 앱으로 공부할 때는 단어만 알고 입으로 나오지 않았는데 1:1 수업에서는 계속 질문을 받고 대답해야 하니까 자연스럽게 말하는 연습이 됐습니다.",
    verified: true,
  },
  {
    id: "review-29",
    category: "business",
    categoryLabel: "단기 Intensive",
    program: "private-intensive",
    lessonType: "Private Intensive · 40H",
    before: "갑작스러운 해외 발령으로 준비 기간이 한 달 남짓",
    goal: "회의·전화·자기소개·스몰토크 등 실무 영어 빠르게 준비",
    focus: ["Meetings", "Phone Calls", "Self-introduction", "Small Talk"],
    reviewText:
      "갑자기 해외 발령이 결정돼 한 달 정도밖에 준비할 시간이 없었습니다. 그래서 장기과정보다는 40시간 집중수업을 선택했습니다. 제게 필요한 회의, 전화, 자기소개, 스몰토크를 중심으로 커리큘럼을 구성해주셔서 좋았습니다. 영어 전체를 공부한다기보다 당장 필요한 영어를 빠르게 준비한다는 느낌이었습니다.",
    verified: true,
  },
  {
    id: "review-30",
    category: "conversation",
    categoryLabel: "단기 Intensive",
    program: "private-intensive",
    lessonType: "Private Intensive · 80H",
    before: "일주일에 한두 번 수업으로는 감각이 더디게 붙음",
    goal: "방학 기간 집중적으로 영어 실력 향상",
    focus: ["Consistent Instructor", "Frequent Practice", "Personalized Feedback"],
    reviewText:
      "방학 동안 영어를 제대로 해보고 싶어서 80시간 과정을 들었습니다. 일주일에 한두 번 수업을 받을 때보다 짧은 기간 동안 자주 영어를 사용하니까 확실히 감각이 빨리 붙었습니다. 선생님도 계속 같은 분과 수업하면서 제 약점을 알고 계셔서 수업이 진행될수록 피드백이 더 구체적이었습니다. 영어를 몇 년씩 끌기보다 방학이나 휴직 기간에 집중적으로 올리고 싶은 사람에게 잘 맞을 것 같아요.",
    verified: true,
  },
];

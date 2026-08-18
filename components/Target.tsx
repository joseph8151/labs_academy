import FadeUp from "./FadeUp";

const iconShared = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.4,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

function GradCapIcon() {
  return (
    <svg viewBox="0 0 40 40" {...iconShared}>
      <path d="M20 10 L36 17 L20 24 L4 17 Z" />
      <path d="M11 20.5 V29 C11 31 15 33 20 33 C25 33 29 31 29 29 V20.5" />
      <path d="M36 17 V26" />
    </svg>
  );
}

function BriefcaseIcon() {
  return (
    <svg viewBox="0 0 40 40" {...iconShared}>
      <rect x="6" y="14" width="28" height="18" rx="2" />
      <path d="M15 14 V10 C15 8.5 16.5 7 18 7 H22 C23.5 7 25 8.5 25 10 V14" />
      <line x1="6" y1="21" x2="34" y2="21" />
    </svg>
  );
}

function ChecklistIcon() {
  return (
    <svg viewBox="0 0 40 40" {...iconShared}>
      <rect x="9" y="6" width="22" height="28" rx="2" />
      <path d="M14 15 L17 18 L23 12" />
      <line x1="14" y1="24" x2="26" y2="24" />
      <line x1="14" y1="29" x2="22" y2="29" />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg viewBox="0 0 40 40" {...iconShared}>
      <circle cx="20" cy="20" r="14" />
      <ellipse cx="20" cy="20" rx="6" ry="14" />
      <line x1="6" y1="20" x2="34" y2="20" />
    </svg>
  );
}

function ChatIcon() {
  return (
    <svg viewBox="0 0 40 40" {...iconShared}>
      <path d="M7 11 H33 C34 11 35 12 35 13 V25 C35 26 34 27 33 27 H15 L9 32 V27 H7 C6 27 5 26 5 25 V13 C5 12 6 11 7 11 Z" />
    </svg>
  );
}

function SchoolIcon() {
  return (
    <svg viewBox="0 0 40 40" {...iconShared}>
      <path d="M6 34 V17 L20 8 L34 17 V34" />
      <line x1="6" y1="34" x2="34" y2="34" />
      <rect x="17" y="24" width="6" height="10" />
      <line x1="20" y1="8" x2="20" y2="3" />
      <path d="M20 3 L25 4" />
    </svg>
  );
}

const TARGETS = [
  {
    icon: GradCapIcon,
    title: "유학·해외 대학 진학을 준비하는 학생",
    desc: "토플, 아이엘츠, SAT, AP, IB 등 해외 대학 입시에 필요한 과목을 체계적으로 준비하고 싶은 분",
  },
  {
    icon: BriefcaseIcon,
    title: "해외 취업·이직을 준비하는 직장인",
    desc: "비즈니스 영어, 프레젠테이션, 영어면접 등 실무에 바로 적용 가능한 영어가 필요한 분",
  },
  {
    icon: ChecklistIcon,
    title: "OPIc·IELTS·TOEFL 등 시험 대비가 필요한 분",
    desc: "목표 점수 달성을 위한 전략과 개인별 맞춤 커리큘럼이 필요한 분",
  },
  {
    icon: GlobeIcon,
    title: "제2외국어를 체계적으로 배우고 싶은 분",
    desc: "중국어, 일본어, 스페인어, 독일어, 프랑스어 등 다양한 언어를 전문적으로 배우고 싶은 분",
  },
  {
    icon: ChatIcon,
    title: "일상 회화부터 실전 회화까지 향상하고 싶은 분",
    desc: "자연스럽고 자신감 있는 표현과 원어민 수준의 회화력을 키우고 싶은 분",
  },
  {
    icon: SchoolIcon,
    title: "국제학교 내신 관리 및 유학 준비를 하는 학생",
    desc: "IB, AP, A-Level 등 국제학교 내신 관리와 유학 준비를 동시에 체계적으로 하고 싶은 분",
  },
];

export default function Target() {
  return (
    <section className="bg-[var(--color-primary-bg)] py-16 md:py-24 lg:py-32">
      <div className="container-labs md:px-10">
        <FadeUp>
          <h2 className="section-heading max-w-lg">
            이런 분들에게
            <br />
            LABS를 추천합니다.
          </h2>
          <p className="body-copy mt-4">목표에 맞는 1:1 맞춤 수업으로 필요한 부분에 집중합니다.</p>
        </FadeUp>

        <div className="mt-12 grid grid-cols-1 gap-x-10 gap-y-8 md:mt-14 md:grid-cols-2">
          {TARGETS.map((t, i) => (
            <FadeUp key={t.title} delay={Math.min(i * 0.05, 0.24)}>
              <div className="flex items-start gap-5 border-t border-[var(--color-border)] pt-6">
                <span className="mt-1 h-10 w-10 shrink-0 text-[var(--color-gold)]">
                  <t.icon />
                </span>
                <div>
                  <p className="text-[15px] font-semibold leading-snug text-[var(--color-deep-brown)]">{t.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted)]">{t.desc}</p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>

        <FadeUp delay={0.3}>
          <div className="mt-10 flex flex-col items-start gap-4 rounded-[var(--radius-md)] border border-[var(--color-border)] bg-white p-6 sm:flex-row sm:items-center sm:gap-6 sm:p-7">
            <span className="h-9 w-9 shrink-0 text-[var(--color-dark-gold)]">
              <SchoolIcon />
            </span>
            <div>
              <p className="text-[15px] font-semibold text-[var(--color-deep-brown)]">국제학교 내신 관리 &amp; 과목 수업</p>
              <p className="mt-1.5 text-sm leading-relaxed text-[var(--color-muted)]">
                IB, AP, A-Level 등 국제학교 커리큘럼에 맞춘 1:1 맞춤 수업으로 내신 성적 관리와 심화 학습을 지원합니다.
              </p>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

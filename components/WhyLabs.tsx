import FadeUp from "./FadeUp";

const STEPS = [
  {
    number: "01",
    title: "Consultation",
    titleKo: "목표 상담",
    desc: "목적과 필요한 영역 파악",
    examples: ["해외대학 입시", "교환학생", "SAT", "토플", "아이엘츠", "PTE", "듀오링고", "제2외국어"],
  },
  {
    number: "02",
    title: "Level Analysis",
    titleKo: "현재 수준 확인",
    desc: "필요한 영역을 중심으로 현재 수준 진단",
    examples: ["Speaking", "Listening", "Vocabulary", "Grammar", "Pronunciation", "Writing"],
  },
  {
    number: "03",
    title: "Instructor Match",
    titleKo: "강사 및 수업 방향 결정",
    desc: "전문 영역에 맞는 강사 배정과 수업 방향 결정",
    examples: [],
  },
  {
    number: "04",
    title: "Private Lesson",
    titleKo: "1:1 수업 진행",
    desc: "설계된 방향에 따른 1:1 집중 수업",
    examples: [],
  },
  {
    number: "05",
    title: "Feedback",
    titleKo: "수업 피드백 및 방향 조정",
    desc: "진행 상황에 따라 학습 방향을 조정",
    examples: [],
  },
];

export default function WhyLabs() {
  return (
    <section id="how-it-works" className="bg-[var(--color-primary-bg)] py-16 md:py-24 lg:py-32">
      <div className="container-labs md:px-10">
        <FadeUp>
          <p className="section-label">HOW IT WORKS</p>
          <h2 className="section-heading mt-5 max-w-xl">
            상담에서 첫 수업까지,
            <br />
            이렇게 시작합니다.
          </h2>
        </FadeUp>

        <div className="mt-14 grid grid-cols-1 gap-0 md:mt-16 lg:grid-cols-5 lg:gap-6">
          {STEPS.map((step, i) => (
            <FadeUp key={step.number} delay={Math.min(i * 0.06, 0.24)}>
              <div
                className={`flex items-start gap-5 border-t border-[var(--color-border)] py-6 lg:flex-col lg:items-start lg:gap-0 lg:border-t-0 lg:border-l lg:py-0 lg:pl-6 ${
                  i % 2 === 1 ? "lg:mt-10" : ""
                }`}
              >
                <span className="font-serif text-3xl italic leading-none text-[var(--color-gold)] lg:text-4xl">
                  {step.number}
                </span>
                <div className="lg:mt-6">
                  <h3 className="text-[15px] font-semibold text-[var(--color-deep-brown)]">{step.title}</h3>
                  <p className="mt-0.5 text-xs tracking-wide text-[var(--color-dark-gold)]">{step.titleKo}</p>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--color-muted)]">{step.desc}</p>
                  {step.examples.length > 0 && (
                    <ul className="mt-4 flex flex-wrap gap-1.5">
                      {step.examples.map((ex) => (
                        <li
                          key={ex}
                          className="rounded-[var(--radius-xs)] border border-[var(--color-border)] px-2 py-1 text-[11px] text-[var(--color-text)]"
                        >
                          {ex}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

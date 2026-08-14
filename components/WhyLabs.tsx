import FadeUp from "./FadeUp";

const STEPS = [
  { number: "01", title: "Consultation", titleKo: "상담", desc: "목적과 필요한 영역 파악" },
  { number: "02", title: "Level Analysis", titleKo: "레벨 진단", desc: "현재 수준과 강·약점 진단" },
  { number: "03", title: "Curriculum Design", titleKo: "커리큘럼 설계", desc: "개인별 수업 방향 설계" },
  { number: "04", title: "Private Lesson", titleKo: "1:1 수업", desc: "1:1 집중 수업 진행" },
  { number: "05", title: "Feedback", titleKo: "피드백", desc: "피드백과 학습 방향 조정" },
];

export default function WhyLabs() {
  return (
    <section className="bg-[var(--color-primary-bg)] py-20 md:py-28">
      <div className="container-labs md:px-10">
        <FadeUp>
          <p className="section-label">WHY LABS</p>
          <h2 className="mt-5 max-w-xl text-[1.75rem] leading-[1.35] font-semibold text-[var(--color-deep-brown)] sm:text-3xl md:text-[2.25rem]">
            그룹에 나를 맞추지 않고,
            <br />
            수업이 나에게 맞춰집니다.
          </h2>
        </FadeUp>

        <div className="mt-16 grid grid-cols-1 gap-0 md:mt-20 lg:grid-cols-5 lg:gap-6">
          {STEPS.map((step, i) => (
            <FadeUp key={step.number} delay={i * 0.08}>
              <div
                className={`flex items-start gap-5 border-t border-[var(--color-border)] py-6 lg:flex-col lg:items-start lg:gap-0 lg:border-t-0 lg:border-l lg:py-0 lg:pl-6 ${
                  i % 2 === 1 ? "lg:mt-10" : ""
                }`}
              >
                <span className="font-serif text-3xl italic leading-none text-[var(--color-gold)] lg:text-4xl">
                  {step.number}
                </span>
                <div className="lg:mt-6">
                  <h3 className="text-base font-semibold text-[var(--color-deep-brown)]">{step.title}</h3>
                  <p className="mt-0.5 text-xs tracking-wide text-[var(--color-dark-gold)]">{step.titleKo}</p>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--color-muted)]">{step.desc}</p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

import FadeUp from "./FadeUp";

const TIMELINE = [
  { time: "10 min", label: "Previous Lesson Review" },
  { time: "15 min", label: "Key Expressions" },
  { time: "20 min", label: "Speaking Practice" },
  { time: "10 min", label: "Real-time Correction" },
  { time: "5 min", label: "Feedback & Assignment" },
];

export default function SampleLessonPlan() {
  return (
    <section className="relative overflow-hidden bg-white py-16 md:py-24 lg:py-32">
      <span
        aria-hidden
        className="bg-numeral pointer-events-none -right-6 top-4 hidden text-[16rem] md:block lg:text-[22rem]"
      >
        60
      </span>
      <div className="container-labs md:px-10 relative">
        <FadeUp>
          <p className="section-label">SAMPLE LESSON PLAN</p>
          <h2 className="mt-5 max-w-lg text-[1.75rem] font-semibold leading-[1.15] tracking-[-0.01em] text-[var(--color-deep-brown)] sm:text-[2.5rem]">
            60 MINUTES.
            <br />
            FULLY YOURS.
          </h2>
          <p className="body-copy mt-4">1:1 수업은 이런 방식으로 진행될 수 있습니다.</p>
        </FadeUp>

        <div className="mt-12 grid grid-cols-1 gap-10 md:mt-14 lg:grid-cols-12 lg:gap-8">
          <FadeUp delay={0.06} className="lg:col-span-5">
            <div className="card-plain shadow-elevated h-full p-8 sm:p-9">
              <p className="text-xs font-semibold tracking-[0.18em] text-[var(--color-dark-gold)]">
                BUSINESS ENGLISH
              </p>
              <div className="mt-6">
                <p className="text-xs font-semibold text-[var(--color-muted)]">Goal</p>
                <p className="mt-1 text-[15px] text-[var(--color-deep-brown)]">
                  해외 화상회의에서 자연스럽게 의견 전달
                </p>
              </div>
              <div className="mt-5">
                <p className="text-xs font-semibold text-[var(--color-muted)]">Focus</p>
                <p className="mt-1 text-[15px] text-[var(--color-deep-brown)]">
                  Speaking · Business Vocabulary · Pronunciation · Presentation
                </p>
              </div>
            </div>
          </FadeUp>

          <FadeUp delay={0.12} className="lg:col-span-7">
            <p className="text-xs font-semibold tracking-[0.18em] text-[var(--color-dark-gold)]">60 MIN LESSON</p>
            <div className="mt-5 flex flex-col">
              {TIMELINE.map((t, i) => (
                <div
                  key={t.label}
                  className={cnRow(i)}
                >
                  <span className="w-16 shrink-0 text-sm font-semibold text-[var(--color-dark-gold)]">{t.time}</span>
                  <span className="text-[15px] text-[var(--color-text)]">{t.label}</span>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>

        <FadeUp delay={0.16}>
          <p className="mt-10 max-w-2xl text-xs leading-relaxed text-[var(--color-muted)]">
            위 내용은 이해를 돕기 위한 수업 구성 예시이며 실제 수업은 수강생의 목표와 수준에 따라 달라질 수
            있습니다.
          </p>
        </FadeUp>
      </div>
    </section>
  );
}

function cnRow(i: number) {
  return `flex items-center gap-4 py-3.5 ${i !== 0 ? "border-t border-[var(--color-border)]" : ""}`;
}

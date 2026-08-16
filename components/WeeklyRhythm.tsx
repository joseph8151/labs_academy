import FadeUp from "./FadeUp";

const WEEK = [
  { day: "MON", activity: "Private Lesson" },
  { day: "TUE", activity: "Vocabulary & Assignment" },
  { day: "WED", activity: "Private Lesson" },
  { day: "THU", activity: "Speaking Practice" },
  { day: "FRI", activity: "Private Lesson" },
  { day: "WEEKEND", activity: "Review & Feedback" },
];

const THIS_WEEK_FOCUS = ["Presentation Opening", "Natural Connecting Expressions", "Pronunciation — R / L"];

export default function WeeklyRhythm() {
  return (
    <section className="bg-[var(--color-primary-bg)] py-16 md:py-24 lg:py-32">
      <div className="container-labs md:px-10">
        <FadeUp>
          <p className="section-label">SAMPLE WEEKLY RHYTHM</p>
          <h2 className="section-heading mt-5 max-w-lg">
            40시간이면,
            <br />
            이런 흐름으로 진행될 수 있습니다.
          </h2>
          <p className="body-copy mt-5">
            정해진 커리큘럼을 그대로 따르기보다, 이번 주에 집중할 부분과 다음 수업의 방향을 함께 확인하며
            진행합니다.
          </p>
        </FadeUp>

        <div className="mt-12 grid grid-cols-1 gap-6 md:mt-14 lg:grid-cols-12 lg:gap-8">
          <FadeUp delay={0.06} className="lg:col-span-6">
            <div className="card-plain h-full p-7 sm:p-8">
              <p className="text-xs font-semibold tracking-[0.18em] text-[var(--color-dark-gold)]">A WEEK AT LABS</p>
              <div className="mt-5 flex flex-col">
                {WEEK.map((w, i) => (
                  <div
                    key={w.day}
                    className={`flex items-center gap-4 py-3 ${i !== 0 ? "border-t border-[var(--color-border)]" : ""}`}
                  >
                    <span className="w-20 shrink-0 text-xs font-semibold tracking-[0.1em] text-[var(--color-muted)]">
                      {w.day}
                    </span>
                    <span className="text-sm text-[var(--color-text)]">{w.activity}</span>
                  </div>
                ))}
              </div>
              <p className="mt-5 text-xs leading-relaxed text-[var(--color-muted)]">
                수강생의 일정과 목표에 따라 집중도를 조절합니다.
              </p>
            </div>
          </FadeUp>

          <FadeUp delay={0.12} className="lg:col-span-6">
            <div className="h-full rounded-[var(--radius-md)] border border-l-2 border-[var(--color-border)] border-l-[var(--color-gold)] bg-white p-7 sm:p-8">
              <p className="text-xs font-semibold tracking-[0.18em] text-[var(--color-dark-gold)]">
                THIS WEEK&apos;S FOCUS
              </p>
              <ul className="mt-5 flex flex-col gap-3">
                {THIS_WEEK_FOCUS.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-[var(--color-deep-brown)]">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[var(--color-gold)]" />
                    {f}
                  </li>
                ))}
              </ul>
              <div className="mt-6 border-t border-[var(--color-border)] pt-5">
                <p className="text-xs font-semibold text-[var(--color-muted)]">Next Lesson</p>
                <p className="mt-1.5 text-sm text-[var(--color-deep-brown)]">Mock Presentation</p>
              </div>
            </div>
          </FadeUp>
        </div>

        <FadeUp delay={0.18}>
          <p className="mt-8 max-w-2xl text-xs leading-relaxed text-[var(--color-muted)]">
            위 내용은 이해를 돕기 위한 예시이며, 실제 수업 일정과 주간 focus는 수강생의 목표와 진행 상황에 따라
            달라집니다.
          </p>
        </FadeUp>
      </div>
    </section>
  );
}

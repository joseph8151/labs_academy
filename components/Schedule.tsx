import FadeUp from "./FadeUp";

const TAGS = ["Morning", "Lunch Time", "After Work", "Weekend", "Online"];
const WEEKDAYS = ["S", "M", "T", "W", "T", "F", "S"];
const AVAILABLE_DAYS = new Set([3, 6, 10, 13, 17, 20, 24, 27]);

export default function Schedule() {
  return (
    <section className="bg-[var(--color-secondary-bg)] py-16 md:py-24 lg:py-32">
      <div className="container-labs md:px-10 grid grid-cols-1 gap-14 lg:grid-cols-2 lg:items-center lg:gap-20">
        <FadeUp className="order-2 lg:order-1">
          <div className="card-plain mx-auto max-w-sm p-7 sm:p-8">
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-[var(--color-deep-brown)]">Weekly Availability</span>
              <span className="h-2 w-2 rounded-full bg-[var(--color-gold)]" />
            </div>
            <div className="mt-6 grid grid-cols-7 gap-y-3 text-center">
              {WEEKDAYS.map((d, i) => (
                <span key={`${d}-${i}`} className="text-[11px] font-medium text-[var(--color-muted)]">
                  {d}
                </span>
              ))}
              {Array.from({ length: 28 }, (_, i) => i + 1).map((day) => (
                <span
                  key={day}
                  className={`mx-auto flex h-7 w-7 items-center justify-center rounded-full text-xs ${
                    AVAILABLE_DAYS.has(day)
                      ? "bg-[var(--color-gold)] font-semibold text-white"
                      : "text-[var(--color-text)]"
                  }`}
                >
                  {day}
                </span>
              ))}
            </div>
            <div className="mt-6 flex items-center gap-2 border-t border-[var(--color-border)] pt-5">
              <span className="h-2 w-2 rounded-full bg-[var(--color-gold)]" />
              <span className="text-xs text-[var(--color-muted)]">상담 가능 시간대 (예시)</span>
            </div>
          </div>
        </FadeUp>

        <FadeUp delay={0.1} className="order-1 lg:order-2">
          <p className="section-label">FLEXIBLE SCHEDULE</p>
          <h2 className="section-heading mt-5 max-w-md">
            바쁜 일정 때문에
            <br />
            공부를 포기하지 않도록.
          </h2>
          <p className="body-copy mt-6">
            직장, 학교, 출장 등 수강생의 일정을 고려하여
            <br />
            가능한 시간대를 상담하고 수업 일정을 조율합니다.
          </p>
          <div className="mt-8 flex flex-wrap gap-2.5">
            {TAGS.map((tag) => (
              <span
                key={tag}
                className="rounded-[var(--radius-sm)] border border-[var(--color-border)] px-4 py-2 text-xs font-medium tracking-wide text-[var(--color-text)]"
              >
                {tag}
              </span>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

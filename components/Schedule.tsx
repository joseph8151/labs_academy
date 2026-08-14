import FadeUp from "./FadeUp";

const TAGS = ["Morning", "Lunch Time", "After Work", "Weekend", "Online"];
const WEEKDAYS = ["S", "M", "T", "W", "T", "F", "S"];
const AVAILABLE_DAYS = new Set([3, 6, 10, 13, 17, 20, 24, 27]);

export default function Schedule() {
  return (
    <section className="bg-[var(--color-secondary-bg)] py-20 md:py-28">
      <div className="container-labs md:px-10 grid grid-cols-1 gap-14 lg:grid-cols-2 lg:items-center lg:gap-20">
        <FadeUp className="order-2 lg:order-1">
          <div className="mx-auto max-w-sm rounded-sm border border-[var(--color-border)] bg-white p-7 shadow-[0_4px_28px_-8px_rgba(44,44,44,0.08)] sm:p-8">
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
          <h2 className="mt-5 max-w-md text-[1.75rem] leading-[1.35] font-semibold text-[var(--color-deep-brown)] sm:text-3xl md:text-[2.25rem]">
            바쁜 일정 때문에
            <br />
            공부를 포기하지 않도록.
          </h2>
          <p className="mt-6 max-w-md text-[15px] leading-[1.9] text-[var(--color-muted)]">
            직장, 학교, 출장 등 수강생의 일정을 고려하여
            <br />
            가능한 시간대를 상담하고 수업 일정을 조율합니다.
          </p>
          <div className="mt-8 flex flex-wrap gap-2.5">
            {TAGS.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-[var(--color-border)] px-4 py-2 text-xs font-medium tracking-wide text-[var(--color-text)]"
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

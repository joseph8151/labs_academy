import FadeUp from "./FadeUp";

const BUCKETS = [
  { weeks: "2 WEEKS", label: "Interview Sprint", hours: "20H" },
  { weeks: "4 WEEKS", label: "Business Intensive", hours: "40H" },
  { weeks: "6–8 WEEKS", label: "Speaking Transformation", hours: "60H" },
  { weeks: "8–12 WEEKS", label: "Complete Intensive", hours: "80H" },
];

export default function DeadlinePlanner() {
  return (
    <section className="bg-[var(--color-secondary-bg)] py-16 md:py-24 lg:py-32">
      <div className="container-labs md:px-10">
        <FadeUp>
          <p className="section-label">YOUR DEADLINE. YOUR PLAN.</p>
          <h2 className="section-heading mt-5 max-w-xl">
            면접이, 출장이, 시험이
            <br />
            정해진 날짜에 다가온다면.
          </h2>
          <p className="body-copy mt-5">
            LABS는 정해진 학기가 아니라 목표일까지 남은 시간을 기준으로 학습 일정을 역산해 설계합니다. 남은 기간을
            알려주시면 필요한 학습량부터 함께 확인합니다.
          </p>
        </FadeUp>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 md:mt-14 lg:grid-cols-4">
          {BUCKETS.map((b, i) => (
            <FadeUp key={b.weeks} delay={Math.min(i * 0.06, 0.24)}>
              <div className="card-plain h-full p-6">
                <p className="font-serif text-2xl italic text-[var(--color-gold)]">{b.weeks}</p>
                <p className="mt-3 text-sm font-medium text-[var(--color-deep-brown)]">{b.label}</p>
                <p className="mt-4 text-xs font-semibold tracking-[0.14em] text-[var(--color-dark-gold)]">
                  {b.hours} INTENSIVE
                </p>
              </div>
            </FadeUp>
          ))}
        </div>

        <FadeUp delay={0.2}>
          <p className="mt-8 max-w-2xl text-xs leading-relaxed text-[var(--color-muted)]">
            위 기간과 시간 구성은 예시이며, 실제 학습 기간과 수업 밀도는 현재 실력과 개인 일정에 맞춰 상담 시 함께
            정합니다.
          </p>
        </FadeUp>
      </div>
    </section>
  );
}

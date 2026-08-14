import FadeUp from "./FadeUp";

type CompareRow = {
  group: string;
  labs: string;
};

const ROWS: CompareRow[] = [
  { group: "정해진 진도", labs: "개인 목표 중심 진도" },
  { group: "한정적인 발화 기회", labs: "충분한 Speaking Time" },
  { group: "공통 교재", labs: "실력에 맞춘 학습 자료" },
  { group: "개별 피드백의 한계", labs: "실시간 발음·표현·문장 피드백" },
  { group: "고정된 수업 시간", labs: "개인 일정에 따른 수업 설계" },
];

/**
 * Verified outcome statistics (e.g. score improvement, satisfaction rate) can be
 * plugged in here once LABS provides substantiated data — intentionally empty
 * until then so no unverifiable claim ships to the page.
 */
const VERIFIED_STAT: { label: string; value: string } | null = null;

export default function Comparison() {
  return (
    <section className="bg-[var(--color-secondary-bg)] py-20 md:py-28">
      <div className="container-labs md:px-10">
        <FadeUp>
          <p className="section-label">1:1 EDUCATION</p>
          <h2 className="mt-5 max-w-xl text-[1.75rem] leading-[1.35] font-semibold text-[var(--color-deep-brown)] sm:text-3xl md:text-[2.25rem]">
            같은 60분이라도
            <br />
            수업의 밀도는 달라질 수 있습니다.
          </h2>
        </FadeUp>

        <div className="mt-14 grid grid-cols-1 gap-6 md:mt-16 md:grid-cols-2 md:gap-8">
          <FadeUp>
            <div className="h-full rounded-sm border border-[var(--color-border)] bg-transparent p-8">
              <p className="text-xs font-semibold tracking-[0.18em] text-[var(--color-muted)]">일반적인 그룹 수업</p>
              <ul className="mt-8 flex flex-col gap-5">
                {ROWS.map((row) => (
                  <li key={row.group} className="text-[15px] leading-relaxed text-[var(--color-muted)]">
                    {row.group}
                  </li>
                ))}
              </ul>
            </div>
          </FadeUp>

          <FadeUp delay={0.1}>
            <div className="h-full border-l-2 border-[var(--color-gold)] bg-white p-8 shadow-[0_4px_28px_-8px_rgba(44,44,44,0.08)]">
              <p className="text-xs font-semibold tracking-[0.18em] text-[var(--color-dark-gold)]">LABS 1:1</p>
              <ul className="mt-8 flex flex-col gap-5">
                {ROWS.map((row) => (
                  <li key={row.labs} className="text-[15px] font-medium leading-relaxed text-[var(--color-deep-brown)]">
                    {row.labs}
                  </li>
                ))}
              </ul>
              {VERIFIED_STAT && (
                <p className="mt-8 text-sm font-semibold text-[var(--color-dark-gold)]">
                  {VERIFIED_STAT.label} {VERIFIED_STAT.value}
                </p>
              )}
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

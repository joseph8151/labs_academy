import FadeUp from "./FadeUp";

const PLAN_ROWS = [
  { label: "GOAL", value: "Business Presentation" },
  { label: "CURRENT LEVEL", value: "Intermediate" },
  { label: "FOCUS", value: "Speaking / Pronunciation / Vocabulary" },
  { label: "SCHEDULE", value: "Tue · Thu Evening" },
  { label: "METHOD", value: "Offline Private Lesson" },
];

export default function PersonalCurriculum() {
  return (
    <section className="bg-[var(--color-deep-brown)] py-20 md:py-28">
      <div className="container-labs md:px-10 grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-16">
        <FadeUp>
          <p className="text-xs font-semibold tracking-[0.22em] text-[var(--color-champagne)]">PERSONAL CURRICULUM</p>
          <h2 className="mt-6 text-[1.75rem] leading-[1.35] font-semibold text-[var(--color-secondary-bg)] sm:text-3xl md:text-[2.25rem]">
            교재보다 먼저,
            <br />
            수강생을 이해합니다.
          </h2>
          <p className="mt-7 max-w-md text-[15px] leading-[1.9] text-[#d8cfc0]">
            같은 영어회화 수업이라도
            <br />
            해외 출장 준비가 필요한 직장인과
            <br />
            외국계 기업 면접을 준비하는 취업준비생,
            <br />
            IELTS 점수가 필요한 유학생의 수업은
            <br />
            같을 수 없습니다.
          </p>
          <p className="mt-5 max-w-md text-[15px] leading-[1.9] text-[#d8cfc0]">
            LABS는 수강 목적과 현재 수준을 먼저 분석한 뒤
            <br />
            필요한 영역을 중심으로 수업 방향을 설계합니다.
          </p>
        </FadeUp>

        <FadeUp delay={0.1}>
          <div className="rounded-sm border border-[var(--color-champagne)]/25 bg-[#2f281e] p-8 sm:p-10">
            <p className="text-[11px] font-semibold tracking-[0.22em] text-[var(--color-champagne)]/70">
              PERSONAL PLAN — SAMPLE
            </p>
            <div className="mt-7 flex flex-col">
              {PLAN_ROWS.map((row, i) => (
                <div
                  key={row.label}
                  className={`flex flex-col gap-1.5 py-4 sm:flex-row sm:items-center sm:justify-between ${
                    i !== 0 ? "border-t border-[var(--color-champagne)]/15" : ""
                  }`}
                >
                  <span className="text-[11px] font-semibold tracking-[0.16em] text-[var(--color-champagne)]">
                    {row.label}
                  </span>
                  <span className="text-[15px] font-medium text-[var(--color-secondary-bg)]">{row.value}</span>
                </div>
              ))}
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

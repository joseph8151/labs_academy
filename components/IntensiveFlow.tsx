import FadeUp from "./FadeUp";

const GENERIC_FLOW = ["상담", "레벨 확인", "강사 배정", "정기 수업"];

const LABS_FLOW = [
  { en: "GOAL", ko: "목표를 먼저 확인합니다." },
  { en: "DEADLINE", ko: "목표일을 기준으로 남은 시간을 계산합니다." },
  { en: "LEVEL CHECK", ko: "현재 실력과 약점을 진단합니다." },
  { en: "20H · 40H · 60H · 80H DESIGN", ko: "필요한 시간을 설계합니다." },
  { en: "SPECIALIST MATCHING", ko: "목표에 맞는 강사를 매칭합니다." },
  { en: "1:1 INTENSIVE TRAINING", ko: "Speaking과 실시간 피드백 중심으로 수업합니다." },
  { en: "REAL-WORLD SIMULATION", ko: "실제 Meeting · Interview · Presentation 상황을 연습합니다." },
  { en: "FINAL CHECK", ko: "목표 대비 진행 상황을 최종 점검합니다." },
];

export default function IntensiveFlow() {
  return (
    <section className="py-16 md:py-24 lg:py-32" style={{ background: "var(--color-charcoal)" }}>
      <div className="container-labs md:px-10">
        <FadeUp>
          <p className="text-xs font-semibold tracking-[0.2em] text-[var(--color-gold)]">
            PRIVATE. INTENSIVE. PERSONAL.
          </p>
          <h2 className="mt-5 max-w-xl text-[1.75rem] font-semibold leading-[1.25] tracking-[-0.01em] text-white sm:text-[2.25rem]">
            무엇이 다른가,
            <br />
            흐름부터 다릅니다.
          </h2>
          <p className="mt-4 max-w-lg text-sm leading-relaxed text-[#a89f8f]">
            당신의 목표에는 종료 날짜가 있어야 합니다.
          </p>
        </FadeUp>

        <div className="mt-14 grid grid-cols-1 gap-10 md:mt-16 lg:grid-cols-12 lg:gap-8">
          <FadeUp delay={0.06} className="lg:col-span-4">
            <p className="text-xs font-semibold tracking-[0.16em] text-[#8a8378]">일반적인 1:1 흐름</p>
            <div className="mt-6 flex flex-col">
              {GENERIC_FLOW.map((step, i) => (
                <div key={step} className="flex items-center gap-4 border-l border-white/10 py-4 pl-5">
                  <span className="font-serif text-lg italic text-[#8a8378]">{String(i + 1).padStart(2, "0")}</span>
                  <span className="text-sm text-[#c8bfb2]">{step}</span>
                </div>
              ))}
            </div>
          </FadeUp>

          <FadeUp delay={0.12} className="lg:col-span-8">
            <p className="text-xs font-semibold tracking-[0.16em] text-[var(--color-gold)]">LABS INTENSIVE 흐름</p>
            <div className="mt-6 flex flex-col">
              {LABS_FLOW.map((step, i) => (
                <div
                  key={step.en}
                  className="flex items-start gap-5 border-l-2 border-[var(--color-gold)] py-5 pl-6 sm:items-center"
                >
                  <span className="font-serif text-2xl italic text-[var(--color-gold)] sm:text-3xl">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="text-[15px] font-semibold tracking-[-0.01em] text-white sm:text-lg">{step.en}</p>
                    <p className="mt-1 text-sm text-[#a89f8f]">{step.ko}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

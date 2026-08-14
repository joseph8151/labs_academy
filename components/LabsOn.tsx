import FadeUp from "./FadeUp";
import ConsultButton from "./ConsultButton";

const FEATURES = [
  "실시간 화상 1:1 수업",
  "개인별 커리큘럼",
  "실시간 피드백",
  "강사와 직접 커뮤니케이션",
  "직장·집·출장지에서도 가능",
];

export default function LabsOn() {
  return (
    <section id="labs-on" className="bg-white py-20 md:py-28">
      <div className="container-labs md:px-10 grid grid-cols-1 gap-14 lg:grid-cols-2 lg:items-center lg:gap-20">
        <FadeUp>
          <p className="section-label">LABS ON</p>
          <h2 className="mt-5 max-w-md text-[1.75rem] leading-[1.35] font-semibold text-[var(--color-deep-brown)] sm:text-3xl md:text-[2.25rem]">
            공간의 제약 없이,
            <br />
            LABS의 1:1 수업을 그대로.
          </h2>
          <ul className="mt-8 flex flex-col gap-3">
            {FEATURES.map((f) => (
              <li key={f} className="flex items-center gap-3 text-[15px] text-[var(--color-text)]">
                <span className="h-1 w-1 shrink-0 rounded-full bg-[var(--color-gold)]" />
                {f}
              </li>
            ))}
          </ul>
          <div className="mt-9">
            <ConsultButton program="labs-on">LABS ON 상담하기</ConsultButton>
          </div>
        </FadeUp>

        <FadeUp delay={0.1}>
          <div className="mx-auto max-w-md">
            <div className="rounded-t-lg border border-b-0 border-[var(--color-deep-brown)]/15 bg-[var(--color-deep-brown)] p-2.5">
              <div className="flex items-center gap-1.5 px-1.5 pb-2">
                <span className="h-2 w-2 rounded-full bg-[var(--color-champagne)]/50" />
                <span className="h-2 w-2 rounded-full bg-[var(--color-champagne)]/50" />
                <span className="h-2 w-2 rounded-full bg-[var(--color-champagne)]/50" />
              </div>
              <div className="relative aspect-video overflow-hidden bg-[#2f281e]">
                <div
                  className="absolute inset-0 opacity-30"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(135deg, #d4b896 0, #d4b896 1px, transparent 1px, transparent 28px)",
                  }}
                />
                <div className="absolute left-4 top-4 flex items-center gap-1.5 rounded-full bg-black/30 px-2.5 py-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-red-400" />
                  <span className="text-[10px] font-medium tracking-wide text-white">LIVE 1:1</span>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-serif text-2xl italic text-[var(--color-champagne)]">LABS ON</span>
                </div>
              </div>
            </div>
            <div className="h-3 rounded-b-lg bg-[var(--color-deep-brown)]/90" />
            <div className="mx-auto h-1.5 w-24 rounded-b-md bg-[var(--color-deep-brown)]/60" />
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

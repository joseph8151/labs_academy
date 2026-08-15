import Link from "next/link";
import FadeUp from "./FadeUp";

const SCENARIOS = [
  "영어 공부는 오래 했는데 회의에서는 문장이 바로 나오지 않는다면.",
  "문법은 알고 있는데 외국인 앞에서는 말이 막힌다면.",
  "OPIc이나 IELTS를 준비하지만 내 약점이 무엇인지 정확히 모르겠다면.",
  "면접이나 해외출장 날짜는 다가오는데 필요하지 않은 영역까지 공부하고 있다면.",
];

export default function WhyNow() {
  return (
    <section className="bg-[#2C2C2C] py-16 md:py-24 lg:py-32">
      <div className="container-labs md:px-10">
        <FadeUp>
          <p className="text-xs font-semibold tracking-[0.2em] text-[var(--color-champagne)]">WHY NOW?</p>
          <h2 className="mt-5 max-w-xl text-[1.75rem] font-semibold leading-[1.3] tracking-[-0.01em] text-[var(--color-primary-bg)] sm:text-[2.5rem]">
            영어를 더 오래 공부하는 것이
            <br />
            답이 아닐 수도 있습니다.
          </h2>
        </FadeUp>

        <div className="mt-12 max-w-2xl md:mt-14">
          {SCENARIOS.map((s, i) => (
            <FadeUp key={s} delay={Math.min(i * 0.08, 0.24)}>
              <p className="border-t border-white/10 py-5 text-[15px] leading-relaxed text-[#c8bfb2] sm:text-base">
                {s}
              </p>
            </FadeUp>
          ))}
        </div>

        <FadeUp delay={0.3}>
          <p className="mt-10 max-w-xl text-lg font-medium leading-relaxed text-[var(--color-primary-bg)] sm:text-xl">
            문제는 공부량보다 &ldquo;무엇을 어떻게 연습하고 있는가&rdquo;일 수 있습니다.
          </p>
          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-[#c8bfb2]">
            LABS는 수업을 시작하기 전에 먼저 목표와 필요한 영역부터 확인합니다.
          </p>
          <Link
            href="/#goal-finder"
            className="mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-champagne)] hover:text-[var(--color-gold)]"
          >
            내게 필요한 수업 확인하기 →
          </Link>
        </FadeUp>
      </div>
    </section>
  );
}

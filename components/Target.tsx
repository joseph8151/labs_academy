import FadeUp from "./FadeUp";

const TARGETS = [
  "영어를 오랫동안 공부했지만 말하기가 어려운 분",
  "외국계 기업 또는 해외 업무를 준비하는 직장인",
  "OPIc · IELTS · TOEFL 등 목표 점수가 필요한 분",
  "중국어·일본어·스페인어를 체계적으로 배우고 싶은 분",
  "그룹 수업보다 개인 피드백이 필요한 분",
  "불규칙한 일정 때문에 고정 수업이 어려운 분",
];

export default function Target() {
  return (
    <section className="bg-[var(--color-primary-bg)] py-20 md:py-28">
      <div className="container-labs md:px-10">
        <FadeUp>
          <h2 className="max-w-lg text-[1.75rem] leading-[1.35] font-semibold text-[var(--color-deep-brown)] sm:text-3xl md:text-[2.25rem]">
            이런 분들에게
            <br />
            LABS를 추천합니다.
          </h2>
        </FadeUp>

        <ul className="mt-12 grid grid-cols-1 gap-x-10 md:mt-14 md:grid-cols-2">
          {TARGETS.map((t, i) => (
            <FadeUp key={t} as="li" delay={i * 0.05}>
              <div className="flex items-start gap-4 border-t border-[var(--color-border)] py-5 last:border-b md:last:border-b-0 md:[&:nth-last-child(-n+2)]:border-b">
                <span className="mt-1 font-serif text-sm italic text-[var(--color-gold)]">{String(i + 1).padStart(2, "0")}</span>
                <p className="text-[15px] leading-relaxed text-[var(--color-text)]">{t}</p>
              </div>
            </FadeUp>
          ))}
        </ul>
      </div>
    </section>
  );
}

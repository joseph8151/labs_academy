import ConsultButton from "./ConsultButton";
import FadeUp from "./FadeUp";

const STEPS = [
  { en: "Goal Analysis", ko: "목표 분석" },
  { en: "Instructor Matching", ko: "강사 매칭" },
  { en: "Schedule Design", ko: "일정 설계" },
  { en: "Curriculum Design", ko: "개인 커리큘럼" },
  { en: "Progress Review", ko: "진행 점검" },
];

export default function MidCTA() {
  return (
    <section className="border-y border-[var(--color-border)] bg-[var(--color-secondary-bg)] py-16 md:py-20">
      <div className="container-labs md:px-10">
        <FadeUp>
          <div className="flex flex-col items-center gap-6 text-center">
            <p className="text-xs font-semibold tracking-[0.2em] text-[var(--color-dark-gold)]">
              LABS PRIVATE LANGUAGE CONCIERGE
            </p>
            <p className="max-w-md text-lg font-medium leading-relaxed text-[var(--color-deep-brown)] sm:text-xl">
              수업만 연결하는 것이 아니라,
              <br />
              목표부터 진행 점검까지 함께 관리합니다.
            </p>
          </div>
        </FadeUp>

        <FadeUp delay={0.08}>
          <div className="mx-auto mt-9 flex max-w-3xl flex-wrap items-center justify-center gap-x-2 gap-y-4">
            {STEPS.map((step, i) => (
              <div key={step.en} className="flex items-center gap-2">
                <div className="text-center">
                  <p className="text-sm font-semibold text-[var(--color-deep-brown)]">{step.en}</p>
                  <p className="mt-0.5 text-xs text-[var(--color-muted)]">{step.ko}</p>
                </div>
                {i < STEPS.length - 1 && <span className="px-1 text-[var(--color-border)]">—</span>}
              </div>
            ))}
          </div>
        </FadeUp>

        <FadeUp delay={0.14}>
          <div className="mt-9 flex justify-center">
            <ConsultButton icon>1:1 상담 신청</ConsultButton>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

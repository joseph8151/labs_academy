import FadeUp from "./FadeUp";
import { instructorStandardSteps } from "@/data/instructorStandard";

export default function InstructorStandard() {
  const steps = instructorStandardSteps.filter((s) => s.confirmed);
  if (steps.length === 0) return null;

  return (
    <div className="border-t border-[var(--color-border)] pt-14 md:pt-16">
      <FadeUp>
        <p className="section-label">INSTRUCTOR STANDARD</p>
        <h3 className="mt-5 max-w-lg text-[1.5rem] font-semibold leading-[1.3] tracking-[-0.01em] text-[var(--color-deep-brown)] sm:text-[1.85rem]">
          1:1 수업인 만큼,
          <br />
          강사 선택도 중요하게 봅니다.
        </h3>
      </FadeUp>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((s, i) => (
          <FadeUp key={s.step} delay={Math.min(i * 0.06, 0.24)}>
            <div className="border-t border-[var(--color-border)] pt-5">
              <span className="font-serif text-2xl italic text-[var(--color-gold)]">{s.step}</span>
              <h4 className="mt-2 text-[15px] font-semibold text-[var(--color-deep-brown)]">{s.title}</h4>
              <p className="mt-0.5 text-xs tracking-wide text-[var(--color-dark-gold)]">{s.titleKo}</p>
              <p className="mt-3 text-sm leading-relaxed text-[var(--color-muted)]">{s.desc}</p>
            </div>
          </FadeUp>
        ))}
      </div>
    </div>
  );
}

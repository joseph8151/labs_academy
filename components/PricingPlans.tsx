import { Check } from "lucide-react";
import ConsultButton from "./ConsultButton";
import FadeUp from "./FadeUp";
import { plans } from "@/data/plans";
import { cn } from "@/lib/utils";

export default function PricingPlans() {
  return (
    <section id="plans" className="bg-[var(--color-primary-bg)] py-16 md:py-24 lg:py-32">
      <div className="container-labs md:px-10">
        <FadeUp>
          <p className="section-label">PRIVATE INTENSIVE HOURS</p>
          <h2 className="section-heading mt-5 max-w-lg">
            필요한 만큼의 시간을
            <br />
            선택하세요.
          </h2>
          <p className="body-copy mt-5">
            LABS는 정해진 학기 대신 목표에 필요한 학습량을 20 · 40 · 60 · 80시간 단위로 설계합니다. 정확한 시간 구성은
            상담을 통해 함께 정합니다.
          </p>
        </FadeUp>

        <div className="mt-12 grid grid-cols-1 gap-6 md:mt-14 sm:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan, i) => (
            <FadeUp key={plan.id} delay={Math.min(i * 0.06, 0.24)}>
              <div
                className={cn(
                  "flex h-full flex-col rounded-[var(--radius-md)] border bg-white p-7",
                  plan.recommended ? "border-[var(--color-gold)]" : "border-[var(--color-border)]"
                )}
                style={
                  plan.recommended
                    ? { boxShadow: "0 1px 2px rgba(30,25,20,0.03), 0 10px 30px rgba(30,25,20,0.06)" }
                    : undefined
                }
              >
                {plan.recommended && (
                  <span className="mb-4 inline-block w-fit rounded-[var(--radius-xs)] bg-[var(--color-champagne)]/25 px-2.5 py-1 text-[10px] font-semibold tracking-wide text-[var(--color-dark-gold)]">
                    LABS RECOMMENDED
                  </span>
                )}
                <span className="font-serif text-3xl italic text-[var(--color-deep-brown)]">{plan.hours}</span>
                <h3 className="mt-1 text-lg font-semibold tracking-[-0.01em] text-[var(--color-deep-brown)]">
                  {plan.name}
                  <span className="ml-2 text-xs font-semibold tracking-[0.14em] text-[var(--color-dark-gold)]">
                    {plan.tagline}
                  </span>
                </h3>
                <p className="mt-1.5 text-sm leading-snug text-[var(--color-muted)]">{plan.punchline}</p>

                <ul className="mt-6 flex flex-1 flex-col gap-3">
                  {plan.goals.map((g) => (
                    <li key={g} className="flex items-start gap-2.5 text-sm text-[var(--color-text)]">
                      <Check size={16} strokeWidth={1.5} className="mt-0.5 shrink-0 text-[var(--color-dark-gold)]" />
                      {g}
                    </li>
                  ))}
                </ul>

                <p className="mt-7 text-sm font-medium text-[var(--color-muted)]">{plan.priceLabel}</p>
                <div className="mt-4">
                  <ConsultButton
                    program={plan.id}
                    variant={plan.recommended ? "gold" : "outline"}
                    className="w-full"
                  >
                    {plan.ctaLabel}
                  </ConsultButton>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>

        <FadeUp delay={0.2}>
          <p className="mt-8 max-w-2xl text-xs leading-relaxed text-[var(--color-muted)]">
            정확한 수강료는 선택하시는 지점, 언어, 강사 및 수업 시간에 따라 달라집니다. 상담 과정에서 결제 전에 전체
            수강료를 먼저 안내드립니다.
          </p>
        </FadeUp>
      </div>
    </section>
  );
}

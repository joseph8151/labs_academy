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
          <p className="section-label">CHOOSE YOUR LEARNING PLAN</p>
          <h2 className="section-heading mt-5 max-w-lg">나에게 맞는 수강 방식을 선택하세요.</h2>
        </FadeUp>

        <div className="mt-12 grid grid-cols-1 gap-6 md:mt-14 lg:grid-cols-3">
          {plans.map((plan, i) => (
            <FadeUp key={plan.id} delay={Math.min(i * 0.08, 0.24)}>
              <div
                className={cn(
                  "flex h-full flex-col rounded-[var(--radius-md)] border bg-white p-8",
                  plan.featured ? "border-[var(--color-gold)]" : "border-[var(--color-border)]"
                )}
                style={
                  plan.featured
                    ? { boxShadow: "0 1px 2px rgba(30,25,20,0.03), 0 10px 30px rgba(30,25,20,0.06)" }
                    : undefined
                }
              >
                {plan.featured && (
                  <span className="mb-4 inline-block w-fit rounded-[var(--radius-xs)] bg-[var(--color-champagne)]/25 px-2.5 py-1 text-[10px] font-semibold tracking-wide text-[var(--color-dark-gold)]">
                    MOST POPULAR
                  </span>
                )}
                <h3 className="font-serif text-2xl italic text-[var(--color-deep-brown)]">{plan.name}</h3>
                <p className="mt-2 text-sm text-[var(--color-muted)]">{plan.tagline}</p>

                <ul className="mt-6 flex flex-1 flex-col gap-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-[var(--color-text)]">
                      <Check size={16} strokeWidth={1.5} className="mt-0.5 shrink-0 text-[var(--color-dark-gold)]" />
                      {f}
                    </li>
                  ))}
                </ul>

                <p className="mt-7 text-sm font-medium text-[var(--color-muted)]">{plan.priceLabel}</p>
                <div className="mt-4">
                  <ConsultButton
                    program={plan.id}
                    variant={plan.featured ? "gold" : "outline"}
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
            정확한 수강료는 선택하시는 지점, 언어, 강사 및 수업 횟수에 따라 달라집니다. 상담 과정에서 결제 전에
            전체 수강료를 먼저 안내드립니다.
          </p>
        </FadeUp>
      </div>
    </section>
  );
}

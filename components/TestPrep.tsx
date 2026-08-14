"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { tests } from "@/data/tests";
import ConsultButton from "./ConsultButton";
import FadeUp from "./FadeUp";
import { cn } from "@/lib/utils";

export default function TestPrep() {
  const [activeSlug, setActiveSlug] = useState(tests[0].slug);
  const active = tests.find((t) => t.slug === activeSlug) ?? tests[0];

  return (
    <section id="test-prep" className="bg-[var(--color-secondary-bg)] py-16 md:py-24 lg:py-32">
      <div className="container-labs md:px-10">
        <FadeUp>
          <p className="section-label">TEST PREPARATION</p>
          <h2 className="section-heading mt-5 max-w-xl">
            시험도 결국
            <br />
            개인별 약점에서 점수가 갈립니다.
          </h2>
        </FadeUp>

        <FadeUp delay={0.08}>
          <div className="mt-12 grid grid-cols-3 gap-2.5 sm:grid-cols-5 md:mt-14 md:gap-3 lg:grid-cols-10">
            {tests.map((t) => (
              <button
                key={t.slug}
                onClick={() => setActiveSlug(t.slug)}
                className={cn(
                  "rounded-sm border px-3 py-3.5 text-center text-sm font-semibold tracking-wide transition-colors",
                  activeSlug === t.slug
                    ? "border-[var(--color-deep-brown)] bg-[var(--color-deep-brown)] text-white"
                    : "border-[var(--color-border)] bg-white text-[var(--color-text)] hover:border-[var(--color-gold)]"
                )}
              >
                {t.code}
              </button>
            ))}
          </div>
        </FadeUp>

        <FadeUp delay={0.12}>
          <div className="mt-10 border border-[var(--color-border)] bg-white p-8 sm:p-10 md:mt-12">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-start">
              <div className="max-w-lg">
                <p className="text-xs font-semibold tracking-[0.18em] text-[var(--color-dark-gold)]">{active.language}</p>
                <h3 className="mt-2 text-xl font-semibold text-[var(--color-deep-brown)] sm:text-2xl">
                  {active.code}
                  <span className="ml-2 text-sm font-normal text-[var(--color-muted)]">{active.fullName}</span>
                </h3>
                <p className="mt-4 text-[15px] leading-relaxed text-[var(--color-muted)]">{active.intro}</p>
              </div>
              <Link
                href={`/programs/${active.slug}`}
                className="inline-flex shrink-0 items-center gap-1.5 text-sm font-medium text-[var(--color-deep-brown)] hover:text-[var(--color-dark-gold)]"
              >
                {active.code} 상세 페이지
                <ArrowUpRight size={15} />
              </Link>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-8 border-t border-[var(--color-border)] pt-8 sm:grid-cols-2">
              <div>
                <p className="text-xs font-semibold tracking-[0.18em] text-[var(--color-muted)]">추천 대상</p>
                <ul className="mt-3 flex flex-col gap-2">
                  {active.audience.map((a) => (
                    <li key={a} className="text-sm text-[var(--color-text)]">
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-xs font-semibold tracking-[0.18em] text-[var(--color-muted)]">진단 영역</p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {active.diagnosisAreas.map((d) => (
                    <li
                      key={d}
                      className="rounded-[var(--radius-xs)] border border-[var(--color-border)] px-3 py-1 text-xs text-[var(--color-text)]"
                    >
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 flex flex-col items-start justify-between gap-5 border-t border-[var(--color-border)] pt-8 sm:flex-row sm:items-center">
              <p className="text-sm text-[var(--color-muted)]">{active.method}</p>
              <ConsultButton program={active.slug} size="sm">
                {active.code} 상담하기
              </ConsultButton>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";
import { languages } from "@/data/languages";
import FadeUp from "./FadeUp";
import { cn } from "@/lib/utils";

export default function Languages() {
  const [active, setActive] = useState(languages[0].slug);
  const current = languages.find((l) => l.slug === active) ?? languages[0];

  return (
    <section id="languages" className="bg-[var(--color-secondary-bg)] py-20 md:py-28">
      <div className="container-labs md:px-10">
        <FadeUp>
          <p className="section-label">LANGUAGES</p>
          <h2 className="mt-5 max-w-xl text-[1.75rem] leading-[1.35] font-semibold text-[var(--color-deep-brown)] sm:text-3xl md:text-[2.25rem]">
            다루는 언어와
            <br />
            해당 시험을 확인하세요.
          </h2>
        </FadeUp>

        <FadeUp delay={0.08}>
          <div className="mt-12 flex gap-2 overflow-x-auto pb-1 md:mt-14" role="tablist" aria-label="언어 선택">
            {languages.map((lang) => (
              <button
                key={lang.slug}
                role="tab"
                aria-selected={active === lang.slug}
                onClick={() => setActive(lang.slug)}
                className={cn(
                  "shrink-0 rounded-full border px-6 py-2.5 text-sm font-medium tracking-wide transition-colors",
                  active === lang.slug
                    ? "border-[var(--color-deep-brown)] bg-[var(--color-deep-brown)] text-white"
                    : "border-[var(--color-border)] bg-transparent text-[var(--color-text)] hover:border-[var(--color-gold)]"
                )}
              >
                {lang.name.toUpperCase()}
              </button>
            ))}
          </div>
        </FadeUp>

        <div className="mt-10 grid grid-cols-1 gap-10 border-t border-[var(--color-border)] pt-10 md:mt-12 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-4">
            <span className="font-serif text-3xl italic text-[var(--color-gold)]">{current.code}</span>
            <h3 className="mt-2 text-2xl font-semibold text-[var(--color-deep-brown)]">{current.nameKo}</h3>
            <p className="mt-3 text-sm leading-relaxed text-[var(--color-muted)]">{current.tagline}</p>
            {current.slug !== "others" ? (
              <Link
                href={`/languages/${current.slug}`}
                className="mt-6 inline-block text-sm font-medium text-[var(--color-deep-brown)] underline decoration-[var(--color-gold)] decoration-2 underline-offset-4 hover:text-[var(--color-dark-gold)]"
              >
                {current.name} 프로그램 자세히 보기
              </Link>
            ) : null}
          </div>

          <div className="md:col-span-8">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              <div>
                <p className="text-xs font-semibold tracking-[0.18em] text-[var(--color-dark-gold)]">COURSES</p>
                <ul className="mt-4 flex flex-col gap-3">
                  {current.courses.map((c) => (
                    <li key={c} className="text-[15px] text-[var(--color-text)]">
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
              {current.tests.length > 0 && (
                <div>
                  <p className="text-xs font-semibold tracking-[0.18em] text-[var(--color-dark-gold)]">TEST PREP</p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {current.tests.map((t) => (
                      <li
                        key={t}
                        className="rounded-full border border-[var(--color-border)] px-3.5 py-1.5 text-xs font-medium text-[var(--color-text)]"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

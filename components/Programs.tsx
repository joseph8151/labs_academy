import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import FadeUp from "./FadeUp";
import { programs } from "@/data/programs";

export default function Programs() {
  return (
    <section id="programs" className="bg-[var(--color-primary-bg)] py-16 md:py-24 lg:py-32">
      <div className="container-labs md:px-10">
        <FadeUp>
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="section-label">PROGRAMS</p>
              <h2 className="section-heading mt-5 max-w-xl">
                목적이 다르면,
                <br />
                수업도 달라져야 합니다.
              </h2>
            </div>
          </div>
        </FadeUp>

        {/* Mobile: horizontal swipe of program cards */}
        <div className="-mx-6 mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-2 md:hidden">
          {programs.map((program) => (
            <Link
              key={program.slug}
              href={`/programs/${program.slug}`}
              className="card-plain w-[80vw] shrink-0 snap-start p-7"
            >
              <span className="font-serif text-3xl italic text-[var(--color-gold)]">{program.number}</span>
              <h3 className="mt-3 text-2xl font-semibold text-[var(--color-deep-brown)]">{program.name}</h3>
              <p className="mt-1 text-sm text-[var(--color-muted)]">{program.nameKo}</p>
              <ul className="mt-5 flex flex-col gap-1.5">
                {program.items.slice(0, 4).map((item) => (
                  <li key={item} className="text-sm text-[var(--color-text)]">
                    {item}
                  </li>
                ))}
              </ul>
              <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-dark-gold)]">
                자세히 보기
                <ArrowUpRight size={15} />
              </span>
            </Link>
          ))}
        </div>
        <p className="mt-2 text-xs text-[var(--color-muted)] md:hidden">
          {String(1).padStart(2, "0")} ━━━ {String(programs.length).padStart(2, "0")}
        </p>

        {/* Desktop: editorial row list */}
        <div className="mt-14 hidden md:mt-16 md:block">
          {programs.map((program, i) => (
            <FadeUp key={program.slug} delay={Math.min(i * 0.06, 0.24)}>
              <div className="grid grid-cols-1 gap-6 border-t border-[var(--color-border)] py-9 last:border-b md:grid-cols-12 md:items-center md:gap-8 md:py-10">
                <div className="md:col-span-4">
                  <span className="font-serif text-2xl italic text-[var(--color-gold)]">{program.number}</span>
                  <h3 className="mt-2 text-xl font-semibold text-[var(--color-deep-brown)] sm:text-2xl">{program.name}</h3>
                  <p className="mt-1 text-sm text-[var(--color-muted)]">{program.nameKo}</p>
                </div>

                <div className="md:col-span-6">
                  <ul className="flex flex-wrap gap-x-6 gap-y-2">
                    {program.items.map((item) => (
                      <li key={item} className="text-sm text-[var(--color-text)]">
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-3 text-xs text-[var(--color-muted)]">
                    <span className="font-medium text-[var(--color-dark-gold)]">Recommended for </span>
                    {program.audience.slice(0, 2).join(" · ")}
                  </p>
                </div>

                <div className="md:col-span-2 md:text-right">
                  <Link
                    href={`/programs/${program.slug}`}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-deep-brown)] transition-colors hover:text-[var(--color-dark-gold)]"
                  >
                    자세히 보기
                    <ArrowUpRight size={15} />
                  </Link>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

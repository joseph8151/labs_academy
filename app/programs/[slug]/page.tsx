import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageHeader from "@/components/PageHeader";
import ProgramConsultCTA from "@/components/ProgramConsultCTA";
import { programs, getProgramBySlug } from "@/data/programs";
import { tests, getTestBySlug } from "@/data/tests";

export function generateStaticParams() {
  return [...programs.map((p) => ({ slug: p.slug })), ...tests.map((t) => ({ slug: t.slug }))];
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const program = getProgramBySlug(slug);
  const test = getTestBySlug(slug);

  if (program) {
    return { title: program.name, description: program.intro };
  }
  if (test) {
    return { title: `${test.code} 시험대비`, description: test.intro };
  }
  return {};
}

export default async function ProgramDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const program = getProgramBySlug(slug);
  const test = getTestBySlug(slug);

  if (program) {
    return (
      <>
        <PageHeader eyebrow={`PROGRAM ${program.number}`} title={program.name} description={program.intro} />
        <section className="py-16 md:py-20 lg:py-24">
          <div className="container-labs md:px-10 grid grid-cols-1 gap-12 md:grid-cols-12">
            <div className="md:col-span-7">
              <p className="text-xs font-semibold tracking-[0.18em] text-[var(--color-dark-gold)]">CURRICULUM</p>
              <ul className="mt-5 flex flex-col gap-3">
                {program.items.map((item) => (
                  <li key={item} className="border-t border-[var(--color-border)] py-3 text-[15px] text-[var(--color-text)] first:border-t-0 first:pt-0">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:col-span-5">
              <p className="text-xs font-semibold tracking-[0.18em] text-[var(--color-dark-gold)]">이런 분들께 추천합니다</p>
              <ul className="mt-5 flex flex-col gap-3">
                {program.audience.map((a) => (
                  <li key={a} className="text-sm leading-relaxed text-[var(--color-muted)]">
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="container-labs md:px-10 mt-16">
            <ProgramConsultCTA program={program.slug} />
          </div>
        </section>
      </>
    );
  }

  if (test) {
    return (
      <>
        <PageHeader eyebrow={`TEST PREPARATION · ${test.language}`} title={`${test.code} 대비`} description={test.intro} />
        <section className="py-16 md:py-20 lg:py-24">
          <div className="container-labs md:px-10">
            <p className="text-sm text-[var(--color-muted)]">{test.fullName}</p>

            <div className="mt-10 grid grid-cols-1 gap-10 border-t border-[var(--color-border)] pt-10 sm:grid-cols-2">
              <div>
                <p className="text-xs font-semibold tracking-[0.18em] text-[var(--color-dark-gold)]">추천 대상</p>
                <ul className="mt-4 flex flex-col gap-3">
                  {test.audience.map((a) => (
                    <li key={a} className="text-sm leading-relaxed text-[var(--color-text)]">
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-xs font-semibold tracking-[0.18em] text-[var(--color-dark-gold)]">진단 영역</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {test.diagnosisAreas.map((d) => (
                    <li key={d} className="rounded-[var(--radius-xs)] border border-[var(--color-border)] px-3.5 py-1.5 text-xs text-[var(--color-text)]">
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-10 border-t border-[var(--color-border)] pt-10">
              <p className="text-xs font-semibold tracking-[0.18em] text-[var(--color-dark-gold)]">수업 방식</p>
              <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-[var(--color-text)]">{test.method}</p>
            </div>

            <div className="mt-16">
              <ProgramConsultCTA program={test.slug} />
            </div>
          </div>
        </section>
      </>
    );
  }

  notFound();
}

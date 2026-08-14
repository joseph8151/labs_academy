import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import ProgramConsultCTA from "@/components/ProgramConsultCTA";
import { programs } from "@/data/programs";
import { tests } from "@/data/tests";

export const metadata: Metadata = {
  title: "1:1 PROGRAM",
  description: "LABS의 1:1 맞춤 어학 프로그램. 회화, 비즈니스, 시험대비, 단기 집중 과정을 확인하세요.",
};

export default function ProgramsPage() {
  return (
    <>
      <PageHeader
        eyebrow="1:1 PROGRAM"
        title="목적이 다르면, 수업도 달라져야 합니다."
        description="LABS는 회화, 비즈니스, 시험대비, 단기 집중 과정까지 개인의 목표에 맞춘 1:1 프로그램을 설계합니다."
      />

      <section className="py-16 md:py-20">
        <div className="container-labs md:px-10">
          {programs.map((program) => (
            <div
              key={program.slug}
              className="grid grid-cols-1 gap-6 border-t border-[var(--color-border)] py-9 last:border-b md:grid-cols-12 md:items-center md:gap-8 md:py-10"
            >
              <div className="md:col-span-3">
                <span className="font-serif text-2xl italic text-[var(--color-gold)]">{program.number}</span>
                <h2 className="mt-2 text-xl font-semibold text-[var(--color-deep-brown)]">{program.name}</h2>
                <p className="mt-1 text-sm text-[var(--color-muted)]">{program.nameKo}</p>
              </div>
              <div className="md:col-span-7">
                <p className="text-sm leading-relaxed text-[var(--color-muted)]">{program.intro}</p>
                <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-2">
                  {program.items.map((item) => (
                    <li key={item} className="text-sm text-[var(--color-text)]">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="md:col-span-2 md:text-right">
                <Link
                  href={`/programs/${program.slug}`}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-deep-brown)] hover:text-[var(--color-dark-gold)]"
                >
                  자세히 보기
                  <ArrowUpRight size={15} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-[var(--color-border)] bg-[var(--color-secondary-bg)] py-16 md:py-20">
        <div className="container-labs md:px-10">
          <p className="section-label">TEST PREPARATION</p>
          <h2 className="mt-4 text-xl font-semibold text-[var(--color-deep-brown)] sm:text-2xl">시험별 상세 안내</h2>
          <div className="mt-8 grid grid-cols-2 gap-2.5 sm:grid-cols-4 md:grid-cols-5">
            {tests.map((t) => (
              <Link
                key={t.slug}
                href={`/programs/${t.slug}`}
                className="rounded-sm border border-[var(--color-border)] bg-white px-4 py-4 text-center text-sm font-semibold text-[var(--color-text)] transition-colors hover:border-[var(--color-gold)]"
              >
                {t.code}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container-labs md:px-10">
          <ProgramConsultCTA program="programs" />
        </div>
      </section>
    </>
  );
}

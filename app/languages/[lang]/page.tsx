import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import ProgramConsultCTA from "@/components/ProgramConsultCTA";
import { languages, getLanguageBySlug } from "@/data/languages";
import { tests } from "@/data/tests";

export function generateStaticParams() {
  return languages.map((l) => ({ lang: l.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const language = getLanguageBySlug(lang);
  if (!language) return {};
  return { title: `${language.nameKo} 1:1 수업`, description: language.tagline };
}

export default async function LanguagePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const language = getLanguageBySlug(lang);
  if (!language) notFound();

  const relatedTests = tests.filter((t) => language.tests.includes(t.code));

  return (
    <>
      <PageHeader eyebrow={`LANGUAGE · ${language.code}`} title={`${language.nameKo} 1:1 수업`} description={language.tagline} />

      <section className="py-16 md:py-20 lg:py-24">
        <div className="container-labs md:px-10 grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="text-xs font-semibold tracking-[0.18em] text-[var(--color-dark-gold)]">COURSES</p>
            <ul className="mt-5 flex flex-col gap-3">
              {language.courses.map((c) => (
                <li key={c} className="border-t border-[var(--color-border)] py-3 text-[15px] text-[var(--color-text)] first:border-t-0 first:pt-0">
                  {c}
                </li>
              ))}
            </ul>
          </div>

          {relatedTests.length > 0 && (
            <div className="md:col-span-7">
              <p className="text-xs font-semibold tracking-[0.18em] text-[var(--color-dark-gold)]">TEST PREPARATION</p>
              <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {relatedTests.map((t) => (
                  <Link
                    key={t.slug}
                    href={`/programs/${t.slug}`}
                    className="border border-[var(--color-border)] bg-white p-5 transition-colors hover:border-[var(--color-gold)]"
                  >
                    <p className="text-base font-semibold text-[var(--color-deep-brown)]">{t.code}</p>
                    <p className="mt-1.5 text-xs leading-relaxed text-[var(--color-muted)]">{t.intro}</p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="container-labs md:px-10 mt-16">
          <ProgramConsultCTA program={language.slug} />
        </div>
      </section>
    </>
  );
}

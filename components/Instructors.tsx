import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import FadeUp from "./FadeUp";
import { instructors } from "@/data/instructors";

export default function Instructors() {
  return (
    <section id="instructors" className="bg-[var(--color-primary-bg)] py-20 md:py-28">
      <div className="container-labs md:px-10">
        <FadeUp>
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="section-label">INSTRUCTORS</p>
              <h2 className="mt-5 max-w-xl text-[1.75rem] leading-[1.35] font-semibold text-[var(--color-deep-brown)] sm:text-3xl md:text-[2.25rem]">
                누구에게 배우느냐까지
                <br />
                1:1 교육의 일부입니다.
              </h2>
              <p className="mt-5 max-w-md text-[15px] leading-relaxed text-[var(--color-muted)]">
                수강 목적과 학습 스타일을 고려하여 적합한 강사를 연결합니다.
              </p>
            </div>
            <Link
              href="/instructors"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-deep-brown)] hover:text-[var(--color-dark-gold)]"
            >
              전체 강사진 보기
              <ArrowUpRight size={15} />
            </Link>
          </div>
        </FadeUp>

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden border border-[var(--color-border)] bg-[var(--color-border)] sm:grid-cols-2 md:mt-16 lg:grid-cols-4">
          {instructors.map((instructor, i) => (
            <FadeUp key={instructor.id} delay={i * 0.06} className="bg-[var(--color-primary-bg)] p-7">
              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[var(--color-gold)]/50 font-serif text-lg italic text-[var(--color-gold)]">
                {instructor.language.slice(0, 2).toUpperCase()}
              </div>
              <p className="mt-5 inline-block rounded-full bg-[var(--color-champagne)]/25 px-2.5 py-0.5 text-[10px] font-semibold tracking-wide text-[var(--color-dark-gold)]">
                SAMPLE
              </p>
              <h3 className="mt-3 text-[15px] font-semibold text-[var(--color-deep-brown)]">{instructor.type}</h3>
              <p className="mt-1 text-xs text-[var(--color-muted)]">{instructor.language}</p>
              <p className="mt-4 text-[11px] text-[var(--color-text)]">{instructor.focusAreas.join(" · ")}</p>
              <p className="mt-4 text-xs leading-relaxed text-[var(--color-muted)]">{instructor.bio}</p>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

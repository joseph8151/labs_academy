import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import ConsultButton from "./ConsultButton";
import FadeUp from "./FadeUp";
import InstructorStandard from "./InstructorStandard";
import { instructors } from "@/data/instructors";

const MATCH_INPUTS = ["Goal", "Level", "Schedule", "Specialty"];

export default function Instructors() {
  return (
    <section id="instructors" className="bg-[var(--color-primary-bg)] py-16 md:py-24 lg:py-32">
      <div className="container-labs md:px-10">
        <FadeUp>
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="section-label">INSTRUCTORS</p>
              <h2 className="section-heading mt-5 max-w-xl">
                누구에게 배우느냐까지
                <br />
                1:1 교육의 일부입니다.
              </h2>
              <p className="body-copy mt-5">수강 목적과 학습 스타일을 고려하여 적합한 강사를 연결합니다.</p>
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

        <div className="-mx-6 mt-14 flex snap-x snap-mandatory gap-3 overflow-x-auto px-6 pb-2 sm:mx-0 sm:grid sm:snap-none sm:grid-cols-2 sm:gap-px sm:overflow-visible sm:border sm:border-[var(--color-border)] sm:bg-[var(--color-border)] sm:px-0 sm:pb-0 md:mt-16 lg:grid-cols-4">
          {instructors.map((instructor, i) => (
            <FadeUp
              key={instructor.id}
              delay={Math.min(i * 0.06, 0.24)}
              className="w-[78vw] shrink-0 snap-start bg-[var(--color-primary-bg)] p-7 sm:w-auto sm:shrink"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[var(--color-gold)]/50 font-serif text-lg italic text-[var(--color-gold)]">
                {instructor.language.slice(0, 2).toUpperCase()}
              </div>
              <p className="mt-5 inline-block rounded-[var(--radius-xs)] bg-[var(--color-champagne)]/25 px-2.5 py-0.5 text-[10px] font-semibold tracking-wide text-[var(--color-dark-gold)]">
                SAMPLE
              </p>
              <h3 className="mt-3 text-[15px] font-semibold text-[var(--color-deep-brown)]">{instructor.type}</h3>
              <p className="mt-1 text-xs text-[var(--color-muted)]">{instructor.language}</p>
              <p className="mt-4 text-[11px] text-[var(--color-text)]">{instructor.focusAreas.join(" · ")}</p>
              <p className="mt-4 text-xs leading-relaxed text-[var(--color-muted)]">{instructor.bio}</p>
            </FadeUp>
          ))}
        </div>

        <div className="mt-16 md:mt-20">
          <InstructorStandard />
        </div>

        <FadeUp delay={0.1}>
          <div className="mt-14 border-t border-[var(--color-border)] pt-12 md:mt-16">
            <p className="text-xs font-semibold tracking-[0.2em] text-[var(--color-dark-gold)]">NOT JUST A TEACHER</p>
            <h3 className="mt-3 text-xl font-semibold text-[var(--color-deep-brown)] sm:text-2xl">
              강사 배정이 아니라, 맞는 강사를 연결합니다.
            </h3>

            <div className="mt-8 flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:gap-4">
              <div className="flex flex-wrap gap-2">
                {MATCH_INPUTS.map((p) => (
                  <span
                    key={p}
                    className="rounded-[var(--radius-xs)] border border-[var(--color-border)] bg-white px-3 py-1.5 text-xs font-medium text-[var(--color-text)]"
                  >
                    {p}
                  </span>
                ))}
              </div>
              <ArrowRight size={16} className="hidden shrink-0 -rotate-90 text-[var(--color-gold)] sm:block sm:rotate-0" />
              <span className="rounded-[var(--radius-sm)] bg-[var(--color-deep-brown)] px-4 py-2 text-xs font-semibold tracking-[0.1em] text-[var(--color-secondary-bg)]">
                LABS MATCHING
              </span>
              <ArrowRight size={16} className="hidden shrink-0 -rotate-90 text-[var(--color-gold)] sm:block sm:rotate-0" />
              <span className="text-sm font-medium text-[var(--color-deep-brown)]">Your Instructor</span>
            </div>

            <div className="mt-10 flex flex-col items-start gap-6 border-t border-[var(--color-border)] pt-8 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-md text-sm leading-relaxed text-[var(--color-muted)]">
                상담 후 목표와 일정을 확인하고, 그에 맞는 강사 프로필을 안내해 드립니다.
              </p>
              <ConsultButton icon program="instructor-match" className="shrink-0">
                내게 맞는 강사 추천받기
              </ConsultButton>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

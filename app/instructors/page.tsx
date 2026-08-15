import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ProgramConsultCTA from "@/components/ProgramConsultCTA";
import InstructorStandard from "@/components/InstructorStandard";
import { instructors } from "@/data/instructors";

export const metadata: Metadata = {
  title: "Instructors",
  description: "LABS는 수강 목적과 학습 스타일을 고려하여 적합한 강사를 연결합니다.",
};

export default function InstructorsPage() {
  return (
    <>
      <PageHeader
        eyebrow="INSTRUCTORS"
        title="누구에게 배우느냐까지 1:1 교육의 일부입니다."
        description="수강 목적과 학습 스타일을 고려하여 적합한 강사를 연결합니다."
      />

      <section className="py-16 md:py-20 lg:py-24">
        <div className="container-labs md:px-10">
          <div className="card-plain mb-10 bg-[var(--color-secondary-bg)] p-5 text-xs leading-relaxed text-[var(--color-muted)]">
            현재 등록된 강사 프로필은 실제 데이터가 확정되기 전까지 표시되는 개발용 SAMPLE 데이터입니다. 실명, 학력,
            경력 정보는 검증된 자료가 확보된 이후 게재됩니다.
          </div>

          <div className="grid grid-cols-1 gap-px overflow-hidden border border-[var(--color-border)] bg-[var(--color-border)] sm:grid-cols-2 lg:grid-cols-4">
            {instructors.map((instructor) => (
              <div key={instructor.id} className="bg-white p-7">
                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[var(--color-gold)]/50 font-serif text-xl italic text-[var(--color-gold)]">
                  {instructor.language.slice(0, 2).toUpperCase()}
                </div>
                <p className="mt-5 inline-block rounded-[var(--radius-xs)] bg-[var(--color-champagne)]/25 px-2.5 py-0.5 text-[10px] font-semibold tracking-wide text-[var(--color-dark-gold)]">
                  SAMPLE
                </p>
                <h2 className="mt-3 text-[15px] font-semibold text-[var(--color-deep-brown)]">{instructor.type}</h2>
                <p className="mt-1 text-xs text-[var(--color-muted)]">{instructor.language}</p>

                <dl className="mt-4 flex flex-col gap-2 border-t border-[var(--color-border)] pt-4 text-xs">
                  <Row label="Specialty" value={instructor.focusAreas.join(" · ")} />
                  {instructor.teachingExperience && (
                    <Row label="Teaching Experience" value={instructor.teachingExperience} />
                  )}
                  {instructor.education && <Row label="Education" value={instructor.education} />}
                  {instructor.availablePrograms && (
                    <Row label="Available Programs" value={instructor.availablePrograms.join(" · ")} />
                  )}
                  {instructor.teachingStyle && <Row label="Teaching Style" value={instructor.teachingStyle} />}
                </dl>

                <p className="mt-4 text-xs leading-relaxed text-[var(--color-muted)]">{instructor.bio}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 md:mt-20">
            <InstructorStandard />
          </div>

          <div className="mt-16">
            <ProgramConsultCTA program="instructors" />
          </div>
        </div>
      </section>
    </>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-start justify-between gap-3">
      <dt className="shrink-0 font-medium text-[var(--color-muted)]">{label}</dt>
      <dd className="text-right text-[var(--color-text)]">{value}</dd>
    </div>
  );
}

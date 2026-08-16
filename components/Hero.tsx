import Link from "next/link";
import EditorialPanel from "./EditorialPanel";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[var(--color-primary-bg)]">
      <span
        aria-hidden
        className="pointer-events-none absolute -left-4 top-1/2 hidden -translate-y-1/2 select-none font-serif text-[26vw] font-medium italic leading-none text-[var(--color-gold)] opacity-[0.06] lg:block"
      >
        LABS
      </span>
      <div className="container-labs md:px-10 relative grid grid-cols-1 items-center gap-12 pt-16 pb-16 md:pt-20 md:pb-20 lg:grid-cols-[6fr_5fr] lg:gap-14 lg:pt-24 lg:pb-24">
        <div>
          <p className="section-label">PRIVATE 1:1 LANGUAGE EDUCATION</p>

          <h1 className="mt-6 text-[1.875rem] leading-[1.2] font-semibold tracking-[-0.02em] text-[var(--color-deep-brown)] sm:text-[2.5rem] lg:text-[3.25rem]">
            당신에게 맞춰지는
            <br />
            1:1 어학수업
          </h1>

          <p className="mt-4 font-serif text-base font-medium italic text-[var(--color-dark-gold)] sm:text-lg">
            Private Language Education, Designed Around You.
          </p>

          <p className="body-copy mt-6">
            회화, 비즈니스, 면접, 시험 준비까지.
            <br />
            현재 수준과 목표를 먼저 확인하고
            <br />한 사람을 위한 1:1 수업을 설계합니다.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-2">
            <span className="text-[11px] font-semibold tracking-[0.16em] text-[var(--color-muted)]">
              PRIVATE INTENSIVE
            </span>
            {["20H", "40H", "60H", "80H"].map((h) => (
              <span
                key={h}
                className="rounded-[var(--radius-xs)] border border-[var(--color-border)] bg-white px-2.5 py-1 text-xs font-medium text-[var(--color-deep-brown)]"
              >
                {h}
              </span>
            ))}
          </div>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/#goal-finder"
              className="inline-flex h-[52px] items-center justify-center gap-2 rounded-[var(--radius-md)] bg-[var(--color-deep-brown)] px-8 text-[15px] font-medium text-[var(--color-secondary-bg)] transition-all duration-200 ease-out hover:-translate-y-px hover:bg-[var(--color-gold)] hover:text-[var(--color-deep-brown)]"
            >
              내게 맞는 1:1 수업 찾기
            </Link>
            <Link
              href="/programs"
              className="inline-flex h-[52px] items-center justify-center gap-2 rounded-[var(--radius-md)] border border-[var(--color-deep-brown)] px-8 text-[15px] font-medium text-[var(--color-deep-brown)] transition-all duration-200 ease-out hover:-translate-y-px hover:bg-[var(--color-deep-brown)] hover:text-white"
            >
              프로그램 살펴보기
            </Link>
          </div>

          <p className="mt-4 text-xs leading-relaxed text-[var(--color-muted)]">
            상담 후 바로 등록하실 필요는 없습니다. 먼저 어떤 수업이 필요한지 확인해보세요.
          </p>

          <p className="mt-6 text-xs tracking-[0.04em] text-[var(--color-muted)]">
            영어 · 중국어 · 일본어 · 스페인어 · 시험대비 · 비즈니스
          </p>
        </div>

        <div className="relative mx-auto max-w-sm lg:mx-0 lg:max-w-none">
          <EditorialPanel eyebrow="One to One" caption="PRIVATE LESSON SPACE" illustration="one-to-one" />
          <div className="shadow-elevated absolute -bottom-6 -left-6 hidden w-48 rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-secondary-bg)] p-5 sm:block">
            <p className="text-[10px] font-semibold tracking-[0.16em] text-[var(--color-dark-gold)]">
              20 · 40 · 60 · 80H
            </p>
            <p className="mt-2 text-xs leading-relaxed text-[var(--color-deep-brown)]">
              필요한 만큼 집중하는
              <br />
              Private Intensive 1:1
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

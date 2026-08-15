import Link from "next/link";
import ConsultButton from "./ConsultButton";
import EditorialPanel from "./EditorialPanel";

export default function Hero() {
  return (
    <section className="bg-[var(--color-primary-bg)]">
      <div className="container-labs md:px-10 grid grid-cols-1 items-center gap-12 pt-16 pb-16 md:pt-20 md:pb-20 lg:grid-cols-[3fr_2fr] lg:gap-16 lg:pt-24 lg:pb-24">
        <div>
          <p className="section-label">PRIVATE 1:1 LANGUAGE EDUCATION</p>

          <h1 className="mt-6 text-[2.375rem] leading-[1.12] font-semibold tracking-[-0.02em] text-[var(--color-deep-brown)] sm:text-[3.25rem] lg:text-[4.25rem]">
            당신에게 맞춰지는
            <br />
            1:1 어학수업
          </h1>

          <p className="mt-4 font-serif text-lg font-medium italic text-[var(--color-dark-gold)] sm:text-xl">
            Private Language Education, Designed Around You.
          </p>

          <p className="body-copy mt-6">
            목표도, 실력도, 가능한 시간도 모두 다르니까.
            <br />
            LABS는 상담과 레벨 진단을 바탕으로
            <br />
            수강생 한 사람을 위한 커리큘럼을 설계합니다.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <ConsultButton size="lg" program={undefined}>
              1:1 상담 신청
            </ConsultButton>
            <Link
              href="/#goal-finder"
              className="inline-flex h-[52px] items-center justify-center gap-2 rounded-[var(--radius-md)] border border-[var(--color-deep-brown)] px-8 text-[15px] font-medium text-[var(--color-deep-brown)] transition-all duration-200 ease-out hover:-translate-y-px hover:bg-[var(--color-deep-brown)] hover:text-white"
            >
              내게 맞는 수업 찾기
            </Link>
          </div>

          <p className="mt-7 text-xs tracking-[0.04em] text-[var(--color-muted)]">
            영어 · 중국어 · 일본어 · 스페인어 · 시험대비 · 비즈니스
          </p>
        </div>

        <EditorialPanel eyebrow="One to One" caption="PRIVATE LESSON SPACE" className="mx-auto max-w-sm lg:mx-0 lg:max-w-none" />
      </div>
    </section>
  );
}

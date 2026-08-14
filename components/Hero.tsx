import Link from "next/link";
import ConsultButton from "./ConsultButton";
import EditorialPanel from "./EditorialPanel";

const TRUST_ITEMS = ["1:1 Private Lesson", "Personal Curriculum", "Flexible Schedule", "Online & Offline"];

export default function Hero() {
  return (
    <section className="bg-[var(--color-primary-bg)]">
      <div className="container-labs md:px-10 grid grid-cols-1 items-center gap-12 pt-14 pb-16 md:pt-20 md:pb-24 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:pt-24 lg:pb-28">
        <div>
          <p className="section-label">PRIVATE 1:1 LANGUAGE EDUCATION</p>

          <h1 className="mt-6 text-[2.5rem] leading-[1.18] font-semibold tracking-[-0.01em] text-[var(--color-deep-brown)] sm:text-[3.1rem] sm:leading-[1.15] lg:text-[3.5rem]">
            당신에게 맞춰지는
            <br />
            1:1 어학수업
          </h1>

          <p className="mt-3 font-serif text-lg italic text-[var(--color-dark-gold)] sm:text-xl">
            Private Language Education, Designed Around You.
          </p>

          <p className="mt-6 max-w-md text-[15px] leading-[1.9] text-[var(--color-muted)] sm:text-base">
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
              href="/programs"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--color-deep-brown)] px-8 py-4 text-sm font-medium text-[var(--color-deep-brown)] transition-all duration-200 ease-out hover:-translate-y-px hover:bg-[var(--color-deep-brown)] hover:text-white sm:text-base"
            >
              프로그램 살펴보기
            </Link>
          </div>

          <p className="mt-6 text-xs tracking-[0.04em] text-[var(--color-muted)]">
            영어 · 중국어 · 일본어 · 스페인어 · 시험대비 · 비즈니스
          </p>

          <div className="mt-14 hidden sm:block">
            <div className="hairline" />
            <div className="mt-6 flex flex-wrap gap-x-8 gap-y-3">
              {TRUST_ITEMS.map((item) => (
                <span key={item} className="text-xs font-medium tracking-[0.06em] text-[var(--color-text)]">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        <EditorialPanel eyebrow="One to One" caption="PRIVATE LESSON SPACE" className="mx-auto max-w-sm lg:mx-0 lg:max-w-none" />
      </div>
    </section>
  );
}

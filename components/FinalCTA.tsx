import Link from "next/link";
import ConsultButton from "./ConsultButton";
import FadeUp from "./FadeUp";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-[var(--color-deep-brown)] py-20 md:py-28 lg:py-36">
      <span
        aria-hidden
        className="pointer-events-none absolute -bottom-10 left-1/2 hidden -translate-x-1/2 select-none whitespace-nowrap font-serif text-[10vw] italic leading-none text-[var(--color-champagne)] opacity-[0.05] lg:block"
      >
        Your Language. Your Lesson.
      </span>
      <FadeUp>
        <div className="container-labs md:px-10 relative flex flex-col items-center text-center">
          <p className="text-xs font-semibold tracking-[0.24em] text-[var(--color-champagne)]">READY WHEN YOU ARE.</p>
          <h2 className="mt-6 max-w-xl text-[1.75rem] font-semibold leading-[1.35] tracking-[-0.01em] text-[var(--color-primary-bg)] sm:text-[2.25rem]">
            또 하나의 수업이 아니라,
            <br />
            나에게 필요한 수업을 시작하세요.
          </h2>
          <p className="mt-7 max-w-lg text-[15px] leading-[1.85] text-[#c8bfb2] sm:text-base">
            현재 수준과 목표를 알려주시면 LABS가 지금 가장 먼저 필요한 수업부터 함께 확인합니다.
          </p>

          <div className="mt-9 flex flex-col items-center gap-4 sm:flex-row">
            <ConsultButton icon size="lg" variant="light">
              지점 선택 후 카카오톡 상담
            </ConsultButton>
            <Link
              href="/#goal-finder"
              className="text-sm font-medium text-[var(--color-champagne)] underline decoration-2 underline-offset-4 hover:text-white"
            >
              내 1:1 수업 먼저 찾아보기
            </Link>
          </div>
          <p className="mt-5 text-xs text-[#a89f8f]">상담 → 수준 확인 → 강사 매칭 → 수업 시작</p>
          <p className="mt-2 text-xs font-medium text-[#c8bfb2]">상담 후 바로 등록하실 필요는 없습니다.</p>
        </div>
      </FadeUp>
    </section>
  );
}

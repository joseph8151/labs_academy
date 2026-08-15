import ConsultButton from "./ConsultButton";
import FadeUp from "./FadeUp";

export default function FinalCTA() {
  return (
    <section className="bg-[var(--color-deep-brown)] py-20 md:py-28 lg:py-36">
      <FadeUp>
        <div className="container-labs md:px-10 flex flex-col items-center text-center">
          <h2 className="max-w-xl text-[1.75rem] font-semibold leading-[1.35] tracking-[-0.01em] text-[var(--color-primary-bg)] sm:text-[2.25rem]">
            이제 영어를 더 공부할지 고민하지 마세요.
            <br />
            무엇을 공부해야 할지부터 확인하세요.
          </h2>
          <p className="mt-7 max-w-lg text-[15px] leading-[1.85] text-[#c8bfb2] sm:text-base">
            회화인지, 발음인지, 비즈니스인지, 시험인지.
            <br />
            현재 수준과 목표를 알려주시면 LABS가 지금 가장 먼저 필요한 수업부터 찾아드립니다.
          </p>

          <div className="mt-9">
            <ConsultButton icon size="lg" variant="light">
              내 1:1 수업 찾기
            </ConsultButton>
          </div>
          <p className="mt-5 text-xs text-[#a89f8f]">상담 → 수준 확인 → 강사 매칭 → 수업 시작</p>
          <p className="mt-2 text-xs font-medium text-[#c8bfb2]">
            아직 등록을 결정하지 않으셔도 됩니다. 먼저 어떤 수업이 필요한지 확인해보세요.
          </p>
        </div>
      </FadeUp>
    </section>
  );
}

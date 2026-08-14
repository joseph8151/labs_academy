import ConsultButton from "./ConsultButton";
import FadeUp from "./FadeUp";

export default function FinalCTA() {
  return (
    <section className="bg-[var(--color-deep-brown)] py-20 md:py-28 lg:py-36">
      <FadeUp>
        <div className="container-labs md:px-10 flex flex-col items-center text-center">
          <p className="text-xs font-semibold tracking-[0.22em] text-[var(--color-champagne)]">READY TO START?</p>
          <p className="mt-7 max-w-lg text-[15px] leading-[1.85] text-[#c8bfb2] sm:text-base">
            어떤 수업이 필요한지 아직 정확히 모르셔도 괜찮습니다.
            <br />
            현재 수준과 배우려는 목적을 알려주시면
            <br />
            가까운 LABS 지점에서 수업 방향을 안내해드립니다.
          </p>

          <div className="mt-9">
            <ConsultButton icon size="lg" variant="light">
              지점 선택 후 카카오톡 상담
            </ConsultButton>
          </div>
          <p className="mt-4 text-xs text-[#a89f8f]">각 지점 공식 카카오톡 상담채널로 연결됩니다.</p>
        </div>
      </FadeUp>
    </section>
  );
}

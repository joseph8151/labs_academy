import ConsultButton from "./ConsultButton";
import FadeUp from "./FadeUp";

export default function MidCTA() {
  return (
    <section className="border-y border-[var(--color-border)] bg-[var(--color-secondary-bg)] py-16 md:py-20">
      <FadeUp>
        <div className="container-labs md:px-10 flex flex-col items-center gap-6 text-center">
          <p className="max-w-md text-lg font-medium leading-relaxed text-[var(--color-deep-brown)] sm:text-xl">
            어떤 수업이 맞을지 모르겠다면,
            <br />
            먼저 목표를 알려주세요.
          </p>
          <ConsultButton icon>1:1 상담 신청</ConsultButton>
        </div>
      </FadeUp>
    </section>
  );
}

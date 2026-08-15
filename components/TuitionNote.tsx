import ConsultButton from "./ConsultButton";
import FadeUp from "./FadeUp";

export default function TuitionNote() {
  return (
    <section className="border-y border-[var(--color-border)] bg-[var(--color-secondary-bg)] py-14 md:py-16">
      <FadeUp>
        <div className="container-labs md:px-10 flex flex-col items-center gap-5 text-center">
          <p className="section-label">TUITION</p>
          <p className="max-w-md text-[15px] leading-relaxed text-[var(--color-muted)]">
            수업료는 지점, 언어, 수업 시간, 강사, 프로그램, 수강 횟수 등에 따라 달라질 수 있습니다.
          </p>
          <ConsultButton variant="outline" size="sm">
            지점별 수강료 문의
          </ConsultButton>
        </div>
      </FadeUp>
    </section>
  );
}

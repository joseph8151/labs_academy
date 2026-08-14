import FadeUp from "./FadeUp";

export default function AboutLabs() {
  return (
    <section className="bg-[var(--color-primary-bg)] py-16 md:py-24 lg:py-32">
      <div className="container-labs md:px-10 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8">
        <FadeUp className="lg:col-span-4">
          <p className="section-label">ABOUT LABS</p>
          <h2 className="section-heading mt-5">
            한 사람을 위한 수업은
            <br />
            처음부터 달라야 합니다.
          </h2>
        </FadeUp>

        <FadeUp delay={0.08} className="lg:col-span-7 lg:col-start-6">
          <p className="body-copy">
            LABS는 같은 교재와 같은 진도를 모든 수강생에게 적용하는 방식보다, 각 수강생의 현재 수준과 목적을 먼저
            이해하는 것에서 수업을 시작합니다.
          </p>
          <p className="body-copy mt-5">
            회화, 시험, 비즈니스, 면접, 해외생활 등 언어를 배우는 목적이 다른 만큼 수업의 방향과 필요한 영역도
            달라질 수 있습니다.
          </p>
          <p className="body-copy mt-5">
            상담과 진단을 바탕으로 수강생에게 필요한 학습 영역을 정리하고 담당 강사와 함께 개인별 수업 방향을
            설계합니다.
          </p>
        </FadeUp>
      </div>
    </section>
  );
}

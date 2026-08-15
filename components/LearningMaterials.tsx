import FadeUp from "./FadeUp";

export default function LearningMaterials() {
  return (
    <section className="bg-[var(--color-secondary-bg)] py-16 md:py-24 lg:py-32">
      <div className="container-labs md:px-10 grid grid-cols-1 gap-8 lg:grid-cols-12">
        <FadeUp className="lg:col-span-4">
          <p className="section-label">LEARNING MATERIALS</p>
          <h2 className="section-heading mt-5">교재에 수강생을 맞추지 않습니다.</h2>
        </FadeUp>

        <FadeUp delay={0.08} className="lg:col-span-7 lg:col-start-6">
          <p className="body-copy">
            수업 목적에 따라 기본 교재뿐 아니라 강사가 준비한 supplementary materials, Speaking topics, Vocabulary,
            Writing tasks 등 필요한 학습 자료를 함께 활용할 수 있습니다.
          </p>
        </FadeUp>
      </div>
    </section>
  );
}

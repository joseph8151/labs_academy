import EditorialPanel from "./EditorialPanel";
import FadeUp from "./FadeUp";
import type { IllustrationVariant } from "./panelIllustrations";

const SPACES: { name: string; illustration: IllustrationVariant }[] = [
  { name: "Reception", illustration: "reception" },
  { name: "Private Classroom", illustration: "classroom" },
  { name: "Consulting Area", illustration: "consulting" },
  { name: "Study Space", illustration: "study" },
];

export default function InsideLabs() {
  return (
    <section className="bg-[var(--color-primary-bg)] py-16 md:py-24 lg:py-32">
      <div className="container-labs md:px-10">
        <FadeUp>
          <p className="section-label">INSIDE LABS</p>
          <h2 className="section-heading mt-5 max-w-lg">LABS의 공간을 소개합니다.</h2>
          <p className="body-copy mt-4">지점별 실제 사진은 촬영 및 확인 후 순차적으로 공개됩니다.</p>
        </FadeUp>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 md:mt-14 lg:grid-cols-4">
          {SPACES.map((space, i) => (
            <FadeUp key={space.name} delay={Math.min(i * 0.06, 0.24)}>
              <EditorialPanel
                eyebrow={space.name}
                caption="사진 촬영 준비중"
                illustration={space.illustration}
                className="aspect-[3/4]"
              />
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

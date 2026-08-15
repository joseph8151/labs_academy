import FadeUp from "./FadeUp";

const BEFORE = ["말하기 전에 한국어로 먼저 생각한다", "아는 단어만 반복한다", "틀릴까 봐 말을 줄인다", "교재 진도는 나가지만 실제 상황에서 쓰기 어렵다"];
const DURING = ["실전 상황 Speaking", "즉각적인 표현 교정", "개인별 Vocabulary", "Pronunciation Feedback", "반복 Role Play"];
const GOALS = ["Meeting", "Interview", "Presentation", "Travel", "Test Score", "Natural Conversation"];

export default function BeforeAfter() {
  return (
    <section className="bg-[var(--color-secondary-bg)] py-16 md:py-24 lg:py-32">
      <div className="container-labs md:px-10">
        <FadeUp>
          <p className="section-label">1:1 수업료보다 먼저 확인해야 할 것</p>
          <h2 className="section-heading mt-5 max-w-xl">
            같은 60분이라도
            <br />
            나에게 집중되는 60분은 다릅니다.
          </h2>
          <p className="body-copy mt-5">
            내가 실제로 말하는 시간은 얼마나 되는지, 틀린 표현을 바로 교정받을 수 있는지, 내 목표와 관계없는 진도를
            따라가고 있지는 않은지. LABS는 정해진 진도에 수강생을 맞추기보다 수강생에게 필요한 것에 수업 시간을
            사용합니다.
          </p>
        </FadeUp>

        <div className="mt-12 grid grid-cols-1 gap-6 md:mt-14 lg:grid-cols-3">
          <FadeUp>
            <div className="card-plain h-full p-7">
              <p className="text-xs font-semibold tracking-[0.18em] text-[var(--color-muted)]">BEFORE LABS</p>
              <ul className="mt-5 flex flex-col gap-3">
                {BEFORE.map((b) => (
                  <li key={b} className="text-sm leading-relaxed text-[var(--color-muted)]">
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </FadeUp>
          <FadeUp delay={0.08}>
            <div className="h-full rounded-[var(--radius-md)] border border-l-2 border-[var(--color-border)] border-l-[var(--color-gold)] bg-white p-7">
              <p className="text-xs font-semibold tracking-[0.18em] text-[var(--color-dark-gold)]">DURING LABS</p>
              <ul className="mt-5 flex flex-col gap-3">
                {DURING.map((d) => (
                  <li key={d} className="text-sm font-medium leading-relaxed text-[var(--color-deep-brown)]">
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </FadeUp>
          <FadeUp delay={0.16}>
            <div className="card-plain h-full p-7">
              <p className="text-xs font-semibold tracking-[0.18em] text-[var(--color-muted)]">YOUR GOAL</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {GOALS.map((g) => (
                  <span
                    key={g}
                    className="rounded-[var(--radius-xs)] border border-[var(--color-border)] px-3 py-1.5 text-xs text-[var(--color-text)]"
                  >
                    {g}
                  </span>
                ))}
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

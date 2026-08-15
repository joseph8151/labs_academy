import Link from "next/link";
import FadeUp from "./FadeUp";

const CONCERNS = [
  {
    worry: "저한테 맞는 선생님인지 걱정돼요.",
    reassurance: "상담 과정에서 목표와 수업 스타일을 확인하고, 그에 맞는 강사 프로필을 안내해 드립니다.",
  },
  {
    worry: "초보인데 1:1 수업이 부담스럽지 않을까요?",
    reassurance: "현재 수준에서부터 시작하며, 수업의 속도와 난이도를 맞춰 조정합니다.",
  },
  {
    worry: "회사 일정이 자주 바뀝니다.",
    reassurance: "가능한 시간대를 상담을 통해 확인하고, 강사 일정과 조율합니다.",
  },
  {
    worry: "장기간 등록해야 하나요?",
    reassurance: "아닙니다. 상담 후 바로 등록할 필요는 없습니다.",
  },
  {
    worry: "온라인 수업도 가능한가요?",
    reassurance: "네, LABS ON을 통해 오프라인과 동일한 방식의 실시간 1:1 수업이 가능합니다.",
    href: "/labs-on",
  },
];

export default function RiskReversal() {
  return (
    <section className="bg-[var(--color-secondary-bg)] py-16 md:py-24 lg:py-28">
      <div className="container-labs md:px-10 mx-auto max-w-2xl">
        <FadeUp>
          <p className="section-label text-center">BEFORE YOU START</p>
        </FadeUp>

        <div className="mt-10 flex flex-col gap-6">
          {CONCERNS.map((c, i) => (
            <FadeUp key={c.worry} delay={Math.min(i * 0.06, 0.24)}>
              <div className="border-t border-[var(--color-border)] pt-6">
                <p className="text-[15px] font-medium italic text-[var(--color-muted)]">&ldquo;{c.worry}&rdquo;</p>
                <p className="mt-2 text-[15px] leading-relaxed text-[var(--color-deep-brown)]">
                  → {c.reassurance}
                  {c.href && (
                    <>
                      {" "}
                      <Link
                        href={c.href}
                        className="underline decoration-[var(--color-gold)] decoration-2 underline-offset-4 hover:text-[var(--color-dark-gold)]"
                      >
                        자세히 보기
                      </Link>
                    </>
                  )}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

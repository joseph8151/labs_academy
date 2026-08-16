import { Check } from "lucide-react";
import Link from "next/link";
import ConsultButton from "./ConsultButton";
import FadeUp from "./FadeUp";
import { cn } from "@/lib/utils";

const POSITIONS = [
  {
    id: "precision",
    label: "정밀 맞춤형 1:1",
    keywords: ["개인 진단", "개인별 커리큘럼", "1:1 수업", "시험 및 회화", "맞춤형 피드백"],
    description: "개인의 수준과 학습 성향을 분석해 맞춤수업을 제공하는 전통적인 프리미엄 1:1 방식.",
  },
  {
    id: "exam",
    label: "시험·유학 전문 1:1",
    keywords: ["TOEFL", "IELTS", "SAT", "유학 준비", "시험 전문 강사진"],
    description: "유학 및 공인시험 중심으로 전문성을 강화한 학업형 1:1 수업.",
  },
];

const COLUMNS = ["정밀 맞춤형 1:1", "시험·유학형 1:1", "LABS Intensive"];

const ROWS: { label: string; values: boolean[] }[] = [
  { label: "개인 1:1 수업", values: [true, true, true] },
  { label: "개인별 커리큘럼", values: [true, true, true] },
  { label: "시험 대비", values: [true, true, true] },
  { label: "회화 수업", values: [true, false, true] },
  { label: "직장인 Business Training", values: [true, false, true] },
  { label: "Deadline 기반 설계", values: [false, false, true] },
  { label: "20·40·60·80시간 선택", values: [false, false, true] },
  { label: "단기 Intensive 가능", values: [false, false, true] },
  { label: "실전 Simulation", values: [false, false, true] },
  { label: "목표별 수업시간 집중 배분", values: [false, false, true] },
  { label: "방학·휴직·출국 전 집중과정", values: [false, false, true] },
];

const USE_CASES = [
  "영어를 오래 공부했지만 말이 나오지 않는 경우",
  "시험 날짜가 얼마 남지 않은 경우",
  "외국계 면접이 갑자기 잡힌 경우",
  "해외 발령 또는 출장을 앞둔 경우",
  "방학 동안 집중해서 실력을 올리고 싶은 경우",
  "정해진 교재보다 필요한 영역을 집중하고 싶은 경우",
];

export default function CompetitiveEdge() {
  return (
    <section className="bg-[var(--color-primary-bg)] py-16 md:py-24 lg:py-32">
      <div className="container-labs md:px-10">
        <FadeUp>
          <p className="section-label">1:1을 넘어 1:1 INTENSIVE</p>
          <h2 className="section-heading mt-5 max-w-2xl">
            1:1이라는 이유만으로
            <br />
            모두 같은 수업은 아닙니다.
          </h2>
          <p className="body-copy mt-5">
            1:1 어학원에도 여러 방식이 있습니다. 맞춤수업을 넘어, LABS는 목표까지 필요한 시간과 과정을 설계합니다.
            다른 1:1이 수업 방식을 이야기할 때, LABS는 목표 날짜부터 시작합니다.
          </p>
        </FadeUp>

        {/* Positioning cards */}
        <div className="mt-12 grid grid-cols-1 gap-5 md:mt-14 lg:grid-cols-3">
          {POSITIONS.map((p, i) => (
            <FadeUp key={p.id} delay={Math.min(i * 0.06, 0.24)}>
              <div className="card-plain flex h-full flex-col p-7">
                <h3 className="text-[15px] font-semibold text-[var(--color-deep-brown)]">{p.label}</h3>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.keywords.map((k) => (
                    <span
                      key={k}
                      className="rounded-[var(--radius-xs)] border border-[var(--color-border)] px-2.5 py-1 text-xs text-[var(--color-muted)]"
                    >
                      {k}
                    </span>
                  ))}
                </div>
                <p className="mt-5 flex-1 text-sm leading-relaxed text-[var(--color-muted)]">{p.description}</p>
              </div>
            </FadeUp>
          ))}

          <FadeUp delay={0.24}>
            <div
              className="flex h-full flex-col rounded-[var(--radius-md)] p-7 text-[var(--color-primary-bg)]"
              style={{ background: "var(--color-navy)" }}
            >
              <p className="text-xs font-semibold tracking-[0.18em] text-[var(--color-gold)]">LABS</p>
              <h3 className="mt-1.5 text-[17px] font-semibold text-white">1:1 INTENSIVE</h3>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {["Goal", "Deadline", "20H · 40H · 60H · 80H", "Private Training", "Simulation", "Rapid Progress"].map(
                  (k) => (
                    <span
                      key={k}
                      className="rounded-[var(--radius-xs)] border border-white/20 px-2.5 py-1 text-xs text-[#cbd5e6]"
                    >
                      {k}
                    </span>
                  )
                )}
              </div>
              <p className="mt-5 flex-1 text-sm leading-relaxed text-[#cbd5e6]">
                LABS는 수업을 몇 개월 다닐지보다, 언제까지 무엇을 완성해야 하는지를 먼저 확인합니다. 목표와 기간에
                맞춰 필요한 수업시간을 설계하고, 필요한 영역에 학습시간을 집중합니다.
              </p>
            </div>
          </FadeUp>
        </div>

        {/* Comparison table */}
        <FadeUp delay={0.1}>
          <p className="mt-16 text-xs text-[var(--color-muted)] md:hidden">→ 옆으로 스와이프해 전체 비교표를 확인하세요</p>
          <div className="mt-3 overflow-x-auto md:mt-20">
            <table className="w-full min-w-[720px] border-collapse text-sm">
              <thead>
                <tr>
                  <th className="w-64 border-b border-[var(--color-border)] py-4 text-left text-xs font-semibold text-[var(--color-muted)]" />
                  {COLUMNS.map((c, i) => (
                    <th
                      key={c}
                      className={cn(
                        "border-b py-4 text-center text-xs font-semibold tracking-[0.06em]",
                        i === 2
                          ? "border-[var(--color-gold)] text-[var(--color-dark-gold)]"
                          : "border-[var(--color-border)] text-[var(--color-muted)]"
                      )}
                    >
                      {c}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {ROWS.map((row) => (
                  <tr key={row.label}>
                    <td className="border-b border-[var(--color-border)] py-3.5 pr-4 text-[13px] text-[var(--color-text)]">
                      {row.label}
                    </td>
                    {row.values.map((v, i) => (
                      <td
                        key={i}
                        className={cn(
                          "border-b py-3.5 text-center",
                          i === 2 ? "border-[var(--color-gold)] bg-[var(--color-champagne)]/15" : "border-[var(--color-border)]"
                        )}
                      >
                        {v ? (
                          <Check
                            size={16}
                            strokeWidth={1.75}
                            className={cn("mx-auto", i === 2 ? "text-[var(--color-dark-gold)]" : "text-[var(--color-text)]")}
                          />
                        ) : (
                          <span className="text-[var(--color-border)]">—</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </FadeUp>

        {/* Big typography line */}
        <FadeUp delay={0.14}>
          <div className="mt-16 border-t border-[var(--color-border)] pt-14 text-center md:mt-20 md:pt-16">
            <p className="text-2xl font-semibold tracking-[-0.01em] text-[var(--color-muted)] sm:text-3xl">
              맞춤형은 이제 기본입니다.
            </p>
            <p className="mt-1 text-2xl font-semibold tracking-[-0.01em] text-[var(--color-deep-brown)] sm:text-3xl md:text-4xl">
              LABS는 그 다음을 설계합니다.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 font-serif text-lg italic text-[var(--color-dark-gold)] sm:text-xl">
              {["GOAL", "DEADLINE", "HOURS", "TRAINING", "RESULT"].map((w, i, arr) => (
                <span key={w} className="flex items-center gap-3">
                  {w}
                  {i < arr.length - 1 && <span className="text-[var(--color-border)]">→</span>}
                </span>
              ))}
            </div>
          </div>
        </FadeUp>

        {/* Who this is for */}
        <FadeUp delay={0.18}>
          <div className="mt-16 md:mt-20">
            <p className="section-label">DESIGNED AROUND YOUR DEADLINE</p>
            <h3 className="mt-5 max-w-xl text-[1.5rem] font-semibold leading-[1.3] tracking-[-0.01em] text-[var(--color-deep-brown)] sm:text-[1.875rem]">
              당신에게 필요한 것은
              <br />더 긴 수강기간이 아닐 수 있습니다.
            </h3>
            <ul className="mt-8 grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
              {USE_CASES.map((c) => (
                <li key={c} className="flex items-start gap-2.5 text-sm leading-relaxed text-[var(--color-text)]">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[var(--color-gold)]" />
                  {c}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm font-medium text-[var(--color-dark-gold)]">
              수업기간이 아니라 목표까지의 거리를 줄입니다.
            </p>
          </div>
        </FadeUp>

        {/* Closing CTA */}
        <FadeUp delay={0.22}>
          <div className="mt-14 flex flex-col items-start gap-5 border-t border-[var(--color-border)] pt-10 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-md text-lg font-medium leading-relaxed text-[var(--color-deep-brown)]">
              몇 개월을 등록할지 고민하지 마세요.
              <br />
              목표까지 몇 시간이 필요한지 먼저 확인하세요.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/#plans"
                className="inline-flex h-[52px] items-center justify-center rounded-[var(--radius-md)] border border-[var(--color-deep-brown)] px-7 text-[15px] font-medium text-[var(--color-deep-brown)] transition-all duration-200 ease-out hover:-translate-y-px hover:bg-[var(--color-deep-brown)] hover:text-white"
              >
                20H·40H·60H·80H 보기
              </Link>
              <ConsultButton icon size="lg">
                1:1 Intensive 상담 신청
              </ConsultButton>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { CheckSquare, Square } from "lucide-react";
import ConsultButton from "./ConsultButton";
import FadeUp from "./FadeUp";
import { getProgramBySlug } from "@/data/programs";
import { cn } from "@/lib/utils";

const STATEMENTS = [
  { id: "s1", label: "영어로 말할 때 문장이 바로 나오지 않는다", program: "conversation" },
  { id: "s2", label: "발음과 억양 교정을 받고 싶다", program: "conversation" },
  { id: "s3", label: "외국계 회사 면접을 준비한다", program: "business" },
  { id: "s4", label: "업무 영어가 필요하다", program: "business" },
  { id: "s5", label: "OPIc 점수가 필요하다", program: "test-preparation" },
  { id: "s6", label: "IELTS / TOEFL 시험을 준비한다", program: "test-preparation" },
  { id: "s7", label: "중국어 또는 일본어를 처음 시작한다", program: "conversation" },
] as const;

export default function SelfCheck() {
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [showResult, setShowResult] = useState(false);

  const toggle = (id: string) => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
    setShowResult(false);
  };

  const recommended = useMemo(() => {
    const tally = new Map<string, number>();
    STATEMENTS.forEach((s) => {
      if (selected.has(s.id)) tally.set(s.program, (tally.get(s.program) ?? 0) + 1);
    });
    return [...tally.entries()].sort((a, b) => b[1] - a[1]).map(([slug]) => getProgramBySlug(slug));
  }, [selected]);

  return (
    <section className="bg-[var(--color-secondary-bg)] py-16 md:py-24 lg:py-32">
      <div className="container-labs md:px-10">
        <FadeUp>
          <p className="section-label">SELF CHECK</p>
          <h2 className="section-heading mt-5 max-w-lg">어떤 수업이 필요할까요?</h2>
          <p className="body-copy mt-4">아래에서 내 상황과 가까운 항목을 선택하세요. (중복 선택 가능)</p>
        </FadeUp>

        <FadeUp delay={0.08}>
          <div className="mt-10 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
            {STATEMENTS.map((s) => {
              const active = selected.has(s.id);
              return (
                <button
                  key={s.id}
                  onClick={() => toggle(s.id)}
                  className={cn(
                    "flex items-center gap-3 rounded-[var(--radius-sm)] border px-5 py-4 text-left text-sm transition-colors",
                    active
                      ? "border-[var(--color-deep-brown)] bg-white text-[var(--color-deep-brown)]"
                      : "border-[var(--color-border)] bg-white/60 text-[var(--color-text)] hover:border-[var(--color-gold)]"
                  )}
                >
                  {active ? (
                    <CheckSquare size={18} className="shrink-0 text-[var(--color-gold)]" />
                  ) : (
                    <Square size={18} className="shrink-0 text-[var(--color-muted)]" />
                  )}
                  {s.label}
                </button>
              );
            })}
          </div>

          <div className="mt-8 flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
            <button
              onClick={() => setShowResult(true)}
              disabled={selected.size === 0}
              className="inline-flex h-12 items-center justify-center rounded-[var(--radius-md)] border border-[var(--color-deep-brown)] px-7 text-sm font-medium text-[var(--color-deep-brown)] transition hover:bg-[var(--color-deep-brown)] hover:text-white disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-transparent disabled:hover:text-[var(--color-deep-brown)]"
            >
              추천 프로그램 확인하기
            </button>
            <p className="text-xs text-[var(--color-muted)]">
              * 정밀한 레벨테스트가 아닌, 간단 프로그램 추천입니다.
            </p>
          </div>
        </FadeUp>

        {showResult && recommended.length > 0 && (
          <FadeUp>
            <div className="card-plain mt-8 p-8 sm:p-10">
              <p className="text-xs font-semibold tracking-[0.18em] text-[var(--color-dark-gold)]">추천 프로그램</p>
              <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                {recommended
                  .filter((p): p is NonNullable<typeof p> => Boolean(p))
                  .map((p) => (
                    <Link
                      key={p.slug}
                      href={`/programs/${p.slug}`}
                      className="rounded-[var(--radius-sm)] border border-[var(--color-border)] bg-white px-6 py-4 text-sm font-medium text-[var(--color-deep-brown)] transition hover:border-[var(--color-gold)]"
                    >
                      {p.name}
                      <span className="ml-1.5 text-[var(--color-muted)]">· {p.nameKo}</span>
                    </Link>
                  ))}
              </div>
              <div className="mt-7">
                <ConsultButton icon program="self-check">
                  내게 맞는 수업 상담하기
                </ConsultButton>
              </div>
            </div>
          </FadeUp>
        )}
      </div>
    </section>
  );
}

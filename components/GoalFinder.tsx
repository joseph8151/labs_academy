"use client";

import { useState } from "react";
import ConsultButton from "./ConsultButton";
import FadeUp from "./FadeUp";
import { cn } from "@/lib/utils";

type GoalGroup = "study-abroad" | "career";

type GoalOption = {
  id: string;
  label: string;
  group: GoalGroup;
  program: string;
  focus: string[];
  format: string;
  href: string;
  /** Omit when no confirmed hour-range mapping exists for this goal — never guess one. */
  hourRange?: string;
};

const GROUP_LABELS: Record<GoalGroup, string> = {
  "study-abroad": "STUDY ABROAD · TEST PREP",
  career: "LANGUAGE · CAREER",
};

const OPTIONS: GoalOption[] = [
  {
    id: "study-abroad",
    label: "해외 대학·대학원",
    group: "study-abroad",
    program: "Study Abroad Intensive",
    focus: ["IELTS / TOEFL", "에세이·인터뷰 준비", "지원 일정 관리"],
    format: "Private 1:1 Intensive",
    href: "/programs/study-abroad",
    hourRange: "60–80H",
  },
  {
    id: "ielts-toefl",
    label: "IELTS / TOEFL",
    group: "study-abroad",
    program: "Private Test Prep",
    focus: ["Speaking", "Writing", "Test Strategy"],
    format: "Private 1:1",
    href: "/programs/study-abroad",
    hourRange: "40–60H",
  },
  {
    id: "duolingo-pte",
    label: "듀오링고 · PTE",
    group: "study-abroad",
    program: "Duolingo / PTE Prep",
    focus: ["Speaking", "Writing", "Reading", "Listening"],
    format: "Private 1:1",
    href: "/programs/det",
    hourRange: "20–40H",
  },
  {
    id: "sat-act",
    label: "SAT · ACT",
    group: "study-abroad",
    program: "SAT / ACT Prep",
    focus: ["Reading", "Writing", "Math"],
    format: "Private 1:1",
    href: "/programs/sat",
    hourRange: "40–80H",
  },
  {
    id: "gre-gmat",
    label: "GRE · GMAT",
    group: "study-abroad",
    program: "GRE / GMAT Prep",
    focus: ["Verbal", "Quantitative", "Analytical Writing"],
    format: "Private 1:1",
    href: "/programs/gre",
    hourRange: "40–80H",
  },
  {
    id: "ib-ap",
    label: "IB · AP · 국제학교",
    group: "study-abroad",
    program: "IB / AP School Support",
    focus: ["과목별 이해도", "내신 관리", "기출 문제 풀이"],
    format: "Private 1:1",
    href: "/programs/ib",
    hourRange: "40–80H",
  },
  {
    id: "opic",
    label: "OPIc 목표등급",
    group: "study-abroad",
    program: "OPIc Private Prep",
    focus: ["Background Survey", "Combo-set Response", "Speaking"],
    format: "Private 1:1",
    href: "/programs/opic",
    hourRange: "20–40H",
  },
  {
    id: "interview",
    label: "외국계 면접",
    group: "career",
    program: "Interview Intensive",
    focus: ["Mock Interview", "Answer Structure", "Pronunciation", "Business Vocabulary"],
    format: "Private 1:1 Intensive",
    href: "/programs/private-intensive",
    hourRange: "20–40H",
  },
  {
    id: "meeting",
    label: "영어 회의",
    group: "career",
    program: "Business Speaking 1:1",
    focus: ["Speaking", "Business Vocabulary", "Meeting Practice"],
    format: "Private 1:1",
    href: "/programs/business",
    hourRange: "40–60H",
  },
  {
    id: "presentation",
    label: "Presentation",
    group: "career",
    program: "Business Speaking 1:1",
    focus: ["Presentation", "Business Vocabulary", "Delivery"],
    format: "Private 1:1",
    href: "/programs/business",
    hourRange: "20–40H",
  },
  {
    id: "corporate",
    label: "기업 출강",
    group: "career",
    program: "기업 출강 · 임직원 교육",
    focus: ["Business Communication", "맞춤 커리큘럼"],
    format: "기업 출강 프로그램",
    href: "/programs/conversation",
  },
  {
    id: "travel",
    label: "해외 출장",
    group: "career",
    program: "Business Travel Intensive",
    focus: ["Travel English", "Business Vocabulary", "Speaking"],
    format: "Private 1:1 Intensive",
    href: "/programs/private-intensive",
    hourRange: "20–40H",
  },
  {
    id: "conversation",
    label: "일상회화",
    group: "career",
    program: "Conversation 1:1",
    focus: ["Speaking Fluency", "Vocabulary", "Expression Correction"],
    format: "Private 1:1",
    href: "/programs/conversation",
    hourRange: "40–80H",
  },
  {
    id: "pronunciation",
    label: "발음·억양",
    group: "career",
    program: "Speaking & Pronunciation",
    focus: ["Pronunciation", "Intonation", "Speaking Fluency"],
    format: "Private 1:1",
    href: "/programs/conversation",
    hourRange: "40–60H",
  },
  {
    id: "chinese",
    label: "중국어",
    group: "career",
    program: "Chinese 1:1",
    focus: ["중국어 회화", "HSK / TSC 대비"],
    format: "Private 1:1",
    href: "/languages/chinese",
  },
  {
    id: "japanese",
    label: "일본어",
    group: "career",
    program: "Japanese 1:1",
    focus: ["일본어 회화", "JLPT / JPT 대비"],
    format: "Private 1:1",
    href: "/languages/japanese",
  },
  {
    id: "spanish",
    label: "스페인어",
    group: "career",
    program: "Spanish 1:1",
    focus: ["스페인어 회화", "DELE 대비"],
    format: "Private 1:1",
    href: "/languages/spanish",
  },
];

export default function GoalFinder() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selected = OPTIONS.find((o) => o.id === selectedId);

  return (
    <section id="goal-finder" className="bg-[var(--color-secondary-bg)] py-16 md:py-24 lg:py-32">
      <div className="container-labs md:px-10">
        <FadeUp>
          <p className="section-label">FIND MY LABS PROGRAM</p>
          <h2 className="section-heading mt-5 max-w-lg">
            무엇을 위해
            <br />
            언어가 필요하신가요?
          </h2>
        </FadeUp>

        {(["study-abroad", "career"] as GoalGroup[]).map((group, gi) => (
          <FadeUp key={group} delay={0.08 + gi * 0.04}>
            <div className={gi === 0 ? "mt-10" : "mt-8"}>
              <p className="text-xs font-semibold tracking-[0.18em] text-[var(--color-dark-gold)]">
                {GROUP_LABELS[group]}
              </p>
              <div className="mt-3 flex flex-wrap gap-2.5">
                {OPTIONS.filter((o) => o.group === group).map((o) => (
                  <button
                    key={o.id}
                    onClick={() => setSelectedId(o.id)}
                    aria-pressed={selectedId === o.id}
                    className={cn(
                      "rounded-[var(--radius-sm)] border px-5 py-3 text-sm font-medium transition-colors",
                      selectedId === o.id
                        ? "border-[var(--color-deep-brown)] bg-[var(--color-deep-brown)] text-white"
                        : "border-[var(--color-border)] bg-white text-[var(--color-text)] hover:border-[var(--color-gold)]"
                    )}
                  >
                    {o.label}
                  </button>
                ))}
              </div>
            </div>
          </FadeUp>
        ))}

        {selected && (
          <FadeUp>
            <div className="card-plain mt-10 p-8 sm:p-10">
              <p className="text-xs font-semibold tracking-[0.2em] text-[var(--color-dark-gold)]">
                YOUR RECOMMENDED LABS PLAN
              </p>
              <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <div>
                  <p className="text-xs font-semibold text-[var(--color-muted)]">Recommended Program</p>
                  <p className="mt-1.5 text-[17px] font-medium text-[var(--color-deep-brown)]">{selected.program}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-[var(--color-muted)]">Suggested Focus</p>
                  <p className="mt-1.5 text-sm text-[var(--color-text)]">{selected.focus.join(" · ")}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-[var(--color-muted)]">Recommended Format</p>
                  <p className="mt-1.5 text-sm text-[var(--color-text)]">{selected.format}</p>
                </div>
                {selected.hourRange && (
                  <div>
                    <p className="text-xs font-semibold text-[var(--color-muted)]">Recommended Hours</p>
                    <p className="mt-1.5 font-serif text-xl italic text-[var(--color-dark-gold)]">
                      {selected.hourRange}
                    </p>
                  </div>
                )}
              </div>
              <div className="mt-8 flex flex-col items-start gap-3 border-t border-[var(--color-border)] pt-7 sm:flex-row sm:items-center">
                <ConsultButton icon program={selected.id}>
                  이 수업으로 상담하기
                </ConsultButton>
                <a
                  href={selected.href}
                  className="text-sm font-medium text-[var(--color-deep-brown)] underline decoration-[var(--color-gold)] decoration-2 underline-offset-4 hover:text-[var(--color-dark-gold)]"
                >
                  프로그램 자세히 보기
                </a>
              </div>
            </div>
          </FadeUp>
        )}
      </div>
    </section>
  );
}

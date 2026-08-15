"use client";

import { useState } from "react";
import ConsultButton from "./ConsultButton";
import FadeUp from "./FadeUp";
import { cn } from "@/lib/utils";

type GoalOption = {
  id: string;
  label: string;
  program: string;
  focus: string[];
  format: string;
  href: string;
};

const OPTIONS: GoalOption[] = [
  {
    id: "interview",
    label: "외국계 면접",
    program: "Interview Intensive",
    focus: ["Mock Interview", "Answer Structure", "Pronunciation", "Business Vocabulary"],
    format: "Private 1:1 Intensive",
    href: "/programs/private-intensive",
  },
  {
    id: "meeting",
    label: "영어 회의",
    program: "Business Speaking 1:1",
    focus: ["Speaking", "Business Vocabulary", "Meeting Practice"],
    format: "Private 1:1",
    href: "/programs/business",
  },
  {
    id: "presentation",
    label: "Presentation",
    program: "Business Speaking 1:1",
    focus: ["Presentation", "Business Vocabulary", "Delivery"],
    format: "Private 1:1",
    href: "/programs/business",
  },
  {
    id: "travel",
    label: "해외 출장",
    program: "Business Travel Intensive",
    focus: ["Travel English", "Business Vocabulary", "Speaking"],
    format: "Private 1:1 Intensive",
    href: "/programs/private-intensive",
  },
  {
    id: "opic",
    label: "OPIc 목표등급",
    program: "OPIc Private Prep",
    focus: ["Background Survey", "Combo-set Response", "Speaking"],
    format: "Private 1:1",
    href: "/programs/opic",
  },
  {
    id: "ielts-toefl",
    label: "IELTS / TOEFL",
    program: "Private Test Prep",
    focus: ["Speaking", "Writing", "Test Strategy"],
    format: "Private 1:1",
    href: "/programs/test-preparation",
  },
  {
    id: "conversation",
    label: "일상회화",
    program: "Conversation 1:1",
    focus: ["Speaking Fluency", "Vocabulary", "Expression Correction"],
    format: "Private 1:1",
    href: "/programs/conversation",
  },
  {
    id: "pronunciation",
    label: "발음·억양",
    program: "Speaking & Pronunciation",
    focus: ["Pronunciation", "Intonation", "Speaking Fluency"],
    format: "Private 1:1",
    href: "/programs/conversation",
  },
  {
    id: "chinese",
    label: "중국어",
    program: "Chinese 1:1",
    focus: ["중국어 회화", "HSK / TSC 대비"],
    format: "Private 1:1",
    href: "/languages/chinese",
  },
  {
    id: "japanese",
    label: "일본어",
    program: "Japanese 1:1",
    focus: ["일본어 회화", "JLPT / JPT 대비"],
    format: "Private 1:1",
    href: "/languages/japanese",
  },
  {
    id: "spanish",
    label: "스페인어",
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

        <FadeUp delay={0.08}>
          <div className="mt-10 flex flex-wrap gap-2.5">
            {OPTIONS.map((o) => (
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
        </FadeUp>

        {selected && (
          <FadeUp>
            <div className="card-plain mt-10 p-8 sm:p-10">
              <p className="text-xs font-semibold tracking-[0.2em] text-[var(--color-dark-gold)]">
                YOUR RECOMMENDED LABS PLAN
              </p>
              <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-3">
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

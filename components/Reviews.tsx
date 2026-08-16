"use client";

import { useState } from "react";
import { studentStories, type ReviewCategory } from "@/data/reviews";
import FadeUp from "./FadeUp";
import { cn } from "@/lib/utils";

const FILTERS: { label: string; value: ReviewCategory | "all" }[] = [
  { label: "All", value: "all" },
  { label: "Conversation", value: "conversation" },
  { label: "Business", value: "business" },
  { label: "Test Prep", value: "test-prep" },
  { label: "Online", value: "online" },
];

const MEASURES = [
  { title: "Goal Progress", desc: "처음 설정한 학습 목표를 기준으로 확인합니다." },
  { title: "Instructor Feedback", desc: "수업 과정에서 발견된 개선점을 지속적으로 기록합니다." },
  { title: "Curriculum Adjustment", desc: "진행 상황에 따라 수업 방향을 조정합니다." },
  { title: "Learning Continuity", desc: "다음 수업에서 무엇을 이어갈지 명확하게 관리합니다." },
];

const PAGE_SIZE = 6;

export default function Reviews() {
  const [filter, setFilter] = useState<ReviewCategory | "all">("all");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const verified = studentStories.filter((s) => s.verified);
  const filtered = filter === "all" ? verified : verified.filter((s) => s.category === filter);
  const visible = filtered.slice(0, visibleCount);

  function handleFilter(value: ReviewCategory | "all") {
    setFilter(value);
    setVisibleCount(PAGE_SIZE);
  }

  return (
    <section id="reviews" className="bg-[var(--color-primary-bg)] py-16 md:py-24 lg:py-32">
      <div className="container-labs md:px-10">
        <FadeUp>
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="section-label">STUDENT STORIES</p>
              <h2 className="section-heading mt-5 max-w-lg">
                수업을 선택하는 이유보다
                <br />
                계속 이어가는 이유.
              </h2>
            </div>
            {verified.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {FILTERS.map((f) => (
                  <button
                    key={f.value}
                    onClick={() => handleFilter(f.value)}
                    className={cn(
                      "rounded-[var(--radius-sm)] border px-4 py-1.5 text-xs font-medium transition-colors",
                      filter === f.value
                        ? "border-[var(--color-deep-brown)] bg-[var(--color-deep-brown)] text-white"
                        : "border-[var(--color-border)] text-[var(--color-text)] hover:border-[var(--color-gold)]"
                    )}
                  >
                    {f.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </FadeUp>

        {verified.length === 0 ? (
          <FadeUp delay={0.1}>
            <div className="mt-12 md:mt-14">
              <p className="text-xs font-semibold tracking-[0.18em] text-[var(--color-dark-gold)]">
                WHAT LABS MEASURES
              </p>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-[var(--color-muted)]">
                수업 만족도를 말로만 이야기하지 않습니다. 검증된 수강 후기는 준비되는 대로 이 자리에 공개됩니다.
              </p>
              <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {MEASURES.map((m) => (
                  <div key={m.title} className="border-t border-[var(--color-border)] pt-5">
                    <h3 className="text-[15px] font-semibold text-[var(--color-deep-brown)]">{m.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted)]">{m.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeUp>
        ) : (
          <div className="mt-12 grid grid-cols-1 gap-6 md:mt-14 md:grid-cols-2">
            {visible.map((story, i) => (
              <FadeUp key={story.id} delay={Math.min(i * 0.06, 0.24)}>
                <div className="card-plain flex h-full flex-col p-7">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold tracking-[0.16em] text-[var(--color-dark-gold)]">
                      {story.categoryLabel.toUpperCase()}
                    </span>
                    <span className="rounded-[var(--radius-xs)] bg-[var(--color-champagne)]/20 px-2 py-0.5 text-[10px] font-semibold text-[var(--color-dark-gold)]">
                      수강 확인 후기
                    </span>
                  </div>

                  <dl className="mt-5 flex flex-col gap-3 text-sm">
                    <div>
                      <dt className="text-xs font-semibold text-[var(--color-muted)]">Before</dt>
                      <dd className="mt-0.5 text-[var(--color-text)]">{story.before}</dd>
                    </div>
                    <div>
                      <dt className="text-xs font-semibold text-[var(--color-muted)]">Goal</dt>
                      <dd className="mt-0.5 text-[var(--color-text)]">{story.goal}</dd>
                    </div>
                    <div>
                      <dt className="text-xs font-semibold text-[var(--color-muted)]">Lesson Focus</dt>
                      <dd className="mt-0.5 text-[var(--color-text)]">{story.focus.join(" · ")}</dd>
                    </div>
                  </dl>

                  <p className="mt-5 flex-1 border-t border-[var(--color-border)] pt-5 text-[15px] leading-relaxed text-[var(--color-text)]">
                    {story.reviewText}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        )}

        {filtered.length > visibleCount && (
          <FadeUp delay={0.1}>
            <div className="mt-10 flex flex-col items-center gap-2">
              <button
                type="button"
                onClick={() => setVisibleCount((c) => c + PAGE_SIZE)}
                className="rounded-[var(--radius-md)] border border-[var(--color-deep-brown)] px-7 py-3 text-sm font-medium text-[var(--color-deep-brown)] transition-colors hover:bg-[var(--color-deep-brown)] hover:text-white"
              >
                후기 더 보기
              </button>
              <p className="text-xs text-[var(--color-muted)]">
                {visible.length} / {filtered.length}
              </p>
            </div>
          </FadeUp>
        )}
      </div>
    </section>
  );
}

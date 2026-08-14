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

export default function Reviews() {
  const [filter, setFilter] = useState<ReviewCategory | "all">("all");
  const verified = studentStories.filter((s) => s.verified);
  const visible = filter === "all" ? verified : verified.filter((s) => s.category === filter);

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
                    onClick={() => setFilter(f.value)}
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
            <div className="card-plain mt-12 p-10 text-center md:mt-14">
              <p className="text-sm leading-relaxed text-[var(--color-muted)]">
                아직 공개된 수강 후기가 없습니다.
                <br />
                LABS가 실제 수강 여부를 확인한 후기가 등록되면 이곳에서 확인하실 수 있습니다.
              </p>
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
      </div>
    </section>
  );
}

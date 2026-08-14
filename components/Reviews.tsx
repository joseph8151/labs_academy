"use client";

import { useState } from "react";
import { Quote } from "lucide-react";
import { reviews, type ReviewCategory } from "@/data/reviews";
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
  const visible = filter === "all" ? reviews : reviews.filter((r) => r.category === filter);

  return (
    <section id="reviews" className="bg-[var(--color-primary-bg)] py-20 md:py-28">
      <div className="container-labs md:px-10">
        <FadeUp>
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="section-label">STUDENT STORIES</p>
              <h2 className="mt-5 max-w-lg text-[1.75rem] leading-[1.35] font-semibold text-[var(--color-deep-brown)] sm:text-3xl md:text-[2.25rem]">
                수업을 선택하는 이유보다
                <br />
                계속 이어가는 이유.
              </h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {FILTERS.map((f) => (
                <button
                  key={f.value}
                  onClick={() => setFilter(f.value)}
                  className={cn(
                    "rounded-full border px-4 py-1.5 text-xs font-medium transition-colors",
                    filter === f.value
                      ? "border-[var(--color-deep-brown)] bg-[var(--color-deep-brown)] text-white"
                      : "border-[var(--color-border)] text-[var(--color-text)] hover:border-[var(--color-gold)]"
                  )}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>
        </FadeUp>

        <div className="mt-12 grid grid-cols-1 gap-6 md:mt-14 md:grid-cols-2 lg:grid-cols-4">
          {visible.map((review, i) => (
            <FadeUp key={review.id} delay={i * 0.06}>
              <div className="flex h-full flex-col border border-[var(--color-border)] bg-white p-7">
                <Quote size={18} className="text-[var(--color-gold)]" />
                <p className="mt-5 flex-1 text-[15px] leading-relaxed text-[var(--color-text)]">{review.quote}</p>
                <div className="mt-6 border-t border-[var(--color-border)] pt-4">
                  <p className="text-sm font-medium text-[var(--color-deep-brown)]">{review.studentLabel}</p>
                  <p className="mt-0.5 text-xs text-[var(--color-muted)]">{review.categoryLabel}</p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

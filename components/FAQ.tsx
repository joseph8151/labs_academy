"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { faq } from "@/data/faq";
import FadeUp from "./FadeUp";
import { cn } from "@/lib/utils";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-[var(--color-secondary-bg)] py-20 md:py-28">
      <div className="container-labs md:px-10 mx-auto max-w-3xl">
        <FadeUp>
          <p className="section-label text-center">FAQ</p>
          <h2 className="mt-5 text-center text-[1.75rem] font-semibold leading-[1.35] text-[var(--color-deep-brown)] sm:text-3xl">
            자주 묻는 질문
          </h2>
        </FadeUp>

        <div className="mt-12 border-t border-[var(--color-border)] md:mt-14">
          {faq.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={item.question} className="border-b border-[var(--color-border)]">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left sm:py-6"
                >
                  <span className="text-[15px] font-medium text-[var(--color-deep-brown)] sm:text-base">
                    {item.question}
                  </span>
                  <Plus
                    size={18}
                    className={cn(
                      "shrink-0 text-[var(--color-gold)] transition-transform duration-300",
                      isOpen && "rotate-45"
                    )}
                  />
                </button>
                <div
                  className={cn(
                    "grid overflow-hidden transition-all duration-300 ease-out",
                    isOpen ? "grid-rows-[1fr] pb-6 opacity-100" : "grid-rows-[0fr] opacity-0"
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-2xl text-sm leading-relaxed text-[var(--color-muted)]">{item.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

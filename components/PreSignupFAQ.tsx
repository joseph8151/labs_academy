"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { faq } from "@/data/faq";
import FadeUp from "./FadeUp";
import { cn } from "@/lib/utils";

export default function PreSignupFAQ() {
  const items = faq.filter((f) => f.preSignup);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  if (items.length === 0) return null;

  return (
    <section className="bg-[var(--color-secondary-bg)] py-16 md:py-24 lg:py-28">
      <div className="container-labs md:px-10 mx-auto max-w-2xl">
        <FadeUp>
          <p className="section-label text-center">BEFORE YOU REGISTER</p>
          <h2 className="section-heading mt-5 text-center !text-[1.75rem] sm:!text-[2.25rem]">
            등록 전에 많이 물어보시는 것
          </h2>
        </FadeUp>

        <div className="mt-10 border-t border-[var(--color-border)]">
          {items.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={item.question} className="border-b border-[var(--color-border)]">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 py-5"
                >
                  <span className="text-left text-[15px] font-medium text-[var(--color-deep-brown)]">
                    {item.question}
                  </span>
                  <Plus
                    size={18}
                    className={cn("shrink-0 text-[var(--color-gold)] transition-transform duration-300", isOpen && "rotate-45")}
                  />
                </button>
                <div
                  className={cn(
                    "grid overflow-hidden transition-all duration-300 ease-out",
                    isOpen ? "grid-rows-[1fr] pb-5 opacity-100" : "grid-rows-[0fr] opacity-0"
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="text-sm leading-relaxed text-[var(--color-muted)]">{item.answer}</p>
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

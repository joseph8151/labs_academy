"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MessageCircle, ArrowRight } from "lucide-react";
import { useConsultModal } from "@/context/ConsultModalContext";

export default function MobileStickyCTA() {
  const { openConsult } = useConsultModal();
  const pathname = usePathname();

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex items-stretch gap-2 border-t border-[var(--color-border)] bg-[var(--color-secondary-bg)]/95 p-2.5 pb-[calc(0.625rem+env(safe-area-inset-bottom))] lg:hidden">
      <button
        type="button"
        onClick={() => openConsult({ sourcePage: pathname })}
        aria-label="카카오톡 상담"
        className="flex w-14 shrink-0 items-center justify-center rounded-[var(--radius-sm)] border border-[var(--color-deep-brown)] text-[var(--color-deep-brown)]"
      >
        <MessageCircle size={18} />
      </button>
      <Link
        href="/#goal-finder"
        className="flex flex-1 items-center justify-center gap-1.5 rounded-[var(--radius-sm)] bg-[var(--color-deep-brown)] px-3 py-3 text-[13px] font-semibold text-[var(--color-secondary-bg)] transition hover:bg-[var(--color-gold)] hover:text-[var(--color-deep-brown)]"
      >
        내 Intensive 상담받기
        <ArrowRight size={15} />
      </Link>
    </div>
  );
}

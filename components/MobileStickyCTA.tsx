"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MessageCircle, MapPin } from "lucide-react";
import { useConsultModal } from "@/context/ConsultModalContext";

export default function MobileStickyCTA() {
  const { openConsult } = useConsultModal();
  const pathname = usePathname();

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex items-stretch gap-2 border-t border-[var(--color-border)] bg-[var(--color-secondary-bg)] p-2.5 pb-[calc(0.625rem+env(safe-area-inset-bottom))] lg:hidden">
      <Link
        href="/locations"
        className="flex flex-1 items-center justify-center gap-1.5 rounded-[var(--radius-sm)] border border-[var(--color-deep-brown)] px-3 py-3 text-[13px] font-medium text-[var(--color-deep-brown)]"
      >
        <MapPin size={15} />
        지점 찾기
      </Link>
      <button
        type="button"
        onClick={() => openConsult({ sourcePage: pathname })}
        className="flex flex-[1.4] items-center justify-center gap-1.5 rounded-[var(--radius-sm)] bg-[var(--color-deep-brown)] px-3 py-3 text-[13px] font-semibold text-[var(--color-secondary-bg)] transition hover:bg-[var(--color-gold)] hover:text-[var(--color-deep-brown)]"
      >
        <MessageCircle size={15} />
        카카오톡 상담
      </button>
    </div>
  );
}

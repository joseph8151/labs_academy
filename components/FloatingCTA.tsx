"use client";

import { MessageCircle } from "lucide-react";
import { usePathname } from "next/navigation";
import { useConsultModal } from "@/context/ConsultModalContext";

export default function FloatingCTA() {
  const { openConsult } = useConsultModal();
  const pathname = usePathname();

  return (
    <button
      type="button"
      onClick={() => openConsult({ sourcePage: pathname })}
      className="fixed bottom-8 right-8 z-40 hidden items-center gap-2 rounded-full bg-[var(--color-deep-brown)] px-5 py-3.5 text-sm font-medium text-[var(--color-secondary-bg)] shadow-lg transition-all duration-200 ease-out hover:-translate-y-0.5 hover:bg-[#2C2C2C] lg:flex"
    >
      <MessageCircle size={16} className="text-[var(--color-champagne)]" />
      상담하기
    </button>
  );
}

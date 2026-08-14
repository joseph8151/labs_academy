"use client";

import { useEffect } from "react";
import { X, MessageCircle, Phone, MapPin } from "lucide-react";
import { useConsultModal } from "@/context/ConsultModalContext";
import { locations } from "@/data/locations";
import { getConsultAction } from "@/lib/kakao";

export default function LocationPicker() {
  const { state, closeConsult, selectLocation } = useConsultModal();

  useEffect(() => {
    if (!state.isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeConsult();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [state.isOpen, closeConsult]);

  if (!state.isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center bg-[#2C2C2C]/55 md:items-center"
      role="dialog"
      aria-modal="true"
      aria-labelledby="location-picker-title"
      onClick={closeConsult}
    >
      <div
        className="animate-sheet-up w-full rounded-t-2xl bg-[var(--color-secondary-bg)] p-6 shadow-2xl md:max-w-md md:animate-fade-up md:rounded-2xl md:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-5 flex items-start justify-between gap-4">
          <div>
            <h2 id="location-picker-title" className="text-lg font-semibold text-[var(--color-deep-brown)] md:text-xl">
              어느 지점에 문의하시겠어요?
            </h2>
            <p className="mt-1.5 text-sm leading-relaxed text-[var(--color-muted)]">
              가까운 LABS 지점을 선택하면
              <br />
              해당 지점 상담 채널로 바로 연결됩니다.
            </p>
          </div>
          <button
            type="button"
            onClick={closeConsult}
            aria-label="닫기"
            className="-m-2 shrink-0 rounded-full p-2 text-[var(--color-muted)] transition hover:bg-black/5 hover:text-[var(--color-text)]"
          >
            <X size={20} />
          </button>
        </div>

        <ul className="flex flex-col gap-2">
          {locations.map((loc) => {
            const action = getConsultAction(loc);
            const Icon = action.type === "kakao" ? MessageCircle : action.type === "tel" ? Phone : MapPin;
            return (
              <li key={loc.id}>
                <button
                  type="button"
                  onClick={() => selectLocation(loc.id)}
                  disabled={action.type === "unavailable"}
                  className="group flex w-full items-center justify-between gap-4 rounded-xl border border-[var(--color-border)] bg-white px-5 py-4 text-left transition hover:border-[var(--color-gold)] hover:bg-[var(--color-primary-bg)] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:border-[var(--color-border)] disabled:hover:bg-white"
                >
                  <span>
                    <span className="block font-medium text-[var(--color-deep-brown)]">{loc.name}</span>
                    <span className="mt-0.5 block text-xs text-[var(--color-muted)]">{loc.address}</span>
                  </span>
                  <span className="flex shrink-0 items-center gap-1.5 text-sm font-medium text-[var(--color-dark-gold)]">
                    <Icon size={16} />
                    {action.label}
                    <span aria-hidden className="transition-transform group-hover:translate-x-0.5">
                      →
                    </span>
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

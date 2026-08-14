import type { Metadata } from "next";
import { MapPin, Phone, Clock, ExternalLink } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import { locations } from "@/data/locations";
import { getConsultAction } from "@/lib/kakao";

export const metadata: Metadata = {
  title: "Locations",
  description: "LABS 지점 안내. 가까운 지점을 선택해 카카오톡으로 바로 상담을 시작하세요.",
};

export default function LocationsPage() {
  return (
    <>
      <PageHeader
        eyebrow="LOCATIONS"
        title="가까운 LABS 지점에서 상담을 시작하세요."
        description="지점을 선택하면 해당 지점의 카카오톡 상담 채널로 바로 연결됩니다."
      />

      <section className="py-16 md:py-20">
        <div className="container-labs md:px-10">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {locations.map((loc) => {
              const action = getConsultAction(loc);
              return (
                <div key={loc.id} className="flex flex-col border border-[var(--color-border)] bg-white p-8">
                  <h2 className="text-xl font-semibold text-[var(--color-deep-brown)]">{loc.name}</h2>

                  <ul className="mt-5 flex flex-col gap-3 text-sm text-[var(--color-text)]">
                    <li className="flex items-start gap-2.5">
                      <MapPin size={16} className="mt-0.5 shrink-0 text-[var(--color-muted)]" />
                      {loc.address}
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Phone size={16} className="mt-0.5 shrink-0 text-[var(--color-muted)]" />
                      {loc.phone}
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Clock size={16} className="mt-0.5 shrink-0 text-[var(--color-muted)]" />
                      {loc.hours}
                    </li>
                  </ul>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {loc.programs.map((p) => (
                      <span
                        key={p}
                        className="rounded-full border border-[var(--color-border)] px-3 py-1 text-xs text-[var(--color-muted)]"
                      >
                        {p}
                      </span>
                    ))}
                  </div>

                  <div className="mt-7 flex flex-col gap-2.5 border-t border-[var(--color-border)] pt-6 sm:flex-row">
                    {action.type === "kakao" && (
                      <a
                        href={action.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-[var(--color-gold)] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[var(--color-dark-gold)]"
                      >
                        카카오톡 상담
                      </a>
                    )}
                    {action.type === "tel" && (
                      <a
                        href={action.href}
                        className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-[var(--color-gold)] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[var(--color-dark-gold)]"
                      >
                        <Phone size={15} />
                        전화 상담
                      </a>
                    )}
                    {action.type === "unavailable" && (
                      <span className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-[var(--color-border)] px-6 py-3.5 text-sm font-medium text-[var(--color-muted)]">
                        상담 채널 준비중
                      </span>
                    )}
                    <a
                      href={loc.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 rounded-full border border-[var(--color-border)] px-6 py-3.5 text-sm font-medium text-[var(--color-text)] transition hover:border-[var(--color-deep-brown)]"
                    >
                      지도 보기
                      <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

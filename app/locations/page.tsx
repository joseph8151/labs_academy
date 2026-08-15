import type { Metadata } from "next";
import Link from "next/link";
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

      <section className="py-16 md:py-20 lg:py-24">
        <div className="container-labs md:px-10">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {locations.map((loc) => {
              const action = getConsultAction(loc);
              return (
                <div key={loc.id} className="card-plain flex flex-col p-8">
                  <Link
                    href={`/locations/${loc.id}`}
                    className="text-xl font-semibold text-[var(--color-deep-brown)] hover:text-[var(--color-dark-gold)]"
                  >
                    {loc.name}
                  </Link>

                  <ul className="mt-5 flex flex-col gap-3 text-sm text-[var(--color-text)]">
                    <li className="flex items-start gap-2.5">
                      <MapPin size={16} className="mt-0.5 shrink-0 text-[var(--color-muted)]" />
                      {loc.address}
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Phone size={16} className="mt-0.5 shrink-0 text-[var(--color-muted)]" />
                      {loc.phone ?? "전화번호 준비중"}
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
                        className="rounded-[var(--radius-xs)] border border-[var(--color-border)] px-3 py-1 text-xs text-[var(--color-muted)]"
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
                        className="inline-flex h-[52px] flex-1 items-center justify-center gap-2 rounded-[var(--radius-md)] bg-[var(--color-deep-brown)] px-6 text-sm font-semibold text-[var(--color-secondary-bg)] transition hover:bg-[var(--color-gold)] hover:text-[var(--color-deep-brown)]"
                      >
                        카카오톡 상담
                      </a>
                    )}
                    {action.type === "tel" && (
                      <a
                        href={action.href}
                        className="inline-flex h-[52px] flex-1 items-center justify-center gap-2 rounded-[var(--radius-md)] bg-[var(--color-deep-brown)] px-6 text-sm font-semibold text-[var(--color-secondary-bg)] transition hover:bg-[var(--color-gold)] hover:text-[var(--color-deep-brown)]"
                      >
                        <Phone size={15} />
                        전화 상담
                      </a>
                    )}
                    {action.type === "unavailable" && (
                      <span className="inline-flex h-[52px] flex-1 items-center justify-center gap-2 rounded-[var(--radius-md)] border border-[var(--color-border)] px-6 text-sm font-medium text-[var(--color-muted)]">
                        상담 채널 준비중
                      </span>
                    )}
                    <a
                      href={loc.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-[52px] items-center justify-center gap-1.5 rounded-[var(--radius-md)] border border-[var(--color-border)] px-6 text-sm font-medium text-[var(--color-text)] transition hover:border-[var(--color-deep-brown)]"
                    >
                      지도 보기
                      <ExternalLink size={14} />
                    </a>
                  </div>
                  <p className="mt-3 text-[11px] text-[var(--color-muted)]">{loc.name} 공식 상담채널</p>
                  <Link
                    href={`/locations/${loc.id}`}
                    className="mt-4 text-xs font-medium text-[var(--color-deep-brown)] underline decoration-[var(--color-gold)] decoration-2 underline-offset-4 hover:text-[var(--color-dark-gold)]"
                  >
                    지점 상세 정보 보기
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

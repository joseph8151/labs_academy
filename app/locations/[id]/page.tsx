import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MapPin, Phone, Clock, ExternalLink } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import EditorialPanel from "@/components/EditorialPanel";
import { locations, getLocationById } from "@/data/locations";
import { getConsultAction } from "@/lib/kakao";

export function generateStaticParams() {
  return locations.map((loc) => ({ id: loc.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const location = getLocationById(id);
  if (!location) return {};
  return {
    title: location.name,
    description: `${location.name} 지점 안내 — 주소, 운영시간, 카카오톡 상담 채널을 확인하세요.`,
  };
}

export default async function LocationDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const location = getLocationById(id);
  if (!location) notFound();

  const action = getConsultAction(location);

  return (
    <>
      <PageHeader eyebrow="LOCATIONS" title={location.name} description={location.address} />

      <section className="py-16 md:py-20 lg:py-24">
        <div className="container-labs md:px-10 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <dl className="flex flex-col gap-5">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 shrink-0 text-[var(--color-dark-gold)]" />
                <div>
                  <dt className="text-xs font-semibold text-[var(--color-muted)]">주소</dt>
                  <dd className="mt-0.5 text-[15px] text-[var(--color-text)]">{location.address}</dd>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone size={18} className="mt-0.5 shrink-0 text-[var(--color-dark-gold)]" />
                <div>
                  <dt className="text-xs font-semibold text-[var(--color-muted)]">전화번호</dt>
                  <dd className="mt-0.5 text-[15px] text-[var(--color-text)]">{location.phone}</dd>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock size={18} className="mt-0.5 shrink-0 text-[var(--color-dark-gold)]" />
                <div>
                  <dt className="text-xs font-semibold text-[var(--color-muted)]">운영시간</dt>
                  <dd className="mt-0.5 text-[15px] text-[var(--color-text)]">{location.hours}</dd>
                </div>
              </div>
              {location.directions && (
                <div className="flex items-start gap-3">
                  <MapPin size={18} className="mt-0.5 shrink-0 text-[var(--color-dark-gold)]" />
                  <div>
                    <dt className="text-xs font-semibold text-[var(--color-muted)]">찾아오는 방법</dt>
                    <dd className="mt-0.5 text-[15px] text-[var(--color-text)]">{location.directions}</dd>
                  </div>
                </div>
              )}
            </dl>

            <div className="mt-8">
              <p className="text-xs font-semibold tracking-[0.18em] text-[var(--color-dark-gold)]">지원 프로그램</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {location.programs.map((p) => (
                  <span
                    key={p}
                    className="rounded-[var(--radius-xs)] border border-[var(--color-border)] px-3 py-1 text-xs text-[var(--color-text)]"
                  >
                    {p}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-10 flex flex-col gap-3 border-t border-[var(--color-border)] pt-8 sm:flex-row">
              {action.type !== "unavailable" ? (
                <a
                  href={action.href}
                  target={action.type === "kakao" ? "_blank" : undefined}
                  rel={action.type === "kakao" ? "noopener noreferrer" : undefined}
                  className="inline-flex h-[52px] items-center justify-center gap-2 rounded-[var(--radius-md)] bg-[var(--color-deep-brown)] px-7 text-sm font-semibold text-[var(--color-secondary-bg)] transition hover:bg-[var(--color-gold)] hover:text-[var(--color-deep-brown)]"
                >
                  {action.label}
                </a>
              ) : (
                <span className="inline-flex h-[52px] items-center justify-center gap-2 rounded-[var(--radius-md)] border border-[var(--color-border)] px-7 text-sm font-medium text-[var(--color-muted)]">
                  상담 채널 준비중
                </span>
              )}
              <a
                href={location.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-[52px] items-center justify-center gap-1.5 rounded-[var(--radius-md)] border border-[var(--color-border)] px-7 text-sm font-medium text-[var(--color-text)] transition hover:border-[var(--color-deep-brown)]"
              >
                지도 보기
                <ExternalLink size={14} />
              </a>
            </div>
            <p className="mt-3 text-[11px] text-[var(--color-muted)]">{location.name} 공식 상담채널</p>
          </div>

          <div className="lg:col-span-5">
            <EditorialPanel eyebrow={location.name} caption="PHOTO PLACEHOLDER" className="aspect-[4/5]" />
          </div>
        </div>

        <div className="container-labs md:px-10 mt-4">
          <Link
            href="/locations"
            className="text-xs font-medium text-[var(--color-muted)] underline decoration-[var(--color-gold)] underline-offset-2 hover:text-[var(--color-dark-gold)]"
          >
            전체 지점 목록으로
          </Link>
        </div>
      </section>
    </>
  );
}

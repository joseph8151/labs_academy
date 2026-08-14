import Link from "next/link";
import { ArrowUpRight, MapPin, Phone } from "lucide-react";
import { locations } from "@/data/locations";
import { getConsultAction } from "@/lib/kakao";
import FadeUp from "./FadeUp";

export default function LocationsPreview() {
  return (
    <section id="locations" className="bg-[var(--color-secondary-bg)] py-16 md:py-24 lg:py-32">
      <div className="container-labs md:px-10">
        <FadeUp>
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="section-label">LOCATIONS</p>
              <h2 className="section-heading mt-5 max-w-lg">
                가까운 지점에서
                <br />
                바로 상담을 시작하세요.
              </h2>
            </div>
            <Link
              href="/locations"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-deep-brown)] hover:text-[var(--color-dark-gold)]"
            >
              전체 지점 보기
              <ArrowUpRight size={15} />
            </Link>
          </div>
        </FadeUp>

        <div className="mt-12 grid grid-cols-1 gap-5 md:mt-14 md:grid-cols-2">
          {locations.map((loc, i) => {
            const action = getConsultAction(loc);
            return (
              <FadeUp key={loc.id} delay={Math.min(i * 0.06, 0.24)}>
                <div className="card-plain flex flex-col justify-between gap-6 p-7 sm:flex-row sm:items-center">
                  <div>
                    <Link href={`/locations/${loc.id}`} className="text-lg font-semibold text-[var(--color-deep-brown)] hover:text-[var(--color-dark-gold)]">
                      {loc.name}
                    </Link>
                    <p className="mt-1.5 flex items-start gap-1.5 text-sm text-[var(--color-muted)]">
                      <MapPin size={14} className="mt-0.5 shrink-0" />
                      {loc.address}
                    </p>
                  </div>
                  <div className="flex shrink-0 flex-col items-start gap-1.5 sm:items-end">
                    {action.type === "kakao" ? (
                      <a
                        href={action.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex h-12 items-center justify-center gap-2 rounded-[var(--radius-md)] bg-[var(--color-deep-brown)] px-6 text-sm font-medium text-[var(--color-secondary-bg)] transition hover:bg-[var(--color-gold)] hover:text-[var(--color-deep-brown)]"
                      >
                        카카오톡 상담
                      </a>
                    ) : action.type === "tel" ? (
                      <a
                        href={action.href}
                        className="inline-flex h-12 items-center justify-center gap-2 rounded-[var(--radius-md)] border border-[var(--color-deep-brown)] px-6 text-sm font-medium text-[var(--color-deep-brown)] transition hover:bg-[var(--color-deep-brown)] hover:text-white"
                      >
                        <Phone size={14} />
                        전화 상담
                      </a>
                    ) : (
                      <span className="inline-flex h-12 items-center justify-center gap-2 rounded-[var(--radius-md)] border border-[var(--color-border)] px-6 text-sm font-medium text-[var(--color-muted)]">
                        상담 채널 준비중
                      </span>
                    )}
                    <span className="text-[11px] text-[var(--color-muted)]">{loc.name} 공식 상담채널</span>
                  </div>
                </div>
              </FadeUp>
            );
          })}
        </div>
      </div>
    </section>
  );
}

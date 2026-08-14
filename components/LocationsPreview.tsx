import Link from "next/link";
import { ArrowUpRight, MapPin, Phone } from "lucide-react";
import { locations } from "@/data/locations";
import { getConsultAction } from "@/lib/kakao";
import FadeUp from "./FadeUp";

export default function LocationsPreview() {
  return (
    <section className="bg-[var(--color-secondary-bg)] py-20 md:py-28">
      <div className="container-labs md:px-10">
        <FadeUp>
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="section-label">LOCATIONS</p>
              <h2 className="mt-5 max-w-lg text-[1.75rem] leading-[1.35] font-semibold text-[var(--color-deep-brown)] sm:text-3xl md:text-[2.25rem]">
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
              <FadeUp key={loc.id} delay={i * 0.06}>
                <div className="flex flex-col justify-between gap-6 border border-[var(--color-border)] bg-white p-7 sm:flex-row sm:items-center">
                  <div>
                    <h3 className="text-lg font-semibold text-[var(--color-deep-brown)]">{loc.name}</h3>
                    <p className="mt-1.5 flex items-start gap-1.5 text-sm text-[var(--color-muted)]">
                      <MapPin size={14} className="mt-0.5 shrink-0" />
                      {loc.address}
                    </p>
                  </div>
                  {action.type === "kakao" ? (
                    <a
                      href={action.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[var(--color-gold)] px-6 py-3 text-sm font-medium text-white transition hover:bg-[var(--color-dark-gold)]"
                    >
                      카카오톡 상담
                    </a>
                  ) : action.type === "tel" ? (
                    <a
                      href={action.href}
                      className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full border border-[var(--color-deep-brown)] px-6 py-3 text-sm font-medium text-[var(--color-deep-brown)] transition hover:bg-[var(--color-deep-brown)] hover:text-white"
                    >
                      <Phone size={14} />
                      전화 상담
                    </a>
                  ) : (
                    <span className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full border border-[var(--color-border)] px-6 py-3 text-sm font-medium text-[var(--color-muted)]">
                      상담 채널 준비중
                    </span>
                  )}
                </div>
              </FadeUp>
            );
          })}
        </div>
      </div>
    </section>
  );
}

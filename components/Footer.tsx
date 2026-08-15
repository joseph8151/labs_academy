import Link from "next/link";
import { locations } from "@/data/locations";
import { company } from "@/data/company";

const FOOTER_LINKS = [
  { label: "About", href: "/about" },
  { label: "Programs", href: "/programs" },
  { label: "Languages", href: "/#languages" },
  { label: "LABS ON", href: "/labs-on" },
  { label: "Instructors", href: "/instructors" },
  { label: "Locations", href: "/locations" },
  { label: "Contact", href: "/contact" },
];

const POLICY_LINKS = [
  { label: "수강 및 환불정책", href: "/refund-policy" },
  { label: "이용약관", href: "/terms" },
  { label: "개인정보처리방침", href: "/privacy" },
];

export default function Footer() {
  const primaryPhone = locations[0]?.phone;

  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-secondary-bg)]">
      <div className="container-labs md:px-10 py-16 lg:py-20">
        <div className="flex flex-col justify-between gap-12 md:flex-row">
          <div>
            <span className="font-serif text-2xl tracking-[0.08em] text-[var(--color-deep-brown)]">LABS</span>
            <p className="mt-2 text-xs tracking-[0.16em] text-[var(--color-muted)]">PRIVATE LANGUAGE ACADEMY</p>
          </div>

          <nav className="grid grid-cols-2 gap-x-10 gap-y-3 sm:grid-cols-3 md:flex md:flex-wrap md:gap-x-8">
            {FOOTER_LINKS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm text-[var(--color-text)] transition-colors hover:text-[var(--color-dark-gold)]"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="hairline my-10" />

        <div className="flex flex-col gap-4 text-xs leading-relaxed text-[var(--color-muted)] md:flex-row md:items-start md:justify-between">
          <div className="space-y-1">
            {primaryPhone && <p>대표 전화 {primaryPhone}</p>}
            <p>운영시간 안내는 각 지점 페이지에서 확인하실 수 있습니다.</p>
            <p>
              상호 {company.legalName} · 대표자 {company.ceo} · 사업자등록번호 {company.businessRegistrationNumber} ·
              주소 {company.address}
            </p>
            <p>
              이메일 {company.email ?? "준비중"} · 통신판매업 신고번호 {company.mailOrderBusinessNumber ?? "준비중"}
            </p>
          </div>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            {POLICY_LINKS.map((item) => (
              <Link key={item.label} href={item.href} className="hover:text-[var(--color-dark-gold)]">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <p className="mt-8 text-[11px] text-[var(--color-muted)]">
          © {new Date().getFullYear()} LABS Academy. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

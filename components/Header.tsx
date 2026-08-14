"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import ConsultButton from "./ConsultButton";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { label: "LABS", href: "/about" },
  { label: "1:1 PROGRAM", href: "/programs" },
  { label: "LANGUAGES", href: "/#languages" },
  { label: "TEST PREP", href: "/#test-prep" },
  { label: "INSTRUCTORS", href: "/instructors" },
  { label: "LABS ON", href: "/labs-on" },
  { label: "REVIEWS", href: "/#reviews" },
  { label: "LOCATIONS", href: "/locations" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled ? "border-b border-[var(--color-border)] bg-[var(--color-primary-bg)]" : "bg-transparent"
      )}
    >
      <div className="container-labs flex h-[76px] items-center justify-between md:px-10">
        <Link href="/" className="flex flex-col leading-none">
          <span className="font-serif text-2xl tracking-[0.08em] text-[var(--color-deep-brown)]">LABS</span>
          <span className="mt-1 text-[10px] font-medium tracking-[0.2em] text-[var(--color-muted)]">
            PRIVATE LANGUAGE ACADEMY
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-[13px] font-medium tracking-[0.04em] text-[var(--color-text)] transition-colors hover:text-[var(--color-dark-gold)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <ConsultButton variant="dark" size="sm" program={undefined}>
            상담신청
          </ConsultButton>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen(true)}
          aria-label="메뉴 열기"
          className="-mr-2 p-2 text-[var(--color-deep-brown)] lg:hidden"
        >
          <Menu size={24} />
        </button>
      </div>

      {menuOpen && (
        <div className="fixed inset-0 z-[110] bg-[var(--color-secondary-bg)] lg:hidden">
          <div className="container-labs flex h-[76px] items-center justify-between">
            <span className="font-serif text-2xl tracking-[0.08em] text-[var(--color-deep-brown)]">LABS</span>
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              aria-label="메뉴 닫기"
              className="-mr-2 p-2 text-[var(--color-deep-brown)]"
            >
              <X size={24} />
            </button>
          </div>
          <nav className="container-labs mt-6 flex flex-col gap-1">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="border-b border-[var(--color-border)] py-4 text-base font-medium text-[var(--color-deep-brown)]"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="container-labs mt-8">
            <ConsultButton variant="gold" size="lg" className="w-full">
              상담신청
            </ConsultButton>
          </div>
        </div>
      )}
    </header>
  );
}

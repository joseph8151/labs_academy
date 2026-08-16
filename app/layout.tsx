import type { Metadata, Viewport } from "next";
import { Manrope, Fraunces } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import MobileStickyCTA from "@/components/MobileStickyCTA";
import LocationPicker from "@/components/LocationPicker";
import { ConsultModalProvider } from "@/context/ConsultModalContext";
import { locations } from "@/data/locations";
import { company } from "@/data/company";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const SITE_URL = "https://labsacademies.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "LABS Academy | 성인 1:1 맞춤 어학 교육",
    template: "%s | LABS Academy",
  },
  description:
    "영어회화, 비즈니스 영어, OPIc, SPA, IELTS, TOEFL부터 중국어·일본어·스페인어까지. 개인별 목표와 실력에 맞춰 설계하는 LABS 1:1 맞춤 어학수업.",
  keywords: ["LABS", "1:1 어학원", "성인 영어회화", "비즈니스 영어", "OPIc", "IELTS", "TOEFL", "중국어", "일본어", "스페인어"],
  openGraph: {
    type: "website",
    locale: "ko_KR",
    siteName: "LABS Academy",
    title: "LABS Academy | 성인 1:1 맞춤 어학 교육",
    description: "나에게 맞춰지는 1:1 어학수업. 상담과 레벨 진단을 바탕으로 설계하는 개인별 커리큘럼.",
    url: SITE_URL,
  },
  twitter: {
    card: "summary_large_image",
    title: "LABS Academy | 성인 1:1 맞춤 어학 교육",
    description: "나에게 맞춰지는 1:1 어학수업. 상담과 레벨 진단을 바탕으로 설계하는 개인별 커리큘럼.",
  },
  alternates: {
    canonical: SITE_URL,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f8f4ec",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const primary = locations[0];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "LABS Academy",
    alternateName: "LABS",
    legalName: company.legalName,
    description: "성인 1:1 맞춤 어학 교육 전문 기관",
    url: SITE_URL,
    ...(primary && {
      address: {
        "@type": "PostalAddress",
        streetAddress: primary.address,
        addressCountry: "KR",
      },
      telephone: primary.phone,
    }),
  };

  return (
    <html lang="ko" className={`h-full antialiased ${manrope.variable} ${fraunces.variable}`}>
      <body className="flex min-h-full flex-col bg-[var(--color-primary-bg)] font-sans text-[var(--color-text)]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ConsultModalProvider>
          <Header />
          <main className="flex-1 pb-16 lg:pb-0">{children}</main>
          <Footer />
          <FloatingCTA />
          <MobileStickyCTA />
          <LocationPicker />
        </ConsultModalProvider>
      </body>
    </html>
  );
}

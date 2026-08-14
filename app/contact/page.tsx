import type { Metadata } from "next";
import Link from "next/link";
import { MessageCircle, Phone } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import ConsultButton from "@/components/ConsultButton";
import { locations } from "@/data/locations";
import { getConsultAction } from "@/lib/kakao";

export const metadata: Metadata = {
  title: "상담 문의",
  description: "LABS 상담은 지점별 카카오톡 채널로 바로 연결됩니다. 지점을 선택하고 3단계 안에 상담을 시작하세요.",
};

const STEPS = [
  { number: "01", title: "상담 시작", desc: "카카오톡 상담하기 버튼을 누릅니다." },
  { number: "02", title: "지점 선택", desc: "가까운 LABS 지점을 선택합니다." },
  { number: "03", title: "카카오톡 상담", desc: "해당 지점 채널에서 담당자와 바로 대화합니다." },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="CONTACT"
        title="상담은 지점별 카카오톡 채널로 연결됩니다."
        description="이름, 연락처 등 상세 정보는 카카오톡 상담 과정에서 지점 담당자가 직접 안내해 드립니다."
      />

      <section className="py-16 md:py-20 lg:py-24">
        <div className="container-labs md:px-10">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {STEPS.map((step) => (
              <div key={step.number} className="border-t border-[var(--color-border)] pt-6">
                <span className="font-serif text-2xl italic text-[var(--color-gold)]">{step.number}</span>
                <h2 className="mt-2 text-base font-semibold text-[var(--color-deep-brown)]">{step.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted)]">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 flex justify-center border border-[var(--color-border)] bg-[var(--color-secondary-bg)] p-10 sm:p-14">
            <div className="flex flex-col items-center text-center">
              <p className="text-lg font-medium text-[var(--color-deep-brown)]">지금 바로 상담을 시작해보세요.</p>
              <div className="mt-7">
                <ConsultButton icon size="lg">
                  카카오톡 상담하기
                </ConsultButton>
              </div>
            </div>
          </div>

          <div className="mt-16">
            <p className="text-xs font-semibold tracking-[0.18em] text-[var(--color-dark-gold)]">지점별 상담 채널</p>
            <div className="mt-6 flex flex-col gap-3">
              {locations.map((loc) => {
                const action = getConsultAction(loc);
                const Icon = action.type === "kakao" ? MessageCircle : Phone;
                return (
                  <div
                    key={loc.id}
                    className="flex flex-col justify-between gap-4 border border-[var(--color-border)] bg-white p-6 sm:flex-row sm:items-center"
                  >
                    <div>
                      <p className="font-medium text-[var(--color-deep-brown)]">{loc.name}</p>
                      <p className="mt-1 text-xs text-[var(--color-muted)]">{loc.address}</p>
                    </div>
                    {action.type === "unavailable" ? (
                      <span className="text-sm text-[var(--color-muted)]">상담 채널 준비중</span>
                    ) : (
                      <a
                        href={action.href}
                        target={action.type === "kakao" ? "_blank" : undefined}
                        rel={action.type === "kakao" ? "noopener noreferrer" : undefined}
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-dark-gold)]"
                      >
                        <Icon size={15} />
                        {action.label}
                      </a>
                    )}
                  </div>
                );
              })}
            </div>
            <p className="mt-6 text-xs text-[var(--color-muted)]">
              전체 지점과 운영시간은{" "}
              <Link href="/locations" className="underline decoration-[var(--color-gold)] underline-offset-2">
                지점 안내 페이지
              </Link>
              에서 확인하실 수 있습니다.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

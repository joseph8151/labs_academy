import { Phone } from "lucide-react";
import ConsultButton from "./ConsultButton";
import FadeUp from "./FadeUp";
import { locations } from "@/data/locations";

export default function FinalCTA() {
  const primaryPhone = locations[0]?.phone;

  return (
    <section className="bg-[var(--color-deep-brown)] py-24 md:py-32">
      <FadeUp>
        <div className="container-labs md:px-10 flex flex-col items-center text-center">
          <p className="text-xs font-semibold tracking-[0.24em] text-[var(--color-champagne)]">
            YOUR PRIVATE LANGUAGE PLAN
          </p>
          <h2 className="mt-6 max-w-xl text-[1.8rem] leading-[1.4] font-semibold text-[var(--color-secondary-bg)] sm:text-3xl md:text-[2.4rem]">
            목표를 말씀해 주세요.
            <br />
            LABS가 수업 방향을 함께 설계합니다.
          </h2>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
            <ConsultButton icon size="lg">
              카카오톡 상담하기
            </ConsultButton>
            {primaryPhone && (
              <a
                href={`tel:${primaryPhone.replace(/-/g, "")}`}
                className="inline-flex items-center gap-2 text-sm font-medium text-[#d8cfc0] transition-colors hover:text-white"
              >
                <Phone size={15} />
                전화 상담 {primaryPhone}
              </a>
            )}
          </div>
        </div>
      </FadeUp>
    </section>
  );
}

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import FadeUp from "./FadeUp";

const GOALS = [
  { goal: "4주 후 외국계 면접이 있습니다.", target: "Interview Intensive", href: "/programs/private-intensive" },
  { goal: "영어 회의에서 바로 말하고 싶습니다.", target: "Business Speaking", href: "/programs/business" },
  { goal: "OPIc 목표 등급이 필요합니다.", target: "OPIc Private Prep", href: "/programs/opic" },
  { goal: "해외 출장을 준비하고 있습니다.", target: "Business Travel Intensive", href: "/programs/private-intensive" },
  { goal: "발음과 표현을 집중적으로 교정받고 싶습니다.", target: "Speaking & Pronunciation", href: "/programs/conversation" },
  { goal: "IELTS / TOEFL 목표점수가 있습니다.", target: "Private Test Prep", href: "/programs/test-preparation" },
];

export default function GoalPrograms() {
  return (
    <section id="goal-finder" className="bg-white py-16 md:py-24 lg:py-32">
      <div className="container-labs md:px-10">
        <FadeUp>
          <p className="section-label">FIND YOUR PROGRAM</p>
          <h2 className="section-heading mt-5 max-w-lg">무엇을 이루고 싶으신가요?</h2>
        </FadeUp>

        <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden border border-[var(--color-border)] bg-[var(--color-border)] sm:grid-cols-2 md:mt-14">
          {GOALS.map((g, i) => (
            <FadeUp key={g.goal} delay={Math.min(i * 0.05, 0.24)} className="bg-white">
              <Link href={g.href} className="group flex h-full flex-col justify-between gap-6 p-7 transition-colors hover:bg-[var(--color-secondary-bg)]">
                <p className="text-[15px] leading-relaxed text-[var(--color-deep-brown)]">{g.goal}</p>
                <span className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-dark-gold)]">
                  {g.target}
                  <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </Link>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

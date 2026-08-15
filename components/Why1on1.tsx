import { Mic, Zap, Gauge, Target as TargetIcon } from "lucide-react";
import FadeUp from "./FadeUp";

const REASONS = [
  {
    icon: Mic,
    title: "Speaking Time",
    desc: "수강생이 직접 말할 수 있는 시간이 많아집니다.",
  },
  {
    icon: Zap,
    title: "Immediate Feedback",
    desc: "발음, 표현, 문장 구조를 바로 확인할 수 있습니다.",
  },
  {
    icon: Gauge,
    title: "Personal Pace",
    desc: "이미 알고 있는 내용보다 필요한 영역에 시간을 집중할 수 있습니다.",
  },
  {
    icon: TargetIcon,
    title: "Goal Focus",
    desc: "시험, 면접, 업무, 회화 등 목적에 맞춘 수업 구성이 가능합니다.",
  },
];

export default function Why1on1() {
  return (
    <section className="bg-[var(--color-primary-bg)] py-16 md:py-24 lg:py-32">
      <div className="container-labs md:px-10">
        <FadeUp>
          <p className="section-label">WHY 1:1?</p>
          <h2 className="section-heading mt-5 max-w-lg">왜 1:1 수업일까요?</h2>
        </FadeUp>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 md:mt-14 lg:grid-cols-4">
          {REASONS.map((r, i) => (
            <FadeUp key={r.title} delay={Math.min(i * 0.06, 0.24)}>
              <r.icon size={20} strokeWidth={1.5} className="text-[var(--color-dark-gold)]" />
              <h3 className="mt-4 text-base font-semibold text-[var(--color-deep-brown)]">{r.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted)]">{r.desc}</p>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

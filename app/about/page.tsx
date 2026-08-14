import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import WhyLabs from "@/components/WhyLabs";
import Comparison from "@/components/Comparison";
import PersonalCurriculum from "@/components/PersonalCurriculum";
import ProgramConsultCTA from "@/components/ProgramConsultCTA";

export const metadata: Metadata = {
  title: "About",
  description: "LABS는 그룹 수업이 아니라 상담과 레벨 진단을 바탕으로 개인별 커리큘럼을 설계하는 1:1 전문 어학원입니다.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="ABOUT LABS"
        title="나에게 맞춰지는 1:1 어학수업"
        description="목표부터 수업 방식까지, 오직 한 사람을 위해. LABS는 획일적인 그룹 수업 대신 현재 실력, 학습 목적, 시험 목표, 직업, 필요한 언어 영역, 희망 일정, 학습 속도를 상담과 레벨 진단을 통해 분석하고 개인별 학습 계획을 설계하는 1:1 전문 어학원입니다."
      />
      <WhyLabs />
      <Comparison />
      <PersonalCurriculum />
      <section className="py-16 md:py-20">
        <div className="container-labs md:px-10">
          <ProgramConsultCTA program="about" />
        </div>
      </section>
    </>
  );
}

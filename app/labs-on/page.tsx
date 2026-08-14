import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import LabsOn from "@/components/LabsOn";
import ProgramConsultCTA from "@/components/ProgramConsultCTA";

export const metadata: Metadata = {
  title: "LABS ON",
  description: "공간의 제약 없이, LABS의 1:1 수업을 실시간 화상으로 그대로 경험하세요.",
};

export default function LabsOnPage() {
  return (
    <>
      <PageHeader
        eyebrow="LABS ON"
        title="공간의 제약 없이, LABS의 1:1 수업을 그대로."
        description="실시간 화상으로 진행되는 LABS ON은 오프라인과 동일한 밀도의 1:1 수업을 어디서든 이어갈 수 있게 합니다."
      />
      <LabsOn />
      <section className="py-16 md:py-20 lg:py-24">
        <div className="container-labs md:px-10">
          <ProgramConsultCTA program="labs-on" />
        </div>
      </section>
    </>
  );
}

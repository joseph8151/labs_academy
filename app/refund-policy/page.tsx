import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "수강 및 환불정책",
  description: "LABS Academy 수강 및 환불정책 안내.",
};

export default function RefundPolicyPage() {
  return (
    <PageHeader
      eyebrow="POLICY"
      title="수강 및 환불정책"
      description="수강 및 환불정책 페이지는 준비중입니다. 구체적인 변경·환불 규정은 가까운 LABS 지점 상담 채널을 통해 확인하실 수 있습니다."
    />
  );
}

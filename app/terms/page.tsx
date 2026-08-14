import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "이용약관",
  description: "LABS Academy 이용약관 안내.",
};

export default function TermsPage() {
  return (
    <PageHeader
      eyebrow="TERMS"
      title="이용약관"
      description="이용약관 페이지는 준비중입니다. 관련 문의는 가까운 LABS 지점 상담 채널을 통해 안내받으실 수 있습니다."
    />
  );
}

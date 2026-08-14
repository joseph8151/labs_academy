import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "개인정보처리방침",
  description: "LABS Academy 개인정보처리방침 안내.",
};

export default function PrivacyPage() {
  return (
    <PageHeader
      eyebrow="PRIVACY"
      title="개인정보처리방침"
      description="개인정보처리방침 페이지는 준비중입니다. 관련 문의는 가까운 LABS 지점 상담 채널을 통해 안내받으실 수 있습니다."
    />
  );
}

import Link from "next/link";
import ConsultButton from "@/components/ConsultButton";

export default function NotFound() {
  return (
    <div className="container-labs md:px-10 flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
      <span className="font-serif text-6xl italic text-[var(--color-gold)]">404</span>
      <h1 className="mt-6 text-2xl font-semibold text-[var(--color-deep-brown)] sm:text-3xl">
        페이지를 찾을 수 없습니다.
      </h1>
      <p className="mt-4 max-w-sm text-sm leading-relaxed text-[var(--color-muted)]">
        요청하신 페이지가 삭제되었거나 주소가 변경되었을 수 있습니다.
      </p>
      <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row">
        <Link
          href="/"
          className="inline-flex h-12 items-center justify-center rounded-[var(--radius-md)] bg-[var(--color-deep-brown)] px-7 text-sm font-medium text-[var(--color-secondary-bg)] transition hover:bg-[var(--color-gold)] hover:text-[var(--color-deep-brown)]"
        >
          홈으로 돌아가기
        </Link>
        <ConsultButton variant="outline">상담 문의하기</ConsultButton>
      </div>
    </div>
  );
}

import ConsultButton from "./ConsultButton";

export default function ProgramConsultCTA({ program }: { program: string }) {
  return (
    <div className="border border-[var(--color-border)] bg-white p-8 text-center sm:p-10">
      <p className="text-lg font-medium leading-relaxed text-[var(--color-deep-brown)]">
        이 수업이 나에게 맞을지 궁금하신가요?
      </p>
      <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-[var(--color-muted)]">
        현재 실력과 목표를 알려주시면
        <br />
        가까운 LABS 지점에서 상담을 도와드립니다.
      </p>
      <div className="mt-7">
        <ConsultButton program={program} icon>
          카카오톡 상담하기
        </ConsultButton>
      </div>
    </div>
  );
}

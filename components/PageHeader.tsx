type PageHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export default function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <div className="border-b border-[var(--color-border)] bg-[var(--color-primary-bg)] py-16 md:py-20">
      <div className="container-labs md:px-10">
        <p className="section-label">{eyebrow}</p>
        <h1 className="mt-5 max-w-2xl text-[2rem] font-semibold leading-[1.3] text-[var(--color-deep-brown)] sm:text-[2.5rem]">
          {title}
        </h1>
        {description && (
          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-[var(--color-muted)]">{description}</p>
        )}
      </div>
    </div>
  );
}

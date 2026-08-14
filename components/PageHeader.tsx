type PageHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export default function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <div className="border-b border-[var(--color-border)] bg-[var(--color-primary-bg)] py-16 md:py-20 lg:py-24">
      <div className="container-labs md:px-10">
        <p className="section-label">{eyebrow}</p>
        <h1 className="section-heading mt-5 max-w-2xl">{title}</h1>
        {description && <p className="body-copy mt-5 max-w-xl">{description}</p>}
      </div>
    </div>
  );
}

type LocationMapProps = {
  name: string;
  address: string;
  className?: string;
};

/**
 * Embeds Google Maps via the key-less `output=embed` query form (no Google
 * Cloud API key configured for this project) — shows the branch's real,
 * confirmed address rather than a stand-in illustration or stock photo.
 */
export default function LocationMap({ name, address, className }: LocationMapProps) {
  const src = `https://www.google.com/maps?q=${encodeURIComponent(`${name} ${address}`)}&output=embed`;

  return (
    <div className={className}>
      <iframe
        src={src}
        title={`${name} 위치`}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="h-full w-full rounded-[var(--radius-md)] border border-[var(--color-border)]"
      />
    </div>
  );
}

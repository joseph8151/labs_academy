import { cn } from "@/lib/utils";

type EditorialPanelProps = {
  eyebrow: string;
  caption: string;
  tone?: "ivory" | "dark";
  className?: string;
};

/**
 * Abstract editorial placeholder used in place of lifestyle photography
 * until LABS supplies its own brand imagery — keeps the layout premium
 * and photo-shaped without fabricating a stock photo.
 */
export default function EditorialPanel({ eyebrow, caption, tone = "ivory", className }: EditorialPanelProps) {
  const dark = tone === "dark";

  return (
    <div className={cn("relative aspect-[4/5] w-full", className)}>
      <div
        className={cn(
          "absolute inset-0 -translate-x-3 -translate-y-3 border",
          dark ? "border-[var(--color-champagne)]/40" : "border-[var(--color-gold)]/50"
        )}
      />
      <div
        className={cn(
          "relative h-full w-full overflow-hidden border",
          dark
            ? "border-[var(--color-champagne)]/25 bg-[#2f281e]"
            : "border-[var(--color-border)] bg-[var(--color-secondary-bg)]"
        )}
      >
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(135deg, currentColor 0, currentColor 1px, transparent 1px, transparent 32px)",
            color: dark ? "#d4b896" : "#c9a86a",
          }}
        />

        {["top-6 left-6", "top-6 right-6 rotate-90", "bottom-6 left-6 -rotate-90", "bottom-6 right-6 rotate-180"].map(
          (pos) => (
            <span
              key={pos}
              className={cn("absolute h-4 w-4 border-l border-t", pos, dark ? "border-[var(--color-champagne)]/60" : "border-[var(--color-gold)]/70")}
            />
          )
        )}

        <div className="absolute inset-0 flex flex-col items-center justify-center px-8 text-center">
          <span
            className={cn(
              "font-serif text-3xl italic tracking-wide md:text-4xl",
              dark ? "text-[var(--color-champagne)]" : "text-[var(--color-gold)]"
            )}
          >
            {eyebrow}
          </span>
          <span
            className={cn(
              "mt-4 text-[11px] font-medium tracking-[0.25em]",
              dark ? "text-[#cfc3ae]/70" : "text-[var(--color-muted)]"
            )}
          >
            {caption}
          </span>
        </div>
      </div>
    </div>
  );
}

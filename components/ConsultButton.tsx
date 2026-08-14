"use client";

import { usePathname } from "next/navigation";
import { MessageCircle } from "lucide-react";
import { useConsultModal } from "@/context/ConsultModalContext";
import { cn } from "@/lib/utils";

type ConsultButtonProps = {
  children: React.ReactNode;
  program?: string;
  variant?: "gold" | "dark" | "outline" | "ghost" | "light";
  size?: "md" | "lg" | "sm";
  icon?: boolean;
  className?: string;
};

const variantClasses: Record<NonNullable<ConsultButtonProps["variant"]>, string> = {
  gold: "bg-[var(--color-deep-brown)] text-[var(--color-secondary-bg)] hover:bg-[var(--color-gold)] hover:text-[var(--color-deep-brown)]",
  dark: "bg-[var(--color-deep-brown)] text-[var(--color-secondary-bg)] hover:bg-[var(--color-gold)] hover:text-[var(--color-deep-brown)]",
  outline:
    "border border-[var(--color-gold)] text-[var(--color-deep-brown)] hover:bg-[var(--color-champagne)]/12",
  ghost: "text-[var(--color-deep-brown)] hover:text-[var(--color-dark-gold)]",
  light: "bg-[var(--color-gold)] text-[var(--color-deep-brown)] hover:bg-[var(--color-champagne)]",
};

const sizeClasses: Record<NonNullable<ConsultButtonProps["size"]>, string> = {
  sm: "h-11 px-5 text-[13px]",
  md: "h-12 px-6 text-sm",
  lg: "h-[52px] px-8 text-[15px]",
};

export default function ConsultButton({
  children,
  program,
  variant = "gold",
  size = "md",
  icon = false,
  className,
}: ConsultButtonProps) {
  const { openConsult } = useConsultModal();
  const pathname = usePathname();

  return (
    <button
      type="button"
      onClick={() => openConsult({ program, sourcePage: pathname })}
      className={cn(
        "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[var(--radius-md)] font-medium tracking-tight transition-all duration-200 ease-out hover:-translate-y-px focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-gold)]",
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
    >
      {icon && <MessageCircle size={size === "sm" ? 14 : 16} />}
      {children}
    </button>
  );
}

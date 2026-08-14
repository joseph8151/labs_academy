"use client";

import { usePathname } from "next/navigation";
import { MessageCircle } from "lucide-react";
import { useConsultModal } from "@/context/ConsultModalContext";
import { cn } from "@/lib/utils";

type ConsultButtonProps = {
  children: React.ReactNode;
  program?: string;
  variant?: "gold" | "dark" | "outline" | "ghost";
  size?: "md" | "lg" | "sm";
  icon?: boolean;
  className?: string;
};

const variantClasses: Record<NonNullable<ConsultButtonProps["variant"]>, string> = {
  gold: "bg-[var(--color-gold)] text-white hover:bg-[var(--color-dark-gold)]",
  dark: "bg-[var(--color-deep-brown)] text-[var(--color-secondary-bg)] hover:bg-[#2C2C2C]",
  outline:
    "border border-[var(--color-deep-brown)] text-[var(--color-deep-brown)] hover:bg-[var(--color-deep-brown)] hover:text-white",
  ghost: "text-[var(--color-deep-brown)] hover:text-[var(--color-dark-gold)]",
};

const sizeClasses: Record<NonNullable<ConsultButtonProps["size"]>, string> = {
  sm: "px-4 py-2 text-xs",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-sm md:text-base",
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
        "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-medium tracking-tight transition-all duration-200 ease-out hover:-translate-y-px focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-gold)]",
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

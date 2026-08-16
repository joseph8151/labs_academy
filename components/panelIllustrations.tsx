import type { ReactElement } from "react";

export type IllustrationVariant = "one-to-one" | "reception" | "classroom" | "consulting" | "study";

const shared = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.4,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

function OneToOne() {
  return (
    <svg viewBox="0 0 96 96" {...shared}>
      <rect x="8" y="26" width="34" height="24" rx="8" />
      <path d="M18 50 L14 58 L26 50" />
      <rect x="54" y="26" width="34" height="24" rx="8" />
      <path d="M78 50 L82 58 L70 50" />
      <line x1="42" y1="38" x2="54" y2="38" />
    </svg>
  );
}

function Reception() {
  return (
    <svg viewBox="0 0 96 96" {...shared}>
      <path d="M28 60 C28 38 36 28 48 28 C60 28 68 38 68 60" />
      <line x1="20" y1="60" x2="76" y2="60" />
      <circle cx="48" cy="70" r="4" />
      <line x1="48" y1="20" x2="48" y2="28" />
    </svg>
  );
}

function Classroom() {
  return (
    <svg viewBox="0 0 96 96" {...shared}>
      <rect x="20" y="20" width="56" height="34" rx="2" />
      <line x1="30" y1="30" x2="66" y2="30" />
      <line x1="30" y1="40" x2="58" y2="40" />
      <line x1="14" y1="66" x2="82" y2="66" />
      <line x1="24" y1="66" x2="24" y2="76" />
      <line x1="72" y1="66" x2="72" y2="76" />
    </svg>
  );
}

function Consulting() {
  return (
    <svg viewBox="0 0 96 96" {...shared}>
      <ellipse cx="48" cy="54" rx="32" ry="14" />
      <rect x="24" y="38" width="10" height="8" rx="2" />
      <line x1="29" y1="38" x2="29" y2="33" />
      <rect x="62" y="38" width="10" height="8" rx="2" />
      <line x1="67" y1="38" x2="67" y2="33" />
    </svg>
  );
}

function Study() {
  return (
    <svg viewBox="0 0 96 96" {...shared}>
      <rect x="14" y="46" width="40" height="8" rx="2" />
      <rect x="18" y="56" width="40" height="8" rx="2" />
      <line x1="74" y1="30" x2="74" y2="46" />
      <path d="M64 30 L84 30 L74 16 Z" />
    </svg>
  );
}

const ICONS: Record<IllustrationVariant, () => ReactElement> = {
  "one-to-one": OneToOne,
  reception: Reception,
  classroom: Classroom,
  consulting: Consulting,
  study: Study,
};

export default function PanelIllustration({ variant }: { variant: IllustrationVariant }) {
  const Icon = ICONS[variant];
  return <Icon />;
}

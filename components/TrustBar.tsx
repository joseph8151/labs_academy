import { UserCheck, ListChecks, GraduationCap, Video, Globe2, MapPin } from "lucide-react";

const TRUST_ITEMS = [
  { icon: UserCheck, label: "1:1 Private Lesson" },
  { icon: ListChecks, label: "Individual Curriculum" },
  { icon: GraduationCap, label: "Professional Instructors" },
  { icon: Video, label: "Offline & Live Online" },
  { icon: Globe2, label: "Multiple Languages" },
  { icon: MapPin, label: "Local Branch Support" },
];

export default function TrustBar() {
  return (
    <div className="border-y border-[var(--color-border)] bg-[var(--color-secondary-bg)]">
      <div className="container-labs md:px-10 grid grid-cols-2 gap-x-6 gap-y-5 py-7 sm:grid-cols-3 md:flex md:flex-wrap md:items-center md:justify-between md:gap-y-4 md:py-8 lg:flex-nowrap">
        {TRUST_ITEMS.map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-center gap-2.5">
            <Icon size={16} strokeWidth={1.5} className="shrink-0 text-[var(--color-dark-gold)]" />
            <span className="text-[12.5px] font-medium tracking-[0.01em] text-[var(--color-text)]">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

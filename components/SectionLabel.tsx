interface SectionLabelProps {
  children: React.ReactNode;
  tone?: "light" | "dark";
  className?: string;
}

export function SectionLabel({
  children,
  tone = "light",
  className = "",
}: SectionLabelProps) {
  const textColor = tone === "light" ? "text-rust/70" : "text-gold/60";
  const ruleColor = tone === "light" ? "bg-rust/40" : "bg-gold/40";

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <span className={`h-px w-7 ${ruleColor}`} aria-hidden="true" />
      <span
        className={`font-condensed text-[11px] font-normal uppercase tracking-[0.22em] ${textColor}`}
      >
        {children}
      </span>
    </div>
  );
}

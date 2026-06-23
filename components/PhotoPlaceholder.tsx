interface PhotoPlaceholderProps {
  label: string;
  sublabel?: string;
  className?: string;
}

/**
 * Visual placeholder for hero/section photography that hasn't been
 * shot yet. Once a real image exists, replace the call site with
 * <Image src={...} alt={...} fill /> from next/image — this
 * component is intentionally NOT used for real photography.
 */
export function PhotoPlaceholder({
  label,
  sublabel,
  className = "",
}: PhotoPlaceholderProps) {
  return (
    <div
      role="img"
      aria-label={label}
      className={`flex flex-col items-center justify-center gap-2 border-2 border-dashed border-gold/30 bg-gold/5 p-6 text-center ${className}`}
    >
      <span className="text-2xl" aria-hidden="true">
        📷
      </span>
      <span className="font-condensed text-xs uppercase tracking-widest text-gold/70">
        {label}
      </span>
      {sublabel ? (
        <span className="max-w-xs text-xs text-gold/40">{sublabel}</span>
      ) : null}
    </div>
  );
}

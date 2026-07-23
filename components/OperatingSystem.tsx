import type { ReactNode } from "react";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { operatingSystemCards } from "@/lib/content";
import type { OperatingSystemCard } from "@/lib/types";

// Inline SVG icons — thin stroke, architectural line style.
// Stroke color inherited from parent via currentColor; fill always none.
const icons: Record<string, ReactNode> = {
  cup: (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8" aria-hidden="true">
      <path d="M8 14 L10 26 H22 L24 14 Z" />
      <path d="M24 17 C27.5 17 27.5 23 24 23" />
      <path d="M13 11 Q11.5 9 13 7" />
      <path d="M19 11 Q17.5 9 19 7" />
    </svg>
  ),
  clipboard: (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8" aria-hidden="true">
      <rect x="8" y="7" width="16" height="21" rx="1.5" />
      <rect x="12" y="5" width="8" height="5" rx="1" />
      <line x1="12" y1="15" x2="20" y2="15" />
      <line x1="12" y1="19" x2="20" y2="19" />
      <line x1="12" y1="23" x2="17" y2="23" />
    </svg>
  ),
  truck: (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8" aria-hidden="true">
      <rect x="1" y="9" width="18" height="13" />
      <path d="M19 14 H28 L30 20 V22 H19 Z" />
      <path d="M19.5 14.5 L27 14.5 L29 19 H19.5" />
      <circle cx="7" cy="25" r="3" />
      <circle cx="24" cy="25" r="3" />
    </svg>
  ),
  board: (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8" aria-hidden="true">
      <rect x="3" y="3" width="26" height="18" rx="1" />
      <line x1="7" y1="9" x2="25" y2="9" />
      <line x1="7" y1="13" x2="20" y2="13" />
      <line x1="16" y1="21" x2="16" y2="29" />
      <line x1="10" y1="29" x2="22" y2="29" />
      <line x1="16" y1="26" x2="10" y2="29" />
    </svg>
  ),
  building: (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8" aria-hidden="true">
      <rect x="6" y="5" width="20" height="25" />
      <rect x="9" y="9" width="4" height="4" />
      <rect x="19" y="9" width="4" height="4" />
      <rect x="9" y="16" width="4" height="4" />
      <rect x="19" y="16" width="4" height="4" />
      <path d="M13 30 V24 H19 V30" />
      <line x1="3" y1="30" x2="29" y2="30" />
    </svg>
  ),
  magnifier: (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8" aria-hidden="true">
      <circle cx="13" cy="13" r="8" />
      <line x1="19" y1="19" x2="28" y2="28" />
    </svg>
  ),
  scale: (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8" aria-hidden="true">
      <line x1="6" y1="4" x2="6" y2="26" />
      <line x1="6" y1="26" x2="28" y2="26" />
      <rect x="8" y="19" width="4" height="7" />
      <rect x="14" y="13" width="4" height="13" />
      <rect x="20" y="7" width="4" height="19" />
      <path d="M4 7 L6 3 L8 7" />
    </svg>
  ),
  handshake: (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8" aria-hidden="true">
      <path d="M2 22 L9 22" />
      <path d="M30 22 L23 22" />
      <path d="M9 22 C9 20 10.5 18 13 18 L16 16 L19 18 C21.5 18 23 20 23 22" />
      <line x1="13" y1="18" x2="13" y2="27" />
      <line x1="16" y1="16" x2="16" y2="27" />
      <line x1="19" y1="18" x2="19" y2="27" />
    </svg>
  ),
};

function Card({ card }: { card: OperatingSystemCard }) {
  const icon = icons[card.iconKey];

  return (
    <article
      className="group border border-brown/10 p-3 transition-colors duration-200 hover:border-gold/40 sm:p-6"
      aria-label={card.headline}
    >
      <div className="flex items-start justify-between">
        <span className="font-condensed text-[10px] tracking-widest text-gold sm:text-[11px]">
          {card.number}
        </span>
        <span className="text-gold/60 transition-colors duration-200 group-hover:text-gold [&_svg]:h-5 [&_svg]:w-5 sm:[&_svg]:h-8 sm:[&_svg]:w-8">
          {icon}
        </span>
      </div>

      <h3 className="mt-2 font-condensed text-sm not-italic leading-tight tracking-tight text-brown sm:mt-4 sm:text-xl">
        {card.headline}
      </h3>
      <p className="mt-1.5 font-sans text-xs leading-relaxed text-brown/55 sm:mt-3 sm:text-sm">
        {card.body}
      </p>
    </article>
  );
}

export function OperatingSystem() {
  return (
    <section
      id="operating-system"
      className="relative snap-slide w-full min-h-0 py-16 md:py-24 bg-gold/15 px-6 md:px-20"
      aria-label="The MDP Operating System — how we operate"
    >
      <h2 className="mt-4 font-condensed text-[26px] leading-[0.98] tracking-tight text-brown sm:mt-6 sm:text-[52px]">
        The MDP Operating System.
      </h2>

      <p className="mt-3 max-w-lg font-sans text-sm font-normal not-italic leading-relaxed text-brown/60 sm:mt-5 sm:text-base">
        Eight principles. Built over twenty years.
        <br />
        Delivered every morning.
      </p>

      <div className="mt-6 grid grid-cols-2 gap-2 sm:mt-14 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
        {operatingSystemCards.map((card, index) => (
          <RevealOnScroll key={card.number} delay={index * 0.08}>
            <Card card={card} />
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}

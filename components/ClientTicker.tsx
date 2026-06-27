"use client";

import { useState } from "react";
import { clients } from "@/lib/content";

interface ClientTickerProps {
  variant?: "light" | "dark";
}

/**
 * Infinite scrolling logo ticker. The client array is tripled so the
 * CSS animation (translateX -33.333%) creates a seamless loop with
 * no visible reset. Replace each name span with a real SVG logo:
 * <Image src={client.logoSrc} alt={client.name} width={100} height={28} />
 */
export function ClientTicker({ variant = "light" }: ClientTickerProps) {
  const tripled = [...clients, ...clients, ...clients];
  const isDark = variant === "dark";
  const [isPaused, setIsPaused] = useState(false);

  return (
    <div
      className={`relative overflow-hidden ${
        isDark
          ? "border-y border-cream/15 bg-[#411915]"
          : "border-y border-brown/10 bg-brown/[0.04]"
      }`}
      aria-label={`Trusted by ${clients.length} companies including ${clients
        .slice(0, 5)
        .map((c) => c.name)
        .join(", ")}, and more`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div
        className="flex w-max animate-ticker gap-9 py-7"
        aria-hidden="true"
        style={{ animationPlayState: isPaused ? "paused" : "running" }}
      >
        {tripled.map((client, i) => (
          <div
            key={`${client.slug}-${i}`}
            className={`flex h-14 w-44 flex-shrink-0 items-center justify-center px-4 ${
              isDark
                ? "border border-cream/15 bg-cream/[0.03]"
                : "border border-brown/10 bg-brown/[0.03]"
            }`}
          >
            {client.logoSrc ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={client.logoSrc}
                alt={client.name}
                className="max-h-7 max-w-full opacity-60"
              />
            ) : (
              <span
                className={`font-condensed text-[13px] font-bold tracking-wide ${
                  isDark ? "text-cream/60" : "text-brown/50"
                }`}
              >
                {client.name}
              </span>
            )}
          </div>
        ))}
      </div>

      {/* Edge fades — flat colour matches section background */}
      <div
        className={`pointer-events-none absolute inset-y-0 left-0 w-20 opacity-90 ${
          isDark ? "bg-[#411915]" : "bg-parchment"
        }`}
        aria-hidden="true"
      />
      <div
        className={`pointer-events-none absolute inset-y-0 right-0 w-20 opacity-90 ${
          isDark ? "bg-[#411915]" : "bg-parchment"
        }`}
        aria-hidden="true"
      />
    </div>
  );
}

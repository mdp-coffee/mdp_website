"use client";

import { useState } from "react";
import Link from "next/link";
import { clients } from "@/lib/content";

interface ClientTickerProps {
  variant?: "light" | "dark";
}

export function ClientTicker({ variant = "light" }: ClientTickerProps) {
  const tripled = [...clients, ...clients, ...clients];
  const isDark = variant === "dark";
  const [isPaused, setIsPaused] = useState(false);

  return (
    <Link href="/clients" className="group block cursor-pointer">
      <div>
        <p className={`px-6 pb-3 pt-6 font-condensed text-[11px] uppercase tracking-[0.2em] md:px-14 ${
          isDark ? "text-cream/40" : "text-brown/40"
        }`}>
          Our Clients
        </p>
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
            className="flex w-max animate-ticker gap-4 py-4 md:gap-9 md:py-7"
            aria-hidden="true"
            style={{ animationPlayState: isPaused ? "paused" : "running" }}
          >
            {tripled.map((client, i) => (
              <div
                key={`${client.slug}-${i}`}
                className={`flex h-9 w-24 flex-shrink-0 items-center justify-center px-2 md:h-14 md:w-44 md:px-4 ${
                  isDark
                    ? "bg-white/10"
                    : "border border-brown/10 bg-brown/[0.03]"
                }`}
              >
                {client.logoSrc ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={client.logoSrc}
                    alt={client.name}
                    className={`max-h-5 max-w-full object-contain md:max-h-8 ${isDark ? "bg-white px-2 py-1 md:px-3 md:py-1.5" : ""}`}
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
      </div>
    </Link>
  );
}

"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { SectionLabel } from "@/components/SectionLabel";
import { PhotoPlaceholder } from "@/components/PhotoPlaceholder";
import { operatingFormats } from "@/lib/content";
import type { OperatingFormat } from "@/lib/types";
import { trackEvent } from "@/components/Analytics";

const themeStyles: Record<
  OperatingFormat["theme"],
  { bg: string; text: string; muted: string; tabActive: string; tabIdle: string }
> = {
  light: {
    bg: "bg-paper",
    text: "text-brown",
    muted: "text-brown/60",
    tabActive: "bg-brown text-cream",
    tabIdle: "border border-brown/15 text-brown/55",
  },
  light2: {
    bg: "bg-paper2",
    text: "text-brown",
    muted: "text-brown/60",
    tabActive: "bg-brown text-cream",
    tabIdle: "border border-brown/15 text-brown/55",
  },
  parchment: {
    bg: "bg-parchment",
    text: "text-brown",
    muted: "text-brown/60",
    tabActive: "bg-brown text-cream",
    tabIdle: "border border-brown/15 text-brown/55",
  },
  dark: {
    bg: "bg-paper",
    text: "text-brown",
    muted: "text-brown/60",
    tabActive: "bg-brown text-cream",
    tabIdle: "border border-brown/15 text-brown/55",
  },
};

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 60 : -60,
    opacity: 0,
  }),
  center: { x: 0, opacity: 1 },
  exit: (direction: number) => ({
    x: direction > 0 ? -60 : 60,
    opacity: 0,
  }),
};

/**
 * Operating Formats — a single-viewport, user-controlled explorer.
 * Replaces the previous 4-screen vertical scroll. Click a tab, use
 * the arrow buttons, or press ← → to move between formats. Content
 * cross-slides horizontally; the page itself never scrolls.
 */
export function OperatingFormats() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const goTo = useCallback(
    (next: number) => {
      const clamped = (next + operatingFormats.length) % operatingFormats.length;
      setDirection(clamped > index ? 1 : -1);
      setIndex(clamped);
      trackEvent("format_explorer_navigate", {
        format: operatingFormats[clamped]?.name ?? "",
      });
    },
    [index]
  );

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "ArrowRight") goTo(index + 1);
      if (e.key === "ArrowLeft") goTo(index - 1);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [index, goTo]);

  const format = operatingFormats[index];
  if (!format) return null;
  const theme = themeStyles[format.theme];

  return (
    <section
      id="formats"
      className={`snap-slide relative flex min-h-[100svh] w-full flex-col overflow-hidden ${theme.bg} px-6 pt-20 md:px-16`}
      aria-label="MDP Coffee House operating formats — explore our service formats"
      aria-roledescription="carousel"
    >
      <SectionLabel tone={format.theme === "dark" ? "dark" : "light"}>
        What We Do
      </SectionLabel>

      {/* Tabs */}
      <div
        className="mt-6 flex flex-wrap gap-2"
        role="tablist"
        aria-label="Operating formats"
      >
        {operatingFormats.map((fmt, i) => (
          <button
            key={fmt.num}
            type="button"
            role="tab"
            aria-selected={i === index}
            onClick={() => goTo(i)}
            className={`px-5 py-3 text-left transition-colors ${
              i === index ? theme.tabActive : theme.tabIdle
            }`}
          >
            <span className="block font-condensed text-[10px] tracking-widest opacity-70">
              {fmt.num}
            </span>
            <span className="block font-condensed text-sm font-bold tracking-tight">
              {fmt.category}
            </span>
          </button>
        ))}
      </div>

      {/* Active panel */}
      <div className="relative mt-8 flex-1 overflow-hidden">
        <AnimatePresence mode="wait" custom={direction} initial={false}>
          <motion.div
            key={format.num}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.45, ease: "easeInOut" }}
            className="grid h-full grid-cols-1 gap-8 md:grid-cols-2"
          >
            {format.photo ? (
              <div className="relative min-h-[240px] overflow-hidden md:min-h-full">
                <Image
                  src={format.photo}
                  alt={format.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            ) : (
              <PhotoPlaceholder
                label={`Format ${format.num}: ${format.name}`}
                sublabel={`Operating Formats · ${index + 1} of ${operatingFormats.length}`}
                className="min-h-[240px] border-0"
              />
            )}

            <div className="flex flex-col justify-center pb-10">
              <h2
                className={`font-condensed text-[40px] leading-[0.95] tracking-tight ${theme.text} sm:text-[52px]`}
              >
                {format.name}
              </h2>
              <div className="mt-5 h-px w-12 bg-rust/35" aria-hidden="true" />
              <p
                className={`mt-5 max-w-md font-serif text-lg leading-relaxed sm:text-xl ${theme.text} opacity-75`}
              >
                {format.description}
              </p>
              <p className="mt-7 font-condensed text-[11px] uppercase tracking-wider text-gold/70">
                {format.details}
              </p>
              <p className={`mt-3 max-w-md font-serif ${theme.muted}`}>
                {format.example}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between pb-8">
        <button
          type="button"
          onClick={() => goTo(index - 1)}
          aria-label="Previous format"
          className={`flex h-11 w-11 items-center justify-center border transition-colors ${
            format.theme === "dark"
              ? "border-cream/20 text-cream/60 hover:border-cream/50"
              : "border-brown/20 text-brown/60 hover:border-brown/50"
          }`}
        >
          ←
        </button>

        <div className="flex gap-2" role="presentation">
          {operatingFormats.map((fmt, i) => (
            <span
              key={fmt.num}
              className={`h-1.5 w-1.5 rounded-full transition-colors ${
                i === index
                  ? "bg-rust"
                  : format.theme === "dark"
                    ? "bg-cream/20"
                    : "bg-brown/15"
              }`}
              aria-hidden="true"
            />
          ))}
        </div>

        <button
          type="button"
          onClick={() => goTo(index + 1)}
          aria-label="Next format"
          className={`flex h-11 w-11 items-center justify-center border transition-colors ${
            format.theme === "dark"
              ? "border-cream/20 text-cream/60 hover:border-cream/50"
              : "border-brown/20 text-brown/60 hover:border-brown/50"
          }`}
        >
          →
        </button>
      </div>
    </section>
  );
}

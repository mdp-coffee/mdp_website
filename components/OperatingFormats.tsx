"use client";

import React, { useEffect, useState, useCallback, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { SectionLabel } from "@/components/SectionLabel";
import { PhotoPlaceholder } from "@/components/PhotoPlaceholder";
import { operatingFormats } from "@/lib/content";
import type { OperatingFormat } from "@/lib/types";
import { trackEvent } from "@/components/Analytics";
import { products } from "@/content/products";
import { formatPages } from "@/content/operating-formats-seo";

const themeStyles: Record<
  OperatingFormat["theme"],
  {
    bg: string;
    text: string;
    muted: string;
    tabActive: string;
    tabIdle: string;
    divider: string;
    productLabel: string;
    productCardBg: string;
    productCardBorder: string;
    productCardText: string;
  }
> = {
  light: {
    bg: "bg-paper",
    text: "text-brown",
    muted: "text-brown/60",
    tabActive: "bg-brown text-cream",
    tabIdle: "border border-brown/15 text-brown/55",
    divider: "bg-brown/10",
    productLabel: "text-rust/60",
    productCardBg: "bg-brown/5",
    productCardBorder: "border-brown/12",
    productCardText: "text-brown",
  },
  light2: {
    bg: "bg-paper2",
    text: "text-brown",
    muted: "text-brown/60",
    tabActive: "bg-brown text-cream",
    tabIdle: "border border-brown/15 text-brown/55",
    divider: "bg-brown/10",
    productLabel: "text-rust/60",
    productCardBg: "bg-brown/5",
    productCardBorder: "border-brown/12",
    productCardText: "text-brown",
  },
  parchment: {
    bg: "bg-parchment",
    text: "text-brown",
    muted: "text-brown/60",
    tabActive: "bg-brown text-cream",
    tabIdle: "border border-brown/15 text-brown/55",
    divider: "bg-brown/10",
    productLabel: "text-rust/60",
    productCardBg: "bg-brown/5",
    productCardBorder: "border-brown/12",
    productCardText: "text-brown",
  },
  dark: {
    bg: "bg-paper",
    text: "text-brown",
    muted: "text-brown/60",
    tabActive: "bg-brown text-cream",
    tabIdle: "border border-brown/15 text-brown/55",
    divider: "bg-cream/10",
    productLabel: "text-gold/50",
    productCardBg: "bg-cream/10",
    productCardBorder: "border-cream/15",
    productCardText: "text-cream",
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
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

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

  const onMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    setStartX(e.pageX - (scrollRef.current?.offsetLeft ?? 0));
    setScrollLeft(scrollRef.current?.scrollLeft ?? 0);
  };
  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - (scrollRef.current?.offsetLeft ?? 0);
    const walk = (x - startX) * 1.5;
    if (scrollRef.current) scrollRef.current.scrollLeft = scrollLeft - walk;
  };
  const onMouseUp = () => setIsDragging(false);

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
        className="mt-6 flex w-full gap-1 sm:flex sm:flex-wrap sm:gap-2"
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
            className={`min-w-0 flex-1 px-1 py-1.5 text-left transition-colors sm:flex-1 sm:px-5 sm:py-3 ${
              i === index ? theme.tabActive : theme.tabIdle
            }`}
          >
            <span className="block font-condensed text-[7px] tracking-widest opacity-70 sm:text-[10px]">
              {fmt.num}
            </span>
            <span className="block truncate font-condensed text-[8px] font-bold leading-tight tracking-tight sm:text-sm">
              {fmt.category}
            </span>
          </button>
        ))}
      </div>

      {/* Active panel */}
      <div className="relative mt-8 overflow-hidden">
        <AnimatePresence mode="wait" custom={direction} initial={false}>
          <motion.div
            key={format.num}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.45, ease: "easeInOut" }}
            className="flex flex-col gap-8 md:flex-row md:items-start"
          >
            {format.photo ? (
              <div
                className="relative w-full overflow-hidden md:w-1/2"
                style={{ height: "220px" }}
              >
                <Image
                  src={format.photo}
                  alt={format.name}
                  fill
                  className="object-cover"
                  style={{ objectPosition: index === 0 ? "center 20%" : "center" }}
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

            <div className="flex w-full flex-col justify-center pb-10 md:w-1/2">
              <h2
                className={`font-condensed text-[30px] leading-[0.98] tracking-tight ${theme.text} sm:text-[52px]`}
              >
                {format.name}
              </h2>
              <div className="mt-5 h-px w-12 bg-rust/35" aria-hidden="true" />
              <p
                className={`mt-5 max-w-md font-sans text-sm leading-relaxed sm:text-xl ${theme.text} opacity-75`}
              >
                {format.description}
              </p>
              <p className="mt-7 font-condensed text-[11px] uppercase tracking-wider text-gold/70">
                {format.details}
              </p>
              <p className={`mt-3 max-w-md font-sans ${theme.muted}`}>
                {format.example}
              </p>
              {formatPages.find((f) => f.category === format.category) && (
                <Link
                  href={`/services/${formatPages.find((f) => f.category === format.category)?.slug}`}
                  className={`mt-5 inline-block w-fit font-condensed text-xs uppercase tracking-wider underline underline-offset-4 ${theme.text} opacity-70 transition-opacity hover:opacity-100`}
                >
                  Learn more about this format →
                </Link>
              )}
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

      {/* Products */}
      <div className="pb-6">
        <div className={`h-px ${theme.divider}`} aria-hidden="true" />
        <p
          className={`mb-3 mt-6 font-condensed text-[11px] uppercase tracking-widest ${theme.productLabel}`}
        >
          Our Products
        </p>
        <div
          ref={scrollRef}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseUp}
          className={`scrollbar-hide flex select-none snap-x snap-mandatory flex-row gap-4 overflow-x-auto pb-2 ${
            isDragging ? "cursor-grabbing" : "cursor-grab"
          }`}
        >
          {products.map((product) => (
            <div
              key={product.id}
              className={`w-[160px] flex-shrink-0 snap-start overflow-hidden border transition-colors duration-200 hover:border-gold/40 ${theme.productCardBorder}`}
            >
              <div className="relative h-[120px] w-full overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                  sizes="160px"
                />
              </div>
              <p
                className={`px-3 py-2.5 font-condensed text-sm font-bold tracking-tight ${theme.productCardText} ${theme.productCardBg}`}
              >
                {product.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

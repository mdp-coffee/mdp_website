"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { NavBar } from "@/components/NavBar";
import { heroPhotos } from "@/lib/content";
import { trackEvent } from "@/components/Analytics";

const HOLD_MS = 8000;
const CROSSFADE_S = 3;

function G({ children }: { children: string }) {
  return <span className="font-black text-gold">{children}</span>;
}

const rotatingLines = [
  <><G>M</G>y <G>D</G>aily <G>P</G>eace. In a paper cup.</>,
  <><G>M</G>otivation <G>D</G>uring <G>P</G>ressure. We&apos;re here for that.</>,
  <><G>M</G>ornings <G>D</G>eserve a <G>P</G>erfect start. We&apos;ve believed that since 2005.</>,
  <><G>M</G>y <G>D</G>aily <G>P</G>ause. One cup at a time.</>,
];

/**
 * The hero is NOT a carousel. Per the creative brief: the headline
 * never moves. Only the photography dissolves behind it, on an
 * extremely slow loop, to feel like documentary atmosphere rather
 * than a slideshow. No arrows, no dots, no indicators.
 */
export function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (heroPhotos.length === 0 || shouldReduceMotion) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % heroPhotos.length);
    }, HOLD_MS);
    return () => clearInterval(interval);
  }, [shouldReduceMotion]);

  const rotatingIndex = activeIndex % rotatingLines.length;

  const fadeIn = (delay: number) =>
    shouldReduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 12 } as const,
          animate: { opacity: 1, y: 0 } as const,
          transition: { duration: 0.7, delay, ease: "easeOut" as const },
        };

  return (
    <section
      id="hero"
      className="snap-slide relative flex h-[100svh] min-h-[640px] w-full items-center overflow-hidden bg-[#411915]"
      aria-label="MDP Coffee House — the coffee companion of India's workday"
    >
      {/* Photo crossfade layer */}
      <div className="absolute inset-0" aria-hidden="true">
        {heroPhotos.map((photo, i) => (
          <div
            key={photo.id}
            className="absolute inset-0 transition-opacity ease-in-out"
            style={{
              opacity: i === activeIndex ? 1 : 0,
              transitionDuration: `${CROSSFADE_S}s`,
            }}
          >
            {photo.src ? (
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover"
                sizes="100vw"
                priority={i === 0}
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-[#411915]">
                <span className="font-condensed text-xs uppercase tracking-widest text-cream/20">
                  Photo {photo.id} — {photo.caption}
                </span>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Dark overlay — flat colour for text legibility */}
      <div className="absolute inset-0 bg-[#411915]/75" aria-hidden="true" />

      <NavBar />

      {/* Static foreground — never moves regardless of photo state */}
      <div className="relative z-10 px-6 pt-16 md:px-20">
        <motion.div
          className="mb-5 flex items-center gap-3"
          {...fadeIn(0.15)}
        >
          <span className="h-px w-8 bg-cream/25" aria-hidden="true" />
          <span className="font-condensed text-[11px] uppercase tracking-[0.3em] text-cream/50">
            Since 2005 · India
          </span>
        </motion.div>

        <h1 className="font-condensed text-[52px] leading-[0.88] tracking-tightest text-cream sm:text-[68px] md:text-[88px]">
          <motion.span className="block" {...fadeIn(0.3)}>
            Made with Care
          </motion.span>
          <motion.span className="block" {...fadeIn(0.5)}>
            Served with Care.
          </motion.span>
        </h1>

        <div className="mt-8">
          <AnimatePresence mode="wait">
            <motion.p
              key={rotatingIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10, transition: { duration: 0.35, ease: "easeIn" } }}
              transition={{ duration: 0.65, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="font-sans italic text-lg leading-relaxed text-cream/50 md:text-xl"
            >
              {rotatingLines[rotatingIndex]}
            </motion.p>
          </AnimatePresence>
        </div>

        <motion.div className="mt-10 flex flex-wrap gap-4" {...fadeIn(1.0)}>
          <a
            href="#contact"
            onClick={() => trackEvent("cta_click", { location: "hero" })}
            className="bg-gold px-7 py-4 font-condensed text-sm font-bold uppercase tracking-wider text-brown transition-colors hover:bg-gold/90"
          >
            Partner With Us
          </a>
          <a
            href="#story"
            className="border border-cream/30 px-7 py-4 font-condensed text-sm uppercase tracking-wider text-cream/60 transition-colors hover:border-cream hover:text-cream"
          >
            Our Story
          </a>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-cream/30">
        <span className="font-condensed text-lg" aria-hidden="true">
          ↓
        </span>
        <span className="sr-only">Scroll to continue</span>
      </div>
    </section>
  );
}

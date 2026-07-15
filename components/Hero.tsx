"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { trackEvent } from "@/components/Analytics";

function G({ children }: { children: string }) {
  return <span className="font-black text-gold">{children}</span>;
}

const rotatingLines = [
  <><G>M</G>y <G>D</G>aily <G>P</G>eace. In a paper cup.</>,
  <><G>M</G>otivation <G>D</G>uring <G>P</G>ressure. We&apos;re here for that.</>,
  <><G>M</G>ornings <G>D</G>eserve a <G>P</G>erfect start. We&apos;ve believed that since 2005.</>,
  <><G>M</G>y <G>D</G>aily <G>P</G>ause. One cup at a time.</>,
];

export function Hero() {
  const [rotatingIndex, setRotatingIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion) return;
    const interval = setInterval(() => {
      setRotatingIndex((prev) => (prev + 1) % rotatingLines.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [shouldReduceMotion]);

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
      className="snap-slide relative flex min-h-[640px] w-full items-start overflow-hidden bg-[#411915] md:h-[100svh] md:items-center"
      aria-label="MDP Coffee House — the coffee companion of India's workday"
    >
      {/* Background image */}
      <div className="absolute inset-0" aria-hidden="true">
        {/* Desktop background */}
        <Image
          src="/landing_page/hero_2.png"
          alt="MDP Coffee House"
          fill
          className="hidden object-cover object-center md:block"
          sizes="100vw"
          priority
        />
        {/* Mobile background */}
        <Image
          src="/landing_page/hero_mobile1.jpg"
          alt="MDP Coffee House"
          fill
          className="block object-cover object-top md:hidden"
          sizes="100vw"
          priority
        />
      </div>

      {/* Morning light sweep — plays once on load, skipped entirely for reduced motion */}
      {!shouldReduceMotion && (
        <div className="pointer-events-none absolute inset-0 z-[1] overflow-hidden" aria-hidden="true">
          <motion.div
            className="absolute inset-y-0 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-gold/25 to-transparent"
            initial={{ x: "-150%" }}
            animate={{ x: "350%" }}
            transition={{ duration: 2.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>
      )}

      {/* Foreground content */}
      <div className="relative z-10 w-full px-6 pt-24 md:w-auto md:px-20 md:pt-16">
        <motion.div className="mb-5 flex items-center gap-3" {...fadeIn(0.15)}>
          <span className="h-px w-8 bg-brown/25" aria-hidden="true" />
          <span className="font-condensed text-[11px] uppercase tracking-[0.3em] text-brown/50">
            Since 2005 · India
          </span>
        </motion.div>

        <h1 className="font-condensed text-[32px] leading-[0.95] tracking-tightest text-brown sm:text-[68px] md:text-[88px]">
          <motion.span className="block" {...fadeIn(0.3)}>
            Made with Care.
          </motion.span>
          <motion.span className="block" {...fadeIn(0.5)}>
            Served with Care.
          </motion.span>
        </h1>

        <motion.div className="mt-5 min-h-[46px] md:mt-8 md:min-h-0" {...fadeIn(0.7)}>
          <AnimatePresence mode="wait">
            <motion.p
              key={rotatingIndex}
              className="font-sans italic text-sm leading-relaxed text-brown/50 md:text-xl"
              initial={shouldReduceMotion ? {} : { opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={shouldReduceMotion ? {} : { opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              {rotatingLines[rotatingIndex]}
            </motion.p>
          </AnimatePresence>
        </motion.div>

        <motion.div className="mt-6 flex flex-col gap-3 md:mt-10 md:flex-row md:flex-wrap md:gap-4" {...fadeIn(1.0)}>
          <a
            href="#contact"
            onClick={() => trackEvent("cta_click", { location: "hero" })}
            className="w-full bg-gold px-5 py-3 text-center font-condensed text-xs font-bold uppercase tracking-wider text-brown transition-colors hover:bg-gold/90 md:w-auto md:px-7 md:py-4 md:text-sm"
          >
            Partner With Us
          </a>
          <Link
            href="/about"
            className="w-full border border-brown/30 bg-paper/80 px-5 py-3 text-center font-condensed text-xs uppercase tracking-wider text-brown/60 transition-colors hover:border-brown hover:text-brown md:w-auto md:bg-transparent md:px-7 md:py-4 md:text-sm"
          >
            Our Story
          </Link>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-brown/30">
        <span className="font-condensed text-lg" aria-hidden="true">↓</span>
        <span className="sr-only">Scroll to continue</span>
      </div>
    </section>
  );
}

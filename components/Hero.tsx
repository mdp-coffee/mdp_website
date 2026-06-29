"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { trackEvent } from "@/components/Analytics";

function G({ children }: { children: string }) {
  return <span className="font-black text-gold">{children}</span>;
}

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

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
      className="snap-slide relative flex h-[100svh] min-h-[640px] w-full items-center overflow-hidden bg-[#F9F0E1]"
      aria-label="MDP Coffee House — the coffee companion of India's workday"
    >
      {/* Background image */}
      <div className="absolute inset-0" aria-hidden="true">
        <Image
          src="/landing_page/Landing_page_2.jpg"
          alt="MDP Coffee House"
          fill
          className="object-cover object-center"
          sizes="100vw"
          priority
        />
      </div>

      {/* Static foreground */}
      <div className="relative z-10 px-6 md:px-20">
        <motion.div className="mb-5 flex items-center gap-3" {...fadeIn(0.15)}>
          <span className="h-px w-8 bg-brown/25" aria-hidden="true" />
          <span className="font-condensed text-[11px] uppercase tracking-[0.3em] text-brown/50">
            Since 2005 · India
          </span>
        </motion.div>

        <h1 className="font-condensed text-[52px] leading-[0.88] tracking-tightest text-brown sm:text-[68px] md:text-[88px]">
          <motion.span className="block" {...fadeIn(0.3)}>
            Made with Care
          </motion.span>
          <motion.span className="block" {...fadeIn(0.5)}>
            Served with Care.
          </motion.span>
        </h1>

        <motion.p
          className="mt-8 font-sans italic text-lg leading-relaxed text-brown/60 md:text-xl"
          {...fadeIn(0.7)}
        >
          <G>M</G>y <G>D</G>aily <G>P</G>eace. In a paper cup.
        </motion.p>

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
            className="border border-brown/30 px-7 py-4 font-condensed text-sm uppercase tracking-wider text-brown/60 transition-colors hover:border-brown hover:text-brown"
          >
            Our Story
          </a>
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

"use client";

import { motion, useReducedMotion } from "framer-motion";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { GalleryGrid } from "@/components/GalleryGrid";
import { MOTION } from "@/lib/motion";

export function GalleryContent() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="min-h-screen bg-paper">
      <NavBar />

      {/* Hero */}
      <section
        className="flex min-h-[40vh] w-full flex-col justify-end bg-[#411915] px-6 pb-16 pt-32 md:px-20"
        aria-label="MDP Coffee House gallery"
      >
        <p className="mb-4 font-condensed text-[11px] uppercase tracking-[0.3em] text-gold/50">
          Gallery
        </p>
        <motion.h1
          className="font-condensed text-[52px] leading-[0.9] tracking-tightest text-cream sm:text-[68px]"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: MOTION.slow, delay: 0.3, ease: MOTION.ease }}
        >
          Twenty years of mornings.
        </motion.h1>
        <motion.p
          className="mt-4 font-sans text-xl text-cream/50"
          initial={shouldReduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: MOTION.base, delay: 0.5, ease: MOTION.ease }}
        >
          Every cup. Every counter. Every morning.
        </motion.p>
      </section>

      {/* Tabs + grid + lightbox */}
      <GalleryGrid />

      <Footer />
    </div>
  );
}

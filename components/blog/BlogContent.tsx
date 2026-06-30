"use client";

import { motion, useReducedMotion } from "framer-motion";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { MOTION } from "@/lib/motion";

export function BlogContent() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="bg-paper">
      <NavBar />

      {/* Hero */}
      <section
        className="flex min-h-[40vh] w-full flex-col justify-end bg-[#411915] px-6 pb-10 pt-24 md:px-20 md:pb-16 md:pt-32"
        aria-label="Blog hero"
      >
        <p className="mb-4 font-condensed text-[11px] uppercase tracking-[0.3em] text-gold/50">
          Insights
        </p>
        <motion.h1
          className="font-condensed text-[32px] leading-[0.95] tracking-tightest text-cream sm:text-[64px]"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: MOTION.slow, delay: 0.3, ease: MOTION.ease }}
        >
          From the people who show up
          <br />
          every morning.
        </motion.h1>
        <motion.p
          className="mt-4 max-w-xl font-sans text-sm text-cream/55 md:mt-6 md:text-xl"
          initial={shouldReduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: MOTION.base, delay: 0.5, ease: MOTION.ease }}
        >
          Perspectives on coffee, workplaces, and twenty years of learning what
          India&rsquo;s offices need.
        </motion.p>
      </section>

      {/* Empty state */}
      <RevealOnScroll delay={0.2}>
        <section className="px-6 py-14 text-center md:px-20 md:py-24">
          <p className="select-none font-condensed text-4xl font-black text-brown/10 sm:text-6xl">
            Coming Soon
          </p>
          <h2 className="mt-[-8px] font-condensed text-xl text-brown sm:mt-[-12px] sm:text-3xl">
            First article drops soon.
          </h2>
          <p className="mx-auto mt-4 max-w-sm font-sans text-brown/55">
            We are putting together perspectives worth reading. Check back soon
            — or follow us on LinkedIn for updates.
          </p>
        </section>
      </RevealOnScroll>

      <Footer />
    </div>
  );
}

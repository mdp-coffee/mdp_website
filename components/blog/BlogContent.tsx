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
        className="flex min-h-[40vh] w-full flex-col justify-end bg-[#411915] px-6 pb-16 pt-32 md:px-20"
        aria-label="Blog hero"
      >
        <p className="mb-4 font-condensed text-[11px] uppercase tracking-[0.3em] text-gold/50">
          Insights
        </p>
        <motion.h1
          className="font-condensed text-[48px] leading-[0.9] tracking-tightest text-cream sm:text-[64px]"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: MOTION.slow, delay: 0.3, ease: MOTION.ease }}
        >
          From the people who show up
          <br />
          every morning.
        </motion.h1>
        <motion.p
          className="mt-6 max-w-xl font-sans text-xl text-cream/55"
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
        <section className="px-6 py-24 text-center md:px-20">
          <p className="select-none font-condensed text-6xl font-black text-brown/10">
            Coming Soon
          </p>
          <h2 className="mt-[-12px] font-condensed text-3xl text-brown">
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

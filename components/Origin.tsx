"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { SectionLabel } from "@/components/SectionLabel";
import { PhotoPlaceholder } from "@/components/PhotoPlaceholder";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { MOTION } from "@/lib/motion";

export function Origin() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="story"
      className="snap-slide relative w-full overflow-hidden bg-paper px-6 py-24 md:px-20"
      aria-label="Our story — MDP Coffee House since 2005"
    >
      {/* Ghost year watermark — desktop only */}
      <motion.span
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-0 hidden select-none font-condensed text-[260px] font-black leading-none text-brown lg:block"
        initial={shouldReduceMotion ? false : { opacity: 0 }}
        whileInView={{ opacity: 0.04 }}
        viewport={MOTION.viewport}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        2005
      </motion.span>

      {/* ── Part 1 — Company description ──────────────────────────── */}
      <div className="relative z-10 grid grid-cols-1 gap-16 lg:grid-cols-[2fr_3fr] lg:gap-12">

        {/* LEFT column */}
        <div className="order-2 flex flex-col justify-center lg:order-1">
          <RevealOnScroll delay={0}>
            <SectionLabel tone="light">Our Story</SectionLabel>
          </RevealOnScroll>

          <h2 className="mt-8">
            <motion.span
              className="block font-condensed text-[72px] leading-[0.95] tracking-tight text-brown sm:text-[88px]"
              initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={MOTION.viewport}
              transition={{ duration: 0.7, delay: 0, ease: MOTION.ease }}
            >
              One kiosk.
            </motion.span>
            <motion.span
              className="block font-condensed text-[48px] leading-[0.92] tracking-tight text-brown/75 sm:text-[60px]"
              initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={MOTION.viewport}
              transition={{ duration: 0.7, delay: 0.15, ease: MOTION.ease }}
            >
              Twenty years later,
            </motion.span>
            <motion.span
              className="block font-condensed text-[48px] not-italic leading-[0.92] tracking-tight text-brown/55 md:text-[60px]"
              initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={MOTION.viewport}
              transition={{ duration: 0.7, delay: 0.3, ease: MOTION.ease }}
            >
              still showing up.
            </motion.span>
          </h2>

          {/* Gold rule */}
          <motion.div
            className="mt-8 h-px w-16 origin-left bg-gold/50"
            initial={shouldReduceMotion ? false : { scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={MOTION.viewport}
            transition={{ duration: 0.7, delay: 0.35, ease: MOTION.ease }}
            aria-hidden="true"
          />

          {/* Description */}
          <RevealOnScroll delay={0.2}>
            <p className="mt-6 max-w-[560px] font-sans text-base not-italic leading-relaxed text-brown/70 md:text-lg">
              MDP Food &amp; Beverages Pvt. Ltd. operates MDP Coffee House —
              India&rsquo;s proven South Indian filter coffee brand with 20+
              years of operational experience. With 85+ active locations,
              1,00,000+ cups served daily and a Fortune 500 client base spanning
              IT, banking, consulting and retail, MDP is one of India&rsquo;s
              most established managed beverage service providers.
              Headquartered in Bengaluru, MDP operates corporate kiosks, QSR
              restaurants, retail outlets and outdoor catering across 15+ cities.
            </p>
          </RevealOnScroll>
        </div>

        {/* RIGHT column */}
        <div className="order-1 flex flex-col justify-center lg:order-2">
          <RevealOnScroll delay={0.3}>
            <div>
              <PhotoPlaceholder
                label="Archive photo — earliest available MDP image"
                sublabel="Since 2005 · Bengaluru, India"
                className="h-52 w-full border-0 bg-gold/5"
              />
              <p className="mt-2 font-condensed text-[11px] uppercase tracking-widest text-brown/35">
                Since 2005 · Bengaluru, India
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </div>

      {/* ── Divider ────────────────────────────────────────────────── */}
      <motion.div
        className="relative z-10 mt-16 mb-14 h-px w-full origin-left bg-brown/10"
        initial={shouldReduceMotion ? false : { scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        aria-hidden="true"
      />

      {/* ── Part 2 — Vision & Mission ──────────────────────────────── */}
      <div className="relative z-10 grid grid-cols-1 gap-8 md:grid-cols-[1fr_1px_1fr] md:gap-12">

        {/* Vision */}
        <RevealOnScroll delay={0.1}>
          <div>
            <p className="mb-4 font-condensed text-[20px] leading-[0.95] tracking-tight text-rust/60 sm:text-[20px]">
              Vision
            </p>
            <h3 className="mb-4 font-sans text-xl not-italic leading-snug text-brown md:text-2xl">
              To be India&rsquo;s most trusted South Indian beverage brand —
              present in every campus, transit hub, and community where people
              gather.
            </h3>
          </div>
        </RevealOnScroll>

        {/* Vertical separator */}
        <div className="hidden self-stretch bg-brown/10 md:block" aria-hidden="true" />

        {/* Mission */}
        <RevealOnScroll delay={0.2}>
          <div>
            <p className="mb-4 font-condensed text-[20px] leading-[0.95] tracking-tight text-rust/60 sm:text-[20px]">
              Mission
            </p>
            <h3 className="mb-4 font-sans text-xl not-italic leading-snug text-brown md:text-2xl">
              To serve authentic South Indian filter coffee consistently,
              accessibly, and with genuine care — across every format we
              operate.
            </h3>
          </div>
        </RevealOnScroll>

      </div>

      <RevealOnScroll delay={0.3}>
        <div className="mt-10">
          <Link
            href="/about"
            className="inline-block border border-brown/25 px-7 py-3 font-condensed text-sm uppercase tracking-wider text-brown/60 transition-colors hover:border-brown hover:text-brown"
          >
            Our Full Story →
          </Link>
        </div>
      </RevealOnScroll>

    </section>
  );
}

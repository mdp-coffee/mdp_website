"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { SectionLabel } from "@/components/SectionLabel";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { MOTION } from "@/lib/motion";
import { formatPages } from "@/content/operating-formats-seo";
import type { FormatPageData } from "@/lib/types";

export function FormatContent({ format }: { format: FormatPageData }) {
  const shouldReduceMotion = useReducedMotion();
  const otherFormats = formatPages.filter((f) => f.slug !== format.slug);

  return (
    <>
      <NavBar />
      <div className="bg-paper pt-16">
        <section
          className="flex min-h-[45vh] w-full flex-col justify-end bg-[#411915] px-6 pb-16 pt-16 md:px-20"
          aria-label={`MDP Coffee House ${format.category} format`}
        >
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: MOTION.base, delay: 0.2, ease: MOTION.ease }}
          >
            <SectionLabel tone="dark">{format.category} · Operating Format</SectionLabel>
          </motion.div>
          <motion.h1
            className="mt-6 font-condensed text-[48px] font-black leading-[0.92] tracking-tightest text-cream sm:text-[68px]"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: MOTION.slow, delay: 0.35, ease: MOTION.ease }}
          >
            {format.name}
          </motion.h1>
          <motion.p
            className="mt-6 max-w-2xl font-sans text-xl italic leading-relaxed text-cream/60"
            initial={shouldReduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: MOTION.base, delay: 0.55, ease: MOTION.ease }}
          >
            {format.intro}
          </motion.p>
          <motion.p
            className="mt-10 font-condensed text-[10px] uppercase tracking-widest text-gold"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: MOTION.base, delay: 0.4, ease: MOTION.ease }}
          >
            {format.details}
          </motion.p>
        </section>

        <section className="px-6 py-20 md:px-20" aria-label={`About the ${format.category} format`}>
          <RevealOnScroll delay={0}>
            <h2 className="font-condensed text-[32px] font-black leading-tight text-brown sm:text-[40px]">
              {format.h2}
            </h2>
          </RevealOnScroll>
          <div className="mt-8 max-w-3xl space-y-6">
            {format.paragraphs.map((para, i) => (
              <RevealOnScroll key={i} delay={MOTION.stagger(i, 0.1)}>
                <p className="font-sans text-lg leading-relaxed text-brown/70">{para}</p>
              </RevealOnScroll>
            ))}
          </div>
        </section>

        <RevealOnScroll delay={0.4}>
          <section className="px-6 pb-16 md:px-20">
            <div className="relative h-80 w-full max-w-3xl overflow-hidden">
              <Image
                src={format.photo}
                alt={`MDP Coffee House ${format.category} format`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 768px"
              />
            </div>
          </section>
        </RevealOnScroll>

        <section className="bg-paper2 px-6 py-16 md:px-20" aria-label="Other operating formats">
          <RevealOnScroll delay={0}>
            <h2 className="font-condensed text-[24px] font-black text-brown">
              Explore other formats
            </h2>
          </RevealOnScroll>
          <ul className="mt-6 flex flex-wrap gap-3">
            {otherFormats.map((f, index) => (
              <RevealOnScroll key={f.slug} delay={MOTION.stagger(index, 0.06)}>
                <li>
                  <Link
                    href={`/services/${f.slug}`}
                    className="block border border-brown/15 px-4 py-2 font-condensed text-sm text-brown/60 transition-colors hover:border-gold hover:text-brown"
                  >
                    {f.category}
                  </Link>
                </li>
              </RevealOnScroll>
            ))}
          </ul>
        </section>

        <section className="flex flex-col items-center bg-[#411915] px-6 py-20 text-center md:px-20">
          <RevealOnScroll delay={0}>
            <h2 className="font-condensed text-[40px] font-black leading-[0.92] tracking-tightest text-cream">
              Bring the {format.category} format to your office.
            </h2>
          </RevealOnScroll>
          <RevealOnScroll delay={0.15}>
            <p className="mt-4 font-sans text-lg text-cream/55">
              Tell us about your office and we&rsquo;ll get back to you within 24 hours.
            </p>
          </RevealOnScroll>
          <RevealOnScroll delay={0.3}>
            <Link
              href="/#contact"
              className="mt-8 inline-block bg-gold px-8 py-4 font-condensed text-sm font-bold uppercase tracking-wider text-brown transition-colors duration-200 hover:bg-rust"
            >
              Partner With Us →
            </Link>
          </RevealOnScroll>
        </section>

        <Footer />
      </div>
      <WhatsAppFloat />
    </>
  );
}

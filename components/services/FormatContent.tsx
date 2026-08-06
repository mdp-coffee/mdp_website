"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { MOTION } from "@/lib/motion";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { formatPages } from "@/content/operating-formats-seo";
import type { FormatPageData } from "@/lib/types";

export function FormatContent({ format }: { format: FormatPageData }) {
  const shouldReduceMotion = useReducedMotion();
  const otherFormats = formatPages.filter((f) => f.slug !== format.slug);

  return (
    <>
      <NavBar />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://mdpcoffeehouse.com" },
          { name: format.category },
        ]}
      />
      <div className="bg-paper pt-16">
        <section
          className="relative overflow-hidden flex min-h-[50vh] w-full flex-col justify-end bg-[#411915] px-6 pb-16 pt-16 md:px-20"
          aria-label={`MDP Coffee House ${format.category} format`}
        >
          <div className="pointer-events-none absolute bottom-0 -right-6 md:-right-20 hidden h-3/4 w-1/2 opacity-[0.25] md:block" aria-hidden="true">
            <Image
              src="/images/MDP coffeee man Png1.png"
              alt=""
              fill
              className="object-contain object-bottom [filter:invert(1)_brightness(1.4)]"
            />
          </div>
          <div className="relative z-10">
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
          </div>
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

        {format.solutions && (
          <section className="bg-paper2 px-6 py-16 md:px-20" aria-label={`${format.category} modular solutions`}>
            <RevealOnScroll delay={0}>
              <h2 className="font-condensed text-[28px] font-black leading-tight text-brown sm:text-[32px]">
                Modular solutions, one partner.
              </h2>
            </RevealOnScroll>
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {format.solutions.map((solution, index) => (
                <RevealOnScroll key={solution.title} delay={MOTION.stagger(index, 0.08)}>
                  <article className="h-full border border-brown/10 p-6 transition-colors duration-200 hover:border-gold/40">
                    <h3 className="font-condensed text-lg not-italic leading-tight tracking-tight text-brown">
                      {solution.title}
                    </h3>
                    <p className="mt-2 font-sans text-sm leading-relaxed text-brown/60">
                      {solution.description}
                    </p>
                  </article>
                </RevealOnScroll>
              ))}
            </div>

            {format.closingStatement && (
              <RevealOnScroll delay={0.2}>
                <p className="mt-10 max-w-3xl border-l-4 border-rust bg-paper px-6 py-5 font-sans text-lg italic leading-relaxed text-brown/75">
                  {format.closingStatement}
                </p>
              </RevealOnScroll>
            )}
          </section>
        )}

        <RevealOnScroll delay={0.4}>
          <section className="w-full px-6 pb-16 md:px-20">
            <div className="relative h-80 w-full max-w-3xl min-w-0 shrink-0 overflow-hidden">
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

        {format.expansionCta && (
          <section className="bg-paper2 px-6 py-16 md:px-20" aria-label={`${format.category} expansion enquiry`}>
            <RevealOnScroll delay={0}>
              <h2 className="font-condensed text-[28px] font-black leading-tight text-brown sm:text-[32px]">
                {format.expansionCta.headline}
              </h2>
            </RevealOnScroll>
            <RevealOnScroll delay={0.1}>
              <p className="mt-4 max-w-2xl font-sans text-lg leading-relaxed text-brown/70">
                {format.expansionCta.body}
              </p>
            </RevealOnScroll>
            <RevealOnScroll delay={0.2}>
              <Link
                href={format.expansionCta.ctaHref}
                className="mt-8 inline-block bg-gold px-8 py-4 font-condensed text-sm font-bold uppercase tracking-wider text-brown transition-colors duration-200 hover:bg-rust"
              >
                {format.expansionCta.ctaLabel} →
              </Link>
            </RevealOnScroll>
          </section>
        )}

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

        {!format.expansionCta && (
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
                href="/contact"
                className="mt-8 inline-block bg-gold px-8 py-4 font-condensed text-sm font-bold uppercase tracking-wider text-brown transition-colors duration-200 hover:bg-rust"
              >
                Partner With Us →
              </Link>
            </RevealOnScroll>
          </section>
        )}

        <Footer />
      </div>
      <WhatsAppFloat />
    </>
  );
}

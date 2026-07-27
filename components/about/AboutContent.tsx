"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { ScrollContainer } from "@/components/ScrollContainer";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { useCountUp } from "@/hooks/useCountUp";
import { MOTION } from "@/lib/motion";
import { CompactTimeline } from "@/components/about/CompactTimeline";
import { awards } from "@/content/awards";

const values = [
  {
    name: "Care",
    description:
      "Everything we do must communicate care. Not expertise. Not scale. Not dominance. Care.",
  },
  {
    name: "Consistency",
    description:
      "People trust consistency. People return to consistency. The quality of care matters more than moments of brilliance.",
  },
  {
    name: "Craftsmanship",
    description:
      "We take pride in doing things properly. Not because it is impressive. Because people deserve it.",
  },
  {
    name: "Connection",
    description: "Coffee is often the excuse. Connection is the outcome.",
  },
];

const valueIcons: Record<string, ReactNode> = {
  Care: (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8" aria-hidden="true">
      <path d="M16 27 C8 21 4 16 4 11 C4 7 7 4 11 4 C13.5 4 15.2 5.3 16 7 C16.8 5.3 18.5 4 21 4 C25 4 28 7 28 11 C28 16 24 21 16 27 Z" />
    </svg>
  ),
  Consistency: (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8" aria-hidden="true">
      <path d="M25 10 A11 11 0 1 0 26 16" />
      <path d="M25 4 V10 H19" />
    </svg>
  ),
  Craftsmanship: (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8" aria-hidden="true">
      <path d="M19 13 L26 6 C27 5 29 5 29 7 C29 9 28 10 27 11 L20 18" />
      <path d="M20 18 L8 30 L4 26 L16 14" />
      <path d="M14 12 L11 9 L13 5 L17 7 L18 11 Z" />
    </svg>
  ),
  Connection: (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8" aria-hidden="true">
      <circle cx="11" cy="16" r="7" />
      <circle cx="21" cy="16" r="7" />
    </svg>
  ),
};

const philosophyIcons: Record<string, ReactNode> = {
  vision: (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7" aria-hidden="true">
      <path d="M2 16 C7 8 13 5 16 5 C19 5 25 8 30 16 C25 24 19 27 16 27 C13 27 7 24 2 16 Z" />
      <circle cx="16" cy="16" r="5" />
    </svg>
  ),
  mission: (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-7 w-7" aria-hidden="true">
      <circle cx="16" cy="16" r="12" />
      <circle cx="16" cy="16" r="7" />
      <circle cx="16" cy="16" r="2" fill="currentColor" stroke="none" />
    </svg>
  ),
  story: (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7" aria-hidden="true">
      <path d="M4 26 L4 18 L12 10 L18 16 L28 6" />
      <path d="M20 6 L28 6 L28 14" />
    </svg>
  ),
  presence: (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7" aria-hidden="true">
      <circle cx="16" cy="18" r="8" />
      <path d="M16 2 V6" />
      <path d="M6 8 L8.5 10.5" />
      <path d="M26 8 L23.5 10.5" />
    </svg>
  ),
  purpose: (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7" aria-hidden="true">
      <path d="M16 27 C8 21 4 16 4 11 C4 7 7 4 11 4 C13.5 4 15.2 5.3 16 7 C16.8 5.3 18.5 4 21 4 C25 4 28 7 28 11 C28 16 24 21 16 27 Z" />
    </svg>
  ),
};

const philosophyCards = [
  {
    id: "vision",
    label: "Our Vision",
    body: "To be India's most trusted South Indian beverage brand — present in every campus, transit hub, and community where people gather.",
  },
  {
    id: "mission",
    label: "Our Mission",
    body: "To serve authentic South Indian filter coffee consistently, accessibly, and with genuine care — across every format we operate.",
  },
  {
    id: "story",
    label: "Our Story",
    body: "The scale changed. The care never did. MDP Coffee House is a company built on showing up.",
  },
  {
    id: "presence",
    label: "Our Presence",
    body: "We show up in the small moments — the first cup before a long meeting, the familiar counter in an unfamiliar new office, the warmth of something made with care in the middle of a hard day.",
  },
  {
    id: "purpose",
    label: "Our Purpose",
    body: "We do not exist to sell coffee. We exist to make people's days a little better through coffee. Coffee is our medium. People are our purpose.",
  },
];

const beliefCards = philosophyCards.filter((c) => c.id === "vision" || c.id === "mission");
const storyCards = philosophyCards.filter((c) => c.id === "story" || c.id === "presence" || c.id === "purpose");

const aboutStats = [
  { value: "20+", label: "Years of Operations" },
  { value: "85+", label: "Active Locations" },
  { value: "1,00,000+", label: "Cups Daily" },

];

function StatBlock({
  end,
  suffix,
  label,
  duration,
  locale,
}: {
  end: number;
  suffix?: string;
  label: string;
  duration: number;
  locale?: string;
}) {
  const { ref, display } = useCountUp({ end, suffix, duration, locale });
  const isLong = display.replace(/[^0-9]/g, "").length > 5;
  return (
    <div ref={ref} className="border-l border-brown/20 pl-6 min-w-0">
      <p className={`font-condensed leading-none text-rust ${isLong ? "text-[28px] md:text-[36px]" : "text-[40px] md:text-[52px]"}`}>
        {display}
      </p>
      <p className="mt-3 font-sans text-[10px] uppercase tracking-widest text-brown/50">
        {label}
      </p>
    </div>
  );
}

export function AboutContent() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="bg-paper">
      <NavBar />

      <ScrollContainer>
      {/* Section 1 — Page Hero (on load, not whileInView) */}
      <section
        className="snap-slide flex min-h-[60vh] w-full flex-col justify-end bg-[#411915] px-6 pb-12 pt-24 md:px-20 md:pb-20 md:pt-32"
        aria-label="About MDP Coffee House"
      >
        <motion.p
          className="mb-6 font-condensed text-[11px] uppercase tracking-[0.3em] text-gold/50"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: MOTION.base, delay: 0.2, ease: MOTION.ease }}
        >
          About Us
        </motion.p>
        <motion.h1
          className="font-condensed text-[36px] leading-[0.95] tracking-tightest text-cream sm:text-[68px] md:text-[88px]"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: MOTION.slow, delay: 0.4, ease: MOTION.ease }}
        >
          The coffee companion
          <br />
          of India&rsquo;s workday.
        </motion.h1>
        <motion.p
          className="mt-5 max-w-2xl font-sans text-base leading-relaxed text-cream/55 md:mt-8 md:text-xl"
          initial={shouldReduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: MOTION.base, delay: 0.7, ease: MOTION.ease }}
        >
          Since 2005, we&rsquo;ve been quietly present wherever India works,
          thinks, connects, and grows.
        </motion.p>
      </section>

      {/* Section 1B — Bridge */}
      <section className="bg-paper px-6 pt-14 pb-10 md:px-20 md:pt-24 md:pb-16" aria-label="About MDP Coffee House">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[3fr_2fr] lg:gap-16">
          <div>
            <RevealOnScroll delay={0.05}>
              <h2 className="mt-6 mb-6 font-condensed text-[30px] leading-[0.95] tracking-tightest text-brown sm:text-[52px] sm:mb-10">
                Twenty years of operations across India.
              </h2>
            </RevealOnScroll>
            <RevealOnScroll delay={0.1}>
              <p className="font-sans text-lg leading-relaxed text-brown/70 md:text-xl">
                MDP Coffee House began in 2005 in an unfamiliar city, serving people who didn&rsquo;t know us yet. Twenty years later, we operate across India — inside the campuses of Fortune 500 companies, the corridors of banks and tech parks, and commercial spaces in cities nationwide.
              </p>
            </RevealOnScroll>
            <RevealOnScroll delay={0.25}>
              <p className="mt-8 font-sans text-lg leading-relaxed text-brown/70 md:text-xl">
                What started as a single counter has grown into corporate kiosks, QSR cafés, commercial outlets, and event catering — the same recipe, delivered through whichever format the moment calls for. Today, that standard reaches 85+ outlets across four cities, serving over 1,00,000 cups a day.
              </p>
            </RevealOnScroll>
          </div>
          <RevealOnScroll delay={0.2}>
            <div>
              <div className="relative w-full overflow-hidden bg-paper">
                <Image
                  src="/images/first_outlet_accenturevirkholi.png"
                  alt="MDP Coffee House first outlet at Accenture Vikhroli, Mumbai — 2005"
                  width={1456}
                  height={1080}
                  className="h-auto w-full object-contain"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="mt-3">
                <p className="font-condensed text-[11px] uppercase tracking-widest text-rust/70">
                  2005 · Our Very First Outlet
                </p>
                <p className="mt-1 font-condensed text-[11px] uppercase tracking-widest text-brown/40">
                  Accenture Vikhroli, Mumbai
                </p>
              </div>
            </div>
          </RevealOnScroll>
        </div>
        <div className="mx-auto mt-14 h-px w-24 bg-gold/40 md:mt-20" aria-hidden="true" />
      </section>

      {/* Section 2 — What We Believe In (merged Vision/Mission + Who We Are) */}
      <section
        className="snap-slide bg-[#411915] px-6 py-16 md:px-20 md:py-24"
        aria-label="What we believe in"
      >
        <RevealOnScroll delay={0}>
          <h2 className="font-condensed text-[28px] leading-[0.95] tracking-tightest text-cream sm:text-[52px]">
            What We <span className="text-gold">Believe In.</span>
          </h2>
        </RevealOnScroll>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6">
          {beliefCards.map((card, i) => (
            <RevealOnScroll key={card.id} delay={i * 0.08}>
              <div className="group relative overflow-hidden border border-cream/[0.08] bg-cream/[0.06] p-8 transition-all duration-500 ease-in-out hover:-translate-y-1 hover:border-gold/40 lg:p-10">
                <div
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100"
                  style={{ background: "rgba(212,165,116,0.08)" }}
                  aria-hidden="true"
                />
                <span className="relative z-10 inline-flex h-14 w-14 items-center justify-center border border-gold/25 bg-gold/10 text-gold transition-all duration-150 ease-in-out group-hover:scale-110 group-hover:bg-gold group-hover:text-brown">
                  {philosophyIcons[card.id]}
                </span>
                <p className="relative z-10 mt-6 font-condensed text-xs uppercase tracking-widest text-gold/70">
                  {card.label}
                </p>
                <p className="relative z-10 mt-3 font-sans text-base leading-relaxed text-cream/70">
                  {card.body}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3 md:mt-6 md:gap-6">
          {storyCards.map((card, i) => (
            <RevealOnScroll key={card.id} delay={0.16 + i * 0.08}>
              <div className="group relative h-full overflow-hidden border border-cream/[0.08] bg-cream/[0.06] p-8 transition-all duration-500 ease-in-out hover:-translate-y-1 hover:border-gold/40 lg:p-10">
                <div
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100"
                  style={{ background: "rgba(212,165,116,0.08)" }}
                  aria-hidden="true"
                />
                <span className="relative z-10 inline-flex h-14 w-14 items-center justify-center border border-gold/25 bg-gold/10 text-gold transition-all duration-150 ease-in-out group-hover:scale-110 group-hover:bg-gold group-hover:text-brown">
                  {philosophyIcons[card.id]}
                </span>
                <p className="relative z-10 mt-6 font-condensed text-xs uppercase tracking-widest text-gold/70">
                  {card.label}
                </p>
                <p className="relative z-10 mt-3 font-sans text-base leading-relaxed text-cream/70">
                  {card.body}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      {/* Section 3 — Track Record (merged At Scale + Recognised) */}
      <section className="snap-slide bg-parchment px-6 py-20 md:px-20" aria-label="Track record">
        <RevealOnScroll delay={0}>
          <h2 className="font-condensed text-[26px] leading-[0.98] tracking-tight text-brown sm:text-[52px]">
            The Numbers Behind the Standard.
          </h2>
        </RevealOnScroll>

        <div className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-4">
          <StatBlock end={20} suffix="+" label="Years of Operations" duration={1600} />
          <StatBlock end={85} suffix="+" label="Outlets" duration={1800} />
          <StatBlock end={100000} suffix="+" label="Cups Daily" duration={2200} locale="en-IN" />
          <StatBlock end={45} suffix="+" label="Corporate Clients" duration={1600} />
        </div>

        <RevealOnScroll delay={0.1}>
          <div className="mx-auto mb-8 mt-16 h-px w-16 bg-brown/20 md:mt-20" aria-hidden="true" />
          <p className="mb-2 text-center font-condensed not-italic text-[11px] uppercase tracking-widest text-rust/60">
            Recognised by the Companies We Serve
          </p>
        </RevealOnScroll>

        <div className="scrollbar-hide flex snap-x snap-mandatory gap-3 overflow-x-auto md:grid md:grid-cols-3 md:gap-4 md:overflow-visible md:snap-none lg:grid-cols-5">
          {awards.map((award, index) => (
            <RevealOnScroll key={award.id} delay={index * 0.07}>
              <div className="group flex w-[70vw] flex-shrink-0 flex-col overflow-hidden border border-brown/10 bg-paper transition-all duration-300 ease-out hover:-translate-y-2 hover:border-gold hover:shadow-[0_0_35px_rgba(212,165,116,0.45)] md:w-auto md:flex-shrink">
                <div className="relative h-40 w-full overflow-hidden bg-white">
                  <Image
                    src={award.image}
                    alt={award.altText}
                    fill
                    className="object-contain p-4 transition-transform duration-300 ease-out group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
                  />
                </div>
                <div className="flex flex-col gap-2 p-5">
                  <p className="font-sans font-bold not-italic text-sm tracking-tight text-brown">
                    {award.organisation}
                  </p>
                  <p className="font-condensed not-italic text-xs uppercase tracking-widest text-gold">
                    {award.year}
                  </p>
                  <div className="my-1 h-px bg-brown/10" aria-hidden="true" />
                  <p className="font-sans text-xs leading-snug text-brown/45">
                    {award.title}
                  </p>
                  <p className="font-sans font-bold not-italic text-sm leading-tight text-brown">
                    {award.category}
                  </p>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      {/* Section 4 — Compact Timeline */}
      <CompactTimeline />

      {/* Section 5 — Our Values */}
      <section className="snap-slide bg-parchment px-6 py-12 md:px-20 md:py-24" aria-label="Our values">
        <RevealOnScroll delay={0}>
          <h2 className="mt-4 font-condensed text-[26px] leading-[0.95] tracking-tightest text-brown sm:mt-6 sm:text-[52px]">
            Four things we don&rsquo;t compromise on.
          </h2>
        </RevealOnScroll>
        <div className="mt-6 grid grid-cols-2 gap-3 sm:mt-12 sm:gap-6">
          {values.map((value, index) => (
            <RevealOnScroll key={value.name} delay={MOTION.stagger(index, 0.08)}>
              <div className="group relative overflow-hidden border border-brown/10 bg-paper px-3 py-3 transition-all duration-500 ease-in-out hover:-translate-y-1.5 hover:border-gold/30 hover:shadow-xl sm:px-8 sm:py-8">
                <div
                  className="absolute left-0 top-0 h-0.5 w-full origin-left scale-x-0 bg-gold transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.32,1)] group-hover:scale-x-100"
                  aria-hidden="true"
                />
                <span
                  className="inline-flex h-14 w-14 items-center justify-center border border-gold/20 bg-gold/10 text-gold transition-all duration-150 ease-in-out group-hover:scale-110 group-hover:border-transparent group-hover:bg-gold group-hover:text-brown [&_svg]:h-6 [&_svg]:w-6"
                >
                  {valueIcons[value.name]}
                </span>
                <h3 className="mt-4 font-condensed text-sm tracking-tight text-brown sm:mt-6 sm:text-[22px]">
                  {value.name}
                </h3>
                <p className="mt-1.5 font-sans text-[11px] leading-relaxed text-brown/60 sm:mt-3 sm:text-[15px]">
                  {value.description}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      {/* Section 9 — CTA */}
      <section
        className="snap-slide flex flex-col items-center bg-[#411915] px-6 py-28 text-center md:px-20"
        aria-label="Partner with MDP"
      >
        <RevealOnScroll delay={0}>
          <h2 className="font-condensed text-[44px] leading-[0.92] tracking-tightest text-cream sm:text-[60px]">
            Your workplace deserves a morning like this.
          </h2>
        </RevealOnScroll>
        <RevealOnScroll delay={0.15}>
          <p className="mt-6 max-w-lg font-sans text-xl text-cream/60">
            We&rsquo;d love to show up for your office.
          </p>
        </RevealOnScroll>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <RevealOnScroll delay={0.3}>
            <Link
              href="/#contact"
              className="bg-gold px-8 py-4 font-condensed text-sm font-bold uppercase tracking-wider text-brown transition-colors hover:bg-gold/90"
            >
              Partner With Us
            </Link>
          </RevealOnScroll>
          <RevealOnScroll delay={0.4}>
            <Link
              href="/gallery"
              className="border border-cream/25 px-8 py-4 font-condensed text-sm uppercase tracking-wider text-cream/70 transition-colors hover:border-cream hover:text-cream"
            >
              See Our Story
            </Link>
          </RevealOnScroll>
        </div>
      </section>

      <Footer />
      </ScrollContainer>
    </div>
  );
}

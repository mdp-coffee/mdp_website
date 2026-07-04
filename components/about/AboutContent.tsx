"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { SectionLabel } from "@/components/SectionLabel";
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
    name: "Hospitality",
    description:
      "We welcome everyone. A fresher. A manager. A founder. A student. Everyone deserves the same warmth.",
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

const peoplePhotos = [
  { src: "/images/clifford-VobvKmG-StA-unsplash.jpg", alt: "MDP team member" },
  { src: "/images/ante-samarzija-lsmu0rUhUOk-unsplash.jpg", alt: "MDP outlet in action" },
  { src: "/images/kayleigh-harrington-yhn4okt6ci0-unsplash.jpg", alt: "MDP coffee counter" },
];

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
  suffix: string;
  label: string;
  duration: number;
  locale?: string;
}) {
  const { ref, display } = useCountUp({ end, suffix, duration, locale });
  const isLong = display.replace(/[^0-9]/g, "").length > 5;
  return (
    <div ref={ref} className="border-l border-gold/20 pl-6 min-w-0">
      <p className={`font-condensed leading-none text-gold ${isLong ? "text-[28px] md:text-[36px]" : "text-[40px] md:text-[52px]"}`}>
        {display}
      </p>
      <p className="mt-3 font-sans text-[10px] uppercase tracking-widest text-cream/40">
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

      {/* Section 1 — Page Hero (on load, not whileInView) */}
      <section
        className="flex min-h-[60vh] w-full flex-col justify-end bg-[#411915] px-6 pb-12 pt-24 md:px-20 md:pb-20 md:pt-32"
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
      <section className="bg-paper px-6 pt-14 pb-4 md:px-20 md:pt-24" aria-label="About MDP Coffee House">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[3fr_2fr] lg:gap-16">
          <div>
            <RevealOnScroll delay={0}>
              <SectionLabel>Our Story</SectionLabel>
            </RevealOnScroll>
            <RevealOnScroll delay={0.05}>
              <h2 className="mt-6 mb-6 font-condensed text-[30px] leading-[0.95] tracking-tightest text-brown sm:text-[52px] sm:mb-10">
                One kiosk. Twenty years later.
              </h2>
            </RevealOnScroll>
            <RevealOnScroll delay={0.1}>
              <p className="font-sans text-lg leading-relaxed text-brown/70 md:text-xl">
                MDP Coffee House began in 2005 with one kiosk, in an unfamiliar city, serving people who didn&rsquo;t know us yet.
              </p>
            </RevealOnScroll>
            <RevealOnScroll delay={0.25}>
              <p className="mt-8 font-sans text-lg leading-relaxed text-brown/70 md:text-xl">
                Twenty years later, MDP operates across India — inside the campuses of Fortune 500 companies, the corridors of banks and tech parks, and commercial spaces in cities nationwide. What started as a single kiosk has grown into corporate kiosks, QSR restaurants, mobile carts, 24/7 tuck shops, and outdoor catering — the same recipe, delivered through whichever format the moment calls for.
              </p>
            </RevealOnScroll>
            <RevealOnScroll delay={0.35}>
              <p className="mt-8 font-sans text-lg leading-relaxed text-brown/70 md:text-xl">
                Today, that same standard reaches 85+ locations nationwide, serving over 1,00,000 cups a day.
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
      </section>

      {/* Vision & Mission */}
      <section className="bg-paper px-6 pt-10 pb-4 md:px-20 md:pt-16 md:pb-6" aria-label="Vision and mission">
        <div className="relative z-10 grid grid-cols-1 items-start gap-5 md:grid-cols-[1fr_1px_1fr] md:gap-12">

          {/* Vision */}
          <RevealOnScroll delay={0.1}>
            <div>
              <p className="mb-2 font-condensed text-sm leading-[0.95] tracking-tight text-rust/60 sm:mb-4 sm:text-[20px]">
                Vision
              </p>
              <h3 className="mb-4 font-sans text-base not-italic leading-snug text-brown sm:text-lg md:text-xl">
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
              <p className="mb-2 font-condensed text-sm leading-[0.95] tracking-tight text-rust/60 sm:mb-4 sm:text-[20px]">
                Mission
              </p>
              <h3 className="mb-4 font-sans text-base not-italic leading-snug text-brown sm:text-lg md:text-xl">
                To serve authentic South Indian filter coffee consistently,
                accessibly, and with genuine care — across every format we
                operate.
              </h3>
            </div>
          </RevealOnScroll>

        </div>
      </section>

      {/* Section 2 — Who We Are */}
      <section className="px-6 pt-6 pb-12 md:px-20 md:pt-10 md:pb-24" aria-label="Who we are">
        <RevealOnScroll delay={0}>
          <SectionLabel>Our Purpose</SectionLabel>
        </RevealOnScroll>
        <RevealOnScroll delay={0.1}>
          <h2 className="mt-6 font-condensed text-[28px] leading-[0.95] tracking-tightest text-brown sm:text-[52px]">
            We&rsquo;re not in the coffee business.
          </h2>
        </RevealOnScroll>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          <RevealOnScroll delay={0.2}>
            <p className="font-sans text-lg leading-relaxed text-brown/65">
              The scale changed. The care never did. MDP Coffee House is a company built on showing up.
            </p>
          </RevealOnScroll>
          <RevealOnScroll delay={0.3}>
            <p className="font-sans text-lg leading-relaxed text-brown/65">
              We show up in the small moments — the first cup before a long meeting, the familiar counter in an unfamiliar new office, the warmth of something made with care in the middle of a hard day.
            </p>
          </RevealOnScroll>
          <RevealOnScroll delay={0.4}>
            <p className="font-sans text-lg leading-relaxed text-brown/65">
              We do not exist to sell coffee. We exist to make people&rsquo;s days a little better through coffee. Coffee is our medium. People are our purpose.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* Section 3A — At Scale */}
      <section className="bg-[#411915] px-6 py-20 md:px-20" aria-label="MDP at scale">
        <RevealOnScroll delay={0}>
          <SectionLabel tone="dark">Twenty Years. At Scale.</SectionLabel>
        </RevealOnScroll>
        <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-4">
          <StatBlock end={20} suffix="+" label="Years of Operations" duration={1600} />
          <StatBlock end={85} suffix="+" label="Active Locations" duration={1800} />
          <StatBlock end={100000} suffix="+" label="Cups Daily" duration={2200} locale="en-IN" />
          <StatBlock end={45} suffix="+" label="Corporate Clients" duration={1600} />
        </div>
      </section>

      {/* Section 3B — Recognised */}
      <section className="bg-parchment px-6 py-20 md:px-20" aria-label="Awards">
        <RevealOnScroll delay={0}>
          <div className="mx-auto mb-8 h-px w-16 bg-brown/20" aria-hidden="true" />
          <p className="mb-2 text-center font-condensed not-italic text-[11px] uppercase tracking-widest text-rust/60">
            Recognised by the Companies We Serve
          </p>

        </RevealOnScroll>

        <div className="scrollbar-hide flex snap-x snap-mandatory gap-3 overflow-x-auto md:grid md:grid-cols-3 md:gap-4 md:overflow-visible md:snap-none lg:grid-cols-5">
          {awards.map((award, index) => (
            <RevealOnScroll key={award.id} delay={index * 0.07}>
              <div className="flex w-[70vw] flex-shrink-0 flex-col overflow-hidden border border-brown/10 bg-paper transition-colors duration-200 hover:border-gold/50 md:w-auto md:flex-shrink">
                <div className="relative h-40 w-full overflow-hidden bg-white">
                  <Image
                    src={award.image}
                    alt={award.altText}
                    fill
                    className="object-contain p-4"
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
      <section className="bg-parchment px-6 py-12 md:px-20 md:py-24" aria-label="Our values">
        <RevealOnScroll delay={0}>
          <SectionLabel>What We Believe</SectionLabel>
          <h2 className="mt-4 font-condensed text-[26px] leading-[0.95] tracking-tightest text-brown sm:mt-6 sm:text-[52px]">
            Five things we don&rsquo;t compromise on.
          </h2>
        </RevealOnScroll>
        <div className="mt-6 grid grid-cols-2 gap-3 sm:mt-12 sm:gap-6">
          {values.map((value, index) => (
            <RevealOnScroll key={value.name} delay={MOTION.stagger(index, 0.08)}>
              <div className="border border-brown/10 bg-paper px-3 py-3 transition-colors duration-200 hover:border-gold/40 sm:px-8 sm:py-8">
                <h3 className="font-condensed text-sm tracking-tight text-brown sm:text-[22px]">
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

      {/* Section 6 — The People */}
      <section className="px-6 py-12 md:px-20 md:py-24" aria-label="Our people">
        <RevealOnScroll delay={0}>
          <SectionLabel>Our People</SectionLabel>
          <h2 className="mt-6 font-condensed text-[28px] leading-[0.95] tracking-tightest text-brown sm:text-[52px]">
            400+ people who show up every morning.
          </h2>
        </RevealOnScroll>
        <RevealOnScroll delay={0.1}>
          <p className="mt-4 max-w-2xl font-sans text-sm leading-relaxed text-brown/65 md:mt-6 md:text-lg">
            Behind every cup is a person who chose to be there. Trained at the
            MDP Academy in Bengaluru. Guided by the same standards that have
            existed since 2005. Our people are not staff. They are the reason this
            works.
          </p>
        </RevealOnScroll>
        <div className="mt-8 grid grid-cols-2 gap-2 sm:mt-12 sm:grid-cols-3 sm:gap-4">
          {peoplePhotos.map((photo, index) => (
            <RevealOnScroll key={photo.src} delay={MOTION.stagger(index, 0.06)}>
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
              </div>
            </RevealOnScroll>
          ))}
        </div>
        <p className="mt-6 font-sans text-sm text-brown/30">
          Real MDP team photos coming soon
        </p>
      </section>

      {/* Section 9 — CTA */}
      <section
        className="flex flex-col items-center px-6 py-28 text-center md:px-20"
        aria-label="Partner with MDP"
      >
        <RevealOnScroll delay={0}>
          <h2 className="font-condensed text-[44px] leading-[0.92] tracking-tightest text-brown sm:text-[60px]">
            Part of your morning too?
          </h2>
        </RevealOnScroll>
        <RevealOnScroll delay={0.15}>
          <p className="mt-6 max-w-lg font-sans text-xl text-brown/55">
            We&rsquo;d love to show up for your office.
          </p>
        </RevealOnScroll>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <RevealOnScroll delay={0.3}>
            <Link
              href="/#contact"
              className="bg-brown px-8 py-4 font-condensed text-sm font-bold uppercase tracking-wider text-cream transition-colors hover:bg-rust"
            >
              Partner With Us
            </Link>
          </RevealOnScroll>
          <RevealOnScroll delay={0.4}>
            <Link
              href="/gallery"
              className="border border-brown/25 px-8 py-4 font-condensed text-sm uppercase tracking-wider text-brown/60 transition-colors hover:border-brown hover:text-brown"
            >
              See Our Story
            </Link>
          </RevealOnScroll>
        </div>
      </section>

      <Footer />
    </div>
  );
}

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
  { value: "15+", label: "Cities" },
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
  return (
    <div ref={ref} className="border-l border-gold/20 pl-6">
      <p className="font-condensed text-[48px] leading-none text-gold">{display}</p>
      <p className="mt-2 font-sans text-sm uppercase tracking-widest text-cream/40">{label}</p>
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
        className="flex min-h-[60vh] w-full flex-col justify-end bg-[#411915] px-6 pb-20 pt-32 md:px-20"
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
          className="font-condensed text-[52px] leading-[0.9] tracking-tightest text-cream sm:text-[68px] md:text-[88px]"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: MOTION.slow, delay: 0.4, ease: MOTION.ease }}
        >
          The coffee companion
          <br />
          of India&rsquo;s workday.
        </motion.h1>
        <motion.p
          className="mt-8 max-w-2xl font-sans text-xl leading-relaxed text-cream/55"
          initial={shouldReduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: MOTION.base, delay: 0.7, ease: MOTION.ease }}
        >
          Since 2005, we&rsquo;ve been quietly present wherever India works,
          thinks, connects, and grows.
        </motion.p>
      </section>

      {/* Section 1B — Bridge */}
      <section className="bg-paper px-6 pt-24 pb-10 md:px-20" aria-label="About MDP Coffee House">
        <div className="max-w-3xl">
          <RevealOnScroll delay={0}>
            <SectionLabel>Our Story</SectionLabel>
          </RevealOnScroll>
          <RevealOnScroll delay={0.05}>
            <h2 className="mt-6 mb-10 font-condensed text-[40px] leading-[0.92] tracking-tightest text-brown sm:text-[52px]">
              Our Story
            </h2>
          </RevealOnScroll>
          <RevealOnScroll delay={0.1}>
            <p className="font-sans text-lg leading-relaxed text-brown/70 md:text-xl">
              MDP Coffee House was built on a simple idea: that the people who build
              India&rsquo;s workday deserve to be looked after. We started with one
              kiosk, in an unfamiliar city, serving people who didn&rsquo;t know us
              yet. Twenty years later, we are present across India — in the campuses
              of Fortune 500 companies, in the corridors of banks and tech parks, in
              the quiet moments between meetings, in the mornings that set the tone
              for everything that follows.
            </p>
          </RevealOnScroll>
          <RevealOnScroll delay={0.25}>
            <p className="mt-8 font-sans text-lg leading-relaxed text-brown/50 md:text-xl">
              What we have built is not just a coffee company. It is a presence —
              quiet, consistent, and always there when the day begins. We show up in
              the small moments: the first cup before a long meeting, the familiar
              counter in an unfamiliar new office, the warmth of something made with
              care in the middle of a hard day. Every outlet, every trained team
              member, every morning we have shown up without exception — it all comes
              from the same place. A genuine belief that the people whose mornings we
              are part of deserve to feel that someone is looking out for them.
            </p>
          </RevealOnScroll>
          <RevealOnScroll delay={0.35}>
            <p className="mt-8 font-sans text-lg leading-relaxed text-brown/70 md:text-xl">
              The scale changed. The care never did. That is the only reason we are
              still here.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* Section 2 — Who We Are */}
      <section className="px-6 py-24 md:px-20" aria-label="Who we are">
        <RevealOnScroll delay={0}>
          <SectionLabel>Our Purpose</SectionLabel>
        </RevealOnScroll>
        <RevealOnScroll delay={0.1}>
          <h2 className="mt-6 font-condensed text-[40px] leading-[0.92] tracking-tightest text-brown sm:text-[52px]">
            We&rsquo;re not in the coffee business.
          </h2>
        </RevealOnScroll>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          <RevealOnScroll delay={0.2}>
            <p className="font-sans text-lg leading-relaxed text-brown/65">
              MDP Coffee House is a company built on showing up. Since 2005, MDP
              has been present in workplaces, campuses, malls, and communities
              across India.
            </p>
          </RevealOnScroll>
          <RevealOnScroll delay={0.3}>
            <p className="font-sans text-lg leading-relaxed text-brown/65">
              For nearly two decades, MDP has quietly been part of millions of
              mornings, breaks, meetings, conversations, celebrations, deadlines,
              and everyday moments.
            </p>
          </RevealOnScroll>
          <RevealOnScroll delay={0.4}>
            <p className="font-sans text-lg leading-relaxed text-brown/65">
              We do not exist to sell coffee. We exist to make people&rsquo;s
              days a little better through coffee. Coffee is our medium. People
              are our purpose.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* Section 3A — At Scale */}
      <section
        className="bg-[#411915] px-6 py-20 md:px-20"
        aria-label="MDP Coffee House at scale"
      >
        <RevealOnScroll delay={0}>
          <SectionLabel tone="dark">Twenty Years. At Scale.</SectionLabel>
        </RevealOnScroll>
        <div className="mt-12 flex flex-wrap justify-center gap-8">
          <RevealOnScroll delay={0}>
            <div className="flex flex-col items-center text-center md:border-r md:border-cream/10 px-8">
              <span className="font-condensed text-[56px] md:text-[72px] leading-none text-cream">
                20+
              </span>
              <span className="font-condensed text-[11px] uppercase tracking-widest text-cream/40 mt-3">
                Years of Operations
              </span>
            </div>
          </RevealOnScroll>
          <RevealOnScroll delay={0.08}>
            <div className="flex flex-col items-center text-center md:border-r md:border-cream/10 px-8">
              <span className="font-condensed text-[56px] md:text-[72px] leading-none text-cream">
                85+
              </span>
              <span className="font-condensed text-[11px] uppercase tracking-widest text-cream/40 mt-3">
                Active Locations
              </span>
            </div>
          </RevealOnScroll>
          <RevealOnScroll delay={0.16}>
            <div className="flex flex-col items-center text-center md:border-r md:border-cream/10 px-8">
              <span className="font-condensed text-[56px] md:text-[72px] leading-none text-cream">
                1,00,000+
              </span>
              <span className="font-condensed text-[11px] uppercase tracking-widest text-cream/40 mt-3">
                Cups Daily
              </span>
            </div>
          </RevealOnScroll>
          <RevealOnScroll delay={0.24}>
            <div className="flex flex-col items-center text-center px-8">
              <span className="font-condensed text-[56px] md:text-[72px] leading-none text-cream">
                15+
              </span>
              <span className="font-condensed text-[11px] uppercase tracking-widest text-cream/40 mt-3">
                Cities
              </span>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Section 3B — Recognised */}
      <section
        className="bg-parchment px-6 py-20 md:px-20"
        aria-label="Awards and recognition"
      >
        <RevealOnScroll delay={0}>
          <div className="mx-auto mb-8 h-px w-16 bg-brown/20" aria-hidden="true" />
          <p className="mb-2 text-center font-condensed not-italic text-[11px] uppercase tracking-widest text-rust/60">
            Recognised by the Companies We Serve
          </p>
          <p className="mb-10 text-center font-sans text-xs text-brown/45">Given by the clients we serve.</p>
        </RevealOnScroll>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {awards.map((award, index) => (
            <RevealOnScroll key={award.id} delay={index * 0.07}>
              <div className="flex flex-col overflow-hidden border border-brown/10 bg-paper transition-colors duration-200 hover:border-gold/50">
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
      <section className="bg-parchment px-6 py-24 md:px-20" aria-label="Our values">
        <RevealOnScroll delay={0}>
          <SectionLabel>What We Believe</SectionLabel>
          <h2 className="mt-6 font-condensed text-[40px] leading-[0.92] tracking-tightest text-brown sm:text-[52px]">
            Five things we don&rsquo;t compromise on.
          </h2>
        </RevealOnScroll>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {values.map((value, index) => (
            <RevealOnScroll key={value.name} delay={MOTION.stagger(index, 0.08)}>
              <div className="border border-brown/10 bg-paper px-8 py-8 transition-colors duration-200 hover:border-gold/40">
                <h3 className="font-condensed text-[22px] tracking-tight text-brown">
                  {value.name}
                </h3>
                <p className="mt-3 font-sans text-[15px] leading-relaxed text-brown/60">
                  {value.description}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      {/* Section 6 — The People */}
      <section className="px-6 py-24 md:px-20" aria-label="Our people">
        <RevealOnScroll delay={0}>
          <SectionLabel>Our People</SectionLabel>
          <h2 className="mt-6 font-condensed text-[40px] leading-[0.92] tracking-tightest text-brown sm:text-[52px]">
            400+ people who show up every morning.
          </h2>
        </RevealOnScroll>
        <RevealOnScroll delay={0.1}>
          <p className="mt-6 max-w-2xl font-sans text-lg leading-relaxed text-brown/65">
            Behind every cup is a person who chose to be there. Trained at the
            MDP Academy in Bengaluru. Guided by the same standards that have
            existed since 2005. Our people are not staff. They are the reason this
            works.
          </p>
        </RevealOnScroll>
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
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

      {/* Section 8 — Scale Numbers (useCountUp) */}
      <section className="bg-[#411915] px-6 py-20 md:px-20" aria-label="MDP scale">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
          <StatBlock end={85} suffix="+" label="Locations across India" duration={1800} />
          <StatBlock end={100000} suffix="" label="Cups served every day" duration={2200} locale="en-IN" />
          <StatBlock end={45} suffix="+" label="Enterprise clients" duration={1600} />
        </div>
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

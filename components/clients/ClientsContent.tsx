"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { SectionLabel } from "@/components/SectionLabel";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { MOTION } from "@/lib/motion";
import { clients } from "@/lib/content";
import type { ClientLogo } from "@/lib/types";
import { heroStats, clientStories, industries, citiesPresence } from "@/content/clients-page";

function ClientCard({ client }: { client: ClientLogo }) {
  const base = [
    "group border border-paper2 bg-paper p-6 transition-all duration-200 hover:border-gold",
    client.active === false ? "opacity-40 hover:opacity-70" : "",
  ].join(" ");

  if (client.logoSrc !== null) {
    return (
      <div id={client.slug} className={base}>
        <div className="flex h-14 items-center">
          <Image
            src={client.logoSrc}
            alt={`${client.name} — MDP Coffee House corporate client India`}
            width={140}
            height={56}
            className="max-h-12 w-auto object-contain"
          />
        </div>
        <h3 className="mt-3 font-condensed text-lg leading-tight text-brown">
          {client.name}
        </h3>
      </div>
    );
  }

  return (
    <div id={client.slug} className={base}>
      <h3 className="font-condensed text-2xl leading-tight text-brown">
        {client.name}
      </h3>
    </div>
  );
}

export function ClientsContent() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="bg-paper">
      <NavBar />

      {/* Section 1 — Hero */}
      <section
        className="flex min-h-[55vh] w-full items-center bg-[#411915] px-6 pt-16 md:px-20"
        aria-label="MDP Coffee House clients"
      >
        <div className="grid w-full grid-cols-1 gap-12 py-20 md:grid-cols-2">
          <div>
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: MOTION.base, delay: 0.2, ease: MOTION.ease }}
            >
              <SectionLabel tone="dark">Our Clients</SectionLabel>
            </motion.div>
            <motion.h1
              className="mt-6 font-condensed text-[44px] leading-[0.92] tracking-tightest text-cream sm:text-[56px]"
              initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: MOTION.slow, delay: 0.4, ease: MOTION.ease }}
            >
              Trusted by the companies
              <br />
              that run India&rsquo;s workday.
            </motion.h1>
            <motion.p
              className="mt-6 max-w-lg font-sans text-lg leading-relaxed text-cream/55"
              initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: MOTION.base, delay: 0.6, ease: MOTION.ease }}
            >
              For twenty years, some of India&rsquo;s most demanding
              organisations have trusted MDP Coffee House to show up every
              morning.
            </motion.p>
          </div>

          <div className="flex flex-col justify-center gap-8 md:items-end">
            {heroStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="border-l border-gold/20 pl-6 md:border-l-0 md:border-r md:pr-6 md:text-right"
                initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: MOTION.base,
                  delay: 0.5 + index * 0.15,
                  ease: MOTION.ease,
                }}
              >
                <p className="font-condensed text-[48px] leading-none text-gold">
                  {stat.value}
                </p>
                <p className="mt-1 font-sans text-sm uppercase tracking-widest text-cream/60">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2 — SEO text block */}
      <section
        className="mx-auto max-w-[800px] px-6 py-20"
        aria-label="About our enterprise clients"
      >
        <RevealOnScroll delay={0}>
          <h2 className="font-condensed text-3xl text-brown">
            India&rsquo;s most trusted corporate coffee partner
          </h2>
        </RevealOnScroll>
        <RevealOnScroll delay={0.15}>
          <p className="mt-6 font-sans text-lg leading-relaxed text-brown/70">
            MDP has served 45+ enterprise organisations across India since 2005.
            Outlets and locations evolve as companies grow and campuses change.
            The relationships endure.
          </p>
        </RevealOnScroll>
        <RevealOnScroll delay={0.25}>
          <p className="mt-5 font-sans text-lg leading-relaxed text-brown/70">
            Across tech parks, corporate campuses, banks, manufacturing facilities
            and commercial spaces in Bengaluru, Hyderabad, Mumbai, Pune, Chennai
            and cities nationwide — MDP delivers the same South Indian filter
            coffee, the same operational standards, and the same care that built
            this company from one kiosk to 85+ locations. MDP also provides
            outdoor catering for corporate events, conferences, weddings and
            celebrations across India.
          </p>
        </RevealOnScroll>
        <RevealOnScroll delay={0.35}>
          <p className="mt-5 font-sans text-base leading-relaxed text-brown/60">
            Today, MDP serves some of India&rsquo;s most recognised workplaces — Amazon, Microsoft, Infosys, TCS, Deutsche Bank, Oracle, HCL, Cognizant, Samsung, Wells Fargo, American Express, Broadcom, Thomson Reuters, Mu Sigma, Kyndryl, Societe Generale, London Stock Exchange, LG Soft, Lowe&rsquo;s, Philips, British Telecom, IBM and more — across tech parks, campuses, banks and commercial spaces nationwide.
          </p>
        </RevealOnScroll>
      </section>

      {/* Section 3 — Client Grid */}
      <section className="px-6 pb-20 md:px-20" aria-label="Enterprise clients">
        <RevealOnScroll delay={0}>
          <h2 className="font-condensed text-4xl text-brown">
            Companies that have trusted MDP Coffee House.
          </h2>
        </RevealOnScroll>

        <ul className="sr-only" aria-label="Full list of MDP Coffee House enterprise clients">
          {clients.map((client) => (
            <li key={client.slug}>{client.name}</li>
          ))}
        </ul>

        <div className="mt-8 grid grid-cols-3 gap-px bg-parchment sm:grid-cols-4 lg:grid-cols-6">
          {clients.map((client, index) => (
            <RevealOnScroll key={client.slug} delay={Math.min(index * 0.04, 0.6)}>
              <ClientCard client={client} />
            </RevealOnScroll>
          ))}
        </div>
        <p className="mx-auto mt-8 max-w-lg text-center font-sans text-xs leading-relaxed text-brown/35">
          Reflecting 20 years of enterprise partnerships. Active outlets and
          campus presence vary by location.
        </p>
      </section>

      {/* Section 4 — Featured Stories */}
      <section className="bg-paper2 px-6 py-20 md:px-20" aria-label="Client stories">
        <RevealOnScroll delay={0}>
          <h2 className="mb-12 text-center font-condensed text-[36px] text-brown">
            Two mornings worth remembering.
          </h2>
        </RevealOnScroll>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {clientStories.map((story, index) => (
            <RevealOnScroll key={story.label} delay={0.1 + index * 0.1} direction="left">
              <div className="bg-parchment px-10 py-10">
                <p className="font-condensed text-[11px] uppercase tracking-wide text-rust">
                  {story.label}
                </p>
                <h3 className="mt-4 font-condensed text-[28px] leading-tight text-brown">
                  {story.headline}
                </h3>
                <p className="mt-4 font-sans text-base leading-relaxed text-brown/65">
                  {story.body}
                </p>
                <p className="mt-6 border-t border-brown/10 pt-4 font-condensed text-[11px] uppercase tracking-wide text-brown/40">
                  {story.bottom}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      {/* Section 5 — Industries */}
      <section className="px-6 py-20 md:px-20" aria-label="Industries served">
        <RevealOnScroll delay={0}>
          <h2 className="font-condensed text-[28px] text-brown">
            Industries we serve.
          </h2>
        </RevealOnScroll>
        <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry, index) => (
            <RevealOnScroll key={industry} delay={MOTION.stagger(index, 0.03)}>
              <div className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 flex-shrink-0 bg-rust" aria-hidden="true" />
                <span className="font-condensed text-[16px] font-bold text-brown/70">
                  {industry}
                </span>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      {/* Section 6 — City presence */}
      <section className="bg-paper2 px-6 py-20 md:px-20" aria-label="Cities where MDP operates">
        <RevealOnScroll delay={0}>
          <h2 className="mb-8 font-condensed text-[28px] text-brown">
            Where we operate.
          </h2>
        </RevealOnScroll>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {citiesPresence.map((city, index) => (
            <RevealOnScroll key={city.slug} delay={MOTION.stagger(index, 0.1)}>
              <Link
                href={`/locations/${city.slug}`}
                className="group block border border-brown/10 bg-paper px-6 py-6 transition-colors duration-300 hover:bg-brown"
              >
                <h3 className="font-condensed text-2xl text-brown transition-colors group-hover:text-cream">
                  {city.name}
                </h3>
                <p className="mt-1 font-sans text-sm text-brown/50 transition-colors group-hover:text-cream/50">
                  Corporate coffee service in {city.name}
                </p>
                <span
                  className="mt-3 block font-condensed text-lg text-brown/30 transition-colors group-hover:text-gold"
                  aria-hidden="true"
                >
                  →
                </span>
              </Link>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      {/* Section 7 — CTA */}
      <section
        className="flex flex-col items-center bg-[#411915] px-6 py-24 text-center md:px-20"
        aria-label="Partner with MDP Coffee House"
      >
        <RevealOnScroll delay={0}>
          <h2 className="font-condensed text-[48px] leading-[0.92] tracking-tightest text-cream">
            Bring MDP to your office.
          </h2>
        </RevealOnScroll>
        <RevealOnScroll delay={0.15}>
          <p className="mt-6 max-w-lg font-sans text-xl text-cream/55">
            Join 45+ enterprises across India who trust MDP to show up every
            morning.
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
              href="/about"
              className="border border-cream/25 px-8 py-4 font-condensed text-sm uppercase tracking-wider text-cream/70 transition-colors hover:border-cream hover:text-cream"
            >
              Learn About Us
            </Link>
          </RevealOnScroll>
        </div>
      </section>

      <Footer />
    </div>
  );
}

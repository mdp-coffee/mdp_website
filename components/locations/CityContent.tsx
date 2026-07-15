"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { PhotoPlaceholder } from "@/components/PhotoPlaceholder";
import { SectionLabel } from "@/components/SectionLabel";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { MOTION } from "@/lib/motion";
import { OutletLocationsJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";
import type { CityPageData } from "@/content/cities-seo";

export function CityContent({ city }: { city: CityPageData }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <>
      <NavBar />
      <OutletLocationsJsonLd city={city.name} />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://mdpcoffeehouse.com" },
          { name: city.name },
        ]}
      />
      <div className="bg-paper pt-16">
        {/* Hero */}
        <section
          className="flex min-h-[45vh] w-full flex-col justify-end bg-[#411915] px-6 pb-16 pt-16 md:px-20"
          aria-label={`MDP Coffee House in ${city.name}`}
        >
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: MOTION.base, delay: 0.2, ease: MOTION.ease }}
          >
            <SectionLabel tone="dark">{city.region} · Since 2005</SectionLabel>
          </motion.div>
          <motion.h1
            className="mt-6 font-condensed text-[48px] font-black leading-[0.92] tracking-tightest text-cream sm:text-[68px]"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: MOTION.slow, delay: 0.35, ease: MOTION.ease }}
          >
            Corporate coffee service
            <br />
            in {city.name}.
          </motion.h1>
          <motion.p
            className="mt-6 max-w-2xl font-sans text-xl italic leading-relaxed text-cream/60"
            initial={shouldReduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: MOTION.base, delay: 0.55, ease: MOTION.ease }}
          >
            {city.intro}
          </motion.p>

          {city.outletCount && (
            <motion.dl
              className="mt-10 flex gap-10"
              initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: MOTION.base, delay: 0.4, ease: MOTION.ease }}
            >
              <div>
                <dt className="font-condensed text-[10px] uppercase tracking-wider text-cream/35">
                  Outlets in {city.name}
                </dt>
                <dd className="mt-1 font-condensed text-3xl font-black text-gold">
                  {city.outletCount}
                </dd>
              </div>
            </motion.dl>
          )}
        </section>

        {/* Rich body content */}
        <section className="px-6 py-20 md:px-20" aria-label={`About MDP in ${city.name}`}>
          <RevealOnScroll delay={0}>
            <h2 className="font-condensed text-[32px] font-black leading-tight text-brown sm:text-[40px]">
              {city.h2}
            </h2>
          </RevealOnScroll>
          <div className="mt-8 max-w-3xl space-y-6">
            {city.paragraphs.map((para, i) => (
              <RevealOnScroll key={i} delay={MOTION.stagger(i, 0.1)}>
                <p className="font-sans text-lg leading-relaxed text-brown/70">{para}</p>
              </RevealOnScroll>
            ))}
          </div>

          {city.locationList && (
            <RevealOnScroll delay={0.2}>
              <div className="mt-12">
                <h3 className="font-condensed text-[24px] font-black text-brown">
                  {city.locationList.heading}
                </h3>
                <ul className="mt-4 space-y-2">
                  {city.locationList.items.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <span className="h-1.5 w-1.5 flex-shrink-0 bg-rust" aria-hidden="true" />
                      <span className="font-sans text-base text-brown/65">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </RevealOnScroll>
          )}

          {city.paraSections?.map((section) => (
            <RevealOnScroll key={section.heading} delay={0.1}>
              <div className="mt-12">
                <h3 className="font-condensed text-[24px] font-black text-brown">
                  {section.heading}
                </h3>
                <p className="mt-4 max-w-3xl font-sans text-lg leading-relaxed text-brown/70">
                  {section.text}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </section>

        {/* City outlet photo */}
        <RevealOnScroll delay={0.4}>
          <section className="px-6 pb-16 md:px-20">
            {city.photoSrc ? (
              <div className="relative h-80 w-full max-w-3xl overflow-hidden">
                <Image
                  src={city.photoSrc}
                  alt={city.photoAlt ?? `${city.name} outlet photography`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 768px"
                />
              </div>
            ) : (
              <PhotoPlaceholder
                label={`${city.name} outlet photography`}
                sublabel="Local kiosk or QSR photo for this city"
                className="h-80 w-full max-w-3xl"
              />
            )}
          </section>
        </RevealOnScroll>

        {/* Notable clients */}
        {city.notableClients.length > 0 && (
          <section className="bg-paper2 px-6 py-16 md:px-20" aria-label={`Clients in ${city.name}`}>
            <RevealOnScroll delay={0}>
              <h2 className="font-condensed text-[28px] font-black text-brown">
                Trusted by teams at:
              </h2>
            </RevealOnScroll>
            <ul className="mt-6 flex flex-wrap gap-3">
              {city.notableClients.map((client, index) => (
                <RevealOnScroll key={client} delay={MOTION.stagger(index, 0.06)}>
                  <li className="border border-brown/15 px-4 py-2 font-condensed text-sm text-brown/60">
                    {client}
                  </li>
                </RevealOnScroll>
              ))}
            </ul>
          </section>
        )}

        {/* CTA */}
        <section className="flex flex-col items-center bg-[#411915] px-6 py-20 text-center md:px-20">
          <RevealOnScroll delay={0}>
            <h2 className="font-condensed text-[40px] font-black leading-[0.92] tracking-tightest text-cream">
              Bring MDP to your {city.name} office.
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

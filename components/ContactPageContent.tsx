"use client";

import { useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { Contact } from "@/components/Contact";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { siteConfig } from "@/content/site";
import { outletAddresses } from "@/content/outlet-addresses";

const OutletMap = dynamic(() => import("@/components/OutletMap"), { ssr: false });

const COMMERCIAL_SLUGS = ["mall-of-mysore", "gandinagar"];
const commercialOutlets = outletAddresses.filter((outlet) =>
  COMMERCIAL_SLUGS.includes(outlet.clientSlug)
);
const corporateOutlets = outletAddresses.filter(
  (outlet) => !COMMERCIAL_SLUGS.includes(outlet.clientSlug)
);
const TOTAL_VERIFIED_OUTLETS = 69; // ground-truth record count from content/outlets.ts

export function ContactPageContent() {
  const [findUsTab, setFindUsTab] = useState<0 | 1>(0);

  return (
    <div className="bg-paper">
      <NavBar />

      {/* Hero */}
      <section
        className="relative overflow-hidden flex min-h-[40vh] w-full flex-col justify-center bg-[#411915] px-6 pt-24 pb-16 md:px-20 md:pt-32 md:pb-20"
        aria-label="Contact MDP Coffee House"
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
          <RevealOnScroll delay={0}>
            <h1 className="max-w-2xl font-condensed text-[32px] leading-[0.95] tracking-tightest text-cream sm:text-[58px]">
              Contact Us
            </h1>
          </RevealOnScroll>
          <RevealOnScroll delay={0.1}>
            <p className="mt-6 max-w-xl font-sans text-lg leading-relaxed text-cream/60 md:text-xl">
              Reach out for a workplace coffee programme, a commercial outlet visit, or just to say hello.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* Contact details */}
      <section className="bg-paper px-6 py-16 md:px-20 md:py-24" aria-label="Contact details">
        <RevealOnScroll delay={0}>
          <h2 className="font-condensed text-[26px] leading-[0.98] tracking-tight text-brown sm:text-[52px]">
            Get in Touch
          </h2>
        </RevealOnScroll>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-6">
          <RevealOnScroll delay={0.06}>
            <div className="h-full border border-brown/10 bg-paper2 p-6 sm:p-8">
              <p className="font-condensed text-[11px] uppercase tracking-widest text-rust/70">
                Phone
              </p>
              <div className="mt-3 space-y-1">
                {siteConfig.phone.map((number) => (
                  <a
                    key={number}
                    href={`tel:${number.replace(/\s+/g, "")}`}
                    className="block font-sans text-base text-brown transition-colors hover:text-rust"
                  >
                    {number}
                  </a>
                ))}
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.12}>
            <div className="h-full border border-brown/10 bg-paper2 p-6 sm:p-8">
              <p className="font-condensed text-[11px] uppercase tracking-widest text-rust/70">
                Email
              </p>
              <a
                href={`mailto:${siteConfig.email}`}
                className="mt-3 block font-sans text-base text-brown transition-colors hover:text-rust"
              >
                {siteConfig.email}
              </a>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.18}>
            <div className="h-full border border-brown/10 bg-paper2 p-6 sm:p-8">
              <p className="font-condensed text-[11px] uppercase tracking-widest text-rust/70">
                Address
              </p>
              <p className="mt-3 font-sans text-base leading-relaxed text-brown">
                {siteConfig.address}
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Social links */}
      <section className="bg-parchment px-6 py-16 md:px-20 md:py-24" aria-label="Follow MDP Coffee House">
        <RevealOnScroll delay={0}>
          <h2 className="font-condensed text-[26px] leading-[0.98] tracking-tight text-brown sm:text-[52px]">
            Follow Us
          </h2>
        </RevealOnScroll>
        <RevealOnScroll delay={0.08}>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="https://www.instagram.com/mdpcoffee/"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-brown/20 px-6 py-3 font-condensed text-sm uppercase tracking-wider text-brown/70 transition-colors hover:border-brown hover:text-brown"
            >
              Instagram →
            </a>
            <a
              href="https://www.linkedin.com/company/mdp-coffee-house/"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-brown/20 px-6 py-3 font-condensed text-sm uppercase tracking-wider text-brown/70 transition-colors hover:border-brown hover:text-brown"
            >
              LinkedIn →
            </a>
          </div>
        </RevealOnScroll>
      </section>

      {/* Contact form — reused as-is */}
      <Contact />

      {/* Find Us */}
      <section className="bg-paper2 px-6 py-16 md:px-20 md:py-24" aria-label="Find us">
        <RevealOnScroll delay={0}>
          <h2 className="font-condensed text-[26px] leading-[0.98] tracking-tight text-brown sm:text-[52px]">
            Find Us
          </h2>
        </RevealOnScroll>
        <RevealOnScroll delay={0.08}>
          <p className="mt-4 max-w-xl font-sans text-lg leading-relaxed text-brown/70">
            MDP outlets across India — click a pin for details.
          </p>
        </RevealOnScroll>

        {/* Tabs */}
        <RevealOnScroll delay={0.1}>
          <div className="mt-10 flex w-full max-w-md gap-2" role="tablist" aria-label="Find us — outlet type">
            <button
              type="button"
              role="tab"
              aria-selected={findUsTab === 0}
              onClick={() => setFindUsTab(0)}
              className={`flex-1 px-4 py-3 text-left transition-colors sm:px-5 sm:py-3 ${
                findUsTab === 0 ? "bg-brown text-cream" : "border border-brown/15 text-brown/55"
              }`}
            >
              <span className="block font-condensed text-xs font-bold leading-tight tracking-tight sm:text-sm">
                Coffee Houses
              </span>
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={findUsTab === 1}
              onClick={() => setFindUsTab(1)}
              className={`flex-1 px-4 py-3 text-left transition-colors sm:px-5 sm:py-3 ${
                findUsTab === 1 ? "bg-brown text-cream" : "border border-brown/15 text-brown/55"
              }`}
            >
              <span className="block font-condensed text-xs font-bold leading-tight tracking-tight sm:text-sm">
                Corporate
              </span>
            </button>
          </div>
        </RevealOnScroll>

        {/* Active panel */}
        <RevealOnScroll delay={0.14}>
          <div className="mt-10">
            {findUsTab === 0 ? (
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                {commercialOutlets.map((outlet, i) => (
                  <div
                    key={`${outlet.clientSlug}-${i}`}
                    className="border border-brown/10 bg-paper p-4 sm:p-6"
                  >
                    <p className="font-condensed text-lg font-bold tracking-tight text-brown">
                      {outlet.client}
                    </p>
                    <p className="mt-1 font-sans text-sm text-brown/60">{outlet.address}</p>
                    <iframe
                      title={`Map location — ${outlet.client}`}
                      src={`https://www.google.com/maps?q=${outlet.lat},${outlet.lng}&output=embed`}
                      className="mt-4 h-[300px] w-full border-0"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                ))}
              </div>
            ) : (
              <div className="border border-brown/10">
                <OutletMap outlets={corporateOutlets} />
              </div>
            )}
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.2}>
          <p className="mt-6 font-sans text-sm text-brown/50">
            {findUsTab === 0
              ? `Showing ${commercialOutlets.length} verified commercial outlets — more added as addresses are confirmed.`
              : `Showing ${corporateOutlets.length} of MDP’s ${TOTAL_VERIFIED_OUTLETS} verified corporate outlets — more added as addresses are confirmed.`}
          </p>
        </RevealOnScroll>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

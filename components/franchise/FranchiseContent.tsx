"use client";

import { useState, type FormEvent } from "react";
import Image from "next/image";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { useCountUp } from "@/hooks/useCountUp";
import { trackEvent } from "@/components/Analytics";

const provides = [
  {
    title: "Site Selection",
    body: "We help identify the right location, backed by 21 years of site data across 85+ outlets in four cities — not a guess, a track record.",
  },
  {
    title: "Store Design & Setup",
    body: "Every outlet follows one of four proven formats, with design templates and cost structures already built from real deployments.",
  },
  {
    title: "Equipment",
    body: "We source, install, and maintain the equipment your outlet needs — the same logistics we already run for enterprise clients at scale.",
  },
  {
    title: "Training",
    body: "Every franchise team is trained to the same standard we use across our outlets daily, through the MDP Training Academy.",
  },
  {
    title: "Staffing",
    body: "We help recruit and place staff — running corporate pantries at scale is core to what we already do.",
  },
  {
    title: "Supply Chain",
    body: "1,00,000 cups a day across 32+ enterprise clients — the same supply chain that serves them serves your outlet.",
  },
  {
    title: "Launch Support",
    body: "A structured 90-day launch plan, not a vague promise — from opening week through your first quarter.",
  },
  {
    title: "Ongoing Support",
    body: "Twenty-one years of daily operational discipline, not a brand still finding its footing.",
  },
  {
    title: "Technology",
    body: "A lightweight POS and reporting dashboard, so you always know how your outlet is performing.",
  },
];

const needs = [
  {
    title: "Location",
    body: "A space meeting our area and footfall requirements (100–200 sq ft minimum), in a location we jointly approve.",
  },
  {
    title: "Capital",
    body: "The investment outlined above, committed in full before opening.",
  },
  {
    title: "Hands-On Involvement",
    body: "This is a franchise-owned, franchise-operated model — we need an owner genuinely present in running the outlet day to day.",
  },
  {
    title: "Staffing",
    body: "A small, dedicated team, hired and retained to our training standard.",
  },
  {
    title: "Standards",
    body: "Consistent adherence to MDP's recipes, SOPs, and quality benchmarks — no shortcuts, no substitutions.",
  },
  {
    title: "Commitment",
    body: "A 5-year or 10-year outlook — this is a long-term partnership, not a short-term test.",
  },
];

const investmentRows = [
  { label: "Setup Cost", value: "₹5,00,000" },
  { label: "Marketing Cost", value: "₹1,00,000" },
  { label: "Working Capital", value: "₹1,00,000" },
  { label: "Franchise Fee — 5-Year Term", value: "₹1,50,000" },
  { label: "Franchise Fee — 10-Year Term", value: "₹2,50,000" },
];

const provideIcons: Record<string, React.ReactNode> = {
  "Site Selection": (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6" aria-hidden="true">
      <path d="M16 29 C10 21 6 16 6 11 C6 6.6 10.5 3 16 3 C21.5 3 26 6.6 26 11 C26 16 22 21 16 29 Z" />
      <circle cx="16" cy="11" r="4" />
    </svg>
  ),
  "Store Design & Setup": (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6" aria-hidden="true">
      <path d="M4 12 L6 5 H26 L28 12" />
      <path d="M4 12 V27 H28 V12" />
      <path d="M4 12 C4 15 8 15 8 12" />
      <path d="M8 12 C8 15 12 15 12 12" />
      <path d="M12 12 C12 15 16 15 16 12" />
      <path d="M16 12 C16 15 20 15 20 12" />
      <path d="M20 12 C20 15 24 15 24 12" />
      <path d="M24 12 C24 15 28 15 28 12" />
      <path d="M13 27 V19 H19 V27" />
    </svg>
  ),
  Equipment: (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6" aria-hidden="true">
      <rect x="5" y="10" width="22" height="16" />
      <path d="M10 10 V6 H22 V10" />
      <circle cx="12" cy="18" r="2.5" />
      <circle cx="20" cy="18" r="2.5" />
      <path d="M9 26 L9 29" />
      <path d="M23 26 L23 29" />
    </svg>
  ),
  Training: (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6" aria-hidden="true">
      <path d="M2 11 L16 5 L30 11 L16 17 Z" />
      <path d="M8 14 V22 C8 24 12 26 16 26 C20 26 24 24 24 22 V14" />
      <path d="M30 11 V19" />
    </svg>
  ),
  Staffing: (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6" aria-hidden="true">
      <circle cx="12" cy="10" r="4" />
      <path d="M4 27 C4 21 7.5 18 12 18 C16.5 18 20 21 20 27" />
      <circle cx="23" cy="12" r="3" />
      <path d="M20 27 C20 22.5 22 20 26 20 C29 20 30 23 30 27" />
    </svg>
  ),
  "Supply Chain": (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6" aria-hidden="true">
      <rect x="2" y="14" width="15" height="10" />
      <path d="M17 17 H24 L30 22 V24 H17" />
      <circle cx="9" cy="26" r="2.4" />
      <circle cx="24" cy="26" r="2.4" />
    </svg>
  ),
  "Launch Support": (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6" aria-hidden="true">
      <path d="M16 3 C21 8 22 15 19 21 L13 21 C10 15 11 8 16 3 Z" />
      <path d="M13 21 L9 27 L13 25 Z" />
      <path d="M19 21 L23 27 L19 25 Z" />
      <circle cx="16" cy="12" r="2" />
    </svg>
  ),
  "Ongoing Support": (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6" aria-hidden="true">
      <path d="M16 3 L27 7 V15 C27 22 22 27 16 29 C10 27 5 22 5 15 V7 Z" />
      <path d="M11 16 L14.5 19.5 L21 12" />
    </svg>
  ),
  Technology: (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6" aria-hidden="true">
      <rect x="3" y="6" width="26" height="17" />
      <path d="M11 28 H21" />
      <path d="M16 23 V28" />
      <path d="M8 11 L13 16 L8 21" strokeLinejoin="round" />
      <path d="M17 20 H24" />
    </svg>
  ),
};

const needIcons: Record<string, React.ReactNode> = {
  Location: (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6" aria-hidden="true">
      <path d="M16 29 C10 21 6 16 6 11 C6 6.6 10.5 3 16 3 C21.5 3 26 6.6 26 11 C26 16 22 21 16 29 Z" />
      <path d="M12 11 L15 14 L21 8" />
    </svg>
  ),
  Capital: (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6" aria-hidden="true">
      <rect x="3" y="9" width="26" height="16" />
      <circle cx="16" cy="17" r="4" />
      <path d="M3 13 H29" />
    </svg>
  ),
  "Hands-On Involvement": (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6" aria-hidden="true">
      <path d="M9 18 V8 C9 6.6 10.1 5.5 11.5 5.5 C12.9 5.5 14 6.6 14 8 V16" />
      <path d="M14 15 V6.5 C14 5.1 15.1 4 16.5 4 C17.9 4 19 5.1 19 6.5 V16" />
      <path d="M19 15.5 V8 C19 6.6 20.1 5.5 21.5 5.5 C22.9 5.5 24 6.6 24 8 V19" />
      <path d="M9 18 L6.5 15.5 C5.5 14.5 4 15.5 4.5 17 C6 21 9 26 14 28 H21 C25 28 27 25 27 21 V19" />
    </svg>
  ),
  Staffing: (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6" aria-hidden="true">
      <circle cx="12" cy="10" r="4" />
      <path d="M4 27 C4 21 7.5 18 12 18 C16.5 18 20 21 20 27" />
      <circle cx="23" cy="12" r="3" />
      <path d="M20 27 C20 22.5 22 20 26 20 C29 20 30 23 30 27" />
    </svg>
  ),
  Standards: (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6" aria-hidden="true">
      <path d="M16 3 L27 7 V15 C27 22 22 27 16 29 C10 27 5 22 5 15 V7 Z" />
      <path d="M11 16 L14.5 19.5 L21 12" />
    </svg>
  ),
  Commitment: (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6" aria-hidden="true">
      <circle cx="16" cy="16" r="12" />
      <path d="M16 9 V16 L21 19" />
    </svg>
  ),
};

type SubmitState = "idle" | "submitting" | "success" | "error";

export function FranchiseContent() {
  const [state, setState] = useState<SubmitState>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const years = useCountUp({ end: 20, suffix: "+" });
  const outlets = useCountUp({ end: 85, suffix: "+" });
  const cities = useCountUp({ end: 4 });
  const cups = useCountUp({ end: 100000, locale: "en-IN" });

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("submitting");
    setErrorMsg("");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: formData.get("name"),
      company: formData.get("area"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      message: formData.get("message"),
      website: formData.get("website"),
      source: "franchise",
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const data = (await res.json()) as { error?: string };
        throw new Error(data.error ?? "Something went wrong");
      }

      setState("success");
      trackEvent("franchise_enquiry_submit", { location: "franchise_page" });
      form.reset();
    } catch (err) {
      setState("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong");
    }
  }

  return (
    <div className="bg-paper">
      <NavBar />

      {/* Hero */}
      <section className="relative overflow-hidden flex min-h-[50vh] w-full flex-col justify-center bg-[#411915] px-6 pt-24 pb-16 md:px-20 md:pt-32 md:pb-20">
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
            <h1 className="font-condensed text-[32px] leading-[0.95] tracking-tightest text-cream sm:text-[58px]">
              Own an MDP <span className="text-gold">Coffee House.</span>
            </h1>
          </RevealOnScroll>
          <RevealOnScroll delay={0.1}>
            <p className="mt-6 max-w-xl font-sans text-lg leading-relaxed text-cream/60 md:text-xl">
              Twenty years of operational discipline, built for the right partner to bring somewhere new.
            </p>
          </RevealOnScroll>
          <RevealOnScroll delay={0.2}>
            <a
              href="#enquire"
              className="mt-8 inline-block bg-gold px-8 py-4 font-condensed text-sm font-bold uppercase tracking-wider text-brown transition-colors hover:bg-gold/90"
            >
              Enquire Now →
            </a>
          </RevealOnScroll>
        </div>
      </section>

      {/* The Model */}
      <section className="bg-paper px-6 py-16 md:px-20 md:py-24">
        <RevealOnScroll delay={0}>
          <h2 className="font-condensed text-[26px] leading-[0.98] tracking-tight text-brown sm:text-[52px]">
            The Concept.
          </h2>
        </RevealOnScroll>
        <RevealOnScroll delay={0.1}>
          <p className="mt-6 max-w-2xl font-sans text-lg leading-relaxed text-brown/70 md:text-xl">
            MDP Coffee House franchises operate on a franchise-owned,
            franchise-operated (FOFO) model. You own and run the outlet; we
            provide the brand, training, systems, and supply chain behind it.
            Outlets require as little as 100&ndash;200 sq&nbsp;ft, with a 5-year
            or 10-year term to choose from.
          </p>
        </RevealOnScroll>
        <RevealOnScroll delay={0.2}>
          <p className="mt-6 max-w-2xl font-sans text-lg leading-relaxed text-brown/70 md:text-xl">
            The format is built for simplicity, not specialisation. Every
            process &mdash; from brewing to service &mdash; follows a standard
            developed over twenty years, so a new team can be trained and an
            outlet opened within weeks. One recipe, one standard, wherever
            it&rsquo;s built.
          </p>
        </RevealOnScroll>
        <RevealOnScroll delay={0.3}>
          <p className="mt-6 font-condensed text-xs uppercase tracking-widest text-rust/60">
            Minimal Staffing &middot; Standardised Process &middot; Fast Turnaround &middot; Built to Replicate
          </p>
        </RevealOnScroll>
      </section>

      {/* The Investment */}
      <section className="relative overflow-hidden bg-[#411915] px-6 py-16 md:px-20 md:py-24">
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
            <h2 className="font-condensed text-[26px] leading-[0.98] tracking-tight text-cream sm:text-[52px]">
              The Investment.
            </h2>
          </RevealOnScroll>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 md:gap-6">
            {investmentRows.map((row, i) => (
              <RevealOnScroll key={row.label} delay={i * 0.06}>
                <div className="group border border-cream/15 bg-cream/[0.04] p-6 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:border-gold hover:bg-gold sm:p-8">
                  <p className="font-condensed text-xs uppercase tracking-widest text-cream/50 transition-colors duration-300 group-hover:text-brown/70">
                    {row.label}
                  </p>
                  <p className="mt-3 font-condensed text-3xl font-black text-gold transition-colors duration-300 group-hover:text-brown sm:text-4xl">
                    {row.value}
                  </p>
                </div>
              </RevealOnScroll>
            ))}
          </div>

          <RevealOnScroll delay={0.3}>
            <p className="mt-6 max-w-2xl font-sans text-sm text-cream/40">
              All setup, marketing, and working capital costs are non-refundable.
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={0.35}>
            <div className="mt-10 border-l-4 border-gold bg-cream/[0.04] p-6 sm:p-8">
              <p className="font-condensed text-xs uppercase tracking-widest text-gold/70">
                Royalty
              </p>
              <p className="mt-3 max-w-2xl font-sans text-lg leading-relaxed text-cream/80">
                3% of revenue, applicable after the first 3 months. An optional +3% management fee applies if you&rsquo;d like MDP to manage day-to-day operations on your behalf.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* What MDP Provides */}
      <section className="bg-paper2 px-6 py-16 md:px-20 md:py-24">
        <RevealOnScroll delay={0}>
          <h2 className="font-condensed text-[26px] leading-[0.98] tracking-tight text-brown sm:text-[52px]">
            What MDP Provides.
          </h2>
        </RevealOnScroll>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 md:gap-6">
          {provides.map((item, i) => (
            <RevealOnScroll key={item.title} delay={i * 0.06}>
              <div className="group relative overflow-hidden border border-brown/10 bg-paper p-6 transition-all duration-300 ease-in-out hover:-translate-y-1.5 hover:border-gold/40 hover:shadow-xl sm:p-8">
                <div
                  className="absolute inset-0 z-0 translate-y-full bg-[#411915] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0"
                  aria-hidden="true"
                />
                <span className="relative z-10 inline-flex h-12 w-12 items-center justify-center rounded-full border border-gold/25 bg-gold/10 text-gold transition-all duration-150 ease-in-out group-hover:scale-110 group-hover:border-transparent group-hover:bg-gold group-hover:text-brown">
                  {provideIcons[item.title]}
                </span>
                <h3 className="relative z-10 mt-5 font-condensed text-lg tracking-tight text-brown transition-colors duration-300 group-hover:text-cream">
                  {item.title}
                </h3>
                <p className="relative z-10 mt-2 font-sans text-sm leading-relaxed text-brown/60 transition-colors duration-300 group-hover:text-cream/70">
                  {item.body}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      {/* What We Need From You */}
      <section className="bg-parchment px-6 py-16 md:px-20 md:py-24">
        <RevealOnScroll delay={0}>
          <h2 className="font-condensed text-[26px] leading-[0.98] tracking-tight text-brown sm:text-[52px]">
            What We Need From You.
          </h2>
        </RevealOnScroll>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 md:gap-6">
          {needs.map((item, i) => (
            <RevealOnScroll key={item.title} delay={i * 0.06}>
              <div className="group relative overflow-hidden border border-brown/10 bg-paper p-6 transition-all duration-300 ease-in-out hover:-translate-y-1.5 hover:border-gold/40 hover:shadow-xl sm:p-8">
                <div
                  className="absolute inset-0 z-0 translate-y-full bg-[#411915] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0"
                  aria-hidden="true"
                />
                <span className="relative z-10 inline-flex h-12 w-12 items-center justify-center rounded-full border border-gold/25 bg-gold/10 text-gold transition-all duration-150 ease-in-out group-hover:scale-110 group-hover:border-transparent group-hover:bg-gold group-hover:text-brown">
                  {needIcons[item.title]}
                </span>
                <h3 className="relative z-10 mt-5 font-condensed text-lg tracking-tight text-brown transition-colors duration-300 group-hover:text-cream">
                  {item.title}
                </h3>
                <p className="relative z-10 mt-2 font-sans text-sm leading-relaxed text-brown/60 transition-colors duration-300 group-hover:text-cream/70">
                  {item.body}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      {/* Track Record */}
      <section className="bg-[#411915] px-6 py-16 md:px-20 md:py-24">
        <RevealOnScroll delay={0}>
          <h2 className="font-condensed text-[26px] leading-[0.98] tracking-tight text-cream sm:text-[52px]">
            A Track Record, Not a Pitch Deck.
          </h2>
        </RevealOnScroll>

        <div className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-4">
          {[
            { ...years, label: "Years of Operation" },
            { ...outlets, label: "Locations" },
            { ...cities, label: "Cities" },
            { ...cups, label: "Cups Daily" },
          ].map((stat) => (
            <div key={stat.label} ref={stat.ref} className="border-l border-gold/20 pl-4">
              <p className="font-condensed text-3xl font-black text-gold sm:text-4xl">
                {stat.display}
              </p>
              <p className="mt-1 font-sans text-xs uppercase tracking-wide text-cream/40">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Enquiry form */}
      <section id="enquire" className="grid grid-cols-1 md:grid-cols-2">
        <div className="flex flex-col justify-center bg-[#411915] px-6 py-16 md:px-14 md:py-24">
          <RevealOnScroll delay={0}>
            <h2 className="font-condensed text-[28px] leading-[0.98] tracking-tight text-cream sm:text-[44px]">
              Let&rsquo;s talk about your city.
            </h2>
            <p className="mt-6 max-w-sm font-sans text-base leading-relaxed text-cream/55">
              Tell us where, and we&rsquo;ll take it from there.
            </p>
          </RevealOnScroll>
        </div>

        <div className="flex flex-col justify-center bg-paper px-6 py-16 md:px-14 md:py-24">
          <RevealOnScroll delay={0.1}>
            {state === "success" ? (
              <div role="status" className="max-w-sm">
                <p className="font-condensed text-2xl font-black text-brown">
                  We&rsquo;ll be in touch.
                </p>
                <p className="mt-2 font-sans text-brown/60">
                  Thank you for your interest in an MDP Coffee House franchise.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="max-w-sm">
                <div className="absolute -left-[9999px]" aria-hidden="true">
                  <label>
                    Leave this field empty
                    <input type="text" name="website" tabIndex={-1} autoComplete="off" />
                  </label>
                </div>

                <div className="mb-4">
                  <label htmlFor="name" className="font-condensed text-[9px] uppercase tracking-[0.15em] text-brown/40">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    minLength={2}
                    placeholder="Your name"
                    className="mt-1.5 w-full border border-brown/15 bg-paper2 px-4 py-3 font-sans text-brown placeholder:text-brown/30 focus:border-gold focus:outline-none"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="area" className="font-condensed text-[9px] uppercase tracking-[0.15em] text-brown/40">
                    City / Area of Interest
                  </label>
                  <input
                    id="area"
                    name="area"
                    type="text"
                    placeholder="e.g. Bengaluru — Indiranagar"
                    className="mt-1.5 w-full border border-brown/15 bg-paper2 px-4 py-3 font-sans text-brown placeholder:text-brown/30 focus:border-gold focus:outline-none"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="phone" className="font-condensed text-[9px] uppercase tracking-[0.15em] text-brown/40">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    placeholder="Phone number"
                    className="mt-1.5 w-full border border-brown/15 bg-paper2 px-4 py-3 font-sans text-brown placeholder:text-brown/30 focus:border-gold focus:outline-none"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="font-condensed text-[9px] uppercase tracking-[0.15em] text-brown/40">
                    Email <span className="normal-case opacity-60">(optional)</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Email address"
                    className="mt-1.5 w-full border border-brown/15 bg-paper2 px-4 py-3 font-sans text-brown placeholder:text-brown/30 focus:border-gold focus:outline-none"
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="font-condensed text-[9px] uppercase tracking-[0.15em] text-brown/40">
                    Message <span className="normal-case opacity-60">(optional)</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    placeholder="Tell us a bit about yourself"
                    className="mt-1.5 w-full resize-none border border-brown/15 bg-paper2 px-4 py-3 font-sans text-brown placeholder:text-brown/30 focus:border-gold focus:outline-none"
                  />
                </div>

                {state === "error" && (
                  <p role="alert" className="mb-4 font-sans text-sm text-rust">
                    {errorMsg}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={state === "submitting"}
                  className="bg-brown px-8 py-4 font-condensed text-sm font-bold uppercase tracking-wider text-cream transition-colors hover:bg-rust disabled:opacity-60"
                >
                  {state === "submitting" ? "Sending..." : "Send Enquiry"}
                </button>
              </form>
            )}
          </RevealOnScroll>
        </div>
      </section>

      <Footer />
    </div>
  );
}

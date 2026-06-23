"use client";

import { useState } from "react";
import Image from "next/image";
import { SectionLabel } from "@/components/SectionLabel";
import { PhotoPlaceholder } from "@/components/PhotoPlaceholder";
import { timeline, storyContent } from "@/lib/content";

export function Origin() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeEvent = timeline[activeIndex];

  return (
    <section
      id="story"
      className="snap-slide w-full bg-paper2 px-6 py-24 md:px-20"
      aria-label="Our story — MDP Coffee House since 2005"
    >

      {/* ── Layer 1: Story ─────────────────────────────────────────── */}
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">

        {/* Left — headline */}
        <div>
          <SectionLabel tone="light">Our Story</SectionLabel>
          <h2 className="mt-8 font-condensed text-[52px] leading-[0.88] tracking-tightest text-brown sm:text-[64px] lg:text-[76px]">
            One kiosk.
            <br />
            Twenty years later,
            <br />
            still showing up.
          </h2>
        </div>

        {/* Right — narrative + archive photo */}
        <div className="flex flex-col justify-center">
          {storyContent.narrative.map((para, i) => (
            <p
              key={i}
              className={`font-serif text-lg leading-relaxed text-brown/65${i > 0 ? " mt-5" : ""}`}
            >
              {para}
            </p>
          ))}

          <div className="mt-10 border-l-2 border-gold/30 pl-6">
            <div className="relative h-52 w-full overflow-hidden">
              <Image
                src="/images/ante-samarzija-lsmu0rUhUOk-unsplash.jpg"
                alt="First MDP kiosk, Accenture Vikhroli, 2005"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <p className="mt-3 font-condensed text-[10px] uppercase tracking-[0.2em] text-brown/30">
              First Kiosk · Accenture, Vikhroli · 2005
            </p>
          </div>
        </div>
      </div>

      {/* ── Layer 2: Mission & Vision ──────────────────────────────── */}
      <div className="mt-24 border-t border-brown/10 pt-16">
        <SectionLabel tone="light">Mission &amp; Vision</SectionLabel>

        <div className="mt-8 grid grid-cols-1 gap-px border border-brown/10 sm:grid-cols-2">
          <div className="bg-paper2 p-10">
            <p className="font-condensed text-[10px] font-bold uppercase tracking-[0.25em] text-rust/60">
              Mission
            </p>
            <p className="mt-5 font-serif text-xl leading-relaxed text-brown/80">
              {storyContent.mission}
            </p>
          </div>
          <div className="bg-parchment p-10">
            <p className="font-condensed text-[10px] font-bold uppercase tracking-[0.25em] text-rust/60">
              Vision
            </p>
            <p className="mt-5 font-serif text-xl leading-relaxed text-brown/80">
              {storyContent.vision}
            </p>
          </div>
        </div>

        {/* What We Believe */}
        <div className="mt-12">
          <p className="font-condensed text-[10px] font-bold uppercase tracking-[0.25em] text-brown/35">
            What We Believe
          </p>
          <div className="mt-6 grid grid-cols-2 gap-px border border-brown/10 lg:grid-cols-4">
            {storyContent.principles.map((principle) => (
              <div key={principle.title} className="bg-paper2 px-6 py-7">
                <p className="font-condensed text-[16px] font-black tracking-tight text-brown">
                  {principle.title}
                </p>
                <p className="mt-2 font-serif text-sm leading-relaxed text-brown/50">
                  {principle.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Layer 3: Journey Timeline ──────────────────────────────── */}
      <div className="mt-24 border-t border-brown/10 pt-16">
        <SectionLabel tone="light">Our Journey</SectionLabel>

        {/* Active milestone content */}
        {activeEvent ? (
          <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-3">
            <div className="flex flex-col justify-center lg:col-span-2">
              <p className="font-condensed text-[11px] font-bold uppercase tracking-[0.25em] text-gold/70">
                {activeEvent.year}
              </p>
              <h3 className="mt-3 font-condensed text-[40px] leading-[0.92] tracking-tightest text-brown sm:text-[52px]">
                {activeEvent.headline}
              </h3>
              <p className="mt-4 font-serif text-xl text-brown/55">
                {activeEvent.detail}
              </p>
            </div>
            <div>
              <PhotoPlaceholder
                label={`${activeEvent.year} — ${activeEvent.headline}`}
                sublabel="Archive photograph — replace when available."
                className="h-52 w-full border-0 bg-gold/5"
              />
              <p className="mt-3 font-condensed text-[10px] uppercase tracking-[0.2em] text-brown/30">
                {activeEvent.year} · {activeEvent.detail}
              </p>
            </div>
          </div>
        ) : null}

        {/* Horizontal timeline */}
        <div className="relative mt-14" role="tablist" aria-label="Company milestones">
          {/* Connecting line */}
          <div
            className="pointer-events-none absolute inset-x-0 top-[5px] h-px bg-brown/15"
            aria-hidden="true"
          />

          <div className="relative flex justify-between">
            {timeline.map((event, i) => (
              <button
                key={event.year}
                type="button"
                role="tab"
                aria-selected={i === activeIndex}
                onClick={() => setActiveIndex(i)}
                className="group flex flex-col items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
                aria-label={`${event.year}: ${event.headline}`}
              >
                {/* Dot */}
                <span
                  className={`relative z-10 block h-3 w-3 rounded-full border-2 transition-colors duration-150 ${
                    i === activeIndex
                      ? "border-gold bg-gold"
                      : "border-brown/25 bg-paper2 group-hover:border-gold/50"
                  }`}
                  aria-hidden="true"
                />
                {/* Year */}
                <span
                  className={`mt-3 font-condensed text-[11px] font-bold tabular-nums tracking-wider transition-colors duration-150 ${
                    i === activeIndex
                      ? "text-gold"
                      : "text-brown/40 group-hover:text-brown/65"
                  }`}
                >
                  {event.year}
                </span>
                {/* Headline — hidden on very small screens */}
                <span
                  className={`mt-1 hidden max-w-[90px] text-center font-condensed text-[10px] uppercase leading-snug tracking-wide transition-colors duration-150 sm:block ${
                    i === activeIndex ? "text-brown/60" : "text-brown/25"
                  }`}
                >
                  {event.headline}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}

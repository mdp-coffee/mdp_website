"use client";

import { motion, useReducedMotion } from "framer-motion";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import timelineData from "@/content/timeline.json";

const ACTIVE_YEARS = new Set(["2005", "2010", "2014", "2019", "2024"]);

interface TimelineEntry {
  year: string;
  headline: string;
  detail: string;
  side: "left" | "right";
  active: boolean;
}

const events: TimelineEntry[] = timelineData.events.map((e, i) => ({
  ...e,
  side: i % 2 === 0 ? "left" : "right",
  active: ACTIVE_YEARS.has(e.year),
}));

function EventContent({ event, align }: { event: TimelineEntry; align: "left" | "right" }) {
  return (
    <div className={`flex flex-col ${align === "right" ? "items-end text-right" : "items-start text-left"}`}>
      <p className="font-condensed not-italic text-base text-rust/70">{event.year}</p>
      <p className="font-condensed not-italic text-sm leading-tight text-cream">{event.headline}</p>
      <p className="mt-1 font-sans text-xs leading-relaxed text-cream/60">{event.detail}</p>
    </div>
  );
}

export function CompactTimeline() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      className="snap-slide flex min-h-0 py-16 md:py-24 flex-col justify-center bg-[#411915] px-6 md:px-20"
      aria-label="MDP timeline"
    >
      <p className="mb-2 text-center font-condensed text-[11px] uppercase tracking-widest text-rust/60">
        Our Journey
      </p>
      <h2 className="mb-8 text-center font-condensed text-2xl not-italic text-cream md:text-3xl">
        Twenty years. One cup at a time.
      </h2>

      <div className="relative mx-auto w-full max-w-[900px]">
        {/* Centre spine — desktop only */}
        <motion.div
          aria-hidden="true"
          className="absolute bottom-0 left-1/2 top-0 hidden w-px -translate-x-1/2 origin-top bg-cream/20 md:block"
          initial={shouldReduceMotion ? false : { scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />

        <div className="flex flex-col gap-6">
          {events.map((event, index) => (
            <RevealOnScroll key={event.year} delay={index * 0.06}>
              {/* Desktop layout */}
              <div className="relative hidden md:grid md:grid-cols-2">
                <span
                  aria-hidden="true"
                  className={`absolute left-1/2 top-1/2 z-10 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full ${
                    event.active ? "bg-rust" : "bg-cream/25"
                  }`}
                />
                {event.side === "left" ? (
                  <span
                    aria-hidden="true"
                    className="absolute right-1/2 top-1/2 h-px w-8 -translate-y-1/2 bg-brown/10"
                  />
                ) : (
                  <span
                    aria-hidden="true"
                    className="absolute left-1/2 top-1/2 h-px w-8 -translate-y-1/2 bg-brown/10"
                  />
                )}
                {event.side === "left" ? (
                  <>
                    <div className="pr-12">
                      <EventContent event={event} align="right" />
                    </div>
                    <div aria-hidden="true" />
                  </>
                ) : (
                  <>
                    <div aria-hidden="true" />
                    <div className="pl-12">
                      <EventContent event={event} align="left" />
                    </div>
                  </>
                )}
              </div>

              {/* Mobile layout */}
              <div className="flex flex-col gap-1 border-l-2 border-brown/10 pl-4 md:hidden">
                <p className="font-condensed not-italic text-base text-rust/70">{event.year}</p>
                <p className="font-condensed not-italic text-sm leading-tight text-brown">{event.headline}</p>
                <p className="font-sans text-xs leading-relaxed text-brown/55">{event.detail}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>

      <div className="mt-6 text-center">
        <p className="font-condensed not-italic text-lg text-brown">Still showing up. Every morning.</p>
        <p className="mt-1 font-condensed text-sm uppercase tracking-widest text-rust/55">Since 2005.</p>
      </div>
    </section>
  );
}

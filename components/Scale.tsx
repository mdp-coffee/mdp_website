"use client";

import { SectionLabel } from "@/components/SectionLabel";
import { CompactForm } from "@/components/CompactForm";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { useCountUp } from "@/hooks/useCountUp";
import { siteConfig } from "@/content/site";

function parseStatValue(val: string | number): { end: number; suffix: string } {
  if (typeof val === "number") return { end: val, suffix: "" };
  const m = /^(\d[\d,]*)(\+?)$/.exec(val);
  return m ? { end: parseInt((m[1] ?? "0").replace(/,/g, ""), 10), suffix: m[2] ?? "" } : { end: 0, suffix: "" };
}

interface StatCounterProps {
  end: number;
  suffix: string;
  label: string;
  accent?: boolean;
  locale?: string;
}

function StatCounter({ end, suffix, label, accent, locale }: StatCounterProps) {
  const { ref, display } = useCountUp({ end, suffix, locale });
  const isLong = display.length > 6;
  return (
    <div ref={ref}>
      <span
        className={`font-condensed font-black leading-[0.95] tracking-tightest ${
          accent ? "text-gold" : "text-cream"
        } ${isLong ? "text-[36px] sm:text-[44px]" : "text-[44px] sm:text-[56px]"}`}
      >
        {display}
      </span>
      <span className="ml-3 font-sans text-xl text-cream/40 sm:text-2xl">
        {label}
      </span>
    </div>
  );
}

const locStat = parseStatValue(siteConfig.locationsCount);
const clientStat = parseStatValue(siteConfig.enterpriseClients);

export function Scale() {
  return (
    <section
      id="scale"
      className="snap-slide grainy grainy-dark relative flex min-h-[100svh] w-full items-center bg-[#411915] px-6 py-20 md:px-20"
      aria-label="MDP Coffee House scale — 85+ locations, 1,00,000 cups daily, 45+ enterprise clients"
    >
      <div className="grid w-full grid-cols-1 gap-12 lg:grid-cols-2">
        <div className="flex flex-col justify-center">
          <RevealOnScroll delay={0}>
            <SectionLabel tone="dark">Scale</SectionLabel>
          </RevealOnScroll>

          <div className="mt-8 flex flex-col gap-2">
            <RevealOnScroll delay={0.1}>
              <StatCounter
                end={locStat.end}
                suffix={locStat.suffix}
                label="locations."
              />
            </RevealOnScroll>
            <RevealOnScroll delay={0.2}>
              <StatCounter
                end={siteConfig.cupsPerDay}
                suffix=""
                label="cups. every day."
                accent
                locale="en-IN"
              />
            </RevealOnScroll>
            <RevealOnScroll delay={0.3}>
              <StatCounter
                end={clientStat.end}
                suffix={clientStat.suffix}
                label="enterprise clients."
              />
            </RevealOnScroll>
          </div>

          <RevealOnScroll delay={0.4}>
            <p className="mt-6 font-condensed text-sm font-bold tracking-wide text-gold/60">
              Every single day.
            </p>
          </RevealOnScroll>

        </div>

        {/* Enquiry panel */}
        <RevealOnScroll delay={0.15} direction="left">
          <div className="flex flex-col justify-center">
            <h3 className="font-condensed text-[32px] font-black leading-tight tracking-tightest text-cream sm:text-[40px]">
              Bring MDP to
              <br />
              your office.
            </h3>
            <p className="mb-8 mt-3 font-sans text-cream/50">
              Fill in your details and we&rsquo;ll call you back.
            </p>
            <CompactForm />
          </div>
        </RevealOnScroll>

      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { CornerAccents } from "@/components/CornerAccents";

export function Scale() {
  return (
    <section
      id="scale"
      className="relative snap-slide grid min-h-0 w-full grid-cols-1 md:grid-cols-2"
      aria-label="MDP Coffee House — franchise enquiry"
    >
      <CornerAccents />
      {/* Left — dark panel */}
      <div className="relative flex flex-col justify-center overflow-hidden bg-[#411915] px-6 py-20 md:px-14">
        <RevealOnScroll
          delay={0}
          className="pointer-events-none absolute bottom-0 -right-6 md:-right-14 hidden h-3/4 w-1/2 opacity-[0.25] md:block"
        >
          <div aria-hidden="true">
            <Image
              src="/images/MDP coffeee man Png1.png"
              alt=""
              fill
              className="object-contain object-bottom [filter:invert(1)_brightness(1.4)]"
            />
          </div>
        </RevealOnScroll>
        <RevealOnScroll direction="left" delay={0}>
          <div className="relative z-10">
            <h2 className="mt-6 font-condensed text-[30px] leading-[0.98] tracking-tightest text-cream sm:text-[56px]">
              Bring MDP closer to home.
            </h2>
            <p className="mt-6 max-w-md font-sans text-base leading-relaxed text-cream/55">
              For twenty years, MDP has earned its place in India&rsquo;s workday — one outlet, one relationship, one morning at a time. This is a franchise opportunity for the right partners to bring that same standard somewhere new.
            </p>
            <p className="mt-6 max-w-xs font-sans text-sm text-cream/35">
              20+ years in operation · 85+ locations nationwide · 32+ enterprise clients.
            </p>
            <p className="mt-6 max-w-md font-sans text-sm leading-relaxed text-cream/45">
              We partner with people who value consistency over shortcuts, understand hospitality, and want to build something real.
            </p>
          </div>
        </RevealOnScroll>
      </div>

      {/* Right — CTA panel */}
      <div className="flex flex-col justify-center bg-paper px-6 py-20 md:px-14">
        <RevealOnScroll delay={0.2}>
          <div className="max-w-md">
            <p className="font-condensed text-3xl font-black text-brown">
              Franchise opportunities open soon.
            </p>
            <Link
              href="/franchise"
              className="mt-6 inline-block bg-brown px-8 py-3 font-condensed text-xs font-bold uppercase tracking-[0.15em] text-cream transition-colors hover:bg-rust md:py-4 md:text-sm"
            >
              Learn More →
            </Link>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}

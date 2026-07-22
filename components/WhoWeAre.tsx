"use client";

import Image from "next/image";
import Link from "next/link";
import { RevealOnScroll } from "@/components/RevealOnScroll";

export function WhoWeAre() {
  return (
    <section
      id="who-we-are"
      className="snap-slide flex min-h-0 w-full items-center bg-paper px-6 py-16 md:px-20 md:py-24"
      aria-label="Who we are"
    >
      <div className="grid w-full grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-16">
        <div>
          <RevealOnScroll delay={0.1}>
            <h2 className="mt-6 font-condensed text-[30px] leading-[0.95] tracking-tightest text-brown sm:text-[54px]">
              One kiosk. Twenty years later, still showing up.
            </h2>
          </RevealOnScroll>
          <RevealOnScroll delay={0.2}>
            <p className="mt-6 max-w-md font-sans text-lg leading-relaxed text-brown/70 md:text-xl">
              That&rsquo;s still who we are — a company built on showing up,
              one cup at a time, now across 69 outlets in four cities.
            </p>
          </RevealOnScroll>
          <RevealOnScroll delay={0.3}>
            <Link
              href="/about"
              className="mt-8 inline-block border border-brown/25 px-7 py-3 font-condensed text-sm uppercase tracking-wider text-brown/60 transition-colors hover:border-brown hover:text-brown"
            >
              Read Our Full Story →
            </Link>
          </RevealOnScroll>
        </div>

        <RevealOnScroll delay={0.2}>
          <div>
            <div className="relative w-full overflow-hidden bg-paper">
              <Image
                src="/images/first_outlet_accenturevirkholi.png"
                alt="MDP Coffee House's first outlet at Accenture Vikhroli, Mumbai — 2005"
                width={1456}
                height={1080}
                className="h-auto w-full object-contain"
                sizes="(max-width: 768px) 100vw, 50vw"
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
  );
}

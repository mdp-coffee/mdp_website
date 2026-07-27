"use client";

import Image from "next/image";
import Link from "next/link";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { useCountUp } from "@/hooks/useCountUp";
import { CornerAccents } from "@/components/CornerAccents";

const polaroids = [
  {
    id: "first-outlet",
    src: "/images/first_outlet_accenturevirkholi.png",
    alt: "MDP Coffee House's first outlet at Accenture Vikhroli, Mumbai — 2005",
    caption: "2005 · Accenture Vikhroli",
    rotate: "-rotate-6",
    className: "translate-y-2",
  },
  {
    id: "koramangala",
    src: "/pictures/koramangala.jpeg",
    alt: "MDP Coffee House outlet in Koramangala, Bengaluru",
    caption: "Koramangala",
    rotate: "rotate-3",
    className: "-translate-y-3",
  },
  {
    id: "tesco",
    src: "/pictures/TESCO_Bengaluru.jpeg",
    alt: "MDP Coffee House outlet at Tesco, Bengaluru",
    caption: "Tesco, Bengaluru",
    rotate: "rotate-6",
    className: "translate-y-4",
  },
  {
    id: "infosys-hyderabad",
    src: "/pictures/Infosys_Hederabad2.jpeg",
    alt: "MDP Coffee House outlet at Infosys, Hyderabad",
    caption: "Infosys, Hyderabad",
    rotate: "-rotate-3",
    className: "-translate-y-1",
  },
];

export function WhoWeAre() {
  const outlets = useCountUp({ end: 85, suffix: "+" });
  const cities = useCountUp({ end: 4 });
  const years = useCountUp({ end: 20, suffix: "+" });
  const cups = useCountUp({ end: 100000 });

  const statList = [
    { ...outlets, label: "Outlets" },
    { ...cities, label: "Cities" },
    { ...years, label: "Years" },
    { ...cups, label: "Cups / day" },
  ];

  return (
    <section
      id="who-we-are"
      className="relative snap-slide flex min-h-0 w-full items-center bg-paper px-6 py-16 md:px-20 md:py-24"
      aria-label="Who we are"
    >
      <CornerAccents />
      <div className="grid w-full grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-16">
        {/* Scattered polaroids */}
        <RevealOnScroll delay={0}>
          <div className="grid grid-cols-2 gap-x-4 gap-y-8 px-2 py-4 sm:gap-x-8">
            {polaroids.map((photo) => (
              <div
                key={photo.id}
                className={`group bg-white p-2 pb-6 shadow-md transition-transform duration-300 hover:z-10 hover:rotate-0 hover:scale-105 hover:shadow-xl sm:p-3 sm:pb-8 ${photo.rotate} ${photo.className}`}
              >
                <div className="relative aspect-square w-full overflow-hidden">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 40vw, 20vw"
                  />
                </div>
                <p className="mt-2 text-center font-condensed text-[11px] uppercase tracking-wide text-brown/60 sm:mt-3">
                  {photo.caption}
                </p>
              </div>
            ))}
          </div>
        </RevealOnScroll>

        {/* Text + animated stats */}
        <div>
          <RevealOnScroll delay={0.1}>
            <h2 className="font-condensed text-[30px] leading-[0.95] tracking-tightest text-brown sm:text-[54px]">
              Quietly powering corporate India{" "}
              <span className="text-gold">through the day.</span>
            </h2>
          </RevealOnScroll>
          <RevealOnScroll delay={0.2}>
            <p className="mt-6 max-w-lg font-sans text-lg leading-relaxed text-brown/70 md:text-xl">
              MDP isn&rsquo;t a vendor a company brings in &mdash; it&rsquo;s part
              of how the workday runs. We&rsquo;re the quiet constant in a
              fast-moving office: the same counter, the same face, the same cup,
              no matter what the day throws at you. Twenty years in, that&rsquo;s
              still the only thing we&rsquo;re trying to get right.
            </p>
          </RevealOnScroll>

          <div className="mt-6 border-t border-brown/15" aria-hidden="true" />

          <RevealOnScroll delay={0.3}>
            <div className="mt-6 flex flex-wrap gap-x-12 gap-y-4">
              {statList.map((stat) => (
                <div key={stat.label} ref={stat.ref}>
                  <p className="font-condensed text-3xl font-black tabular-nums text-rust sm:text-4xl">
                    {stat.display}
                  </p>
                  <p className="font-condensed text-xs uppercase tracking-wide text-brown/50">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.4}>
            <Link
              href="/about"
              className="mt-8 inline-block border border-brown/25 px-7 py-3 font-condensed text-sm uppercase tracking-wider text-brown/60 transition-colors hover:border-brown hover:text-brown"
            >
              Read Our Full Story →
            </Link>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}

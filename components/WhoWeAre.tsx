"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { galleryItems } from "@/content/gallery";
import { useCountUp } from "@/hooks/useCountUp";

const nonFormer = galleryItems.filter((item) => !item.caption?.includes("(Former)"));
const supportingPhotos = (["outlets", "coffee", "people"] as const)
  .map((cat) => nonFormer.find((item) => item.category === cat))
  .filter((item): item is (typeof nonFormer)[number] => Boolean(item));

const photos = [
  {
    id: "accenture",
    src: "/images/first_outlet_accenturevirkholi.png",
    alt: "MDP Coffee House's first outlet at Accenture Vikhroli, Mumbai — 2005",
    line1: "2005 · Our Very First Outlet",
    line2: "Accenture Vikhroli, Mumbai",
  },
  ...supportingPhotos.map((item) => ({
    id: item.id,
    src: item.src,
    alt: item.alt,
    line1: item.caption ?? item.alt,
    line2: null as string | null,
  })),
];

export function WhoWeAre() {
  const [active, setActive] = useState(0);

  const outlets = useCountUp({ end: 69 });
  const cities = useCountUp({ end: 4 });
  const years = useCountUp({ end: 20, suffix: "+" });
  const cups = useCountUp({ end: 100000 });

  const stats = [
    { ...outlets, label: "Outlets" },
    { ...cities, label: "Cities" },
    { ...years, label: "Years" },
    { ...cups, label: "Cups / day" },
  ];

  return (
    <section
      id="who-we-are"
      className="snap-slide flex min-h-0 w-full items-center bg-paper px-6 py-16 md:px-20 md:py-24"
      aria-label="Who we are"
    >
      <div className="grid w-full grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-16">
        {/* Interactive photo collage */}
        <RevealOnScroll delay={0}>
          <div className="relative aspect-[16/10] w-full overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={photos[active]?.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <Image
                  src={photos[active]!.src}
                  alt={photos[active]!.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-2 flex gap-2">
            {photos.map((photo, i) => (
              <button
                key={photo.id}
                onClick={() => setActive(i)}
                className={`relative aspect-square w-16 flex-shrink-0 overflow-hidden transition-opacity focus-visible:outline focus-visible:outline-2 focus-visible:outline-brown sm:w-20 ${
                  i === active ? "opacity-100 ring-2 ring-gold" : "opacity-60 hover:opacity-90"
                }`}
                aria-label={`Show photo: ${photo.alt}`}
                aria-pressed={i === active}
              >
                <Image
                  src={photo.src}
                  alt=""
                  fill
                  className={`object-cover transition-all duration-300 ${
                    i === active ? "grayscale-0" : "grayscale hover:grayscale-0"
                  }`}
                  sizes="80px"
                />
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={photos[active]?.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.25 }}
              className="mt-3"
            >
              <p className="font-condensed text-[11px] uppercase tracking-widest text-rust/70">
                {photos[active]!.line1}
              </p>
              {photos[active]!.line2 && (
                <p className="mt-0.5 font-condensed text-[11px] uppercase tracking-widest text-brown/40">
                  {photos[active]!.line2}
                </p>
              )}
            </motion.div>
          </AnimatePresence>
        </RevealOnScroll>

        {/* Text + animated stats */}
        <div>
          <RevealOnScroll delay={0.1}>
            <h2 className="font-condensed text-[30px] leading-[0.95] tracking-tightest text-brown sm:text-[54px]">
              Quietly powering corporate India through the day.
            </h2>
          </RevealOnScroll>
          <RevealOnScroll delay={0.2}>
            <p className="mt-6 max-w-lg font-sans text-lg leading-relaxed text-brown/70 md:text-xl">
              Long before &ldquo;employee experience&rdquo; became a phrase
              companies used, MDP Coffee House was already showing up &mdash;
              inside the campuses of some of India&rsquo;s largest employers,
              not as an outside vendor, but as part of how the workday
              actually runs. What started as one staffed counter in Mumbai
              has quietly grown into 69 outlets across four cities, pouring
              close to a lakh cups a day for teams who&rsquo;ve simply never
              had to think twice about their coffee.
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={0.3}>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-4">
              {stats.map((stat, i) => (
                <div
                  key={stat.label}
                  ref={stat.ref}
                  className={i > 0 ? "border-l border-brown/15 pl-6" : ""}
                >
                  <p className="font-condensed text-3xl font-black tabular-nums text-gold sm:text-4xl">
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

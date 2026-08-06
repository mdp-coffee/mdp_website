"use client";

import Image from "next/image";
import Link from "next/link";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { galleryItems } from "@/content/gallery";
import { CornerAccents } from "@/components/CornerAccents";

const featured = galleryItems
  .filter((item) => !item.caption?.includes("(Former)"))
  .filter((item) => item.id !== "9")
  .slice(0, 7);

const featuredSpans = [
  "md:col-span-2 md:row-span-2",
  "md:col-span-2 md:row-span-1",
  "md:col-span-1 md:row-span-1",
  "md:col-span-1 md:row-span-1",
  "md:col-span-1 md:row-span-1",
  "md:col-span-1 md:row-span-1",
  "md:col-span-2 md:row-span-1",
];

export function GalleryTeaser() {
  return (
    <section
      id="gallery-teaser"
      className="relative snap-slide flex min-h-0 w-full flex-col justify-center bg-[#411915] px-6 py-16 md:px-20 md:py-24"
      aria-label="A look inside MDP Coffee House"
    >
      <CornerAccents />
      <RevealOnScroll delay={0.1}>
        <h2 className="mt-6 font-condensed text-[26px] leading-[0.98] tracking-tight text-cream sm:text-[52px]">
          The MDP Standard.
        </h2>
      </RevealOnScroll>
      <RevealOnScroll delay={0.15}>
        <p className="mt-4 max-w-lg font-sans text-lg text-cream/60 md:text-xl">
          Twenty years of the same care, one cup at a time.
        </p>
      </RevealOnScroll>

      {/* Desktop: asymmetric masonry-style grid */}
      <div
        className="mt-10 hidden md:grid md:grid-cols-4 md:auto-rows-[180px] md:gap-3 lg:auto-rows-[210px]"
        aria-label="MDP Coffee House outlet photos"
      >
        {featured.map((item, index) => (
          <RevealOnScroll key={item.id} delay={0.2 + index * 0.05} className={featuredSpans[index]}>
            <div className="group relative flex h-full w-full items-center justify-center overflow-hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brown">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                quality={90}
              />
              {item.caption && (
                <div className="absolute bottom-0 left-0 right-0 border-t-2 border-gold bg-cream/90 px-3 py-2">
                  <p className="font-condensed text-[11px] uppercase tracking-wide text-brown">
                    {item.caption}
                  </p>
                </div>
              )}
            </div>
          </RevealOnScroll>
        ))}
      </div>

      {/* Mobile: stacked single column */}
      <div className="mt-10 space-y-4 md:hidden" aria-label="MDP Coffee House outlet photos">
        {featured.map((item, index) => (
          <RevealOnScroll key={item.id} delay={0.2 + index * 0.05}>
            <div className="group relative flex aspect-[4/3] w-full items-center justify-center overflow-hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brown">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="100vw"
                quality={90}
              />
              {item.caption && (
                <div className="absolute bottom-0 left-0 right-0 border-t-2 border-gold bg-cream/90 px-3 py-2">
                  <p className="font-condensed text-[11px] uppercase tracking-wide text-brown">
                    {item.caption}
                  </p>
                </div>
              )}
            </div>
          </RevealOnScroll>
        ))}
      </div>

      <RevealOnScroll delay={0.4}>
        <Link
          href="/gallery"
          className="mt-8 inline-block border border-cream/25 px-7 py-3 font-condensed text-sm uppercase tracking-wider text-cream/60 transition-colors hover:border-cream hover:text-cream"
        >
          See the Outlets →
        </Link>
      </RevealOnScroll>
    </section>
  );
}

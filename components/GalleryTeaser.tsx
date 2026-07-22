"use client";

import Image from "next/image";
import Link from "next/link";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { galleryItems } from "@/content/gallery";

const featured = galleryItems
  .filter((item) => !item.caption?.includes("(Former)"))
  .slice(0, 10);

export function GalleryTeaser() {
  return (
    <section
      id="gallery-teaser"
      className="snap-slide flex min-h-0 w-full flex-col justify-center bg-paper2 px-6 py-16 md:px-20 md:py-24"
      aria-label="A look inside MDP Coffee House"
    >
      <RevealOnScroll delay={0.1}>
        <h2 className="mt-6 font-condensed text-[30px] leading-[0.95] tracking-tightest text-brown sm:text-[54px]">
          Coffee, made by people.
        </h2>
      </RevealOnScroll>
      <RevealOnScroll delay={0.15}>
        <p className="mt-4 max-w-lg font-sans text-lg text-brown/60 md:text-xl">
          Twenty years of the same care, one cup at a time.
        </p>
      </RevealOnScroll>

      <div
        className="scrollbar-hide mt-10 flex gap-3 overflow-x-auto snap-x snap-mandatory pb-2"
        aria-label="MDP Coffee House outlet photos"
      >
        {featured.map((item, index) => (
          <RevealOnScroll key={item.id} delay={0.2 + index * 0.05}>
            <div
              className="group relative flex h-[220px] w-[300px] flex-shrink-0 snap-start items-center justify-center overflow-hidden bg-brown/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brown sm:h-[260px] sm:w-[360px] md:h-[320px] md:w-[440px]"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-contain transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 300px, (max-width: 1024px) 360px, 440px"
                quality={90}
              />
              {item.caption && (
                <div className="absolute bottom-0 left-0 right-0 border-t-2 border-gold bg-[#411915]/85 px-3 py-2">
                  <p className="font-condensed text-[11px] uppercase tracking-wide text-cream">
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
          className="mt-8 inline-block border border-brown/25 px-7 py-3 font-condensed text-sm uppercase tracking-wider text-brown/60 transition-colors hover:border-brown hover:text-brown"
        >
          See the Outlets →
        </Link>
      </RevealOnScroll>
    </section>
  );
}

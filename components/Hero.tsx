"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { NavBar } from "@/components/NavBar";
import { heroPhotos } from "@/lib/content";
import { trackEvent } from "@/components/Analytics";

const HOLD_MS = 10000;
const CROSSFADE_S = 3;

/**
 * The hero is NOT a carousel. Per the creative brief: the headline
 * never moves. Only the photography dissolves behind it, on an
 * extremely slow loop, to feel like documentary atmosphere rather
 * than a slideshow. No arrows, no dots, no indicators.
 */
export function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (heroPhotos.length === 0) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % heroPhotos.length);
    }, HOLD_MS);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="snap-slide relative flex h-[100svh] min-h-[640px] w-full items-center overflow-hidden bg-[#411915]"
      aria-label="MDP Coffee House — since 2005, we've shown up every morning"
    >
      {/* Photo crossfade layer */}
      <div className="absolute inset-0" aria-hidden="true">
        {heroPhotos.map((photo, i) => (
          <div
            key={photo.id}
            className="absolute inset-0 transition-opacity ease-in-out"
            style={{
              opacity: i === activeIndex ? 1 : 0,
              transitionDuration: `${CROSSFADE_S}s`,
            }}
          >
            {photo.src ? (
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover"
                sizes="100vw"
                priority={i === 0}
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-[#411915]">
                <span className="font-condensed text-xs uppercase tracking-widest text-white/20">
                  Photo {photo.id} — {photo.caption}
                </span>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Dark directional overlay — left side darkest for text legibility */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(65,25,21,0.88) 0%, rgba(65,25,21,0.65) 50%, rgba(65,25,21,0.75) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Bottom vignette — softens the cut into the next section */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-32"
        style={{ background: "linear-gradient(to bottom, transparent, #F9F0E1)" }}
        aria-hidden="true"
      />

      <NavBar />

      {/* Static foreground — never moves regardless of photo state */}
      <div className="relative z-10 px-6 pt-16 md:px-20">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-8 bg-white/25" aria-hidden="true" />
            <span className="font-condensed text-[11px] uppercase tracking-[0.3em] text-white/50">
              Since 2005 · India
            </span>
          </div>

          <h1 className="font-condensed text-[52px] leading-[0.88] tracking-tightest text-white sm:text-[72px] md:text-[96px] lg:text-[118px]">
            Since 2005,
            <br />
            we&rsquo;ve shown up
            <br />
            every morning.
          </h1>

          <p className="mt-8 max-w-xl font-serif text-xl text-white/70 sm:text-2xl">
            Before the first meeting.
            <br />
            Before the day is real.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#contact"
              onClick={() => trackEvent("cta_click", { location: "hero" })}
              className="bg-gold px-7 py-4 font-condensed text-sm font-bold uppercase tracking-wider text-brown transition-colors hover:bg-gold/90"
            >
              Partner With Us
            </a>
            <a
              href="#story"
              className="border border-white/30 px-7 py-4 font-condensed text-sm uppercase tracking-wider text-white/60 transition-colors hover:border-white hover:text-white"
            >
              Our Story
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30">
        <span className="font-condensed text-lg" aria-hidden="true">
          ↓
        </span>
        <span className="sr-only">Scroll to continue</span>
      </div>
    </section>
  );
}

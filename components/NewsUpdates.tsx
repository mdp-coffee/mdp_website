"use client";

import Image from "next/image";
import Link from "next/link";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { CornerAccents } from "@/components/CornerAccents";
import { newsItems } from "@/content/news-updates";

export function NewsUpdates() {
  if (newsItems.length === 0) return null;

  return (
    <section
      id="news-updates"
      className="relative snap-slide flex min-h-0 w-full flex-col justify-center bg-paper2 px-6 py-16 md:px-20 md:py-24"
      aria-label="Latest news and updates"
    >
      <CornerAccents />
      <RevealOnScroll delay={0}>
        <h2 className="font-condensed text-[26px] leading-[0.98] tracking-tight text-brown sm:text-[52px]">
          Latest News and Updates
        </h2>
      </RevealOnScroll>

      <div className="mt-10 flex flex-wrap gap-4">
        {newsItems.map((item, i) => (
          <RevealOnScroll
            key={item.title}
            delay={i * 0.06}
            className="w-full max-w-sm flex-shrink-0 overflow-hidden border border-brown/12 bg-paper transition-colors duration-200 hover:border-gold/40 sm:w-[320px]"
          >
            <Link href={`/news/${item.slug}`} className="group block h-full">
              {item.image && (
                <div className="relative h-[160px] w-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="(min-width: 640px) 320px, 100vw"
                  />
                  {item.tag && (
                    <span className="absolute left-2 top-2 z-10 bg-gold px-2 py-1 font-condensed text-[9px] font-bold uppercase tracking-wider text-brown shadow-[0_1px_4px_rgba(12,12,12,0.45)]">
                      {item.tag}
                    </span>
                  )}
                </div>
              )}
              <div className="p-6">
                <span className="inline-block bg-gold px-2 py-1 font-condensed text-[9px] font-bold uppercase tracking-wider text-brown shadow-[0_1px_4px_rgba(12,12,12,0.25)]">
                  {item.date}
                </span>
                <h3 className="mt-4 font-condensed text-lg font-bold tracking-tight text-brown">
                  {item.title}
                </h3>
                <p className="mt-2 font-sans text-sm leading-relaxed text-brown/60">
                  {item.description}
                </p>
                <span className="mt-4 inline-block font-condensed text-[11px] font-bold uppercase tracking-wider text-rust/70 transition-colors duration-200 group-hover:text-rust">
                  Share this →
                </span>
              </div>
            </Link>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}

"use client";

import { SectionLabel } from "@/components/SectionLabel";
import { ClientTicker } from "@/components/ClientTicker";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { testimonials } from "@/lib/content";

export function ClientProof() {
  return (
    <section
      id="clients"
      className="snap-slide flex min-h-0 py-24 md:py-28 w-full flex-col bg-parchment"
      aria-label="MDP Coffee House clients and case studies"
    >
      <div className="px-6 pt-24 md:px-20">
        <RevealOnScroll delay={0}>
          <SectionLabel>Trust</SectionLabel>
        </RevealOnScroll>
        <RevealOnScroll delay={0.1}>
          <h2 className="mt-6 font-condensed text-[32px] leading-[0.95] tracking-tightest text-brown sm:text-[58px]">
            They start their day with us.
          </h2>
        </RevealOnScroll>
      </div>

      <div className="my-10">
        <ClientTicker variant="light" />
      </div>

      <div
        className="scrollbar-hide flex flex-1 snap-x snap-mandatory gap-px overflow-x-auto md:grid md:grid-cols-3 md:gap-0 md:overflow-visible md:snap-none md:divide-x md:divide-brown/10"
        aria-label="Client success stories"
      >
        {testimonials.map((testimonial, index) => (
          <RevealOnScroll key={testimonial.name + testimonial.company} delay={0.1 * (index + 1)}>
            <article className="relative flex min-h-[280px] w-[72vw] flex-shrink-0 snap-start flex-col justify-center px-6 py-12 md:w-auto md:px-12">
              <p className="font-sans text-xl leading-relaxed text-brown/70">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="mt-8 border-t-2 border-gold pt-4">
                <p className="font-condensed text-sm font-bold uppercase tracking-wide text-brown">
                  {testimonial.name}
                  {testimonial.role ? `, ${testimonial.role}` : ""}
                </p>
                <p className="mt-1 font-condensed text-xs uppercase tracking-widest text-rust/60">
                  {testimonial.company}
                </p>
              </div>
            </article>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}

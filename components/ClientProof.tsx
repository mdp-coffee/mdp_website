"use client";

import { ClientTicker } from "@/components/ClientTicker";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { testimonials } from "@/lib/content";

export function ClientProof() {
  return (
    <section
      id="clients"
      className="relative snap-slide flex min-h-0 w-full flex-col bg-parchment"
      aria-label="MDP Coffee House clients and case studies"
    >
      <div className="px-6 pt-24 md:px-20">
        <RevealOnScroll delay={0.1}>
          <h2 className="mt-6 font-condensed text-[26px] leading-[0.98] tracking-tight text-brown sm:text-[52px]">
            The MDP Track Record.
          </h2>
        </RevealOnScroll>
      </div>

      <div className="my-10">
        <ClientTicker variant="light" />
      </div>

      <div
        className="scrollbar-hide flex flex-1 snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-4 md:grid md:grid-cols-3 md:gap-6 md:overflow-visible md:snap-none md:px-20"
        aria-label="Client success stories"
      >
        {testimonials.map((testimonial, index) => (
          <RevealOnScroll key={testimonial.name + testimonial.company} delay={0.1 * (index + 1)}>
            <article className="group relative flex min-h-[280px] w-[72vw] flex-shrink-0 snap-start flex-col justify-center overflow-hidden border border-brown/10 bg-paper px-6 py-10 transition-all duration-300 hover:-translate-y-1.5 hover:border-gold/40 hover:shadow-xl md:w-auto md:px-8">
              <div
                className="absolute inset-0 z-0 translate-y-full bg-[#411915] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0"
                aria-hidden="true"
              />
              <p className="relative z-10 font-sans text-xl leading-relaxed text-brown/70 transition-colors duration-300 group-hover:text-cream/85">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="relative z-10 mt-8 border-t-2 border-gold pt-4">
                <p className="font-condensed text-sm font-bold uppercase tracking-wide text-brown transition-colors duration-300 group-hover:text-cream">
                  {testimonial.name}
                  {testimonial.role ? `, ${testimonial.role}` : ""}
                </p>
                <p className="mt-1 font-condensed text-xs uppercase tracking-widest text-rust/60 transition-colors duration-300 group-hover:text-gold">
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

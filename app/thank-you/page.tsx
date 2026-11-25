import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { thankYouContent } from "@/content/thank-you";

export const metadata: Metadata = {
  title: "Thank You",
  alternates: { canonical: "/thank-you" },
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <div className="bg-paper">
      <NavBar />

      {/* Hero */}
      <section
        className="relative overflow-hidden flex min-h-[50vh] w-full flex-col items-center justify-center bg-[#411915] px-6 pt-16 text-center"
        aria-label="Thank you"
      >
        <div className="pointer-events-none absolute bottom-0 -right-6 md:-right-20 hidden h-3/4 w-1/2 opacity-[0.25] md:block" aria-hidden="true">
          <Image
            src="/images/MDP coffeee man Png1.png"
            alt=""
            fill
            className="object-contain object-bottom [filter:invert(1)_brightness(1.4)]"
          />
        </div>
        <div className="relative z-10">
          <p className="mb-4 font-condensed text-[11px] uppercase tracking-[0.3em] text-gold/50">
            {thankYouContent.eyebrow}
          </p>
          <h1 className="font-condensed text-[52px] leading-[0.9] tracking-tightest text-cream sm:text-[68px]">
            {thankYouContent.heading}
          </h1>
          <p className="mt-6 font-sans text-xl text-cream/50">
            {thankYouContent.body}
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24 text-center md:px-20">
        <Link
          href={thankYouContent.ctaHref}
          className="inline-block bg-brown px-6 py-3 font-condensed text-sm font-bold uppercase tracking-wider text-cream transition-colors hover:bg-rust"
        >
          {thankYouContent.ctaLabel}
        </Link>
      </section>

      <Footer />
    </div>
  );
}

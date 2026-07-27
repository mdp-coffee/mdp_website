import type { Metadata } from "next";
import Image from "next/image";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Team",
  description:
    "The people behind MDP Coffee House — twenty years of showing up, every morning.",
  alternates: { canonical: "/team" },
  openGraph: {
    title: "Team | MDP Coffee House",
    description:
      "The people behind MDP Coffee House — twenty years of showing up, every morning.",
    url: "/team",
  },
};

export default function TeamPage() {
  return (
    <div className="bg-paper">
      <NavBar />

      {/* Hero */}
      <section
        className="relative overflow-hidden flex min-h-[50vh] w-full flex-col items-center justify-center bg-[#411915] px-6 pt-16 text-center"
        aria-label="Team — coming soon"
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
            Our Team
          </p>
          <h1 className="font-condensed text-[52px] leading-[0.9] tracking-tightest text-cream sm:text-[68px]">
            Team — Coming Soon
          </h1>
          <p className="mt-6 font-sans text-xl text-cream/50">
            We&rsquo;re working on this. Check back soon.
          </p>
        </div>
      </section>

      {/* Brief content */}
      <section className="px-6 py-24 text-center md:px-20">
        <p className="mx-auto max-w-xl font-sans text-lg leading-relaxed text-brown/60">
          This page will introduce the people who make MDP Coffee House what it
          is — the leadership, the trainers, the Coffee Masters, and the 400+
          team members who show up every morning across India.
        </p>
      </section>

      <Footer />
    </div>
  );
}

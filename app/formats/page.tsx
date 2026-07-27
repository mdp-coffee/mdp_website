import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { formatPages } from "@/content/operating-formats-seo";

export const metadata: Metadata = {
  title: "Operating Formats",
  description:
    "Corporate Kiosks, QSR Cafes, Commercial Outlets, and Event Catering — the four ways MDP Coffee House brings South Indian filter coffee to your workplace.",
  alternates: { canonical: "/formats" },
  openGraph: {
    title: "Operating Formats | MDP Coffee House",
    description:
      "Corporate Kiosks, QSR Cafes, Commercial Outlets, and Event Catering — the four ways MDP Coffee House brings South Indian filter coffee to your workplace.",
    url: "/formats",
  },
};

export default function FormatsPage() {
  return (
    <>
      <NavBar />
      <div className="bg-paper pt-16">
        <section className="relative overflow-hidden flex min-h-[50vh] w-full flex-col justify-center bg-[#411915] px-6 py-20 md:px-20">
          <div className="pointer-events-none absolute bottom-0 -right-6 md:-right-20 hidden h-3/4 w-1/2 opacity-[0.25] md:block" aria-hidden="true">
            <Image
              src="/images/MDP coffeee man Png1.png"
              alt=""
              fill
              className="object-contain object-bottom [filter:invert(1)_brightness(1.4)]"
            />
          </div>
          <div className="relative z-10">
            <RevealOnScroll delay={0}>
              <h1 className="font-condensed text-[36px] font-black leading-[0.95] tracking-tightest text-cream sm:text-[56px]">
                Our Operating Formats
              </h1>
            </RevealOnScroll>
            <p className="mt-6 max-w-2xl font-sans text-lg leading-relaxed text-cream/60">
              Four ways MDP Coffee House shows up — same recipe, same standard, whichever format your space calls for.
            </p>
          </div>
        </section>

        <div className="divide-y divide-brown/10">
          {formatPages.map((format, index) => (
            <section
              key={format.slug}
              className="grid grid-cols-1 gap-10 px-6 py-16 md:grid-cols-2 md:items-center md:gap-16 md:px-20"
            >
              <RevealOnScroll delay={index * 0.1} className={index % 2 === 1 ? "md:order-2" : ""}>
                <div className="relative h-80 w-full overflow-hidden">
                  <Image
                    src={format.photo}
                    alt={`MDP Coffee House ${format.category} format`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </RevealOnScroll>
              <RevealOnScroll delay={index * 0.1} className={index % 2 === 1 ? "md:order-1" : ""}>
                <p className="font-condensed text-[11px] uppercase tracking-widest text-rust/70">
                  {format.category}
                </p>
                <h2 className="mt-3 font-condensed text-[28px] font-black leading-tight text-brown sm:text-[36px]">
                  {format.name}
                </h2>
                <p className="mt-4 max-w-md font-sans text-base leading-relaxed text-brown/70">
                  {format.intro}
                </p>
                <p className="mt-4 font-condensed text-[11px] uppercase tracking-wider text-gold/70">
                  {format.details}
                </p>
                <Link
                  href={`/services/${format.slug}`}
                  className="mt-6 inline-block bg-brown px-6 py-3 font-condensed text-xs font-bold uppercase tracking-widest text-cream transition-colors hover:bg-rust"
                >
                  Learn More →
                </Link>
              </RevealOnScroll>
            </section>
          ))}
        </div>

        <Footer />
      </div>
      <WhatsAppFloat />
    </>
  );
}

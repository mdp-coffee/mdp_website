import Image from "next/image";
import { SectionLabel } from "@/components/SectionLabel";

const stats = [
  { value: "20", label: "Years of\nthe same pour" },
  { value: "85+", label: "Offices across\nIndia" },
  { value: "400+", label: "People who\nknow the craft" },
];

export function TheGesture() {
  return (
    <section
      id="gesture"
      className="snap-slide relative flex min-h-[100svh] w-full items-center overflow-hidden bg-[#411915]"
      aria-label="The South Indian filter coffee pour — a twenty year craft"
    >
      {/* Coffee Man — right-weighted, full height */}
      <div className="absolute inset-y-0 right-0 w-full md:w-[72%]">
        <Image
          src="/images/MDP coffeee man Png1.png"
          alt="The MDP Coffee Man — twenty years of the same craft"
          fill
          className="object-contain object-right-bottom"
          priority
        />
      </div>

      {/* Left text overlay — flat colour, no gradient per brand rules */}
      <div className="absolute inset-y-0 left-0 w-full bg-[#411915]/90 md:w-[52%]" />

      <div className="relative z-10 px-6 py-20 md:px-20">
        <SectionLabel tone="dark">South India · Since 2005</SectionLabel>
        <h2 className="mt-6 font-condensed text-[52px] leading-[0.9] tracking-tightest text-cream sm:text-[64px]">
          The gesture
          <br />
          that hasn&rsquo;t
          <br />
          changed.
        </h2>
        <p className="mt-8 max-w-sm font-serif text-xl leading-relaxed text-cream/55">
          From a height, held steady, poured in a long arc. Twenty years. Same
          craft. Same cup.
        </p>

        <div className="mt-14 flex gap-10">
          {stats.map((stat) => (
            <div key={stat.value} className="border-l border-gold/20 pl-3">
              <p className="font-condensed text-3xl font-black tracking-tight text-gold">
                {stat.value}
              </p>
              <p className="mt-1 whitespace-pre-line font-condensed text-xs tracking-wide text-cream/40">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

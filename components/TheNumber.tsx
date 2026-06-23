import { siteConfig } from "@/content/site";

export function TheNumber() {
  const formatted = siteConfig.cupsPerDay.toLocaleString("en-IN");

  return (
    <section
      id="the-number"
      className="snap-slide flex min-h-[100svh] w-full flex-col items-center justify-center bg-paper px-6 text-center"
      aria-label={`${formatted} cups served every day`}
    >
      <p className="font-condensed text-[100px] font-black leading-[0.9] tracking-tightest text-brown sm:text-[160px] md:text-[220px]">
        {formatted}
      </p>
      <p className="mt-4 font-serif text-2xl italic tracking-wide text-rust/80 sm:text-3xl">
        cups. every single day.
      </p>
      <div className="mt-8 h-px w-20 bg-gold/35" aria-hidden="true" />
      <p className="mt-6 font-condensed text-xs uppercase tracking-[0.2em] text-brown/30">
        Before the first meeting, anywhere in India.
      </p>
    </section>
  );
}

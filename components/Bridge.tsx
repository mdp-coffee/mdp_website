import { RevealOnScroll } from "@/components/RevealOnScroll";

export function Bridge() {
  return (
    <section
      id="bridge"
      className="snap-slide flex min-h-[100svh] w-full flex-col items-center justify-center bg-paper px-6 text-center"
      aria-label="For twenty years, we've been part of someone's morning. We'd love to be part of yours."
    >
      <RevealOnScroll delay={0}>
        <h2 className="font-condensed text-[44px] leading-[0.92] tracking-tightest text-brown sm:text-[60px] md:text-[80px]">
          For twenty years,
          <br />
          we&rsquo;ve been part
          <br />
          of someone&rsquo;s
          <br />
          morning.
        </h2>
      </RevealOnScroll>
      <RevealOnScroll delay={0.3}>
        <div className="my-8 h-0.5 w-16 bg-rust/45" aria-hidden="true" />
      </RevealOnScroll>
      <RevealOnScroll delay={0.5}>
        <p className="max-w-2xl font-sans italic text-4xl text-rust/85">
          We&rsquo;d love to be part of yours.
        </p>
      </RevealOnScroll>
      <RevealOnScroll delay={0.7}>
        <a
          href="#contact"
          className="mt-12 text-brown/25 transition-colors hover:text-brown/50"
          aria-label="Scroll to contact form"
        >
          ↓
        </a>
      </RevealOnScroll>
    </section>
  );
}

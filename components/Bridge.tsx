export function Bridge() {
  return (
    <section
      id="bridge"
      className="snap-slide flex min-h-[100svh] w-full flex-col items-center justify-center bg-paper px-6 text-center"
      aria-label="We've spent twenty years showing up for theirs. Ready to show up for yours?"
    >
      <h2 className="font-condensed text-[44px] leading-[0.92] tracking-tightest text-brown sm:text-[64px] md:text-[80px]">
        We&rsquo;ve spent
        <br />
        twenty years
        <br />
        showing up
        <br />
        for theirs.
      </h2>
      <div className="my-8 h-0.5 w-16 bg-rust/45" aria-hidden="true" />
      <p className="max-w-2xl font-serif text-3xl text-rust/85 sm:text-4xl">
        Ready to show up for yours?
      </p>
      <a
        href="#contact"
        className="mt-12 text-brown/25 transition-colors hover:text-brown/50"
        aria-label="Scroll to contact form"
      >
        ↓
      </a>
    </section>
  );
}

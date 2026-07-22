import { benefits } from "@/lib/content";

export function Benefits() {
  return (
    <section
      id="benefits"
      className="snap-slide flex min-h-[100svh] w-full flex-col justify-center bg-paper px-6 py-20 md:px-20"
      aria-label="What you get as an MDP partner"
    >
      <ol className="mt-12 w-full max-w-4xl" aria-label="Partner benefits">
        {benefits.map((item, i) => (
          <li
            key={i}
            className="flex items-baseline gap-6 border-t border-brown/10 py-6 last:border-b last:border-brown/10"
          >
            <span
              className="w-8 shrink-0 font-condensed text-sm font-bold tabular-nums text-rust/50"
              aria-hidden="true"
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            <p className="font-condensed text-[28px] font-black leading-tight tracking-tightest text-brown sm:text-[36px] md:text-[42px]">
              {item}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}

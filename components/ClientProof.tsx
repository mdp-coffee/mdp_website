import Image from "next/image";
import { SectionLabel } from "@/components/SectionLabel";
import { PhotoPlaceholder } from "@/components/PhotoPlaceholder";
import { ClientTicker } from "@/components/ClientTicker";
import { clientStories } from "@/lib/content";

/**
 * Client Proof: logo ticker on top, client stories laid out
 * side-by-side in a single viewport (not stacked vertically) so the
 * whole section fits in one scroll-snap slide. Designed to scale to
 * a 2x2 grid once a 3rd/4th client story is approved.
 */
export function ClientProof() {
  return (
    <section
      id="clients"
      className="snap-slide flex min-h-[100svh] w-full flex-col bg-parchment"
      aria-label="MDP Coffee House clients and case studies"
    >
      <div className="px-6 pt-24 md:px-20">
        <SectionLabel>Trust</SectionLabel>
        <h2 className="mt-6 font-condensed text-[44px] leading-[0.92] tracking-tightest text-brown sm:text-[58px]">
          They start their day with us.
        </h2>
      </div>

      <div className="my-10">
        <ClientTicker />
      </div>

      <div className="grid flex-1 grid-cols-1 divide-y divide-brown/10 md:grid-cols-2 md:divide-x md:divide-y-0">
        {clientStories.map((story) => (
          <article
            key={story.client}
            className="relative flex min-h-[280px] items-center overflow-hidden px-6 py-12 md:px-12"
          >
            {story.ghostPhoto ? (
              <div className="absolute inset-0 opacity-10" aria-hidden="true">
                <Image
                  src={story.ghostPhoto}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            ) : (
              <PhotoPlaceholder
                label={`Ghost photo — ${story.client} story`}
                className="absolute inset-0 border-none bg-transparent opacity-25"
              />
            )}

            <div className="relative z-10 max-w-md">
              <h3 className="font-condensed text-[28px] leading-tight tracking-tight text-brown sm:text-[34px]">
                {story.headline}
              </h3>
              <p className="mt-4 font-serif text-lg leading-relaxed text-brown/62 sm:text-xl">
                {story.body}
              </p>
            </div>
          </article>
        ))}
      </div>

      {/* Case study slot — pending client approval per project notes */}
      <div className="border-t border-brown/10 px-6 py-3 md:px-20">
        <p className="font-condensed text-[11px] uppercase tracking-widest text-brown/25">
          + Additional case studies become a 3rd / 4th column here once client-approved
        </p>
      </div>
    </section>
  );
}

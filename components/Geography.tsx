import { SectionLabel } from "@/components/SectionLabel";
import { cities } from "@/lib/content";

export function Geography() {
  return (
    <section
      id="geography"
      className="snap-slide grainy grainy-dark relative flex min-h-[100svh] w-full items-center bg-[#1c0d04] px-6 py-24 md:px-20"
      aria-label="MDP locations across India"
    >
      <div className="grid w-full grid-cols-1 gap-12 lg:grid-cols-2">
        <div className="flex flex-col justify-center">
          <SectionLabel tone="dark">Presence</SectionLabel>
          <h2 className="mt-6 font-condensed text-[64px] font-black leading-[0.88] tracking-tightest text-cream sm:text-[84px]">
            85+ locations.
            <br />
            One recipe.
          </h2>
          <p className="mt-8 max-w-md font-serif text-xl italic text-cream/40">
            From Mysuru to everywhere India works.
          </p>
          <div className="mt-10 h-px w-44 bg-gold/20" aria-hidden="true" />
        </div>

        {/* Typographic map */}
        <div
          className="relative h-[480px] w-full md:h-[620px]"
          role="img"
          aria-label="Map of India showing MDP Coffee House locations across major cities, originating from Mysuru and expanding nationwide since 2005"
        >
          {cities.map((city) => (
            <div
              key={city.name}
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={{
                left: `${city.relX * 100}%`,
                top: `${city.relY * 100}%`,
              }}
            >
              <div className="flex items-center gap-2">
                <span
                  className={`block h-1.5 w-1.5 rounded-full ${
                    city.isKey ? "bg-gold" : "bg-gold/40"
                  }`}
                  aria-hidden="true"
                />
                <span
                  className={`font-condensed uppercase tracking-tight ${
                    city.isKey
                      ? "font-black text-cream/90"
                      : "font-normal text-cream/40"
                  }`}
                  style={{ fontSize: city.isKey ? "26px" : "13px" }}
                >
                  {city.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

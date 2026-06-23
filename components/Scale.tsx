import { SectionLabel } from "@/components/SectionLabel";
import { CompactForm } from "@/components/CompactForm";
import { siteConfig } from "@/content/site";

export function Scale() {
  const formattedCups = siteConfig.cupsPerDay.toLocaleString("en-IN");

  const stats = [
    { value: siteConfig.locationsCount, label: "locations." },
    { value: formattedCups, label: "cups. every day.", accent: true },
    { value: siteConfig.enterpriseClients, label: "enterprise clients." },
  ];

  return (
    <section
      id="scale"
      className="snap-slide grainy grainy-dark relative flex min-h-[100svh] w-full items-center bg-[#411915] px-6 py-20 md:px-20"
      aria-label="MDP Coffee House scale — 85+ locations, 1,00,000 cups daily, 45+ enterprise clients"
    >
      <div className="grid w-full grid-cols-1 gap-12 lg:grid-cols-2">
        <div className="flex flex-col justify-center">
          <SectionLabel tone="dark">Scale</SectionLabel>

          <div className="mt-8 flex flex-col gap-2">
            {stats.map((stat) => (
              <div key={stat.label}>
                <span
                  className={`font-condensed font-black leading-[0.95] tracking-tightest ${
                    stat.accent ? "text-gold" : "text-cream"
                  } ${
                    stat.value.length > 6
                      ? "text-[44px] sm:text-[58px]"
                      : "text-[56px] sm:text-[72px]"
                  }`}
                >
                  {stat.value}
                </span>
                <span className="ml-3 font-serif text-xl text-cream/40 sm:text-2xl">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          <p className="mt-6 font-condensed text-sm font-bold tracking-wide text-gold/60">
            Every single day.
          </p>

          <div className="mt-10 max-w-sm border-t border-gold/15 pt-5">
            <dl className="mt-3 flex flex-col gap-2">
            </dl>

          </div>
        </div>

        {/* Enquiry panel */}
        <div className="flex flex-col justify-center">
          <h3 className="font-condensed text-[32px] font-black leading-tight tracking-tightest text-cream sm:text-[40px]">
            Bring MDP to
            <br />
            your office.
          </h3>
          <p className="mb-8 mt-3 font-serif text-cream/50">
            Fill in your details and we&rsquo;ll call you back.
          </p>
          <CompactForm />
        </div>
      </div>
    </section>
  );
}

import { clients } from "@/lib/content";

/**
 * Infinite scrolling logo ticker. The client array is tripled so the
 * CSS animation (translateX -33.333%) creates a seamless loop with
 * no visible reset. Replace each name span with a real SVG logo:
 * <Image src={client.logoSrc} alt={client.name} width={100} height={28} />
 */
export function ClientTicker() {
  const tripled = [...clients, ...clients, ...clients];

  return (
    <div
      className="relative overflow-hidden border-y border-brown/10 bg-brown/[0.04]"
      aria-label={`Trusted by ${clients.length} companies including ${clients
        .slice(0, 5)
        .map((c) => c.name)
        .join(", ")}, and more`}
    >
      <div className="flex w-max animate-ticker gap-9 py-7" aria-hidden="true">
        {tripled.map((client, i) => (
          <div
            key={`${client.slug}-${i}`}
            className="flex h-14 w-44 flex-shrink-0 items-center justify-center border border-brown/10 bg-brown/[0.03] px-4"
          >
            {client.logoSrc ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={client.logoSrc}
                alt={client.name}
                className="max-h-7 max-w-full opacity-60"
              />
            ) : (
              <span className="font-condensed text-[13px] font-bold tracking-wide text-brown/50">
                {client.name}
              </span>
            )}
          </div>
        ))}
      </div>

      {/* Edge fades — flat colour, no gradient per brand rules */}
      <div
        className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-parchment opacity-90"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-parchment opacity-90"
        aria-hidden="true"
      />
    </div>
  );
}

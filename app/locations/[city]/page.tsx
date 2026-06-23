import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { PhotoPlaceholder } from "@/components/PhotoPlaceholder";
import { cityPages, getCityBySlug } from "@/content/cities-seo";

interface PageProps {
  params: Promise<{ city: string }>;
}

export function generateStaticParams() {
  return cityPages.map((city) => ({ city: city.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { city: slug } = await params;
  const city = getCityBySlug(slug);
  if (!city) return {};

  const title = `Corporate Coffee Service in ${city.name} | MDP Coffee House`;
  const description = `MDP Coffee House operates ${city.outletCount} corporate coffee kiosks in ${city.name}, serving companies like ${city.notableClients.slice(0, 2).join(" and ")}. Since 2005.`;

  return {
    title,
    description,
    alternates: { canonical: `/locations/${city.slug}` },
    openGraph: { title, description },
  };
}

export default async function CityPage({ params }: PageProps) {
  const { city: slug } = await params;
  const city = getCityBySlug(slug);
  if (!city) notFound();

  return (
    <>
      <NavBar />
      <main className="pt-16">
        <section className="bg-paper px-6 py-20 md:px-20">
          <p className="font-condensed text-[11px] uppercase tracking-[0.2em] text-rust/70">
            {city.region} · Since 2005
          </p>
          <h1 className="mt-4 font-condensed text-[48px] font-black leading-[0.92] tracking-tightest text-brown sm:text-[68px]">
            Corporate coffee service
            <br />
            in {city.name}.
          </h1>
          <p className="mt-6 max-w-2xl font-serif text-xl italic leading-relaxed text-brown/60">
            {city.intro}
          </p>

          <dl className="mt-10 flex gap-10">
            <div>
              <dt className="font-condensed text-[10px] uppercase tracking-wider text-brown/35">
                Outlets in {city.name}
              </dt>
              <dd className="mt-1 font-condensed text-3xl font-black text-gold">
                {city.outletCount}
              </dd>
            </div>
          </dl>

          <PhotoPlaceholder
            label={`${city.name} outlet photography`}
            sublabel="Local kiosk or QSR photo for this city"
            className="mt-12 h-80 w-full max-w-3xl"
          />

          <div className="mt-12">
            <h2 className="font-condensed text-2xl font-black tracking-tight text-brown">
              Trusted by teams at:
            </h2>
            <ul className="mt-4 flex flex-wrap gap-3">
              {city.notableClients.map((client) => (
                <li
                  key={client}
                  className="border border-brown/15 px-4 py-2 font-condensed text-sm text-brown/60"
                >
                  {client}
                </li>
              ))}
            </ul>
          </div>

          <Link
            href="/#contact"
            className="mt-12 inline-block bg-brown px-7 py-4 font-condensed text-sm font-bold uppercase tracking-wider text-cream hover:bg-brown-dark"
          >
            Bring MDP to your {city.name} office →
          </Link>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}

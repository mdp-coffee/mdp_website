import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { cityPages, getCityBySlug } from "@/content/cities-seo";
import { CityContent } from "@/components/locations/CityContent";

interface PageProps {
  params: Promise<{ city: string }>;
}

export function generateStaticParams() {
  return cityPages.map((city) => ({ city: city.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { city: slug } = await params;
  const city = getCityBySlug(slug);
  if (!city) return {};

  const title = `Corporate Coffee Service in ${city.name}`;
  const canonical = `/locations/${city.slug}`;

  return {
    title,
    description: city.description,
    alternates: { canonical },
    openGraph: {
      title: `${title} | MDP Coffee House`,
      description: city.description,
      url: canonical,
    },
  };
}

export default async function CityPage({ params }: PageProps) {
  const { city: slug } = await params;
  const city = getCityBySlug(slug);
  if (!city) notFound();
  return <CityContent city={city} />;
}

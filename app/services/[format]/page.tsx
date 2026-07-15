import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { formatPages } from "@/content/operating-formats-seo";
import { FormatContent } from "@/components/services/FormatContent";

interface PageProps {
  params: Promise<{ format: string }>;
}

export function generateStaticParams() {
  return formatPages.map((format) => ({ format: format.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { format: slug } = await params;
  const format = formatPages.find((f) => f.slug === slug);
  if (!format) return {};

  const title = format.seoTitle;
  const canonical = `/services/${format.slug}`;

  return {
    title,
    description: format.description,
    alternates: { canonical },
    openGraph: {
      title: `${title} | MDP Coffee House`,
      description: format.description,
      url: canonical,
    },
  };
}

export default async function FormatPage({ params }: PageProps) {
  const { format: slug } = await params;
  const format = formatPages.find((f) => f.slug === slug);
  if (!format) notFound();
  return <FormatContent format={format} />;
}

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { newsItems } from "@/content/news-updates";
import { NewsItemContent } from "@/components/news/NewsItemContent";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return newsItems.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const item = newsItems.find((n) => n.slug === slug);
  if (!item) return {};

  const canonical = `/news/${item.slug}`;
  const ogImage = item.image ?? "/images/og-image.jpg";

  return {
    title: item.title,
    description: item.description,
    alternates: { canonical },
    openGraph: {
      title: `${item.title} | MDP Coffee House`,
      description: item.description,
      url: canonical,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: item.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${item.title} | MDP Coffee House`,
      description: item.description,
      images: [ogImage],
    },
  };
}

export default async function NewsItemPage({ params }: PageProps) {
  const { slug } = await params;
  const item = newsItems.find((n) => n.slug === slug);
  if (!item) notFound();
  return <NewsItemContent item={item} />;
}

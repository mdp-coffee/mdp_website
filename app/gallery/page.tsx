import type { Metadata } from "next";
import { GalleryContent } from "@/components/gallery/GalleryContent";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Gallery — Twenty Years of Mornings",
  description:
    "Photos from MDP Coffee House outlets, operations, and people across India. Corporate coffee kiosks, QSR restaurants, and the team behind 1,00,000 cups every day.",
  alternates: { canonical: "/gallery" },
  openGraph: {
    title: "Gallery — Twenty Years of Mornings | MDP Coffee House",
    description:
      "Photos from MDP Coffee House outlets, operations, and people across India. Corporate coffee kiosks, QSR restaurants, and the team behind 1,00,000 cups every day.",
    url: "/gallery",
  },
};

export default function GalleryPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://mdpcoffeehouse.com" },
          { name: "Gallery" },
        ]}
      />
      <GalleryContent />
    </>
  );
}

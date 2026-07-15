import type { Metadata } from "next";
import { BlogContent } from "@/components/blog/BlogContent";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Insights — Corporate Coffee in India",
  description:
    "Perspectives on corporate coffee culture, workplace operations, and the South Indian filter coffee tradition. From the team that has served India's offices since 2005.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Insights — Corporate Coffee in India | MDP Coffee House",
    description:
      "Perspectives on corporate coffee culture, workplace operations, and the South Indian filter coffee tradition. From the team that has served India's offices since 2005.",
    url: "/blog",
  },
};

export default function BlogPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://mdpcoffeehouse.com" },
          { name: "Blog" },
        ]}
      />
      <BlogContent />
    </>
  );
}

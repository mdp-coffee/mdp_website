import type { Metadata } from "next";
import { FranchiseContent } from "@/components/franchise/FranchiseContent";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Franchise Opportunities",
  description:
    "Own an MDP Coffee House. Twenty years of operational discipline across 85+ locations — a franchise-owned, franchise-operated model built for the right partner.",
  alternates: { canonical: "/franchise" },
  openGraph: {
    title: "Franchise Opportunities | MDP Coffee House",
    description:
      "Own an MDP Coffee House. Twenty years of operational discipline across 85+ locations — a franchise-owned, franchise-operated model built for the right partner.",
    url: "/franchise",
  },
};

export default function FranchisePage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://mdpcoffeehouse.com" },
          { name: "Franchise" },
        ]}
      />
      <FranchiseContent />
    </>
  );
}

import type { Metadata } from "next";
import { CorporateContent } from "@/components/corporate/CorporateContent";
import { corporatePage } from "@/content/corporate-page";

export const metadata: Metadata = {
  title: corporatePage.seoTitle,
  description: corporatePage.metaDescription,
  alternates: { canonical: "/corporate" },
  openGraph: {
    title: `${corporatePage.seoTitle} | MDP Coffee House`,
    description: corporatePage.metaDescription,
    url: "/corporate",
  },
};

export default function CorporatePage() {
  return <CorporateContent />;
}

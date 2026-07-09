import type { Metadata } from "next";
import { ClientsContent } from "@/components/clients/ClientsContent";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Our Clients — 45+ Enterprises | MDP Coffee House",
  description:
    "MDP Coffee House serves 45+ enterprise clients across India including Amazon, Microsoft, Infosys, TCS, Deutsche Bank, Oracle, Cognizant, HCL and more. Corporate coffee service since 2005.",
  keywords: [
    "MDP Coffee House clients",
    "corporate coffee service India",
    "office coffee Amazon Bengaluru",
    "coffee service Microsoft India",
    "corporate coffee Infosys campus",
    "office coffee vendor enterprise India",
    "South Indian filter coffee corporate",
  ],
  openGraph: {
    title: "Trusted by India's Leading Enterprises | MDP Coffee House",
    description:
      "45+ enterprise clients. 85+ locations. One consistent cup since 2005.",
    images: [{ url: "/images/og-clients.jpg" }],
  },
  alternates: { canonical: "/clients" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "MDP Coffee House Clients",
  description: "Enterprise clients served by MDP Coffee House across India",
  url: "https://mdpcoffeehouse.com/clients",
};

export default function ClientsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://mdpcoffeehouse.com" },
          { name: "Clients" },
        ]}
      />
      <ClientsContent />
    </>
  );
}

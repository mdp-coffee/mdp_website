import type { Metadata } from "next";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { CareersContent } from "@/components/CareersContent";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Careers at MDP Coffee House — coffee maker, barista, and operations roles across our corporate coffee service locations in India. Join a team that shows up every day.",
  alternates: { canonical: "/careers" },
  openGraph: {
    title: "Careers | MDP Coffee House",
    description:
      "Careers at MDP Coffee House — coffee maker, barista, and operations roles across our corporate coffee service locations in India. Join a team that shows up every day.",
    url: "/careers",
  },
};

export default function CareersPage() {
  return (
    <>
      <NavBar />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://mdpcoffeehouse.com" },
          { name: "Careers" },
        ]}
      />
      <CareersContent />
      <Footer />
    </>
  );
}

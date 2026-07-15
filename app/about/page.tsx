import type { Metadata } from "next";
import { AboutContent } from "@/components/about/AboutContent";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "About | Corporate Coffee Service India",
  description:
    "Since 2005, MDP Coffee House has been the coffee companion of India's workday. From one kiosk in Mumbai to 85+ locations nationwide — our story, values, and the people behind every cup.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About | Corporate Coffee Service India | MDP Coffee House",
    description:
      "Since 2005, MDP Coffee House has been the coffee companion of India's workday. From one kiosk in Mumbai to 85+ locations nationwide — our story, values, and the people behind every cup.",
    url: "/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://mdpcoffeehouse.com" },
          { name: "About Us" },
        ]}
      />
      <AboutContent />
    </>
  );
}

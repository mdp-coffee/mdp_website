import type { Metadata } from "next";
import { AboutContent } from "@/components/about/AboutContent";

export const metadata: Metadata = {
  title: "About MDP Coffee House — Our Story Since 2005 | Corporate Coffee India",
  description:
    "Since 2005, MDP Coffee House has been the coffee companion of India's workday. From one kiosk in Mumbai to 85+ locations nationwide — our story, values, and the people behind every cup.",
};

export default function AboutPage() {
  return <AboutContent />;
}

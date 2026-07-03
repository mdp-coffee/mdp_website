import type { Metadata } from "next";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { CareersContent } from "@/components/CareersContent";

export const metadata: Metadata = {
  title: "Careers — MDP Coffee House",
  description:
    "Join the MDP Coffee House team. We're always open to hearing from people who want to be part of something that shows up every day.",
  alternates: { canonical: "/careers" },
};

export default function CareersPage() {
  return (
    <>
      <NavBar />
      <CareersContent />
      <Footer />
    </>
  );
}

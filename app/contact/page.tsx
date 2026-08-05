import type { Metadata } from "next";
import { ContactPageContent } from "@/components/ContactPageContent";

export const metadata: Metadata = {
  title: "Contact Us — MDP Coffee House",
  description:
    "Get in touch with MDP Coffee House — phone, email, address, and social links, plus a contact form and map locations for our commercial outlets.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Us | MDP Coffee House",
    description:
      "Get in touch with MDP Coffee House — phone, email, address, and social links, plus a contact form and map locations for our commercial outlets.",
    url: "/contact",
  },
};

export default function ContactPage() {
  return <ContactPageContent />;
}

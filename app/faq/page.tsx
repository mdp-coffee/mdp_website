import type { Metadata } from "next";
import { FaqContent } from "@/components/FaqContent";

export const metadata: Metadata = {
  title: "FAQ — Corporate Coffee Service India | MDP Coffee House",
  description:
    "Common questions about MDP Coffee House corporate coffee service — setup, pricing, locations, operations and more. Serving enterprise clients across India since 2005.",
  alternates: { canonical: "/faq" },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How does MDP Coffee House set up a corporate coffee kiosk?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MDP handles everything — site assessment, equipment setup, staff hiring and training, and daily operations. Once you confirm the partnership, our team manages the entire setup process. You focus on your office. We handle the coffee.",
      },
    },
    {
      "@type": "Question",
      name: "What is the minimum office size for an MDP coffee kiosk?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MDP Coffee House serves offices of all sizes — from compact kiosks for smaller teams to full QSR operations for large corporate campuses. Contact us with your office size and we will recommend the right format.",
      },
    },
    {
      "@type": "Question",
      name: "Which cities does MDP Coffee House operate in?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MDP Coffee House currently operates corporate coffee kiosks and QSR outlets across Bengaluru, Hyderabad, Mysore and Pune — with Bengaluru as our largest and most established market.",
      },
    },
    {
      "@type": "Question",
      name: "What types of coffee and beverages does MDP serve?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MDP Coffee House specialises in authentic South Indian filter coffee — the same standardised recipe served across all 85+ locations since 2005. Depending on the format, MDP also serves a range of hot and cold beverages including badam milk, ginger tea, green tea, lemon tea, and rose milk.",
      },
    },
    {
      "@type": "Question",
      name: "Does MDP Coffee House handle staffing and operations?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — fully. MDP manages all staffing, training, daily operations, quality audits, and restocking. All staff are trained at the MDP Training Academy in Bengaluru to the same standards. You do not manage any part of the coffee operation.",
      },
    },
    {
      "@type": "Question",
      name: "Which companies does MDP Coffee House currently serve?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MDP Coffee House serves 45+ enterprise clients across India including Amazon, Microsoft, Infosys, TCS, IBM, HCL, Cognizant, Oracle, Deutsche Bank, Samsung, Wells Fargo, Philips, Broadcom, Mu Sigma, Kyndryl and more.",
      },
    },
    {
      "@type": "Question",
      name: "How long has MDP Coffee House been operating?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MDP Coffee House was founded in 2005 with a single kiosk at Accenture's Vikhroli office in Mumbai. In twenty years, MDP has grown to 85+ locations in India, serving over 1,00,000 cups every day.",
      },
    },
    {
      "@type": "Question",
      name: "What operating formats does MDP Coffee House offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MDP Coffee House operates four formats: Corporate Kiosks (for offices and tech parks), QSR Cafes (for high-footfall commercial locations), Mobile Carts (for campuses and events), and 24/7 Tuck Shops (for offices that never close).",
      },
    },
    {
      "@type": "Question",
      name: "How do I get MDP Coffee House for my office?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Contact MDP Coffee House through the enquiry form at mdpcoffeehouse.com or WhatsApp us directly. Tell us about your office — size, location, number of employees — and we will get back to you within 24 hours.",
      },
    },
  ],
};

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <FaqContent />
    </>
  );
}

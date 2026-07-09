import type { Metadata, Viewport } from "next";

import "./globals.css";
import { OrganizationJsonLd, LocalBusinessJsonLd, TestimonialsJsonLd } from "@/components/JsonLd";
import { Analytics } from "@/components/Analytics";
import { siteConfig } from "@/content/site";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://mdpcoffeehouse.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Corporate Coffee Service India — MDP Coffee House",
    template: "%s | MDP Coffee House",
  },
  description:
    "Fully managed corporate coffee service across India since 2005 — 85+ locations, 32+ enterprise clients, authentic South Indian filter coffee.",
  keywords: [
    "corporate coffee service India",
    "office coffee kiosk",
    "South Indian filter coffee corporate",
    "corporate cafeteria management India",
    "MDP Coffee House",
  ],
  authors: [{ name: "MDP Coffee House" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "MDP Coffee House",
    title: "MDP Coffee House — Made with Care. Served with Care.",
    description:
      "Operational infrastructure for India's workplaces. 1,00,000 cups served daily across 85+ corporate locations.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "MDP Coffee House",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MDP Coffee House — Made with Care. Served with Care.",
    description:
      "Operational infrastructure for India's workplaces. 1,00,000 cups served daily.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  alternates: {
    canonical: siteUrl,
  },
};

export const viewport: Viewport = {
  themeColor: "#411915",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <OrganizationJsonLd />
        <LocalBusinessJsonLd />
        <TestimonialsJsonLd />
      </head>
      <body className="font-sans antialiased">
        {children}
<Analytics />
      </body>
    </html>
  );
}

export { siteConfig };

import type { Metadata, Viewport } from "next";
import { Bebas_Neue, Montserrat } from "next/font/google";
import "./globals.css";
import { OrganizationJsonLd, LocalBusinessJsonLd } from "@/components/JsonLd";
import { Analytics } from "@/components/Analytics";
import { siteConfig } from "@/content/site";

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-display",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://mdpcoffeehouse.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "MDP Coffee House — Since 2005, We've Shown Up Every Morning",
    template: "%s | MDP Coffee House",
  },
  description:
    "MDP Coffee House powers the morning for 85+ corporate locations across India — serving Amazon, Microsoft, Infosys, Deutsche Bank and 40+ enterprise clients with authentic South Indian filter coffee since 2005.",
  keywords: [
    "corporate coffee service India",
    "office coffee kiosk",
    "corporate cafeteria management",
    "South Indian filter coffee corporate",
    "MDP Coffee House",
  ],
  authors: [{ name: "MDP Coffee House" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "MDP Coffee House",
    title: "MDP Coffee House — Since 2005, We've Shown Up Every Morning",
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
    title: "MDP Coffee House — Since 2005, We've Shown Up Every Morning",
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
    <html
      lang="en"
      className={`${bebasNeue.variable} ${montserrat.variable}`}
    >
      <head>
        <OrganizationJsonLd />
        <LocalBusinessJsonLd />
      </head>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}

export { siteConfig };

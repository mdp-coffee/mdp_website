import { siteConfig } from "@/content/site";
import { outletAddresses } from "@/content/outlet-addresses";

export function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://mdpcoffeehouse.com",
    logo: `${process.env.NEXT_PUBLIC_SITE_URL ?? "https://mdpcoffeehouse.com"}/images/logo.png`,
    description: "MDP Coffee House is a fully managed corporate coffee service operating since 2005, serving 85+ locations and 32+ enterprise clients across India with authentic South Indian filter coffee.",
    foundingDate: String(siteConfig.founded),
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address,
      addressLocality: "Bengaluru",
      addressRegion: "Karnataka",
      addressCountry: "IN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: siteConfig.phone[0],
      contactType: "customer service",
      email: siteConfig.email,
    },
    sameAs: [
      "https://www.linkedin.com/company/mdpcoffeehouse",
      "https://www.instagram.com/mdpcoffeehouse",
      "https://www.facebook.com/mdpcoffeehouse",
      "https://www.youtube.com/@mdpcoffeehouse",
    ],
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function LocalBusinessJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "FoodEstablishment",
    name: siteConfig.name,
    servesCuisine: "South Indian",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address,
      addressLocality: "Bengaluru",
      addressRegion: "Karnataka",
      addressCountry: "IN",
    },
    telephone: siteConfig.phone[0],
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function TestimonialsJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "MDP Coffee House",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: "3",
    },
    review: [
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Prashanth Rajashekhar" },
        reviewRating: { "@type": "Rating", ratingValue: 5 },
        reviewBody:
          "Exceptional customer-centric service at the counter — more options for employees, and a very passionate management to work with.",
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Vinod" },
        reviewRating: { "@type": "Rating", ratingValue: 5 },
        reviewBody:
          "Kerala, being a tea-drinking state, MDP has made a successful breakthrough. With MDP team support, we ensure smooth operations across our entire campus.",
      },
      {
        "@type": "Review",
        author: { "@type": "Organization", name: "Bhartiya Mall of Bengaluru" },
        reviewRating: { "@type": "Rating", ratingValue: 5 },
        reviewBody:
          "Aromatic haven brewing delight in every cup, offering a culinary voyage into authentic South Indian vegetarian delicacies.",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

const regionByCity: Record<string, string> = {
  Bengaluru: "Karnataka",
  Mysore: "Karnataka",
  Hyderabad: "Telangana",
  Pune: "Maharashtra",
};

export function OutletLocationsJsonLd({ city }: { city: string }) {
  const locations = outletAddresses.filter((o) => o.city === city);
  if (locations.length === 0) return null;

  const data = {
    "@context": "https://schema.org",
    "@graph": locations.map((loc) => ({
      "@type": "FoodEstablishment",
      name: `MDP Coffee House at ${loc.client}, ${loc.city}`,
      servesCuisine: "South Indian",
      address: {
        "@type": "PostalAddress",
        streetAddress: loc.address,
        addressLocality: loc.city,
        addressRegion: regionByCity[loc.city] ?? "",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: loc.lat,
        longitude: loc.lng,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function HomePageJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Corporate Coffee Service India — MDP Coffee House",
    description:
      "Fully managed corporate coffee service across India since 2005 — 85+ locations, 32+ enterprise clients. Authentic South Indian filter coffee, staffed end-to-end.",
    url: "https://mdpcoffeehouse.com",
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

interface BreadcrumbItem {
  name: string;
  url?: string;
}

export function BreadcrumbJsonLd({ items }: { items: BreadcrumbItem[] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      ...(item.url ? { item: item.url } : {}),
    })),
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

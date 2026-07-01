import { siteConfig } from "@/content/site";

export function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://mdpcoffeehouse.com",
    logo: `${process.env.NEXT_PUBLIC_SITE_URL ?? "https://mdpcoffeehouse.com"}/images/logo.png`,
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
      reviewCount: "2",
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

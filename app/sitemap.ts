import type { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://mdpcoffeehouse.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const cities = ["bengaluru", "hyderabad", "mumbai", "pune", "chennai"];

  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...cities.map((city) => ({
      url: `${siteUrl}/locations/${city}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}

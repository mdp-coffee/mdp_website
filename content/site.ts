import type { SiteConfig } from "@/lib/types";

export const siteConfig: SiteConfig = {
  name: "MDP Coffee House",
  tagline: "Since 2005, we've shown up every morning.",
  email: "info@mdpcoffeehouse.com",
  phone: ["+91 88844 00701", "+91 88844 00709"],
  whatsapp: "918884400701",
  address: "#3, 23rd Main Road, Marenahalli, JP Nagar Phase 2, Bengaluru 560 078",
  founded: 2005,
  cupsPerDay: 100000,
  locationsCount: "85+",
  enterpriseClients: "45+",
};

export const whatsappLink = (message: string): string => {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${siteConfig.whatsapp}?text=${encoded}`;
};

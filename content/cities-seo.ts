export interface CityPageData {
  slug: string;
  name: string;
  region: string;
  intro: string;
  outletCount: string;
  notableClients: string[];
}

/**
 * Reusable template data for city-specific SEO landing pages.
 * Content is placeholder until confirmed per city — the page
 * template itself (app/locations/[city]/page.tsx) is fully built
 * so adding a new city is just adding an entry here.
 */
export const cityPages: CityPageData[] = [
  {
    slug: "bengaluru",
    name: "Bengaluru",
    region: "Karnataka",
    intro:
      "MDP Coffee House began its national journey from South India, and Bengaluru remains the operational heart of our corporate coffee service — powering tech parks, IT campuses, and commercial outlets across the city.",
    outletCount: "30+",
    notableClients: ["Infosys", "Wipro", "Mu Sigma", "International Tech Park"],
  },
  {
    slug: "hyderabad",
    name: "Hyderabad",
    region: "Telangana",
    intro:
      "From Gachibowli to HITEC City, MDP Coffee House serves the morning routine of Hyderabad's technology workforce with the same South Indian filter coffee recipe used since 2005.",
    outletCount: "10+",
    notableClients: ["Cognizant", "Deutsche Bank", "Genpact"],
  },
  {
    slug: "mumbai",
    name: "Mumbai",
    region: "Maharashtra",
    intro:
      "Mumbai is where it all began — the first MDP kiosk opened inside Accenture, Vikhroli in 2005. Today MDP continues to serve corporate offices across the city.",
    outletCount: "8+",
    notableClients: ["Accenture", "HSBC", "Standard Chartered"],
  },
  {
    slug: "pune",
    name: "Pune",
    region: "Maharashtra",
    intro:
      "MDP Coffee House operates across Pune's expanding IT corridor, bringing reliable, fully-managed corporate coffee service to offices throughout the city.",
    outletCount: "5+",
    notableClients: ["Cognizant", "Wipro"],
  },
  {
    slug: "chennai",
    name: "Chennai",
    region: "Tamil Nadu",
    intro:
      "South Indian filter coffee returns home in Chennai, where MDP Coffee House serves corporate campuses with the authentic recipe that built the brand.",
    outletCount: "5+",
    notableClients: ["TCS", "HCL"],
  },
];

export function getCityBySlug(slug: string): CityPageData | undefined {
  return cityPages.find((city) => city.slug === slug);
}

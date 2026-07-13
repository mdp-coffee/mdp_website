export interface HeroStat {
  value: string;
  label: string;
}

export interface ClientStory {
  label: string;
  headline: string;
  body: string;
  bottom: string;
}

export interface CityPresence {
  name: string;
  slug: string;
}

export const heroStats: HeroStat[] = [
  { value: "32+", label: "enterprise clients" },
  { value: "85+", label: "locations nationwide" },
  { value: "Since 2005", label: "not one missed morning" },
];

export const clientStories: ClientStory[] = [
  {
    label: "INFOSYS · KERALA · 2010",
    headline: "A tea-drinking market. MDP entered anyway.",
    body: "Kerala had no corporate filter coffee culture in 2010. Every procurement conversation started with scepticism. MDP showed up anyway, with the same recipe and the same care it had always carried. Today the Infosys Kerala campus is one of MDP's strongest operations.",
    bottom: "Now serving thousands of Infosys employees daily.",
  },
  {
    label: "ACCENTURE · MUMBAI · 2005",
    headline: "The first kiosk. The beginning of everything.",
    body: "Far from home. A new city, a new culture, a new language. The Accenture Vikhroli kiosk was not just MDP's first client — it was proof that the same South Indian filter coffee recipe that worked in Mysuru would work anywhere in India.",
    bottom: "The relationship that started it all.",
  },
];

export const industries: string[] = [
  "Information Technology",
  "Banking & Financial Services",
  "Consulting",
  "Manufacturing",
  "Pharmaceuticals",
  "E-commerce & Retail",
  "Telecom",
  "Media & Publishing",
  "Technology Parks",
  "Corporate Campuses",
  "Malls & Commercial Spaces",
  "Educational Institutions",
];

export const citiesPresence: CityPresence[] = [
  { name: "Bengaluru", slug: "bengaluru" },
  { name: "Hyderabad", slug: "hyderabad" },
  { name: "Mumbai", slug: "mumbai" },
  { name: "Pune", slug: "pune" },
  { name: "Chennai", slug: "chennai" },
  { name: "Mysore", slug: "mysore" },
];

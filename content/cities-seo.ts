export interface CityLocation {
  heading: string;
  items: string[];
}

export interface CityParaSection {
  heading: string;
  text: string;
}

export interface CityPageData {
  slug: string;
  name: string;
  region: string;
  intro: string;
  description: string;
  outletCount: string;
  notableClients: string[];
  h2: string;
  paragraphs: string[];
  locationList?: CityLocation;
  paraSections?: CityParaSection[];
}

/**
 * Reusable template data for city-specific SEO landing pages.
 * Adding a new city is just adding an entry here.
 */
export const cityPages: CityPageData[] = [
  {
    slug: "bengaluru",
    name: "Bengaluru",
    region: "Karnataka",
    intro:
      "MDP Coffee House began its national journey from South India, and Bengaluru remains the operational heart of our corporate coffee service — powering tech parks, IT campuses, and commercial outlets across the city.",
    description:
      "MDP Coffee House operates 30+ corporate coffee kiosks in Bengaluru — serving tech parks, IT campuses and enterprise offices in Whitefield, ITPL, Koramangala, HSR and more. Since 2005.",
    outletCount: "30+",
    notableClients: ["Infosys", "Wipro", "Mu Sigma", "International Tech Park"],
    h2: "Corporate coffee service across Bengaluru's tech corridor",
    paragraphs: [
      "MDP Coffee House has been serving Bengaluru's corporate landscape for over fifteen years. From the dense tech parks of Whitefield and ITPL to the commercial hubs of Koramangala, HSR Layout and JP Nagar — MDP operates fully managed coffee kiosks inside the offices and campuses where Bengaluru works.",
      "Bengaluru is home to MDP's headquarters and largest concentration of corporate clients. Companies including Infosys, Wipro, Mu Sigma, and teams at International Tech Park Bengaluru (ITPB) trust MDP Coffee House to deliver authentic South Indian filter coffee to their employees every morning — before the first meeting, before the workday begins.",
      "MDP's Bengaluru operations include corporate kiosks inside tech parks, QSR restaurants in commercial locations including Koramangala, HSR Layout, Jayanagar and more, and the MDP Training Academy where all staff across India are trained to the same standard.",
    ],
    locationList: {
      heading: "Where MDP operates in Bengaluru",
      items: [
        "International Tech Park Bengaluru (ITPB), Whitefield",
        "Koramangala — QSR outlet",
        "HSR Layout — QSR outlet",
        "Jayanagar — QSR outlet",
        "JP Nagar — QSR outlet and HQ",
        "Electronic City corridor",
        "Manyata Tech Park area",
      ],
    },
    paraSections: [
      {
        heading: "Enterprise clients in Bengaluru",
        text: "MDP Coffee House serves enterprise clients across Bengaluru including technology companies, consulting firms, financial institutions, and manufacturing facilities. For enquiries about bringing MDP to your Bengaluru office, contact us directly.",
      },
    ],
  },
  {
    slug: "hyderabad",
    name: "Hyderabad",
    region: "Telangana",
    intro:
      "From Gachibowli to HITEC City, MDP Coffee House serves the morning routine of Hyderabad's technology workforce with the same South Indian filter coffee recipe used since 2005.",
    description:
      "MDP Coffee House serves corporate offices in Hyderabad's HITEC City, Gachibowli and tech corridors. South Indian filter coffee for enterprise campuses across the city.",
    outletCount: "10+",
    notableClients: ["Cognizant", "Deutsche Bank", "Genpact"],
    h2: "Corporate coffee service in Hyderabad's tech corridor",
    paragraphs: [
      "Hyderabad's HITEC City and Gachibowli corridors are home to some of India's largest technology and financial services operations. MDP Coffee House serves corporate offices across this corridor — bringing authentic South Indian filter coffee to the employees of technology companies, consulting firms, and banks that call Hyderabad home.",
      "MDP serves enterprise clients in Hyderabad including Cognizant, Deutsche Bank, Genpact and others operating in the city's expanding technology and financial services sector.",
    ],
  },
  {
    slug: "mumbai",
    name: "Mumbai",
    region: "Maharashtra",
    intro:
      "Mumbai is where it all began — the first MDP kiosk opened inside Accenture, Vikhroli in 2005. Today MDP continues to serve corporate offices across the city.",
    description:
      "MDP Coffee House started in Mumbai in 2005 — the first kiosk at Accenture Vikhroli. Now serving corporate offices across the city with authentic South Indian filter coffee.",
    outletCount: "8+",
    notableClients: ["Accenture", "HSBC", "Standard Chartered"],
    h2: "Corporate coffee service in Mumbai — where it all began",
    paragraphs: [
      "Mumbai holds a special place in MDP Coffee House history. In 2005, MDP opened its very first kiosk inside the Accenture office in Vikhroli, Mumbai — far from its South Indian roots, in an unfamiliar city with a different culture and language. That first kiosk became the foundation of everything MDP built over the next twenty years.",
      "Today MDP serves corporate offices across Mumbai with the same South Indian filter coffee recipe, the same operational standards, and the same care that has defined the brand since day one.",
    ],
    paraSections: [
      {
        heading: "Notable Mumbai operations",
        text: "MDP Coffee House's first client was Accenture, Vikhroli — a relationship that began in 2005 and helped establish MDP as a trusted name in corporate coffee service across India. MDP also serves HSBC, Standard Chartered and other financial institutions with offices in Mumbai's commercial districts.",
      },
    ],
  },
  {
    slug: "pune",
    name: "Pune",
    region: "Maharashtra",
    intro:
      "MDP Coffee House operates across Pune's expanding IT corridor, bringing reliable, fully-managed corporate coffee service to offices throughout the city.",
    description:
      "MDP Coffee House operates across Pune's IT corridor serving corporate offices and tech campuses with South Indian filter coffee. Fully managed kiosks since 2005.",
    outletCount: "5+",
    notableClients: ["Cognizant", "Wipro"],
    h2: "Corporate coffee service across Pune's IT corridor",
    paragraphs: [
      "Pune has become one of India's fastest-growing technology hubs, with a dense concentration of IT companies, consulting firms and global capability centres. MDP Coffee House serves corporate offices across Pune's expanding tech corridor with fully managed South Indian filter coffee kiosks — the same operational model that has served enterprise clients across India since 2005.",
    ],
  },
  {
    slug: "chennai",
    name: "Chennai",
    region: "Tamil Nadu",
    intro:
      "South Indian filter coffee returns home in Chennai, where MDP Coffee House serves corporate campuses with the authentic recipe that built the brand.",
    description:
      "MDP Coffee House brings authentic South Indian filter coffee to corporate offices and tech campuses in Chennai. Enterprise coffee service since 2005.",
    outletCount: "5+",
    notableClients: ["TCS", "HCL"],
    h2: "South Indian filter coffee comes home — corporate service in Chennai",
    paragraphs: [
      "Chennai is where South Indian filter coffee culture runs deepest — and MDP Coffee House brings that same tradition to the corporate campuses and tech parks where Chennai's workforce gathers every morning. From OMR's technology corridor to the city's established commercial districts, MDP serves enterprise offices with the authentic recipe and operational standards built over twenty years.",
      "MDP serves enterprise clients in Chennai including TCS, HCL and technology companies operating across the city's IT corridors.",
    ],
  },
];

export function getCityBySlug(slug: string): CityPageData | undefined {
  return cityPages.find((city) => city.slug === slug);
}

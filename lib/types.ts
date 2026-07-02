export interface CityPin {
  name: string;
  relX: number; // 0–1 position on map
  relY: number;
  isKey: boolean;
}

export interface TimelineEvent {
  year: string;
  headline: string;
  detail: string;
}

export interface MiniTimelineEvent {
  year: string;
  label: string;
}

export interface ClientLogo {
  name: string;
  slug: string;
  logoSrc: string | null; // null until real SVG provided
  city?: string;
  category?: string;
  outlets?: number;
  active?: boolean;
}

export interface ClientStory {
  client: string;
  location: string;
  year: string;
  headline: string;
  body: string;
  ghostPhoto: string | null;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
}

export interface OperatingFormat {
  num: string;
  category: string;
  name: string;
  description: string;
  details: string;
  example: string;
  photo: string | null;
  theme: "light" | "light2" | "parchment" | "dark";
}

export interface HeroPhoto {
  id: string;
  src: string | null;
  alt: string;
  caption: string;
}

export interface OperatingSystemCard {
  number: string;
  iconKey: string;
  headline: string;
  body: string;
  proof: string;
}

export interface StoryPrinciple {
  title: string;
  body: string;
}

export interface StoryContent {
  narrative: string[];
  mission: string;
  vision: string;
  principles: StoryPrinciple[];
}

export interface SiteConfig {
  name: string;
  tagline: string;
  email: string;
  phone: string[];
  whatsapp: string;
  address: string;
  founded: number;
  cupsPerDay: number;
  locationsCount: string;
  enterpriseClients: string;
}

export interface Outlet {
  client: string;
  clientSlug: string;
  branch: string | null;
  city: string;
}

export interface FormatPageData {
  slug: string;
  category: string;
  name: string;
  intro: string;
  description: string;
  h2: string;
  paragraphs: string[];
  details: string;
  photo: string;
}

export interface OutletAddress {
  client: string;
  clientSlug: string;
  city: string;
  address: string;
  lat: number;
  lng: number;
}

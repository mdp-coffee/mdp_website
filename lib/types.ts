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

export interface FormatSolution {
  title: string;
  description: string;
}

export interface ExpansionCta {
  headline: string;
  body: string;
  ctaLabel: string;
  ctaHref: string;
}

export interface FormatPageData {
  slug: string;
  seoTitle: string;
  category: string;
  name: string;
  intro: string;
  description: string;
  h2: string;
  paragraphs: string[];
  details: string;
  photo: string;
  solutions?: FormatSolution[];
  closingStatement?: string;
  expansionCta?: ExpansionCta;
}

export interface MapPin {
  name: string;
  address: string;
  lat: number;
  lng: number;
}

export interface OutletAddress {
  client: string;
  clientSlug: string;
  city: string;
  address: string;
  lat: number;
  lng: number;
}

export interface CorporateStat {
  value: string;
  label: string;
}

export interface HowWeWorkCard {
  title: string;
  body: string;
}

export interface CorporateTier {
  number: string;
  name: string; // e.g. "Kiosk" — keep as-is, do not rename
  tagline: string; // e.g. "Full-Service Coffee Counter"
  description: string;
  href?: string;
}

export interface TrustPoint {
  title: string;
  body: string;
}

export interface DeploymentStep {
  step: string;
  title: string;
  body: string;
}

export interface CorporateFaqItem {
  question: string;
  answer: string;
}

export interface WhatWeDoTab {
  num: string;
  category: string;
  imageGalleryId: string;
  headline: string;
  description: string;
  details: string;
  proofLine: string;
  ctaLabel: string;
  ctaHref: string;
}

export interface RetailProduct {
  title: string;
  description: string;
  image: string;
  isNew?: boolean;
}

export interface WhatWeDoSectionData {
  h2: string;
  subhead: string;
  tabs: WhatWeDoTab[];
  productsKicker: string;
  productsH2: string;
  products: RetailProduct[];
}

export interface NewsItem {
  slug: string;
  title: string;
  date: string;
  description: string;
  tag?: string;
  image?: string;
}

export interface CorporatePageData {
  seoTitle: string;
  metaDescription: string;
  heroH1: string;
  heroSubhead: string;
  trustedByCaption: string;
  introH2: string;
  introKicker: string;
  introParagraphs: string[];
  introStats: CorporateStat[];
  howWeWorkCards: HowWeWorkCard[];
  tiersH2: string;
  tiers: CorporateTier[];
  menuH2: string;
  menuSubhead: string;
  flexibleH2: string;
  flexibleBody: string;
  flexibleCards: HowWeWorkCard[];
  deploymentsH2: string;
  deploymentsSubhead: string;
  standardKicker: string;
  standardH2: string;
  standardBody: string;
  trustH2: string;
  trustPoints: TrustPoint[];
  deploymentH2: string;
  deploymentSteps: DeploymentStep[];
  faqH2: string;
  faqItems: CorporateFaqItem[];
  ctaHeading: string;
  ctaBody: string;
  ctaPrimaryLabel: string;
  ctaSecondaryLabel: string;
  ctaHref: string;
}

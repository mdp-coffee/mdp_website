import type { WhatWeDoSectionData } from "@/lib/types";

export const whatWeDoSection: WhatWeDoSectionData = {
  h2: "What We Do",
  subhead: "From corporate campuses to the malls and streets you walk through every day.",
  tabs: [
    {
      num: "01",
      category: "COFFEE HOUSE",
      imageGalleryId: "5",
      headline: "Right Around the Corner.",
      description:
        "Traditional filter coffee and quick bites at the malls and high streets you already pass through — no fuss, just a good cup nearby.",
      details: "MALLS · FOOD COURTS · HIGH STREETS · QUICK SERVICE",
      proofLine: "Across malls and high streets in Bengaluru and Mysuru.",
      ctaLabel: "Find Your Nearest MDP",
      ctaHref: "/clients",
    },
    {
      num: "02",
      category: "CORPORATE SOLUTIONS",
      imageGalleryId: "1",
      headline: "Inside Corporate Campuses.",
      description:
        "Fully staffed coffee and food service programs for corporate campuses across India — standardised and built for enterprise scale.",
      details: "KIOSK · TUCK SHOP · BEVERAGE SOLUTIONS",
      proofLine: "Trusted by 32 enterprise clients across India's technology, banking, and consulting sectors.",
      ctaLabel: "Learn More About Corporate Solutions",
      ctaHref: "/corporate",
    },
  ],
  productsKicker: "Our Products",
  productsH2: "Take MDP Home",
  products: [
    { title: "Curry Leaves Chikki", description: "A savoury-sweet chikki with the distinct flavour of curry leaves.", image: "/merchandise/chikki-curry-leaves.jpg", isNew: true },
    { title: "Moringa Chikki", description: "A nutritious chikki made with moringa.", image: "/merchandise/chikki-moringa.jpg", isNew: true },
    { title: "Spirulina Chikki", description: "A wholesome chikki with spirulina baked in.", image: "/merchandise/chikki-spirulina.jpg", isNew: true },
    { title: "Banana Cake", description: "Moist, home-style banana cake, baked fresh.", image: "/merchandise/banana-cake.png", isNew: true },
    { title: "Pineapple Cake", description: "A tropical twist on MDP's classic bakes.", image: "/merchandise/pineapple-cake.jpg", isNew: true },
    { title: "Coffee Powder", description: "Our signature filter coffee blend, ready to brew at home.", image: "/merchandise/coffee-powder.jpg" },
    { title: "Tea Powder", description: "The same tea blend served at MDP counters, now for your kitchen.", image: "/merchandise/tea-powder.jpg" },
    { title: "Maddur Vada", description: "The classic South Indian tea-time snack, MDP's way.", image: "/merchandise/maddur-vada.jpg" },
  ],
};

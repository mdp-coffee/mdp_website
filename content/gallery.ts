export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  category: "outlets" | "coffee" | "people" | "clients";
}

export const galleryItems: GalleryItem[] = [
  {
    id: "1",
    src: "/Gallery_Final/AMEX_Bagmane_Bengaluru.jpeg",
    alt: "MDP Coffee House outlet at American Express, Bagmane, Bengaluru",
    category: "clients",
  },
  {
    id: "2",
    src: "/Gallery_Final/awards.jpeg",
    alt: "MDP Coffee House awards and recognition",
    category: "outlets",
  },
  {
    id: "3",
    src: "/Gallery_Final/Cognizant_Bengaluru.jpeg",
    alt: "MDP Coffee House outlet at Cognizant, Bengaluru",
    category: "clients",
  },
  {
    id: "4",
    src: "/Gallery_Final/Event.jpeg",
    alt: "MDP Coffee House at a corporate event (1)",
    category: "people",
  },
  {
    id: "5",
    src: "/Gallery_Final/event3.jpeg",
    alt: "MDP Coffee House at a corporate event (2)",
    category: "people",
  },
  {
    id: "6",
    src: "/Gallery_Final/event4.jpeg",
    alt: "MDP Coffee House at a corporate event (3)",
    category: "people",
  },
  {
    id: "7",
    src: "/Gallery_Final/event5.jpeg",
    alt: "MDP Coffee House at a corporate event (4)",
    category: "people",
  },
  {
    id: "8",
    src: "/Gallery_Final/event6.jpeg",
    alt: "MDP Coffee House at a corporate event (5)",
    category: "people",
  },
  {
    id: "9",
    src: "/Gallery_Final/event7.jpeg",
    alt: "MDP Coffee House at a corporate event (6)",
    category: "people",
  },
  {
    id: "10",
    src: "/Gallery_Final/Infosys_Bengaluru (2).jpeg",
    alt: "MDP Coffee House outlet at Infosys, Bengaluru",
    category: "clients",
  },
  {
    id: "11",
    src: "/Gallery_Final/Infosys_Hyderabad1.jpeg",
    alt: "MDP Coffee House outlet at Infosys, Hyderabad",
    category: "clients",
  },
  {
    id: "12",
    src: "/Gallery_Final/wipro_begnaluru1.jpeg",
    alt: "MDP Coffee House's former outlet at Wipro, Bengaluru",
    category: "clients",
  },
];

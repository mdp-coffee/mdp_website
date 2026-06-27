export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  category: "outlets" | "coffee" | "people" | "clients";
}

export const galleryItems: GalleryItem[] = [
  {
    id: "1",
    src: "/images/ante-samarzija-lsmu0rUhUOk-unsplash.jpg",
    alt: "MDP Coffee House outlet interior",
    category: "outlets",
  },
  {
    id: "2",
    src: "/images/clifford-VobvKmG-StA-unsplash.jpg",
    alt: "MDP Coffee House team member at work",
    category: "people",
  },
  {
    id: "3",
    src: "/images/kayleigh-harrington-yhn4okt6ci0-unsplash.jpg",
    alt: "MDP Coffee House counter setup",
    category: "outlets",
  },
  {
    id: "4",
    src: "/images/nathan-dumlao-nBJHO6wmRWw-unsplash.jpg",
    alt: "South Indian filter coffee being prepared",
    category: "coffee",
  },
  {
    id: "5",
    src: "/images/nathan-dumlao-V6WUpAOmioc-unsplash.jpg",
    alt: "Coffee brewing — the MDP ritual",
    category: "coffee",
  },
  {
    id: "6",
    src: "/images/nathan-dumlao-XOhI_kW_TaM-unsplash.jpg",
    alt: "Filter coffee, up close",
    category: "coffee",
  },
  {
    id: "7",
    src: "/images/nathan-dumlao-Y3AqmbmtLQI-unsplash.jpg",
    alt: "Coffee being poured in the MDP style",
    category: "coffee",
  },
  {
    id: "8",
    src: "/images/nathan-dumlao-zUNs99PGDg0-unsplash.jpg",
    alt: "The morning coffee ritual",
    category: "coffee",
  },
  {
    id: "9",
    src: "/images/petr-sevcovic-qE1jxYXiwOA-unsplash.jpg",
    alt: "Corporate campus MDP Coffee House outlet",
    category: "clients",
  },
  {
    id: "10",
    src: "/images/rizky-subagja-1k7TnX5GAww-unsplash.jpg",
    alt: "Coffee prepared with care",
    category: "coffee",
  },
  {
    id: "11",
    src: "/images/MDP coffeee man Png1.png",
    alt: "The Coffee Master — present every morning",
    category: "people",
  },
];

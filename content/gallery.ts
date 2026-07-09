export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  caption?: string;
  category: "outlets" | "coffee" | "people" | "clients";
}

export const galleryItems: GalleryItem[] = [
  { id: "1", src: "/pictures/amazon_Bengaluru.jpeg", alt: "MDP Coffee House outlet at Amazon, Bengaluru", caption: "Amazon, Bengaluru", category: "clients" },
  { id: "2", src: "/pictures/AMEX_Bengaluru.jpeg", alt: "MDP Coffee House outlet at American Express, Bengaluru", caption: "American Express, Bengaluru", category: "clients" },
  { id: "3", src: "/pictures/CoffeeCart_alt.jpeg", alt: "MDP Coffee House mobile coffee cart setup", caption: "Mobile Coffee Cart", category: "coffee" },
  { id: "4", src: "/pictures/Deutsche_Bengaluru.jpeg", alt: "MDP Coffee House outlet at Deutsche Bank, Bengaluru", caption: "Deutsche Bank, Bengaluru", category: "clients" },
  { id: "5", src: "/pictures/GopalanMallArcade_Bengaluru.jpeg", alt: "MDP Coffee House outlet at Gopalan Mall Arcade, Bengaluru", caption: "Gopalan Mall Arcade, Bengaluru", category: "outlets" },
  { id: "6", src: "/pictures/HCL_Bengaluru.jpeg", alt: "MDP Coffee House's former outlet at HCL, Bengaluru", caption: "HCL, Bengaluru (Former)", category: "clients" },
  { id: "7", src: "/pictures/infosys.jpeg", alt: "MDP Coffee House outlet at Infosys", caption: "Infosys", category: "clients" },
  { id: "8", src: "/pictures/Infosys_Hederabad2.jpeg", alt: "MDP Coffee House outlet at Infosys, Hyderabad", caption: "Infosys, Hyderabad", category: "clients" },
  { id: "9", src: "/pictures/Infosys_Hederabad_Poucharam.jpeg", alt: "MDP Coffee House outlet at Infosys, Pocharam, Hyderabad", caption: "Infosys, Pocharam, Hyderabad", category: "clients" },
  { id: "10", src: "/pictures/Infosys_Pune.jpeg", alt: "MDP Coffee House outlet at Infosys, Pune", caption: "Infosys, Pune", category: "clients" },
  { id: "11", src: "/pictures/Infosys_Trivandrum.jpeg", alt: "MDP Coffee House's former outlet at Infosys, Trivandrum", caption: "Infosys, Trivandrum (Former)", category: "clients" },
  { id: "12", src: "/pictures/Intel_Bengaluru.jpeg", alt: "MDP Coffee House's former outlet at Intel, Bengaluru", caption: "Intel, Bengaluru (Former)", category: "clients" },
  { id: "13", src: "/pictures/Intel_Bengaluru1.jpeg", alt: "MDP Coffee House's former outlet at Intel, Bengaluru", caption: "Intel, Bengaluru (Former)", category: "clients" },
  { id: "14", src: "/pictures/koramangala.jpeg", alt: "MDP Coffee House outlet in Koramangala, Bengaluru", caption: "Koramangala, Bengaluru", category: "outlets" },
  { id: "15", src: "/pictures/MallofMysore_Mysore.jpeg", alt: "MDP Coffee House outlet at Mall of Mysore", caption: "Mall of Mysore", category: "clients" },
  { id: "16", src: "/pictures/MallofMysore_Mysore1.jpeg", alt: "MDP Coffee House outlet at Mall of Mysore", caption: "Mall of Mysore", category: "clients" },
  { id: "17", src: "/pictures/northerntrust_Bengaluru.jpeg", alt: "MDP Coffee House's former outlet at Northern Trust, Bengaluru", caption: "Northern Trust, Bengaluru (Former)", category: "clients" },
  { id: "18", src: "/pictures/northern_trust_bengaluru.jpeg", alt: "MDP Coffee House's former outlet at Northern Trust, Bengaluru, with staff serving a queue", caption: "Northern Trust, Bengaluru (Former)", category: "clients" },
  { id: "19", src: "/pictures/Oracle_Bengaluru.jpeg", alt: "MDP Coffee House outlet at Oracle, Bengaluru", caption: "Oracle, Bengaluru", category: "clients" },
  { id: "20", src: "/pictures/philips_Bengaluru.jpeg", alt: "MDP Coffee House outlet at Philips, Bengaluru", caption: "Philips, Bengaluru", category: "clients" },
  { id: "21", src: "/pictures/TESCO_Bengaluru.jpeg", alt: "MDP Coffee House outlet at Tesco, Bengaluru", caption: "Tesco, Bengaluru", category: "clients" },
  { id: "22", src: "/pictures/TESCO_Bengaluru1.jpeg", alt: "MDP Coffee House outlet at Tesco, Bengaluru", caption: "Tesco, Bengaluru", category: "clients" },
  { id: "23", src: "/pictures/wipro_bengaluru.jpeg", alt: "MDP Coffee House's former outlet at Wipro, Bengaluru", caption: "Wipro, Bengaluru (Former)", category: "clients" },
];

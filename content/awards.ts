export interface Award {
  id: string;
  organisation: string;
  year: string;
  title: string;
  category: string;
  image: string;
  altText: string;
}

export const awards: Award[] = [
  {
    id: "infosys-2013",
    organisation: "Infosys Limited",
    year: "2013",
    title: "Mysore DC Excellence Awards",
    category: "Best Vendor — Small Operations",
    image: "/awards/Infosys_MysoreDC_2013-14.png",
    altText:
      "Infosys Mysore DC Excellence Award 2013 — Best Vendor Small Operations — MDP Coffee",
  },
  {
    id: "infosys-2014",
    organisation: "Infosys Limited",
    year: "2014",
    title: "Mysore DC Excellence Awards",
    category: "Best Vendor — Small Operations",
    image: "/awards/Infosys_MysoreDC_2014-15_.png",
    altText:
      "Infosys Mysore DC Excellence Award 2014 — Best Vendor Small Operations — MDP Coffee",
  },
  {
    id: "infosys-2017",
    organisation: "Infosys Limited",
    year: "2017–18",
    title: "Mysore DC Excellence Awards",
    category: "Best Food Court Vendor Partner",
    image: "/awards/Info_MysoreDC_2017-18.png",
    altText:
      "Infosys Mysore DC Excellence Award 2017-18 — Best Food Court Vendor Partner — MDP Coffee",
  },
  {
    id: "infosys-2023",
    organisation: "Infosys Limited",
    year: "2023",
    title: "Sambandh Vendor-Partner Meet",
    category: "Valuable Partner",
    image: "/awards/Infosys_Sambandh_2023.png",
    altText:
      "Infosys Sambandh Vendor Partner Award 2023 — Valuable Partner — MDP Food and Beverages",
  },
  {
    id: "tcs-2016",
    organisation: "Tata Consultancy Services",
    year: "2016",
    title: "Suppliers Day",
    category: "Unflinching Support and Contribution",
    image: "/awards/TCS_SuppliersDay_2016.png",
    altText:
      "TCS Tata Consultancy Services Suppliers Day 2016 — Unflinching Support and Contribution — MDP Coffee House",
  },
];

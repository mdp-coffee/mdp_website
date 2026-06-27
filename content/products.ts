export interface Product {
  id: string;
  name: string;
  image: string;
}

export const products: Product[] = [
  {
    id: "filter-coffee",
    name: "Filter Coffee",
    image: "/images/products/filter-coffee.jpg",
  },
  {
    id: "tea",
    name: "Tea",
    image: "/images/products/tea.jpg",
  },
  {
    id: "cookies",
    name: "Cookies",
    image: "/images/products/cookies.jpg",
  },
  {
    id: "biscuits",
    name: "Biscuits",
    image: "/images/products/biscuits.jpg",
  },
  {
    id: "cold-coffee",
    name: "Cold Coffee",
    image: "/images/products/cold-coffee.jpg",
  },
  {
    id: "snacks",
    name: "Snacks",
    image: "/images/products/snacks.jpg",
  },
];

export interface Product {
  id: string;
  name: string;
  image: string;
}

export const products: Product[] = [
  { id: "filter-coffee", name: "Filter Coffee", image: "/mdp_products/Filter_Coffee.jpg" },
  { id: "ginger-tea", name: "Ginger Tea", image: "/mdp_products/ginger_tea.jpg" },
  { id: "green-tea", name: "Green Tea", image: "/mdp_products/green_tea.jpg" },
  { id: "lemon-tea", name: "Lemon Tea", image: "/mdp_products/lemon_tea.jpg" },
  { id: "badam-milk", name: "Badam Milk", image: "/mdp_products/Badam_Milk.jpg" },
  { id: "rose-milk", name: "Rose Milk", image: "/mdp_products/Rose_milk.jpg" },
  { id: "milkshake", name: "Milkshake", image: "/mdp_products/milkshake.jpg" },
  { id: "chocolate-milkshake", name: "Chocolate Milkshake", image: "/mdp_products/Chocolate_milk_shake.jpg" },
  { id: "butter-milk", name: "Butter Milk", image: "/mdp_products/Butter_milk.jpg" },
];

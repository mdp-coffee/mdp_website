export interface Category {
  id: string;
  name: string;
  image: string;
}

export const categories: Category[] = [
  { id: "hot-beverages", name: "Hot Beverages", image: "/products/hot-beverages.jpg" },
  { id: "herbal-infusion", name: "Herbal Infusion", image: "/products/herbal-infusion.jpg" },
  { id: "nutritional-malt-drinks", name: "Nutritional Malt Drinks", image: "/products/nutritional-malt-drinks.jpg" },
  { id: "frappe-ice-crush", name: "Frappe with Ice", image: "/products/frappe-ice-crush.jpg" },
  { id: "lemon-luxe", name: "Lemon Luxe", image: "/products/lemon-luxe.jpg" },
  { id: "tea-time-temptations", name: "Tea-Time Temptations", image: "/products/tea-time-temptations.jpg" },
  { id: "oven-theory", name: "Oven Theory", image: "/products/oven-theory.jpg" },
  { id: "bun-story", name: "Bun Story", image: "/products/bun-story.jpg" },
  { id: "maggi", name: "Instant Noodles", image: "/products/maggi.jpg" },
];

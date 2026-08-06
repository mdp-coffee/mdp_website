export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  category: "operations" | "culture" | "coffee" | "industry" | "products";
  readTime: number;
  featured: boolean;
  coverImage: string;
  content?: Array<
    | { type: "paragraph"; text: string }
    | { type: "heading"; text: string }
    | { type: "image"; src: string; alt: string }
  >;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "a-healthier-bite-new-chikkis",
    title: "A Healthier Bite: Curry Leaves, Moringa, and Spirulina Join the MDP Menu",
    description:
      "MDP introduces three new chikkis — curry leaves, moringa, and spirulina — bringing traditional snacking together with everyday wellness.",
    publishedAt: "2026-08-05",
    category: "products",
    readTime: 3,
    featured: true,
    coverImage: "/blog/blog1_Chikki/Curry_Leaves.jpeg",
    content: [
      {
        type: "paragraph",
        text: "Snacking is a small habit repeated many times a day — a break between meetings, something to reach for with an evening cup of coffee, a bite shared with a colleague. Small as it is, it adds up. This month, MDP is introducing three new chikkis, each built around an ingredient chosen for what it brings to the body, not just the taste.",
      },
      { type: "heading", text: "Why We Made These" },
      {
        type: "paragraph",
        text: "Chikki has always been a traditional, honest snack — jaggery, peanuts, and little else. Rather than move away from that tradition, we asked what it could become with the right ingredients folded in. The result is three chikkis, each carrying a functional ingredient rooted in Indian wellness traditions, made without added preservatives or artificial flavours.",
      },
      { type: "heading", text: "Curry Leaves: An Everyday Ingredient, Rediscovered" },
      { type: "image", src: "/blog/blog1_Chikki/Curry_Leaves.jpeg", alt: "MDP Curry Leaves Peanut Chikki" },
      {
        type: "paragraph",
        text: "Curry leaves have quietly been part of Indian kitchens for generations, valued for supporting digestion and gut health. Our Curry Leaves Peanut Chikki brings that same leaf into a crunchy, everyday snack, rich in antioxidants.",
      },
      { type: "heading", text: "Moringa: A Nutrient-Dense Tradition" },
      { type: "image", src: "/blog/blog1_Chikki/Moringa.jpeg", alt: "MDP Moringa Peanut Chikki" },
      {
        type: "paragraph",
        text: "Moringa has long held a place in traditional wellness practices for its density of nutrients. The Moringa Peanut Chikki carries that same nutrient richness — a snack that supports the everyday, not just the occasional.",
      },
      { type: "heading", text: "Spirulina: A Modern Superfood, Simply Snacked" },
      { type: "image", src: "/blog/blog1_Chikki/Spirulina.jpeg", alt: "MDP Spirulina Protein Bar" },
      {
        type: "paragraph",
        text: "Spirulina is one of the most nutrient-dense ingredients available — rich in plant-based protein and antioxidants. Our Spirulina Protein Bar brings it into a form that's easy to reach for, whether you're powering through a long day or just looking for something a little more wholesome.",
      },
      { type: "heading", text: "A Small Step Toward a Healthier Everyday" },
      {
        type: "paragraph",
        text: "None of this is about reinventing what a snack is. It's about making the everyday one a little better — a small, honest step toward a healthier India, one bite at a time. All three are available now as part of MDP's retail range.",
      },
    ],
  },
];

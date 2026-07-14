export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  category: "operations" | "culture" | "coffee" | "industry";
  readTime: number;
  featured: boolean;
  content?: Array<{ type: "paragraph" | "heading"; text: string }>;
}

export const blogPosts: BlogPost[] = [];

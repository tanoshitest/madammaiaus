export interface Product {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  weight: string;
  category: string;
  price: number;
  image: string;
  description: string;
  ingredients: string[];
  preparationSteps: string[];
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  author: string;
}

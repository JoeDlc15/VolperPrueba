
export interface Product {
  id: string;
  sku: string;
  ref: string;
  name: string;
  description: string;
  category: string;
  brand: string;
  image: string;
  stock: 'In Stock' | 'Low Stock' | 'Out of Stock';
  material?: string;
  specs?: {
    [key: string]: string;
  };
}

export interface CartItem extends Product {
  quantity: number;
}

export enum Page {
  Home = 'home',
  Catalog = 'catalog',
  ProductDetail = 'detail',
  Cart = 'cart',
  About = 'about',
  Contact = 'contact',
  FAQ = 'faq',
  Success = 'success'
}

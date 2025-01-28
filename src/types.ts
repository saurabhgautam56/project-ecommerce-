export interface ProductVariant {
  id: number;
  color: string;
  size: string;
  stock: number;
  sku: string;
}

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  compareAtPrice?: number; // Original/MRP price
  image: string;
  category: string;
  sizes: string[];
  colors: string[];
  variants: ProductVariant[];
  attributes: {
    material?: string;
    care?: string[];
    fit?: string;
    [key: string]: any;
  };
}

export interface CartItem extends Product {
  quantity: number;
  selectedSize: string;
  selectedColor: string;
}

export interface User {
  id: string;
  email: string;
  created_at: string;
}

export const formatPrice = (price: number): string => {
  return `₹${price.toLocaleString('en-IN')}`;
};
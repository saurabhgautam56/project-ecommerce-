import { ProductCard } from '../components/ProductCard';
import { Product } from '../types';

// This would normally come from your Supabase database
const SAMPLE_PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Classic White T-Shirt",
    description: "Essential cotton t-shirt in crisp white. Perfect for everyday wear.",
    price: 1499,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
    category: "T-Shirts",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["White", "Black", "Navy"],
    variants: [
      { id: 1, color: "White", size: "M", stock: 10, sku: "WT-M-001" },
      { id: 2, color: "Black", size: "M", stock: 5, sku: "BT-M-001" },
    ],
    attributes: {
      material: "100% Cotton",
      care: ["Machine wash cold", "Tumble dry low"],
      fit: "Regular fit",
    }
  },
  {
    id: 2,
    name: "Slim Fit Jeans",
    description: "Modern slim fit jeans in dark wash denim.",
    price: 2999,
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d",
    category: "Jeans",
    sizes: ["28", "30", "32", "34", "36"],
    colors: ["Dark Wash", "Light Wash"],
    variants: [
      { id: 3, color: "Dark Wash", size: "32", stock: 7, sku: "DJ-32-001" },
      { id: 4, color: "Light Wash", size: "32", stock: 3, sku: "LJ-32-001" },
    ],
    attributes: {
      material: "99% Cotton, 1% Spandex",
      care: ["Machine wash cold", "Tumble dry low"],
      fit: "Slim fit",
    }
  },
  {
    id: 3,
    name: "Leather Jacket",
    description: "Classic leather jacket with silver hardware.",
    price: 7999,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5",
    category: "Outerwear",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "Brown"],
    variants: [
      { id: 5, color: "Black", size: "M", stock: 2, sku: "BLJ-M-001" },
      { id: 6, color: "Brown", size: "M", stock: 1, sku: "BRJ-M-001" },
    ],
    attributes: {
      material: "100% Leather",
      care: ["Professional leather clean only"],
      fit: "Regular fit",
    }
  },
  {
    id: 4,
    name: "Cashmere Sweater",
    description: "Luxuriously soft cashmere sweater in heather gray.",
    price: 5999,
    image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105",
    category: "Sweaters",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Heather Gray", "Navy", "Black"],
    variants: [
      { id: 7, color: "Heather Gray", size: "L", stock: 4, sku: "CG-L-001" },
      { id: 8, color: "Navy", size: "L", stock: 2, sku: "CN-L-001" },
    ],
    attributes: {
      material: "100% Cashmere",
      care: ["Dry clean only"],
      fit: "Relaxed fit",
    }
  },
  {
    id: 5,
    name: "Floral Summer Dress",
    description: "Light and airy floral print dress perfect for summer.",
    price: 3499,
    image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1",
    category: "Dresses",
    sizes: ["XS", "S", "M", "L"],
    colors: ["Floral Print"],
    variants: [
      { id: 9, color: "Floral Print", size: "M", stock: 6, sku: "FP-M-001" },
    ],
    attributes: {
      material: "100% Polyester",
      care: ["Machine wash cold", "Tumble dry low"],
      fit: "Regular fit",
    }
  },
  {
    id: 6,
    name: "Wool Blazer",
    description: "Tailored wool blazer in classic navy.",
    price: 6499,
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35",
    category: "Blazers",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Navy"],
    variants: [
      { id: 10, color: "Navy", size: "M", stock: 3, sku: "NB-M-001" },
    ],
    attributes: {
      material: "100% Wool",
      care: ["Dry clean only"],
      fit: "Tailored fit",
  }
},
];

export function Products() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Our Collection</h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {SAMPLE_PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
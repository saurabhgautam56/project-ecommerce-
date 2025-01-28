import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ShoppingBag, Heart, Truck, Shield, RefreshCw, Zap } from 'lucide-react';
import { useCartStore } from '../store/cartStore';
import { useWishlistStore } from '../store/wishlistStore';
import { useAuth } from '../contexts/AuthContext';
import { Product, formatPrice } from '../types';

// This would normally come from your Supabase database
const SAMPLE_PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Classic White T-Shirt",
    description: "Essential cotton t-shirt in crisp white. Perfect for everyday wear.",
    price: 499,
    compareAtPrice: 999,
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
    price: 999,
    compareAtPrice: 1499,
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d",
    category: "Jeans",
    sizes: ["28", "30", "32", "34", "36"],
    colors: ["Dark Wash", "Light Wash"],
    variants: [
      { id: 3, color: "Dark Wash", size: "32", stock: 15, sku: "DJ-32-001" },
      { id: 4, color: "Light Wash", size: "34", stock: 8, sku: "LJ-34-001" },
    ],
    attributes: {
      material: "98% Cotton, 2% Elastane",
      care: ["Machine wash cold", "Tumble dry low"],
      fit: "Slim fit",
    }
  },
  {
    id: 3,
    name: "Leather Jacket",
    description: "Classic leather jacket with silver hardware.",
    price: 5999,
    compareAtPrice: 6999,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5",
    category: "Outerwear",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "Brown"],
    variants: [
      { id: 5, color: "Black", size: "M", stock: 3, sku: "BL-M-001" },
      { id: 6, color: "Brown", size: "L", stock: 2, sku: "BR-L-001" },
    ],
    attributes: {
      material: "100% Leather",
      care: ["Dry clean only"],
      fit: "Regular fit",
    }
  },
  {
    id: 4,
    name: "Cashmere Sweater",
    description: "Luxurious cashmere sweater in a relaxed fit.",
    price: 1499,
    compareAtPrice: 1999,
    image: "https://images.unsplash.com/photo-1606781188171-4d8b3b6d9c3b",
    category: "Sweaters",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Charcoal", "Heather Gray", "Navy"],
    variants: [
      { id: 7, color: "Charcoal", size: "M", stock: 5, sku: "CS-M-001" },
      { id: 8, color: "Heather Gray", size: "L", stock: 3, sku: "HG-L-001" },
    ],
    attributes: {
      material: "100% Cashmere",
      care: ["Hand wash cold", "Lay flat to dry"],
      fit: "Relaxed fit",
    }
  },
  {
    id: 5,
    name: "Puffer Jacket",
    description: "Water-resistant puffer jacket with warm down fill.",
    price: 3999,
    compareAtPrice: 4499,
    image: "https://images.unsplash.com/photo-1606781188171-4d8b3b6d9c3b",
    category: "Outerwear",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "Navy"],
    variants: [
      { id: 9, color: "Black", size: "M", stock: 5, sku: "PJ-B-001" },
      { id: 10, color: "Navy", size: "L", stock: 3, sku: "PJ-N-001" },
    ],
    attributes: {
      material: "100% Polyester",
      care: ["Machine wash cold", "Tumble dry low"],
      fit: "Regular fit",
    }
  },
  {
    id: 6,
    name: "Crewneck Sweater",
    description: "Classic crewneck sweater in soft merino wool.",
    price: 1999,
    compareAtPrice: 2499,
    image: "https://images.unsplash.com/photo-1606781188171-4d8b3b6d9c3b",
    category: "`Sweaters",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Charcoal", "Heather Gray", "Navy"],
    variants: [
      { id: 11, color: "Charcoal", size: "M", stock: 5, sku: "CS-M-001" },
      { id: 12, color: "Heather Gray", size: "L", stock: 3, sku: "HG-L-001" },
    ],
    attributes: {
      material: "100% Merino Wool",
      care: ["Hand wash cold", "Lay flat to dry"],
      fit: "Relaxed fit",
    }
  },
];

export function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const addItem = useCartStore((state) => state.addItem);
  const { addItem: addToWishlist, removeItem: removeFromWishlist, isInWishlist } = useWishlistStore();
  
  const product = SAMPLE_PRODUCTS.find(p => p.id === Number(id));

  if (!product) {
    return <div className="text-center py-16">Product not found</div>;
  }

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      alert('Please select both size and color');
      return;
    }
    addItem(product, selectedSize);
    navigate('/cart');
  };

  const handleBuyNow = () => {
    if (!selectedSize || !selectedColor) {
      alert('Please select both size and color');
      return;
    }
    
    if (!user) {
      navigate('/auth');
      return;
    }

    addItem(product, selectedSize);
    navigate('/checkout');
  };

  const toggleWishlist = () => {
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-center object-cover"
          />
        </div>

        <div className="flex flex-col">
          <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
          <div className="mt-4 flex items-center">
            <p className="text-2xl font-medium text-gray-900">{formatPrice(product.price)}</p>
            {product.compareAtPrice && (
              <p className="ml-2 text-lg text-gray-500 line-through">
                {formatPrice(product.compareAtPrice)}
              </p>
            )}
            {product.compareAtPrice && (
              <span className="ml-2 px-2 py-1 bg-red-100 text-red-800 text-sm rounded">
                {Math.round((1 - product.price / product.compareAtPrice) * 100)}% OFF
              </span>
            )}
          </div>

          <div className="mt-6">
            <h3 className="text-sm font-medium text-gray-900">Color</h3>
            <div className="grid grid-cols-4 gap-4 mt-2">
              {product.colors.map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`px-4 py-2 text-sm font-medium rounded-md ${
                    selectedColor === color
                      ? 'bg-gray-900 text-white'
                      : 'bg-white text-gray-900 border border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  {color}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-sm font-medium text-gray-900">Size</h3>
            <div className="grid grid-cols-4 gap-4 mt-2">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-2 text-sm font-medium rounded-md ${
                    selectedSize === size
                      ? 'bg-gray-900 text-white'
                      : 'bg-white text-gray-900 border border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8 space-y-4">
            <button
              onClick={handleBuyNow}
              className="w-full bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 flex items-center justify-center"
            >
              <Zap className="w-5 h-5 mr-2" />
              Buy Now
            </button>

            <button
              onClick={handleAddToCart}
              className="w-full bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 flex items-center justify-center"
            >
              <ShoppingBag className="w-5 h-5 mr-2" />
              Add to Cart
            </button>

            <button
              onClick={toggleWishlist}
              className={`w-full px-6 py-3 rounded-md border flex items-center justify-center ${
                isInWishlist(product.id)
                  ? 'border-red-600 text-red-600 hover:bg-red-50'
                  : 'border-gray-300 text-gray-700 hover:bg-gray-50'
              }`}
            >
              <Heart
                className={`w-5 h-5 mr-2 ${isInWishlist(product.id) ? 'fill-red-600' : ''}`}
              />
              {isInWishlist(product.id) ? 'Remove from Wishlist' : 'Add to Wishlist'}
            </button>
          </div>

          <div className="mt-8 border-t border-gray-200 pt-8">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Product Details</h3>
            <div className="prose prose-sm text-gray-500">
              <p>{product.description}</p>
              <h4 className="text-gray-900 mt-4">Material</h4>
              <p>{product.attributes.material}</p>
              <h4 className="text-gray-900 mt-4">Care Instructions</h4>
              <ul className="list-disc pl-4">
                {product.attributes.care && product.attributes.care.map((instruction, index) => (
                  <li key={index}>{instruction}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8 border-t border-gray-200 pt-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center">
                <Truck className="w-8 h-8 text-gray-400" />
                <div className="ml-4">
                  <h4 className="text-sm font-medium text-gray-900">Free Delivery</h4>
                  <p className="mt-1 text-sm text-gray-500">On orders above ₹999</p>
                </div>
              </div>
              <div className="flex items-center">
                <Shield className="w-8 h-8 text-gray-400" />
                <div className="ml-4">
                  <h4 className="text-sm font-medium text-gray-900">Secure Payment</h4>
                  <p className="mt-1 text-sm text-gray-500">100% secure payment</p>
                </div>
              </div>
              <div className="flex items-center">
                <RefreshCw className="w-8 h-8 text-gray-400" />
                <div className="ml-4">
                  <h4 className="text-sm font-medium text-gray-900">Easy Returns</h4>
                  <p className="mt-1 text-sm text-gray-500">10-day return policy</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 border-t border-gray-200 pt-8">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Payment Options</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <span className="font-medium">UPI Payment</span>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/UPI-Logo-vector.svg/200px-UPI-Logo-vector.svg.png" 
                     alt="UPI" 
                     className="h-8" />
              </div>
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <span className="font-medium">Credit/Debit Card</span>
                <div className="flex space-x-2">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/200px-Mastercard-logo.svg.png" 
                       alt="Mastercard" 
                       className="h-8" />
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/200px-Visa_Inc._logo.svg.png" 
                       alt="Visa" 
                       className="h-8" />
                </div>
              </div>
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <span className="font-medium">Cash on Delivery</span>
                <span className="text-green-600">Available</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, User } from 'lucide-react';
import { useCartStore } from '../store/cartStore';
import { useAuth } from '../contexts/AuthContext';

export function Navbar() {
  const items = useCartStore((state) => state.items);
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);
  const { user } = useAuth();

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="text-2xl font-bold text-gray-900">
            LUXE
          </Link>

          <div className="flex space-x-8">
            <Link to="/products" className="text-gray-700 hover:text-gray-900">
              Shop
            </Link>
            <Link to="/categories" className="text-gray-700 hover:text-gray-900">
              Categories
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-gray-900">
              About
            </Link>
          </div>

          <div className="flex items-center space-x-6">
            <Link 
              to={user ? "/account" : "/auth"} 
              className="text-gray-700 hover:text-gray-900"
            >
              <User className="h-6 w-6" />
            </Link>
            <Link to="/cart" className="text-gray-700 hover:text-gray-900 relative">
              <ShoppingBag className="h-6 w-6" />
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {itemCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
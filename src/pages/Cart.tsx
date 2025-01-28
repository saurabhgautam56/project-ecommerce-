import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2, ArrowRight } from 'lucide-react';
import { useCartStore } from '../store/cartStore';
import { formatPrice } from '../types';

export function Cart() {
  const { items, removeItem, updateQuantity, total } = useCartStore();

  if (items.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Your cart is empty</h2>
        <Link
          to="/products"
          className="inline-flex items-center text-indigo-600 hover:text-indigo-500"
        >
          Continue shopping
          <ArrowRight className="ml-2 w-4 h-4" />
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Shopping Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8">
          {items.map((item) => (
            <div key={`${item.id}-${item.selectedSize}`} className="flex py-6 border-b">
              <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-full w-full object-cover object-center"
                />
              </div>

              <div className="ml-4 flex flex-1 flex-col">
                <div className="flex justify-between">
                  <div>
                    <h3 className="text-base font-medium text-gray-900">{item.name}</h3>
                    <p className="mt-1 text-sm text-gray-500">Size: {item.selectedSize}</p>
                  </div>
                  <p className="text-base font-medium text-gray-900">{formatPrice(item.price)}</p>
                </div>

                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center border rounded-md">
                    <button
                      onClick={() => updateQuantity(item.id, item.selectedSize, Math.max(0, item.quantity - 1))}
                      className="px-3 py-1 text-gray-600 hover:text-gray-700"
                    >
                      -
                    </button>
                    <span className="px-3 py-1 text-gray-600">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.selectedSize, item.quantity + 1)}
                      className="px-3 py-1 text-gray-600 hover:text-gray-700"
                    >
                      +
                    </button>
                  </div>

                  <button
                    onClick={() => removeItem(item.id, item.selectedSize)}
                    className="text-red-500 hover:text-red-600"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="lg:col-span-4">
          <div className="bg-gray-50 rounded-lg p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Order Summary</h2>
            
            <div className="flow-root">
              <div className="border-t border-gray-200 pt-4">
                <div className="flex justify-between">
                  <p className="text-base font-medium text-gray-900">Subtotal</p>
                  <p className="text-base font-medium text-gray-900">{formatPrice(total())}</p>
                </div>
                <p className="mt-1 text-sm text-gray-500">Shipping and taxes calculated at checkout</p>
              </div>

              <div className="mt-6">
                <Link
                  to="/checkout"
                  className="w-full bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 flex items-center justify-center"
                >
                  Proceed to Checkout
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Home() {
  return (
    <div className="relative">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8"
          alt="Hero background"
          className="w-full h-screen object-cover"
        />
        <div className="absolute inset-0 bg-gray-900/70" />
      </div>

      <div className="relative min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6">
            Discover Your Style
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Explore our curated collection of premium clothing and accessories.
            Find your perfect look today.
          </p>
          <Link
            to="/products"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
          >
            Shop Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>

      <div className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <img
                src="https://images.unsplash.com/photo-1525507119028-ed4c629a60a3"
                alt="Featured collection"
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold mb-2">New Arrivals</h3>
              <p className="text-gray-600">Discover the latest trends</p>
            </div>
            <div className="text-center">
              <img
                src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d"
                alt="Featured collection"
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold mb-2">Summer Collection</h3>
              <p className="text-gray-600">Stay cool and stylish</p>
            </div>
            <div className="text-center">
              <img
                src="https://images.unsplash.com/photo-1445205170230-053b83016050"
                alt="Featured collection"
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold mb-2">Accessories</h3>
              <p className="text-gray-600">Complete your look</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
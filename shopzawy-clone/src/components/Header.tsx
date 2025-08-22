'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`;
    }
  };

  return (
    <header className="bg-white shadow-sm border-b">
      {/* Top Bar */}
      <div className="bg-blue-600 text-white text-sm py-2">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div>Free shipping on orders over EGP 500!</div>
          <div className="flex space-x-4">
            <Link href="/help" className="hover:underline">Help</Link>
            <Link href="/track-order" className="hover:underline">Track Order</Link>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="text-2xl font-bold text-blue-600">shopzawy</div>
          </Link>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl mx-8">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder="Search products, brands..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
              >
                Search
              </button>
            </form>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-6">
            <Link href="/login" className="text-gray-700 hover:text-blue-600 font-medium">
              Sign In
            </Link>
            <Link href="/cart" className="relative text-gray-700 hover:text-blue-600">
              <div className="flex items-center space-x-1">
                <span>Cart</span>
                <div className="w-6 h-6 bg-blue-600 text-white text-xs rounded-full flex items-center justify-center">
                  0
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="mt-4 border-t pt-4">
          <div className="flex items-center justify-between">
            <div className="flex space-x-8">
              <Link href="/shop" className="text-gray-700 hover:text-blue-600 font-medium flex items-center">
                Shop
              </Link>
              <Link href="/vendors" className="text-gray-700 hover:text-blue-600 font-medium flex items-center">
                Vendors
              </Link>
              <Link href="/brands" className="text-gray-700 hover:text-blue-600 font-medium flex items-center">
                Brands
              </Link>
              <Link href="/categories" className="text-gray-700 hover:text-blue-600 font-medium flex items-center">
                Categories
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-gray-900 hover:border-gray-900"
            >
              <svg className="fill-current h-3 w-3" viewBox="0 0 20 20">
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t">
              <div className="flex flex-col space-y-2 pt-4">
                <Link href="/shop" className="text-gray-700 hover:text-blue-600 py-2">Shop</Link>
                <Link href="/vendors" className="text-gray-700 hover:text-blue-600 py-2">Vendors</Link>
                <Link href="/brands" className="text-gray-700 hover:text-blue-600 py-2">Brands</Link>
                <Link href="/categories" className="text-gray-700 hover:text-blue-600 py-2">Categories</Link>
              </div>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}

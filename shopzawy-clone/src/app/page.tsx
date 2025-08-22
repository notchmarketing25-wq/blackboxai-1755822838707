'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Banner from '@/components/Banner';
import FlashSales from '@/components/FlashSales';
import ProductGrid from '@/components/ProductGrid';
import Categories from '@/components/Categories';
import Footer from '@/components/Footer';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch products from API
    const fetchProducts = async () => {
      try {
        const response = await fetch('/api/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <Banner />
        <FlashSales products={products.slice(0, 12)} />
        
        {/* Editor's Choice Section */}
        <section className="py-12 px-4 max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">⭐ Editor's Choice</h2>
            <p className="text-gray-600">Premium products selected by our experts</p>
            <a href="/shop/featured" className="text-blue-600 hover:text-blue-800 font-medium">
              View all featured products →
            </a>
          </div>
          <ProductGrid products={products.slice(12, 24)} />
        </section>

        {/* Just Landed Section */}
        <section className="py-12 px-4 max-w-7xl mx-auto bg-white">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">🆕 Just Landed</h2>
            <p className="text-gray-600">Fresh arrivals from top brands worldwide</p>
            <a href="/shop/new-arrivals" className="text-blue-600 hover:text-blue-800 font-medium">
              View all new arrivals →
            </a>
          </div>
          <ProductGrid products={products.slice(24, 36)} />
        </section>

        {/* Super Savers Section */}
        <section className="py-12 px-4 max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">💰 Super Savers</h2>
            <p className="text-gray-600">Massive discounts on trending products</p>
            <a href="/shop/flash-sales" className="text-blue-600 hover:text-blue-800 font-medium">
              View all sale products →
            </a>
          </div>
          <ProductGrid products={products.slice(36, 48)} />
        </section>

        <Categories />
      </main>
      <Footer />
    </div>
  );
}

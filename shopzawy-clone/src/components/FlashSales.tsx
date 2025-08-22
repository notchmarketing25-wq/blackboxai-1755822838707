'use client';

import { useState, useEffect } from 'react';
import ProductCard from './ProductCard';

interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice: number;
  discount: number;
  image: string;
  stock: number;
  category: string;
}

interface FlashSalesProps {
  products: Product[];
}

export default function FlashSales({ products }: FlashSalesProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const tomorrow = new Date(now);
      tomorrow.setDate(tomorrow.getDate() + 1);
      tomorrow.setHours(0, 0, 0, 0);
      
      const difference = tomorrow.getTime() - now.getTime();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-12 px-4 max-w-7xl mx-auto">
      {/* Flash Sales Header */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center mb-4">
          <div className="bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-medium">
            🔥 Flash Sales & Hot Deals
          </div>
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          Grab these incredible savings before they're gone!
        </h2>
        
        {/* Countdown Timer */}
        <div className="flex items-center justify-center space-x-4 mb-6">
          <div className="flex items-center space-x-2">
            <span className="bg-red-600 text-white px-3 py-1 rounded-lg font-bold">
              Up to 70% OFF
            </span>
            <span className="bg-orange-500 text-white px-3 py-1 rounded-lg font-bold">
              Limited Time
            </span>
          </div>
        </div>

        <div className="bg-red-50 border border-red-200 rounded-lg p-4 inline-block mb-6">
          <div className="flex items-center justify-center space-x-4 text-red-600">
            <div className="text-center">
              <div className="text-2xl font-bold">{timeLeft.days}</div>
              <div className="text-sm">Days</div>
            </div>
            <div className="text-2xl">:</div>
            <div className="text-center">
              <div className="text-2xl font-bold">{timeLeft.hours.toString().padStart(2, '0')}</div>
              <div className="text-sm">Hours</div>
            </div>
            <div className="text-2xl">:</div>
            <div className="text-center">
              <div className="text-2xl font-bold">{timeLeft.minutes.toString().padStart(2, '0')}</div>
              <div className="text-sm">Minutes</div>
            </div>
            <div className="text-2xl">:</div>
            <div className="text-center">
              <div className="text-2xl font-bold">{timeLeft.seconds.toString().padStart(2, '0')}</div>
              <div className="text-sm">Seconds</div>
            </div>
          </div>
        </div>

        <a href="/shop/flash-sales" className="text-blue-600 hover:text-blue-800 font-medium">
          🔥 View All Flash Sales →
        </a>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} showDiscount={true} />
        ))}
      </div>

      {/* Pro Tip */}
      <div className="mt-8 text-center">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 inline-block">
          <p className="text-blue-800">
            💡 <strong>Pro tip:</strong> Deals refresh daily at midnight. Don't miss out!
          </p>
        </div>
      </div>
    </section>
  );
}

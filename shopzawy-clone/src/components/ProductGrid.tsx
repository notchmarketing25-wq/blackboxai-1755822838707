'use client';

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

interface ProductGridProps {
  products: Product[];
  showDiscount?: boolean;
  columns?: 'auto' | 4 | 6;
}

export default function ProductGrid({ 
  products, 
  showDiscount = false, 
  columns = 'auto' 
}: ProductGridProps) {
  if (!products || products.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-gray-400 text-6xl mb-4">🛍️</div>
        <h3 className="text-xl font-medium text-gray-600 mb-2">No products found</h3>
        <p className="text-gray-500">Check back later for new arrivals!</p>
      </div>
    );
  }

  const getGridClasses = () => {
    if (columns === 4) {
      return 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6';
    }
    if (columns === 6) {
      return 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6';
    }
    // Auto responsive grid
    return 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6';
  };

  return (
    <div className={getGridClasses()}>
      {products.map((product) => (
        <ProductCard 
          key={product.id} 
          product={product} 
          showDiscount={showDiscount}
        />
      ))}
    </div>
  );
}

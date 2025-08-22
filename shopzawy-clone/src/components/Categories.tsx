'use client';

import Link from 'next/link';

const categories = [
  {
    id: 'automotive',
    name: 'Automotive',
    icon: '🚗',
    subcategories: ['Car Care & Accessories', 'Car Electronics & Lights']
  },
  {
    id: 'electronics',
    name: 'Electronics',
    icon: '📱',
    subcategories: ['Audio', 'Cameras', 'Computers', 'Laptops & Accessories', 'Phones', 'Smart Security', 'Supplies Electrical', 'Television & Receiver', 'Video Games']
  },
  {
    id: 'fashion',
    name: 'Fashion',
    icon: '👕',
    subcategories: ['Children', 'Folding Umbrellas', 'Hats & Caps', 'Men Fashion', 'Sewing', 'Travel Accessories', 'Women Fashion']
  },
  {
    id: 'furniture',
    name: 'Furniture',
    icon: '🪑',
    subcategories: ['Living Room', 'Bedroom', 'Office', 'Outdoor']
  },
  {
    id: 'health-beauty',
    name: 'Health & Beauty',
    icon: '💄',
    subcategories: ['Skincare', 'Makeup', 'Hair Care', 'Personal Care']
  },
  {
    id: 'home-garden',
    name: 'Home & Garden',
    icon: '🏠',
    subcategories: ['Kitchen', 'Bathroom', 'Garden', 'Decor']
  },
  {
    id: 'sports',
    name: 'Sports & Outdoors',
    icon: '⚽',
    subcategories: ['Fitness', 'Outdoor Activities', 'Team Sports']
  },
  {
    id: 'books',
    name: 'Books & Media',
    icon: '📚',
    subcategories: ['Books', 'Movies', 'Music', 'Games']
  }
];

export default function Categories() {
  return (
    <section className="py-12 px-4 max-w-7xl mx-auto bg-white">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Shop by Categories</h2>
        <p className="text-gray-600">Explore our wide range of product categories</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {categories.map((category) => (
          <div key={category.id} className="group">
            <Link href={`/category/${category.id}`}>
              <div className="bg-gray-50 hover:bg-gray-100 rounded-lg p-6 transition-colors duration-200 border hover:border-blue-200">
                <div className="text-center">
                  <div className="text-4xl mb-3">{category.icon}</div>
                  <h3 className="font-semibold text-gray-900 mb-3 group-hover:text-blue-600">
                    {category.name}
                  </h3>
                  <div className="space-y-1">
                    {category.subcategories.slice(0, 3).map((sub, index) => (
                      <div key={index} className="text-sm text-gray-600 hover:text-blue-600">
                        {sub}
                      </div>
                    ))}
                    {category.subcategories.length > 3 && (
                      <div className="text-sm text-blue-600 font-medium">
                        +{category.subcategories.length - 3} more
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>

      {/* View All Categories Button */}
      <div className="text-center mt-8">
        <Link 
          href="/categories" 
          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
        >
          View All Categories
          <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </section>
  );
}

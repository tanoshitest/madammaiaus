import { useState } from 'react';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import Toast from '../components/Toast';

export default function ProductsPage() {
  const [showToast, setShowToast] = useState(false);

  return (
    <div className="min-h-screen bg-white pt-24">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1
            className="text-5xl md:text-6xl font-serif mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Our Products
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Discover our range of authentic Vietnamese frozen soup bowls, handcrafted with traditional recipes and the finest ingredients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          {products.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onAdd={() => setShowToast(true)} 
            />
          ))}
        </div>
      </div>

      <Toast
        message="Added to cart!"
        show={showToast}
        onClose={() => setShowToast(false)}
      />
    </div>
  );
}

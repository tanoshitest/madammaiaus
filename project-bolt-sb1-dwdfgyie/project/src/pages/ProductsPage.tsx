import { Link } from 'react-router-dom';
import { products } from '../data/products';

export default function ProductsPage() {
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group">
              <Link to={`/our-products/${product.slug}`}>
                <div
                  className="aspect-square mb-6 overflow-hidden transition-transform duration-300 group-hover:scale-105"
                  style={{
                    background: product.image,
                  }}
                />
                <h2 className="text-xl font-medium mb-3 leading-tight">
                  {product.name}
                </h2>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {product.tagline}
                </p>
                <span className="inline-block text-sm uppercase tracking-wider border-b-2 border-[#1a1a1a] pb-1 group-hover:opacity-60 transition-opacity">
                  Discover More
                </span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

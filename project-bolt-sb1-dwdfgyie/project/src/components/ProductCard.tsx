import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus, Minus } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../contexts/CartContext';

interface ProductCardProps {
  product: Product;
  onAdd?: () => void;
}

export default function ProductCard({ product, onAdd }: ProductCardProps) {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  const handleIncrement = (e: React.MouseEvent) => {
    e.preventDefault();
    setQuantity(prev => prev + 1);
  };

  const handleDecrement = (e: React.MouseEvent) => {
    e.preventDefault();
    setQuantity(prev => (prev > 1 ? prev - 1 : 1));
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(product, quantity);
    if (onAdd) onAdd();
  };

  return (
    <div className="flex flex-col h-full group animate-in fade-in slide-in-from-bottom-4 duration-700">
      <Link to={`/our-products/${product.slug}`} className="block mb-6 overflow-hidden">
        <div
          className="aspect-square transition-transform duration-700 group-hover:scale-105"
          style={{
            background: product.image,
          }}
        />
      </Link>
      
      <div className="flex flex-col flex-grow">
        <Link to={`/our-products/${product.slug}`}>
          <h3 className="text-xl font-medium mb-3 leading-tight min-h-[3.5rem] line-clamp-2 hover:opacity-60 transition-opacity">
            {product.name}
          </h3>
        </Link>
        
        <p className="text-gray-600 text-sm mb-6 leading-relaxed flex-grow">
          {product.tagline}
        </p>

        {/* Quantity Selector */}
        <div className="flex items-center mb-6">
          <div className="flex items-center border border-gray-200 rounded-sm">
            <button
              onClick={handleDecrement}
              className="px-3 py-2 text-gray-500 hover:text-black transition-colors"
              aria-label="Decrease quantity"
            >
              <Minus className="w-3 h-3" />
            </button>
            <span className="w-10 text-center text-sm font-medium border-x border-gray-100">
              {quantity}
            </span>
            <button
              onClick={handleIncrement}
              className="px-3 py-2 text-gray-500 hover:text-black transition-colors"
              aria-label="Increase quantity"
            >
              <Plus className="w-3 h-3" />
            </button>
          </div>
          <span className="ml-4 text-xs text-gray-400 uppercase tracking-widest">Quantity</span>
        </div>

        <button
          onClick={handleAddToCart}
          className="inline-flex items-center justify-between w-full bg-[#1a1a1a] text-white px-6 py-4 text-xs uppercase tracking-widest hover:bg-gray-800 transition-all duration-300 group/btn mt-auto"
        >
          <span className="font-medium">Shop now</span>
          <div className="bg-white/10 p-1 rounded-full group-hover/btn:bg-white/20 transition-colors">
            <Plus className="w-4 h-4" />
          </div>
        </button>
      </div>
    </div>
  );
}

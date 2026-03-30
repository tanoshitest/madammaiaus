import { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, Plus, Minus } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../contexts/CartContext';
import { formatPrice } from '../utils/format';
import Toast from '../components/Toast';

export default function ProductDetailPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [showToast, setShowToast] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'description' | 'ingredients' | 'preparation'>('description');

  const product = products.find((p) => p.slug === slug);
  const [selectedImage, setSelectedImage] = useState(product?.image || '');

  if (!product) {
    return (
      <div className="min-h-screen bg-white pt-24 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl mb-4">Product not found</h1>
          <Link to="/our-products" className="text-sm uppercase tracking-wider underline">
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setShowToast(true);
  };

  const tabs = [
    { id: 'description', label: 'Description' },
    { id: 'ingredients', label: 'Ingredients' },
    { id: 'preparation', label: 'Preparation' },
  ] as const;

  return (
    <div className="min-h-screen bg-white pt-24">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center space-x-2 text-sm uppercase tracking-wider mb-12 hover:opacity-60 transition-opacity"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back</span>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-4">
            <div
              className="aspect-square w-full transition-all duration-500"
              style={{
                backgroundImage: (selectedImage || product.image).startsWith('linear-gradient') 
                  ? (selectedImage || product.image) 
                  : `url(${selectedImage || product.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
            {product.images && product.images.length > 0 && (
              <div className="grid grid-cols-4 gap-4">
                {product.images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(img)}
                    className={`aspect-square w-full border-2 transition-all duration-300 ${
                      selectedImage === img 
                        ? 'border-[#1a1a1a] opacity-100' 
                        : 'border-transparent opacity-50 hover:opacity-80'
                    }`}
                    style={{ 
                      backgroundImage: img.startsWith('linear-gradient') ? img : `url(${img})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  />
                ))}
              </div>
            )}
          </div>

          <div>
            <h1
              className="text-4xl md:text-5xl font-serif mb-6 leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {product.name}
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {product.tagline}
            </p>

            <div className="border-t border-b border-gray-200 py-6 mb-8">
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm uppercase tracking-wider">Weight</span>
                <span className="font-medium">{product.weight}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm uppercase tracking-wider">Price</span>
                <span className="text-2xl font-medium">{formatPrice(product.price)}</span>
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="flex items-center mb-8">
              <span className="text-sm uppercase tracking-wider mr-6">Quantity</span>
              <div className="flex items-center border border-gray-200 rounded-sm">
                <button
                  onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                  className="px-4 py-3 text-gray-500 hover:text-black transition-colors border-r border-gray-100"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-12 text-center font-medium">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(prev => prev + 1)}
                  className="px-4 py-3 text-gray-500 hover:text-black transition-colors border-l border-gray-100"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            <button
              onClick={handleAddToCart}
              className="w-full bg-[#1a1a1a] text-white py-5 text-sm uppercase tracking-wider hover:bg-gray-800 transition-colors mb-10 font-medium"
            >
              Add to Cart
            </button>

            {/* Tabs */}
            <div>
              <div className="flex border-b border-gray-200 mb-6">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`relative px-6 py-3 text-sm uppercase tracking-wider transition-colors ${
                      activeTab === tab.id
                        ? 'text-[#1a1a1a] font-medium'
                        : 'text-gray-400 hover:text-gray-600'
                    }`}
                  >
                    {tab.label}
                    {activeTab === tab.id && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#1a1a1a]" />
                    )}
                  </button>
                ))}
              </div>

              <div className="min-h-[160px]">
                {activeTab === 'description' && (
                  <p className="text-gray-600 leading-relaxed">{product.description}</p>
                )}

                {activeTab === 'ingredients' && (
                  <ul className="space-y-2">
                    {product.ingredients.map((ingredient, index) => (
                      <li key={index} className="text-gray-600 flex items-start">
                        <span className="mr-2">•</span>
                        <span>{ingredient}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {activeTab === 'preparation' && (
                  <ol className="space-y-2">
                    {product.preparationSteps.map((step, index) => (
                      <li key={index} className="text-gray-600 flex items-start">
                        <span className="mr-3 font-medium">{index + 1}.</span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ol>
                )}
              </div>
            </div>
          </div>
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

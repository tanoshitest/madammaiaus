import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { formatPrice } from '../utils/format';

export default function CartPage() {
  const { items, total, removeFromCart, updateQuantity } = useCart();

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-white pt-24">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <h1
            className="text-4xl md:text-5xl font-serif mb-12"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Your Cart
          </h1>
          <div className="text-center py-16">
            <p className="text-gray-600 mb-8">Your cart is empty</p>
            <Link
              to="/our-products"
              className="inline-block bg-[#1a1a1a] text-white px-8 py-4 text-sm uppercase tracking-wider hover:bg-gray-800 transition-colors"
            >
              Shop Products
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white pt-24">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h1
          className="text-4xl md:text-5xl font-serif mb-12"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Your Cart
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            {items.map((item) => (
              <div
                key={item.product.id}
                className="flex gap-6 border-b border-gray-200 py-6 first:pt-0"
              >
                <div
                  className="w-32 h-32 flex-shrink-0"
                  style={{
                    background: item.product.image,
                  }}
                />

                <div className="flex-1">
                  <Link
                    to={`/our-products/${item.product.slug}`}
                    className="text-lg font-medium hover:opacity-60 transition-opacity"
                  >
                    {item.product.name}
                  </Link>
                  <p className="text-gray-600 text-sm mt-1">{item.product.weight}</p>
                  <p className="text-lg font-medium mt-3">
                    {formatPrice(item.product.price)}
                  </p>

                  <div className="flex items-center space-x-4 mt-4">
                    <div className="flex items-center border border-gray-300">
                      <button
                        onClick={() =>
                          updateQuantity(item.product.id, item.quantity - 1)
                        }
                        className="p-2 hover:bg-gray-100 transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="px-4 py-2 min-w-[3rem] text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(item.product.id, item.quantity + 1)
                        }
                        className="p-2 hover:bg-gray-100 transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>

                    <button
                      onClick={() => removeFromCart(item.product.id)}
                      className="text-red-600 hover:text-red-700 transition-colors"
                      aria-label="Remove from cart"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                <div className="text-right">
                  <p className="text-lg font-medium">
                    {formatPrice(item.product.price * item.quantity)}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-1">
            <div className="bg-[#f7f5f2] p-8 sticky top-24">
              <h2 className="text-xl font-medium mb-6">Order Summary</h2>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Subtotal</span>
                  <span>{formatPrice(total)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Shipping</span>
                  <span>Calculated at checkout</span>
                </div>
              </div>

              <div className="border-t border-gray-300 pt-4 mb-6">
                <div className="flex justify-between text-lg font-medium">
                  <span>Total</span>
                  <span>{formatPrice(total)}</span>
                </div>
              </div>

              <button className="w-full bg-[#1a1a1a] text-white py-4 text-sm uppercase tracking-wider hover:bg-gray-800 transition-colors mb-4">
                Proceed to Checkout
              </button>

              <Link
                to="/our-products"
                className="block text-center text-sm uppercase tracking-wider hover:opacity-60 transition-opacity"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

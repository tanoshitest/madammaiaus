import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus, CheckCircle, CreditCard, ChevronLeft } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { formatPrice } from '../utils/format';
import FreeShippingProgress from '../components/FreeShippingProgress';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

type CheckoutStep = 'cart' | 'checkout' | 'success';

export default function CartPage() {
  const { items, total, removeFromCart, updateQuantity, clearCart } = useCart();
  const [step, setStep] = useState<CheckoutStep>('cart');

  const handleSubmitCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    clearCart();
    setStep('success');
    window.scrollTo(0, 0);
  };

  if (step === 'success') {
    return (
      <div className="min-h-screen bg-white pt-24 flex items-center justify-center px-6">
        <div className="max-w-md w-full text-center py-16">
          <div className="flex justify-center mb-8">
            <div className="w-24 h-24 bg-[#f8f6f3] rounded-full flex items-center justify-center">
              <CheckCircle className="w-12 h-12 text-[#1a1a1a]" strokeWidth={1.5} />
            </div>
          </div>
          <h1 
            className="text-4xl font-serif mb-6" 
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Thank You!
          </h1>
          <p className="text-gray-600 mb-12 leading-relaxed">
            Your order has been placed successfully. We've sent an email confirmation to your inbox. 
            Enjoy the authentic flavors of Madame Mai!
          </p>
          <Link
            to="/"
            className="inline-block bg-[#1a1a1a] text-white px-10 py-4 text-sm uppercase tracking-wider hover:bg-gray-800 transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-white pt-24">
        <div className="max-w-7xl mx-auto px-6 py-16 text-center">
          <h1
            className="text-4xl md:text-5xl font-serif mb-12"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Your Cart
          </h1>
          <div className="py-16">
            <p className="text-gray-600 mb-8">Your cart is currently empty</p>
            <Link
              to="/our-products"
              className="inline-block bg-[#1a1a1a] text-white px-8 py-4 text-sm uppercase tracking-wider hover:bg-gray-800 transition-colors"
            >
              Shop Our Products
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (step === 'checkout') {
    return (
      <div className="min-h-screen bg-white pt-24">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <button
            onClick={() => setStep('cart')}
            className="flex items-center space-x-2 text-sm uppercase tracking-wider mb-12 hover:opacity-60 transition-opacity"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Return to Cart</span>
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2">
              <form id="checkout-form" onSubmit={handleSubmitCheckout} className="space-y-12">
                <section>
                  <h2 className="text-2xl font-serif mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
                    Customer Information
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="md:col-span-2">
                      <label htmlFor="email" className="block text-sm mb-2">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-[#1a1a1a] transition-colors"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="firstName" className="block text-sm mb-2">First Name</label>
                      <input
                        type="text"
                        id="firstName"
                        className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-[#1a1a1a] transition-colors"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm mb-2">Last Name</label>
                      <input
                        type="text"
                        id="lastName"
                        className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-[#1a1a1a] transition-colors"
                        required
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label htmlFor="address" className="block text-sm mb-2">Shipping Address</label>
                      <input
                        type="text"
                        id="address"
                        className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-[#1a1a1a] transition-colors"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="city" className="block text-sm mb-2">City</label>
                      <input
                        type="text"
                        id="city"
                        className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-[#1a1a1a] transition-colors"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="postcode" className="block text-sm mb-2">Postcode</label>
                      <input
                        type="text"
                        id="postcode"
                        className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-[#1a1a1a] transition-colors"
                        required
                      />
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-serif mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
                    Payment Method
                  </h2>
                  <div className="bg-[#f8f6f3] p-8 space-y-6">
                    <div>
                      <label htmlFor="cardName" className="block text-sm mb-2 uppercase tracking-wide">Name on Card</label>
                      <input
                        type="text"
                        id="cardName"
                        className="w-full px-4 py-3 border border-gray-300 bg-white focus:outline-none focus:border-[#1a1a1a] transition-colors"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="cardNumber" className="block text-sm mb-2 uppercase tracking-wide">Card Number</label>
                      <div className="relative">
                        <input
                          type="text"
                          id="cardNumber"
                          placeholder="0000 0000 0000 0000"
                          className="w-full px-4 py-3 border border-gray-300 bg-white focus:outline-none focus:border-[#1a1a1a] transition-colors pr-12"
                          required
                        />
                        <CreditCard className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="expiry" className="block text-sm mb-2 uppercase tracking-wide">Expiry Date</label>
                        <input
                          type="text"
                          id="expiry"
                          placeholder="MM / YY"
                          className="w-full px-4 py-3 border border-gray-300 bg-white focus:outline-none focus:border-[#1a1a1a] transition-colors"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="cvv" className="block text-sm mb-2 uppercase tracking-wide">CVV</label>
                        <input
                          type="text"
                          id="cvv"
                          placeholder="123"
                          className="w-full px-4 py-3 border border-gray-300 bg-white focus:outline-none focus:border-[#1a1a1a] transition-colors"
                          required
                        />
                      </div>
                    </div>
                  </div>
                </section>
              </form>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-[#f7f5f2] p-8 sticky top-24">
                <h2 className="text-xl font-medium mb-6">Order Summary</h2>

                <div className="space-y-4 mb-8">
                  {items.map((item) => (
                    <div key={item.product.id} className="flex justify-between text-sm">
                      <span className="text-gray-600">
                        {item.product.name} x {item.quantity}
                      </span>
                      <span className="font-medium">{formatPrice(item.product.price * item.quantity)}</span>
                    </div>
                  ))}
                  <div className="pt-4 border-t border-gray-300 flex justify-between font-medium text-lg">
                    <span>Total Amount</span>
                    <span>{formatPrice(total)}</span>
                  </div>
                </div>

                <button
                  type="submit"
                  form="checkout-form"
                  className="w-full bg-[#1a1a1a] text-white py-4 text-sm uppercase tracking-wider hover:bg-gray-800 transition-colors mb-4"
                >
                  Pay & Complete Order
                </button>
                <p className="text-[10px] text-gray-400 text-center uppercase tracking-widest leading-relaxed">
                  Secure encrypted checkout
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white pt-32">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h1
          className="text-4xl md:text-5xl font-serif mb-12"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Your Cart
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <FreeShippingProgress />
            {items.map((item) => (
              <div
                key={item.product.id}
                className="flex gap-6 border-b border-gray-200 py-6 first:pt-0"
              >
                <div
                  className="w-32 h-32 flex-shrink-0"
                  style={{
                    backgroundImage: item.product.image.startsWith('linear-gradient') ? item.product.image : `url(${item.product.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                />

                <div className="flex-1">
                  <Link
                    to={`/our-products/${item.product.slug}`}
                    className="text-lg font-medium hover:opacity-60 transition-opacity underline-offset-4 hover:underline"
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
                      <span className="px-4 py-2 min-w-[3rem] text-center font-medium">
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
                      className="text-red-600 hover:text-red-700 transition-colors p-2"
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
                  <span className="text-xs uppercase tracking-wider text-gray-500">Calculated at checkout</span>
                </div>
              </div>

              <div className="border-t border-gray-300 pt-4 mb-6">
                <div className="flex justify-between text-lg font-medium">
                  <span>Total</span>
                  <span>{formatPrice(total)}</span>
                </div>
              </div>

              <button 
                onClick={() => setStep('checkout')}
                className="w-full bg-[#1a1a1a] text-white py-4 text-sm uppercase tracking-wider hover:bg-gray-800 transition-colors mb-4"
              >
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

        {/* Cross-sell Section */}
        <div className="mt-24 pt-24 border-t border-gray-100">
          <h2 className="text-3xl font-serif mb-12 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>
            Frequently Bought Together
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products
              .filter(p => !items.find(item => item.product.id === p.id))
              .slice(0, 4)
              .map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

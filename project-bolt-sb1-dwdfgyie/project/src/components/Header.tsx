import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../contexts/CartContext';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { itemCount } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Our Story', path: '/our-story' },
    { name: 'Our Products', path: '/our-products' },
    { name: 'Contact', path: '/contact' },
    { name: 'Blog', path: '/blog' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-2xl font-serif tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
              Madame Mai
            </Link>

            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map(link => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-sm uppercase tracking-wider hover:opacity-60 transition-opacity"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            <div className="flex items-center space-x-4">
              <Link to="/cart" className="relative">
                <ShoppingBag className="w-6 h-6" />
                {itemCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {itemCount}
                  </span>
                )}
              </Link>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-white z-40 pt-20 md:hidden">
          <nav className="flex flex-col items-center space-y-8 py-12">
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                className="text-lg uppercase tracking-wider"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}

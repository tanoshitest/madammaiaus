import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../contexts/CartContext';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { itemCount } = useCart();
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 h-24 flex items-center ${
          isHomePage && !isScrolled
            ? 'bg-transparent border-transparent'
            : 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center group py-1">
              <img
                src="/logo.png"
                alt="Madame Mai Logo"
                className="w-14 h-auto object-contain brightness-0"
              />
            </Link>
 
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map(link => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-[9px] uppercase tracking-[0.2em] text-black hover:opacity-50 transition-all duration-300 font-medium"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            <div className="flex items-center space-x-6">
              <Link to="/cart" className="relative text-black hover:opacity-60 transition-opacity">
                <ShoppingBag className="w-4 h-4" />
                {itemCount > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 bg-[#1a1a1a] text-white text-[7px] rounded-full w-3.5 h-3.5 flex items-center justify-center font-bold">
                    {itemCount}
                  </span>
                )}
              </Link>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden text-black"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
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
                className="text-[10px] uppercase tracking-widest text-[#1a1a1a]"
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

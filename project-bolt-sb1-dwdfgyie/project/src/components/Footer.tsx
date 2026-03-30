import { Link } from 'react-router-dom';
import { Instagram, Facebook } from 'lucide-react';
import Newsletter from './Newsletter';

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-serif mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Madame Mai
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Handcrafted frozen Vietnamese soup bowls. Real ingredients, real fast, really good.
            </p>
          </div>

          <div>
            <h4 className="text-sm uppercase tracking-wider mb-4">Navigation</h4>
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="text-gray-400 hover:text-white transition-colors text-sm">
                Home
              </Link>
              <Link to="/our-products" className="text-gray-400 hover:text-white transition-colors text-sm">
                Our Products
              </Link>
              <Link to="/contact" className="text-gray-400 hover:text-white transition-colors text-sm">
                Contact
              </Link>
              <Link to="/blog" className="text-gray-400 hover:text-white transition-colors text-sm">
                Blog
              </Link>
            </nav>
          </div>

          <div>
            <h4 className="text-sm uppercase tracking-wider mb-4">Contact</h4>
            <div className="text-gray-400 text-sm space-y-2">
              <p>56a Lara Way</p>
              <p>Campbellfield VIC 3061, Australia</p>
              <p className="mt-4">Phone: 0450 218 007</p>
              <p>Email: info@madame-mai.com.au</p>
            </div>
          </div>

          <div>
            <h4 className="text-sm uppercase tracking-wider mb-4">Follow Us</h4>
            <div className="flex space-x-4 mb-6">
              <a
                href="https://instagram.com/madamemai_au"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-60 transition-opacity"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="https://facebook.com/madamemaiau"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-60 transition-opacity"
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="https://tiktok.com/@_madame_mai"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-60 transition-opacity"
                aria-label="TikTok"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <Newsletter />

        <div className="border-t border-gray-800 mt-12 pt-8">
          <p className="text-gray-400 text-sm mb-4">
            We acknowledge the Traditional Owners of the land where we work and live. We pay our respects to Elders past, present and emerging.
          </p>
          <p className="text-gray-400 text-sm">
            © 2026 All Rights Reserved Madame Mai
          </p>
        </div>
      </div>
    </footer>
  );
}

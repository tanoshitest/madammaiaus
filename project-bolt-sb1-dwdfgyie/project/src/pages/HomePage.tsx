import { Link } from 'react-router-dom';
import { Instagram, Facebook } from 'lucide-react';
import Marquee from '../components/Marquee';
import Newsletter from '../components/Newsletter';
import { products } from '../data/products';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <Marquee text="Snap • Heat • Eat" variant="dark" />
      <ProductShowcase />
      <ValuePropositions />
      <Marquee text="Comfort in a Bowl, Ready in 10 Mins" variant="light" />
      <SocialFeed />
      <NewsletterSection />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-gradient-to-br from-amber-600 to-orange-700"
        style={{
          backgroundImage: 'linear-gradient(135deg, #d97706 0%, #ea580c 100%)',
        }}
      />
      <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
        <p className="text-sm uppercase tracking-[0.3em] mb-6">
          Handcrafted Frozen Soup Bowls
        </p>
        <h1
          className="text-5xl md:text-7xl font-serif mb-8 leading-tight"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Real Ingredients. Real Fast. Really Good.
        </h1>
        <Link
          to="/our-products"
          className="inline-block bg-white text-[#1a1a1a] px-8 py-4 text-sm uppercase tracking-wider hover:bg-gray-100 transition-colors"
        >
          Our Products
        </Link>
      </div>
    </section>
  );
}

function ProductShowcase() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h2
          className="text-4xl md:text-5xl font-serif text-center mb-16"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Discover our Range!
        </h2>
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
                <h3 className="text-xl font-medium mb-3 leading-tight">
                  {product.name}
                </h3>
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
    </section>
  );
}

function ValuePropositions() {
  const values = [
    {
      title: 'Restaurant Quality. Home Convenience',
      description:
        'Enjoy authentic Vietnamese flavours crafted with traditional recipes, ready in minutes from your freezer to your table.',
    },
    {
      title: 'Made with Heart, Served with Soul',
      description:
        'Every bowl is handcrafted with love, using real ingredients and time-honoured cooking methods passed down through generations.',
    },
    {
      title: 'Authentic Recipe',
      description:
        'We stay true to traditional Vietnamese cooking techniques, ensuring every spoonful delivers the genuine taste of Vietnam.',
    },
  ];

  return (
    <section className="py-24 px-6 bg-[#f7f5f2]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {values.map((value, index) => (
            <div key={index} className="text-center">
              <h3 className="text-xl font-medium mb-4">{value.title}</h3>
              <p className="text-gray-600 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SocialFeed() {
  const socialImages = Array(6).fill(null);

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2
          className="text-4xl md:text-5xl font-serif mb-4"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          What's the latest?
        </h2>
        <p className="text-sm uppercase tracking-[0.3em] mb-12">Follow Us For More</p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
          {socialImages.map((_, index) => (
            <div
              key={index}
              className="aspect-square bg-gradient-to-br from-gray-200 to-gray-300"
            />
          ))}
        </div>

        <div className="flex justify-center space-x-6">
          <a
            href="https://instagram.com/madamemai_au"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 hover:opacity-60 transition-opacity"
          >
            <Instagram className="w-5 h-5" />
            <span className="text-sm">@madamemai_au</span>
          </a>
          <a
            href="https://facebook.com/madamemaiau"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 hover:opacity-60 transition-opacity"
          >
            <Facebook className="w-5 h-5" />
            <span className="text-sm">madamemaiau</span>
          </a>
          <a
            href="https://tiktok.com/@_madame_mai"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 hover:opacity-60 transition-opacity"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
            </svg>
            <span className="text-sm">@_madame_mai</span>
          </a>
        </div>
      </div>
    </section>
  );
}

function NewsletterSection() {
  return (
    <section className="py-24 px-6 bg-[#f7f5f2]">
      <div className="max-w-7xl mx-auto">
        <Newsletter />
      </div>
    </section>
  );
}

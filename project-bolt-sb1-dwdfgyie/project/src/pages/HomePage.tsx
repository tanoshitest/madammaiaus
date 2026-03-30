import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, ArrowRight } from 'lucide-react';
import Marquee from '../components/Marquee';
import Toast from '../components/Toast';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import { blogPosts } from '../data/blogPosts';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <Marquee text="Snap • Heat • Eat" variant="dark" />
      <ProductShowcase />
      <ValuePropositions />
      <Marquee text="Comfort in a Bowl, Ready in 10 Mins" variant="light" />
      <SocialFeed />
      <BlogSection />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative h-[60vh] md:h-screen flex items-center justify-center overflow-hidden pt-12 mt-12 bg-white">
      <Link 
        to="/our-products" 
        className="absolute inset-0 block w-full h-full group"
      >
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-[1.02]"
          style={{
            backgroundImage: 'url(/banner.png)',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center'
          }}
        />
        <div className="sr-only">
          <h1>Madame Mai - Comfort in a Bowl, Ready in 10 Minutes</h1>
          <p>Real Ingredients. Real Fast. Really Good. Snap, Heat, Eat!</p>
        </div>
      </Link>
    </section>
  );
}

function ProductShowcase() {
  const [showToast, setShowToast] = useState(false);

  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <h2
          className="text-4xl md:text-5xl font-serif text-center mb-16"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Discover our Range!
        </h2>
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

function BlogSection() {
  const featuredPost = blogPosts[0];
  const sidePosts = blogPosts.slice(1, 6);

  return (
    <section className="py-24 px-6 bg-[#f7f5f2]">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] mb-4">Madame Mai Stories</p>
            <h2 
              className="text-4xl md:text-5xl font-serif" 
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Latest from the Kitchen
            </h2>
          </div>
          <Link 
            to="/blog" 
            className="hidden md:flex items-center space-x-2 text-sm uppercase tracking-wider hover:opacity-60 transition-opacity pb-2"
          >
            <span>View All</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Main Post */}
          <div className="lg:col-span-2">
            <Link to={`/blog/${featuredPost.slug}`} className="group flex flex-col h-full">
              <div 
                className="aspect-[16/9] mb-8 overflow-hidden"
                style={{ background: featuredPost.image }}
              >
                <div className="w-full h-full transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="flex-grow">
                <p className="text-xs uppercase tracking-wider text-gray-500 mb-4">{featuredPost.date}</p>
                <h3 className="text-3xl font-serif mb-4 group-hover:opacity-70 transition-opacity">
                  {featuredPost.title}
                </h3>
                <p className="text-gray-600 leading-relaxed max-w-2xl mb-6">
                  {featuredPost.excerpt}
                </p>
              </div>
              <span className="inline-block text-sm uppercase tracking-wider border-b-2 border-black pb-1 self-start">
                Read Full Story
              </span>
            </Link>
          </div>
 
          {/* Side Posts Stack */}
          <div className="flex flex-col justify-between space-y-8 lg:space-y-0 py-1">
            {sidePosts.map((post) => (
              <Link key={post.id} to={`/blog/${post.slug}`} className="group flex gap-4 items-start">
                <div 
                  className="w-20 h-20 flex-shrink-0 overflow-hidden"
                  style={{ background: post.image }}
                >
                   <div className="w-full h-full transition-transform duration-500 group-hover:scale-110" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[9px] uppercase tracking-widest text-gray-400 mb-1.5">{post.date}</p>
                  <h4 className="text-sm font-medium leading-tight group-hover:opacity-70 transition-opacity whitespace-normal line-clamp-2">
                    {post.title}
                  </h4>
                  <span className="inline-block text-[9px] uppercase tracking-widest mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    Read More +
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <Link 
          to="/blog" 
          className="flex md:hidden items-center justify-center space-x-2 text-sm uppercase tracking-wider border border-black py-4 mt-12"
        >
          <span>View All Stories</span>
        </Link>
      </div>
    </section>
  );
}

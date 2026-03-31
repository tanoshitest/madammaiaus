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
      <div className="bg-[#1a1a1a] py-6 overflow-hidden">
        <Marquee text="Snap • Heat • Eat" variant="dark" />
      </div>
      <ProductShowcase />
      
      {/* Made in SA Badge Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6 flex justify-center">
          <div className="flex items-center space-x-6 border-y border-gray-100 py-8 px-12 group hover:border-black transition-colors duration-500">
            <div className="w-20 h-20 bg-[#f7f5f2] rounded-full flex items-center justify-center p-3">
              <img 
                src="/logo.png" 
                alt="South Australian Made Badge - Supporting Local Adelaide Businesses" 
                className="w-full h-auto brightness-0 opacity-80 group-hover:opacity-100 transition-opacity"
              />
            </div>
            <div>
              <h3 className="text-sm uppercase tracking-[0.3em] font-bold mb-1">Proudly South Australian</h3>
              <p className="text-gray-500 text-xs uppercase tracking-widest">Handcrafted in Adelaide since 2021</p>
            </div>
          </div>
        </div>
      </section>

      <ValuePropositions />
      
      {/* Testimonials Section */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-[0.3em] mb-4">Our Community</p>
            <h2 className="text-4xl md:text-5xl font-serif" style={{ fontFamily: "'Playfair Display', serif" }}>
              What You're Saying
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                name: 'A Zhu',
                role: 'Verified Customer',
                quote: 'The Phở Bò is a game-changer. The broth has that deep, authentic flavor I thought I could only get in a restaurant. It truly is comfort in a bowl.',
              },
              {
                name: 'C Le',
                role: 'Verified Customer',
                quote: 'Perfect for busy weekdays. I love how I can have a high-quality Bún Bò Huế ready in just 10 minutes. The quality of ingredients is outstanding.',
              },
              {
                name: 'D Romeo',
                role: 'Verified Customer',
                quote: 'Finally, a frozen meal that actually tastes fresh! The Laksa is incredibly aromatic and creamy. Madame Mai has become a staple in our household.',
              },
            ].map((testimonial, i) => (
              <div key={i} className="bg-[#f7f5f2] p-10 flex flex-col justify-between group hover:bg-white transition-all duration-500 border border-transparent hover:border-gray-100 shadow-sm hover:shadow-xl">
                <div>
                  <div className="flex text-black mb-6">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-lg">★</span>
                    ))}
                  </div>
                  <p className="text-gray-700 leading-relaxed italic mb-8">"{testimonial.quote}"</p>
                </div>
                <div>
                  <p className="font-bold uppercase tracking-widest text-xs mb-1">{testimonial.name}</p>
                  <p className="text-[10px] text-gray-400 uppercase tracking-widest">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="bg-[#f7f5f2] py-6 overflow-hidden border-y border-gray-100">
        <Marquee text="Comfort in a Bowl, Ready in 10 Mins" variant="light" />
      </div>
      <SocialFeed />
      <BlogSection />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative h-[60vh] md:h-screen flex items-end justify-center overflow-hidden bg-white pb-16 lg:pb-24">
      <div className="absolute inset-0 block w-full h-full">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/banner.png)',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center'
          }}
          aria-label="Madame Mai Banner - Authentic Vietnamese Frozen Soup Bowls Background"
        />
        <div className="sr-only">
          <h1>Madame Mai - Comfort in a Bowl, Ready in 10 Minutes</h1>
          <p>Real Ingredients. Real Fast. Really Good. Snap, Heat, Eat! Handcrafted in Adelaide, South Australia.</p>
        </div>
      </div>
      
      <div className="relative z-10 flex flex-col md:flex-row gap-4 px-6 mb-8 lg:mb-20">
        <Link
          to="/our-products"
          className="bg-[#1a1a1a] text-white px-10 py-4 text-xs uppercase tracking-[0.25em] font-medium hover:bg-gray-800 transition-all duration-300 min-w-[200px] text-center"
        >
          Our Products
        </Link>
        <Link
          to="/our-story"
          className="bg-white/90 backdrop-blur-sm border border-black text-[#1a1a1a] px-10 py-4 text-xs uppercase tracking-[0.25em] font-medium hover:bg-black hover:text-white transition-all duration-300 min-w-[200px] text-center"
        >
          Our Story
        </Link>
      </div>
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
  const socialImages = ['/1.jpg', '/2.jpg', '/3.jpg', '/4.jpg', '/5.jpg', '/6.jpg'];
 
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
          {socialImages.map((image, index) => (
            <div
              key={index}
              className="aspect-square bg-center bg-cover transition-transform duration-500 hover:scale-[1.02]"
              style={{ 
                backgroundImage: `url(${image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center center'
              }}
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
                className="aspect-[16/9] mb-8 overflow-hidden bg-gray-100"
                style={{ 
                  backgroundImage: `url(${featuredPost.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center center'
                }}
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
                  className="w-20 h-20 flex-shrink-0 overflow-hidden bg-gray-100"
                  style={{ 
                    backgroundImage: `url(${post.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center center'
                  }}
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

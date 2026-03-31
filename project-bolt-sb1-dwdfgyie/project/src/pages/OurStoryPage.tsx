import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs';

export default function OurStoryPage() {
  return (
    <div className="min-h-screen bg-white pt-32">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <Breadcrumbs />
        
        <h1
          className="text-5xl md:text-6xl font-serif mb-12 text-center"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Our Story
        </h1>

        <div className="prose prose-lg max-w-none">
          <div 
            className="aspect-video mb-16 overflow-hidden bg-gray-100"
            style={{ 
              backgroundImage: 'url(/5.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
            <div>
              <p className="text-xl text-gray-900 leading-relaxed font-medium mb-6">
                Born in the heart of Adelaide, Madame Mai is the realization of a lifelong passion for authentic Vietnamese flavors.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Founded by Kien Nguyen in early 2021, our journey began during the height of the COVID-19 pandemic. With restaurants closed and travel restricted, Kien saw a profound need: to bring the comforting, soul-warming experience of a Saigonese street stall directly to Australian dinner tables.
              </p>
            </div>
            <div className="bg-[#f7f5f2] p-8 md:p-12">
              <h2 className="text-2xl font-serif mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>The Founder's Vision</h2>
              <p className="text-gray-600 leading-relaxed italic">
                "I remember the smell of my grandmother's kitchen in Saigon—the way the lemongrass and star anise would fill the house. During 2021, when we were all staying home, I wanted to recreate that same sense of comfort and home for everyone in Adelaide."
              </p>
              <p className="text-sm uppercase tracking-widest mt-6 font-semibold">— Kien Nguyen, Founder</p>
            </div>
          </div>

          <div className="space-y-12 text-gray-600 leading-relaxed max-w-3xl mx-auto text-center">
            <p>
              Every recipe in our collection is a labor of love, honed over decades and passed down through generations. We don't believe in shortcuts. Our broths are simmered for 24+ hours, ensuring that every bowl delivers the same depth of flavor you'd find in a traditional high-end Vietnamese restaurant.
            </p>
            
            <h2 className="text-3xl font-serif text-black mt-24 mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>Restaurant Quality, Home Convenience</h2>
            
            <p>
              We've perfected the art of flash-freezing our soup bowls to lock in the absolute freshness of every ingredient. From our signature Phở Bò to our creamy Laksa, Madame Mai provides a premium dining experience that fits seamlessly into your modern, busy lifestyle.
            </p>

            <div className="pt-12">
              <Link 
                to="/our-products" 
                className="inline-flex items-center space-x-3 bg-[#1a1a1a] text-white px-10 py-5 text-sm uppercase tracking-[0.2em] hover:bg-gray-800 transition-all"
              >
                <span>Experience the Flavor</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

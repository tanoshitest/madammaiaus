import { MapPin, Phone, Mail } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white pt-24">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h1
          className="text-5xl md:text-6xl font-serif mb-8 text-center"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Get In Touch
        </h1>
        <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
          Have a question or want to learn more about our products? We'd love to hear from you.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-medium mb-8">Contact Information</h2>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-medium mb-1">Address</h3>
                  <p className="text-gray-600">
                    56a Lara Way
                    <br />
                    Campbellfield VIC 3061, Australia
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-medium mb-1">Phone</h3>
                  <a
                    href="tel:0450218007"
                    className="text-gray-600 hover:opacity-60 transition-opacity"
                  >
                    0450 218 007
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Mail className="w-6 h-6 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-medium mb-1">Email</h3>
                  <a
                    href="mailto:info@madame-mai.com.au"
                    className="text-gray-600 hover:opacity-60 transition-opacity"
                  >
                    info@madame-mai.com.au
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-medium mb-8">Send us a message</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-[#1a1a1a] transition-colors"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-[#1a1a1a] transition-colors"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-[#1a1a1a] transition-colors resize-none"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#1a1a1a] text-white py-4 text-sm uppercase tracking-wider hover:bg-gray-800 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

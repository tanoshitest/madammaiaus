export default function OurStoryPage() {
  return (
    <div className="min-h-screen bg-white pt-24">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1
          className="text-5xl md:text-6xl font-serif mb-8 text-center"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Our Story
        </h1>

        <div className="prose prose-lg max-w-none">
          <div className="aspect-video bg-gradient-to-br from-amber-600 to-orange-700 mb-12" />

          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            At Madame Mai, we believe that authentic Vietnamese cuisine should be accessible to everyone, without compromising on quality or flavour.
          </p>

          <p className="text-gray-600 leading-relaxed mb-6">
            Our journey began with a simple mission: to bring the rich, comforting flavours of traditional Vietnamese soup bowls to Australian homes. Each recipe has been carefully crafted to honour time-honoured cooking methods while fitting seamlessly into modern lifestyles.
          </p>

          <p className="text-gray-600 leading-relaxed mb-6">
            We handcraft every bowl using real ingredients, traditional spices, and authentic recipes passed down through generations. From the aromatic lemongrass in our Bun Bo Hue to the delicate clear broth of our Hu Tieu, every detail matters.
          </p>

          <h2 className="text-3xl font-serif mt-16 mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Our Philosophy
          </h2>

          <p className="text-gray-600 leading-relaxed mb-6">
            Restaurant quality shouldn't require restaurant effort. That's why we've perfected the art of frozen soup bowls that deliver exceptional taste in just minutes. Simply heat and enjoy authentic Vietnamese flavours whenever the craving strikes.
          </p>

          <p className="text-gray-600 leading-relaxed mb-6">
            Based in South Australia, we're proud to serve communities across the country with food that brings people together, one bowl at a time.
          </p>
        </div>
      </div>
    </div>
  );
}

import { Link } from 'react-router-dom';

export default function BlogPage() {
  const posts = [
    {
      id: '1',
      slug: 'perfect-pho',
      title: 'The Art of Perfect Pho',
      excerpt: 'Discover the secrets behind creating the perfect bowl of Vietnamese Pho.',
      image: 'linear-gradient(135deg, #8b4513 0%, #a0522d 100%)',
      date: 'March 15, 2026',
    },
    {
      id: '2',
      slug: 'laksa-origins',
      title: 'The Origins of Laksa',
      excerpt: 'Exploring the rich history and cultural significance of this beloved Southeast Asian dish.',
      image: 'linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)',
      date: 'March 10, 2026',
    },
  ];

  return (
    <div className="min-h-screen bg-white pt-24">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h1
          className="text-5xl md:text-6xl font-serif mb-8 text-center"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Blog
        </h1>
        <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
          Stories, recipes, and insights from the world of Vietnamese cuisine.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article key={post.id} className="group">
              <Link to={`/blog/${post.slug}`}>
                <div
                  className="aspect-[4/3] mb-6 overflow-hidden transition-transform duration-300 group-hover:scale-105"
                  style={{
                    background: post.image,
                  }}
                />
                <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">
                  {post.date}
                </p>
                <h2 className="text-2xl font-serif mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {post.title}
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {post.excerpt}
                </p>
                <span className="inline-block text-sm uppercase tracking-wider border-b-2 border-[#1a1a1a] pb-1 group-hover:opacity-60 transition-opacity">
                  Read More
                </span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

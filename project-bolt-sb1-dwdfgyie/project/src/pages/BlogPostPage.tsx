import { useParams, Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';
import Breadcrumbs from '../components/Breadcrumbs';

export default function BlogPostPage() {
  const { slug } = useParams();

  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-white pt-32 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl mb-4">Post not found</h1>
          <Link to="/blog" className="text-sm uppercase tracking-wider underline">
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white pt-32">
      <article className="max-w-4xl mx-auto px-6 py-16">
        <Breadcrumbs items={[
          { name: 'Blog', path: '/blog' },
          { name: post.title }
        ]} />

        <p className="text-xs uppercase tracking-wider text-gray-500 mb-4">
          {post.date}
        </p>

        <h1
          className="text-4xl md:text-5xl font-serif mb-8"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          {post.title}
        </h1>

        <div
          className="aspect-video mb-12 bg-gray-100"
          style={{
            backgroundImage: `url(${post.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center'
          }}
        />

        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 leading-relaxed">{post.content}</p>
        </div>
      </article>
    </div>
  );
}

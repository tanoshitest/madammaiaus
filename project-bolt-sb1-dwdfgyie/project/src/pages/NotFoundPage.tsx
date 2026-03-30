import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6">
      <div className="text-center">
        <h1
          className="text-6xl font-serif mb-4"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          404
        </h1>
        <p className="text-xl text-gray-600 mb-8">Page not found</p>
        <Link
          to="/"
          className="inline-block bg-[#1a1a1a] text-white px-8 py-4 text-sm uppercase tracking-wider hover:bg-gray-800 transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}

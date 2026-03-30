import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setStatus('success');
      setEmail('');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <div className="max-w-md mx-auto text-center my-12">
      <h3 className="text-sm uppercase tracking-wider mb-4">Stay Updated</h3>
      <p className="text-gray-400 text-sm mb-6">
        Drop your email address to receive news and updates. No spam!
      </p>
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email address"
          required
          className="flex-1 px-4 py-3 bg-white/10 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-white transition-colors"
        />
        <button
          type="submit"
          className="px-6 py-3 bg-white text-[#1a1a1a] font-medium hover:bg-gray-200 transition-colors"
        >
          Sign Up
        </button>
      </form>
      {status === 'success' && (
        <p className="text-green-400 text-sm mt-2">Thanks for subscribing!</p>
      )}
      <p className="text-gray-500 text-xs mt-4">We respect your privacy.</p>
    </div>
  );
}

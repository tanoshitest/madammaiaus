interface MarqueeProps {
  text: string;
  variant?: 'dark' | 'light';
}

export default function Marquee({ text, variant = 'dark' }: MarqueeProps) {
  const isDark = variant === 'dark';
  const repeatedText = Array(20).fill(text).join(' • ');

  return (
    <div className={`overflow-hidden py-6 ${isDark ? 'bg-[#1a1a1a] text-white' : 'bg-white text-[#1a1a1a]'}`}>
      <div className="animate-marquee whitespace-nowrap">
        <span className="text-sm uppercase tracking-[0.3em] inline-block">
          {repeatedText}
        </span>
      </div>
      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
      `}</style>
    </div>
  );
}

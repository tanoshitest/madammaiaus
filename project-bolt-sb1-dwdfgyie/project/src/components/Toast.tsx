import { useEffect, useState } from 'react';
import { Check } from 'lucide-react';

interface ToastProps {
  message: string;
  show: boolean;
  onClose: () => void;
}

export default function Toast({ message, show, onClose }: ToastProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (show) {
      setIsVisible(true);
      const timer = setTimeout(() => {
        setIsVisible(false);
        setTimeout(onClose, 300);
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  if (!show && !isVisible) return null;

  return (
    <div
      className={`fixed bottom-8 right-8 bg-[#1a1a1a] text-white px-6 py-4 rounded-lg shadow-2xl flex items-center space-x-3 transition-all duration-300 z-50 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
    >
      <div className="bg-white rounded-full p-1">
        <Check className="w-4 h-4 text-[#1a1a1a]" />
      </div>
      <span className="text-sm">{message}</span>
    </div>
  );
}

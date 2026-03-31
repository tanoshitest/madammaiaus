import { useCart } from '../contexts/CartContext';
import { Truck } from 'lucide-react';
import { formatPrice } from '../utils/format';

export default function FreeShippingProgress() {
  const { total, freeShippingThreshold, remainingForFreeShipping } = useCart();
  const percentage = Math.min(100, ( (total / 100) / freeShippingThreshold) * 100);
  
  const isFree = remainingForFreeShipping <= 0;

  return (
    <div className="bg-white border border-gray-100 p-6 mb-8 animate-in fade-in slide-in-from-top-4 duration-500">
      <div className="flex items-center space-x-3 mb-4">
        <div className={`p-2 rounded-full ${isFree ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-600'}`}>
          <Truck className="w-4 h-4" />
        </div>
        <div>
          <p className="text-sm font-medium">
            {isFree ? (
              <span className="text-green-600">You've earned FREE shipping!</span>
            ) : (
              <span>Spend {formatPrice(remainingForFreeShipping * 100)} more for free shipping</span>
            )}
          </p>
          {!isFree && (
            <p className="text-[10px] text-gray-500 uppercase tracking-wider mt-0.5">
              Free delivery on all orders over {formatPrice(freeShippingThreshold * 100)}
            </p>
          )}
        </div>
      </div>
      
      <div className="relative h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
        <div 
          className={`absolute top-0 left-0 h-full transition-all duration-1000 ease-out rounded-full ${
            isFree ? 'bg-green-500' : 'bg-[#1a1a1a]'
          }`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}

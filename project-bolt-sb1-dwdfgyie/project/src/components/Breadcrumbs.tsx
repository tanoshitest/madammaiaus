import { Link, useLocation } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbsProps {
  items?: { name: string; path?: string }[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  const location = useLocation();
  
  // If items are not provided, try to generate from path
  const pathnames = location.pathname.split('/').filter((x) => x);
  
  const crumbItems = items || pathnames.map((value, index) => {
    const last = index === pathnames.length - 1;
    const to = `/${pathnames.slice(0, index + 1).join('/')}`;
    
    // Simple formatting: kebab-case to Title Case
    const name = value
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');

    return { name, path: last ? undefined : to };
  });

  if (location.pathname === '/') return null;

  return (
    <nav className="flex items-center space-x-2 text-[10px] uppercase tracking-widest text-gray-400 mb-8 overflow-x-auto whitespace-nowrap pb-2 md:pb-0">
      <Link to="/" className="hover:text-black transition-colors">Home</Link>
      
      {crumbItems.map((item, index) => (
        <div key={index} className="flex items-center space-x-2">
          <ChevronRight className="w-3 h-3" />
          {item.path ? (
            <Link to={item.path} className="hover:text-black transition-colors">
              {item.name}
            </Link>
          ) : (
            <span className="text-black font-medium">{item.name}</span>
          )}
        </div>
      ))}
    </nav>
  );
}

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './contexts/CartContext';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import OurStoryPage from './pages/OurStoryPage';
import ContactPage from './pages/ContactPage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';
import CartPage from './pages/CartPage';
import FAQPage from './pages/FAQPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen bg-white">
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/our-story" element={<OurStoryPage />} />
            <Route path="/our-products" element={<ProductsPage />} />
            <Route path="/our-products/:slug" element={<ProductDetailPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;

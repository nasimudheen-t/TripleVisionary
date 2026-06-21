import { useState, useEffect } from 'react';

// Layout components
import BackgroundEffects from './components/BackgroundEffects';
import Navbar from './sections/Navbar';
import Footer from './sections/Footer';

// Pages
import Home from './pages/Home';
import PortfolioPage from './pages/PortfolioPage';
import TestimonialsPage from './pages/TestimonialsPage';
import ContactPage from './pages/ContactPage';
import Addon from './pages/Addon';
import Asset from './pages/Asset';
import ServicesPage from './pages/ServicesPage';

export default function App() {
  // URL path routing
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  // Listen to browser Back/Forward navigation popstate events
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Central page changing coordinator
  const handlePageChange = (targetPath) => {
    // Standardize paths (e.g. if root '/', set to '/home')
    const destinationPath = targetPath === '/' ? '/home' : targetPath;
    const currentStdPath = currentPath === '/' ? '/home' : currentPath;

    if (currentStdPath === destinationPath) return;

    window.history.pushState({}, '', destinationPath);
    setCurrentPath(destinationPath);
    window.scrollTo(0, 0);
  };

  const getPageFromPath = (path) => {
    const normalizedPath = path === '/' ? '/home' : path;
    
    switch (normalizedPath) {
      case '/home':
        return <Home />;
      case '/addon':
        return <Addon onPageChange={handlePageChange} />;
      case '/assets':
        return <Asset onPageChange={handlePageChange} />;
      case '/process':
      case '/show':
        return <PortfolioPage onPageChange={handlePageChange} />;
      case '/services':
        return <ServicesPage onPageChange={handlePageChange} />;
      case '/testimonials':
        return <TestimonialsPage onPageChange={handlePageChange} />;
      case '/contact':
        return <ContactPage />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="relative min-h-screen select-none overflow-hidden bg-[#0B0F14]">
      <BackgroundEffects />
      <Navbar currentPath={currentPath} onPageChange={handlePageChange} />

      <div className="relative z-10">
        <main>
          {getPageFromPath(currentPath)}
        </main>
        <Footer />
      </div>
    </div>
  );
}

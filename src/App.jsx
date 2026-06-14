import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu } from 'lucide-react';

// Layout components
import BackgroundEffects from './components/BackgroundEffects';
import Navbar from './sections/Navbar';
import Footer from './sections/Footer';

// Pages
import Home from './pages/Home';
import ServicesPage from './pages/ServicesPage';
import WorkPage from './pages/WorkPage';
import ProcessPage from './pages/ProcessPage';
import AboutPage from './pages/AboutPage';
import TestimonialsPage from './pages/TestimonialsPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [bootText, setBootText] = useState('BOOTING VORTEX CORE...');
  
  // URL path routing
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Initial loader
  useEffect(() => {
    const textSequence = [
      { text: 'BOOTING VORTEX CORE...', delay: 0 },
      { text: 'LOADING STYLING ASSETS...', delay: 400 },
      { text: 'MOUNTING RENDERING ENGINES...', delay: 800 },
      { text: 'SYSTEM SECURED. CORE LOCKED.', delay: 1200 }
    ];

    textSequence.forEach((item) => {
      setTimeout(() => {
        setBootText(item.text);
      }, item.delay);
    });

    const loadTimer = setTimeout(() => {
      setLoading(false);
    }, 1700);

    return () => clearTimeout(loadTimer);
  }, []);

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

    // Start warp tunnel zoom transition
    setIsTransitioning(true);

    // Swap URL and path state at max zoom (550ms)
    setTimeout(() => {
      window.history.pushState({}, '', destinationPath);
      setCurrentPath(destinationPath);
      window.scrollTo(0, 0);
    }, 550);

    // End warp portal transition (1300ms)
    setTimeout(() => {
      setIsTransitioning(false);
    }, 1300);
  };

  const getPageFromPath = (path) => {
    const normalizedPath = path === '/' ? '/home' : path;
    
    switch (normalizedPath) {
      case '/home':
        return <Home />;
      case '/services':
        return <ServicesPage onPageChange={handlePageChange} />;
      case '/work':
        return <WorkPage onPageChange={handlePageChange} />;
      case '/process':
        return <ProcessPage onPageChange={handlePageChange} />;
      case '/about':
        return <AboutPage onPageChange={handlePageChange} />;
      case '/testimonials':
        return <TestimonialsPage onPageChange={handlePageChange} />;
      case '/contact':
        return <ContactPage />;
      default:
        return <Home />;
    }
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {loading ? (
          <motion.div
            key="preloader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed inset-0 z-50 bg-[#0B0F14] flex flex-col items-center justify-center font-mono text-xs text-[#00D4FF]"
          >
            <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />
            <div className="absolute inset-0 grid-bg-fine opacity-15 pointer-events-none" />
            
            <div className="relative mb-6">
              <Cpu size={40} className="text-[#00D4FF] animate-spin-slow" />
              <div className="absolute inset-0 bg-[#00D4FF]/30 blur-lg rounded-full animate-pulse" />
            </div>

            <div className="flex flex-col items-center gap-1.5 z-10">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00D4FF] animate-ping" />
                <span className="tracking-widest font-bold uppercase">{bootText}</span>
              </div>
              <span className="text-[9px] text-[#C6D3E1]/40 tracking-wider">SYSTEM DIAGNOSTICS // VORTEX_STUDIO</span>
            </div>

            <div className="w-48 h-1 bg-white/5 border border-white/10 rounded-full mt-6 overflow-hidden p-[1px] relative">
              <motion.div 
                className="h-full bg-[#00D4FF] rounded-full shadow-[0_0_8px_#00D4FF]"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative min-h-screen select-none overflow-hidden bg-[#0B0F14]"
          >
            {/* Base global particle, grids, and glows */}
            <BackgroundEffects />

            {/* Apple macOS style Floating Dock Navigation */}
            <Navbar currentPath={currentPath} onPageChange={handlePageChange} />

            {/* Center HUD Warp Portal transition overlay */}
            <AnimatePresence>
              {isTransitioning && (
                <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none">
                  {/* Dark mask backdrop */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 0.45, 0.45, 0] }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.25, ease: "easeInOut" }}
                    className="absolute inset-0 bg-[#0B0F14] pointer-events-auto"
                  />

                  {/* Concentric HUD zoom portal */}
                  <motion.div
                    initial={{ scale: 0.1, opacity: 0, rotate: 0 }}
                    animate={{ 
                      scale: [0.1, 1, 1, 18], 
                      opacity: [0, 1, 1, 0],
                      rotate: [0, 180, 270, 720]
                    }}
                    exit={{ opacity: 0 }}
                    transition={{ 
                      duration: 1.3, 
                      times: [0, 0.25, 0.45, 1],
                      ease: [0.16, 1, 0.3, 1] 
                    }}
                    className="relative w-44 h-44 flex items-center justify-center"
                  >
                    {/* Visual concentric vectors */}
                    <div className="absolute inset-0 rounded-full border border-[#00D4FF]/45 shadow-[0_0_20px_rgba(0,212,255,0.25)]" />
                    <div className="absolute inset-3 rounded-full border border-dashed border-[#6BB8FF]/35" />
                    <div className="absolute inset-7 rounded-full border border-double border-white/20" />
                    <div className="absolute inset-12 rounded-full border border-[#00D4FF]/20" />
                    
                    {/* Glowing coordinate core */}
                    <div className="absolute w-10 h-10 rounded-full bg-[#00D4FF]/30 blur-md" />
                    <div className="absolute w-2.5 h-2.5 rounded-full bg-white shadow-[0_0_10px_#00D4FF]" />

                    {/* Vector crosshairs */}
                    <div className="absolute top-0 bottom-0 left-1/2 w-[1px] bg-[#00D4FF]/20 -translate-x-1/2" />
                    <div className="absolute left-0 right-0 top-1/2 h-[1px] bg-[#00D4FF]/20 -translate-y-1/2" />
                  </motion.div>
                </div>
              )}
            </AnimatePresence>

            {/* Page content container with warp tunnel zoom exit and standard zoom entrance */}
            <motion.div
              animate={isTransitioning ? { scale: 1.4, opacity: 0 } : { scale: 1, opacity: 1 }}
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10"
            >
              <main>
                {getPageFromPath(currentPath)}
              </main>

              {/* Site footer */}
              <Footer />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
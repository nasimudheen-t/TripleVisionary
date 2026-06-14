import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Cpu } from 'lucide-react';

const navItems = [
  { name: 'Home', path: '/home' },
  { name: 'Services', path: '/services' },
  { name: 'Work', path: '/work' },
  { name: 'Process', path: '/process' },
  { name: 'About', path: '/about' },
  { name: 'Testimonials', path: '/testimonials' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar({ currentPath, onPageChange }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, path) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    onPageChange(path);
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-40 px-4 py-4 md:py-6 flex justify-center pointer-events-none">
        <motion.nav
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className={`pointer-events-auto flex items-center justify-between px-6 py-2.5 md:py-3 w-full max-w-6xl rounded-full transition-all duration-500
            ${scrolled 
              ? 'glass-panel shadow-[0_8px_32px_rgba(0,0,0,0.5)] border-white/10 scale-95 md:scale-100 bg-[#10151C]/80' 
              : 'glass-panel bg-[#10151C]/40 border-white/5'
            }
            bg-gradient-to-b from-white/5 to-transparent
          `}
        >
          {/* Logo Section */}
          <a 
            href="/home" 
            onClick={(e) => handleNavClick(e, '/home')} 
            className="flex items-center gap-2 group cursor-pointer"
          >
            <div className="relative">
              <Cpu size={18} className="text-[#00D4FF] group-hover:rotate-45 transition-transform duration-500" />
              <div className="absolute inset-0 bg-[#00D4FF]/30 blur-md rounded-full group-hover:opacity-100 opacity-0 transition-opacity" />
            </div>
            <span className="font-display font-bold text-sm tracking-wider uppercase bg-gradient-to-r from-white via-[#C6D3E1] to-[#6BB8FF] bg-clip-text text-transparent">
              VORTEX // STUDIO
            </span>
          </a>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => {
              const isActive = currentPath === item.path || (currentPath === '/' && item.path === '/home');

              return (
                <a
                  key={item.name}
                  href={item.path}
                  onClick={(e) => handleNavClick(e, item.path)}
                  className={`relative text-[11px] font-mono tracking-widest uppercase py-1 px-3 transition-colors duration-300 cursor-pointer
                    ${isActive ? 'text-white' : 'text-[#C6D3E1]/70 hover:text-white'}
                  `}
                >
                  {item.name}
                  {/* Classic Apple macOS Dock / Active Dot */}
                  {isActive && (
                    <motion.span
                      layoutId="activeDot"
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#00D4FF] shadow-[0_0_8px_#00D4FF]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </div>

          {/* Start Project Action CTA */}
          <div className="hidden md:block">
            <a
              href="/contact"
              onClick={(e) => handleNavClick(e, '/contact')}
              className="relative inline-flex items-center justify-center px-4 py-1.5 rounded-full text-[10px] font-mono tracking-widest uppercase bg-white/10 hover:bg-[#00D4FF] hover:text-[#0B0F14] border border-white/10 hover:border-[#00D4FF] text-white transition-all duration-300 shadow-inner group overflow-hidden cursor-pointer"
            >
              <span className="relative z-10 font-bold">START PROJECT</span>
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 text-white/80 hover:text-white glass-panel rounded-full cursor-pointer"
          >
            {mobileMenuOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </motion.nav>
      </header>

      {/* Mobile Drawer menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-20 z-30 mx-4 p-6 glass-panel rounded-3xl bg-[#10151C]/95 border-white/10 shadow-2xl flex flex-col gap-4 scanlines md:hidden"
          >
            <div className="flex flex-col gap-2.5">
              {navItems.map((item, idx) => {
                const isActive = currentPath === item.path || (currentPath === '/' && item.path === '/home');

                return (
                  <motion.a
                    key={item.name}
                    href={item.path}
                    onClick={(e) => handleNavClick(e, item.path)}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className={`flex items-center justify-between text-xs font-mono tracking-widest uppercase p-3 rounded-xl transition-all
                      ${isActive 
                        ? 'bg-white/5 text-[#00D4FF] border-l-2 border-[#00D4FF] pl-4' 
                        : 'text-[#C6D3E1]/70 hover:bg-white/5 hover:text-white'
                      }
                    `}
                  >
                    <span>{item.name}</span>
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#00D4FF] shadow-[0_0_6px_#00D4FF]" />}
                  </motion.a>
                );
              })}
            </div>
            
            <motion.a
              href="/contact"
              onClick={(e) => handleNavClick(e, '/contact')}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-2 w-full py-3 text-center rounded-xl bg-gradient-to-r from-[#00D4FF] to-[#6BB8FF] text-[#0B0F14] font-mono font-bold text-xs tracking-widest uppercase shadow-[0_0_20px_rgba(0,212,255,0.3)] hover:brightness-110 active:scale-95 transition-all cursor-pointer"
            >
              START PROJECT
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

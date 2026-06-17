import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Cpu } from "lucide-react";

const navItems = [
  { name: "Portfolio", path: "/portfolio" },
  { name: "Assets", path: "/assets" },
  { name: "Addon", path: "/addon" },
];

export default function Navbar({ currentPath, onPageChange }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="
      pointer-events-auto
      w-full
      max-w-5xl
      rounded-full
      border
      border-[#555]
      bg-gradient-to-b
      from-[#3d3d3d]
      via-[#242424]
      to-[#111]
      shadow-[0_8px_25px_rgba(0,0,0,.6)]
      overflow-hidden
"
        >
          <div className="flex items-center">
            {/* Logo */}

            <a
              href="/portfolio"
              onClick={(e) => handleNavClick(e, "/portfolio")}
              className="flex items-center px-6 h-12 border-r border-[#444]"
            >
              <img
                src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=100&h=100&fit=crop&crop=center"
                alt="Logo"
                className="w-8 h-8 rounded-full object-cover border border-white/20"
              />

              <span className="ml-3 text-xs tracking-wider font-semibold text-gray-200 uppercase">
                Vortex
              </span>
            </a>
            {/* Menu */}

            <div className="flex flex-1">
              {navItems.map((item) => {
                const active = currentPath === item.path;

                return (
                  <a
                    key={item.name}
                    href={item.path}
                    onClick={(e) => handleNavClick(e, item.path)}
                    className={`
              relative
              flex-1
              h-12
              flex
              items-center
              justify-center
              text-sm
              font-semibold
              tracking-wide
              border-r
              last:border-r-0
              border-[#444]
              transition-all
              duration-300

              ${
                active
                  ? "bg-gradient-to-b from-[#66b8ff] via-[#3483c8] to-[#1b4d88] text-white"
                  : "bg-gradient-to-b from-[#4d4d4d] via-[#2d2d2d] to-[#1a1a1a] text-gray-300 hover:text-white hover:from-[#5d5d5d] hover:to-[#222]"
              }
            `}
                  >
                    {item.name}

                    {active && (
                      <motion.div
                        layoutId="apple-active"
                        className="
                absolute
                inset-0
                rounded-sm
                border
                border-white/20
                shadow-[0_0_18px_rgba(80,170,255,.45)]
                "
                      />
                    )}
                  </a>
                );
              })}
            </div>
          </div>
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
                const isActive =
                  currentPath === item.path ||
                  (currentPath === "/" && item.path === "/home");

                return (
                  <motion.a
                    key={item.name}
                    href={item.path}
                    onClick={(e) => handleNavClick(e, item.path)}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className={`flex items-center justify-between text-xs font-mono tracking-widest uppercase p-3 rounded-xl transition-all
                      ${
                        isActive
                          ? "bg-white/5 text-[#00D4FF] border-l-2 border-[#00D4FF] pl-4"
                          : "text-[#C6D3E1]/70 hover:bg-white/5 hover:text-white"
                      }
                    `}
                  >
                    <span>{item.name}</span>
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00D4FF] shadow-[0_0_6px_#00D4FF]" />
                    )}
                  </motion.a>
                );
              })}
            </div>

            <motion.a
              href="/contact"
              onClick={(e) => handleNavClick(e, "/contact")}
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

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Logo from "../assets/Logo/Logo.png";

const navItems = [
  { name: "ShowCase", path: "/show" },
  { name: "Assets", path: "/assets" },
  { name: "Addon", path: "/addon" },
  { name: "Services", path: "/services" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar({ currentPath, onPageChange }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, path) => {
    e.preventDefault();
    onPageChange(path);
  };

  return (
    <header className="fixed top-4 left-0 w-full z-50 px-3 md:px-6 flex justify-center">
      <motion.nav
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`
          w-full
max-w-6xl
h-10
overflow-hidden
rounded-xl
border
border-[#585858]
bg-gradient-to-b
from-[#4f4f4f]
via-[#292929]
to-[#111]
shadow-[0_8px_20px_rgba(0,0,0,.55)]
relative
          ${
            scrolled
              ? "shadow-[0_10px_35px_rgba(0,0,0,.55)] scale-[0.98]"
              : "shadow-[0_6px_25px_rgba(0,0,0,.45)]"
          }
        `}
      >
        <div className="flex items-center h-10">
          {/* Logo */}

          <a
            href="/show"
            onClick={(e) => handleNavClick(e, "/portfolio")}
            className="
              flex-shrink-0
              w-16
              h-full
              flex
              items-center
              justify-center
              border-r
              border-[#444]
              bg-gradient-to-b
              from-[#555]
              via-[#333]
              to-[#1b1b1b]
            "
          >
            <img 
            
            src={Logo} alt="Logo" className="w-7 h-9 object-contain " />
          </a>

          {/* Desktop */}

          <div className="hidden md:flex flex-1">
            {navItems.map((item) => {
              const active = currentPath === item.path;

              return (
                <a
                  key={item.name}
                  href={item.path}
                  // ref={active ? activeRef : null}
                  onClick={(e) => handleNavClick(e, item.path)}
                  className={`
                    relative
                    flex-1
                    h-10
                    flex
                    items-center
                    justify-center
                    text-[13px]
                    font-medium
                    tracking-wide
                    border-r
                    last:border-r-0
                    border-[#444]
                    transition-all
                    duration-300

     ${
       active
         ? "text-black bg-gradient-to-b from-[#5FFEBC] via-[#5FFEBC] to-[#5FFEBC]"
         : "text-gray-300 bg-gradient-to-b from-[#4b4b4b] via-[#2b2b2b] to-[#171717] hover:from-[#616161] hover:to-[#222] hover:text-white"
     }       `}
                >
                  {item.name}
                  {active && (
                    <div className="absolute top-0 left-0 right-0 h-[2px] bg-white/40 pointer-events-none" />
                  )}
                </a>
              );
            })}
          </div>

          {/* Mobile */}

          <div className="md:hidden flex-1 h-10 overflow-hidden">
            <div
              className="
      flex
      overflow-x-auto
     pb-5
      overflow-y-hidden
      scrollbar-hide
      touch-pan-x
      whitespace-nowrap
      w-full
    "
            >
              {navItems.map((item) => {
                const active = currentPath === item.path;

                return (
                  <a
                    key={item.name}
                    href={item.path}
                    onClick={(e) => handleNavClick(e, item.path)}
                    className={`
            relative
            flex-shrink-0
            px-5
            py-5  
            h-12
            flex
            items-center
            justify-center
            text-sm
            font-medium
            border-r
            border-[#444]

            ${
              active
                ? "text-white bg-gradient-to-b from-[#72c4ff] via-[#418bd3] to-[#1f4f88]"
                : "text-gray-300 bg-gradient-to-b from-[#4b4b4b] via-[#2b2b2b] to-[#171717]"
            }
          `}
                  >
                    {item.name}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </motion.nav>
    </header>
  );
}

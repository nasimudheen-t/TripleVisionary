import React from "react";
import { Cpu, Copyright, Mail, MapPin, Phone } from "lucide-react";

import { FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  const handleLinkClick = (e, href) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "auto" });
      }
    }
  };

  const services = [
    { name: "Video Editing", href: "#services" },
    { name: "Motion Graphics", href: "#services" },
    { name: "3D Animation", href: "#services" },
    { name: "VFX Production", href: "#services" },
  ];

  return (
    <footer className="relative bg-[#0B0F14] border-t border-white/5 pt-16 pb-12 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-[0.02] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        {/* Top Section: TripleVisionary Brand */}
        <div className="flex flex-col items-center text-center mb-12 border-b border-white/5 pb-10">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#2b682a] via-[#58de55] to-[#3ae33a] bg-clip-text text-transparent mb-4">
            TripleVisionary
          </h2>
          <p className="text-sm text-[#C6D3E1]/60 max-w-2xl font-light leading-relaxed">
            *This content is not available for Ai training. All rights reserved*
          </p>
        </div>

        {/* Services & Contact Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12 border-b border-white/5 pb-10">
          {/* Services */}
          <div>
            <h4 className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#58de55] font-bold mb-4">
              Services
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {services.map((service) => (
                <a
                  key={service.name}
                  href={service.href}
                  onClick={(e) => handleLinkClick(e, service.href)}
                  className="text-xs text-[#C6D3E1]/70 hover:text-white transition-colors font-light py-1"
                >
                  {service.name}
                </a>
              ))}
            </div>
          </div>

          {/* Contact with Image */}
          <div>
            <h4 className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#58de55] font-bold mb-4">
              Contact
            </h4>
             <div>
          
                    <span className="text-sm  ">
                      triplevisionary@protonmail.com
                    </span>
            
                  </div>
          </div>
        </div>

        {/* Social Media */}
        <div className="flex flex-col items-center gap-6 mb-12 border-b border-white/5 pb-10">
          <h4 className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#58de55] font-bold">
            Follow Us
          </h4>
          <div className="flex items-center gap-8">
            <a
              href="https://wa.me/+91 9388121465"
              className="text-[#C6D3E1]/40 hover:text-[#00D4FF] transition-all duration-300 hover:scale-110"
              aria-label="WhatsApp"
              target="_blank"
            >
              <FaWhatsapp size={24} />
            </a>
            <a
              href="https://www.instagram.com/triplevisionary?igsh=MWF1c21zaWdnd2Vpbg=="
              className="text-[#C6D3E1]/40 hover:text-[#00D4FF] transition-all duration-300 hover:scale-110"
              aria-label="Instagram"
              target="_blank"
            >
              <FaInstagram size={24} />{" "}
            </a>
            <a
              href="https://www.youtube.com/@triplevisionary"
              className="text-[#C6D3E1]/40 hover:text-[#00D4FF] transition-all duration-300 hover:scale-110"
              aria-label="YouTube"
              target="_blank"
            >
              <FaYoutube size={24} />{" "}
            </a>
          </div>
        </div>

        {/* Bottom Section: Copyright & Diagnostics */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-[10px] font-mono text-[#C6D3E1]/40">
          {/* <div className="flex items-center gap-2">
            <Cpu size={14} className="text-[#00D4FF]" />
            <span>TRIPLEVISIONARY // SYSTEM CORE 2.0</span>
          </div> */}

          {/* <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
            <div className="flex items-center gap-1">
              <Copyright size={10} />
              <span>
                {new Date().getFullYear()} TRIPLEVISIONARY. ALL RIGHTS RESERVED.
              </span>
            </div>
            <span className="hidden md:inline text-white/10">|</span>
            <span>SYS_LOC: CREATIVE_NODE_01</span>
          </div> */}
        </div>
      </div>
    </footer>
  );
}

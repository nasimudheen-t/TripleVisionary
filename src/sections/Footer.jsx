import React from 'react';
import { Cpu, Copyright } from 'lucide-react';

const footerLinks = [
  {
    title: "Services",
    items: [
      { name: "Video Editing", href: "#services" },
      { name: "Motion Graphics", href: "#services" },
      { name: "3D Animation", href: "#services" },
      { name: "VFX Production", href: "#services" }
    ]
  },
  {
    title: "Work & Process",
    items: [
      { name: "Featured Portfolio", href: "#work" },
      { name: "Production Pipeline", href: "#process" },
      { name: "Interactive Editor", href: "#process-interactive" },
      { name: "Case Studies", href: "#work" }
    ]
  },
  {
    title: "Company",
    items: [
      { name: "Studio Profile", href: "#about" },
      { name: "Roster Team", href: "#about" },
      { name: "Testimonials", href: "#testimonials" },
      { name: "Career Openings", href: "#contact" }
    ]
  },
  {
    title: "Resources & Connect",
    items: [
      { name: "Secure Terminal", href: "#contact" },
      { name: "WhatsApp Direct", href: "https://wa.me/1234567890" },
      { name: "Email Address", href: "mailto:production@vortexstudio.com" },
      { name: "Google Calendar", href: "https://calendly.com" }
    ]
  }
];

export default function Footer() {
  const handleLinkClick = (e, href) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'auto' });
      }
    }
  };

  return (
    <footer className="relative bg-[#0B0F14] border-t border-white/5 pt-16 pb-12 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-[0.02] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        
        {/* Top Section: Apple-inspired Sitemaps */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 border-b border-white/5 pb-10">
          {footerLinks.map((group) => (
            <div key={group.title} className="space-y-4">
              <h4 className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#00D4FF] font-bold">
                {group.title}
              </h4>
              <ul className="space-y-2.5">
                {group.items.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={(e) => handleLinkClick(e, link.href)}
                      className="text-xs text-[#C6D3E1]/70 hover:text-white transition-colors font-light"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section: Copyright & Diagnostics */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-[10px] font-mono text-[#C6D3E1]/40">
          <div className="flex items-center gap-2">
            <Cpu size={14} className="text-[#00D4FF]" />
            <span>VORTEX STUDIO // SYSTEM CORE 1.0</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
            <div className="flex items-center gap-1">
              <Copyright size={10} />
              <span>{new Date().getFullYear()} VORTEX STUDIO. ALL RIGHTS RESERVED.</span>
            </div>
            <span className="hidden md:inline text-white/10">|</span>
            <span>SYS_LOC: CLOUD_NODE_06</span>
          </div>
        </div>

      </div>
    </footer>
  );
}

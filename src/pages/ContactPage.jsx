import React, { useEffect } from 'react';
import Contact from '../sections/Contact';

export default function ContactPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-20 relative">
      {/* Page Header */}
      <div className="container mx-auto px-6 max-w-6xl text-center mb-16 relative z-10">
        <div className="flex items-center justify-center gap-2 mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00D4FF] animate-pulse" />
          <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#00D4FF]">
            ESTABLISH_DISPATCH // SECURE_PORTAL
          </span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold font-display tracking-tight mb-4">
          Contact Terminal
        </h1>
        <p className="text-sm md:text-base text-[#C6D3E1]/70 max-w-xl mx-auto font-light">
          Submit your specifications, timeline milestones, and rendering settings. Secure communication link.
        </p>
      </div>

      {/* Contact submission console */}
      <Contact />
    </div>
  );
}

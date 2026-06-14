import React, { useEffect } from 'react';
import About from '../sections/About';
import Stats from '../sections/Stats';
import GlassCard from '../components/GlassCard';
import { Calendar, ArrowLeft } from 'lucide-react';

export default function AboutPage({ onPageChange }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-20 relative">
      {/* Intro Header */}
      <div className="container mx-auto px-6 max-w-6xl text-center mb-16 relative z-10">
        <div className="flex items-center justify-center gap-2 mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00D4FF] animate-pulse" />
          <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#00D4FF]">
            SECURE_DOSSIER // STUDIO_ORIGINS
          </span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold font-display tracking-tight mb-4">
          Behind the Pixels
        </h1>
        <p className="text-sm md:text-base text-[#C6D3E1]/70 max-w-xl mx-auto font-light">
          A deep dive into our post-production telemetry, systems architectures, and elite creative roster.
        </p>
      </div>

      {/* Main About section content */}
      <About />

      {/* Stats details */}
      <Stats />

      {/* Call to Action segment */}
      <div className="container mx-auto px-6 max-w-3xl mt-16 relative z-10 text-center">
        <GlassCard className="p-8 bg-[#10151C]/90 border border-white/10 text-center scanlines">
          <h3 className="font-display font-bold text-xl md:text-2xl mb-3 text-white">
            Ready to deploy our editing pipelines?
          </h3>
          <p className="text-xs text-[#C6D3E1]/80 max-w-md mx-auto mb-6 font-light">
            Connect with our supervisors to initialize production timelines and secure rendering nodes.
          </p>
          <div className="flex justify-center gap-4">
            <button
              onClick={() => onPageChange('/contact')}
              className="px-6 py-3 rounded-full bg-gradient-to-r from-[#00D4FF] to-[#6BB8FF] text-[#0B0F14] font-mono text-xs font-bold tracking-widest uppercase flex items-center gap-2 hover:brightness-110 transition-all cursor-pointer"
            >
              <Calendar size={14} />
              DISPATCH FORM
            </button>
            <button
              onClick={() => onPageChange('/home')}
              className="px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 text-white border border-white/10 font-mono text-xs font-bold tracking-widest uppercase flex items-center gap-2 transition-all cursor-pointer"
            >
              <ArrowLeft size={14} />
              BACK TO PORTFOLIO
            </button>
          </div>
        </GlassCard>
      </div>
    </div>
  );
}

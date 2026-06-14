import React, { useEffect } from 'react';
import Process from '../sections/Process';
import InteractiveMotion from '../sections/InteractiveMotion';
import GlassCard from '../components/GlassCard';
import { ArrowRight } from 'lucide-react';

export default function ProcessPage({ onPageChange }) {
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
            STRUCTURE // DEVELOPMENT_PIPELINES
          </span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold font-display tracking-tight mb-4">
          Our Blueprint
        </h1>
        <p className="text-sm md:text-base text-[#C6D3E1]/70 max-w-xl mx-auto font-light">
          A visualization of our production milestones, connecting lines, and real-time keyframe vector calibrations.
        </p>
      </div>

      {/* Node Workflow Step Map */}
      <Process />

      {/* Interactive Timeline Scrub Deck */}
      <InteractiveMotion />

      {/* CTA Section */}
      <div className="container mx-auto px-6 max-w-3xl mt-16 relative z-10 text-center">
        <GlassCard className="p-8 bg-[#10151C]/90 border border-white/10 text-center scanlines">
          <h3 className="font-display font-bold text-xl md:text-2xl mb-3 text-white">
            Curious about our timelines?
          </h3>
          <p className="text-xs text-[#C6D3E1]/80 max-w-md mx-auto mb-6 font-light">
            We schedule projects into strict weekly sprints, utilizing pre-visualization scripts to lock edits early in the process.
          </p>
          <button
            onClick={() => onPageChange('/contact')}
            className="px-6 py-3 rounded-full bg-gradient-to-r from-[#00D4FF] to-[#6BB8FF] text-[#0B0F14] font-mono text-xs font-bold tracking-widest uppercase flex items-center gap-2 mx-auto hover:brightness-110 transition-all cursor-pointer"
          >
            START PROJECT ROADMAPPING
            <ArrowRight size={14} />
          </button>
        </GlassCard>
      </div>
    </div>
  );
}

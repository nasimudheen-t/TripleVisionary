import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Quote, Star } from 'lucide-react';
import GlassCard from '../components/GlassCard';

const feedback = [
  {
    name: "Sarah Jenkins",
    company: "Zenith Tech Corp",
    role: "VP of Product Marketing",
    review: "The CGI models, texturing, and color grades Vortex generated for our hardware launch were absolutely phenomenal. They took our concepts and elevated them to cinematic standards.",
    avatarCode: "NODE_S_01",
    rating: 5,
    delay: 0
  },
  {
    name: "Devon Kross",
    company: "Nexus OS Systems",
    role: "Lead Interface Director",
    review: "Their motion graphics and HUD interface assets are incredibly clean and detailed. We needed a blend of futuristic visuals and simple Apple-inspired structures; they delivered precisely.",
    avatarCode: "NODE_D_02",
    rating: 5,
    delay: 1.5
  },
  {
    name: "Elena Gomez",
    company: "Aura Paris",
    role: "Chief Creative Officer",
    review: "Their CGI liquid particles and macro lighting setups are state of the art. Vortex has become our absolute post-production partner for all perfume and luxury commercial launches.",
    avatarCode: "NODE_E_03",
    rating: 5,
    delay: 3
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 bg-[#10151C]/40 border-y border-white/5 overflow-hidden">
      <div className="absolute inset-0 grid-bg-fine opacity-5 pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-[#6BB8FF]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center text-center mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00D4FF] animate-pulse" />
            <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-[#00D4FF]">
              SYSTEMS_FEEDBACK // CLIENT DATABASE
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold font-display tracking-tight mb-4">
            Testimonials
          </h2>
          <p className="text-sm md:text-base text-[#C6D3E1]/70 max-w-xl font-light">
            Read telemetry logs and reviews from our international brand partners and product developers.
          </p>
        </div>

        {/* Floating cards grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {feedback.map((item) => (
            <motion.div
              key={item.name}
              animate={{
                y: [0, -12, 0]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: item.delay
              }}
              className="w-full"
            >
              <GlassCard 
                className="p-6 bg-[#151D26]/75 border border-white/5 hover:border-[#00D4FF]/20 transition-all cursor-pointer scanlines"
                glowColor="rgba(0, 212, 255, 0.08)"
              >
                {/* Quote details */}
                <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-4">
                  <div className="flex items-center gap-2">
                    {/* HUD circle avatar */}
                    <div className="w-9 h-9 rounded-full bg-black/40 border border-white/10 flex items-center justify-center font-mono text-[9px] text-[#00D4FF] relative">
                      <span>{item.avatarCode}</span>
                      <div className="absolute bottom-0 right-0 w-2 h-2 rounded-full bg-green-500 border border-black" />
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-xs text-white leading-tight">
                        {item.name}
                      </h4>
                      <span className="text-[9px] font-mono text-[#C6D3E1]/50 block">
                        {item.role}
                      </span>
                    </div>
                  </div>
                  
                  <Quote size={16} className="text-[#00D4FF]/40" />
                </div>

                {/* Rating Stars */}
                <div className="flex gap-1 mb-4 text-[#00D4FF]">
                  {Array.from({ length: item.rating }).map((_, sIdx) => (
                    <Star key={sIdx} size={10} fill="currentColor" />
                  ))}
                </div>

                <p className="text-xs text-[#C6D3E1] leading-relaxed font-light italic">
                  "{item.review}"
                </p>

                {/* Card telemetry */}
                <div className="mt-6 pt-3 border-t border-white/5 flex items-center justify-between text-[7px] font-mono text-[#C6D3E1]/30">
                  <span>METRIC: VERIFIED</span>
                  <span className="text-[#00D4FF]">ORIGIN: {item.company}</span>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

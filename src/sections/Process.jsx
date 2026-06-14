import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Compass, Edit3, Video, Sparkles, Send, ArrowRight, Check } from 'lucide-react';
import GlassCard from '../components/GlassCard';

const steps = [
  {
    phase: "01",
    title: "Discovery",
    icon: Search,
    desc: "Understanding project goals, brand DNA, references, and core messaging requirements.",
    deliverables: ["Creative Brief", "Reference Moodboards", "Project Scope Document"],
    details: "We start by analyzing your brand goals. We conduct industry audit, compile cinematic inspiration files, and align on the project's visual direction."
  },
  {
    phase: "02",
    title: "Strategy",
    icon: Compass,
    desc: "Mapping timeline milestones, choosing formats, styles, audio direction, and production planning.",
    deliverables: ["Post-Production Roadmap", "Audio Score Selection", "Styleframes Outline"],
    details: "Next, we develop a technical roadmap. We budget the frames, target platforms (socials, TV, web), select composers, and construct styleboards."
  },
  {
    phase: "03",
    title: "Storyboarding",
    icon: Edit3,
    desc: "Drafting visual storyboards, scripting frames, and locking motion previsualizations.",
    deliverables: ["Sketched Storyboards", "Animatic Pre-Vis", "Script Locking"],
    details: "Before animating or shooting, we sketch the flow. We compose an animatic (low-fidelity rough edit) to test the pacing and timing against the soundtrack."
  },
  {
    phase: "04",
    title: "Production",
    icon: Video,
    desc: "High-end cinematic video editing, 3D modeling, asset assembly, and scene rendering.",
    deliverables: ["Rough Cut Assembly", "3D Asset Models", "VFX Matte Painting"],
    details: "Our creative engine kicks in. We perform raw cuts, import CGI assets, composite camera angles, and build out high-fidelity geometry."
  },
  {
    phase: "05",
    title: "Motion Design",
    icon: Sparkles,
    desc: "Fleshing out graphics, HUD UI effects, particle physics, transitions, and polish layers.",
    deliverables: ["Keyframed Motion Layers", "CGI Shading & Texturing", "Sound Design Mixing"],
    details: "Here, we add post-effects: optical flares, vector typography overlays, complex camera motion tracks, and full Foley sound design."
  },
  {
    phase: "06",
    title: "Delivery",
    icon: Send,
    desc: "Final rendering, color grading exports, client review, and multi-format delivery.",
    deliverables: ["8K ProRes Master files", "H.264 Web Optimized Crops", "Project Source Archives"],
    details: "The final step. We execute master renders, perform final DaVinci Resolve color grading passes, export aspect variations, and deliver secure master folders."
  }
];

export default function Process() {
  const [selectedIdx, setSelectedIdx] = useState(0);

  return (
    <section id="process" className="relative py-24 bg-[#0B0F14] overflow-hidden">
      {/* Background visual helpers */}
      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/5 pointer-events-none" />
      
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="text-left">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00D4FF] animate-pulse" />
              <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-[#00D4FF]">
                WORKFLOW CHAIN // PRODUCTION MILESTONES
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold font-display tracking-tight">
              Our Process
            </h2>
          </div>
          <p className="text-xs md:text-sm text-[#C6D3E1]/70 max-w-sm font-light">
            Interactive pipeline chart. Click on a node in the workflow chain below to analyze deliverables and structural details.
          </p>
        </div>

        {/* Desktop Nodes Connected Line Map */}
        <div className="hidden lg:block relative mb-16 py-8">
          {/* Animated Flowing Connector Line */}
          <svg className="absolute top-1/2 left-0 w-full h-2 -translate-y-1/2 pointer-events-none">
            <line 
              x1="5%" y1="4" x2="95%" y2="4" 
              stroke="rgba(255, 255, 255, 0.05)" 
              strokeWidth="2" 
            />
            {/* Pulsing signal line */}
            <line 
              x1="5%" y1="4" x2={`${5 + selectedIdx * 18}%`} y2="4" 
              stroke="url(#pulseGrad)" 
              strokeWidth="2.5" 
              className="transition-all duration-500 ease-out"
            />
            <defs>
              <linearGradient id="pulseGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#6BB8FF" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#00D4FF" />
              </linearGradient>
            </defs>
          </svg>

          {/* Node Grid Row */}
          <div className="flex justify-between items-center relative z-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isSelected = selectedIdx === idx;
              return (
                <button
                  key={step.title}
                  onClick={() => setSelectedIdx(idx)}
                  className="flex flex-col items-center group cursor-pointer focus:outline-none w-[120px]"
                >
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center border transition-all duration-300 relative
                    ${isSelected 
                      ? 'bg-[#10151C] border-[#00D4FF] text-[#00D4FF] shadow-[0_0_20px_rgba(0,212,255,0.3)] scale-110' 
                      : 'bg-[#0B0F14] border-white/10 text-white/60 group-hover:border-white/30 group-hover:text-white'
                    }
                  `}>
                    <Icon size={18} />
                    
                    {/* Ring highlight */}
                    {isSelected && (
                      <span className="absolute -inset-1 rounded-full border border-[#00D4FF]/30 animate-pulse" />
                    )}
                  </div>
                  
                  <span className={`mt-3 font-mono text-[9px] tracking-widest uppercase transition-colors
                    ${isSelected ? 'text-[#00D4FF] font-bold' : 'text-[#C6D3E1]/50 group-hover:text-white'}
                  `}>
                    PHASE_{step.phase}
                  </span>
                  <span className={`font-display text-[11px] font-medium transition-colors mt-0.5
                    ${isSelected ? 'text-white' : 'text-[#C6D3E1]/70'}
                  `}>
                    {step.title}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Mobile / Tablet vertical nodes list */}
        <div className="lg:hidden flex flex-col gap-4 mb-10">
          {steps.map((step, idx) => {
            const isSelected = selectedIdx === idx;
            const Icon = step.icon;
            return (
              <button
                key={step.title}
                onClick={() => setSelectedIdx(idx)}
                className={`flex items-center gap-4 p-4 rounded-xl border transition-all text-left cursor-pointer
                  ${isSelected 
                    ? 'bg-[#10151C] border-[#00D4FF] text-white shadow-md' 
                    : 'bg-[#151D26]/40 border-white/5 text-[#C6D3E1]/70 hover:border-white/10'
                  }
                `}
              >
                <div className={`w-9 h-9 rounded-full flex items-center justify-center border
                  ${isSelected ? 'bg-[#00D4FF]/10 border-[#00D4FF] text-[#00D4FF]' : 'bg-white/5 border-white/10 text-white/50'}
                `}>
                  <Icon size={14} />
                </div>
                <div>
                  <div className="font-mono text-[8px] tracking-widest text-[#C6D3E1]/45 uppercase">PHASE_{step.phase}</div>
                  <div className="font-display font-bold text-xs uppercase">{step.title}</div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Details Screen Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedIdx}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="w-full"
          >
            <GlassCard className="p-6 md:p-8 bg-[#10151C]/90 border border-white/10 scanlines">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                
                {/* Description info */}
                <div className="md:col-span-8 space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-[#00D4FF] bg-[#00D4FF]/10 px-2.5 py-1 rounded">
                      PHASE 0{selectedIdx + 1}
                    </span>
                    <h3 className="font-display font-bold text-2xl text-white">
                      {steps[selectedIdx].title} Workflow
                    </h3>
                  </div>
                  
                  <p className="text-sm text-[#C6D3E1]/90 leading-relaxed max-w-2xl font-light">
                    {steps[selectedIdx].details}
                  </p>
                  
                  <p className="text-xs text-[#C6D3E1]/65 italic">
                    {steps[selectedIdx].desc}
                  </p>
                </div>

                {/* Deliverables checklist box */}
                <div className="md:col-span-4 p-4 rounded-xl bg-black/30 border border-white/5 font-mono text-[10px] space-y-3">
                  <span className="block text-[#00D4FF] font-bold tracking-wider text-[9px] border-b border-white/5 pb-2">
                    // KEY_DELIVERABLES:
                  </span>
                  
                  <div className="space-y-2 text-[#C6D3E1]/85">
                    {steps[selectedIdx].deliverables.map((item) => (
                      <div key={item} className="flex items-center gap-2">
                        <div className="w-3.5 h-3.5 rounded-full bg-[#00D4FF]/10 flex items-center justify-center border border-[#00D4FF]/30">
                          <Check size={8} className="text-[#00D4FF]" />
                        </div>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </GlassCard>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

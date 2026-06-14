import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Cpu, Layers, Disc } from 'lucide-react';
import GlassCard from '../components/GlassCard';

const teamMembers = [
  {
    name: "Alex Sterling",
    role: "Creative Director // Founder",
    bio: "12+ years directing commercials and post-production workflows. Formerly Lead Motion at high-end design houses.",
    metric: "LOCK_ID // STERLING_01"
  },
  {
    name: "Marcus Vance",
    role: "Lead 3D & CGI Specialist",
    bio: "Physically-based rendering expert. Specializes in procedural modeling in Houdini and Cinema4D dynamics.",
    metric: "LOCK_ID // VANCE_02"
  },
  {
    name: "Sarah Chen",
    role: "VFX & Compositing Supervisor",
    bio: "Masters in Digital VFX. Expert in green-screen compositing, rotoscoping, and camera motion tracking.",
    metric: "LOCK_ID // CHEN_03"
  }
];

export default function About() {
  return (
    <section id="about" className="relative py-24 bg-[#0B0F14] overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-5 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-[#00D4FF]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start text-left mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00D4FF] animate-pulse" />
            <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-[#00D4FF]">
              STUDIO IDENTIFICATION // WHO WE ARE
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold font-display tracking-tight mb-4">
            Cinematic Studio Profile
          </h2>
        </div>

        {/* Alternate Block 1: Intro Text & Tech Specs Deck */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-2xl font-bold font-display text-white">
              We Blend Mathematical Precision with Pure Visual Storytelling.
            </h3>
            <p className="text-sm text-[#C6D3E1] leading-relaxed font-light">
              Founded at the intersection of cinema and digital technology, our studio is dedicated to crafting experiences that resonate. We reject ordinary timelines and generic presets. Instead, we build tailor-made keyframes, motion curves, and custom visual environments for luxury brands, high-profile campaigns, and music industries.
            </p>
            <p className="text-sm text-[#C6D3E1]/70 leading-relaxed font-light">
              By combining classic editing guidelines (such as precise frame pacing and emotional sound-syncs) with futuristic CGI pipelines, our exports are engineered for maximum impact and visual retention.
            </p>
          </div>
          
          <div className="lg:col-span-5">
            <GlassCard className="p-6 bg-[#10151C]/90 border border-white/10 scanlines">
              <div className="flex items-center justify-between font-mono text-[9px] text-[#00D4FF] border-b border-white/5 pb-2.5 mb-4">
                <span>CAMERA GEAR // CALIBRATION DATA</span>
                <Camera size={14} />
              </div>
              
              <div className="space-y-3 font-mono text-[10px]">
                <div className="flex justify-between border-b border-white/5 pb-1">
                  <span className="text-white/40">SYSTEM:</span>
                  <span className="text-white font-medium">RED V-RAPTOR 8K VV</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-1">
                  <span className="text-white/40">COLOR PROFILE:</span>
                  <span className="text-white font-medium">REDWideGamutRGB // Log3G10</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-1">
                  <span className="text-white/40">FOCAL DEPTH:</span>
                  <span className="text-white font-medium">35mm Prime // f/1.4</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-1">
                  <span className="text-white/40">FPS FRAME RATE:</span>
                  <span className="text-white font-medium">23.976 FPS // Native</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/40">SYNC FEED:</span>
                  <span className="text-[#00D4FF] font-bold">TIMECODE LOCKED</span>
                </div>
              </div>

              {/* Decorative Audio Track */}
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-3">
                <Disc className="text-[#6BB8FF] animate-spin-slow" size={18} />
                <div className="flex-1">
                  <span className="block text-[8px] font-mono text-white/45">Foley Mix Audio track</span>
                  <div className="h-1 bg-white/5 rounded-full overflow-hidden mt-1 relative">
                    <motion.div 
                      className="absolute inset-y-0 left-0 bg-[#00D4FF] rounded-full"
                      animate={{ width: ["10%", "85%", "10%"] }}
                      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    />
                  </div>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>

        {/* Team Cards Block */}
        <div>
          <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-10 text-xs font-mono text-[#C6D3E1]/60">
            <span>TEAM ARCHIVE // NODAL ROSTER</span>
            <span>COUNT: 03 KEY MEMBERS</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {teamMembers.map((member) => (
              <GlassCard 
                key={member.name} 
                className="p-6 bg-[#151D26]/75 border border-white/5 hover:border-white/15 hover:shadow-[0_10px_30px_rgba(0,0,0,0.4)] transition-all cursor-pointer"
                glowColor="rgba(107, 184, 255, 0.1)"
              >
                {/* Tech Avatar Placeholder */}
                <div className="w-16 h-16 rounded-xl bg-black/45 border border-white/10 flex items-center justify-center text-[#00D4FF] mb-5 relative overflow-hidden group">
                  <Cpu size={28} className="text-[#00D4FF]/40 group-hover:text-[#00D4FF] transition-colors" />
                  {/* Coordinates overlay inside avatar */}
                  <div className="absolute bottom-0.5 inset-x-0 text-center font-mono text-[6px] text-white/30 uppercase">
                    SYS_NODE_OK
                  </div>
                  <div className="absolute top-0.5 left-0.5 w-1 h-1 bg-[#00D4FF] rounded-full animate-pulse" />
                </div>

                <span className="block text-[8px] font-mono text-[#00D4FF] font-bold tracking-wider mb-1">
                  {member.metric}
                </span>
                
                <h4 className="font-display font-bold text-base text-white mb-0.5">
                  {member.name}
                </h4>
                
                <span className="block text-[10px] font-mono text-[#6BB8FF] mb-4">
                  {member.role}
                </span>
                
                <p className="text-xs text-[#C6D3E1]/80 leading-relaxed font-light">
                  {member.bio}
                </p>
              </GlassCard>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

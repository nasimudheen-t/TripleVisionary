import React from 'react';
import { motion } from 'framer-motion';
import { 
  Film, Sparkles, Box, Cpu, Flame, Target, MessageSquare, Compass, MonitorPlay 
} from 'lucide-react';
import GlassCard from '../components/GlassCard';

const servicesList = [
  {
    title: "Video Editing",
    icon: Film,
    desc: "Cinematic film editing, color grading (DaVinci Resolve), pacing, and narrative assembly.",
    techSpecs: ["DaVinci Resolve Studio", "H.264 / ProRes RAW", "HDR Color Space"],
    status: "SYSTEMS_ACTIVE",
    glowColor: "rgba(0, 212, 255, 0.15)"
  },
  {
    title: "Motion Graphics",
    icon: Sparkles,
    desc: "Vector animations, complex HUD interfaces, corporate identity branding in motion.",
    techSpecs: ["After Effects", "Vector Keyframes", "Lottie / WebGL Output"],
    status: "SYSTEMS_ACTIVE",
    glowColor: "rgba(107, 184, 255, 0.15)"
  },
  {
    title: "2D Animation",
    icon: Compass,
    desc: "Traditional keyframed characters, whiteboard presentations, and modern flat vector layouts.",
    techSpecs: ["Toon Boom Harmony", "Custom Storyboarding", "24fps Cel Format"],
    status: "STABLE",
    glowColor: "rgba(198, 211, 225, 0.15)"
  },
  {
    title: "3D Animation",
    icon: Box,
    desc: "Rigging, modeling, keyframed character design, and environments that come alive.",
    techSpecs: ["Blender / Cinema4D", "Rigged IK/FK Setup", "Octane Render Engine"],
    status: "CALIBRATING_GPU",
    glowColor: "rgba(0, 212, 255, 0.15)"
  },
  {
    title: "CGI & Render",
    icon: Cpu,
    desc: "High-fidelity computer generated imagery, fluid dynamics, particles, and custom meshes.",
    techSpecs: ["Houdini Engine", "Physically Based Rendering", "Redshift Shader Library"],
    status: "STANDBY_NODE",
    glowColor: "rgba(107, 184, 255, 0.15)"
  },
  {
    title: "VFX Production",
    icon: Flame,
    desc: "Chromakey compositing, rotoscoping, digital green screen integration, and explosive effects.",
    techSpecs: ["Nuke Compositing", "3D Camera Tracking", "Optical Flare Synthesis"],
    status: "LIVE_BUFFER",
    glowColor: "rgba(0, 212, 255, 0.15)"
  },
  {
    title: "Product Ads",
    icon: Target,
    desc: "Premium commercial advertisements focusing on high-concept luxury products.",
    techSpecs: ["Macro Photography", "Cinematic Studio Lights", "Commercial Grade LUTs"],
    status: "SYSTEMS_ACTIVE",
    glowColor: "rgba(198, 211, 225, 0.15)"
  },
  {
    title: "Social Content",
    icon: MessageSquare,
    desc: "Viral Reels, Shorts, and TikTok campaigns customized to loop seamlessly.",
    techSpecs: ["9:16 Vertical Crop", "Interactive Captions", "Rapid Export Pipeline"],
    status: "MAX_PERFORMANCE",
    glowColor: "rgba(107, 184, 255, 0.15)"
  }
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08
    }
  }
};

const cardVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { type: "spring", damping: 20, stiffness: 100 }
  }
};

export default function Services() {
  return (
    <section id="services" className="relative py-24 bg-[#10151C]/40 border-y border-white/5 overflow-hidden">
      {/* Background decoration lines */}
      <div className="absolute inset-0 grid-bg opacity-10 pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-[#6BB8FF]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center text-center mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00D4FF] animate-pulse" />
            <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-[#00D4FF]">
              CORE PIPELINES // CAPABILITIES
            </span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold font-display tracking-tight mb-4">
            Our Production Services
          </h2>
          
          <p className="text-sm md:text-base text-[#C6D3E1]/70 max-w-xl font-light">
            We provide elite execution across all facets of post-production, animation, and CGI commercial media workflows.
          </p>
        </div>

        {/* Grid Layout */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {servicesList.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div 
                key={service.title} 
                variants={cardVariants}
                className="group"
              >
                <GlassCard 
                  className="h-full p-6 bg-[#151D26]/60 border border-white/5 hover:border-white/15 hover:shadow-[0_10px_30px_rgba(0,0,0,0.4)] transition-all cursor-pointer flex flex-col justify-between"
                  glowColor={service.glowColor}
                >
                  <div>
                    {/* Card Top / Status indicator */}
                    <div className="flex items-center justify-between text-[8px] font-mono text-[#C6D3E1]/40 mb-5">
                      <span>CH_0{index + 1}</span>
                      <div className="flex items-center gap-1 bg-white/5 px-2 py-0.5 rounded-full">
                        <span className="w-1 h-1 rounded-full bg-[#00D4FF] animate-pulse" />
                        <span>{service.status}</span>
                      </div>
                    </div>

                    {/* Icon & Title */}
                    <div className="mb-4">
                      <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#00D4FF] mb-4 group-hover:scale-110 transition-transform duration-300">
                        <IconComponent size={20} />
                      </div>
                      <h3 className="text-lg font-bold font-display text-white mb-2 group-hover:text-[#00D4FF] transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-xs text-[#C6D3E1]/85 leading-relaxed font-light">
                        {service.desc}
                      </p>
                    </div>
                  </div>

                  {/* Tech Specs block */}
                  <div className="mt-6 pt-4 border-t border-white/5 text-[9px] font-mono text-[#C6D3E1]/50 space-y-1">
                    <span className="block text-[8px] tracking-wider text-[#00D4FF]/75 uppercase mb-1.5 font-bold">SPECIFICATIONS //</span>
                    {service.techSpecs.map((spec, sIdx) => (
                      <div key={sIdx} className="flex items-center gap-1">
                        <span className="opacity-45">&gt;</span>
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

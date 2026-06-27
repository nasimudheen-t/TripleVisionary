import React from 'react';
import { motion } from 'framer-motion';
import { 
  Film, Sparkles, Box, Orbit, Palette, Workflow, MessageSquare, Compass, MonitorPlay,Donut 
} from 'lucide-react';
import GlassCard from '../components/GlassCard';

const servicesList = [
  {
    title: "Video Edits",
    icon: Film,
    desc: "Cinematic film editing, color grading (DaVinci Resolve, premiere pro, Kdenlive ), pacing, and narrative assembly.",
    techSpecs: ["DaVinci Resolve Studio", "premiere pro","Kdenlive"],
    status: "SYSTEMS_ACTIVE",
    glowColor: "rgba(0, 212, 255, 0.15)"
  },
  {
    title: "Motion Graphics",
    icon: Workflow,
    desc: "Vector animations, complex HUD interfaces, branding in motion.",
    techSpecs: ["After Effects", "Vector Keyframes", "Lottie / WebGL Output"],
    status: "SYSTEMS_ACTIVE",
    glowColor: "rgba(107, 184, 255, 0.15)"
  },
  {
    title: "2D ",
    icon: Palette,
    desc: "Traditional keyframed characters, whiteboard presentations, and modern flat vector layouts.",
    techSpecs: ["Toon Boom Harmony", "Custom Storyboarding", "24fps Cel Format"],
    status: "STABLE",
    glowColor: "rgba(198, 211, 225, 0.15)"
  },
  {
    title: "3D ",
    icon: Box,
    desc: "modeling, Rigging,Texturing character design, and PhotoRealistic environments that come alive (Blender,HContatoudini ).",
    techSpecs: ["Blender / Cinema4D", "Rigged IK/FK Setup", "Octane Render Engine"],
    status: "CALIBRATING_GPU",
    glowColor: "rgba(0, 212, 255, 0.15)"
  },
   {
    title: "VFX ",
    icon: MonitorPlay,
    desc: "Modern and old school visual effect. Without help of AI generated imaginary. After Effects, Blender, Natron, Fusion",
    // techSpecs: ["Blender / Cinema4D", "Rigged IK/FK Setup", "Octane Render Engine"],
    // status: "CALIBRATING_GPU",
    // glowColor: "rgba(0, 212, 255, 0.15)"
  },
   {
    title: "Graphic Designing ",
    icon: MonitorPlay,
    desc: "100% Human made graphic designs experts in all kind of graphic aesthetics. PhotoShop,Illustrator, Gimp, InkScape",
    // techSpecs: ["Blender / Cinema4D", "Rigged IK/FK Setup", "Octane Render Engine"],
    // status: "CALIBRATING_GPU",
    // glowColor: "rgba(0, 212, 255, 0.15)"
  },
  // {
  //   title: "CGI & Render",
  //   icon: Cpu,
  //   desc: "High-fidelity computer generated imagery, fluid dynamics, particles, and custom meshes.",
  //   techSpecs: ["Houdini Engine", "Physically Based Rendering", "Redshift Shader Library"],
  //   status: "STANDBY_NODE",
  //   glowColor: "rgba(107, 184, 255, 0.15)"
  // },
  // {
  //   title: "VFX Production",
  //   icon: Flame,
  //   desc: "Chromakey compositing, rotoscoping, digital green screen integration, and explosive effects.",
  //   techSpecs: ["Nuke Compositing", "3D Camera Tracking", "Optical Flare Synthesis"],
  //   status: "LIVE_BUFFER",
  //   glowColor: "rgba(0, 212, 255, 0.15)"
  // },
  // {
  //   title: "Product Ads",
  //   icon: Target,
  //   desc: "Premium commercial advertisements focusing on high-concept luxury products.",
  //   techSpecs: ["Macro Photography", "Cinematic Studio Lights", "Commercial Grade LUTs"],
  //   status: "SYSTEMS_ACTIVE",
  //   glowColor: "rgba(198, 211, 225, 0.15)"
  // },
  // {
  //   title: "Social Content",
  //   icon: MessageSquare,
  //   desc: "Viral Reels, Shorts, and TikTok campaigns customized to loop seamlessly.",
  //   techSpecs: ["9:16 Vertical Crop", "Interactive Captions", "Rapid Export Pipeline"],
  //   status: "MAX_PERFORMANCE",
  //   glowColor: "rgba(107, 184, 255, 0.15)"
  // }
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
              <span className="w-1.5 h-1.5 rounded-full bg-[#16db12] animate-pulse" />
              <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-[#16db12]">
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
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 "
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
     className="relative overflow-hidden rounded-[8px] h-full p-6 bg-[#151D26]/60 border border-white/5 hover:border-white/15 transition-all duration-500 cursor-pointer flex flex-col justify-between group"

  >
    {/* Inner Glow */}
    <div
      className="
        absolute
        inset-0
        pointer-events-none
        opacity-0
        group-hover:opacity-100
        transition-opacity
        duration-500
        bg-[radial-gradient(circle_at_center,rgba(14,122,13,0.18),transparent_75%)]
      "
    />

    {/* Optional stronger center glow */}
    <div
      className="
        absolute
        left-1/2
        top-1/2
        -translate-x-1/2
        -translate-y-1/2
        w-64
        h-64
        rounded-full
        bg-[#0E7A0D]
        blur-[90px]
        opacity-0
        group-hover:opacity-15
        transition-all
        duration-500
        pointer-events-none
      "
    />

    {/* Content */}
    <div className="relative z-10">
      {/* Card Top */}
      <div className="flex items-center justify-between text-[8px] font-mono text-[#C6D3E1]/40 mb-5">
        <div className="flex items-center gap-1 bg-white/5 px-2 py-0.5 rounded-full">
        </div>
      </div>

      {/* Icon */}
      <div className="mb-4">
        <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#16db12] mb-4 group-hover:scale-110 transition-all duration-300">
          <IconComponent size={20} />
        </div>

        <h3 className="text-lg font-bold font-display text-white mb-2  transition-colors duration-300">
          {service.title}
        </h3>

        <p className="text-xs text-[#C6D3E1]/85 leading-relaxed font-light">
          {service.desc}
        </p>
      </div>
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

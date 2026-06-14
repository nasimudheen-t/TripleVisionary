import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Filter, Tv } from 'lucide-react';
import GlassCard from '../components/GlassCard';
import VideoModal from '../components/VideoModal';

// Categories
const filters = ['All', 'Commercial', 'Animation', 'Social Media', 'Product Ads', 'Corporate', 'CGI'];

// Projects
const projectsList = [
  {
    title: "NEON ASCENT 2026 // VFX CITIES",
    category: "CGI",
    categories: ["CGI", "Animation"],
    thumbnail: "/assets/vfx_city.png",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    duration: "01:24",
    client: "AXION MEDIA",
    aspect: "aspect-video"
  },
  {
    title: "CYBERNETIC INTERFACE SPECS",
    category: "Animation",
    categories: ["Animation", "Corporate"],
    thumbnail: "/assets/hud_motion.png",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    duration: "00:45",
    client: "J-SYSTEMS GROUP",
    aspect: "aspect-square"
  },
  {
    title: "AURA LUXURY ESSENCE COMMERCIAL",
    category: "Product Ads",
    categories: ["Product Ads", "Commercial", "CGI"],
    thumbnail: "/assets/cgi_product.png",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    duration: "00:30",
    client: "AURA PARIS",
    aspect: "aspect-[4/5]"
  },
  {
    title: "QUANTUM SYSTEMS CORE DEMO",
    category: "Corporate",
    categories: ["Corporate", "Animation"],
    thumbnail: "/assets/hud_motion.png",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    duration: "02:15",
    client: "Q-BYTE CORP",
    aspect: "aspect-video"
  },
  {
    title: "CHRONO EXPORT LOOP",
    category: "Social Media",
    categories: ["Social Media", "Product Ads"],
    thumbnail: "/assets/cgi_product.png",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    duration: "00:15",
    client: "CHRONO CO",
    aspect: "aspect-[3/4]"
  },
  {
    title: "KINETIC VECTOR DYNAMICS",
    category: "Animation",
    categories: ["Animation", "CGI"],
    thumbnail: "/assets/vfx_city.png",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    duration: "01:10",
    client: "VORTEX LABS",
    aspect: "aspect-video"
  }
];

export default function Work() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [modalState, setModalState] = useState({ isOpen: false, url: '', title: '' });

  const filteredProjects = activeFilter === 'All' 
    ? projectsList 
    : projectsList.filter(proj => proj.categories.includes(activeFilter));

  const openVideo = (url, title) => {
    setModalState({ isOpen: true, url, title });
  };

  return (
    <section id="work" className="relative py-24 bg-[#0B0F14] overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-5 pointer-events-none" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="text-left">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00D4FF] animate-pulse" />
              <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-[#00D4FF]">
                CASE STUDIES // STUDIO SHOWCASE
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold font-display tracking-tight">
              Featured Work
            </h2>
          </div>

          <p className="text-xs md:text-sm text-[#C6D3E1]/70 max-w-sm font-light">
            Explore our curated database of commercial ads, CGI animation sequences, VFX edits, and immersive HUD motion design systems.
          </p>
        </div>

        {/* Filter Navigation Bar */}
        <div className="flex flex-wrap items-center gap-2 mb-12 border-b border-white/5 pb-6">
          <div className="flex items-center gap-1.5 text-white/50 text-[10px] font-mono mr-4 uppercase">
            <Filter size={12} className="text-[#00D4FF]" />
            FILTER_ARCHIVES:
          </div>
          {filters.map((filter) => {
            const isActive = activeFilter === filter;
            return (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`relative px-4 py-1.5 rounded-full font-mono text-[9px] tracking-widest uppercase transition-all duration-300 border cursor-pointer
                  ${isActive 
                    ? 'bg-[#00D4FF]/10 border-[#00D4FF]/30 text-[#00D4FF] shadow-[0_0_12px_rgba(0,212,255,0.1)]' 
                    : 'bg-white/5 border-transparent text-[#C6D3E1]/75 hover:bg-white/10 hover:text-white'
                  }
                `}
              >
                {filter}
              </button>
            );
          })}
        </div>

        {/* Portfolio Masonry Grid */}
        <motion.div 
          layout
          className="columns-1 md:columns-2 lg:columns-3 gap-6 [column-fill:_balance] w-full"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="break-inside-avoid inline-block w-full mb-6 cursor-pointer group"
                onClick={() => openVideo(project.videoUrl, project.title)}
              >
                <GlassCard className="p-2.5 bg-[#10151C]/90 hover:border-white/15 transition-all overflow-hidden scanlines">
                  {/* Thumbnail display */}
                  <div className={`relative ${project.aspect} w-full rounded-xl overflow-hidden bg-black/60`}>
                    <img 
                      src={project.thumbnail} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                    />

                    {/* Dark gradient shadow */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80" />

                    {/* Technical details / Hover State */}
                    <div className="absolute top-3 right-3 font-mono text-[8px] bg-black/50 border border-white/10 text-[#00D4FF] py-0.5 px-2 rounded-full backdrop-blur-sm">
                      {project.duration} MIN
                    </div>

                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center backdrop-blur-sm group-hover:bg-[#00D4FF] group-hover:text-[#0B0F14] group-hover:border-[#00D4FF] transition-all duration-300 scale-90 group-hover:scale-100 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
                        <Play size={16} fill="currentColor" className="ml-0.5" />
                      </div>
                    </div>
                  </div>

                  {/* Card Metadata */}
                  <div className="px-2.5 py-3 mt-1.5 flex flex-col gap-1.5">
                    <div className="flex items-center justify-between text-[8px] font-mono text-[#C6D3E1]/50">
                      <span>CLIENT: {project.client}</span>
                      <span className="text-[#6BB8FF]">//{project.category}</span>
                    </div>
                    <h3 className="font-display font-bold text-xs tracking-wider text-white group-hover:text-[#00D4FF] transition-colors leading-tight">
                      {project.title}
                    </h3>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Embedded Player */}
      <VideoModal
        isOpen={modalState.isOpen}
        onClose={() => setModalState(prev => ({ ...prev, isOpen: false }))}
        videoUrl={modalState.url}
        videoTitle={modalState.title}
      />
    </section>
  );
}

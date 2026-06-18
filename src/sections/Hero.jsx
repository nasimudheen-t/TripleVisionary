import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, Calendar, Cpu, Activity, BarChart2, Layers } from 'lucide-react';
import GlassCard from '../components/GlassCard';
import VideoModal from '../components/VideoModal';

export default function Hero({ onPageChange }) {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [renderProgress, setRenderProgress] = useState(0);
  const [coords, setCoords] = useState({ x: 140, y: 80 });
  const [gpuTemp, setGpuTemp] = useState(64);

  // Animate render progress loop
  useEffect(() => {
    const interval = setInterval(() => {
      setRenderProgress((prev) => {
        if (prev >= 100) return 0;
        return +(prev + 0.4).toFixed(1);
      });
    }, 80);
    return () => clearInterval(interval);
  }, []);

  // Animate coordinates and temperature subtly
  useEffect(() => {
    const interval = setInterval(() => {
      setCoords({
        x: +(120 + Math.sin(Date.now() / 1000) * 80).toFixed(1),
        y: +(90 + Math.cos(Date.now() / 800) * 50).toFixed(1),
      });
      setGpuTemp(Math.floor(62 + Math.random() * 5));
    }, 100);
    return () => clearInterval(interval);
  }, []);

  const handleStartProjectClick = (e) => {
    e.preventDefault();
    if (onPageChange) {
      onPageChange('/contact');
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00D4FF]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Side Content */}
        <div className="lg:col-span-6 flex flex-col justify-center text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 mb-4"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#00D4FF] animate-pulse" />
            <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-[#00D4FF]">
              PREMIUM CREATIVE AGENCY // 2026
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl font-bold font-display tracking-tight leading-none mb-6"
          >
            Stories <br />
            <span className="bg-gradient-to-r from-[#00D4FF] via-[#6BB8FF] to-white bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(0,212,255,0.2)]">
              That Move.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base md:text-lg text-[#C6D3E1] leading-relaxed mb-8 max-w-xl font-light"
          >
            We create cinematic edits, motion graphics, animations and visual experiences that leave lasting impressions. Bridging classic studio details with futuristic layouts.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4"
          >
            <button
              onClick={() => setIsVideoOpen(true)}
              className="px-6 py-3.5 rounded-full bg-gradient-to-r from-[#00D4FF] to-[#6BB8FF] text-[#0B0F14] font-mono text-xs font-bold tracking-widest uppercase flex items-center gap-2 shadow-[0_0_30px_rgba(0,212,255,0.25)] hover:shadow-[0_0_40px_rgba(0,212,255,0.4)] hover:scale-105 active:scale-95 transition-all cursor-pointer"
            >
              <Play size={14} fill="currentColor" />
              WATCH SHOWREEL
            </button>
            
          </motion.div>
        </div>

        {/* Right Side HUD Panel */}
        <div className="lg:col-span-6 relative w-full flex justify-center">
       
        </div>
      </div>

      {/* Showreel video modal */}
      <VideoModal
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
        videoUrl="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        videoTitle="Vortex Creative Showreel 2026"
      />
    </section>
  );
}

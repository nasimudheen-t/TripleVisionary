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
            
            <a
              href="#contact"
              onClick={handleStartProjectClick}
              className="px-6 py-3.5 rounded-full bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/20 font-mono text-xs font-bold tracking-widest uppercase flex items-center gap-2 transition-all cursor-pointer"
            >
              <Calendar size={14} className="text-[#6BB8FF]" />
              START YOUR PROJECT
            </a>
          </motion.div>
        </div>

        {/* Right Side HUD Panel */}
        <div className="lg:col-span-6 relative w-full flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-[500px]"
          >
            <GlassCard className="p-5 bg-[#10151C]/90 border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.6)] scanlines">
              {/* HUD Header */}
              <div className="flex items-center justify-between border-b border-white/5 pb-3 mb-4 text-[10px] font-mono text-[#C6D3E1]/60">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping" />
                  <span>REC // MASTER_COMP_2026</span>
                </div>
                <div className="flex items-center gap-2">
                  <Cpu size={12} className="text-[#00D4FF]" />
                  <span>GPU_TEMP: {gpuTemp}°C</span>
                </div>
              </div>

              {/* Grid with Motion Tracking */}
              <div className="relative aspect-[16/10] w-full bg-black/40 rounded-lg overflow-hidden border border-white/5 mb-4 grid-bg-fine">
                {/* HUD Coordinates / Crosshair */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-8 h-8 border border-[#00D4FF]/20 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-[#00D4FF]/40 rounded-full" />
                  </div>
                </div>

                {/* SVG Motion Tracker Line */}
                <svg className="absolute inset-0 w-full h-full">
                  {/* Motion path */}
                  <path 
                    d="M 50,150 Q 150,50 250,120 T 450,60" 
                    fill="none" 
                    stroke="rgba(0, 212, 255, 0.15)" 
                    strokeWidth="1.5" 
                    strokeDasharray="4,4" 
                  />
                  {/* Active tracker line */}
                  <line x1={coords.x} y1="0" x2={coords.x} y2="250" stroke="rgba(0, 212, 255, 0.1)" strokeWidth="1" />
                  <line x1="0" y1={coords.y} x2="500" y2={coords.y} stroke="rgba(0, 212, 255, 0.1)" strokeWidth="1" />
                  {/* Tracking dot */}
                  <circle cx={coords.x} cy={coords.y} r="5" fill="#00D4FF" className="shadow-[0_0_10px_#00D4FF]" />
                  <circle cx={coords.x} cy={coords.y} r="10" fill="none" stroke="#00D4FF" strokeWidth="1" opacity="0.5" className="animate-ping" />
                </svg>

                {/* Tracking Data Overlay */}
                <div className="absolute top-3 left-3 font-mono text-[9px] text-[#C6D3E1]/60 flex flex-col gap-0.5 bg-black/35 p-1.5 rounded border border-white/5 backdrop-blur-sm">
                  <span>POINT_ID: TRK_V08</span>
                  <span>POS_X: {coords.x}px</span>
                  <span>POS_Y: {coords.y}px</span>
                  <span className="text-[#00D4FF]">LOCK_STATUS: TRUE</span>
                </div>

                <div className="absolute bottom-3 right-3 font-mono text-[9px] text-[#C6D3E1]/40">
                  REF_HZ: 239.98 FPS
                </div>
              </div>

              {/* Rendering Progress Bar */}
              <div className="mb-4">
                <div className="flex items-center justify-between text-[10px] font-mono mb-1 text-[#C6D3E1]/80">
                  <div className="flex items-center gap-1.5">
                    <Activity size={10} className="text-[#6BB8FF] animate-pulse" />
                    <span>EXPORT QUEUE: COMP_v4_FINAL</span>
                  </div>
                  <span className="text-[#00D4FF] font-semibold">{renderProgress}%</span>
                </div>
                <div className="w-full h-2 bg-black/50 rounded-full overflow-hidden p-[1px] border border-white/5">
                  <div 
                    className="h-full bg-gradient-to-r from-[#00D4FF] to-[#6BB8FF] rounded-full shadow-[0_0_6px_#00D4FF] transition-all"
                    style={{ width: `${renderProgress}%` }}
                  />
                </div>
              </div>

              {/* Timeline Track Visualizer */}
              <div className="space-y-1.5 border-t border-white/5 pt-3">
                <div className="flex items-center gap-1.5 text-[10px] font-mono text-[#C6D3E1]/60 mb-2">
                  <Layers size={10} className="text-[#00D4FF]" />
                  <span>MULTI-TRACK LAYERS</span>
                </div>
                
                {/* Track 1 */}
                <div className="flex items-center gap-2">
                  <span className="w-12 font-mono text-[8px] text-[#C6D3E1]/40 uppercase text-right">VFX_MAIN</span>
                  <div className="flex-1 h-3 bg-black/30 rounded border border-white/5 relative overflow-hidden">
                    <motion.div 
                      className="absolute top-0 bottom-0 left-[20%] right-[30%] bg-gradient-to-r from-[#00D4FF]/25 to-[#00D4FF]/50 border-l border-r border-[#00D4FF]"
                      animate={{ x: [-5, 5, -5] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    />
                  </div>
                </div>

                {/* Track 2 */}
                <div className="flex items-center gap-2">
                  <span className="w-12 font-mono text-[8px] text-[#C6D3E1]/40 uppercase text-right">3D_RENDER</span>
                  <div className="flex-1 h-3 bg-black/30 rounded border border-white/5 relative overflow-hidden">
                    <motion.div 
                      className="absolute top-0 bottom-0 left-[40%] right-[10%] bg-gradient-to-r from-[#6BB8FF]/20 to-[#6BB8FF]/45 border-l border-r border-[#6BB8FF]"
                      animate={{ x: [5, -5, 5] }}
                      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    />
                  </div>
                </div>

                {/* Track 3 (Audio Waveform mockup) */}
                <div className="flex items-center gap-2">
                  <span className="w-12 font-mono text-[8px] text-[#C6D3E1]/40 uppercase text-right">AUDIO_MX</span>
                  <div className="flex-1 h-3 bg-black/30 rounded border border-white/5 flex items-center justify-around px-2">
                    {[...Array(24)].map((_, i) => (
                      <motion.div 
                        key={i} 
                        className="w-[2px] bg-[#C6D3E1]/30 rounded-full"
                        animate={{ height: [4, Math.random() * 10 + 2, 4] }}
                        transition={{ duration: 0.6 + Math.random() * 0.4, repeat: Infinity, ease: "easeInOut" }}
                        style={{ height: '6px' }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </GlassCard>
          </motion.div>
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

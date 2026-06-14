import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, RotateCcw, Sliders, Layers, Monitor, HelpCircle, Activity } from 'lucide-react';
import GlassCard from '../components/GlassCard';

export default function InteractiveMotion() {
  const [playhead, setPlayhead] = useState(30); // 0 to 100%
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeTrack, setActiveTrack] = useState('Position');
  const [easingPreset, setEasingPreset] = useState('Linear');
  
  // Animation loop
  useEffect(() => {
    let animId;
    if (isPlaying) {
      const updatePlayhead = () => {
        setPlayhead((prev) => {
          if (prev >= 100) return 0;
          return +(prev + 0.5).toFixed(1);
        });
        animId = requestAnimationFrame(updatePlayhead);
      };
      animId = requestAnimationFrame(updatePlayhead);
    }
    return () => cancelAnimationFrame(animId);
  }, [isPlaying]);

  // Interpolate transformation variables based on playhead and easing preset
  const getInterpolatedValues = (p) => {
    // Convert 0-100 percentage to a fraction 0-1
    const t = p / 100;
    
    let x, y, scale, rotate, opacity, glow;
    
    // SVG path coordinate mapping (width: 400, height: 200)
    // Starting coordinate (50, 100) to ending coordinate (350, 100)
    // Bezier control points simulate a wave path
    x = 50 + t * 300; 
    
    if (easingPreset === 'Pulse Wave') {
      y = 100 + Math.sin(t * Math.PI * 6) * 45;
      scale = 1 + Math.sin(t * Math.PI * 6) * 0.25;
      rotate = t * 720;
      glow = 10 + Math.sin(t * Math.PI * 6) * 10;
    } else if (easingPreset === 'Orbit Trace') {
      y = 100 + Math.cos(t * Math.PI * 2) * 50;
      x = 200 + Math.sin(t * Math.PI * 2) * 100;
      scale = 0.95 + Math.sin(t * Math.PI * 2) * 0.3;
      rotate = t * 360;
      glow = 8;
    } else { // Linear / Default
      y = 100 + Math.sin(t * Math.PI * 2) * 35;
      scale = 0.8 + t * 0.4;
      rotate = t * 360;
      glow = 5 + t * 10;
    }
    
    opacity = 0.3 + t * 0.7;
    
    return { x, y, scale, rotate, opacity, glow };
  };

  const currentValues = getInterpolatedValues(playhead);

  return (
    <section id="process-interactive" className="relative py-24 bg-[#10151C]/60 border-b border-white/5 overflow-hidden">
      <div className="absolute inset-0 grid-bg-fine opacity-10 pointer-events-none" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center text-center mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00D4FF] animate-pulse" />
            <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-[#00D4FF]">
              REAL-TIME SIMULATOR // AE_ENGINE_v2
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold font-display tracking-tight mb-4">
            Interactive Motion System
          </h2>
          <p className="text-sm md:text-base text-[#C6D3E1]/70 max-w-2xl font-light">
            Tweak our keyframe tracks, scrub the active playhead timeline, and witness our custom rendering engine calculate motion curves on the fly.
          </p>
        </div>

        {/* Workspace Deck */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* LEFT: Preview Monitor Panel */}
          <div className="lg:col-span-5 flex flex-col">
            <GlassCard className="flex-1 p-5 bg-black/40 border border-white/5 flex flex-col justify-between scanlines">
              {/* Monitor Header */}
              <div className="flex items-center justify-between border-b border-white/5 pb-2.5 mb-4 text-[9px] font-mono text-[#C6D3E1]/50">
                <div className="flex items-center gap-1.5">
                  <Monitor size={12} className="text-[#00D4FF]" />
                  <span>OUTPUT MONITOR // CAM_MAIN</span>
                </div>
                <span>PRESET: {easingPreset}</span>
              </div>

              {/* Visual canvas */}
              <div className="relative w-full aspect-[4/3] bg-black/60 rounded-xl overflow-hidden border border-white/5 flex items-center justify-center">
                {/* SVG Motion Path Line */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none">
                  {easingPreset === 'Pulse Wave' ? (
                    <path 
                      d="M 50,100 Q 100,55 150,100 T 250,100 T 350,100" 
                      fill="none" 
                      stroke="rgba(0,212,255,0.08)" 
                      strokeWidth="2" 
                    />
                  ) : easingPreset === 'Orbit Trace' ? (
                    <ellipse 
                      cx="200" 
                      cy="100" 
                      rx="100" 
                      ry="50" 
                      fill="none" 
                      stroke="rgba(0,212,255,0.08)" 
                      strokeWidth="2" 
                    />
                  ) : (
                    <path 
                      d="M 50,100 Q 200,65 350,135" 
                      fill="none" 
                      stroke="rgba(0,212,255,0.08)" 
                      strokeWidth="2" 
                    />
                  )}
                  
                  {/* Axis lines */}
                  <line x1="0" y1="100" x2="400" y2="100" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
                  <line x1="200" y1="0" x2="200" y2="300" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
                </svg>

                {/* Animated Node Symbol */}
                <div 
                  className="absolute w-8 h-8 rounded-full border border-[#00D4FF] flex items-center justify-center transition-all duration-75"
                  style={{
                    transform: `translate(${currentValues.x - 200}px, ${currentValues.y - 150}px) scale(${currentValues.scale}) rotate(${currentValues.rotate}deg)`,
                    opacity: currentValues.opacity,
                    boxShadow: `0 0 ${currentValues.glow}px rgba(0, 212, 255, 0.6)`,
                    background: 'rgba(0, 212, 255, 0.15)'
                  }}
                >
                  <div className="w-1.5 h-1.5 bg-[#00D4FF] rounded-full" />
                  <div className="absolute inset-0 border border-dotted border-[#6BB8FF]/50 rounded-full animate-spin-slow" />
                </div>

                {/* Grid guidelines HUD */}
                <div className="absolute bottom-3 left-3 font-mono text-[8px] text-[#C6D3E1]/40 flex flex-col bg-black/45 p-2 rounded border border-white/5">
                  <span>SCALE: {currentValues.scale.toFixed(2)}x</span>
                  <span>ROTATION: {Math.floor(currentValues.rotate)}°</span>
                  <span>TRANS_X: {Math.floor(currentValues.x)}px</span>
                  <span>TRANS_Y: {Math.floor(currentValues.y)}px</span>
                </div>
              </div>

              {/* Monitor controls footer */}
              <div className="flex justify-between items-center mt-4 text-[9px] font-mono text-[#C6D3E1]/50 border-t border-white/5 pt-3">
                <span className="text-[#00D4FF]">STATUS: PLAYING // LOCK_FPS</span>
                <span>TIMECODE: 00:00:{(playhead * 0.24).toFixed(0).padStart(2, '0')}</span>
              </div>
            </GlassCard>
          </div>

          {/* RIGHT: Editor Dashboard / Timeline panel */}
          <div className="lg:col-span-7 flex flex-col">
            <GlassCard className="flex-1 p-5 bg-[#151D26]/85 border border-white/5 flex flex-col justify-between">
              
              {/* Controls bar */}
              <div>
                <div className="flex items-center justify-between border-b border-white/5 pb-3 mb-5">
                  <div className="flex items-center gap-1">
                    <Sliders size={14} className="text-[#6BB8FF]" />
                    <span className="font-mono text-xs font-bold text-white uppercase">TIMELINE EDIT PANEL</span>
                  </div>
                  
                  {/* Preset Easing Selectors */}
                  <div className="flex gap-1.5">
                    {['Wave Curve', 'Pulse Wave', 'Orbit Trace'].map((preset) => (
                      <button
                        key={preset}
                        onClick={() => setEasingPreset(preset)}
                        className={`px-2.5 py-1 rounded font-mono text-[8px] uppercase tracking-wider transition-colors cursor-pointer
                          ${easingPreset === preset 
                            ? 'bg-[#00D4FF]/20 text-[#00D4FF] border border-[#00D4FF]/30' 
                            : 'bg-white/5 text-[#C6D3E1]/60 hover:bg-white/10 hover:text-white'
                          }
                        `}
                      >
                        {preset}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Timeline Tracks Section */}
                <div className="space-y-4">
                  {/* Playhead scrub line */}
                  <div className="relative pb-2 mb-2 border-b border-white/5">
                    <div className="flex items-center justify-between text-[9px] font-mono text-[#C6D3E1]/50 mb-1">
                      <span>0.00s</span>
                      <span className="text-[#00D4FF] font-bold">PLAYHEAD: {playhead}%</span>
                      <span>2.40s</span>
                    </div>
                    {/* Scrub Slider */}
                    <input 
                      type="range" 
                      min="0" 
                      max="100" 
                      step="0.1"
                      value={playhead}
                      onChange={(e) => {
                        setPlayhead(parseFloat(e.target.value));
                        setIsPlaying(false); // pause on manually scrubbing
                      }}
                      className="w-full accent-[#00D4FF] bg-black/40 h-1.5 rounded-lg cursor-pointer appearance-none"
                    />
                  </div>

                  {/* Multi-track listing */}
                  <div className="space-y-3 font-mono text-[10px]">
                    {[
                      { name: 'Position (X, Y)', color: 'bg-[#00D4FF]' },
                      { name: 'Scale (Z-Axis)', color: 'bg-[#6BB8FF]' },
                      { name: 'Rotation (Roll)', color: 'bg-[#C6D3E1]' },
                      { name: 'Glow Intensity', color: 'bg-[#00D4FF]/80' }
                    ].map((track) => (
                      <div key={track.name} className="grid grid-cols-12 items-center gap-4 py-1.5 hover:bg-white/5 rounded px-2 transition-all">
                        <div className="col-span-3 text-[#C6D3E1]/80 text-[9px] flex items-center gap-1.5">
                          <Layers size={10} className="text-[#6BB8FF]" />
                          {track.name}
                        </div>
                        {/* Simulated track keyframes */}
                        <div className="col-span-9 h-6 bg-black/30 rounded border border-white/5 relative flex items-center">
                          {/* Dotted center axis line */}
                          <div className="absolute top-1/2 left-0 right-0 h-[1px] border-t border-dotted border-white/10" />

                          {/* Keyframe nodes (Diamonds) */}
                          <div className="absolute left-[10%] w-2.5 h-2.5 bg-yellow-500/80 rotate-45 border border-yellow-300 cursor-pointer shadow-[0_0_8px_rgba(234,179,8,0.5)]" title="Keyframe start" />
                          <div className="absolute left-[40%] w-2.5 h-2.5 bg-yellow-500/80 rotate-45 border border-yellow-300 cursor-pointer shadow-[0_0_8px_rgba(234,179,8,0.5)]" title="Keyframe pulse" />
                          <div className="absolute left-[75%] w-2.5 h-2.5 bg-yellow-500/80 rotate-45 border border-yellow-300 cursor-pointer shadow-[0_0_8px_rgba(234,179,8,0.5)]" title="Keyframe release" />
                          <div className="absolute right-[10%] w-2.5 h-2.5 bg-yellow-500/80 rotate-45 border border-yellow-300 cursor-pointer shadow-[0_0_8px_rgba(234,179,8,0.5)]" title="Keyframe end" />

                          {/* Playhead indicator bar */}
                          <div 
                            className="absolute top-0 bottom-0 w-[2px] bg-[#00D4FF] shadow-[0_0_6px_#00D4FF] pointer-events-none"
                            style={{ left: `${playhead}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Playback Controls & Action Deck */}
              <div className="flex items-center justify-between border-t border-white/5 pt-5 mt-6">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="w-10 h-10 rounded-lg bg-[#00D4FF] hover:bg-[#00D4FF]/90 text-[#0B0F14] flex items-center justify-center transition-colors shadow-[0_0_15px_rgba(0,212,255,0.2)] cursor-pointer"
                  >
                    {isPlaying ? <Pause size={18} fill="currentColor" /> : <Play size={18} fill="currentColor" className="ml-0.5" />}
                  </button>
                  
                  <button
                    onClick={() => {
                      setPlayhead(0);
                      setIsPlaying(false);
                    }}
                    className="w-10 h-10 rounded-lg bg-white/5 hover:bg-white/10 text-white border border-white/10 flex items-center justify-center transition-colors cursor-pointer"
                    title="Rewind Timeline"
                  >
                    <RotateCcw size={16} />
                  </button>
                </div>

                <div className="flex items-center gap-3">
                  <div className="text-right">
                    <span className="block text-[8px] font-mono text-[#C6D3E1]/40 uppercase">RENDER QUEUE</span>
                    <span className="block text-[10px] font-mono text-[#00D4FF] font-bold">READY TO EXPORT</span>
                  </div>
                  <button 
                    onClick={() => alert("Simulating Render Export... Compiled successfully.")}
                    className="px-4 py-2.5 rounded-lg bg-[#6BB8FF] hover:bg-[#6BB8FF]/90 text-[#0B0F14] font-mono text-[10px] font-bold tracking-widest uppercase shadow-[0_0_12px_rgba(107,184,255,0.2)] transition-all cursor-pointer"
                  >
                    COMPILE COMP
                  </button>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import { motion } from 'framer-motion';

export default function BackgroundEffects() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Base theme background */}
      <div className="absolute inset-0 bg-[#0B0F14]" />
      
      {/* High-tech overlay grids */}
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute inset-0 grid-bg-fine opacity-20" />
      
      {/* Ambient gradient glows */}
      <div 
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full opacity-[0.06] blur-[120px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #00D4FF 0%, transparent 70%)',
        }}
      />
      <div 
        className="absolute bottom-1/3 right-1/4 w-[600px] h-[600px] rounded-full opacity-[0.08] blur-[140px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #6BB8FF 0%, transparent 70%)',
        }}
      />
      <div 
        className="absolute top-2/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full opacity-[0.04] blur-[150px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #00D4FF 0%, transparent 75%)',
        }}
      />

      {/* Floating dust particles */}
      {Array.from({ length: 15 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-[#6BB8FF] rounded-full opacity-[0.15]"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, Math.random() * -60 - 20, 0],
            x: [0, Math.random() * 40 - 20, 0],
            opacity: [0.1, 0.4, 0.1],
          }}
          transition={{
            duration: Math.random() * 12 + 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
      
      {/* Subtle floating lines */}
      {Array.from({ length: 4 }).map((_, i) => (
        <motion.div
          key={`line-${i}`}
          className="absolute w-[1px] bg-gradient-to-b from-transparent via-[#00D4FF]/10 to-transparent"
          style={{
            left: `${20 + i * 20}%`,
            top: 0,
            bottom: 0,
          }}
          animate={{
            opacity: [0.08, 0.2, 0.08],
            x: [0, 8, 0],
          }}
          transition={{
            duration: Math.random() * 8 + 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 1.5,
          }}
        />
      ))}
    </div>
  );
}

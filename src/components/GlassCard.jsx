import React, { useRef, useState } from 'react';

export default function GlassCard({ children, className = '', hoverGlow = true, glowColor = 'rgba(0, 212, 255, 0.12)', ...props }) {
  const cardRef = useRef(null);
  const [glowOffset, setGlowOffset] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setGlowOffset({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative glass-panel rounded-2xl overflow-hidden transition-all duration-300 ${className}`}
      {...props}
    >
      {/* Radial Hover Glow */}
      {hoverGlow && isHovered && (
        <div
          className="pointer-events-none absolute -inset-px transition-opacity duration-300"
          style={{
            background: `radial-gradient(350px circle at ${glowOffset.x}px ${glowOffset.y}px, ${glowColor}, transparent 40%)`,
          }}
        />
      )}
      
      {/* Corner Apple-style HUD markers */}
      <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/15 rounded-tl" />
      <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white/15 rounded-tr" />
      <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white/15 rounded-bl" />
      <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/15 rounded-br" />

      {/* Content wrapper */}
      <div className="relative z-10 h-full w-full">
        {children}
      </div>
    </div>
  );
}

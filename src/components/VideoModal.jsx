import React from 'react';
import { X, Cpu } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function VideoModal({ isOpen, onClose, videoUrl, videoTitle }) {
  if (!isOpen) return null;

  // Simple heuristic to check if it's direct MP4 or external iframe
  const isMp4 = videoUrl && (
    videoUrl.endsWith('.mp4') || 
    videoUrl.includes('mp4') || 
    (!videoUrl.includes('youtube.com') && !videoUrl.includes('youtu.be') && !videoUrl.includes('vimeo.com'))
  );
  
  const getEmbedUrl = (url) => {
    if (!url) return '';
    // YouTube
    const ytMatch = url.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/i);
    if (ytMatch) {
      return `https://www.youtube.com/embed/${ytMatch[1]}?autoplay=1&rel=0`;
    }
    // Vimeo
    const vimeoMatch = url.match(/(?:vimeo\.com\/|player\.vimeo\.com\/video\/)([0-9]+)/i);
    if (vimeoMatch) {
      return `https://player.vimeo.com/video/${vimeoMatch[1]}?autoplay=1`;
    }
    return url;
  };

  const embedUrl = getEmbedUrl(videoUrl);

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
         className="relative w-full max-w-4xl glass-panel rounded-2xl overflow-hidden shadow-2xl border border-white/10 z-10"
        >
          {/* Top HUD bar */}
          <div className="flex items-center justify-between px-4 py-3 bg-[#10151C]/90">
          
            
            <div className="flex items-center gap-4">
              <button 
                onClick={onClose}
                className="p-1 hover:bg-white/10 rounded-md transition-colors text-white cursor-pointer"
              >
                <X size={16} />
              </button>
            </div>
          </div>

          {/* Embedded Content */}
          <div className="aspect-video bg-black relative">
            {isMp4 ? (
              <video 
                src={videoUrl} 
                controls 
                autoPlay 
                className="w-full h-full"
              />
            ) : (
              <iframe
                src={embedUrl}
                title={videoTitle || "Video Feed"}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full"
              />
            )}
          </div>
          
          {/* Bottom HUD metadata */}
          <div className="flex items-center justify-between px-4 py-2 bg-[#10151C]/90">
            <span>TripleVisionary</span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, PhoneCall, Mail, MessageSquare, ExternalLink,Briefcase } from "lucide-react";
import GlassCard from "../components/GlassCard";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "Commercial Ads",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    // Simulate cyber-transmission delay
    setTimeout(() => {
      setIsSending(false);
      setIsSuccess(true);
      setFormData({
        name: "",
        email: "",
        projectType: "Commercial Ads",
        message: "",
      });

      // Auto close success panel
      setTimeout(() => setIsSuccess(false), 5000);
    }, 2500);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section
      id="contact"
      className="relative py-24 bg-[#0B0F14] overflow-hidden"
    >
      <div className="absolute inset-0 grid-bg opacity-5 pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-[#00D4FF]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center text-center mb-16">
          <div className="flex items-center gap-2 mb-3">
          </div>
          <h2 className="text-3xl md:text-5xl font-bold font-display tracking-tight mb-4">
            Start Your Project
          </h2>
          <p className="text-sm md:text-base text-[#C6D3E1]/70 max-w-xl font-light">
            Initialize transmission. Connect with our producers to establish
            timeline targets.
          </p>
        </div>

        {/* Command center layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT: Contact Form Command Console */}
          <div className="lg:col-span-7 relative">
            <GlassCard className="p-6 md:p-8 bg-[#10151C]/90 border border-white/10 scanlines">
              <div className="flex items-center justify-between border-b border-white/5 pb-3 mb-6 font-mono text-[9px] text-[#C6D3E1]/50">
                <div className="flex items-center gap-1.5">
                 
                </div>
              </div>

              {/* Form Element */}
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="name"
                    className="font-mono text-[9px] uppercase tracking-wider text-[#C6D3E1]/60"
                  >
                    Sender Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="e.g. JOHN DOE"
                    className="w-full bg-black/45 border border-white/10 rounded-xl px-4 py-3 text-xs text-white placeholder-white/20 focus:outline-none focus:border-[#00D4FF] focus:ring-1 focus:ring-[#00D4FF]/30 transition-all font-mono"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="email"
                    className="font-mono text-[9px] uppercase tracking-wider text-[#C6D3E1]/60"
                  >
                    Routing Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="e.g. CONTACT@YOURCOMPANY.COM"
                    className="w-full bg-black/45 border border-white/10 rounded-xl px-4 py-3 text-xs text-white placeholder-white/20 focus:outline-none focus:border-[#00D4FF] focus:ring-1 focus:ring-[#00D4FF]/30 transition-all font-mono"
                  />
                </div>

                {/* Project Pipeline Selection */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="projectType"
                    className="font-mono text-[9px] uppercase tracking-wider text-[#C6D3E1]/60"
                  >
                    Core Pipeline Segment
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleInputChange}
                    className="w-full bg-[#10151C] border border-white/10 rounded-xl px-4 py-3 text-xs text-[#C6D3E1] focus:outline-none focus:border-[#00D4FF] focus:ring-1 focus:ring-[#00D4FF]/30 transition-all font-mono"
                  >
                    <option value="Commercial Ads">
                      COMMERCIAL ADVERTISEMENTS
                    </option>
                    <option value="Motion Graphics">
                      MOTION GRAPHICS / HUD
                    </option>
                    <option value="3D CGI Animation">3D CGI & ANIMATION</option>
                    <option value="VFX Compositing">
                      VFX COMPOSITING & EDITS
                    </option>
                    <option value="YouTube Content">
                      YOUTUBE CONTENT EDITING
                    </option>
                  </select>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="message"
                    className="font-mono text-[9px] uppercase tracking-wider text-[#C6D3E1]/60"
                  >
                    Project Specifications // Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows="4"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="PROVIDE TIMELINE TARGETS, REFERENCE LINKS..."
                    className="w-full bg-black/45 border border-white/10 rounded-xl px-4 py-3 text-xs text-white placeholder-white/20 focus:outline-none focus:border-[#00D4FF] focus:ring-1 focus:ring-[#00D4FF]/30 transition-all font-mono resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSending}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#00D4FF] to-[#6BB8FF] text-[#0B0F14] font-mono text-xs font-bold tracking-widest uppercase flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(0,212,255,0.2)] hover:brightness-110 active:scale-95 disabled:opacity-50 transition-all cursor-pointer"
                >
                  <Send size={14} />
                  SEND TRANSMISSION
                </button>
              </form>

              {/* Loader / Success animations overlay */}
              <AnimatePresence>
                {isSending && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-[#10151C]/90 rounded-2xl flex flex-col items-center justify-center p-6 text-center z-20 font-mono text-xs text-[#00D4FF]"
                  >
                    <div className="w-12 h-12 border-2 border-[#00D4FF]/30 border-t-[#00D4FF] rounded-full animate-spin mb-4" />
                    <span className="animate-pulse">
                      ENCRYPTING DATA PACKETS //
                    </span>
                    <span className="text-[10px] text-[#C6D3E1]/50 mt-1">
                      ESTABLISHING SECURED NODE CONNECTION...
                    </span>
                  </motion.div>
                )}

                {isSuccess && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-[#10151C]/95 rounded-2xl flex flex-col items-center justify-center p-6 text-center z-20 font-mono text-xs text-[#6BB8FF]"
                  >
                    <div className="w-12 h-12 rounded-full bg-[#6BB8FF]/10 flex items-center justify-center border border-[#6BB8FF]/30 text-[#6BB8FF] mb-4">
                      <span className="text-xl">✓</span>
                    </div>
                    <span className="font-bold uppercase tracking-wider text-white">
                      TRANSMISSION SENT SUCCESSFULLY
                    </span>
                    <span className="text-[10px] text-[#C6D3E1]/60 mt-1.5 max-w-xs">
                      Our system logs have captured your specifications. A
                      producer will ping your coordinates within 12 hours.
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>
            </GlassCard>
          </div>

          {/* RIGHT: Quick Action Widgets Panel */}
          <div className="lg:col-span-5 space-y-6">
            {/* Widget 1: WhatsApp */}
            <a
              href="https://wa.me/+91 9388121465"
              target="_blank"
              rel="noopener noreferrer"
              className="block group cursor-pointer"
            >
              <GlassCard className="p-5 bg-[#151D26]/60 border border-white/5 group-hover:border-green-500/30 transition-all">
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400 flex items-center justify-center group-hover:bg-green-500 group-hover:text-black group-hover:border-green-500 transition-all duration-300">
                    <MessageSquare size={20} />
                  </div>
                  <div>
                    <span className="block text-[8px] font-mono text-[#C6D3E1]/40 uppercase">
                      DIRECT DISPATCH
                    </span>
                    <h4 className="font-display font-bold text-sm text-white group-hover:text-green-400 transition-colors">
                      Ping via WhatsApp
                    </h4>
                    <p className="text-[10px] text-[#C6D3E1]/70 mt-1 font-light">
                      Start an instant dialogue regarding budget scoping and
                      timelines.
                    </p>
                  </div>
                </div>
              </GlassCard>
            </a>

            {/* Widget 2: Email */}
            <a
              href="mailto:triplevisionary@protonmail.com"
              className="block group cursor-pointer"
            >
              <GlassCard className="p-5 bg-[#151D26]/60 border border-white/5 group-hover:border-[#00D4FF]/30 transition-all">
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-[#00D4FF]/10 border border-[#00D4FF]/20 text-[#00D4FF] flex items-center justify-center group-hover:bg-[#00D4FF] group-hover:text-black group-hover:border-[#00D4FF] transition-all duration-300">
                    <Mail size={20} />
                  </div>
                  <div>
                    <span className="block text-[8px] font-mono text-[#C6D3E1]/40 uppercase">
                      E-MAIL DIRECTORY
                    </span>
                    <h4 className="font-display font-bold text-sm text-white group-hover:text-[#00D4FF] transition-colors">
                      triplevisionary@protonmail.com
                    </h4>
                    <p className="text-[10px] text-[#C6D3E1]/70 mt-1 font-light">
                      Send raw story briefs, video assets, or RFP dossiers
                      directly.
                    </p>
                  </div>
                </div>
              </GlassCard>
            </a>

            {/* Widget 3: Book a Call */}
            <a href="tel:+919388121465" className="block group cursor-pointer">
              <GlassCard className="p-5 bg-[#151D26]/60 border border-white/5 group-hover:border-[#6BB8FF]/30 transition-all">
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-[#6BB8FF]/10 border border-[#6BB8FF]/20 text-[#6BB8FF] flex items-center justify-center group-hover:bg-[#6BB8FF] group-hover:text-black group-hover:border-[#6BB8FF] transition-all duration-300">
                    <PhoneCall size={20} />
                  </div>

                  <div>
                    <span className="block text-[8px] font-mono text-[#C6D3E1]/40 uppercase">
                      PHONE_CONTACT
                    </span>

                    <h4 className="font-display font-bold text-sm text-white group-hover:text-[#6BB8FF] transition-colors">
                      +91 93881 21465
                    </h4>

                    <p className="text-[10px] text-[#C6D3E1]/70 mt-1 font-light">
                      Tap to call us directly.
                    </p>
                  </div>
                </div>
              </GlassCard>
            </a>
                {/* Upscrolled */}
             <a href="https://share.upscrolled.com/en/user/dd096cdb-b9f6-4897-a1c0-546f3b7ce20e/" target="_blank" className="block group cursor-pointer">
              <GlassCard className="p-5 bg-[#151D26]/60 border border-white/5 group-hover:border-[#6BB8FF]/30 transition-all">
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-[#6BB8FF]/10 border border-[#6BB8FF]/20 text-[#6BB8FF] flex items-center justify-center group-hover:bg-[#6BB8FF] group-hover:text-black group-hover:border-[#6BB8FF] transition-all duration-300">
                    <ExternalLink size={20} />
                  </div>

                  <div>
                    <span className="block text-[8px] font-mono text-[#C6D3E1]/40 uppercase">
                     
                    </span>

                    <h4 className="font-display font-bold text-sm text-white group-hover:text-[#6BB8FF] transition-colors">
                     UPSCROLLED
                    </h4>

                    <p className="text-[10px] text-[#C6D3E1]/70 mt-1 font-light">
                     Connect Us
                    </p>
                  </div>
                </div>
              </GlassCard>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

import { motion } from 'framer-motion';
import { BarChart, Users, Award, ShieldAlert } from 'lucide-react';
import GlassCard from '../components/GlassCard';

function CountUp({ end }) {
  return <span>{end}</span>;
}

const statsData = [
  {
    targetNum: 500,
    suffix: "+",
    label: "PROJECTS DELIVERED",
    code: "DB_INDEX_PRJ",
    desc: "Cinematic edits, 3D cycles, and high-fidelity motion graphics projects.",
    icon: Award,
    color: "rgba(0, 212, 255, 0.12)"
  },
  {
    targetNum: 50,
    suffix: "M+",
    label: "VIEWS GENERATED",
    code: "DB_INDEX_TRF",
    desc: "Organic reach generated for commercial brands and YouTube creators.",
    icon: BarChart,
    color: "rgba(107, 184, 255, 0.12)"
  },
  {
    targetNum: 120,
    suffix: "+",
    label: "GLOBAL CLIENTS",
    code: "DB_INDEX_CLI",
    desc: "Partnered with premium agencies, tech companies, and video channels.",
    icon: Users,
    color: "rgba(198, 211, 225, 0.12)"
  },
  {
    targetNum: 8,
    suffix: "+",
    label: "YEARS EXP",
    code: "DB_INDEX_AGE",
    desc: "Pioneering creative tech, VFX, and post-production formats.",
    icon: ShieldAlert,
    color: "rgba(0, 212, 255, 0.12)"
  }
];

export default function Stats() {
  return (
    <section className="relative py-24 bg-[#10151C]/40 border-b border-white/5 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-5 pointer-events-none" />
      
      {/* Radar sweep animation wrapper */}
      <div className="absolute -top-1/4 left-1/3 w-[300px] h-[300px] border border-[#00D4FF]/5 rounded-full pointer-events-none">
        <div className="w-full h-full rounded-full animate-radar origin-center bg-gradient-to-r from-transparent via-[#00D4FF]/3 to-transparent" />
      </div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {statsData.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <GlassCard 
                  className="p-6 bg-[#151D26]/70 border border-white/5 hover:border-[#00D4FF]/25 hover:shadow-[0_0_20px_rgba(0,212,255,0.05)] transition-all cursor-pointer scanlines"
                  glowColor={stat.color}
                >
                  {/* Diagnostic header */}
                  <div className="flex items-center justify-between text-[8px] font-mono text-[#C6D3E1]/40 mb-6">
                    <span>INDEX // {stat.code}</span>
                    <Icon size={12} className="text-[#00D4FF] opacity-60" />
                  </div>

                  {/* Big stat counter */}
                  <div className="mb-2">
                    <span className="text-4xl md:text-5xl font-bold font-display tracking-tight text-white">
                      <CountUp end={stat.targetNum} />{stat.suffix}
                    </span>
                  </div>

                  {/* Labels and descriptive stats */}
                  <div className="space-y-3">
                    <h3 className="font-mono text-[10px] tracking-widest text-[#00D4FF] font-bold uppercase">
                      {stat.label}
                    </h3>
                    <p className="text-[11px] text-[#C6D3E1]/70 leading-relaxed font-light">
                      {stat.desc}
                    </p>
                  </div>

                  {/* Tech footer telemetry */}
                  <div className="mt-6 pt-3 border-t border-white/5 flex items-center justify-between font-mono text-[7px] text-[#C6D3E1]/30">
                    <span>SYS_LOCK: SECURE</span>
                    <span>BUF_OK</span>
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

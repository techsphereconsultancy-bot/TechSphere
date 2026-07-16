import React, { useEffect, useState } from "react";
import { ArrowRight, Play, Server, Shield, Sparkles, TrendingUp } from "lucide-react";
import { motion } from "motion/react";

interface HeroProps {
  scrollToSection: (id: string) => void;
}

export default function Hero({ scrollToSection }: HeroProps) {
  const [particles, setParticles] = useState<{ x: number; y: number; size: number; delay: number }[]>([]);

  useEffect(() => {
    // Generate static details for elegant particle backgrounds
    const pool = Array.from({ length: 25 }).map(() => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      delay: Math.random() * 5,
    }));
    setParticles(pool);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#0F172A]"
    >
      {/* Floating Ambient Blobs */}
      <div className="absolute top-1/4 left-1/4 w-[350px] h-[350px] rounded-full bg-sky-500/10 blur-[120px] animate-pulse" style={{ animationDuration: "8s" }} />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-indigo-500/10 blur-[150px] animate-pulse" style={{ animationDuration: "12s" }} />

      {/* Grid Pattern Layer */}
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:32px_32px]" />

      {/* Particles Layer */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((p, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-sky-400/35"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
            }}
            animate={{
              y: ["0px", "-40px", "0px"],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 5 + p.delay,
              repeat: Infinity,
              ease: "easeInOut",
              delay: p.delay,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Premium Pitch */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center space-x-2 bg-sky-500/10 border border-sky-500/20 rounded-full px-4 py-1.5"
            >
              <Sparkles size={14} className="text-sky-400 animate-spin" style={{ animationDuration: "3s" }} />
              <span className="font-mono text-[10px] tracking-wider uppercase font-semibold text-sky-400">
                Premium Business Solutions & ERP
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="space-y-4"
            >
              <h1 className="font-sans text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
                Transform Your Business With{" "}
                <span className="bg-gradient-to-r from-sky-400 via-sky-500 to-indigo-400 bg-clip-text text-transparent">
                  Smart Digital
                </span>{" "}
                Solutions
              </h1>
              <p className="font-sans text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed">
                We help startups, SMEs, manufacturers and enterprises grow through modern websites, ERP implementation, automation, branding and digital transformation.
              </p>
            </motion.div>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <button
                onClick={() => scrollToSection("contact")}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-sky-400 to-indigo-500 hover:from-sky-500 hover:to-indigo-600 text-white font-bold text-xs tracking-wider uppercase shadow-[0_4px_20px_rgba(14,165,233,0.35)] transition-all flex items-center justify-center space-x-2 group cursor-pointer"
              >
                <span>Book Free Consultation</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => scrollToSection("portfolio")}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-slate-800/60 hover:bg-slate-800 border border-slate-700 text-slate-200 hover:text-white font-bold text-xs tracking-wider uppercase transition-all flex items-center justify-center space-x-2 cursor-pointer"
              >
                <Play size={12} className="fill-current text-sky-400" />
                <span>View Portfolio</span>
              </button>
            </motion.div>

            {/* Micro Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-800 max-w-md mx-auto lg:mx-0"
            >
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-lg bg-sky-500/10 flex items-center justify-center text-sky-400">
                  <Server size={14} />
                </div>
                <div className="text-left">
                  <p className="text-[10px] text-slate-400 uppercase tracking-widest">ERP Setup</p>
                  <p className="text-xs font-bold text-slate-200">99.9% Up</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-lg bg-sky-500/10 flex items-center justify-center text-sky-400">
                  <Shield size={14} />
                </div>
                <div className="text-left">
                  <p className="text-[10px] text-slate-400 uppercase tracking-widest">IT Security</p>
                  <p className="text-xs font-bold text-slate-200">Military</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-lg bg-sky-500/10 flex items-center justify-center text-sky-400">
                  <TrendingUp size={14} />
                </div>
                <div className="text-left">
                  <p className="text-[10px] text-slate-400 uppercase tracking-widest">Speed</p>
                  <p className="text-xs font-bold text-slate-200">Lighthouse 99</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Isometric visual with floating stats cards */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div className="relative w-full max-w-[450px] aspect-square">
              {/* Backlit Glow Frame */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0EA5E9]/20 to-transparent rounded-3xl border border-white/5 backdrop-blur-3xl transform rotate-3" />
              
              {/* Main Core Dashboard Mockup Card */}
              <div className="absolute inset-4 bg-slate-900/80 rounded-2xl border border-white/10 shadow-2xl p-6 flex flex-col justify-between">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                  </div>
                  <div className="text-[9px] text-sky-400 font-mono tracking-widest uppercase font-semibold">
                    ERP_CORE_v2.0
                  </div>
                </div>

                {/* Animated Chart columns */}
                <div className="space-y-6 my-auto">
                  <div className="flex items-end justify-center gap-3.5 h-36">
                    <motion.div 
                      initial={{ height: 0 }}
                      animate={{ height: "65%" }}
                      transition={{ duration: 1.2, ease: "easeOut" }}
                      className="w-10 bg-[#0EA5E9]/30 rounded-t-lg border-t border-sky-400/20" 
                    />
                    <motion.div 
                      initial={{ height: 0 }}
                      animate={{ height: "90%" }}
                      transition={{ duration: 1.2, ease: "easeOut", delay: 0.1 }}
                      className="w-10 bg-gradient-to-t from-[#0EA5E9]/80 to-sky-300 rounded-t-lg shadow-[0_-10px_20px_rgba(14,165,233,0.3)]" 
                    />
                    <motion.div 
                      initial={{ height: 0 }}
                      animate={{ height: "45%" }}
                      transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
                      className="w-10 bg-[#0EA5E9]/20 rounded-t-lg border-t border-sky-400/10" 
                    />
                    <motion.div 
                      initial={{ height: 0 }}
                      animate={{ height: "78%" }}
                      transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
                      className="w-10 bg-[#0EA5E9]/50 rounded-t-lg border-t border-sky-400/30" 
                    />
                  </div>
                  
                  <div className="h-px w-full bg-white/5" />
                  
                  {/* Performance Indicators */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-3.5 bg-white/5 rounded-xl border border-white/5">
                      <div className="text-[9px] text-slate-400 uppercase tracking-wider font-semibold mb-1">
                        Revenue Growth
                      </div>
                      <div className="text-lg font-extrabold text-emerald-400">
                        +24.8%
                      </div>
                    </div>
                    <div className="p-3.5 bg-white/5 rounded-xl border border-white/5">
                      <div className="text-[9px] text-slate-400 uppercase tracking-wider font-semibold mb-1">
                        Active Users
                      </div>
                      <div className="text-lg font-extrabold text-slate-100">
                        12,408
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Widget 1: Inventory Optimized */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-[10%] -left-[10%] w-44 p-3.5 bg-slate-900/90 backdrop-blur-md rounded-xl border border-white/10 shadow-2xl transform -rotate-6 hidden sm:block"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 bg-amber-500/20 rounded-lg flex items-center justify-center text-amber-400 text-xs font-bold">
                    📦
                  </div>
                  <div>
                    <div className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">Inventory</div>
                    <div className="text-xs font-black text-slate-200">Optimized</div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Widget 2: CRM Status */}
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -bottom-[2%] right-[-5%] w-52 p-4 bg-slate-900/95 backdrop-blur-md rounded-xl border border-white/10 shadow-2xl hidden sm:block"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 bg-sky-500/20 rounded-lg flex items-center justify-center text-sky-400 text-xs font-bold">
                    🔄
                  </div>
                  <div>
                    <div className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">CRM Status</div>
                    <div className="text-xs font-black text-slate-100">Synced Globally</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

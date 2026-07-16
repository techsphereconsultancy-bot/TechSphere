import React from "react";
import * as Icons from "lucide-react";
import { INDUSTRIES_DATA } from "../data";
import { motion } from "motion/react";

export default function Industries() {
  
  // Dynamic Lucide icon helper
  const renderIcon = (iconName: string, className: string = "w-6 h-6") => {
    const IconComponent = (Icons as any)[iconName];
    if (!IconComponent) return <Icons.Activity className={className} />;
    return <IconComponent className={className} />;
  };

  return (
    <section id="industries" className="py-24 bg-[#0F172A] relative overflow-hidden">
      {/* Decorative background vectors */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-sky-500/[0.02] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/[0.02] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header block */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <span className="font-mono text-xs font-semibold tracking-widest text-sky-400 uppercase">
            VERTICAL SPECIALIZATION
          </span>
          <h2 className="font-sans text-3xl sm:text-4xl font-black tracking-tight text-white">
            Industries We Integrate &{" "}
            <span className="bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent">
              Elevate Globally
            </span>
          </h2>
          <p className="font-sans text-slate-300 font-light text-sm sm:text-base leading-relaxed">
            Every vertical carries unique regulatory rules and structural bottlenecks. We customize our designs and ERP pipelines to fit your operational constraints flawlessly.
          </p>
        </div>

        {/* 10 Industries Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {INDUSTRIES_DATA.map((ind, index) => (
            <motion.div
              key={ind.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group p-6 rounded-2xl border border-slate-700/40 bg-slate-800/20 hover:bg-slate-800/50 hover:border-sky-500/30 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Industry icon sphere */}
                <div className="w-10 h-10 rounded-xl bg-sky-500/10 text-sky-400 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:bg-sky-500/20">
                  {renderIcon(ind.icon, "w-5 h-5")}
                </div>

                <div className="space-y-1">
                  <h3 className="font-sans font-bold text-sm text-white group-hover:text-sky-400 transition-colors">
                    {ind.name}
                  </h3>
                  <p className="font-sans text-[11px] text-slate-400 font-light leading-relaxed">
                    {ind.desc}
                  </p>
                </div>
              </div>

              {/* Action indicator */}
              <div className="pt-4 mt-4 border-t border-slate-800/60 flex items-center text-[10px] font-mono text-slate-400 group-hover:text-sky-400 transition-colors">
                <span>Custom ERP workflows</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

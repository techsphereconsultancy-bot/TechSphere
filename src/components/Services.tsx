import React, { useState } from "react";
import * as Icons from "lucide-react";
import { SERVICES_DATA } from "../data";
import { Service } from "../types";
import { motion, AnimatePresence } from "motion/react";

export default function Services() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  // Dynamic Lucide icon lookup helper
  const renderIcon = (iconName: string, className: string = "w-6 h-6") => {
    const IconComponent = (Icons as any)[iconName];
    if (!IconComponent) return <Icons.HelpCircle className={className} />;
    return <IconComponent className={className} />;
  };

  return (
    <section id="services" className="py-24 relative overflow-hidden bg-[#0F172A]">
      {/* Background visual accents */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-sky-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <span className="font-mono text-xs font-semibold tracking-widest text-sky-400 uppercase">
            OUR CORE COMPETENCIES
          </span>
          <h2 className="font-sans text-3xl sm:text-4xl font-black tracking-tight text-white">
            Bespoke Solutions Built for{" "}
            <span className="bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent">
              Enterprise Scaling
            </span>
          </h2>
          <p className="font-sans text-slate-300 font-light text-sm sm:text-base leading-relaxed">
            From single-page marketing landing funnels to multi-branch ERP solutions, we construct secure digital architecture designed to optimize operational workloads.
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setSelectedService(service)}
              className="group relative rounded-2xl border border-slate-700/40 bg-slate-800/30 p-8 hover:bg-slate-800/60 hover:border-sky-500/30 transition-all duration-300 cursor-pointer flex flex-col justify-between overflow-hidden"
            >
              {/* Card top flare */}
              <div className="absolute -top-12 -left-12 w-24 h-24 bg-sky-500/10 rounded-full blur-2xl group-hover:scale-150 transition-all duration-500" />
              
              <div className="space-y-6 relative z-10">
                {/* Service Icon */}
                <div className="w-12 h-12 rounded-xl bg-sky-500/10 text-sky-400 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                  {renderIcon(service.iconName, "w-6 h-6")}
                </div>

                <div className="space-y-2">
                  <h3 className="font-sans font-bold text-xl text-white group-hover:text-sky-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="font-sans text-slate-300 text-xs sm:text-sm font-light leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Bullets preview */}
                <ul className="space-y-2">
                  {service.features.map((feat, i) => (
                    <li key={i} className="flex items-center text-xs text-slate-400">
                      <Icons.Check size={12} className="text-sky-400 mr-2 flex-shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action trigger */}
              <div className="pt-6 mt-6 border-t border-slate-700/30 flex items-center justify-between text-xs font-semibold text-sky-400 group-hover:text-sky-300 relative z-10">
                <span>Explore Sub-services</span>
                <Icons.ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Interactive Modal showing detailed sub-services */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Modal backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-2xl rounded-3xl border border-slate-700/60 bg-slate-900 p-8 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden max-h-[85vh] flex flex-col"
            >
              {/* Background gradient flares */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-sky-500/10 rounded-full blur-[80px]" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-indigo-500/10 rounded-full blur-[80px]" />

              {/* Close Button */}
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-6 right-6 p-2 rounded-xl border border-slate-800 hover:bg-slate-800 text-slate-400 hover:text-white transition-all cursor-pointer z-10"
              >
                <Icons.X size={16} />
              </button>

              {/* Header */}
              <div className="flex items-center space-x-4 mb-8 relative z-10 flex-shrink-0">
                <div className="w-14 h-14 rounded-2xl bg-sky-500/10 text-sky-400 flex items-center justify-center">
                  {renderIcon(selectedService.iconName, "w-8 h-8")}
                </div>
                <div>
                  <span className="font-mono text-[9px] tracking-widest text-sky-400 uppercase font-semibold">
                    SERVICE CAPABILITIES
                  </span>
                  <h3 className="font-sans font-black text-2xl text-white">
                    {selectedService.title}
                  </h3>
                </div>
              </div>

              {/* Scrollable Subservices Content */}
              <div className="overflow-y-auto pr-2 relative z-10 space-y-6 custom-scrollbar flex-grow">
                <p className="font-sans text-sm text-slate-300 font-light leading-relaxed border-l-2 border-sky-500/40 pl-4 mb-6">
                  {selectedService.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {selectedService.subServices.map((sub, idx) => (
                    <div
                      key={idx}
                      className="p-5 rounded-2xl bg-slate-800/40 border border-slate-700/40 hover:border-sky-500/20 transition-all group/item"
                    >
                      <h4 className="font-sans font-bold text-sm text-white group-hover/item:text-sky-400 transition-colors mb-1">
                        {sub.name}
                      </h4>
                      <p className="font-sans text-xs text-slate-400 leading-relaxed font-light">
                        {sub.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer CTA */}
              <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 relative z-10 flex-shrink-0">
                <p className="text-xs text-slate-400">Need customized enterprise layouts?</p>
                <button
                  onClick={() => {
                    setSelectedService(null);
                    const target = document.getElementById("contact");
                    if (target) {
                      target.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-sky-400 to-indigo-500 text-white font-bold text-xs tracking-wider uppercase transition-all shadow-[0_4px_15px_rgba(14,165,233,0.25)] flex items-center justify-center space-x-1 cursor-pointer"
                >
                  <span>Inquire About {selectedService.title}</span>
                  <Icons.ArrowRight size={13} />
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

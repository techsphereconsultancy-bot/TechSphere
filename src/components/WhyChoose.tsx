import React from "react";
import * as Icons from "lucide-react";
import { WHY_CHOOSE_DATA } from "../data";
import { motion } from "motion/react";

export default function WhyChoose() {
  
  const renderIcon = (iconName: string, className: string = "w-5 h-5") => {
    const IconComponent = (Icons as any)[iconName];
    if (!IconComponent) return <Icons.CheckCircle className={className} />;
    return <IconComponent className={className} />;
  };

  return (
    <section id="why-choose" className="py-24 bg-slate-900/60 border-b border-slate-800 relative overflow-hidden">
      
      {/* Dynamic light spheres */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-sky-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <span className="font-mono text-xs font-semibold tracking-widest text-sky-400 uppercase">
            WHY WORK WITH US
          </span>
          <h2 className="font-sans text-3xl sm:text-4xl font-black tracking-tight text-white">
            Uncompromising Standards <br />
            In{" "}
            <span className="bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent">
              Every Deployment
            </span>
          </h2>
          <p className="font-sans text-slate-300 font-light text-sm sm:text-base leading-relaxed">
            We don't settle for default templates or heavy, slow databases. Every line of code is structured for blistering speed, ironclad security, and natural scalability.
          </p>
        </div>

        {/* 9 Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_CHOOSE_DATA.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group p-8 rounded-2xl border border-slate-700/40 bg-slate-800/30 hover:bg-slate-800/60 hover:border-sky-500/30 transition-all duration-300 relative overflow-hidden"
            >
              {/* Card Hover Glow Backer */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-sky-500/[0.03] rounded-full blur-2xl group-hover:scale-150 transition-all duration-500" />

              <div className="flex items-start space-x-4 relative z-10">
                {/* Icon Circle */}
                <div className="p-3 rounded-xl bg-sky-500/10 text-sky-400 group-hover:bg-sky-500/20 group-hover:text-sky-300 transition-all flex-shrink-0">
                  {renderIcon(item.icon, "w-5 h-5")}
                </div>

                <div className="space-y-2">
                  <h3 className="font-sans font-bold text-base text-white group-hover:text-sky-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-slate-400 leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

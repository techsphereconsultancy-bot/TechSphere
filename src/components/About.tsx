import React, { useEffect, useState, useRef } from "react";
import { ShieldCheck, Target, Eye, Users2, Award, Zap, HeartHandshake } from "lucide-react";
import { motion, useInView } from "motion/react";

interface CounterProps {
  value: number;
  suffix: string;
  duration?: number;
}

function AnimatedCounter({ value, suffix, duration = 1500 }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * value));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [isInView, value, duration]);

  return (
    <span ref={ref} className="font-sans font-black text-4xl sm:text-5xl text-sky-400">
      {count}
      {suffix}
    </span>
  );
}

export default function About() {
  const logos = [
    { name: "SAP Enterprise", icon: "💎 SAP" },
    { name: "Oracle NetSuite", icon: "🌐 NETSUITE" },
    { name: "Odoo Partner", icon: "🟣 Odoo" },
    { name: "Zoho Premium", icon: "⚙️ Zoho" },
    { name: "AWS Cloud", icon: "☁️ AWS" },
    { name: "Microsoft Azure", icon: "⚡ Azure" },
    { name: "Salesforce CRM", icon: "☁️ Salesforce" },
    { name: "Google Cloud", icon: "🚀 Google Cloud" },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-slate-900/40 border-b border-slate-800">
      
      {/* 1. Trusted By Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <p className="text-center font-mono text-[10px] tracking-widest text-slate-400 uppercase font-bold mb-8">
          TRUSTED BY MODERN ENTERPRISES & TECHNOLOGY PARTNERS
        </p>

        {/* Rolling Slider Container */}
        <div className="relative w-full overflow-hidden py-4 mask-gradient-x">
          <div className="flex space-x-12 animate-scroll select-none w-max">
            {/* Double the logos list for seamless infinite loop */}
            {[...logos, ...logos, ...logos].map((logo, index) => (
              <div
                key={index}
                className="flex items-center space-x-2 px-6 py-3 rounded-xl bg-slate-800/40 border border-slate-700/30 backdrop-blur-sm hover:border-sky-500/20 transition-all duration-300"
              >
                <span className="font-mono text-xs font-black tracking-wide text-slate-300">
                  {logo.icon}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 2. Core About Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Block: Corporate Pitch and Stats */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-4">
              <span className="font-mono text-xs font-semibold tracking-widest text-sky-400 uppercase">
                WHO WE ARE
              </span>
              <h2 className="font-sans text-3xl sm:text-4xl font-black tracking-tight text-white leading-tight">
                Empowering Businesses <br />
                <span className="bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent">
                  Through Smarter Tech
                </span>
              </h2>
              <p className="font-sans text-slate-300 font-light leading-relaxed text-sm sm:text-base">
                TechSphere IT & ERP Consultancy is a premier digital technology partner. We bridge the gap between complex enterprise operations and modern high-speed digital systems, crafting solutions that accelerate growth and guarantee high return on investments.
              </p>
            </div>

            {/* Premium Stat Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl bg-slate-800/20 border border-slate-700/20 backdrop-blur-sm hover:border-sky-500/10 transition-all">
                <AnimatedCounter value={50} suffix="+" />
                <p className="font-mono text-[10px] tracking-wider text-slate-400 uppercase font-semibold mt-2">Projects Delivered</p>
                <p className="text-xs text-slate-400 mt-1">From startups to large factories</p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-800/20 border border-slate-700/20 backdrop-blur-sm hover:border-sky-500/10 transition-all">
                <AnimatedCounter value={20} suffix="+" />
                <p className="font-mono text-[10px] tracking-wider text-slate-400 uppercase font-semibold mt-2">Happy Corporate Clients</p>
                <p className="text-xs text-slate-400 mt-1">Retained monthly partnerships</p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-800/20 border border-slate-700/20 backdrop-blur-sm hover:border-sky-500/10 transition-all">
                <AnimatedCounter value={99} suffix="%" />
                <p className="font-mono text-[10px] tracking-wider text-slate-400 uppercase font-semibold mt-2">Satisfaction Rate</p>
                <p className="text-xs text-slate-400 mt-1">Excellent client referral loops</p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-800/20 border border-slate-700/20 backdrop-blur-sm hover:border-sky-500/10 transition-all">
                <AnimatedCounter value={24} suffix="/7" />
                <p className="font-mono text-[10px] tracking-wider text-slate-400 uppercase font-semibold mt-2">Support SLA Coverage</p>
                <p className="text-xs text-slate-400 mt-1">Active system diagnostics</p>
              </div>
            </div>
          </div>

          {/* Right Block: Vision, Mission & Why Choose Us cards */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Vision Card */}
            <div className="p-8 rounded-2xl bg-slate-800/40 border border-slate-700/40 hover:border-sky-500/20 transition-all duration-300 relative group overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/5 rounded-full blur-2xl group-hover:bg-sky-500/10 transition-all" />
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-xl bg-sky-500/10 text-sky-400">
                  <Eye size={20} />
                </div>
                <div>
                  <h3 className="font-sans font-bold text-lg text-white mb-2">Our Vision</h3>
                  <p className="font-sans text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                    To be the global benchmark of business optimization, making futuristic ERP solutions, secure infrastructure, and premium designs accessible to ambitious enterprises.
                  </p>
                </div>
              </div>
            </div>

            {/* Mission Card */}
            <div className="p-8 rounded-2xl bg-slate-800/40 border border-slate-700/40 hover:border-sky-500/20 transition-all duration-300 relative group overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-full blur-2xl group-hover:bg-indigo-500/10 transition-all" />
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-400">
                  <Target size={20} />
                </div>
                <div>
                  <h3 className="font-sans font-bold text-lg text-white mb-2">Our Mission</h3>
                  <p className="font-sans text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                    To construct highly responsive, completely customized software systems that empower team collaboration, automate manual workflows, and expand client revenue pipelines.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Why Choose Card */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-sky-500/15 relative group overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-sky-500/[0.02] pointer-events-none" />
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-xl bg-gradient-to-tr from-sky-400 to-indigo-500 text-white">
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <h3 className="font-sans font-bold text-lg text-white mb-2">Why Choose TechSphere?</h3>
                  <p className="font-sans text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                    We deliver customized, standard-compliant visual architecture and robust database solutions, backed by multi-lingual consultants. We do not use generic themes; everything is built to your specifications.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* Embedded style tag for infinite horizontal scroll animation of Trusted By */}
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-33.333% - 1.3rem)); }
        }
        .animate-scroll {
          animation: scroll 25s linear infinite;
        }
        .mask-gradient-x {
          mask-image: linear-gradient(to right, transparent, white 15%, white 85%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, white 15%, white 85%, transparent);
        }
      `}</style>
    </section>
  );
}

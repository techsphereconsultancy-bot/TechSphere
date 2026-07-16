import React, { useState } from "react";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { PROCESS_DATA } from "../data";
import { motion } from "motion/react";

export default function Process() {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <section id="process" className="py-24 bg-[#0F172A] relative overflow-hidden">
      {/* Decorative vectors */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-sky-500/[0.03] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <span className="font-mono text-xs font-semibold tracking-widest text-sky-400 uppercase">
            OUR EXECUTION Blueprints
          </span>
          <h2 className="font-sans text-3xl sm:text-4xl font-black tracking-tight text-white">
            A Fully Structured, Agile <br />
            <span className="bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent">
              Deployment Workflow
            </span>
          </h2>
          <p className="font-sans text-slate-300 font-light text-sm sm:text-base leading-relaxed">
            We don't believe in chaotic deadlines. We split our workflows into 7 transparent steps, keeping your stakeholders actively involved through shared progress boards.
          </p>
        </div>

        {/* 7 Steps Timeline Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: List of Steps (Interactive) */}
          <div className="lg:col-span-5 space-y-3">
            {PROCESS_DATA.map((step) => (
              <button
                key={step.step}
                onClick={() => setActiveStep(step.step)}
                className={`w-full p-5 rounded-2xl border text-left transition-all duration-300 flex items-center justify-between group cursor-pointer ${
                  activeStep === step.step
                    ? "bg-slate-800/80 border-sky-500/40 shadow-lg shadow-sky-500/5 translate-x-2"
                    : "bg-slate-900/40 border-slate-700/30 text-slate-400 hover:bg-slate-800/30 hover:text-white"
                }`}
              >
                <div className="flex items-center space-x-4">
                  {/* Step bubble */}
                  <div
                    className={`w-10 h-10 rounded-xl font-mono text-xs font-black flex items-center justify-center transition-all ${
                      activeStep === step.step
                        ? "bg-gradient-to-tr from-sky-400 to-indigo-500 text-white shadow-md"
                        : "bg-slate-800 text-slate-400 group-hover:bg-slate-700 group-hover:text-white"
                    }`}
                  >
                    0{step.step}
                  </div>
                  <div>
                    <h3
                      className={`font-sans font-bold text-sm sm:text-base transition-colors ${
                        activeStep === step.step ? "text-white" : "text-slate-300"
                      }`}
                    >
                      {step.title}
                    </h3>
                    <p className="text-[10px] font-mono tracking-wider text-slate-400 uppercase mt-0.5">
                      {step.subtitle}
                    </p>
                  </div>
                </div>

                <ArrowRight
                  size={14}
                  className={`transition-transform duration-300 ${
                    activeStep === step.step
                      ? "text-sky-400 translate-x-1"
                      : "text-slate-500 group-hover:translate-x-1 group-hover:text-slate-300"
                  }`}
                />
              </button>
            ))}
          </div>

          {/* Right Column: Detailed Animated Showcase of Selected Step */}
          <div className="lg:col-span-7">
            {PROCESS_DATA.map(
              (step) =>
                activeStep === step.step && (
                  <motion.div
                    key={step.step}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="p-8 sm:p-10 rounded-3xl border border-slate-700/50 bg-gradient-to-br from-slate-800/80 to-slate-900/80 shadow-2xl relative overflow-hidden"
                  >
                    {/* Top right floating steps identifier */}
                    <div className="absolute top-8 right-8 font-sans font-black text-6xl text-sky-500/5 select-none font-mono">
                      0{step.step}
                    </div>

                    <div className="space-y-6 relative z-10">
                      <div>
                        <span className="font-mono text-xs font-semibold tracking-wider text-sky-400 uppercase">
                          Phase 0{step.step} &mdash; {step.subtitle}
                        </span>
                        <h3 className="font-sans font-black text-2xl sm:text-3xl text-white mt-1">
                          {step.title}
                        </h3>
                      </div>

                      <p className="font-sans text-slate-300 text-sm sm:text-base font-light leading-relaxed">
                        {step.description}
                      </p>

                      {/* Deliverables Checklist */}
                      <div className="space-y-4 pt-6 border-t border-slate-700/40">
                        <h4 className="font-mono text-xs font-semibold tracking-wider text-slate-400 uppercase">
                          CORE DELIVERABLES & ACTIONS
                        </h4>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {step.details.map((detail, idx) => (
                            <motion.div
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.3, delay: idx * 0.08 }}
                              key={idx}
                              className="flex items-center space-x-3 p-3.5 rounded-xl bg-slate-950/40 border border-slate-800/80"
                            >
                              <CheckCircle2 size={15} className="text-sky-400 flex-shrink-0" />
                              <span className="font-sans text-xs text-slate-300 font-light">
                                {detail}
                              </span>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      {/* SPRINT Action Footer */}
                      <div className="pt-6 flex items-center justify-between text-xs text-slate-400">
                        <span className="flex items-center">
                          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping mr-2" />
                          <span>Active Client Dashboard Sync</span>
                        </span>
                        <button
                          onClick={() => {
                            const target = document.getElementById("contact");
                            if (target) {
                              target.scrollIntoView({ behavior: "smooth" });
                            }
                          }}
                          className="font-mono text-sky-400 hover:text-sky-300 flex items-center space-x-1 cursor-pointer font-bold"
                        >
                          <span>Request Consultation</span>
                          <ArrowRight size={12} />
                        </button>
                      </div>

                    </div>
                  </motion.div>
                )
            )}
          </div>

        </div>

      </div>
    </section>
  );
}

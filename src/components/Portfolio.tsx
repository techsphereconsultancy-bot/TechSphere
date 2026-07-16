import React, { useState } from "react";
import { ArrowUpRight, CheckCircle2, Calendar, User, Layers, ArrowLeft, ExternalLink, Play } from "lucide-react";
import { PORTFOLIO_DATA } from "../data";
import { PortfolioProject } from "../types";
import { motion, AnimatePresence } from "motion/react";

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);
  const [simulatedDemoActive, setSimulatedDemoActive] = useState(false);

  const filters = ["All", "Websites", "Corporate & ERP", "Consulting"];

  const filteredProjects = PORTFOLIO_DATA.filter((project) => {
    if (activeFilter === "All") return true;
    if (activeFilter === "Websites") {
      return ["Photography Website", "Restaurant Website", "Interior Design Website", "Real Estate Website", "Gym Website"].includes(project.category);
    }
    if (activeFilter === "Corporate & ERP") {
      return ["CA Firm Website", "Corporate Website", "Startup Landing Page"].includes(project.category);
    }
    if (activeFilter === "Consulting") {
      return ["Educational Institute", "Healthcare Clinic"].includes(project.category);
    }
    return true;
  });

  return (
    <section id="portfolio" className="py-24 bg-slate-900/60 border-b border-slate-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl space-y-4">
            <span className="font-mono text-xs font-semibold tracking-widest text-sky-400 uppercase">
              CASE STUDIES & SHOWCASE
            </span>
            <h2 className="font-sans text-3xl sm:text-4xl font-black tracking-tight text-white">
              Our Proven Track Record <br />
              Of{" "}
              <span className="bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent">
                Digital Excellence
              </span>
            </h2>
            <p className="font-sans text-slate-300 font-light text-sm sm:text-base leading-relaxed">
              Explore some of our recently delivered websites, cloud portfolios, custom dashboards, and operations modules.
            </p>
          </div>

          {/* Clean Category Filters */}
          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-300 cursor-pointer ${
                  activeFilter === filter
                    ? "bg-sky-500 text-white shadow-[0_4px_12px_rgba(14,165,233,0.3)]"
                    : "bg-slate-800/40 border border-slate-700/30 text-slate-400 hover:text-white"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Dynamic Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                onClick={() => setSelectedProject(project)}
                className="group relative rounded-2xl overflow-hidden border border-slate-700/40 bg-slate-800/30 hover:border-sky-500/30 cursor-pointer flex flex-col h-full hover:shadow-2xl transition-all duration-300"
              >
                {/* Thumbnail */}
                <div className="relative aspect-video overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80 z-10" />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 z-20 px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md border border-slate-700/40 font-mono text-[9px] text-sky-400 font-bold uppercase tracking-wider">
                    {project.category}
                  </div>
                </div>

                {/* Info block */}
                <div className="p-6 space-y-4 flex-grow flex flex-col justify-between">
                  <div className="space-y-2">
                    <h3 className="font-sans font-black text-lg text-white group-hover:text-sky-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="font-sans text-xs text-slate-300 font-light line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Chips and action */}
                  <div className="pt-4 border-t border-slate-700/30 space-y-4">
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 3).map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 rounded-md bg-slate-800 border border-slate-700 text-[9px] text-slate-400 font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-0.5 rounded-md bg-slate-800 border border-slate-700 text-[9px] text-slate-400 font-mono">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>

                    <div className="flex items-center justify-between text-xs font-semibold text-sky-400 group-hover:text-sky-300">
                      <span>View Project Details</span>
                      <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Details Lightbox Overlay */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => {
                setSelectedProject(null);
                setSimulatedDemoActive(false);
              }}
              className="absolute inset-0 bg-slate-950/85 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 30 }}
              transition={{ type: "spring", damping: 25, stiffness: 280 }}
              className="relative w-full max-w-4xl rounded-3xl border border-slate-700/60 bg-slate-900 overflow-hidden max-h-[90vh] flex flex-col shadow-[0_25px_60px_rgba(0,0,0,0.6)]"
            >
              {/* Close Button */}
              <button
                onClick={() => {
                  setSelectedProject(null);
                  setSimulatedDemoActive(false);
                }}
                className="absolute top-6 right-6 p-2.5 rounded-xl border border-slate-800 bg-slate-900/50 hover:bg-slate-800 text-slate-400 hover:text-white transition-all cursor-pointer z-20"
              >
                <ArrowLeft size={16} />
              </button>

              {/* Dynamic Interactive Demo Sandbox Screen */}
              {simulatedDemoActive ? (
                <div className="flex-grow flex flex-col h-full bg-[#0F172A] relative">
                  {/* Browser Bar */}
                  <div className="bg-slate-950 px-6 py-3 border-b border-slate-800 flex items-center justify-between z-10">
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => setSimulatedDemoActive(false)}
                        className="text-xs text-slate-400 hover:text-white flex items-center space-x-1 font-mono cursor-pointer"
                      >
                        <ArrowLeft size={12} />
                        <span>Back</span>
                      </button>
                      <div className="h-4 w-[1px] bg-slate-800 mx-2" />
                      <div className="flex space-x-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                      </div>
                    </div>
                    {/* Mock Domain */}
                    <div className="bg-slate-900 px-4 py-1 rounded-lg text-[10px] font-mono text-slate-400 select-none border border-slate-800/60 max-w-xs truncate">
                      {selectedProject.demoUrl}
                    </div>
                    <div className="w-12" /> {/* alignment spacer */}
                  </div>

                  {/* Sandbox Frame Canvas */}
                  <div className="flex-grow flex flex-col items-center justify-center p-8 text-center bg-slate-900/50 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.1),transparent)] pointer-events-none" />
                    
                    <div className="max-w-md space-y-6 relative z-10">
                      <div className="w-16 h-16 rounded-full bg-sky-500/10 text-sky-400 flex items-center justify-center mx-auto shadow-2xl">
                        <ExternalLink size={28} />
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-sans font-black text-xl text-white">Simulated Project Sandboxed</h4>
                        <p className="font-sans text-slate-300 text-xs sm:text-sm font-light leading-relaxed">
                          This live sandbox simulates the fully deployed interface for <strong>{selectedProject.title}</strong>, optimizing visual flows, responsive rendering grids, and form behaviors under localized networks.
                        </p>
                      </div>

                      {/* Mock Interactive Device */}
                      <div className="p-4 rounded-xl border border-slate-800 bg-slate-950/60 font-mono text-[10px] text-left text-sky-400 space-y-1 max-w-xs mx-auto">
                        <p>&gt; CDN_LATENCY: 12ms</p>
                        <p>&gt; RESPONSIVE_BREAKPOINT: ok (mobile/desktop)</p>
                        <p>&gt; CORE_WEB_VITALS: 99/100 (Excellent)</p>
                        <p>&gt; PRODUCTION_STATUS: DEPLOYED_SECURE</p>
                      </div>

                      <div className="flex justify-center gap-3">
                        <button
                          onClick={() => setSimulatedDemoActive(false)}
                          className="px-5 py-2.5 rounded-xl border border-slate-700 text-slate-300 hover:text-white text-xs font-semibold cursor-pointer"
                        >
                          Return to Spec
                        </button>
                        <a
                          href={selectedProject.demoUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-sky-400 to-indigo-500 text-white text-xs font-bold flex items-center space-x-1 cursor-pointer"
                        >
                          <span>Open in Tab</span>
                          <ExternalLink size={12} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <>
                  {/* Header visual banner */}
                  <div className="relative aspect-video sm:aspect-[2.3/1] flex-shrink-0">
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/30 to-slate-900/10" />
                    
                    <div className="absolute bottom-6 left-6 right-6">
                      <span className="px-3 py-1 rounded-full bg-sky-500/25 backdrop-blur-md border border-sky-400/40 text-[9px] font-mono font-bold text-sky-300 uppercase tracking-widest">
                        {selectedProject.category}
                      </span>
                      <h3 className="font-sans font-black text-2xl sm:text-3xl text-white mt-2">
                        {selectedProject.title}
                      </h3>
                    </div>
                  </div>

                  {/* Information Breakdown */}
                  <div className="flex-grow overflow-y-auto p-6 sm:p-8 space-y-8 custom-scrollbar">
                    
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                      {/* Left: Long copy */}
                      <div className="md:col-span-8 space-y-6">
                        <div className="space-y-2">
                          <h4 className="font-sans font-bold text-sm text-slate-300 uppercase tracking-widest font-mono">
                            PROJECT SUMMARY
                          </h4>
                          <p className="font-sans text-sm sm:text-base text-slate-300 leading-relaxed font-light">
                            {selectedProject.longDescription}
                          </p>
                        </div>

                        {/* Implemented features list */}
                        <div className="space-y-3">
                          <h4 className="font-sans font-bold text-sm text-slate-300 uppercase tracking-widest font-mono">
                            KEY SOLUTIONS DELIVERED
                          </h4>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {selectedProject.features.map((feat, idx) => (
                              <div key={idx} className="flex items-start space-x-2 p-3 rounded-xl bg-slate-800/40 border border-slate-700/20">
                                <CheckCircle2 size={14} className="text-sky-400 mt-0.5 flex-shrink-0" />
                                <span className="text-xs text-slate-300 leading-tight">{feat}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Right: Technical Spec Sidebar */}
                      <div className="md:col-span-4 space-y-6">
                        {/* Meta box */}
                        <div className="p-5 rounded-2xl bg-slate-800/40 border border-slate-700/30 space-y-4">
                          <h4 className="font-sans font-black text-xs text-white uppercase tracking-wider">
                            PROJECT SPECS
                          </h4>
                          
                          <div className="space-y-3">
                            <div className="flex items-center justify-between text-xs">
                              <span className="text-slate-400 flex items-center">
                                <User size={12} className="mr-1.5" /> Client
                              </span>
                              <span className="font-bold text-slate-200 truncate max-w-[140px]">{selectedProject.clientName}</span>
                            </div>
                            <div className="flex items-center justify-between text-xs">
                              <span className="text-slate-400 flex items-center">
                                <Calendar size={12} className="mr-1.5" /> Timeline
                              </span>
                              <span className="font-bold text-slate-200">{selectedProject.timeline}</span>
                            </div>
                            <div className="flex items-center justify-between text-xs">
                              <span className="text-slate-400 flex items-center">
                                <Layers size={12} className="mr-1.5" /> Category
                              </span>
                              <span className="font-bold text-sky-400">{selectedProject.category}</span>
                            </div>
                          </div>
                        </div>

                        {/* Tech Stack */}
                        <div className="space-y-3">
                          <h4 className="font-sans font-bold text-xs text-slate-400 uppercase tracking-widest font-mono">
                            TECHNOLOGIES USED
                          </h4>
                          <div className="flex flex-wrap gap-1.5">
                            {selectedProject.technologies.map((tech, idx) => (
                              <span
                                key={idx}
                                className="px-3 py-1 rounded-lg bg-slate-800 border border-slate-700 text-xs text-slate-300 font-mono"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>

                  {/* Footer CTA Actions */}
                  <div className="p-6 border-t border-slate-800 bg-slate-950/40 flex flex-col sm:flex-row items-center justify-between gap-4 flex-shrink-0">
                    <p className="text-xs text-slate-400">Want to implement similar architectures?</p>
                    <div className="flex items-center gap-3 w-full sm:w-auto">
                      <button
                        onClick={() => {
                          setSelectedProject(null);
                          const target = document.getElementById("contact");
                          if (target) {
                            target.scrollIntoView({ behavior: "smooth" });
                          }
                        }}
                        className="w-full sm:w-auto px-5 py-3 rounded-xl border border-slate-700 text-slate-300 hover:text-white font-semibold text-xs transition-all cursor-pointer text-center"
                      >
                        Inquire about this tech
                      </button>
                      <button
                        onClick={() => setSimulatedDemoActive(true)}
                        className="w-full sm:w-auto px-5 py-3 rounded-xl bg-gradient-to-r from-sky-400 to-indigo-500 text-white font-bold text-xs tracking-wider uppercase transition-all shadow-[0_4px_15px_rgba(14,165,233,0.25)] flex items-center justify-center space-x-1 cursor-pointer"
                      >
                        <Play size={12} className="fill-current" />
                        <span>Launch Live Demo</span>
                      </button>
                    </div>
                  </div>
                </>
              )}

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

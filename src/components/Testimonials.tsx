import React, { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { TESTIMONIALS_DATA } from "../data";
import { motion, AnimatePresence } from "motion/react";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-rotate reviews to keep the landing lively
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(timer);
  }, [activeIndex]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? TESTIMONIALS_DATA.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === TESTIMONIALS_DATA.length - 1 ? 0 : prev + 1));
  };

  const current = TESTIMONIALS_DATA[activeIndex];

  return (
    <section id="testimonials" className="py-24 bg-[#0F172A] relative overflow-hidden">
      {/* Decorative vectors */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-indigo-500/[0.02] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Header Block */}
        <div className="space-y-4 mb-16">
          <span className="font-mono text-xs font-semibold tracking-widest text-sky-400 uppercase">
            CLIENT VOUCHERS & FEEDBACK
          </span>
          <h2 className="font-sans text-3xl sm:text-4xl font-black tracking-tight text-white">
            What Our Partners Say
          </h2>
          <p className="font-sans text-slate-400 font-light text-xs sm:text-sm max-w-lg mx-auto leading-relaxed">
            We prioritize long-term corporate SLAs, delivering measurable efficiency gains and beautiful visuals that impress stakeholders.
          </p>
        </div>

        {/* Carousel Window */}
        <div className="relative min-h-[300px] flex items-center justify-center">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, scale: 0.98, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: -10 }}
              transition={{ duration: 0.4 }}
              className="p-8 sm:p-12 rounded-3xl border border-slate-700/40 bg-slate-800/20 backdrop-blur-md relative max-w-3xl w-full"
            >
              {/* Floating Quote Icon */}
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-sky-500 text-white flex items-center justify-center shadow-lg shadow-sky-500/25">
                <Quote size={16} />
              </div>

              <div className="space-y-6">
                {/* Stars */}
                <div className="flex justify-center items-center space-x-1">
                  {Array.from({ length: current.rating }).map((_, i) => (
                    <Star key={i} size={14} className="text-amber-400 fill-current" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="font-sans text-sm sm:text-base text-slate-200 font-light italic leading-relaxed">
                  &ldquo;{current.content}&rdquo;
                </p>

                {/* Profile detail */}
                <div className="flex flex-col items-center pt-4 border-t border-slate-800">
                  <div className="w-12 h-12 rounded-full overflow-hidden border border-sky-400/30 mb-3">
                    <img
                      src={current.avatar}
                      alt={current.name}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div>
                    <h4 className="font-sans font-black text-sm text-white">
                      {current.name}
                    </h4>
                    <p className="font-mono text-[10px] tracking-wider text-slate-400 uppercase mt-0.5">
                      {current.role} &mdash; <span className="text-sky-400">{current.company}</span>
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <button
            onClick={handlePrev}
            className="absolute left-0 lg:-left-16 p-3 rounded-full border border-slate-800 bg-slate-900/40 hover:bg-slate-800 text-slate-400 hover:text-white transition-all cursor-pointer shadow-md"
            title="Previous Review"
          >
            <ChevronLeft size={16} />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-0 lg:-right-16 p-3 rounded-full border border-slate-800 bg-slate-900/40 hover:bg-slate-800 text-slate-400 hover:text-white transition-all cursor-pointer shadow-md"
            title="Next Review"
          >
            <ChevronRight size={16} />
          </button>
        </div>

        {/* Bubble Slide Indicators */}
        <div className="flex justify-center items-center space-x-2 mt-8">
          {TESTIMONIALS_DATA.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                activeIndex === idx ? "w-6 bg-sky-500" : "w-1.5 bg-slate-800"
              }`}
              title={`View slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

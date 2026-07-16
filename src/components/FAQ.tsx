import React, { useState } from "react";
import { ChevronDown, Search, HelpCircle } from "lucide-react";
import { FAQ_DATA } from "../data";
import { motion, AnimatePresence } from "motion/react";

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>("faq-1");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredFAQs = FAQ_DATA.filter((faq) => {
    const qMatches = faq.question.toLowerCase().includes(searchQuery.toLowerCase());
    const aMatches = faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return qMatches || aMatches;
  });

  return (
    <section id="faq" className="py-24 bg-slate-900/60 border-b border-slate-800 relative overflow-hidden">
      
      {/* Background blobs */}
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-sky-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="font-mono text-xs font-semibold tracking-widest text-sky-400 uppercase">
            REPEATED INQUIRIES
          </span>
          <h2 className="font-sans text-3xl sm:text-4xl font-black tracking-tight text-white">
            Frequently Asked Questions
          </h2>
          <p className="font-sans text-slate-300 font-light text-xs sm:text-sm leading-relaxed">
            Can't find the exact answer you're looking for? Reach out through our consultation portal, and we'll reply under 2 hours.
          </p>

          {/* Search Bar */}
          <div className="pt-6 max-w-md mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 w-4 h-4" />
              <input
                type="text"
                placeholder="Search FAQs (e.g., ERP, SEO, pricing...)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-slate-950/60 border border-slate-800 text-slate-200 text-xs font-medium focus:outline-none focus:border-sky-500 transition-all placeholder:text-slate-500"
              />
            </div>
          </div>
        </div>

        {/* Accordion Container */}
        <div className="space-y-4 max-w-3xl mx-auto">
          {filteredFAQs.length > 0 ? (
            filteredFAQs.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="rounded-2xl border border-slate-700/30 bg-slate-800/20 hover:bg-slate-800/30 overflow-hidden transition-colors"
                >
                  {/* Collapsible Header Trigger */}
                  <button
                    onClick={() => setOpenId(isOpen ? null : faq.id)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none group"
                  >
                    <div className="flex items-center space-x-3.5">
                      <HelpCircle size={15} className="text-sky-400 flex-shrink-0" />
                      <span className="font-sans font-bold text-sm sm:text-base text-slate-100 group-hover:text-white transition-colors">
                        {faq.question}
                      </span>
                    </div>

                    <div
                      className={`p-1.5 rounded-lg border border-slate-700/60 bg-slate-900/40 text-slate-400 group-hover:text-white transition-all ${
                        isOpen ? "rotate-180 border-sky-500/20 text-sky-400" : ""
                      }`}
                    >
                      <ChevronDown size={14} />
                    </div>
                  </button>

                  {/* Accordion Details Body with Framer Height Animation */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-6 pb-6 pt-2 border-t border-slate-800/30">
                          <p className="font-sans text-slate-300 text-xs sm:text-sm font-light leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })
          ) : (
            <div className="p-8 text-center rounded-2xl border border-slate-800 bg-slate-900/30 text-slate-400 font-mono text-xs">
              No matching FAQs found. Type in another keyword.
            </div>
          )}
        </div>

      </div>
    </section>
  );
}

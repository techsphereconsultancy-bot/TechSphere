import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function Loader() {
  const [percent, setPercent] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setPercent((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setVisible(false), 300);
          return 100;
        }
        return prev + Math.floor(Math.random() * 8) + 4;
      });
    }, 60);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          id="loader-screen"
          className="fixed inset-0 z-9999 flex flex-col items-center justify-center bg-[#0F172A] text-white"
          exit={{ opacity: 0, y: -40, transition: { duration: 0.5, ease: "easeInOut" } }}
        >
          {/* Neon Grid Background */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(14,165,233,0.15),rgba(255,255,255,0))]" />
          <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:24px_24px]" />

          <div className="relative z-10 flex flex-col items-center max-w-xs w-full px-6">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="flex items-center space-x-2 mb-8"
            >
              {/* Company Logo */}
<div className="relative flex items-center justify-center w-20 h-20">
  <img
    src="/logo.png"
    alt="TechSphere Logo"
    className="w-full h-full object-contain drop-shadow-[0_0_20px_rgba(14,165,233,0.8)]"
  />
</div>
              <div className="flex flex-col">
                <span className="font-sans font-black tracking-widest text-lg bg-gradient-to-r from-sky-400 to-white bg-clip-text text-transparent">
                  TECHSPHERE
                </span>
                <span className="font-mono text-[9px] tracking-widest text-sky-400/80 uppercase">
                  IT & ERP SOLUTIONS
                </span>
              </div>
            </motion.div>

            {/* Loading Bar */}
            <div className="w-full h-[2px] bg-white/5 rounded-full overflow-hidden mb-3 relative">
              <motion.div
                className="h-full bg-gradient-to-r from-sky-400 to-indigo-500 shadow-[0_0_10px_rgba(14,165,233,0.8)]"
                initial={{ width: "0%" }}
                animate={{ width: `${Math.min(percent, 100)}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>

            {/* Status and Percentage */}
            <div className="flex justify-between items-center w-full font-mono text-xs text-slate-400">
              <span className="animate-pulse">Launching TechSphere...</span>
              <span className="text-sky-400 font-bold">{Math.min(percent, 100)}%</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

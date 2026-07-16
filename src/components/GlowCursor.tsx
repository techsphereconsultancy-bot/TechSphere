import React, { useEffect, useState } from "react";
import { motion } from "motion/react";

export default function GlowCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Disable custom cursor glow on touch screens for accessibility and optimization
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!visible) setVisible(true);
    };

    const handleMouseLeave = () => {
      setVisible(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <div
      id="cursor-glow"
      className="pointer-events-none fixed inset-0 z-50 overflow-hidden"
    >
      <motion.div
        className="absolute w-96 h-96 rounded-full bg-sky-500/10 blur-[100px] -translate-x-1/2 -translate-y-1/2"
        animate={{
          x: position.x,
          y: position.y,
        }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 150,
          mass: 0.1,
        }}
      />
      <motion.div
        className="absolute w-4 h-4 rounded-full bg-sky-400/20 blur-sm -translate-x-1/2 -translate-y-1/2"
        animate={{
          x: position.x,
          y: position.y,
        }}
        transition={{
          type: "spring",
          damping: 25,
          stiffness: 250,
          mass: 0.05,
        }}
      />
    </div>
  );
}

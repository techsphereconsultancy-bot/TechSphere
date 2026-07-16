import React, { useState, useEffect } from "react";
import { Menu, X, Sun, Moon, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
  activeSection: string;
  scrollToSection: (id: string) => void;
}

export default function Navbar({
  darkMode,
  toggleDarkMode,
  activeSection,
  scrollToSection,
}: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [logoError, setLogoError] = useState(false);

  const navItems = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Services", id: "services" },
    { label: "Portfolio", id: "portfolio" },
    { label: "Industries", id: "industries" },
    { label: "Process", id: "process" },
    { label: "Testimonials", id: "testimonials" },
    { label: "FAQ", id: "faq" },
    { label: "Contact", id: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Background translucency threshold
      setScrolled(window.scrollY > 20);

      // Scroll progress computation
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleItemClick = (id: string) => {
    scrollToSection(id);
    setIsOpen(false);
  };

  return (
    <>
      {/* Top Reading Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-[3px] z-50 pointer-events-none">
        <div
          className="h-full bg-gradient-to-r from-sky-400 via-sky-500 to-indigo-500 shadow-[0_1px_8px_rgba(14,165,233,0.5)] transition-all duration-100 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <header
        id="main-header"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-[#0F172A]/85 dark:bg-[#0F172A]/85 light:bg-white/85 backdrop-blur-md shadow-lg py-3 border-b border-slate-200/10 dark:border-slate-800/20"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <button
              onClick={() => handleItemClick("home")}
              className="flex items-center space-x-3 text-left focus:outline-none group cursor-pointer animate-fade-in"
            >
              {!logoError ? (
                <img
                  src="/logo.png"
                  alt="TechSphere Logo"
                  referrerPolicy="no-referrer"
                  onError={() => setLogoError(true)}
                  className="w-14 h-14 object-contain transition-transform duration-300 group-hover:scale-105"
                />
              ) : (
                <div className="relative flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-tr from-sky-500 to-indigo-600 shadow-[0_0_15px_rgba(14,165,233,0.3)] transition-transform duration-300 group-hover:scale-105">
                  <span className="font-sans font-extrabold text-lg tracking-tighter text-white">TS</span>
                  <div className="absolute inset-0.5 rounded-[9px] border border-white/10" />
                </div>
              )}
              <div className="flex flex-col">
                <span className="font-sans font-black tracking-wider text-sm text-slate-100 group-hover:text-sky-400 transition-colors duration-200">
                  TECHSPHERE
                </span>
                <span className="font-mono text-[8px] tracking-widest text-sky-400/85 uppercase">
                  IT & ERP Consultancy
                </span>
              </div>
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleItemClick(item.id)}
                  className={`relative px-3 py-2 rounded-lg text-xs font-medium tracking-wide transition-all duration-200 cursor-pointer ${
                    activeSection === item.id
                      ? "text-sky-400 font-semibold"
                      : "text-slate-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-3 right-3 h-[2px] bg-sky-400 rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </nav>

            {/* Actions: Theme toggle & CTA */}
            <div className="hidden lg:flex items-center space-x-4">
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-xl border border-slate-700/50 hover:bg-slate-800 text-slate-300 hover:text-white transition-all cursor-pointer"
                title={darkMode ? "Switch to Light Theme" : "Switch to Dark Theme"}
              >
                {darkMode ? <Sun size={16} /> : <Moon size={16} />}
              </button>

              <button
                onClick={() => handleItemClick("contact")}
                className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-xs font-semibold text-white rounded-xl group bg-gradient-to-br from-sky-500 to-indigo-600 group-hover:from-sky-500 group-hover:to-indigo-600 hover:text-white focus:outline-none cursor-pointer"
              >
                <span className="relative px-4 py-2 transition-all ease-in duration-75 bg-[#0F172A] rounded-[10px] group-hover:bg-opacity-0 flex items-center space-x-1">
                  <span>Book Free Consultation</span>
                  <ArrowRight size={13} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </div>

            {/* Mobile Actions and Hamburger */}
            <div className="flex items-center space-x-2 lg:hidden">
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-xl border border-slate-700/50 bg-slate-900/30 text-slate-300 hover:text-white transition-all cursor-pointer"
              >
                {darkMode ? <Sun size={16} /> : <Moon size={16} />}
              </button>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-xl border border-slate-700/50 bg-slate-900/30 text-slate-300 hover:text-white transition-all cursor-pointer"
              >
                {isOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className={`fixed left-0 right-0 z-50 bg-[#0F172A]/95 backdrop-blur-lg border-b border-slate-800 lg:hidden overflow-hidden max-h-[85vh] transition-all duration-300 ${
              scrolled ? "top-[80px]" : "top-[96px]"
            }`}
          >
            <div className="px-4 pt-4 pb-6 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleItemClick(item.id)}
                  className={`block w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium tracking-wide transition-all ${
                    activeSection === item.id
                      ? "bg-sky-500/15 text-sky-400 border-l-4 border-sky-400"
                      : "text-slate-300 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-4 border-t border-slate-800">
                <button
                  onClick={() => handleItemClick("contact")}
                  className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 text-white text-xs font-bold shadow-lg shadow-sky-500/20 text-center flex items-center justify-center space-x-1"
                >
                  <span>Book Free Consultation</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

import React, { useState, useEffect } from "react";
import Loader from "./components/Loader";
import GlowCursor from "./components/GlowCursor";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Industries from "./components/Industries";
import WhyChoose from "./components/WhyChoose";
import Process from "./components/Process";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState("home");

  // Synchronize Dark Mode Class on Root Document Element
  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      root.classList.remove("light");
    } else {
      root.classList.add("light");
      root.classList.remove("dark");
    }
  }, [darkMode]);

  // Scroll active section tracking
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "services",
        "portfolio",
        "industries",
        "process",
        "testimonials",
        "faq",
        "contact",
      ];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const header = document.getElementById("main-header");
      const headerHeight = header ? header.offsetHeight : 80;
      const elementPosition = el.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerHeight + 1;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setActiveSection(id);
    }
  };

  return (
    <div className={`min-h-screen font-sans antialiased transition-colors duration-300 relative overflow-hidden ${
      darkMode ? "bg-[#0F172A] text-white" : "bg-slate-50 text-slate-900"
    }`}>
      {/* Sleek Interface Ambient Glows */}
      {darkMode && (
        <>
          <div className="absolute top-[-200px] right-[-100px] w-[500px] h-[500px] bg-[#0EA5E9] rounded-full blur-[150px] opacity-20 pointer-events-none z-0 animate-pulse" style={{ animationDuration: "12s" }} />
          <div className="absolute top-[600px] left-[-100px] w-[400px] h-[400px] bg-[#0EA5E9] rounded-full blur-[120px] opacity-10 pointer-events-none z-0" />
          <div className="absolute top-[1800px] right-[-200px] w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[160px] pointer-events-none z-0" />
          <div className="absolute top-[3200px] left-[-200px] w-[500px] h-[500px] bg-sky-500/5 rounded-full blur-[140px] pointer-events-none z-0" />
          <div className="absolute bottom-[400px] right-[-100px] w-[450px] h-[450px] bg-sky-500/10 rounded-full blur-[130px] pointer-events-none z-0" />
        </>
      )}

      {/* Premium Loader Screen */}
      <Loader />

      {/* Cursor Ambient Glow */}
      <GlowCursor />

      {/* Sticky Top Navigation */}
      <Navbar
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        activeSection={activeSection}
        scrollToSection={scrollToSection}
      />

      {/* Main Corporate Core Page Block */}
      <main className="relative">
        <Hero scrollToSection={scrollToSection} />
        <About />
        <Services />
        <Portfolio />
        <Industries />
        <WhyChoose />
        <Process />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>

      {/* Professional Footer Sitemap */}
      <Footer scrollToSection={scrollToSection} />
    </div>
  );
}

import React, { useState } from "react";
import { ArrowUp, Github, Linkedin, Twitter, MessageSquare, Mail, Sparkles } from "lucide-react";
import { motion } from "motion/react";

interface FooterProps {
  scrollToSection: (id: string) => void;
}

export default function Footer({ scrollToSection }: FooterProps) {
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState("");
  const [logoError, setLogoError] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail("");
  };

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="main-footer" className="bg-[#0F172A] border-t border-slate-800 text-slate-400 py-16 relative overflow-hidden">
      
      {/* Scroll to Top floating widget */}
      <button
        onClick={handleBackToTop}
        className="absolute top-8 right-8 p-3 rounded-xl border border-slate-800 bg-slate-900/50 hover:bg-slate-800 text-slate-300 hover:text-white transition-all cursor-pointer shadow-lg group"
        title="Scroll back to top"
      >
        <ArrowUp size={16} className="group-hover:-translate-y-0.5 transition-transform" />
      </button>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top block: Sitemap lists and Newsletter */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          
          {/* Column 1: Branding block */}
          <div className="md:col-span-4 space-y-6">
            <button
              onClick={() => scrollToSection("home")}
              className="flex items-center space-x-3 text-left focus:outline-none cursor-pointer group"
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
                <div className="relative flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-tr from-sky-500 to-indigo-600 shadow-md">
                  <span className="font-sans font-extrabold text-lg tracking-tighter text-white">TS</span>
                </div>
              )}
              <div className="flex flex-col">
                <span className="font-sans font-black tracking-wider text-sm text-slate-100 group-hover:text-sky-400 transition-colors duration-200">
                  TECHSPHERE
                </span>
                <span className="font-mono text-[8px] tracking-widest text-sky-400 uppercase font-semibold">
                  IT & ERP SOLUTIONS
                </span>
              </div>
            </button>

            <p className="font-sans text-xs sm:text-sm text-slate-400 font-light leading-relaxed">
              Empowering startups, manufacturers, SMEs, and global enterprises through clean digital assets and tailored ERP workflow automation.
            </p>

            {/* Social handles */}
            <div className="flex items-center space-x-3.5">
              <a
                href="https://linkedin.com/company/techsphere"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl border border-slate-800 bg-slate-900/40 hover:bg-slate-800 text-slate-400 hover:text-white transition-all"
                title="LinkedIn Page"
              >
                <Linkedin size={15} />
              </a>
              <a
                href="https://twitter.com/techsphere"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl border border-slate-800 bg-slate-900/40 hover:bg-slate-800 text-slate-400 hover:text-white transition-all"
                title="Twitter Handle"
              >
                <Twitter size={15} />
              </a>
              <a
                href="https://github.com/techsphere"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl border border-slate-800 bg-slate-900/40 hover:bg-slate-800 text-slate-400 hover:text-white transition-all"
                title="GitHub Repository"
              >
                <Github size={15} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="font-mono text-xs font-semibold tracking-wider text-slate-200 uppercase">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-xs">
              {["home", "about", "services", "portfolio", "industries", "process", "testimonials", "faq", "contact"].map((id) => (
                <li key={id}>
                  <button
                    onClick={() => scrollToSection(id)}
                    className="hover:text-sky-400 transition-colors uppercase font-mono tracking-wide text-[10px] cursor-pointer text-left"
                  >
                    &raquo; {id}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Capabilities */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-mono text-xs font-semibold tracking-wider text-slate-200 uppercase">
              Core Capabilities
            </h4>
            <ul className="space-y-2.5 text-xs font-light">
              <li>Website Design & Development</li>
              <li>Odoo & Zoho ERP Sync</li>
              <li>IT Strategy & Cloud Architecture</li>
              <li>User Interface Prototypes</li>
              <li>Pitch Decks & Branding kits</li>
              <li>Local SEO Visibility campaigns</li>
            </ul>
          </div>

          {/* Column 4: Newsletter Subscriber */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-mono text-xs font-semibold tracking-wider text-slate-200 uppercase">
              Enterprise Newsletter
            </h4>
            <p className="font-sans text-xs text-slate-400 leading-relaxed font-light">
              Receive actionable insights on Odoo customizations and SEO algorithms twice a month.
            </p>

            {subscribed ? (
              <div className="p-3 rounded-xl border border-emerald-500/20 bg-emerald-500/5 text-emerald-400 text-xs font-bold flex items-center space-x-1">
                <span>Verification dispatched. Thank you!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 w-3.5 h-3.5" />
                  <input
                    type="email"
                    required
                    placeholder="consultancy@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-slate-950/60 border border-slate-800 text-slate-200 text-xs focus:outline-none focus:border-sky-500 transition-all placeholder:text-slate-600"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white text-[10px] font-mono tracking-widest uppercase font-bold border border-slate-700 transition-all cursor-pointer"
                >
                  Join Newsletter
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Bottom block: Legal disclosure & dynamic metadata schema */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p className="font-light">
            &copy; 2026 TechSphere IT & ERP Consultancy. Empowering businesses through tech. All rights reserved.
          </p>

          <div className="flex items-center space-x-6 text-[11px] font-light">
            <button className="hover:text-white cursor-pointer">Privacy Policy</button>
            <span>&bull;</span>
            <button className="hover:text-white cursor-pointer">Terms of Engagement</button>
            <span>&bull;</span>
            <span className="flex items-center text-sky-400 font-mono text-[9px] uppercase tracking-wider font-bold">
              <Sparkles size={10} className="mr-1" /> Verified Cloud Native Sitemaps
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}

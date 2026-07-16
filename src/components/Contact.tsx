import React, { useState } from "react";
import { Mail, Phone, MapPin, Clock, Calendar, Check, MessageSquare, Briefcase, User, Send, Building, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface ContactProps {
  selectedPlan?: string;
}

export default function Contact({ selectedPlan = "" }: ContactProps) {
  // Main form fields state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: selectedPlan || "Website Design",
    message: "",
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loadingForm, setLoadingForm] = useState(false);

  // Calendar Scheduler states
  const [schedulerActive, setSchedulerActive] = useState(false);
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  const availableSlots = ["10:00 AM", "11:30 AM", "02:00 PM", "03:30 PM", "05:00 PM"];
  
  // Custom mini-calendar offsets for current month
  const calendarDays = Array.from({ length: 31 }, (_, i) => i + 1);

  // Automatically update selected service if prop changes
  React.useEffect(() => {
    if (selectedPlan) {
      setFormData((prev) => ({ ...prev, service: selectedPlan }));
    }
  }, [selectedPlan]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      alert("Please fill in the required fields (Name, Email, Phone).");
      return;
    }
    setLoadingForm(true);
    // Simulate API Proxy delays
    setTimeout(() => {
      setLoadingForm(false);
      setFormSubmitted(true);
    }, 1200);
  };

  const handleBookMeeting = () => {
    if (!selectedDate || !selectedSlot) {
      alert("Please select a convenient date and hourly slot.");
      return;
    }
    setBookingConfirmed(true);
  };

  return (
    <section id="contact" className="py-24 bg-[#0F172A] relative overflow-hidden">
      {/* Background vector blobs */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-sky-500/[0.03] rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-indigo-500/[0.03] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="font-mono text-xs font-semibold tracking-widest text-sky-400 uppercase">
            ESTABLISH CONTACT
          </span>
          <h2 className="font-sans text-3xl sm:text-4xl font-black tracking-tight text-white">
            Ready to Accelerate Your{" "}
            <span className="bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent">
              Digital Footprint?
            </span>
          </h2>
          <p className="font-sans text-slate-300 font-light text-sm sm:text-base leading-relaxed">
            Fill in your business specifications to request an inquiry, or book a free 15-minute diagnostic calendar consultation instantly.
          </p>
        </div>

        {/* 2 Column Form and Info */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Contact details & Map */}
          <div className="lg:col-span-5 space-y-8 flex flex-col justify-between">
            <div className="space-y-6">
              <h3 className="font-sans font-black text-xl text-white">Corporate Offices</h3>
              <p className="font-sans text-xs sm:text-sm text-slate-400 font-light leading-relaxed">
                Connect with our expert ERP architects and interface researchers. We respond to emails within 2 hours.
              </p>

              <div className="space-y-4">
                {/* Email link */}
                <a
                  href="mailto:techsphereconsultancy@gmail.com"
                  className="flex items-center space-x-3.5 p-4 rounded-xl border border-slate-800 bg-slate-900/40 hover:border-sky-500/20 transition-all group"
                >
                  <div className="p-2.5 rounded-lg bg-sky-500/10 text-sky-400 group-hover:bg-sky-500/20">
                    <Mail size={16} />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Inquire via Email</p>
                    <p className="text-xs sm:text-sm font-bold text-slate-200 group-hover:text-sky-400 transition-colors">techsphereconsultancy@gmail.com</p>
                  </div>
                </a>

                {/* WhatsApp call */}
                <a
                  href="https://wa.me/918320806363"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center space-x-3.5 p-4 rounded-xl border border-slate-800 bg-slate-900/40 hover:border-sky-500/20 transition-all group"
                >
                  <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500/20">
                    <MessageSquare size={16} />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Connect on WhatsApp</p>
                    <p className="text-xs sm:text-sm font-bold text-slate-200 group-hover:text-emerald-400 transition-colors">+91 83208 06363</p>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-center space-x-3.5 p-4 rounded-xl border border-slate-800 bg-slate-900/40">
                  <div className="p-2.5 rounded-lg bg-indigo-500/10 text-indigo-400">
                    <MapPin size={16} />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Consultancy Location</p>
                    <p className="text-xs sm:text-sm font-bold text-slate-200">Remote &mdash; Globally Available</p>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="flex items-center space-x-3.5 p-4 rounded-xl border border-slate-800 bg-slate-900/40">
                  <div className="p-2.5 rounded-lg bg-teal-500/10 text-teal-400">
                    <Clock size={16} />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Operation Hours</p>
                    <p className="text-xs sm:text-sm font-bold text-slate-200">Monday - Friday, 09:00 AM - 06:00 PM IST</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Remote-First Global Service Highlight */}
            <div className="rounded-2xl border border-slate-800 bg-slate-950/40 p-6 relative group overflow-hidden">
              <div className="absolute inset-0 bg-slate-950 opacity-90" />
              <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:16px_16px]" />
              
              <div className="relative z-10 flex flex-col justify-center h-full space-y-3">
                <div className="flex items-center space-x-2 text-sky-400 font-mono text-xs uppercase tracking-wider font-semibold">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Globally Connected</span>
                </div>
                <h4 className="font-sans font-black text-slate-100 text-sm">Remote-First Workflow Integration</h4>
                <p className="font-sans text-slate-400 text-xs font-light leading-relaxed">
                  Our consultancy operates completely remotely. We utilize high-fidelity virtual conference suites, asynchronous workflow syncs, and cloud-native test sandboxes to serve companies globally.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Inquiry Form OR Calendar Booking Tab */}
          <div className="lg:col-span-7 flex flex-col justify-stretch">
            
            <div className="p-8 sm:p-10 rounded-3xl border border-slate-700/40 bg-slate-800/20 backdrop-blur-md shadow-2xl flex-grow flex flex-col">
              
              {/* Toggle Form vs Calendar */}
              <div className="flex rounded-xl p-1 bg-slate-950/60 border border-slate-800 mb-8 self-start">
                <button
                  onClick={() => {
                    setSchedulerActive(false);
                    setBookingConfirmed(false);
                  }}
                  className={`px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    !schedulerActive ? "bg-sky-500 text-white" : "text-slate-400 hover:text-white"
                  }`}
                >
                  Inquiry Portal
                </button>
                <button
                  onClick={() => {
                    setSchedulerActive(true);
                    setFormSubmitted(false);
                  }}
                  className={`px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    schedulerActive ? "bg-sky-500 text-white" : "text-slate-400 hover:text-white"
                  }`}
                >
                  Book Live Calendar
                </button>
              </div>

              {/* Inquiry form section */}
              {!schedulerActive ? (
                formSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex-grow flex flex-col items-center justify-center text-center space-y-6 py-12"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-500/15 text-emerald-400 flex items-center justify-center border border-emerald-500/30">
                      <Check size={28} />
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-sans font-black text-xl text-white">Inquiry Sent Successfully!</h4>
                      <p className="font-sans text-xs sm:text-sm text-slate-300 font-light max-w-sm mx-auto leading-relaxed">
                        Thank you for contacting TechSphere. Our core architect team has received your details and is preparing a custom corporate proposal. Check your inbox <strong>{formData.email}</strong>.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl border border-slate-800 bg-slate-950/40 max-w-xs text-left text-[10px] font-mono text-slate-400 space-y-1">
                      <p className="font-bold text-sky-400">--- INQUIRY SUMMARY ---</p>
                      <p>NAME: {formData.name}</p>
                      <p>SERVICE: {formData.service}</p>
                      <p>STATUS: ASSIGNED_TO_ENGINEER</p>
                      <p>SLA_RESPONSE: &lt; 2 hours</p>
                    </div>

                    <button
                      onClick={() => {
                        setFormSubmitted(false);
                        setFormData({
                          name: "",
                          email: "",
                          phone: "",
                          company: "",
                          service: "Website Design",
                          message: "",
                        });
                      }}
                      className="px-6 py-2.5 rounded-xl border border-slate-700 hover:bg-slate-800 text-slate-300 hover:text-white text-xs font-semibold cursor-pointer"
                    >
                      Submit Another Inquiry
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-5 flex-grow flex flex-col justify-between">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      
                      {/* Name */}
                      <div className="space-y-1.5">
                        <label className="font-mono text-[10px] text-slate-400 uppercase tracking-wider font-semibold flex items-center">
                          <User size={10} className="mr-1.5 text-sky-400" /> Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Rajesh Kothari"
                          className="w-full px-4 py-3 rounded-xl bg-slate-950/60 border border-slate-800 text-slate-200 text-xs font-medium focus:outline-none focus:border-sky-500 transition-all placeholder:text-slate-600"
                        />
                      </div>

                      {/* Email */}
                      <div className="space-y-1.5">
                        <label className="font-mono text-[10px] text-slate-400 uppercase tracking-wider font-semibold flex items-center">
                          <Mail size={10} className="mr-1.5 text-sky-400" /> Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="rajesh@kothari.com"
                          className="w-full px-4 py-3 rounded-xl bg-slate-950/60 border border-slate-800 text-slate-200 text-xs font-medium focus:outline-none focus:border-sky-500 transition-all placeholder:text-slate-600"
                        />
                      </div>

                      {/* Phone */}
                      <div className="space-y-1.5">
                        <label className="font-mono text-[10px] text-slate-400 uppercase tracking-wider font-semibold flex items-center">
                          <Phone size={10} className="mr-1.5 text-sky-400" /> Phone Number *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+91 98765 43210"
                          className="w-full px-4 py-3 rounded-xl bg-slate-950/60 border border-slate-800 text-slate-200 text-xs font-medium focus:outline-none focus:border-sky-500 transition-all placeholder:text-slate-600"
                        />
                      </div>

                      {/* Company Name */}
                      <div className="space-y-1.5">
                        <label className="font-mono text-[10px] text-slate-400 uppercase tracking-wider font-semibold flex items-center">
                          <Building size={10} className="mr-1.5 text-sky-400" /> Company Name
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          placeholder="Kothari Manufacturing Ltd"
                          className="w-full px-4 py-3 rounded-xl bg-slate-950/60 border border-slate-800 text-slate-200 text-xs font-medium focus:outline-none focus:border-sky-500 transition-all placeholder:text-slate-600"
                        />
                      </div>
                    </div>

                    {/* Service Dropdown */}
                    <div className="space-y-1.5">
                      <label className="font-mono text-[10px] text-slate-400 uppercase tracking-wider font-semibold flex items-center">
                        <Briefcase size={10} className="mr-1.5 text-sky-400" /> Desired Capability
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl bg-slate-950/60 border border-slate-800 text-slate-200 text-xs font-medium focus:outline-none focus:border-sky-500 transition-all"
                      >
                        <option value="Website Design">Website Design &mdash; Business / Portfolio / Ecom</option>
                        <option value="ERP Consultancy">ERP Consultancy &mdash; Odoo / Zoho / NetSuite</option>
                        <option value="IT Consultancy">IT Consultancy &mdash; Cloud migration / Audits</option>
                        <option value="UI/UX Design">UI/UX Design &mdash; Interactive Wireframes</option>
                        <option value="Branding">Branding &mdash; Logos & Pitch Decks</option>
                        <option value="Digital Growth">Digital Growth &mdash; Advanced SEO & Optimization</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div className="space-y-1.5">
                      <label className="font-mono text-[10px] text-slate-400 uppercase tracking-wider font-semibold flex items-center">
                        <MessageSquare size={10} className="mr-1.5 text-sky-400" /> Message Specifications
                      </label>
                      <textarea
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Detail any timelines, structural requirements, or desired Odoo workflows..."
                        className="w-full px-4 py-3 rounded-xl bg-slate-950/60 border border-slate-800 text-slate-200 text-xs font-medium focus:outline-none focus:border-sky-500 transition-all placeholder:text-slate-600 resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loadingForm}
                      className="w-full py-4 mt-4 rounded-xl bg-gradient-to-r from-sky-400 to-indigo-500 hover:from-sky-500 hover:to-indigo-600 text-white font-bold text-xs tracking-wider uppercase shadow-[0_4px_15px_rgba(14,165,233,0.35)] transition-all flex items-center justify-center space-x-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {loadingForm ? (
                        <span className="animate-pulse">Analyzing Specifications...</span>
                      ) : (
                        <>
                          <Send size={13} />
                          <span>Send Inquiry Proposal</span>
                        </>
                      )}
                    </button>
                  </form>
                )
              ) : (
                /* Dynamic Calendar Scheduler */
                bookingConfirmed ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex-grow flex flex-col items-center justify-center text-center space-y-6 py-12"
                  >
                    <div className="w-16 h-16 rounded-full bg-sky-500/15 text-sky-400 flex items-center justify-center border border-sky-500/30">
                      <ShieldCheck size={28} />
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-sans font-black text-xl text-white">Consultation Booked!</h4>
                      <p className="font-sans text-xs sm:text-sm text-slate-300 font-light max-w-sm mx-auto leading-relaxed">
                        We have successfully reserved your 15-minute diagnostic session on <strong>July {selectedDate}, 2026</strong> at <strong>{selectedSlot} IST</strong>. The meeting invite link has been dispatched.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl border border-slate-800 bg-slate-950/40 max-w-xs text-left text-[10px] font-mono text-slate-400 space-y-1">
                      <p className="font-bold text-sky-400">--- MEETING DETAILS ---</p>
                      <p>DATE: July {selectedDate}, 2026</p>
                      <p>TIME: {selectedSlot} IST</p>
                      <p>PLATFORM: Google Meet (virtual)</p>
                      <p>LINK: meet.google.com/tsp-tech-erp</p>
                    </div>

                    <button
                      onClick={() => {
                        setBookingConfirmed(false);
                        setSelectedDate(null);
                        setSelectedSlot(null);
                      }}
                      className="px-6 py-2.5 rounded-xl border border-slate-700 hover:bg-slate-800 text-slate-300 hover:text-white text-xs font-semibold cursor-pointer"
                    >
                      Reschedule Slot
                    </button>
                  </motion.div>
                ) : (
                  <div className="space-y-6 flex-grow flex flex-col justify-between">
                    <div className="space-y-4">
                      <h4 className="font-sans font-bold text-sm text-slate-300 uppercase tracking-widest font-mono">
                        Select a Day in July 2026
                      </h4>
                      
                      {/* Calendar days grid */}
                      <div className="grid grid-cols-7 gap-2 bg-slate-950/40 p-4 rounded-2xl border border-slate-800/80 max-w-sm mx-auto sm:mx-0">
                        {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => (
                          <div key={day} className="text-center font-mono text-[9px] text-slate-500 uppercase font-black">
                            {day}
                          </div>
                        ))}
                        {/* Empty padding for offset (July 2026 starts on Wednesday -> 3 empty days) */}
                        {Array.from({ length: 3 }).map((_, i) => (
                          <div key={`empty-${i}`} />
                        ))}
                        {calendarDays.map((day) => (
                          <button
                            key={day}
                            type="button"
                            onClick={() => setSelectedDate(day)}
                            className={`p-2 rounded-lg font-mono text-xs font-bold transition-all text-center cursor-pointer ${
                              selectedDate === day
                                ? "bg-sky-500 text-white shadow-md shadow-sky-500/25"
                                : "text-slate-400 hover:bg-slate-800 hover:text-white"
                            }`}
                          >
                            {day}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Hourly slots selection */}
                    <AnimatePresence>
                      {selectedDate && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="space-y-3"
                        >
                          <h4 className="font-sans font-bold text-sm text-slate-300 uppercase tracking-widest font-mono">
                            Select an Available Time Slot
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {availableSlots.map((slot) => (
                              <button
                                key={slot}
                                type="button"
                                onClick={() => setSelectedSlot(slot)}
                                className={`px-4 py-2.5 rounded-xl text-xs font-semibold font-mono transition-all cursor-pointer ${
                                  selectedSlot === slot
                                    ? "bg-sky-500 text-white shadow-md shadow-sky-500/25"
                                    : "bg-slate-950/40 border border-slate-800 text-slate-400 hover:text-white"
                                }`}
                              >
                                {slot}
                              </button>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <button
                      type="button"
                      onClick={handleBookMeeting}
                      className="w-full py-4 mt-4 rounded-xl bg-gradient-to-r from-sky-400 to-indigo-500 hover:from-sky-500 hover:to-indigo-600 text-white font-bold text-xs tracking-wider uppercase shadow-[0_4px_15px_rgba(14,165,233,0.35)] transition-all flex items-center justify-center space-x-2 cursor-pointer"
                    >
                      <Calendar size={13} />
                      <span>Confirm Appointment Booking</span>
                    </button>
                  </div>
                )
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

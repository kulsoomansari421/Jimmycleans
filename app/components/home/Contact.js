"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Phone, Clock, MapPin, ArrowRight, Star, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

const services = [
  "Residential Cleaning",
  "Commercial Cleaning",
  "Window Cleaning",
  "Post-Construction Cleaning",
  "Power Washing",
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState("");
  const charCount = form.message.length;

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "message" && value.length > 500) return;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong.");
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err.message || "Failed to send. Please try again.");
    }
  };

  const resetForm = () => {
    setStatus("idle");
    setErrorMsg("");
    setForm({ name: "", email: "", phone: "", service: "", message: "" });
  };

  return (
    <section id="contact" style={{ background: "var(--bg-dark)" }} className="section-padding">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="text-center mb-12"
        >
          <p className="text-xs font-semibold tracking-widest uppercase text-[rgba(255,255,255,0.3)] mb-3">/ Contact Us /</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            Get a Free Quote, No Obligation
          </h2>
          <p className="text-[rgba(255,255,255,0.4)] text-sm">
            Tell us about your space. We&apos;ll get back to you within a few hours, usually same day.
          </p>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">

          {/* Left — image panel with contact info */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative rounded-2xl overflow-hidden min-h-[320px] lg:min-h-[480px]"
          >
            <img
              src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=900&q=80"
              alt="Professional cleaning team"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(160deg, rgba(4,8,20,0.70) 0%, rgba(4,8,20,0.55) 50%, rgba(4,8,20,0.80) 100%)" }}
            />
            <div className="relative z-10 p-6 sm:p-8 flex flex-col h-full justify-between">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[rgba(27,157,232,0.18)] border border-[rgba(27,157,232,0.25)] mb-5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1B9DE8]" />
                  <span className="text-[11px] font-semibold text-[#60c0f8] uppercase tracking-widest">We&apos;re Ready to Help</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 leading-tight">
                  Let&apos;s Get Your<br />Space Looking Its Best
                </h3>
                <p className="text-[rgba(255,255,255,0.5)] text-sm leading-relaxed max-w-xs">
                  Reliable, detail-obsessed, and fully insured. Serving homes and businesses across North New Jersey.
                </p>
              </div>

              <div className="space-y-3 mt-8">
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} size={13} className="text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs text-[rgba(255,255,255,0.45)]">4.9 · 1,200+ clients</span>
                </div>
                <a href="tel:+12015550100" className="flex items-center gap-3 text-sm text-[rgba(255,255,255,0.75)] hover:text-white transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-[rgba(27,157,232,0.2)] border border-[rgba(27,157,232,0.3)] flex items-center justify-center shrink-0">
                    <Phone size={13} className="text-[#1B9DE8]" />
                  </div>
                  (973) 617-6978
                </a>
                <div className="flex items-center gap-3 text-sm text-[rgba(255,255,255,0.75)]">
                  <div className="w-8 h-8 rounded-lg bg-[rgba(27,157,232,0.2)] border border-[rgba(27,157,232,0.3)] flex items-center justify-center shrink-0">
                    <Clock size={13} className="text-[#1B9DE8]" />
                  </div>
                  Mon to Sat: 8AM to 6PM
                </div>
                <div className="flex items-center gap-3 text-sm text-[rgba(255,255,255,0.75)]">
                  <div className="w-8 h-8 rounded-lg bg-[rgba(27,157,232,0.2)] border border-[rgba(27,157,232,0.3)] flex items-center justify-center shrink-0">
                    <MapPin size={13} className="text-[#1B9DE8]" />
                  </div>
                  Northern New Jersey
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="rounded-2xl border border-[rgba(255,255,255,0.07)] p-6 sm:p-7"
            style={{ background: "rgba(255,255,255,0.04)" }}
          >
            {/* Success state */}
            {status === "success" ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-14">
                <div className="w-16 h-16 rounded-full bg-emerald-500 flex items-center justify-center mb-5">
                  <CheckCircle2 size={28} className="text-white" />
                </div>
                <h3 className="text-white font-bold text-xl mb-2">Message Sent!</h3>
                <p className="text-[rgba(255,255,255,0.5)] text-sm mb-1">
                  We received your request and will respond within 24 hours.
                </p>
                <p className="text-[rgba(255,255,255,0.3)] text-xs mb-6">
                  A copy has been sent to jimmycleansnj@gmail.com
                </p>
                <button
                  onClick={resetForm}
                  className="text-xs text-[rgba(255,255,255,0.35)] hover:text-white transition-colors border border-[rgba(255,255,255,0.12)] px-4 py-2 rounded-lg hover:border-[rgba(255,255,255,0.3)]"
                >
                  Submit another request
                </button>
              </div>
            ) : (
              <>
                <h3 className="text-white font-bold text-lg mb-5">Request a Free Quote</h3>

                {/* Error banner */}
                {status === "error" && (
                  <div className="flex items-start gap-3 mb-4 p-3 rounded-xl bg-red-500/10 border border-red-500/20">
                    <AlertCircle size={15} className="text-red-400 mt-0.5 shrink-0" />
                    <p className="text-sm text-red-300">{errorMsg}</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs text-[rgba(255,255,255,0.4)] mb-1.5 font-medium">Name *</label>
                      <input
                        type="text" name="name" value={form.name} onChange={handleChange}
                        placeholder="Your name" required
                        className="form-input"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-[rgba(255,255,255,0.4)] mb-1.5 font-medium">Phone *</label>
                      <input
                        type="tel" name="phone" value={form.phone} onChange={handleChange}
                        placeholder="(973) 617-6978" required
                        className="form-input"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs text-[rgba(255,255,255,0.4)] mb-1.5 font-medium">Email <span className="text-[rgba(255,255,255,0.2)]">(optional, for reply)</span></label>
                    <input
                      type="email" name="email" value={form.email} onChange={handleChange}
                      placeholder="you@example.com"
                      className="form-input"
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-[rgba(255,255,255,0.4)] mb-1.5 font-medium">Service</label>
                    <select
                      name="service" value={form.service} onChange={handleChange}
                      className="form-input appearance-none cursor-pointer"
                      style={{ color: form.service ? "#fff" : "rgba(255,255,255,0.3)" }}
                    >
                      <option value="" style={{ background: "#141414", color: "rgba(255,255,255,0.4)" }}>Select a service</option>
                      {services.map((s) => (
                        <option key={s} value={s} style={{ background: "#141414", color: "#fff" }}>{s}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs text-[rgba(255,255,255,0.4)] mb-1.5 font-medium flex justify-between">
                      <span>Message</span>
                      <span className={charCount > 450 ? "text-orange-400" : "text-[rgba(255,255,255,0.25)]"}>{charCount}/500</span>
                    </label>
                    <textarea
                      name="message" value={form.message} onChange={handleChange} rows={4}
                      placeholder="Tell us about your space and what you need..."
                      className="form-input resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="btn-primary w-full py-3.5 rounded-xl text-sm font-semibold text-white mt-1 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 size={15} className="animate-spin" />
                        Sending…
                      </>
                    ) : (
                      <>
                        Request a Quote
                        <ArrowRight size={14} />
                      </>
                    )}
                  </button>

                  <p className="text-[10px] text-[rgba(255,255,255,0.2)] text-center mt-1">
                    We respond within 24 hours · No spam, ever.
                  </p>
                </form>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

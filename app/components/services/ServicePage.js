"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone, ArrowRight, Check,
  Home, Building2, Eye, HardHat, Zap,
  Clock, Shield, Star, RefreshCw, Sparkles, Layers, TrendingUp,
  CheckCircle2, Plus, Minus,
} from "lucide-react";

const ICON_MAP = {
  Home, Building2, Eye, HardHat, Zap,
  Clock, Shield, Star, RefreshCw, Sparkles, Layers, TrendingUp, CheckCircle2,
};

const otherServices = [
  { label: "Residential Cleaning", href: "/services/residential-cleaning", icon: "Home" },
  { label: "Commercial Cleaning", href: "/services/commercial-cleaning", icon: "Building2" },
  { label: "Window Cleaning", href: "/services/window-cleaning", icon: "Eye" },
  { label: "Post-Construction Cleaning", href: "/services/post-construction-cleaning", icon: "HardHat" },
  { label: "Power Washing", href: "/services/power-washing", icon: "Zap" },
];

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-[#e5e5e5] rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left hover:bg-[#f9f9f9] transition-colors"
      >
        <span className="font-semibold text-sm text-[#0d0d0d]">{q}</span>
        {open ? <Minus size={15} className="text-[#6b7280] shrink-0" /> : <Plus size={15} className="text-[#6b7280] shrink-0" />}
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: "easeInOut" }}
          >
            <div className="px-5 pb-4 border-t border-[#e5e5e5]">
              <p className="text-sm text-[#6b7280] leading-relaxed pt-3">{a}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function ServicePage({ service }) {
  const {
    icon: iconName, title, tagline, description,
    highlights, process, faqs, pricing, heroImage, heroObjectFit, images,
  } = service;
  const Icon = ICON_MAP[iconName] || Home;

  const g0 = (images && images[0]) || heroImage;
  const g1 = (images && images[1]) || "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80";
  const g2 = (images && images[2]) || "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=800&q=80";

  return (
    <div className="bg-white">
      {/* Hero */}
      <section
        className="relative pt-24 pb-20 min-h-[52vh] flex items-end overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0a0a0a 0%, #0d1520 60%, #080c14 100%)" }}
      >
        {heroImage && (
          <img
            src={heroImage}
            alt={title}
            className={`absolute inset-0 w-full h-full ${heroObjectFit === "contain" ? "object-contain object-center opacity-90" : "object-cover opacity-40"}`}
          />
        )}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
        <div className="absolute right-0 top-0 bottom-0 w-1/2 pointer-events-none" style={{ background: "linear-gradient(to left, rgba(27,157,232,0.1), transparent)" }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-[rgba(255,255,255,0.35)] mb-6">
            <Link href="/#services" className="hover:text-white transition-colors">Services</Link>
            <span>/</span>
            <span className="text-[rgba(255,255,255,0.6)]">{title}</span>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-4 leading-tight max-w-2xl"
          >
            {title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[rgba(255,255,255,0.5)] text-base max-w-xl leading-relaxed"
          >
            {tagline}
          </motion.p>
        </div>
      </section>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="flex flex-col lg:flex-row gap-10">

          {/* Left — main content */}
          <div className="flex-1 min-w-0">

            {/* Photo gallery */}
            {heroImage && (
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-14"
              >
                {/* Desktop: large left, two stacked right — pure CSS grid, no overflow */}
                <div
                  className="hidden md:grid gap-3 w-full"
                  style={{
                    gridTemplateColumns: "2fr 1fr",
                    gridTemplateRows: "1fr 1fr",
                    height: 360,
                  }}
                >
                  <div className="row-span-2 rounded-2xl overflow-hidden">
                    <img src={g0} alt={title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="rounded-2xl overflow-hidden">
                    <img src={g1} alt="Cleaning detail" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="rounded-2xl overflow-hidden">
                    <img src={g2} alt="Cleaning result" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                  </div>
                </div>

                {/* Mobile: single full-width + two side-by-side */}
                <div className="md:hidden space-y-3">
                  <div className="rounded-2xl overflow-hidden h-56">
                    <img src={g0} alt={title} className="w-full h-full object-cover" />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-2xl overflow-hidden h-40">
                      <img src={g1} alt="Cleaning detail" className="w-full h-full object-cover" />
                    </div>
                    <div className="rounded-2xl overflow-hidden h-40">
                      <img src={g2} alt="Cleaning result" className="w-full h-full object-cover" />
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* What We Do */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-10"
            >
              <h2 className="text-xl font-bold text-[#0d0d0d] mb-4">What We Do</h2>
              <p className="text-[#374151] text-sm leading-relaxed">{description}</p>
            </motion.div>

            {/* Why Choose This Service */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-10"
            >
              <h2 className="text-xl font-bold text-[#0d0d0d] mb-5">Why Choose This Service</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {highlights.map((h) => (
                  <div key={h} className="checklist-item">
                    <Check size={14} className="text-[#1B9DE8] shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* How It Works */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-10"
            >
              <h2 className="text-xl font-bold text-[#0d0d0d] mb-5">How It Works</h2>
              <div className="space-y-3">
                {process.map((step, i) => (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="flex gap-4 items-start"
                  >
                    <div className="w-9 h-9 rounded-xl bg-[#0d0d0d] flex items-center justify-center shrink-0">
                      <span className="text-white text-xs font-bold">{String(i + 1).padStart(2, "0")}</span>
                    </div>
                    <div className="pt-1">
                      <p className="font-semibold text-[#0d0d0d] text-sm mb-0.5">{step.title}</p>
                      <p className="text-xs text-[#6b7280] leading-relaxed">{step.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* FAQs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-xl font-bold text-[#0d0d0d] mb-5">Frequently Asked Questions</h2>
              <div className="space-y-2.5">
                {faqs.map((faq) => (
                  <FAQItem key={faq.q} q={faq.q} a={faq.a} />
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right sidebar */}
          <div className="lg:w-72 shrink-0">
            <div className="sticky top-24 flex flex-col gap-4">

              {/* Pricing card */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="rounded-2xl overflow-hidden border border-[#e5e5e5]"
                style={{ background: "var(--bg-dark)" }}
              >
                {heroImage && (
                  <div className="h-28 overflow-hidden relative">
                    <img src={heroImage} alt={title} className="w-full h-full object-cover opacity-60" />
                    <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, transparent 30%, rgba(10,10,20,0.85) 100%)" }} />
                  </div>
                )}
                <div className="p-6">
                  <p className="text-xs text-[rgba(255,255,255,0.35)] mb-1 font-medium">Starting At</p>
                  <p className="text-3xl font-extrabold text-white mb-5">{pricing}</p>
                  <Link
                    href="/#contact"
                    className="btn-primary flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-semibold text-white mb-2.5"
                  >
                    Get a Quote
                  </Link>
                  <a
                    href="tel:+19736176978"
                    className="btn-dark flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-semibold"
                  >
                    Call Now
                  </a>
                </div>
              </motion.div>

              {/* Other Services */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="card p-4"
              >
                <p className="text-xs font-semibold text-[#9ca3af] uppercase tracking-widest mb-3">Other Services</p>
                <div className="space-y-1">
                  {otherServices
                    .filter((s) => s.label !== title)
                    .map((s) => {
                      const SIcon = ICON_MAP[s.icon] || Home;
                      return (
                        <Link
                          key={s.href}
                          href={s.href}
                          className="flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-[#f5f5f3] group transition-colors"
                        >
                          <div className="flex items-center gap-2.5">
                            <SIcon size={14} className="text-[#9ca3af]" />
                            <span className="text-sm text-[#374151] group-hover:text-[#0d0d0d] transition-colors">{s.label}</span>
                          </div>
                          <ArrowRight size={12} className="text-[#d1d5db] group-hover:text-[#1B9DE8] transition-colors" />
                        </Link>
                      );
                    })}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <section className="section-padding relative overflow-hidden" style={{ background: "#080c14" }}>
        {heroImage && (
          <img
            src={heroImage}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover opacity-20"
          />
        )}
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(135deg, rgba(4,8,20,0.88) 0%, rgba(6,10,26,0.78) 100%)" }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at 50% 100%, rgba(27,157,232,0.12) 0%, transparent 60%)" }}
        />

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <p className="text-xs font-semibold tracking-widest uppercase text-[rgba(255,255,255,0.3)] mb-4">/ Get Started /</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              Ready for a {title}?
            </h2>
            <p className="text-[rgba(255,255,255,0.45)] text-sm mb-8">
              Get your free quote today. We respond within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/#contact"
                className="btn-primary flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold text-white"
              >
                Request a Quote
                <ArrowRight size={14} />
              </Link>
              <a
                href="tel:+19736176978"
                className="btn-outline-white flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold"
              >
                <Phone size={14} />
                (973) 617-6978
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

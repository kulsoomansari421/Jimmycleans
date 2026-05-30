"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, ChevronDown, Menu, X, ArrowRight } from "lucide-react";

const allServices = [
  { label: "Residential Cleaning", href: "/services/residential-cleaning" },
  { label: "Commercial Cleaning", href: "/services/commercial-cleaning" },
  { label: "Window Cleaning", href: "/services/window-cleaning" },
  { label: "Post-Construction Cleaning", href: "/services/post-construction-cleaning" },
  { label: "Power Washing", href: "/services/power-washing" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => { setMobileOpen(false); }, [pathname]);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-5 lg:px-8 pt-3">
      <motion.header
        initial={false}
        animate={{ borderRadius: 20 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="w-full relative glass-nav"
        style={{ borderRadius: 20 }}
      >
        {/* Top accent stripe */}
        <div
          className="absolute top-0 left-0 right-0 h-px rounded-t-[20px] pointer-events-none"
          style={{ background: "linear-gradient(90deg, transparent 5%, rgba(27,157,232,0.5) 40%, rgba(96,192,248,0.7) 50%, rgba(27,157,232,0.5) 60%, transparent 95%)" }}
        />

        <div className="flex items-center justify-between h-[62px] px-4 sm:px-6">

          {/* Logo */}
          <Link href="/" className="shrink-0 group">
            <img
              src="/Jimmy Cleans Logo FF.png"
              alt="Jimmy Cleans"
              className="rounded-xl transition-all duration-300 group-hover:shadow-[0_4px_16px_rgba(27,157,232,0.25)]"
              style={{ width: "162px", height: "50px", objectFit: "cover", objectPosition: "center" }}
            />
          </Link>

          {/* Desktop nav links */}
          <nav className="hidden md:flex items-center gap-0.5">
            {[
              { label: "Services", href: "/#services" },
              { label: "About", href: "/#about" },
              { label: "How It Works", href: "/#how-it-works" },
              { label: "Reviews", href: "/#testimonials" },
            ].map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className="px-3.5 py-2 text-sm font-medium text-[#374151] hover:text-[#1B9DE8] hover:bg-[#f0f7fe] rounded-xl transition-all duration-200"
              >
                {l.label}
              </Link>
            ))}

            {/* All Services dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="flex items-center gap-1 px-3.5 py-2 text-sm font-medium text-[#374151] hover:text-[#1B9DE8] hover:bg-[#f0f7fe] rounded-xl transition-all duration-200">
                All Services
                <ChevronDown size={13} className={`transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`} />
              </button>

              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.97 }}
                    transition={{ duration: 0.18, ease: "easeOut" }}
                    className="absolute top-full right-0 mt-2 rounded-2xl overflow-hidden"
                    style={{
                      width: 252,
                      background: "rgba(255,255,255,0.96)",
                      backdropFilter: "blur(20px)",
                      WebkitBackdropFilter: "blur(20px)",
                      border: "1px solid rgba(255,255,255,0.75)",
                      boxShadow: "0 16px 48px rgba(0,0,0,0.12), 0 0 0 1px rgba(27,157,232,0.06)",
                    }}
                  >
                    <div className="h-px bg-gradient-to-r from-transparent via-[#1B9DE8] to-transparent" />
                    <div className="p-2">
                      {allServices.map((s) => (
                        <Link
                          key={s.href}
                          href={s.href}
                          className="flex items-center justify-between px-3 py-2.5 text-sm text-[#374151] hover:text-[#1B9DE8] hover:bg-[#f0f7fe] rounded-xl transition-all group"
                        >
                          {s.label}
                          <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 text-[#1B9DE8] transition-opacity" />
                        </Link>
                      ))}
                    </div>
                    <div className="px-3 pb-3">
                      <div className="h-px bg-[#e5e7eb] mb-2" />
                      <Link href="/#services" className="flex items-center gap-1.5 text-xs font-semibold text-[#1B9DE8] hover:text-[#1282c5] transition-colors px-1">
                        View All Services <ArrowRight size={11} />
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          {/* Desktop right actions */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+12015550100"
              className="flex items-center gap-1.5 text-sm font-medium text-[#6b7280] hover:text-[#1B9DE8] transition-colors duration-200"
            >
              <Phone size={13} />
              (973) 617-6978
            </a>
            <Link
              href="/#contact"
              className="btn-primary flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-sm font-semibold text-white"
            >
              Get a Quote
              <ArrowRight size={13} />
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-xl text-[#374151] hover:text-[#1B9DE8] hover:bg-[#f0f7fe] transition-all"
          >
            <AnimatePresence mode="wait">
              {mobileOpen ? (
                <motion.div key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                  <X size={20} />
                </motion.div>
              ) : (
                <motion.div key="m" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                  <Menu size={20} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.22 }}
              className="overflow-hidden border-t border-[#f0f0f0] md:hidden"
            >
              <div className="px-4 py-4 space-y-0.5">
                {[
                  { label: "Services", href: "/#services" },
                  { label: "About", href: "/#about" },
                  { label: "How It Works", href: "/#how-it-works" },
                  { label: "Reviews", href: "/#testimonials" },
                ].map((l) => (
                  <Link
                    key={l.label}
                    href={l.href}
                    className="block px-3 py-2.5 text-sm font-medium text-[#374151] hover:text-[#1B9DE8] hover:bg-[#f0f7fe] rounded-xl transition-all"
                  >
                    {l.label}
                  </Link>
                ))}

                <div className="px-2 pt-2">
                  <p className="text-[10px] font-bold text-[#9ca3af] uppercase tracking-widest mb-2 px-1">All Services</p>
                  {allServices.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      className="flex items-center gap-2 px-3 py-2 text-sm text-[#6b7280] hover:text-[#1B9DE8] hover:bg-[#f0f7fe] rounded-xl transition-all"
                    >
                      <span className="w-1 h-1 rounded-full bg-[#d1d5db] flex-shrink-0" />
                      {s.label}
                    </Link>
                  ))}
                </div>

                <div className="pt-3 border-t border-[#f0f0f0] flex flex-col gap-2">
                  <a
                    href="tel:+12015550100"
                    className="flex items-center gap-2 px-3 py-2.5 text-sm text-[#374151] hover:text-[#1B9DE8] hover:bg-[#f0f7fe] rounded-xl transition-all"
                  >
                    <Phone size={14} />
                    (973) 617-6978
                  </a>
                  <Link href="/#contact" className="btn-primary flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold text-white">
                    Get a Free Quote <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </div>
  );
}

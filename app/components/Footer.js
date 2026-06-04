import Link from "next/link";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative px-3 sm:px-5 lg:px-8 pb-3 pt-6">

      {/* Outer container — clips background image to pill shape */}
      <div className="relative rounded-3xl overflow-hidden">

        {/* ── Background image ── */}
        <img
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1920&q=80"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        {/* Soft warm tint so white glass pops against the image */}
        <div
          className="absolute inset-0"
          style={{ background: "rgba(220,235,248,0.18)" }}
        />

        {/* ── Glass surface — backdrop-filter blurs the image behind it ── */}
        <div
          className="relative"
          style={{
            background: "rgba(255,255,255,0.72)",
            backdropFilter: "blur(28px) saturate(200%)",
            WebkitBackdropFilter: "blur(28px) saturate(200%)",
            borderTop: "1px solid rgba(255,255,255,0.80)",
          }}
        >
          {/* Top accent stripe */}
          <div
            className="absolute top-0 left-0 right-0 h-px pointer-events-none"
            style={{ background: "linear-gradient(90deg, transparent 5%, rgba(27,157,232,0.55) 40%, rgba(96,192,248,0.75) 50%, rgba(27,157,232,0.55) 60%, transparent 95%)" }}
          />

          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-12 pb-8">

            {/* Main grid */}
            <div className="flex flex-col lg:flex-row justify-between gap-10 mb-10">

              {/* Brand column */}
              <div className="w-full sm:max-w-70">
                <Link href="/" className="inline-flex mb-5 group">
                  <img
                    src="/Jimmy Cleans Logo FF.png"
                    alt="Jimmy Cleans"
                    className="rounded-xl transition-all duration-300 group-hover:shadow-[0_4px_16px_rgba(27,157,232,0.22)]"
                    style={{ width: "162px", height: "50px", objectFit: "cover", objectPosition: "center", display: "block" }}
                  />
                </Link>
                <p className="text-sm text-[#374151] leading-relaxed mb-6">
                  Our mission is simple: provide dependable, high-quality cleaning services with professionalism, consistency, and attention to detail.
                </p>
                <div className="flex items-center gap-2">
                  {[
                    { label: "IG", href: "https://www.instagram.com/jimmycleansnj/" },
                    { label: "FB", href: "https://www.facebook.com/profile.php?id=61582880371718" },
                  ].map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-xl border border-[rgba(255,255,255,0.8)] bg-white/60 flex items-center justify-center text-[#6b7280] hover:text-[#1B9DE8] hover:border-[#1B9DE8] hover:bg-white/80 transition-all duration-200 text-[10px] font-bold shadow-sm"
                    >
                      {s.label}
                    </a>
                  ))}
                </div>
              </div>

              {/* Links grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 flex-1 max-w-2xl">

                <div>
                  <p className="text-[11px] font-bold text-[#0d0d0d] uppercase tracking-widest mb-4">Services</p>
                  <ul className="space-y-2.5">
                    {[
                      { label: "Residential Cleaning", href: "/services/residential-cleaning" },
                      { label: "Commercial Cleaning", href: "/services/commercial-cleaning" },
                      { label: "Window Cleaning", href: "/services/window-cleaning" },
                      { label: "Post-Construction", href: "/services/post-construction-cleaning" },
                      { label: "Power Washing", href: "/services/power-washing" },
                    ].map((l) => (
                      <li key={l.label}>
                        <Link href={l.href} className="flex items-center gap-1.5 text-sm text-[#4b5563] hover:text-[#1B9DE8] transition-colors duration-150 group">
                          <span className="w-1 h-1 rounded-full bg-[#9ca3af] group-hover:bg-[#1B9DE8] transition-colors flex-shrink-0" />
                          {l.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="text-[11px] font-bold text-[#0d0d0d] uppercase tracking-widest mb-4">Company</p>
                  <ul className="space-y-2.5">
                    {[
                      { label: "About Us", href: "/#about" },
                      { label: "How It Works", href: "/#how-it-works" },
                      { label: "Testimonials", href: "/#testimonials" },
                      { label: "Before & After", href: "/#before-after" },
                    ].map((l) => (
                      <li key={l.label}>
                        <Link href={l.href} className="flex items-center gap-1.5 text-sm text-[#4b5563] hover:text-[#1B9DE8] transition-colors duration-150 group">
                          <span className="w-1 h-1 rounded-full bg-[#9ca3af] group-hover:bg-[#1B9DE8] transition-colors flex-shrink-0" />
                          {l.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="text-[11px] font-bold text-[#0d0d0d] uppercase tracking-widest mb-4">Support</p>
                  <ul className="space-y-2.5">
                    {[
                      { label: "Contact", href: "/#contact" },
                      { label: "Get a Quote", href: "/#contact" },
                      { label: "Call Us", href: "tel:+19736176978" },
                    ].map((l) => (
                      <li key={l.label}>
                        <Link href={l.href} className="flex items-center gap-1.5 text-sm text-[#4b5563] hover:text-[#1B9DE8] transition-colors duration-150 group">
                          <span className="w-1 h-1 rounded-full bg-[#9ca3af] group-hover:bg-[#1B9DE8] transition-colors flex-shrink-0" />
                          {l.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="text-[11px] font-bold text-[#0d0d0d] uppercase tracking-widest mb-4">Contact</p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2.5 text-sm text-[#4b5563]">
                      <MapPin size={14} className="mt-0.5 shrink-0 text-[#1B9DE8]" />
                     Northern New Jersey
                    </li>
                    <li>
                      <a href="tel:+19736176978" className="flex items-start gap-2.5 text-sm text-[#4b5563] hover:text-[#1B9DE8] transition-colors">
                        <Phone size={14} className="mt-0.5 shrink-0 text-[#1B9DE8]" />
                       (973) 617-6978
                      </a>
                    </li>
                    <li>
                      <a href="mailto:hello@jimmycleans.com" className="flex items-start gap-2.5 text-sm text-[#4b5563] hover:text-[#1B9DE8] transition-colors">
                        <Mail size={14} className="mt-0.5 shrink-0 text-[#1B9DE8]" />
                        info@jimmycleansnj.com
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-[rgba(0,0,0,0.08)] mb-6" />

            {/* Bottom bar */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <p className="text-xs text-[#6b7280]">
                  © {new Date().getFullYear()} Jimmy Cleans. All rights reserved.
                </p>
                <p className="text-xs text-[#9ca3af] mt-1">
                  Powered by <span className="text-[#1B9DE8] font-medium">Metaronics</span>
                </p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs text-[#6b7280]">Northern New Jersey&apos;s #1 Cleaning Service</span>
                <Link
                  href="/#contact"
                  className="btn-primary flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-sm font-semibold text-white"
                >
                  Get a Free Quote
                  <ArrowRight size={13} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile sticky call bar */}
      <div
        className="sm:hidden fixed bottom-3 left-3 right-3 z-40 rounded-2xl px-4 py-3 flex gap-3"
        style={{
          background: "rgba(255,255,255,0.92)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          border: "1px solid rgba(255,255,255,0.75)",
          boxShadow: "0 8px 32px rgba(0,0,0,0.10)",
        }}
      >
        <a
          href="tel:+19736176978"
          className="btn-outline flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold"
        >
          <Phone size={14} />
          Call Now
        </a>
        <Link
          href="/#contact"
          className="btn-primary flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold text-white"
        >
          Get a Quote
        </Link>
      </div>
    </footer>
  );
}

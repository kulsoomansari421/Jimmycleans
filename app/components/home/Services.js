"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import {
  Home,
  Building2,
  Eye,
  HardHat,
  Zap,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Residential Cleaning",
    desc: "Deep, thorough cleaning for your home. Every corner, every surface, done right.",
    href: "/services/residential-cleaning",
    image: "/modernkitchencleaning.png",
  },
  {
    icon: Building2,
    title: "Commercial Cleaning",
    desc: "Keep your workspace pristine. Impress clients and boost team morale.",
    href: "/services/commercial-cleaning",
    image: "/Commercialjimmy.png",
    featured: true,
  },
  {
    icon: Eye,
    title: "Window Cleaning",
    desc: "Crystal-clear windows inside and out. Let the light in properly.",
    href: "/services/window-cleaning",
    image: "/windowclean.png",
  },
  {
    icon: HardHat,
    title: "Post-Construction",
    desc: "Remove dust, debris, and residue. Make your new space move-in ready.",
    href: "/services/post-construction-cleaning",
    image: "/postconstruction2.png",
  },
  {
    icon: Zap,
    title: "Power Washing",
    desc: "Restore driveways, patios, siding, and decks to like-new condition.",
    href: "/services/power-washing",
    image: "/powerwashing1.png",
  },
];

export default function Services() {
  const ref = useRef(null);

  const inView = useInView(ref, {
    once: true,
    margin: "-60px",
  });

  return (
    <section
      id="services"
      className="section-padding bg-white relative overflow-hidden"
    >
      {/* Animated gradient orbs */}
      <div className="section-orbs" aria-hidden="true">
        <div className="section-orb section-orb-1" />
        <div className="section-orb section-orb-2" />
        <div className="section-orb section-orb-3" />
        <div className="section-orb section-orb-4" />
      </div>

      <div
        ref={ref}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="text-center mb-12"
        >
          <p className="section-label mb-3">Our Services</p>

          <h2 className="text-3xl sm:text-4xl font-bold text-[#0d0d0d]">
            What We Do Best
          </h2>

          <p className="text-[#6b7280] text-sm mt-3 max-w-lg mx-auto">
            From spotless homes to pristine offices. We bring
            professional-grade results to every job.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc, i) => (
            <motion.div
              key={svc.title}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.09 }}
            >
              <Link
                href={svc.href}
                className="group block rounded-2xl overflow-hidden border border-[#e5e7eb] bg-white transition-all duration-300 hover:shadow-[0_16px_48px_rgba(0,0,0,0.10)] hover:-translate-y-1 h-full"
              >

                {/* Image */}
                <div className="relative h-52 overflow-hidden">

                  <Image
                    src={svc.image}
                    alt={svc.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* gradient overlay */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(0,0,0,0.38) 0%, transparent 55%)",
                    }}
                  />

                  {/* Most Popular badge */}
                  {svc.featured && (
                    <div className="absolute top-3 left-3">
                      <span className="text-[11px] font-bold px-3 py-1.5 rounded-full bg-[#1B9DE8] text-white tracking-wide shadow-lg">
                        Most Popular
                      </span>
                    </div>
                  )}

                  {/* Icon badge */}
                  <div className="absolute bottom-3 left-4">
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center shadow-lg"
                      style={{
                        background: "rgba(255,255,255,0.18)",
                        backdropFilter: "blur(12px)",
                        border: "1px solid rgba(255,255,255,0.3)",
                      }}
                    >
                      <svc.icon size={16} className="text-white" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col gap-2">
                  <h3 className="font-bold text-[#0d0d0d] text-[15px] leading-snug group-hover:text-[#1B9DE8] transition-colors duration-200">
                    {svc.title}
                  </h3>

                  <p className="text-sm text-[#6b7280] leading-relaxed">
                    {svc.desc}
                  </p>

                  <div className="flex items-center gap-1 text-xs font-semibold text-[#1B9DE8] mt-2 group-hover:gap-2 transition-all duration-200">
                    Learn More
                    <ArrowRight size={12} />
                  </div>
                </div>

              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
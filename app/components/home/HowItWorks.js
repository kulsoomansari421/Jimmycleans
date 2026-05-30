"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Tell Us What You Need",
    desc: "Fill out our quick form or give us a call. We'll ask a few questions about your space and get you a free quote, usually same day.",
    image: "/deepclean.png",
  },
  {
    num: "02",
    title: "We Come and Clean",
    desc: "Our team shows up at the agreed time, fully equipped. First visit is a thorough deep clean to get everything up to our standard.",
    image: "/maintenanceschedule.png",
  },
  {
    num: "03",
    title: "Keep It Clean, Hassle-Free",
    desc: "Set up a recurring schedule that works for your life, or book us whenever you need. No contracts, cancel anytime.",
    image: "/ongoingservices.png",
  },
];

export default function HowItWorks() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="how-it-works" className="section-padding bg-white relative overflow-hidden">
      <div className="section-orbs" aria-hidden="true">
        <div className="section-orb section-orb-2" style={{ top: "-100px", left: "auto", right: "-200px", bottom: "auto" }} />
        <div className="section-orb section-orb-1" style={{ bottom: "-180px", top: "auto", left: "-100px" }} />
        <div className="section-orb section-orb-4" style={{ top: "50%", left: "40%", transform: "translateY(-50%)" }} />
        <div className="section-orb section-orb-3" style={{ bottom: "-60px", right: "20%", top: "auto", left: "auto" }} />
      </div>

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="text-center mb-14"
        >
          <p className="section-label mb-3">How It Works</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0d0d0d]">Getting Started Takes About 2 Minutes</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="rounded-2xl overflow-hidden border border-[#e5e7eb] bg-white shadow-sm hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300"
            >
              {/* Step image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-full object-cover"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(to top, rgba(0,0,0,0.45) 0%, transparent 55%)" }}
                />
                {/* Step number badge */}
                <div
                  className="absolute top-4 left-4 w-11 h-11 rounded-xl flex items-center justify-center shadow-lg"
                  style={{ background: "linear-gradient(135deg, #1B9DE8 0%, #1282c5 100%)" }}
                >
                  <span className="text-white font-bold text-sm">{step.num}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-bold text-[#0d0d0d] text-lg mb-2">{step.title}</h3>
                <p className="text-sm text-[#6b7280] leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

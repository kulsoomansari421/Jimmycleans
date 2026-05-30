"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  
  { value: "100+", label: "Happy Clients" },
  { value: "100+", label: "Cleans Done" },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="about" style={{ background: "var(--bg-dark-2)" }} className="section-padding">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65 }}
            className="flex-1 max-w-xl"
          >
            <p className="text-xs font-semibold tracking-widest uppercase text-[rgba(255,255,255,0.3)] mb-4">
              / About Jimmy /
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight">
              Northern New Jersey,<br />Built on Honest Work.
            </h2>
            <div className="space-y-4 text-[rgba(255,255,255,0.45)] text-sm leading-relaxed mb-10">
              <p>
                Jimmy started cleaning homes in Morristown back in 2016, just him, a van, and a reputation for never cutting corners. Eight years later, we&apos;re a full team serving towns all across Northern New Jersey, but the approach hasn&apos;t changed.
              </p>
              <p>
                Show up when we say we will. Clean what we say we&apos;ll clean. Charge what we quoted. That&apos;s it. No hidden fees, no surprise add-ons, no strangers rotating through your space every week.
              </p>
            </div>

            {/* Stats */}
            {/* <div className="flex gap-10 mb-10">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.45, delay: 0.2 + i * 0.1 }}
                  className="stat-block"
                >
                  <div className="stat-number">{s.value}</div>
                  <div className="stat-label">{s.label}</div>
                </motion.div>
              ))}
            </div> */}

            {/* <motion.button
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.5 }}
              className="btn-outline-white px-6 py-3 rounded-xl text-sm font-semibold"
            >
              Meet the Team
            </motion.button> */}
          </motion.div>

          {/* Visual block */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="hidden lg:flex flex-1 justify-end"
          >
            <div className="w-95 h-95 rounded-3xl overflow-hidden relative border border-[rgba(255,255,255,0.07)] shadow-[0_32px_80px_rgba(0,0,0,0.5)]">
              <img
                src="whiclinettrust.png"
                className="w-full h-full  absolute object-cover"
              />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(to top, rgba(8,12,20,0.75) 0%, transparent 55%)" }}
              />
              <div className="absolute bottom-6 left-6">
                <p className="text-white font-bold text-lg leading-tight">Jimmy Cleans</p>
                <p className="text-[rgba(255,255,255,0.55)] text-sm">Northern New Jersey</p>
              </div>
              <div className="absolute top-5 right-5 bg-[#1B9DE8] rounded-xl px-3 py-2 text-center shadow-lg">
                <p className="text-white font-extrabold text-xl leading-none">8+</p>
                <p className="text-white/80 text-[10px] font-medium mt-0.5">Years</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

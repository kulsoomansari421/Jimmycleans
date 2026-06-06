"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

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
              / About Jimmy Cleans /
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight">
              About Jimmy Cleans
            </h2>
            <div className="space-y-4 text-[rgba(255,255,255,0.45)] text-sm leading-relaxed mb-10">
              <p>
                At Jimmy Cleans, our story began with a simple goal: provide reliable, high-quality cleaning services and earn every customer&apos;s trust through hard work and exceptional results.
              </p>
              <p>
                What started as a one-person operation with a bucket, a squeegee, and a determination to succeed has grown into a trusted cleaning company serving homeowners, businesses, and property managers throughout North Jersey. In the early days, our founder personally went door-to-door introducing services to local businesses, building relationships one client at a time through dedication, consistency, and attention to detail.
              </p>
              <p>
                As customer referrals and long-term partnerships continued to grow, so did our services. What began with professional window cleaning expanded into residential cleaning, commercial cleaning, power washing, and post-construction cleanup. Today, Jimmy Cleans proudly provides comprehensive cleaning solutions tailored to the needs of both residential and commercial clients across North Jersey.
              </p>
              <p>
                While our company has grown, our core values remain unchanged. We believe that exceptional service starts with reliability, clear communication, professionalism, and a genuine commitment to customer satisfaction. Every property we service is treated with the same level of care and respect we would expect for our own.
              </p>
              <p>
                Our reputation has been built on trust, consistency, and delivering results that exceed expectations. We take pride in helping our clients maintain clean, welcoming, and well-maintained spaces they can be proud of.
              </p>
              <p className="text-[rgba(255,255,255,0.6)] font-medium italic">
                If It&apos;s Dirty — Jimmy Cleans.
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
                <p className="text-[rgba(255,255,255,0.55)] text-sm">Riverdale, NJ</p>
              </div>
              <div className="absolute top-5 right-5 bg-[#1B9DE8] rounded-xl px-3 py-2 text-center shadow-lg">
                <p className="text-white font-extrabold text-xl leading-none">1+</p>
                <p className="text-white/80 text-[10px] font-medium mt-0.5">Years</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

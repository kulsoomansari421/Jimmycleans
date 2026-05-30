"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Clock, Award, CalendarDays, TrendingUp } from "lucide-react";

const reasons = [
  {
    icon: Clock,
    title: "We Actually Show Up",
    desc: "We make communication simple, show up when scheduled, and deliver the same reliable quality every time so you never have to second guess who’s taking care of your space.",
  },

  {
    icon: Award,
    title: "We Clean the Parts Others Skip",
    desc: "The grease behind the stove knob. The dust on top of the fridge. The grime along the baseboards. That's the stuff we actually notice.",
  },
  {
    icon: CalendarDays,
    title: "Your Schedule, Not Ours",
    desc: "Need us Tuesdays at 7am? Done. Want to switch from weekly to every other week? No problem. We work around your life.",
  },
  {
    icon: TrendingUp,
    title: "Stays Clean Longer",
    desc: "We don't just surface-clean. Our process tackles buildup at the source so your space is easier to maintain between visits.",
  },
];

export default function WhyChooseUs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section style={{ background: "var(--bg-dark)" }} className="section-padding">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-14 lg:gap-20">

          {/* Left — text + image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:w-85 shrink-0 flex flex-col"
          >
            <p className="text-xs font-semibold tracking-widest uppercase text-[rgba(255,255,255,0.35)] mb-3">Why Choose Us</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5 leading-tight">
              Why Families &amp; Businesses<br />Keep Coming Back
            </h2>
            <p className="text-[rgba(255,255,255,0.45)] text-sm leading-relaxed mb-8">
              100+ clients in Northern New Jersey have trusted us with their homes and offices. Here&apos;s what keeps them coming back year after year.
            </p>

            {/* Photo */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="relative rounded-2xl overflow-hidden flex-1 min-h-55"
            >
              <img
                src="/whychooseus.png"
                alt="Professional cleaning team"
                className="w-full h-full object-cover"
              />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(to top, rgba(8,12,20,0.75) 0%, transparent 55%)" }}
              />
              <div className="absolute bottom-4 left-4">
                <p className="text-white text-sm font-semibold">Professional & Insured</p>
                <p className="text-[rgba(255,255,255,0.5)] text-xs mt-0.5">Every team member vetted & trained</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right — feature cards */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {reasons.map((r, i) => (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: i * 0.09 }}
                className="card-dark rounded-2xl p-6"
              >
                <div className="w-10 h-10 rounded-xl bg-[rgba(27,157,232,0.12)] border border-[rgba(27,157,232,0.2)] flex items-center justify-center mb-4">
                  <r.icon size={18} className="text-[#1B9DE8]" />
                </div>
                <h3 className="text-white font-semibold mb-2">{r.title}</h3>
                <p className="text-sm text-[rgba(255,255,255,0.45)] leading-relaxed">{r.desc}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

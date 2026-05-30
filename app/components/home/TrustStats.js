"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { CheckCircle, Building2, CalendarCheck, Sparkles } from "lucide-react";

const stats = [
  { icon: CheckCircle, label: "Reliable Service", value: "100", suffix: "%", desc: "On-time arrival, every job" },
  { icon: Building2, label: "Residential & Commercial", value: "500", suffix: "+", desc: "Properties cleaned to date" },
  { icon: CalendarCheck, label: "Flexible Scheduling", value: "7", suffix: " days", desc: "Available Monday through Sunday" },
  { icon: Sparkles, label: "Attention to Detail", value: "5", suffix: "★", desc: "Average client rating" },
];

function CountUp({ target, suffix, inView }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const num = parseInt(target, 10);
    const duration = 1600;
    const steps = 40;
    const increment = num / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= num) {
        setCount(num);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default function TrustStats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section-padding relative overflow-hidden" style={{ background: "#040610" }}>
      {/* Background image */}
      <img
        src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1920&q=80"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover opacity-[0.10]"
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 50% 100%, rgba(27,157,232,0.10) 0%, transparent 60%)" }}
      />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-blue-400 text-xs font-semibold tracking-widest uppercase mb-3">Why Clients Trust Us</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Built on <span className="text-gradient">Results</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card rounded-2xl p-7 flex flex-col items-center text-center group"
            >
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-5 group-hover:bg-blue-500/20 transition-colors duration-300">
                <stat.icon size={22} className="text-blue-400" />
              </div>
              <div className="text-3xl font-bold text-white mb-1 tabular-nums">
                <CountUp target={stat.value} suffix={stat.suffix} inView={inView} />
              </div>
              <p className="text-sm font-semibold text-slate-200 mb-2">{stat.label}</p>
              <p className="text-xs text-slate-500 leading-relaxed">{stat.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

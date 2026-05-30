"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin } from "lucide-react";

const areas = [
  "Hoboken", "Jersey City", "Hackensack", "Paramus", "Englewood",
  "Teaneck", "Fort Lee", "Ridgewood", "Clifton", "Passaic",
  "Paterson", "Nutley", "Montclair", "Bloomfield", "Lyndhurst",
  "North Bergen", "Union City", "Secaucus", "Weehawken", "Edgewater",
];

export default function ServiceAreas() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="service-areas" className="section-padding relative overflow-hidden" style={{ background: "#040610" }}>
      {/* Background image */}
      <img
        src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover opacity-[0.12]"
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 50% 50%, rgba(27,157,232,0.08) 0%, transparent 60%)" }}
      />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-blue-400 text-xs font-semibold tracking-widest uppercase mb-3">Serving Your Area</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Service <span className="text-gradient">Areas</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Proudly serving communities throughout North New Jersey and surrounding areas.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="glass-card rounded-3xl p-8 sm:p-10"
        >
          <div className="flex flex-wrap gap-3 justify-center">
            {areas.map((area, i) => (
              <motion.div
                key={area}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.2 + i * 0.04 }}
                className="flex items-center gap-2 px-4 py-2 rounded-xl border border-white/[0.07] bg-white/3 hover:border-blue-500/30 hover:bg-blue-500/5 transition-all duration-200 cursor-default"
              >
                <MapPin size={12} className="text-blue-400 shrink-0" />
                <span className="text-slate-300 text-sm">{area}</span>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="mt-8 pt-6 border-t border-white/6 text-center"
          >
            <p className="text-slate-400 text-sm">
              Don&apos;t see your area?{" "}
              <a href="tel:+12015550100" className="text-blue-400 hover:text-blue-300 font-semibold transition-colors">
                Call us. We likely cover it.
              </a>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

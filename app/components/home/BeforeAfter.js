"use client";

import { useRef, useState, useCallback } from "react";
import { motion, useInView } from "framer-motion";

const items = [
  {
    label: "Kitchen Deep Clean",
    before: "Greasy surfaces, stained grout, dusty shelves",
    after: "Spotless counters, gleaming appliances, fresh kitchen",
    beforeImg: "/kithcendeepcleanbefore.png",
    afterImg: "/kitchendeepcleanafter.png",
    beforeFilter: "grayscale(55%) brightness(0.62) sepia(15%)",
    afterFilter: "none",
  },
  {
    label: "Window Cleaning",
    before: "Streaky, grimy glass blocking light and views",
    after: "Crystal-clear panes, maximum light, perfect clarity",
    beforeImg: "/windowcleanbefore.png",
    afterImg: "/windowcleanafter.png",
    beforeFilter: "grayscale(60%) brightness(0.58) sepia(20%)",
    afterFilter: "none",
  },
  {
    label: "Power Washing",
    before: "Years of mold, algae, grime and weathered surfaces",
    after: "Bright restored deck, like-new clean appearance",
    beforeImg: "/powerwashingbefore.png",
    afterImg: "/powercleanafter.png",
    beforeFilter: "grayscale(50%) brightness(0.60) sepia(25%)",
    afterFilter: "none",
  },
];

function Slider({ item, index, inView }) {
  const [pos, setPos] = useState(50);
  const dragging = useRef(false);
  const containerRef = useRef(null);

  const updatePos = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const pct = Math.min(100, Math.max(0, ((clientX - rect.left) / rect.width) * 100));
    setPos(pct);
  }, []);

  const onMouseDown = (e) => { dragging.current = true; e.preventDefault(); };
  const onMouseMove = (e) => { if (dragging.current) updatePos(e.clientX); };
  const onMouseUp = () => { dragging.current = false; };
  const onTouchMove = (e) => { updatePos(e.touches[0].clientX); };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="rounded-2xl overflow-hidden border border-[rgba(255,255,255,0.07)]"
    >
      {/* Slider area */}
      <div
        ref={containerRef}
        className="relative h-52 select-none cursor-ew-resize"
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
        onTouchMove={onTouchMove}
        onTouchEnd={onMouseUp}
      >
        {/* Before panel */}
        <div
          className="absolute inset-0 flex flex-col justify-end p-5"
          style={{
            backgroundImage: `url(${item.beforeImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: item.beforeFilter || "grayscale(40%) brightness(0.75)",
          }}
        >
          <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.15) 55%, transparent 100%)" }} />
          <span className="absolute top-4 left-4 z-10 text-[10px] font-bold text-white/80 uppercase tracking-widest bg-black/40 px-2 py-1 rounded-lg">Before</span>
          <p className="relative z-10 text-xs text-white/80 leading-relaxed">{item.before}</p>
        </div>

        {/* After panel — clipped */}
        <div
          className="absolute inset-0 flex flex-col justify-end p-5 overflow-hidden"
          style={{
            clipPath: `inset(0 ${100 - pos}% 0 0)`,
            backgroundImage: `url(${item.afterImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: item.afterFilter || "none",
          }}
        >
          <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.1) 55%, transparent 100%)" }} />
          <span className="absolute top-4 right-4 z-10 text-[10px] font-bold text-white uppercase tracking-widest bg-[#1B9DE8]/80 px-2 py-1 rounded-lg">After</span>
          <p className="relative z-10 text-xs text-white/90 leading-relaxed">{item.after}</p>
        </div>

        {/* Handle */}
        <div
          className="absolute top-0 bottom-0 z-10 flex items-center justify-center"
          style={{ left: `${pos}%`, transform: "translateX(-50%)" }}
        >
          <div className="w-0.5 h-full bg-white/40" />
          <div className="absolute w-9 h-9 rounded-full bg-white shadow-lg flex items-center justify-center">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M5 3L2 7L5 11M9 3L12 7L9 11" stroke="#374151" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </div>

      {/* Label */}
      <div className="px-5 py-3.5 flex items-center justify-between border-t border-[rgba(255,255,255,0.06)]" style={{ background: "rgba(255,255,255,0.03)" }}>
        <span className="text-white font-semibold text-sm">{item.label}</span>
        <span className="text-[10px] text-[rgba(255,255,255,0.3)]">Drag to compare</span>
      </div>
    </motion.div>
  );
}

export default function BeforeAfter() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="before-after" style={{ background: "var(--bg-dark)" }} className="section-padding">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="text-center mb-12"
        >
          <p className="text-xs font-semibold tracking-widest uppercase text-[rgba(255,255,255,0.3)] mb-3">/ Results /</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">See the Difference</h2>
          <p className="text-[rgba(255,255,255,0.4)] text-sm">Drag the slider to see our before and after results.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {items.map((item, i) => (
            <Slider key={item.label} item={item} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Plus, Minus, Phone } from "lucide-react";

const faqs = [
  {
    q: "What areas do you serve?",
    a: "We service North New Jersey and surrounding areas, including Hoboken, Jersey City, Hackensack, Paramus, Englewood, Teaneck, Fort Lee, and nearby communities.",
  },
  {
    q: "How do I get a quote?",
    a: "Fill out our contact form or call us directly at (201) 555-0100. We'll discuss your needs and provide a clear, transparent quote with no surprises.",
  },
  {
    q: "Do you offer recurring cleaning services?",
    a: "Yes. After an initial deep clean, we can set up a recurring schedule, whether weekly, bi-weekly, or monthly, based on your preferences and budget.",
  },
  {
    q: "Are you insured?",
    a: "Absolutely. Jimmy Cleans is fully insured. We carry general liability insurance for every job, so your property is protected.",
  },
  {
    q: "Do I need to be home during the cleaning?",
    a: "Not at all. Many clients provide access and we handle everything while they're at work. Your comfort and convenience are our priority.",
  },
  {
    q: "What cleaning products do you use?",
    a: "We use professional-grade cleaning products that are effective and safe. We can accommodate requests for eco-friendly or fragrance-free products. Just let us know.",
  },
  {
    q: "What if I'm not satisfied with the cleaning?",
    a: "We stand behind our work. If something isn't right, tell us within 24 hours and we'll come back and fix it at no additional charge.",
  },
];

function FAQItem({ faq, index, inView }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="border border-[#e5e7eb] rounded-2xl overflow-hidden bg-white"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left hover:bg-[#f9fafb] transition-colors duration-200"
      >
        <span className={`font-semibold text-sm transition-colors duration-200 ${open ? "text-[#1B9DE8]" : "text-[#0d0d0d]"}`}>
          {faq.q}
        </span>
        <div className={`shrink-0 w-7 h-7 rounded-lg flex items-center justify-center transition-all duration-200 ${open ? "bg-[rgba(27,157,232,0.12)] border border-[rgba(27,157,232,0.25)]" : "bg-[#f3f4f6] border border-[#e5e7eb]"}`}>
          {open ? (
            <Minus size={13} className="text-[#1B9DE8]" />
          ) : (
            <Plus size={13} className="text-[#6b7280]" />
          )}
        </div>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
          >
            <div className="px-5 pb-4 border-t border-[#e5e7eb]">
              <p className="text-[#6b7280] text-sm leading-relaxed pt-4">{faq.a}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="section-padding bg-white relative overflow-hidden">
      {/* Animated orbs */}
      <div className="section-orbs" aria-hidden="true">
        <div className="section-orb section-orb-1" style={{ top: "-200px", left: "-180px" }} />
        <div className="section-orb section-orb-2" style={{ bottom: "-160px", right: "-140px" }} />
      </div>

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="text-center mb-12"
        >
          <p className="section-label mb-3">Common Questions</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0d0d0d]">Frequently Asked Questions</h2>
          <p className="text-[#6b7280] text-sm mt-3">Everything you need to know before booking.</p>
        </motion.div>

        {/* Two-column: image + FAQ list */}
        <div className="flex flex-col lg:flex-row gap-10 items-start">

          {/* Left — sticky image panel */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:w-95 shrink-0 lg:sticky lg:top-24"
          >
            <div className="relative rounded-2xl overflow-hidden h-72 lg:h-130">
              <img
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=760&q=80"
                alt="Clean professional kitchen"
                className="w-full h-full object-cover"
              />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 55%)" }}
              />
              {/* Caption badge */}
              <div className="absolute bottom-5 left-5 right-5">
                <div
                  className="rounded-xl px-4 py-3"
                  style={{
                    background: "rgba(255,255,255,0.12)",
                    backdropFilter: "blur(12px)",
                    border: "1px solid rgba(255,255,255,0.2)",
                  }}
                >
                  <p className="text-white font-semibold text-sm">Still have questions?</p>
                  <a
                    href="tel:+12015550100"
                    className="flex items-center gap-1.5 text-[#60c0f8] text-xs font-medium mt-1 hover:text-white transition-colors"
                  >
                    <Phone size={11} />
                    Call us at (201) 555-0100
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right — FAQ accordion */}
          <div className="flex-1 space-y-2.5">
            {faqs.map((faq, i) => (
              <FAQItem key={faq.q} faq={faq} index={i} inView={inView} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

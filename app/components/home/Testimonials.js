"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah M.",
    location: "Morristown, NJ",
    text: "I've tried four different cleaning services since moving to Morristown. Jimmy's team is the first one I actually kept. They cleaned things I didn't even think to ask about: the tops of door frames, the inside of the microwave, the grout lines. I stopped checking after them.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&h=80&q=80",
  },
  {
    name: "David R.",
    location: "Montclair, NJ",
    text: "Our office in Montclair gets a lot of foot traffic. Jimmy's crew comes in after hours twice a week and it genuinely looks spotless every morning. Two of our clients have asked who we use. That says enough.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&h=80&q=80",
  },
  {
    name: "Jessica L.",
    location: "Wayne, NJ",
    text: "We just finished a kitchen renovation and there was drywall dust in every corner of the house. Jimmy's post-construction clean was incredibly thorough. Two hours later it felt like we'd moved into a brand new home. Seriously couldn't believe the difference.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=80&h=80&q=80",
  },
  {
    name: "Mark T.",
    location: "Paramus, NJ",
    text: "They've been coming every other week to my place for over a year. Never missed an appointment, never been late without a heads-up first. That kind of reliability is genuinely hard to find. My wife and I both feel like it's one of the best things we spend money on.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=80&h=80&q=80",
  },
  {
    name: "Amanda K.",
    location: "Ridgewood, NJ",
    text: "I'd basically given up on my driveway ever looking clean again. Jimmy's power washing took maybe 45 minutes and it looked brand new. My neighbor immediately asked for the number. Really glad I finally called.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&h=80&q=80",
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="testimonials" className="section-padding bg-white relative overflow-hidden">
      <div className="section-orbs" aria-hidden="true">
        <div className="section-orb section-orb-1" style={{ top: "auto", bottom: "-200px", left: "30%" }} />
        <div className="section-orb section-orb-2" style={{ top: "-120px", right: "-100px", bottom: "auto" }} />
        <div className="section-orb section-orb-3" style={{ top: "20%", left: "-80px" }} />
        <div className="section-orb section-orb-4" style={{ top: "auto", bottom: "-60px", right: "25%" }} />
      </div>
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="text-center mb-12"
        >
          <p className="section-label mb-3">Testimonials</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0d0d0d]">What Our Clients in Northern New Jersey Say</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="card p-6 flex flex-col gap-4"
            >
              {/* Stars */}
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} size={14} className="text-amber-400 fill-amber-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-sm text-[#374151] leading-relaxed flex-1">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 mt-2">
                <div className="avatar-circle overflow-hidden border border-[#e5e7eb]">
                  <img src={t.avatar} alt={t.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="font-semibold text-[#0d0d0d] text-sm">{t.name}</p>
                  <p className="text-xs text-[#9ca3af]">{t.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

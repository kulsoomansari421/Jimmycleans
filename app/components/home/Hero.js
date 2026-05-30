"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Phone, Star } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">

      {/* ── Full background image ── */}
      <Image
        src="/Website Cover Photo.png"
        alt="Website Cover"
        fill
        priority
        className="object-cover object-center"
      />

      {/* ── Overlay: heavy on left (text), lighter on right ── */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(105deg, rgba(4,8,16,0.97) 0%, rgba(6,10,18,0.93) 40%, rgba(6,10,18,0.80) 65%, rgba(6,10,18,0.65) 100%)",
        }}
      />

      {/* ── Subtle grid ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.018) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.018) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* ── Blue accent glow — right side ── */}
      <div
        className="absolute right-0 top-0 bottom-0 w-[50%] pointer-events-none"
        style={{
          background:
            "linear-gradient(to left, rgba(27,157,232,0.10) 0%, transparent 65%)",
        }}
      />

      {/* ── Content ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20 w-full">
        <div className="flex items-center justify-between gap-12">

          {/* Left — text */}
          <div className="w-full max-w-2xl">

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="badge-blue mb-7"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#1B9DE8] inline-block" />
              Trusted Across Northern New Jersey
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl sm:text-6xl lg:text-[4.25rem] font-extrabold leading-[1.05] tracking-tight text-white mb-6"
            >
              If It&apos;s Dirty
              <br />
              <span className="text-white">Jimmy Cleans.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.22 }}
              className="text-[rgba(255,255,255,0.52)] text-[1.05rem] leading-relaxed mb-10 max-w-lg"
            >
              We’ve helped families and businesses maintain beautifully clean, fresh,
and welcoming spaces with dependable service, attention to detail, and
care you can truly notice.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.34 }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <Link
                href="/#contact"
                className="btn-primary flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold text-white"
              >
                Get a Free Quote
                <ArrowRight size={15} />
              </Link>

              <a
                href="tel:+12015550100"
                className="btn-outline-white flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold"
              >
                <Phone size={15} />
                (973) 617-6978
              </a>
            </motion.div>

            {/* Trust row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.55 }}
              className="flex items-center gap-5 mt-8"
            >
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={13}
                    className="text-amber-400 fill-amber-400"
                  />
                ))}
              </div>

              <span className="text-[rgba(255,255,255,0.38)] text-xs">
                4.9 stars · Clean spaces. Reliable service. Beautiful results. 
              </span>
            </motion.div>
          </div>

          {/* Right — floating image card (xl+) */}
          <motion.div
            initial={{ opacity: 0, x: 48 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden xl:block flex-shrink-0 relative"
          >
            <div className="w-[390px] h-[470px] rounded-3xl overflow-hidden border border-white/[0.12] shadow-[0_40px_100px_rgba(0,0,0,0.7)] relative">
              <Image
                src="/residential1.png"
                alt="Professional cleaning team"
                fill
                className="object-cover"
              />

              <div
                className="absolute inset-0 rounded-3xl"
                style={{
                  background:
                    "linear-gradient(to top, rgba(6,10,18,0.65) 0%, transparent 50%)",
                }}
              />
            </div>

            {/* Rating chip */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 1.0 }}
              className="absolute -bottom-5 -left-8 bg-white rounded-2xl px-4 py-3 shadow-2xl flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-xl bg-[#1B9DE8] flex items-center justify-center flex-shrink-0">
                <Star size={14} className="text-white fill-white" />
              </div>

              <div>
                <p className="text-[13px] font-bold text-[#0d0d0d] leading-tight">
                  4.9 / 5.0
                </p>

                <p className="text-[10px] text-[#6b7280]">
                  1,200+ happy clients
                </p>
              </div>
            </motion.div>

            {/* Since badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 1.1 }}
              className="absolute -top-4 -right-4 bg-[#1B9DE8] rounded-2xl px-4 py-2.5 shadow-xl"
            >
              <p className="text-white text-xs font-bold tracking-wide leading-tight">
                Est. 2016
              </p>

              <p className="text-white/70 text-[10px]">
                Trusted & Local
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] text-[rgba(255,255,255,0.28)] tracking-widest uppercase">
            Scroll
          </span>

          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{
              duration: 1.6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-px h-7 bg-gradient-to-b from-[rgba(255,255,255,0.28)] to-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
}
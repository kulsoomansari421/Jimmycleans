"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone } from "lucide-react";

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href="tel:+12015550100"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          transition={{ duration: 0.25 }}
          className="hidden sm:flex fixed bottom-6 right-6 z-50 items-center gap-2 px-5 py-3.5 rounded-2xl text-sm font-semibold text-white"
          style={{
            background: "linear-gradient(135deg, #1B9DE8 0%, #1282c5 100%)",
            boxShadow: "0 8px 32px rgba(27,157,232,0.35), 0 2px 8px rgba(0,0,0,0.15)",
          }}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
        >
          <Phone size={15} />
          Call Now
        </motion.a>
      )}
    </AnimatePresence>
  );
}

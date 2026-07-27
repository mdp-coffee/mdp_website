"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

export function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const totalDuration = shouldReduceMotion ? 600 : 2400;
    const timer = setTimeout(() => {
      setVisible(false);
      document.body.style.overflow = "";
    }, totalDuration);
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, [shouldReduceMotion]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-[#411915]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          role="status"
          aria-label="Loading MDP Coffee House"
        >
          <motion.div
            initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: shouldReduceMotion ? 0.3 : 0.8, ease: "easeOut" }}
          >
            <Image
              src="/images/coffee-man.png"
              alt="MDP Coffee House"
              width={220}
              height={220}
              priority
              className="h-auto w-[190px] md:w-[220px]"
            />
          </motion.div>

          <motion.div
            className="mt-6 flex flex-col items-center"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: shouldReduceMotion ? 0.3 : 0.6,
              delay: shouldReduceMotion ? 0.1 : 0.6,
              ease: "easeOut",
            }}
          >
            <p className="font-condensed text-[22px] uppercase tracking-[0.15em] text-cream">
              MDP Food and Beverages Pvt Ltd
            </p>
            <div className="mt-3 h-px w-12 bg-gold/50" aria-hidden="true" />
            <p className="mt-3 font-condensed text-[11px] uppercase tracking-[0.3em] text-gold/50">
              Since 2005
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { MOTION } from "@/lib/motion";

export default function NotFound() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="bg-paper">
      <NavBar />

      <main className="flex min-h-[80vh] flex-col items-center justify-center bg-paper px-6 text-center">
        <motion.span
          className="select-none font-condensed text-[120px] font-black leading-none text-brown/10"
          aria-hidden="true"
          initial={shouldReduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: MOTION.base, delay: 0.1, ease: MOTION.ease }}
        >
          404
        </motion.span>

        <motion.h1
          className="mt-[-20px] font-condensed text-4xl font-black tracking-tight text-brown"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: MOTION.base, delay: 0.3, ease: MOTION.ease }}
        >
          This page doesn&rsquo;t exist yet.
        </motion.h1>

        <motion.p
          className="mt-4 max-w-sm font-sans text-brown/55"
          initial={shouldReduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: MOTION.base, delay: 0.45, ease: MOTION.ease }}
        >
          We&rsquo;re still building. Head back to the homepage or explore
          what&rsquo;s ready.
        </motion.p>

        <div className="mt-8 flex gap-4">
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: MOTION.base, delay: 0.6, ease: MOTION.ease }}
          >
            <Link
              href="/"
              className="bg-brown px-6 py-3 font-condensed text-sm font-bold uppercase tracking-wider text-cream transition-colors hover:bg-rust"
            >
              Back to Home
            </Link>
          </motion.div>
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: MOTION.base, delay: 0.7, ease: MOTION.ease }}
          >
            <Link
              href="/about"
              className="border border-brown/20 px-6 py-3 font-condensed text-sm uppercase tracking-wider text-brown/60 transition-colors hover:border-brown/50 hover:text-brown"
            >
              About Us
            </Link>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

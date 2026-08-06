"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { MOTION } from "@/lib/motion";
import type { NewsItem } from "@/lib/types";

export function NewsItemContent({ item }: { item: NewsItem }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <>
      <NavBar />
      <div className="bg-paper pt-16">
        <article className="mx-auto max-w-[680px] px-6 py-20">
          <Link
            href="/#news-updates"
            className="font-sans text-sm text-rust/80 transition-colors duration-200 hover:text-rust"
          >
            ← Back to Updates
          </Link>

          {item.image && (
            <motion.div
              className="relative mt-8 h-[220px] w-full overflow-hidden sm:h-[340px]"
              initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: MOTION.slow, delay: 0.15, ease: MOTION.ease }}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
                sizes="(max-width: 680px) 100vw, 680px"
                priority
              />
              {item.tag && (
                <span className="absolute left-3 top-3 z-10 bg-gold px-2 py-1 font-condensed text-[9px] font-bold uppercase tracking-wider text-brown shadow-[0_1px_4px_rgba(12,12,12,0.45)]">
                  {item.tag}
                </span>
              )}
            </motion.div>
          )}

          <motion.p
            className="mt-8 font-condensed text-[11px] uppercase tracking-[0.2em] text-rust/70"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: MOTION.base, delay: 0.25, ease: MOTION.ease }}
          >
            {item.date}
          </motion.p>
          <motion.h1
            className="mt-4 font-condensed text-[36px] leading-[0.98] tracking-tightest text-brown sm:text-[44px]"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: MOTION.slow, delay: 0.35, ease: MOTION.ease }}
          >
            {item.title}
          </motion.h1>
          <motion.p
            className="mt-6 font-sans text-lg leading-relaxed text-brown/70"
            initial={shouldReduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: MOTION.base, delay: 0.5, ease: MOTION.ease }}
          >
            {item.description}
          </motion.p>
        </article>
        <Footer />
      </div>
      <WhatsAppFloat />
    </>
  );
}

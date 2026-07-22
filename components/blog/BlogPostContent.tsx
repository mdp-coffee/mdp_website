"use client";

import { motion, useReducedMotion } from "framer-motion";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { ScrollContainer } from "@/components/ScrollContainer";
import { MOTION } from "@/lib/motion";
import type { BlogPost } from "@/content/blog";

export function BlogPostContent({ post }: { post: BlogPost }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="bg-paper">
      <NavBar />
      <ScrollContainer>
      <article className="mx-auto max-w-[680px] px-6 py-20">
        <motion.p
          className="font-condensed text-[11px] uppercase tracking-[0.2em] text-rust/70"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: MOTION.base, delay: 0.2, ease: MOTION.ease }}
        >
          {post.category} · {post.readTime} min read
        </motion.p>
        <motion.h1
          className="mt-4 font-condensed text-[44px] leading-[0.92] tracking-tightest text-brown"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: MOTION.slow, delay: 0.35, ease: MOTION.ease }}
        >
          {post.title}
        </motion.h1>
        <motion.p
          className="mt-4 font-sans text-lg text-brown/55"
          initial={shouldReduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: MOTION.base, delay: 0.5, ease: MOTION.ease }}
        >
          {post.description}
        </motion.p>
        <motion.div
          className="mt-12 font-sans text-[17px] leading-[1.8] text-brown/80"
          initial={shouldReduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: MOTION.base, delay: 0.7, ease: MOTION.ease }}
        >
          {post.content && post.content.length > 0 ? (
            post.content.map((block, i) =>
              block.type === "heading" ? (
                <h2
                  key={i}
                  className="mt-10 mb-4 font-condensed text-[28px] tracking-tight text-brown first:mt-0"
                >
                  {block.text}
                </h2>
              ) : (
                <p key={i} className="mt-6 first:mt-0">
                  {block.text}
                </p>
              )
            )
          ) : (
            <p className="italic text-brown/40">Content coming soon.</p>
          )}
        </motion.div>
      </article>
      <Footer />
      </ScrollContainer>
    </div>
  );
}

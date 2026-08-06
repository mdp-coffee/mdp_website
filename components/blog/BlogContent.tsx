"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { ScrollContainer } from "@/components/ScrollContainer";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { MOTION } from "@/lib/motion";
import { blogPosts } from "@/content/blog";

export function BlogContent() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="bg-paper">
      <NavBar />

      <ScrollContainer>
      {/* Hero */}
      <section
        className="relative overflow-hidden snap-slide flex min-h-[50vh] w-full flex-col justify-end bg-[#411915] px-6 pb-10 pt-24 md:px-20 md:pb-16 md:pt-32"
        aria-label="Blog hero"
      >
        <div className="pointer-events-none absolute bottom-0 -right-6 md:-right-20 hidden h-3/4 w-1/2 opacity-[0.25] md:block" aria-hidden="true">
          <Image
            src="/images/MDP coffeee man Png1.png"
            alt=""
            fill
            className="object-contain object-bottom [filter:invert(1)_brightness(1.4)]"
          />
        </div>
        <div className="relative z-10">
          <p className="mb-4 font-condensed text-[11px] uppercase tracking-[0.3em] text-gold/50">
            Insights
          </p>
          <motion.h1
            className="font-condensed text-[32px] leading-[0.95] tracking-tightest text-cream sm:text-[64px]"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: MOTION.slow, delay: 0.3, ease: MOTION.ease }}
          >
            From the people who show up
            <br />
            every morning.
          </motion.h1>
          <motion.p
            className="mt-4 max-w-xl font-sans text-sm text-cream/55 md:mt-6 md:text-xl"
            initial={shouldReduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: MOTION.base, delay: 0.5, ease: MOTION.ease }}
          >
            Perspectives on coffee, workplaces, and twenty years of learning what
            India&rsquo;s offices need.
          </motion.p>
        </div>
      </section>

      {blogPosts.length > 0 ? (
        <section className="snap-slide px-6 py-14 md:px-20 md:py-24">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-3">
            {blogPosts.map((post, i) => (
              <RevealOnScroll
                key={post.slug}
                delay={0.1 + i * 0.06}
                className="h-full overflow-hidden border border-brown/10 bg-paper transition-all duration-300 ease-in-out hover:-translate-y-1.5 hover:border-gold/40 hover:shadow-xl"
              >
                <Link href={`/blog/${post.slug}`} className="block h-full">
                  <div className="relative aspect-[16/9] w-full overflow-hidden">
                    <Image
                      src={post.coverImage}
                      alt={post.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-6 sm:p-8">
                    <p className="font-condensed text-[11px] uppercase tracking-widest text-rust/70">
                      {post.category} · {post.readTime} min read
                    </p>
                    <h3 className="mt-3 font-condensed text-xl font-black tracking-tight text-brown">
                      {post.title}
                    </h3>
                    <p className="mt-2 font-sans text-sm leading-relaxed text-brown/60">
                      {post.description}
                    </p>
                  </div>
                </Link>
              </RevealOnScroll>
            ))}
          </div>
        </section>
      ) : (
        /* Empty state */
        <RevealOnScroll delay={0.2}>
          <section className="snap-slide px-6 py-14 text-center md:px-20 md:py-24">
            <p className="select-none font-condensed text-4xl font-black text-brown/10 sm:text-6xl">
              Coming Soon
            </p>
            <h2 className="mt-[-8px] font-condensed text-xl text-brown sm:mt-[-12px] sm:text-3xl">
              First article drops soon.
            </h2>
            <p className="mx-auto mt-4 max-w-sm font-sans text-brown/55">
              We are putting together perspectives worth reading. Check back soon
              — or follow us on LinkedIn for updates.
            </p>
          </section>
        </RevealOnScroll>
      )}

      <Footer />
      </ScrollContainer>
    </div>
  );
}

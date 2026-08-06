"use client";

import Link from "next/link";
import Image from "next/image";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { CornerAccents } from "@/components/CornerAccents";
import { blogPosts } from "@/content/blog";

export function BlogTeaser() {
  if (blogPosts.length === 0) return null;

  return (
    <section
      id="blog-teaser"
      className="relative snap-slide flex min-h-0 w-full flex-col justify-center bg-paper px-6 py-16 md:px-20 md:py-24"
      aria-label="From the blog"
    >
      <CornerAccents />
      <RevealOnScroll delay={0}>
        <h2 className="font-condensed text-[26px] leading-[0.98] tracking-tight text-brown sm:text-[52px]">
          From the Blog
        </h2>
      </RevealOnScroll>

      <div
        className="scrollbar-hide mt-10 flex gap-4 overflow-x-auto snap-x snap-mandatory pb-2"
        aria-label="Blog post teasers"
      >
        {blogPosts.map((post, i) => (
          <RevealOnScroll
            key={post.slug}
            delay={i * 0.06}
            className="w-[280px] flex-shrink-0 snap-start overflow-hidden border border-brown/12 bg-paper2 transition-colors duration-200 hover:border-gold/40"
          >
            <Link href={`/blog/${post.slug}`} className="block">
              <div className="relative h-[160px] w-full overflow-hidden">
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  fill
                  className="object-cover"
                  sizes="280px"
                />
              </div>
              <div className="p-6">
                <p className="font-condensed text-[11px] uppercase tracking-widest text-rust/70">
                  {post.category}
                </p>
                <h3 className="mt-3 font-condensed text-lg font-bold tracking-tight text-brown">
                  {post.title}
                </h3>
                <p className="mt-2 font-sans text-sm leading-relaxed text-brown/60">
                  {post.description}
                </p>
                <p className="mt-4 font-condensed text-xs uppercase tracking-wider text-brown/40">
                  {post.readTime} min read
                </p>
              </div>
            </Link>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}

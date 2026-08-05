"use client";

import { useState, useRef, type MouseEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { CornerAccents } from "@/components/CornerAccents";
import { whatWeDoSection } from "@/content/what-we-do-section";
import { galleryItems } from "@/content/gallery";

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 60 : -60,
    opacity: 0,
  }),
  center: { x: 0, opacity: 1 },
  exit: (direction: number) => ({
    x: direction > 0 ? -60 : 60,
    opacity: 0,
  }),
};

export function WhatWeDo() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const goTo = (next: number) => {
    const clamped = (next + whatWeDoSection.tabs.length) % whatWeDoSection.tabs.length;
    setDirection(clamped > index ? 1 : -1);
    setIndex(clamped);
  };

  const productsScrollRef = useRef<HTMLDivElement>(null);
  const [isProductsDragging, setIsProductsDragging] = useState(false);
  const [productsStartX, setProductsStartX] = useState(0);
  const [productsScrollLeft, setProductsScrollLeft] = useState(0);

  const onProductsMouseDown = (e: MouseEvent<HTMLDivElement>) => {
    setIsProductsDragging(true);
    setProductsStartX(e.pageX - (productsScrollRef.current?.offsetLeft ?? 0));
    setProductsScrollLeft(productsScrollRef.current?.scrollLeft ?? 0);
  };
  const onProductsMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!isProductsDragging) return;
    e.preventDefault();
    const x = e.pageX - (productsScrollRef.current?.offsetLeft ?? 0);
    const walk = (x - productsStartX) * 1.5;
    if (productsScrollRef.current) productsScrollRef.current.scrollLeft = productsScrollLeft - walk;
  };
  const onProductsMouseUp = () => setIsProductsDragging(false);

  const tab = whatWeDoSection.tabs[index];
  if (!tab) return null;
  const tabImage = galleryItems.find((item) => item.id === tab.imageGalleryId);

  return (
    <section
      id="what-we-do"
      className="relative snap-slide flex min-h-0 w-full flex-col justify-center bg-parchment px-6 py-16 md:px-20 md:py-24"
      aria-label="What we do"
    >
      <CornerAccents />
      <RevealOnScroll delay={0}>
        <h2 className="font-condensed text-[26px] leading-[0.98] tracking-tight text-brown sm:text-[52px]">
          {whatWeDoSection.h2}
        </h2>
      </RevealOnScroll>
      <RevealOnScroll delay={0.08}>
        <p className="mt-3 max-w-lg font-sans text-sm leading-relaxed text-brown/60 sm:mt-5 sm:text-base">
          {whatWeDoSection.subhead}
        </p>
      </RevealOnScroll>

      {/* Tabs */}
      <RevealOnScroll delay={0.1}>
        <div className="mt-10 flex w-full gap-2" role="tablist" aria-label="What we do">
          {whatWeDoSection.tabs.map((t, i) => (
            <button
              key={t.num}
              type="button"
              role="tab"
              aria-selected={i === index}
              onClick={() => goTo(i)}
              className={`flex-1 px-4 py-3 text-left transition-colors sm:px-5 sm:py-3 ${
                i === index ? "bg-brown text-cream" : "border border-brown/15 text-brown/55"
              }`}
            >
              <span className="block font-condensed text-[9px] tracking-widest opacity-70 sm:text-[10px]">
                {t.num}
              </span>
              <span className="block truncate font-condensed text-xs font-bold leading-tight tracking-tight sm:text-sm">
                {t.category}
              </span>
            </button>
          ))}
        </div>
      </RevealOnScroll>

      {/* Active panel */}
      <div className="relative mt-8 overflow-hidden">
        <AnimatePresence mode="wait" custom={direction} initial={false}>
          <motion.div
            key={tab.num}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.45, ease: "easeInOut" }}
            className="flex flex-col gap-8 md:flex-row md:items-start"
          >
            {tabImage && (
              <div className="relative h-[280px] w-full overflow-hidden md:h-[420px] md:w-1/2">
                <Image
                  src={tabImage.src}
                  alt={tabImage.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            )}

            <div className="flex w-full flex-col justify-center pb-2 md:w-1/2">
              <h3 className="font-condensed text-[30px] leading-[0.98] tracking-tight text-brown sm:text-[52px]">
                {tab.headline}
              </h3>
              <div className="mt-5 h-px w-12 bg-rust/35" aria-hidden="true" />
              <p className="mt-5 max-w-md font-sans text-sm leading-relaxed text-brown opacity-75 sm:text-xl">
                {tab.description}
              </p>
              <p className="mt-7 font-condensed text-[11px] uppercase tracking-wider text-gold/70">
                {tab.details}
              </p>
              <p className="mt-3 max-w-md font-sans text-brown/60">
                {tab.proofLine}
              </p>
              <Link
                href={tab.ctaHref}
                className="mt-5 inline-block w-fit font-condensed text-xs uppercase tracking-wider underline underline-offset-4 text-brown opacity-70 transition-opacity hover:opacity-100"
              >
                {tab.ctaLabel} →
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-14">
        <RevealOnScroll delay={0.2}>
          <p className="font-condensed text-[11px] uppercase tracking-widest text-rust/70">
            {whatWeDoSection.productsKicker}
          </p>
        </RevealOnScroll>
        <RevealOnScroll delay={0.24}>
          <h3 className="mt-2 font-condensed text-xl font-black tracking-tight text-brown sm:text-2xl">
            {whatWeDoSection.productsH2}
          </h3>
        </RevealOnScroll>

        <div
          ref={productsScrollRef}
          onMouseDown={onProductsMouseDown}
          onMouseMove={onProductsMouseMove}
          onMouseUp={onProductsMouseUp}
          onMouseLeave={onProductsMouseUp}
          className={`scrollbar-hide mt-6 flex select-none snap-x snap-mandatory flex-row gap-4 overflow-x-auto pb-2 ${
            isProductsDragging ? "cursor-grabbing" : "cursor-grab"
          }`}
        >
          {whatWeDoSection.products.map((product, i) => (
            <RevealOnScroll
              key={product.title}
              delay={i * 0.05}
              className="w-[220px] flex-shrink-0 snap-start overflow-hidden border border-brown/12 bg-paper transition-colors duration-200 hover:border-gold/40"
            >
              <div className="relative h-[160px] w-full overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover"
                  sizes="220px"
                />
                {product.isNew && (
                  <span className="absolute left-2 top-2 z-10 bg-gold px-2 py-1 font-condensed text-[9px] font-bold uppercase tracking-wider text-brown shadow-[0_1px_4px_rgba(12,12,12,0.45)]">
                    Newly Launched
                  </span>
                )}
              </div>
              <div className="p-5">
                <h4 className="font-condensed text-base font-bold tracking-tight text-brown">
                  {product.title}
                </h4>
                <p className="mt-2 font-sans text-sm leading-relaxed text-brown/60">
                  {product.description}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

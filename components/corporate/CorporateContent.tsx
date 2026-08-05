"use client";

import { useState, useRef, type MouseEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { ClientProof } from "@/components/ClientProof";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { corporatePage } from "@/content/corporate-page";
import { getCorporateClients } from "@/lib/content";
import { howWeWorkIcons, trustIcons, deploymentIcons, flexibleIcons } from "@/components/corporate/icons";
import { galleryItems, type GalleryItem } from "@/content/gallery";
import { categories } from "@/content/products";

const deploymentPhotoIds = ["1", "2", "8", "19", "20", "21"];
const deploymentPhotoSpans = [
  "md:col-span-2 md:row-span-2",
  "md:col-span-1 md:row-span-1",
  "md:col-span-1 md:row-span-1",
  "md:col-span-2 md:row-span-1",
  "md:col-span-1 md:row-span-1",
  "md:col-span-3 md:row-span-1",
];

function FaqAccordionItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-brown/10">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between py-6 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-brown"
        aria-expanded={isOpen}
      >
        <span className="font-condensed text-[20px] leading-tight text-brown">
          {question}
        </span>
        <span
          className="ml-6 flex-shrink-0 font-condensed text-lg text-brown/40 transition-transform duration-200"
          style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
          aria-hidden="true"
        >
          ▼
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            style={{ overflow: "hidden" }}
          >
            <p className="pb-6 font-sans text-[15px] leading-relaxed text-brown/65">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function CorporateContent() {
  const corporateClients = getCorporateClients();
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const deploymentPhotos = deploymentPhotoIds
    .map((id) => galleryItems.find((item) => item.id === id))
    .filter((item): item is GalleryItem => Boolean(item));

  const menuScrollRef = useRef<HTMLDivElement>(null);
  const [isMenuDragging, setIsMenuDragging] = useState(false);
  const [menuStartX, setMenuStartX] = useState(0);
  const [menuScrollLeft, setMenuScrollLeft] = useState(0);

  const onMenuMouseDown = (e: MouseEvent<HTMLDivElement>) => {
    setIsMenuDragging(true);
    setMenuStartX(e.pageX - (menuScrollRef.current?.offsetLeft ?? 0));
    setMenuScrollLeft(menuScrollRef.current?.scrollLeft ?? 0);
  };
  const onMenuMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!isMenuDragging) return;
    e.preventDefault();
    const x = e.pageX - (menuScrollRef.current?.offsetLeft ?? 0);
    const walk = (x - menuStartX) * 1.5;
    if (menuScrollRef.current) menuScrollRef.current.scrollLeft = menuScrollLeft - walk;
  };
  const onMenuMouseUp = () => setIsMenuDragging(false);

  return (
    <div className="bg-paper">
      <NavBar />

      {/* Hero */}
      <section className="relative overflow-hidden flex min-h-[50vh] w-full flex-col justify-center bg-[#411915] px-6 pt-24 pb-16 md:px-20 md:pt-32 md:pb-20">
        <div className="pointer-events-none absolute bottom-0 -right-6 md:-right-20 hidden h-3/4 w-1/2 opacity-[0.25] md:block" aria-hidden="true">
          <Image
            src="/images/MDP coffeee man Png1.png"
            alt=""
            fill
            className="object-contain object-bottom [filter:invert(1)_brightness(1.4)]"
          />
        </div>
        <div className="relative z-10">
          <RevealOnScroll delay={0}>
            <h1 className="max-w-3xl font-condensed text-[32px] leading-[0.95] tracking-tightest text-cream sm:text-[58px]">
              {corporatePage.heroH1}
            </h1>
          </RevealOnScroll>
          <RevealOnScroll delay={0.1}>
            <p className="mt-6 max-w-xl font-sans text-lg leading-relaxed text-cream/60 md:text-xl">
              {corporatePage.heroSubhead}
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* Trusted By */}
      <section className="bg-paper px-6 py-16 md:px-20 md:py-24">
        <RevealOnScroll delay={0}>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {corporateClients.map((client) => (
              <div
                key={client.slug}
                className="flex h-14 w-32 flex-shrink-0 items-center justify-center border border-brown/10 bg-brown/[0.03] px-3"
              >
                {client.logoSrc ? (
                  <Image
                    src={client.logoSrc}
                    alt={client.name}
                    width={100}
                    height={40}
                    className="max-h-8 w-auto object-contain"
                  />
                ) : (
                  <span className="font-condensed text-[13px] font-bold tracking-wide text-brown/50">
                    {client.name}
                  </span>
                )}
              </div>
            ))}
          </div>
        </RevealOnScroll>
        <RevealOnScroll delay={0.1}>
          <p className="mt-8 text-center font-condensed text-xs uppercase tracking-widest text-rust/70">
            {corporatePage.trustedByCaption}
          </p>
        </RevealOnScroll>
      </section>

      {/* More Than a Coffee Counter */}
      <section className="bg-parchment px-6 py-16 md:px-20 md:py-24">
        <RevealOnScroll delay={0}>
          <h2 className="font-condensed text-[26px] leading-[0.98] tracking-tight text-brown sm:text-[52px]">
            {corporatePage.introH2}
          </h2>
        </RevealOnScroll>
        <RevealOnScroll delay={0.08}>
          <p className="mt-4 max-w-xl font-condensed text-base italic text-rust/70">
            {corporatePage.introKicker}
          </p>
        </RevealOnScroll>

        <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-5 lg:gap-16">
          <div className="lg:col-span-3">
            {corporatePage.introParagraphs.map((paragraph, i) => (
              <RevealOnScroll key={paragraph.slice(0, 24)} delay={0.14 + i * 0.08}>
                <p className="mt-6 max-w-2xl font-sans text-lg leading-relaxed text-brown/70 first:mt-0">
                  {paragraph}
                </p>
              </RevealOnScroll>
            ))}
          </div>

          <div className="lg:col-span-2">
            <div className="grid grid-cols-2 gap-4">
              {corporatePage.introStats.map((stat, i) => (
                <RevealOnScroll key={stat.label} delay={0.1 + i * 0.06}>
                  <div className="border border-brown/15 bg-paper/60 p-6 transition-all duration-300 ease-in-out hover:-translate-y-1.5 hover:border-gold/40 hover:shadow-xl sm:p-8">
                    <p className="font-condensed text-2xl font-black leading-tight text-rust sm:text-3xl">
                      {stat.value}
                    </p>
                    <p className="mt-2 font-condensed text-xs uppercase tracking-widest text-brown/50">
                      {stat.label}
                    </p>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 md:gap-6">
          {corporatePage.howWeWorkCards.map((card, i) => (
            <RevealOnScroll key={card.title} delay={i * 0.07}>
              <div className="h-full border border-brown/10 bg-paper p-6 transition-all duration-300 ease-in-out hover:-translate-y-1.5 hover:border-gold/40 hover:shadow-xl sm:p-8">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-gold/25 bg-gold/10 text-gold">
                  {howWeWorkIcons[card.title]}
                </span>
                <h3 className="mt-4 font-condensed text-lg tracking-tight text-brown">
                  {card.title}
                </h3>
                <p className="mt-2 font-sans text-sm leading-relaxed text-brown/60">
                  {card.body}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      {/* Solutions (Tiers) */}
      <section className="bg-paper px-6 py-16 md:px-20 md:py-24">
        <RevealOnScroll delay={0}>
          <h2 className="font-condensed text-[26px] leading-[0.98] tracking-tight text-brown sm:text-[52px]">
            {corporatePage.tiersH2}
          </h2>
        </RevealOnScroll>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 md:gap-6">
          {corporatePage.tiers.map((tier, i) => (
            <RevealOnScroll key={tier.name} delay={i * 0.08}>
              <div className="group relative flex h-full flex-col overflow-hidden border border-brown/10 bg-paper2 p-6 transition-all duration-300 ease-in-out hover:-translate-y-1.5 hover:border-gold/40 hover:shadow-xl sm:p-8">
                <p className="font-condensed text-4xl font-black text-gold/40">
                  {tier.number}
                </p>
                <h3 className="mt-4 font-condensed text-2xl font-black tracking-tight text-brown">
                  {tier.name}
                </h3>
                <p className="mt-1 font-condensed text-[11px] uppercase tracking-widest text-rust/70">
                  {tier.tagline}
                </p>
                <p className="mt-4 flex-1 font-sans text-sm leading-relaxed text-brown/60">
                  {tier.description}
                </p>
                {tier.href && (
                  <Link
                    href={tier.href}
                    className="mt-6 inline-block font-condensed text-xs font-bold uppercase tracking-widest text-rust transition-colors hover:text-brown"
                  >
                    Learn More →
                  </Link>
                )}
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      {/* Beverage & Food Service Menu */}
      <section className="bg-paper2 px-6 py-16 md:px-20 md:py-24">
        <RevealOnScroll delay={0}>
          <h2 className="font-condensed text-[26px] leading-[0.98] tracking-tight text-brown sm:text-[52px]">
            {corporatePage.menuH2}
          </h2>
        </RevealOnScroll>
        <RevealOnScroll delay={0.08}>
          <p className="mt-4 max-w-xl font-sans text-lg leading-relaxed text-brown/70">
            {corporatePage.menuSubhead}
          </p>
        </RevealOnScroll>

        <div
          ref={menuScrollRef}
          onMouseDown={onMenuMouseDown}
          onMouseMove={onMenuMouseMove}
          onMouseUp={onMenuMouseUp}
          onMouseLeave={onMenuMouseUp}
          className={`scrollbar-hide mt-10 flex select-none snap-x snap-mandatory flex-row gap-4 overflow-x-auto pb-2 ${
            isMenuDragging ? "cursor-grabbing" : "cursor-grab"
          }`}
        >
          {categories.map((category, i) => (
            <RevealOnScroll
              key={category.id}
              delay={i * 0.04}
              className="w-[160px] flex-shrink-0 snap-start overflow-hidden border border-brown/12 transition-colors duration-200 hover:border-gold/40"
            >
              <div className="relative h-[120px] w-full overflow-hidden">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover"
                  sizes="160px"
                />
              </div>
              <p className="bg-brown/5 px-3 py-2.5 font-condensed text-sm font-bold tracking-tight text-brown">
                {category.name}
              </p>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      {/* Built for Different Workplace Requirements */}
      <section className="bg-parchment px-6 py-16 md:px-20 md:py-24">
        <RevealOnScroll delay={0}>
          <h2 className="font-condensed text-[26px] leading-[0.98] tracking-tight text-brown sm:text-[52px]">
            {corporatePage.flexibleH2}
          </h2>
        </RevealOnScroll>
        <RevealOnScroll delay={0.08}>
          <p className="mt-4 max-w-2xl font-sans text-lg leading-relaxed text-brown/70">
            {corporatePage.flexibleBody}
          </p>
        </RevealOnScroll>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 md:gap-6">
          {corporatePage.flexibleCards.map((card, i) => (
            <RevealOnScroll key={card.title} delay={i * 0.07}>
              <div className="h-full border border-brown/10 bg-paper p-6 transition-all duration-300 ease-in-out hover:-translate-y-1.5 hover:border-gold/40 hover:shadow-xl sm:p-8">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-gold/25 bg-gold/10 text-gold">
                  {flexibleIcons[card.title]}
                </span>
                <h3 className="mt-4 font-condensed text-lg tracking-tight text-brown">
                  {card.title}
                </h3>
                <p className="mt-2 font-sans text-sm leading-relaxed text-brown/60">
                  {card.body}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      {/* Deployed Across Corporate Campuses — photo grid */}
      <section className="bg-paper2 px-6 py-16 md:px-20 md:py-24">
        <RevealOnScroll delay={0}>
          <h2 className="font-condensed text-[26px] leading-[0.98] tracking-tight text-brown sm:text-[52px]">
            {corporatePage.deploymentsH2}
          </h2>
        </RevealOnScroll>
        <RevealOnScroll delay={0.08}>
          <p className="mt-4 max-w-xl font-sans text-lg leading-relaxed text-brown/70">
            {corporatePage.deploymentsSubhead}
          </p>
        </RevealOnScroll>

        {/* Desktop: asymmetric masonry-style grid */}
        <div className="mt-10 hidden md:grid md:grid-cols-4 md:auto-rows-[180px] md:gap-3 lg:auto-rows-[210px]">
          {deploymentPhotos.map((photo, i) => (
            <RevealOnScroll key={photo.id} delay={i * 0.06} className={deploymentPhotoSpans[i]}>
              <div className="group relative h-full w-full overflow-hidden">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  quality={90}
                />
                {photo.caption && (
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0C0C0C]/85 via-[#0C0C0C]/25 to-transparent px-4 pb-3 pt-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <p className="font-condensed text-xs uppercase tracking-wide text-cream">
                      {photo.caption}
                    </p>
                  </div>
                )}
              </div>
            </RevealOnScroll>
          ))}
        </div>

        {/* Mobile: stacked single column */}
        <div className="mt-10 space-y-4 md:hidden">
          {deploymentPhotos.map((photo, i) => (
            <RevealOnScroll key={photo.id} delay={i * 0.05}>
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover"
                  sizes="100vw"
                  quality={90}
                />
                {photo.caption && (
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0C0C0C]/85 via-[#0C0C0C]/25 to-transparent px-4 pb-3 pt-10">
                    <p className="font-condensed text-xs uppercase tracking-wide text-cream">
                      {photo.caption}
                    </p>
                  </div>
                )}
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      {/* Standardised Operations — signature statement */}
      <section className="relative overflow-hidden bg-[#411915] px-6 py-20 text-center md:px-20 md:py-32">
        <RevealOnScroll delay={0}>
          <p className="font-condensed text-base italic text-gold/70">
            {corporatePage.standardKicker}
          </p>
        </RevealOnScroll>
        <RevealOnScroll delay={0.06}>
          <h2 className="mx-auto mt-4 max-w-3xl font-condensed text-[36px] leading-[0.98] tracking-tight text-cream sm:text-[64px]">
            {corporatePage.standardH2}
          </h2>
        </RevealOnScroll>
        <RevealOnScroll delay={0.12}>
          <p className="mx-auto mt-8 max-w-2xl font-sans text-lg leading-relaxed text-cream/60 md:text-xl">
            {corporatePage.standardBody}
          </p>
        </RevealOnScroll>
      </section>

      {/* Why Enterprise Teams Choose MDP */}
      <section className="bg-parchment px-6 py-16 md:px-20 md:py-24">
        <RevealOnScroll delay={0}>
          <h2 className="font-condensed text-[26px] leading-[0.98] tracking-tight text-brown sm:text-[52px]">
            {corporatePage.trustH2}
          </h2>
        </RevealOnScroll>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6">
          {corporatePage.trustPoints.map((point, i) => (
            <RevealOnScroll key={point.title} delay={i * 0.06}>
              <div className="group relative overflow-hidden border border-brown/10 bg-paper p-6 transition-all duration-300 ease-in-out hover:-translate-y-1.5 hover:border-gold/40 hover:shadow-xl sm:p-8">
                <div
                  className="absolute inset-0 z-0 translate-y-full bg-[#411915] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0"
                  aria-hidden="true"
                />
                <span className="relative z-10 inline-flex h-12 w-12 items-center justify-center rounded-full border border-rust/30 bg-rust/10 text-rust transition-colors duration-300 group-hover:border-gold/40 group-hover:bg-gold/10 group-hover:text-gold">
                  {trustIcons[point.title]}
                </span>
                <h3 className="relative z-10 mt-4 font-condensed text-lg tracking-tight text-brown transition-colors duration-300 group-hover:text-cream">
                  {point.title}
                </h3>
                <p className="relative z-10 mt-2 font-sans text-sm leading-relaxed text-brown/60 transition-colors duration-300 group-hover:text-cream/70">
                  {point.body}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      {/* Getting Started — deployment process */}
      <section className="bg-paper px-6 py-16 md:px-20 md:py-24">
        <RevealOnScroll delay={0}>
          <h2 className="font-condensed text-[26px] leading-[0.98] tracking-tight text-brown sm:text-[52px]">
            {corporatePage.deploymentH2}
          </h2>
        </RevealOnScroll>

        {/* Desktop: horizontal sequence with connecting line */}
        <div className="relative mt-14 hidden md:grid md:grid-cols-6 md:gap-6">
          <div
            className="pointer-events-none absolute left-0 right-0 top-6 h-px bg-brown/15"
            aria-hidden="true"
          />
          {corporatePage.deploymentSteps.map((step, i) => (
            <RevealOnScroll key={step.step} delay={i * 0.08}>
              <div className="group relative flex flex-col items-start">
                <span className="relative z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center border border-gold/40 bg-paper font-condensed text-sm font-bold text-rust transition-colors duration-300 group-hover:border-gold">
                  {step.step}
                </span>
                <h3 className="mt-4 flex items-center gap-2 font-condensed text-base tracking-tight text-brown transition-colors duration-300 group-hover:text-rust">
                  <span className="text-rust/45" aria-hidden="true">
                    {deploymentIcons[step.title]}
                  </span>
                  {step.title}
                </h3>
                <p className="mt-2 font-sans text-xs leading-relaxed text-brown/60">
                  {step.body}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        {/* Mobile: vertical stack */}
        <div className="mt-10 space-y-6 md:hidden">
          {corporatePage.deploymentSteps.map((step, i) => (
            <RevealOnScroll key={step.step} delay={i * 0.06}>
              <div className="group flex gap-4">
                <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center border border-gold/40 bg-paper font-condensed text-sm font-bold text-rust transition-colors duration-300 group-hover:border-gold">
                  {step.step}
                </span>
                <div>
                  <h3 className="flex items-center gap-2 font-condensed text-base tracking-tight text-brown transition-colors duration-300 group-hover:text-rust">
                    <span className="text-rust/45" aria-hidden="true">
                      {deploymentIcons[step.title]}
                    </span>
                    {step.title}
                  </h3>
                  <p className="mt-1 font-sans text-xs leading-relaxed text-brown/60">
                    {step.body}
                  </p>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      <ClientProof />

      {/* Common Questions */}
      <section className="bg-paper2 px-6 py-16 md:px-20 md:py-24">
        <RevealOnScroll delay={0}>
          <h2 className="font-condensed text-[26px] leading-[0.98] tracking-tight text-brown sm:text-[52px]">
            {corporatePage.faqH2}
          </h2>
        </RevealOnScroll>

        <div className="mx-auto mt-10 max-w-3xl">
          {corporatePage.faqItems.map((faq, i) => (
            <RevealOnScroll key={faq.question} delay={i * 0.05}>
              <FaqAccordionItem
                question={faq.question}
                answer={faq.answer}
                isOpen={openFaq === i}
                onToggle={() => setOpenFaq((prev) => (prev === i ? null : i))}
              />
            </RevealOnScroll>
          ))}
        </div>
      </section>

      {/* Closing CTA */}
      <section className="relative overflow-hidden bg-[#411915] px-6 py-16 md:px-20 md:py-24">
        <div className="pointer-events-none absolute bottom-0 -right-6 md:-right-20 hidden h-3/4 w-1/2 opacity-[0.25] md:block" aria-hidden="true">
          <Image
            src="/images/MDP coffeee man Png1.png"
            alt=""
            fill
            className="object-contain object-bottom [filter:invert(1)_brightness(1.4)]"
          />
        </div>
        <div className="relative z-10">
          <RevealOnScroll delay={0}>
            <h2 className="max-w-2xl font-condensed text-[26px] leading-[0.98] tracking-tight text-cream sm:text-[52px]">
              {corporatePage.ctaHeading}
            </h2>
          </RevealOnScroll>
          <RevealOnScroll delay={0.1}>
            <p className="mt-6 max-w-xl font-sans text-lg leading-relaxed text-cream/60">
              {corporatePage.ctaBody}
            </p>
          </RevealOnScroll>
          <RevealOnScroll delay={0.2}>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href={corporatePage.ctaHref}
                className="inline-block bg-gold px-8 py-4 text-center font-condensed text-sm font-bold uppercase tracking-wider text-brown transition-colors hover:bg-gold/90"
              >
                {corporatePage.ctaPrimaryLabel} →
              </Link>
              <Link
                href={corporatePage.ctaHref}
                className="inline-block border border-cream/40 px-8 py-4 text-center font-condensed text-sm font-bold uppercase tracking-wider text-cream transition-colors hover:border-cream hover:bg-cream/10"
              >
                {corporatePage.ctaSecondaryLabel}
              </Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

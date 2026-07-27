"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { ScrollContainer } from "@/components/ScrollContainer";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { MOTION } from "@/lib/motion";
import { whatsappLink } from "@/content/site";
import { faqItems } from "@/content/faq";

function AccordionItem({
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

export function FaqContent() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const shouldReduceMotion = useReducedMotion();

  function toggle(i: number) {
    setOpenIndex((prev) => (prev === i ? null : i));
  }

  return (
    <div className="bg-paper">
      <NavBar />

      <ScrollContainer>
      {/* Hero */}
      <section
        className="relative overflow-hidden snap-slide flex min-h-[50vh] w-full flex-col justify-end bg-[#411915] px-6 pb-10 pt-24 md:px-20 md:pb-16 md:pt-32"
        aria-label="FAQ hero"
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
            FAQ
          </p>
          <motion.h1
            className="font-condensed text-[30px] leading-[0.95] tracking-tightest text-cream sm:text-[64px]"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: MOTION.slow, delay: 0.3, ease: MOTION.ease }}
          >
            Questions we hear from
            <br />
            facilities managers.
          </motion.h1>
          <motion.p
            className="mt-4 max-w-xl font-sans text-sm text-cream/55 md:mt-6 md:text-xl"
            initial={shouldReduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: MOTION.base, delay: 0.5, ease: MOTION.ease }}
          >
            Everything you need to know before bringing MDP to your office.
          </motion.p>
        </div>
      </section>

      {/* FAQ accordion */}
      <section
        className="snap-slide mx-auto max-w-3xl px-6 py-10 md:py-20"
        aria-label="Frequently asked questions"
      >
        {faqItems.map((faq, i) => (
          <RevealOnScroll key={faq.question} delay={MOTION.stagger(i, 0.06)}>
            <AccordionItem
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === i}
              onToggle={() => toggle(i)}
            />
          </RevealOnScroll>
        ))}
      </section>

      {/* Bottom CTA */}
      <RevealOnScroll delay={0.1}>
        <section className="snap-slide bg-paper2 px-6 py-10 text-center md:px-20 md:py-16">
          <p className="font-condensed text-lg text-brown sm:text-2xl">
            Still have questions? Talk to us directly.
          </p>
          <a
            href={whatsappLink("Hi, I'd like to know more about MDP Coffee House. Could we connect?")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 bg-brown px-5 py-2.5 font-condensed text-xs font-bold tracking-wide text-cream transition-colors hover:bg-rust sm:mt-6 sm:px-6 sm:py-3 sm:text-sm"
          >
            WhatsApp Us
          </a>
        </section>
      </RevealOnScroll>

      <Footer />
      </ScrollContainer>
    </div>
  );
}

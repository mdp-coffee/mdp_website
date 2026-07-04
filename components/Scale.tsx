"use client";

import { useState, type FormEvent } from "react";
import Image from "next/image";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { trackEvent } from "@/components/Analytics";
import { SectionLabel } from "@/components/SectionLabel";

type SubmitState = "idle" | "submitting" | "success" | "error";

export function Scale() {
  const [state, setState] = useState<SubmitState>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("submitting");
    setErrorMsg("");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: formData.get("name"),
      company: "",
      phone: formData.get("phone"),
      email: formData.get("email"),
      message: formData.get("message"),
      website: formData.get("website"), // honeypot
      source: "franchise",
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const data = (await res.json()) as { error?: string };
        throw new Error(data.error ?? "Something went wrong");
      }

      setState("success");
      trackEvent("contact_form_submit", { location: "scale", source: "franchise" });
      form.reset();
    } catch (err) {
      setState("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong");
    }
  }

  const labelCls = "font-condensed text-[9px] uppercase tracking-[0.15em] text-brown/40";
  const inputCls = "mt-1.5 w-full border border-brown/15 bg-paper2 px-3 py-2 text-sm font-sans text-brown placeholder:text-brown/30 focus:border-gold focus:outline-none md:mt-2 md:px-4 md:py-3 md:text-base";

  return (
    <section
      id="scale"
      className="snap-slide grid min-h-[100svh] w-full grid-cols-1 md:grid-cols-2"
      aria-label="MDP Coffee House — franchise enquiry"
    >
      {/* Left — dark panel */}
      <div className="relative flex flex-col justify-center overflow-hidden bg-[#411915] px-6 py-20 md:px-14">
        <div className="pointer-events-none absolute bottom-0 right-0 h-3/4 w-1/2 opacity-[0.15]" aria-hidden="true">
          <Image
            src="/images/MDP coffeee man Png1.png"
            alt=""
            fill
            className="object-contain object-bottom"
          />
        </div>
        <RevealOnScroll direction="left" delay={0}>
          <div className="relative z-10">
            <SectionLabel tone="dark">Franchise Opportunities</SectionLabel>
            <h2 className="mt-6 font-condensed text-[30px] leading-[0.98] tracking-tightest text-cream sm:text-[56px]">
              Bring MDP closer to home.
            </h2>
            <p className="mt-6 max-w-md font-sans text-base leading-relaxed text-cream/55">
              For twenty years, MDP has earned its place in India&rsquo;s workday — one outlet, one relationship, one morning at a time. We&rsquo;re inviting the right partners to bring that same standard somewhere new.
            </p>
            <p className="mt-6 max-w-xs font-sans text-sm text-cream/35">
              20+ years in operation · 85+ locations nationwide · 45+ enterprise clients.
            </p>
            <p className="mt-6 max-w-md font-sans text-sm leading-relaxed text-cream/45">
              We partner with people who value consistency over shortcuts, understand hospitality, and want to build something real.
            </p>
          </div>
        </RevealOnScroll>
      </div>

      {/* Right — form panel */}
      <div className="flex flex-col justify-center bg-paper px-6 py-20 md:px-14">
        <RevealOnScroll delay={0.2}>
          {state === "success" ? (
            <div role="status" className="max-w-md">
              <p className="font-condensed text-3xl font-black text-brown">
                We&rsquo;ll be in touch.
              </p>
              <p className="mt-3 font-sans text-brown/60">
                Expect a call shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-md" noValidate>
              {/* Honeypot — visually hidden, bots fill it, humans don't */}
              <div className="absolute -left-[9999px]" aria-hidden="true">
                <label htmlFor="sc-website">Leave this field empty</label>
                <input
                  type="text"
                  id="sc-website"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              <div className="mb-3 md:mb-4">
                <label htmlFor="sc-name" className={labelCls}>
                  Your name
                </label>
                <input
                  id="sc-name"
                  name="name"
                  type="text"
                  required
                  minLength={2}
                  placeholder="Your name"
                  className={inputCls}
                />
              </div>

              <div className="mb-3 md:mb-4">
                <label htmlFor="sc-phone" className={labelCls}>
                  Phone number
                </label>
                <input
                  id="sc-phone"
                  name="phone"
                  type="tel"
                  required
                  placeholder="Phone number"
                  className={inputCls}
                />
              </div>

              <div className="mb-3 md:mb-4">
                <label htmlFor="sc-email" className={labelCls}>
                  Email<span className="normal-case opacity-60"> (optional)</span>
                </label>
                <input
                  id="sc-email"
                  name="email"
                  type="email"
                  placeholder="Email address"
                  className={inputCls}
                />
              </div>

              <div className="mb-4 md:mb-6">
                <label htmlFor="sc-message" className={labelCls}>
                  Tell us about your interest<span className="normal-case opacity-60"> (optional)</span>
                </label>
                <textarea
                  id="sc-message"
                  name="message"
                  rows={2}
                  placeholder="Your background, anything else worth knowing"
                  className={inputCls}
                />
              </div>

              {state === "error" ? (
                <p role="alert" className="mb-4 text-sm text-rust">
                  {errorMsg}
                </p>
              ) : null}

              <button
                type="submit"
                disabled={state === "submitting"}
                className="w-full bg-brown py-3 font-condensed text-xs font-bold uppercase tracking-[0.15em] text-cream transition-colors hover:bg-rust disabled:opacity-60 md:py-4 md:text-sm"
              >
                {state === "submitting" ? "Sending…" : "ENQUIRE ABOUT FRANCHISE →"}
              </button>

              <p className="mt-4 font-sans text-sm text-brown/35">
                No sales pitch. No obligation. Just a conversation.
              </p>
            </form>
          )}
        </RevealOnScroll>
      </div>
    </section>
  );
}

"use client";

import { useState, type FormEvent } from "react";
import Image from "next/image";
import { SectionLabel } from "@/components/SectionLabel";
import { siteConfig, whatsappLink } from "@/content/site";
import { trackEvent } from "@/components/Analytics";

type SubmitState = "idle" | "submitting" | "success" | "error";

export function Contact() {
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
      company: formData.get("company"),
      phone: formData.get("phone"),
      message: formData.get("message"),
      website: formData.get("website"), // honeypot
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
      trackEvent("contact_form_submit", { location: "invitation" });
      form.reset();
    } catch (err) {
      setState("error");
      setErrorMsg(
        err instanceof Error ? err.message : "Something went wrong"
      );
    }
  }

  return (
    <section
      id="contact"
      className="snap-slide grid min-h-[100svh] w-full grid-cols-1 md:grid-cols-2"
      aria-label="Contact MDP Coffee House"
    >
      {/* Left — story panel */}
      <div className="relative flex flex-col justify-center overflow-hidden bg-[#411915] px-6 py-20 md:px-14">
        <div className="pointer-events-none absolute bottom-0 right-0 h-3/4 w-1/2 opacity-[0.15]" aria-hidden="true">
          <Image
            src="/images/MDP coffeee man Png1.png"
            alt=""
            fill
            className="object-contain object-bottom"
          />
        </div>
        <div className="relative z-10">
          <SectionLabel tone="dark">Work With Us</SectionLabel>
          <h2 className="mt-6 font-condensed text-[44px] leading-[0.92] tracking-tightest text-cream sm:text-[56px]">
            Let&rsquo;s talk about
            <br />
            your office.
          </h2>
          <p className="mt-8 max-w-sm font-serif text-lg leading-relaxed text-cream/55">
            We&rsquo;ve been setting up in India&rsquo;s most demanding
            offices since 2005.
            <br />
            <br />
            Amazon trusted us. Deutsche Bank trusted us. Intel trusted us.
          </p>

          <a
            href={whatsappLink(
              "Hi, I'm interested in setting up MDP Coffee services for our office."
            )}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent("whatsapp_click", { location: "contact" })}
            className="mt-10 inline-flex items-center gap-2 bg-[#25D366] px-6 py-3 font-condensed text-sm font-bold tracking-wide text-white transition-opacity hover:opacity-90"
          >
            Talk to us on WhatsApp
          </a>
          <p className="mt-3 font-condensed text-xs tracking-wide text-cream/35">
            {siteConfig.phone.join(" · ")}
          </p>
        </div>
      </div>

      {/* Right — form */}
      <div className="flex flex-col justify-center bg-paper px-6 py-20 md:px-14">
        {state === "success" ? (
          <div role="status" className="max-w-md">
            <p className="font-condensed text-3xl font-black text-brown">
              Message sent.
            </p>
            <p className="mt-3 font-serif text-brown/60">
              We&rsquo;ll be in touch shortly. For a faster response, message
              us directly on WhatsApp.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-md" noValidate>
            {/* Honeypot — visually hidden, bots fill it, humans don't */}
            <div className="absolute -left-[9999px]" aria-hidden="true">
              <label htmlFor="website">Leave this field empty</label>
              <input
                type="text"
                id="website"
                name="website"
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="name"
                className="font-condensed text-[10px] uppercase tracking-[0.18em] text-brown/40"
              >
                Your name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                minLength={2}
                placeholder="Rahul Sharma"
                className="mt-2 w-full border border-brown/15 bg-paper2 px-4 py-3 font-sans text-brown placeholder:text-brown/30 focus:border-gold focus:outline-none"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="company"
                className="font-condensed text-[10px] uppercase tracking-[0.18em] text-brown/40"
              >
                Company
              </label>
              <input
                id="company"
                name="company"
                type="text"
                required
                minLength={2}
                placeholder="Acme Technologies"
                className="mt-2 w-full border border-brown/15 bg-paper2 px-4 py-3 font-sans text-brown placeholder:text-brown/30 focus:border-gold focus:outline-none"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="phone"
                className="font-condensed text-[10px] uppercase tracking-[0.18em] text-brown/40"
              >
                Phone number
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                placeholder="+91 98765 43210"
                className="mt-2 w-full border border-brown/15 bg-paper2 px-4 py-3 font-sans text-brown placeholder:text-brown/30 focus:border-gold focus:outline-none"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="message"
                className="font-condensed text-[10px] uppercase tracking-[0.18em] text-brown/40"
              >
                Tell us about your office
              </label>
              <textarea
                id="message"
                name="message"
                rows={3}
                placeholder="Number of employees, any specific requirements..."
                className="mt-2 w-full resize-none border border-brown/15 bg-paper2 px-4 py-3 font-sans text-brown placeholder:text-brown/30 focus:border-gold focus:outline-none"
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
              className="w-full bg-brown py-4 font-condensed text-sm font-bold uppercase tracking-[0.15em] text-cream transition-colors hover:bg-rust disabled:opacity-60"
            >
              {state === "submitting" ? "Sending…" : "Let's Talk →"}
            </button>

            <p className="mt-4 font-serif text-sm text-brown/35">
              No sales pitch. No obligation. Just a conversation.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}

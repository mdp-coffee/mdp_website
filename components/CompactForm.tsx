"use client";

import { useState, type FormEvent } from "react";
import { trackEvent } from "@/components/Analytics";

type SubmitState = "idle" | "submitting" | "success" | "error";

interface CompactFormProps {
  variant?: "dark" | "light";
}

export function CompactForm({ variant = "dark" }: CompactFormProps) {
  const isDark = variant === "dark";
  const [state, setState] = useState<SubmitState>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("submitting");
    setErrorMsg("");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const city = (formData.get("city") as string | null) ?? "";

    const payload = {
      name: formData.get("name"),
      company: formData.get("company"),
      phone: formData.get("phone"),
      message: city ? `City: ${city}` : "",
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
      trackEvent("contact_form_submit", { location: "scale" });
      form.reset();
    } catch (err) {
      setState("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong");
    }
  }

  const labelCls = `font-condensed text-[10px] uppercase tracking-[0.18em] ${isDark ? "text-cream/40" : "text-brown/40"}`;
  const inputCls = `mt-1.5 w-full border px-4 py-3 font-sans focus:border-gold focus:outline-none ${
    isDark
      ? "border-cream/15 bg-white/5 text-cream placeholder:text-cream/25"
      : "border-brown/15 bg-paper2 text-brown placeholder:text-brown/30"
  }`;

  if (state === "success") {
    return (
      <div role="status" className="max-w-sm">
        <p className={`font-condensed text-2xl font-black ${isDark ? "text-cream" : "text-brown"}`}>
          We&rsquo;ll be in touch.
        </p>
        <p className={`mt-2 font-serif ${isDark ? "text-cream/50" : "text-brown/50"}`}>
          Expect a call from us shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="w-full max-w-sm">
      {/* Honeypot — hidden from humans, bots fill it */}
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label htmlFor="cf-website">Leave this field empty</label>
        <input
          type="text"
          id="cf-website"
          name="website"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="cf-name" className={labelCls}>
          Your name
        </label>
        <input
          id="cf-name"
          name="name"
          type="text"
          required
          minLength={2}
          placeholder="Rahul Sharma"
          className={inputCls}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="cf-company" className={labelCls}>
          Company
        </label>
        <input
          id="cf-company"
          name="company"
          type="text"
          required
          minLength={2}
          placeholder="Acme Technologies"
          className={inputCls}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="cf-phone" className={labelCls}>
          Phone number
        </label>
        <input
          id="cf-phone"
          name="phone"
          type="tel"
          required
          placeholder="+91 98765 43210"
          className={inputCls}
        />
      </div>

      <div className="mb-5">
        <label htmlFor="cf-city" className={labelCls}>
          City
        </label>
        <input
          id="cf-city"
          name="city"
          type="text"
          required
          placeholder="Bengaluru"
          className={inputCls}
        />
      </div>

      {state === "error" ? (
        <p role="alert" className="mb-3 text-sm text-rust">
          {errorMsg}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={state === "submitting"}
        className="w-full bg-gold py-3.5 font-condensed text-sm font-bold uppercase tracking-[0.15em] text-brown transition-colors hover:bg-gold disabled:opacity-60"
      >
        {state === "submitting" ? "Sending…" : "Get a Callback →"}
      </button>
    </form>
  );
}

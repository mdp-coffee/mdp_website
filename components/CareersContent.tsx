"use client";

import { useState, type FormEvent } from "react";
import careersData from "@/content/careers.json";

type SubmitState = "idle" | "loading" | "success" | "error";

function ApplicationForm() {
  const [state, setState] = useState<SubmitState>("idle");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [contribution, setContribution] = useState("");
  const [websiteHoneypot, setWebsiteHoneypot] = useState("");
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [resumeError, setResumeError] = useState<string>("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setState("loading");

    let resumeBase64: string | null = null;
    let resumeFilename: string | null = null;
    let resumeMimeType: string | null = null;

    if (resumeFile) {
      resumeBase64 = await new Promise<string>((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => {
          const result = reader.result as string;
          resolve(result.split(",")[1] ?? "");
        };
        reader.onerror = reject;
        reader.readAsDataURL(resumeFile);
      });
      resumeFilename = resumeFile.name;
      resumeMimeType = resumeFile.type;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          phone,
          email,
          message: contribution,
          website: websiteHoneypot,
          source: "careers",
          resumeBase64,
          resumeFilename,
          resumeMimeType,
        }),
      });

      if (res.ok) {
        setState("success");
      } else {
        setState("error");
      }
    } catch {
      setState("error");
    }
  };

  if (state === "success") {
    return (
      <p className="font-condensed text-xl text-brown">
        Thank you. We&rsquo;ll be in touch.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      {/* Honeypot */}
      <div aria-hidden="true">
        <input
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          value={websiteHoneypot}
          onChange={(e) => setWebsiteHoneypot(e.target.value)}
          className="absolute left-[-9999px]"
        />
      </div>

      <input
        type="text"
        required
        placeholder="Your name"
        aria-label="Your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="mb-4 w-full border border-brown/15 bg-[#F9F0E1] px-4 py-3 font-sans text-brown placeholder:text-brown/30 focus:border-gold focus:outline-none"
      />

      <input
        type="tel"
        required
        placeholder="Phone number"
        aria-label="Phone number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className="mb-4 w-full border border-brown/15 bg-[#F9F0E1] px-4 py-3 font-sans text-brown placeholder:text-brown/30 focus:border-gold focus:outline-none"
      />

      <input
        type="email"
        required
        placeholder="Email address"
        aria-label="Email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="mb-4 w-full border border-brown/15 bg-[#F9F0E1] px-4 py-3 font-sans text-brown placeholder:text-brown/30 focus:border-gold focus:outline-none"
      />

      <textarea
        required
        rows={5}
        placeholder="What can you bring to MDP?"
        aria-label="What can you bring to MDP?"
        value={contribution}
        onChange={(e) => setContribution(e.target.value)}
        className="mb-4 w-full resize-none border border-brown/15 bg-[#F9F0E1] px-4 py-3 font-sans text-brown placeholder:text-brown/30 focus:border-gold focus:outline-none"
      />

      <div className="mb-4">
        <label className="font-condensed text-[10px] uppercase tracking-[0.18em] text-brown/40">
          Resume / CV{" "}
          <span className="normal-case opacity-60">(PDF, DOC, DOCX · max 4MB)</span>
        </label>
        <div className="mt-2">
          <label className="flex cursor-pointer items-center gap-3 border border-dashed border-brown/20 bg-[#F9F0E1] px-4 py-3 transition-colors hover:border-gold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="flex-shrink-0 text-brown/40"
              aria-hidden="true"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="17 8 12 3 7 8" />
              <line x1="12" x2="12" y1="3" y2="15" />
            </svg>
            <span className="font-sans text-sm text-brown/50">
              {resumeFile ? resumeFile.name : "Click to upload your resume"}
            </span>
            <input
              type="file"
              accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
              className="sr-only"
              onChange={(e) => {
                const file = e.target.files?.[0] ?? null;
                setResumeError("");
                if (file) {
                  if (file.size > 4 * 1024 * 1024) {
                    setResumeError("File is too large. Maximum size is 4MB.");
                    setResumeFile(null);
                    return;
                  }
                  setResumeFile(file);
                }
              }}
            />
          </label>
          {resumeError && (
            <p className="mt-1 font-sans text-xs text-red-600">{resumeError}</p>
          )}
        </div>
      </div>

      <button
        type="submit"
        disabled={state === "loading"}
        className="w-full bg-[#411915] py-4 font-condensed text-xs uppercase tracking-widest text-cream transition-colors hover:bg-[#70120E] disabled:opacity-60"
      >
        {state === "loading" ? "SENDING..." : careersData.form.cta}
      </button>

      {state === "error" && (
        <p role="alert" className="mt-3 font-sans text-sm text-rust">
          Something went wrong. Please try again.
        </p>
      )}
    </form>
  );
}

export function CareersContent() {
  return (
    <main>
      {/* Section 1 — Hero */}
      <section
        className="flex min-h-[40vh] items-end bg-[#411915] px-8 pb-16 pt-32 md:px-16 lg:px-24"
        aria-label="Careers at MDP Coffee House"
      >
        <div>
          <div className="flex items-center gap-4">
            <div className="h-px w-8 bg-gold" aria-hidden="true" />
            <p className="font-condensed text-[11px] uppercase tracking-[0.25em] text-gold/60">
              {careersData.hero.label}
            </p>
          </div>
          <h1 className="mt-4 font-sans text-4xl font-black not-italic text-cream md:text-6xl">
            {careersData.hero.headline}
          </h1>
          <p className="mt-6 max-w-xl font-sans text-base leading-relaxed text-cream/60">
            {careersData.hero.subtext}
          </p>
        </div>
      </section>

      {/* Section 2 — Why MDP */}
      <section
        className="bg-[#F9F0E1] px-8 py-24 md:px-16 lg:px-24"
        aria-label="Why work at MDP"
      >
        <p className="mb-10 font-condensed text-[11px] uppercase tracking-[0.25em] text-rust/70">
          Why MDP?
        </p>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {careersData.why.map((item) => (
            <div key={item.num} className="border-t-2 border-gold pt-6">
              <p className="mb-3 font-condensed text-xs text-gold/50">
                {item.num}
              </p>
              <h2 className="mb-3 font-sans text-xl font-black not-italic text-brown">
                {item.title}
              </h2>
              <p className="font-sans text-sm leading-relaxed text-brown/60">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 3 — Open Application */}
      <section
        className="bg-white px-8 py-24 md:px-16 lg:px-24"
        aria-label="Open application"
      >
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          <div>
            <h2 className="font-sans text-3xl font-black not-italic text-brown">
              {careersData.form.headline}
            </h2>
            <p className="mt-4 font-sans text-base leading-relaxed text-brown/60">
              {careersData.form.subtext}
            </p>
          </div>
          <div>
            <ApplicationForm />
          </div>
        </div>
      </section>
    </main>
  );
}

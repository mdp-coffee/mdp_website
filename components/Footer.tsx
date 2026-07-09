"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/content/site";
import { RevealOnScroll } from "@/components/RevealOnScroll";

const company = [
  { label: "About Us", href: "/about", isRoute: true },
  { label: "Our Clients", href: "/clients", isRoute: true },
  { label: "Careers", href: "/careers", isRoute: true },
  { label: "Gallery", href: "/gallery", isRoute: true },
  { label: "Blog", href: "/blog", isRoute: true },
  { label: "FAQ", href: "/faq", isRoute: true },
];

const services = [
  { label: "Corporate Kiosks", href: "/services/corporate-kiosk", isRoute: true },
  { label: "QSR Cafes", href: "/services/qsr-cafe", isRoute: true },
  { label: "Mobile Carts", href: "/services/mobile-cart", isRoute: true },
  { label: "24/7 Tuck Shops", href: "/services/tuck-shop", isRoute: true },
  { label: "Partner With Us", href: "/#contact", isRoute: false },
];

const locations = [
  { label: "Bengaluru", href: "/locations/bengaluru", isRoute: true },
  { label: "Hyderabad", href: "/locations/hyderabad", isRoute: true },
  { label: "Mumbai", href: "/locations/mumbai", isRoute: true },
  { label: "Pune", href: "/locations/pune", isRoute: true },
  { label: "Chennai", href: "/locations/chennai", isRoute: true },
  { label: "Mysore", href: "/locations/mysore", isRoute: true },
];

function FooterLink({
  href,
  isRoute,
  children,
}: {
  href: string;
  isRoute: boolean;
  children: React.ReactNode;
}) {
  const cls = "font-sans text-sm text-cream/60 hover:text-cream transition-colors";
  return isRoute ? (
    <Link href={href} className={cls}>
      {children}
    </Link>
  ) : (
    <a href={href} className={cls}>
      {children}
    </a>
  );
}

type NewsletterState = "idle" | "submitting" | "success" | "error";

function NewsletterForm() {
  const [state, setState] = useState<NewsletterState>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("submitting");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const email = formData.get("email") as string;
    const website = formData.get("website") as string;

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, website }),
      });

      if (!res.ok) {
        setState("error");
        return;
      }

      setState("success");
      form.reset();
    } catch {
      setState("error");
    }
  }

  if (state === "success") {
    return (
      <p className="mt-4 font-sans text-xs text-gold">
        You&rsquo;re in. Welcome to the MDP list.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-4" noValidate>
      {/* Honeypot */}
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label htmlFor="nl-website">Leave this field empty</label>
        <input
          type="text"
          id="nl-website"
          name="website"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <input
        type="email"
        name="email"
        required
        placeholder="your@email.com"
        aria-label="Email address"
        className="w-full border border-cream/15 bg-white/5 px-3 py-2 font-sans text-sm text-cream placeholder:text-cream/25 focus:border-gold focus:outline-none"
      />

      <button
        type="submit"
        disabled={state === "submitting"}
        className="mt-2 w-full bg-rust py-2 font-condensed text-xs uppercase tracking-widest text-cream transition-colors hover:bg-brown disabled:opacity-60"
      >
        {state === "submitting" ? "SUBSCRIBING..." : "SUBSCRIBE →"}
      </button>

      {state === "error" && (
        <p role="alert" className="mt-2 font-sans text-xs text-rust/80">
          Something went wrong. Try again.
        </p>
      )}
    </form>
  );
}

export function Footer() {
  return (
    <footer className="grainy grainy-dark bg-[#411915] px-6 py-16 md:px-20">
      <div className="grid grid-cols-1 gap-12 border-b border-cream/10 pb-12 sm:grid-cols-2 lg:grid-cols-5">
        {/* Col 1 — Brand */}
        <RevealOnScroll delay={0}>
          <div>
            <Image
              src="/images/MDP Logo PNG.png"
              alt="MDP Coffee House"
              width={82}
              height={49}
              className="object-contain"
            />
            <p className="mt-4 max-w-xs font-sans text-sm text-cream/60">
              &ldquo;We&rsquo;ve shown up every morning since 2005. We&rsquo;ll
              see you tomorrow.&rdquo;
            </p>
            <div className="mt-8 space-y-4 border-t border-cream/10 pt-6">
              <div className="flex items-start gap-3">
                <span className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center border border-cream/15 text-gold">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                </span>
                <p className="font-sans text-xs leading-relaxed text-cream/60">#3, 23rd Main Road, Marenahalli,<br />JP Nagar Phase 2, Bengaluru 560 078</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center border border-cream/15 text-gold">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.11 13 19.79 19.79 0 0 1 1.07 4.18 2 2 0 0 1 3.07 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 17z"/></svg>
                </span>
                <p className="font-sans text-xs text-cream/60">+91 8884400701<br />+91 8884400709</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center border border-cream/15 text-gold">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                </span>
                <a href="mailto:info@mdpcoffeehouse.com" className="font-sans text-xs text-cream/60 transition-colors hover:text-cream">info@mdpcoffeehouse.com</a>
              </div>
            </div>

            <div className="mt-6">
              <p className="font-condensed text-[10px] uppercase tracking-widest text-gold/50">Follow Us</p>
              <div className="mt-3 flex gap-2">
                <a href="https://www.linkedin.com/company/mdpcoffeehouse" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="flex h-8 w-8 items-center justify-center border border-cream/15 text-cream/60 transition-colors hover:border-gold hover:text-gold">
                  <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                </a>
                <a href="https://www.instagram.com/mdpcoffeehouse" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="flex h-8 w-8 items-center justify-center border border-cream/15 text-cream/60 transition-colors hover:border-gold hover:text-gold">
                  <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                </a>
                <a href="https://www.facebook.com/mdpcoffeehouse" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="flex h-8 w-8 items-center justify-center border border-cream/15 text-cream/60 transition-colors hover:border-gold hover:text-gold">
                  <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                </a>
                <a href="https://www.youtube.com/@mdpcoffeehouse" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="flex h-8 w-8 items-center justify-center border border-cream/15 text-cream/60 transition-colors hover:border-gold hover:text-gold">
                  <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white"/></svg>
                </a>
              </div>
            </div>
          </div>
        </RevealOnScroll>

        {/* Col 2 — Company */}
        <RevealOnScroll delay={0.08}>
          <nav aria-label="Footer — company">
            <h3 className="font-condensed text-[10px] uppercase tracking-[0.2em] text-gold/60">
              Company
            </h3>
            <ul className="mt-4 space-y-3">
              {company.map((link) => (
                <li key={link.href + link.label}>
                  <FooterLink href={link.href} isRoute={link.isRoute}>
                    {link.label}
                  </FooterLink>
                </li>
              ))}
            </ul>
          </nav>
        </RevealOnScroll>

        {/* Col 3 — Services */}
        <RevealOnScroll delay={0.16}>
          <nav aria-label="Footer — services">
            <h3 className="font-condensed text-[10px] uppercase tracking-[0.2em] text-gold/60">
              Services
            </h3>
            <ul className="mt-4 space-y-3">
              {services.map((link) => (
                <li key={link.label}>
                  <FooterLink href={link.href} isRoute={link.isRoute}>
                    {link.label}
                  </FooterLink>
                </li>
              ))}
            </ul>
          </nav>
        </RevealOnScroll>

        {/* Col 4 — Locations */}
        <RevealOnScroll delay={0.24}>
          <div>
            <nav aria-label="Footer — locations">
              <h3 className="font-condensed text-[10px] uppercase tracking-[0.2em] text-gold/60">
                Locations
              </h3>
              <ul className="mt-4 space-y-3">
                {locations.map((link) => (
                  <li key={link.href}>
                    <FooterLink href={link.href} isRoute={link.isRoute}>
                      {link.label}
                    </FooterLink>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </RevealOnScroll>

        {/* Col 5 — Newsletter */}
        <RevealOnScroll delay={0.32}>
          <div>
            <h3 className="font-condensed text-[10px] uppercase tracking-[0.2em] text-gold/60">
              Newsletter
            </h3>
            <p className="mt-3 font-sans text-xs leading-relaxed text-cream/60">
              Updates on MDP, new locations, and what we&rsquo;re brewing.
            </p>
            <NewsletterForm />
          </div>
        </RevealOnScroll>
      </div>

      <RevealOnScroll delay={0.4}>
        <div className="flex flex-col items-start justify-between gap-4 pt-8 text-xs text-cream/40 md:flex-row md:items-center">
          <span>
            © {new Date().getFullYear()} MDP Coffee House · Bengaluru, India ·
            Since {siteConfig.founded}
          </span>
          <span>{siteConfig.locationsCount} locations · {siteConfig.cupsPerDay.toLocaleString("en-IN")} cups daily · {siteConfig.enterpriseClients} enterprise clients</span>
        </div>
      </RevealOnScroll>
    </footer>
  );
}

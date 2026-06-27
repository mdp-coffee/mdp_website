"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

const navLinks = [
  { href: "/about", label: "About Us", isRoute: true },
  { href: "/clients", label: "Clients", isRoute: true },
  { href: "/gallery", label: "Gallery", isRoute: true },
  { href: "/blog", label: "Blog", isRoute: true },
  { href: "/faq", label: "FAQ", isRoute: true },
] as const;

const linkCls =
  "font-sans text-[13px] tracking-wide text-brown/50 transition-colors hover:text-brown";

export function NavBar() {
  const shouldReduceMotion = useReducedMotion();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <motion.nav
      initial={shouldReduceMotion ? false : { opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed inset-x-0 top-0 z-50 border-b border-parchment bg-white"
      aria-label="Main navigation"
    >
      <div className="flex h-16 items-center justify-between px-6 md:px-14">
        <Link href="/" className="flex items-center" aria-label="MDP Coffee House home">
          <Image
            src="/images/MDP Logo PNG.png"
            alt="MDP Coffee House"
            width={72}
            height={72}
            priority
            className="object-contain"
          />
        </Link>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className={linkCls}>
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/#contact"
              className="bg-brown px-4 py-2 font-condensed text-[13px] font-bold tracking-wide text-cream transition-colors hover:bg-rust"
            >
              Partner With Us →
            </Link>
          </li>
        </ul>

        {/* Mobile: CTA + hamburger */}
        <div className="flex items-center gap-3 md:hidden">
          <Link
            href="/#contact"
            className="bg-brown px-4 py-2 font-condensed text-[13px] font-bold tracking-wide text-cream transition-colors hover:bg-rust"
          >
            Partner →
          </Link>
          <button
            onClick={() => setMobileOpen((o) => !o)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            className="flex h-8 w-8 flex-col items-center justify-center gap-[5px] text-brown"
          >
            {mobileOpen ? (
              <>
                <span className="block h-px w-5 translate-y-[3px] rotate-45 bg-current" />
                <span className="block h-px w-5 -translate-y-[3px] -rotate-45 bg-current" />
              </>
            ) : (
              <>
                <span className="block h-px w-5 bg-current" />
                <span className="block h-px w-5 bg-current" />
                <span className="block h-px w-5 bg-current" />
              </>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      {mobileOpen && (
        <nav
          aria-label="Mobile navigation"
          className="border-t border-parchment bg-paper px-6 py-4 md:hidden"
        >
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={linkCls}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </motion.nav>
  );
}

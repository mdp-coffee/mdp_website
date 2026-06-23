"use client";

import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "#story", label: "The Story" },
  { href: "#clients", label: "Clients" },
  { href: "#formats", label: "What We Do" },
];

export function NavBar() {
  return (
    <nav
      className="fixed inset-x-0 top-0 z-50 flex h-16 items-center justify-between border-b border-[#F0E8D8] bg-white px-6 md:px-14"
      aria-label="Main navigation"
    >
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

      <ul className="hidden items-center gap-10 md:flex">
        {navLinks.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="font-condensed text-[13px] tracking-wide text-brown/50 transition-colors hover:text-brown"
            >
              {link.label}
            </a>
          </li>
        ))}
        <li>
          <a
            href="#contact"
            className="bg-brown px-4 py-2 font-condensed text-[13px] font-bold tracking-wide text-cream transition-colors hover:bg-rust"
          >
            Partner With Us →
          </a>
        </li>
      </ul>

      {/* Mobile CTA pill */}
      <a
        href="#contact"
        className="bg-brown px-4 py-2 font-condensed text-[13px] font-bold tracking-wide text-cream transition-colors hover:bg-rust md:hidden"
      >
        Partner →
      </a>
    </nav>
  );
}

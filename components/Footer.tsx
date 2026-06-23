import Image from "next/image";
import { siteConfig } from "@/content/site";

const footerLinks = {
  story: [
    { label: "India at work", href: "#hero" },
    { label: "Our story", href: "#story" },
    { label: "Our clients", href: "#clients" },
  ],
  work: [
    { label: "Partner with us", href: "#contact" },
    { label: "What we do", href: "#formats" },
  ],
};

export function Footer() {
  return (
    <footer className="grainy grainy-dark bg-[#411915] px-6 py-16 md:px-20">
      <div className="grid grid-cols-1 gap-12 border-b border-cream/10 pb-12 md:grid-cols-3">
        <div>
          <Image
            src="/images/MDP Logo PNG.png"
            alt="MDP Coffee House"
            width={80}
            height={80}
            className="object-contain"
          />
          <p className="mt-4 max-w-xs font-serif text-cream/35">
            &ldquo;We&rsquo;ve shown up every morning since 2005. We&rsquo;ll
            see you tomorrow.&rdquo;
          </p>
          <address className="mt-6 font-sans text-sm not-italic leading-loose text-cream/35">
            {siteConfig.address}
            <br />
            <a href={`tel:${siteConfig.phone[0]}`} className="hover:text-cream">
              {siteConfig.phone[0]}
            </a>
            <br />
            <a href={`mailto:${siteConfig.email}`} className="hover:text-cream">
              {siteConfig.email}
            </a>
          </address>
        </div>

        <nav aria-label="Footer — story">
          <h3 className="font-condensed text-[10px] uppercase tracking-[0.2em] text-gold/60">
            The Story
          </h3>
          <ul className="mt-4 space-y-3">
            {footerLinks.story.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="font-sans text-sm text-cream/40 hover:text-cream"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Footer — work with us">
          <h3 className="font-condensed text-[10px] uppercase tracking-[0.2em] text-gold/60">
            Work With Us
          </h3>
          <ul className="mt-4 space-y-3">
            {footerLinks.work.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="font-sans text-sm text-cream/40 hover:text-cream"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="flex flex-col items-start justify-between gap-4 pt-8 text-xs text-cream/20 md:flex-row md:items-center">
        <span>
          © {new Date().getFullYear()} MDP Coffee House · Bengaluru, India ·
          Since {siteConfig.founded}
        </span>
      </div>
    </footer>
  );
}

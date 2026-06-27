import Link from "next/link";
import Image from "next/image";
import { siteConfig, whatsappLink } from "@/content/site";
import { RevealOnScroll } from "@/components/RevealOnScroll";

const company = [
  { label: "About Us", href: "/about", isRoute: true },
  { label: "Our Clients", href: "/clients", isRoute: true },
  { label: "Gallery", href: "/gallery", isRoute: true },
  { label: "Blog", href: "/blog", isRoute: true },
  { label: "FAQ", href: "/faq", isRoute: true },
];

const services = [
  { label: "Corporate Kiosks", href: "/#formats", isRoute: false },
  { label: "QSR Restaurants", href: "/#formats", isRoute: false },
  { label: "Mobile Carts", href: "/#formats", isRoute: false },
  { label: "24/7 Tuck Shops", href: "/#formats", isRoute: false },
  { label: "Partner With Us", href: "/#contact", isRoute: false },
];

const locations = [
  { label: "Bengaluru", href: "/locations/bengaluru", isRoute: true },
  { label: "Hyderabad", href: "/locations/hyderabad", isRoute: true },
  { label: "Mumbai", href: "/locations/mumbai", isRoute: true },
  { label: "Pune", href: "/locations/pune", isRoute: true },
  { label: "Chennai", href: "/locations/chennai", isRoute: true },
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
  const cls = "font-sans text-sm text-cream/40 hover:text-cream transition-colors";
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

export function Footer() {
  return (
    <footer className="grainy grainy-dark bg-[#411915] px-6 py-16 md:px-20">
      <div className="grid grid-cols-1 gap-12 border-b border-cream/10 pb-12 sm:grid-cols-2 lg:grid-cols-4">
        {/* Col 1 — Brand */}
        <RevealOnScroll delay={0}>
          <div>
            <Image
              src="/images/MDP Logo PNG.png"
              alt="MDP Coffee House"
              width={80}
              height={80}
              className="object-contain"
            />
            <p className="mt-4 max-w-xs font-sans text-sm text-cream/35">
              &ldquo;We&rsquo;ve shown up every morning since 2005. We&rsquo;ll
              see you tomorrow.&rdquo;
            </p>
            <address className="mt-6 font-sans text-sm not-italic leading-loose text-cream/35">
              {siteConfig.address}
              <br />
              <a
                href={`tel:${siteConfig.phone[0]}`}
                className="hover:text-cream transition-colors"
              >
                {siteConfig.phone[0]}
              </a>
              <br />
              <a
                href={`mailto:${siteConfig.email}`}
                className="hover:text-cream transition-colors"
              >
                {siteConfig.email}
              </a>
            </address>
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

        {/* Col 4 — Locations + Connect */}
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

            <nav aria-label="Footer — connect" className="mt-8">
              <h3 className="font-condensed text-[10px] uppercase tracking-[0.2em] text-gold/60">
                Connect
              </h3>
              <ul className="mt-4 space-y-3">
                <li>
                  <a
                    href={whatsappLink("Hi, I'd like to know more about MDP Coffee House. Could we connect?")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans text-sm text-cream/40 hover:text-cream transition-colors"
                  >
                    WhatsApp
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/company/mdpcoffeehouse"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans text-sm text-cream/40 hover:text-cream transition-colors"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="font-sans text-sm text-cream/40 hover:text-cream transition-colors"
                  >
                    Email Us
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </RevealOnScroll>
      </div>

      <RevealOnScroll delay={0.4}>
        <div className="flex flex-col items-start justify-between gap-4 pt-8 text-xs text-cream/20 md:flex-row md:items-center">
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

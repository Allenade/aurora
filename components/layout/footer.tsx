import Link from "next/link";
import {
  FOOTER_CONTACT,
  FOOTER_COPYRIGHT,
  FOOTER_SOCIAL_LINKS,
  FOOTER_URLS,
} from "@/lib/constants";
import { SiteContent, SiteShell } from "@/components/layout/site-shell";
import { cn } from "@/lib/utils";
import { AuroraLogo } from "./aurora-logo";
import { FooterNewsletter } from "./footer-newsletter";

const FOOTER_NAV_HEADING_CLASS =
  "font-sans text-sm font-semibold uppercase tracking-wide text-white lg:text-base";

const FOOTER_LINK_CLASS =
  "font-sans text-sm text-white/55 transition-colors hover:text-aurora-lime";

function SocialIcon({ name }: { name: string }) {
  if (name === "LinkedIn") {
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.114 20.452H3.56V9h3.554v11.452z" />
      </svg>
    );
  }

  if (name === "X") {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.451-6.231zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
      </svg>
    );
  }

  if (name === "GitHub") {
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.333-1.754-1.333-1.754-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    );
  }

  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

const Footer = () => {
  return (
    <footer id="contact" className="mt-auto scroll-mt-24 bg-[#121212] text-white">
      <SiteShell className="py-14 lg:py-16">
        <SiteContent>
          <div className="flex flex-col gap-12 xl:flex-row xl:justify-between xl:gap-16">
            <div className="shrink-0 xl:max-w-sm">
              <AuroraLogo variant="footer" />
              <FooterNewsletter />
              <div className="mt-8 space-y-2">
                <a
                  href={FOOTER_CONTACT.community.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block font-sans text-sm font-semibold uppercase tracking-wide text-aurora-lime transition-opacity hover:opacity-90"
                >
                  {FOOTER_CONTACT.community.label}
                </a>
                <p className="font-display text-sm font-bold uppercase tracking-wide text-white/80">
                  {FOOTER_CONTACT.tagline}
                </p>
              </div>
            </div>

            <div className="grid flex-1 grid-cols-2 gap-8 sm:grid-cols-4 sm:gap-6 lg:gap-10">
              {FOOTER_URLS.map((column) => (
                <div key={column.name} className="flex flex-col gap-4">
                  <h4 className={FOOTER_NAV_HEADING_CLASS}>{column.name}</h4>
                  <ul className="flex flex-col gap-3">
                    {column.routes.map((link) => (
                      <li key={link.name}>
                        <Link href={link.route} className={FOOTER_LINK_CLASS}>
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              <div className="flex flex-col gap-4">
                <h4 className={FOOTER_NAV_HEADING_CLASS}>Contact Us</h4>
                <div className="flex flex-col gap-3">
                  <a href={FOOTER_CONTACT.emailHref} className={FOOTER_LINK_CLASS}>
                    {FOOTER_CONTACT.email}
                  </a>

                  {FOOTER_CONTACT.phones.map((phone) => (
                    <a
                      key={phone.label}
                      href={phone.href}
                      className={FOOTER_LINK_CLASS}
                      target={phone.href.startsWith("http") ? "_blank" : undefined}
                      rel={
                        phone.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                    >
                      <span className="block text-white/35">{phone.label}</span>
                      <span>{phone.value}</span>
                    </a>
                  ))}

                  {FOOTER_CONTACT.websites.map((site) => (
                    <a
                      key={site.href}
                      href={site.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={FOOTER_LINK_CLASS}
                    >
                      {site.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </SiteContent>
      </SiteShell>

      <div className="border-t border-white/10">
        <SiteShell className="py-6">
          <SiteContent
            className={cn(
              "flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between",
            )}
          >
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
              <p className="font-sans text-sm font-medium text-white">
                Connect with Us
              </p>
              <div className="flex items-center gap-4">
                {FOOTER_SOCIAL_LINKS.map((social) => (
                  <a
                    key={`${social.name}-${social.href}`}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="text-white transition-colors hover:text-aurora-lime"
                  >
                    <SocialIcon name={social.name} />
                  </a>
                ))}
              </div>
            </div>

            <p className="font-sans text-sm text-white/45">{FOOTER_COPYRIGHT}</p>
          </SiteContent>
        </SiteShell>
      </div>
    </footer>
  );
};

export default Footer;

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { NAV_LINKS, LEGAL_LINKS, STOREFRONT_DEMO_URL } from "@/lib/site";
import { Logo } from "@/components/Logo";
import { CookieSettingsButton } from "@/components/CookieConsent";

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/40">
      <div className="container-page py-14">
        <div className="flex flex-col justify-between gap-10 md:flex-row">
          <div className="max-w-sm">
            <Logo variant="full" className="h-14 w-auto" />
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              A supplement program for healthcare practitioners — your own
              branded website, evidence-based protocols, and recurring revenue
              with zero cost, inventory, or fulfillment on your end.
            </p>
          </div>

          <div className="flex gap-16">
            <div>
              <h4 className="text-sm font-medium">Navigate</h4>
              <ul className="mt-4 space-y-3">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <a
                    href={STOREFRONT_DEMO_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Storefront Demo <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-medium">Legal</h4>
              <ul className="mt-4 space-y-3">
                {LEGAL_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <CookieSettingsButton className="text-sm text-muted-foreground transition-colors hover:text-foreground" />
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} PharmaBuilt. All rights reserved.</p>
          <p>
            These statements have not been evaluated by the FDA. Products are not
            intended to diagnose, treat, cure, or prevent any disease.
          </p>
        </div>
      </div>
    </footer>
  );
}

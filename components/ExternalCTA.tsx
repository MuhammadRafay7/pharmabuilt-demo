import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { CALENDLY_URL } from "@/lib/site";

type Variant = "primary" | "secondary" | "ghost";

const base =
  "inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2";

const variants: Record<Variant, string> = {
  primary:
    "bg-primary text-primary-foreground hover:opacity-90 shadow-sm hover:shadow-md",
  secondary:
    "border border-border bg-background text-foreground hover:bg-secondary",
  ghost: "text-foreground/70 hover:text-foreground underline-offset-4 hover:underline",
};

export function ExternalCTA({
  href,
  variant = "primary",
  children,
  className = "",
  showArrow = false,
}: {
  href: string;
  variant?: Variant;
  children: React.ReactNode;
  className?: string;
  showArrow?: boolean;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}
      {showArrow && <ArrowUpRight className="h-4 w-4" />}
    </a>
  );
}

/** The two canonical CTAs reused across pages. */
export function CTAGroup({
  className = "",
  primaryLabel = "Get a Call",
  secondaryLabel = "How Much You Earn",
}: {
  className?: string;
  primaryLabel?: string;
  secondaryLabel?: string;
}) {
  return (
    <div className={`flex flex-col gap-3 sm:flex-row ${className}`}>
      <ExternalCTA href={CALENDLY_URL} variant="primary">
        {primaryLabel}
      </ExternalCTA>
      <InternalCTA href="/earnings" variant="secondary">
        {secondaryLabel}
      </InternalCTA>
    </div>
  );
}

/** Internal navigation button (App Router). */
export function InternalCTA({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
}) {
  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}

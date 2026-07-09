"use client";

import { CDN_BASE, PARTNER_TENANTS } from "@/lib/site";

function LogoRow({ ariaHidden = false }: { ariaHidden?: boolean }) {
  return (
    <div
      className="flex shrink-0 items-center gap-16 pr-16"
      aria-hidden={ariaHidden}
    >
      {PARTNER_TENANTS.map(({ name, logo }) => (
        <div
          key={name}
          className="flex h-14 shrink-0 items-center justify-center"
          title={name}
        >
          {/* Real tenant logos served from the platform CDN */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`${CDN_BASE}/${logo}`}
            alt={`${name} logo`}
            className="max-h-12 w-auto max-w-[160px] object-contain opacity-60 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
            loading="lazy"
          />
        </div>
      ))}
    </div>
  );
}

export function PartnerCarousel() {
  return (
    <div className="marquee-mask relative w-full overflow-hidden">
      <div className="flex w-max animate-marquee">
        <LogoRow />
        <LogoRow ariaHidden />
      </div>
    </div>
  );
}

import Image from "next/image";

// Official PharmaBuilt logo assets (public/brand), sourced from the live
// platform CDN. `icon` is the capsule+leaf mark; `full` is the stacked lockup.
export function Logo({
  variant = "lockup",
  className = "",
}: {
  variant?: "lockup" | "icon" | "full";
  className?: string;
}) {
  if (variant === "full") {
    return (
      <Image
        src="/brand/pharmabuilt-logo.png"
        alt="PharmaBuilt — Engineered Healthspan"
        width={970}
        height={788}
        className={className}
        priority
      />
    );
  }

  if (variant === "icon") {
    return (
      <Image
        src="/brand/pharmabuilt-icon.png"
        alt="PharmaBuilt"
        width={606}
        height={450}
        className={className}
        priority
      />
    );
  }

  // Horizontal lockup: icon mark + wordmark, for headers.
  return (
    <span className="flex items-center gap-2.5">
      <Image
        src="/brand/pharmabuilt-icon.png"
        alt=""
        width={606}
        height={450}
        className="h-8 w-auto"
        priority
      />
      <span className="text-base font-semibold tracking-tight text-primary">
        PharmaBuilt
        <span className="text-brand-green"> Partners</span>
      </span>
    </span>
  );
}

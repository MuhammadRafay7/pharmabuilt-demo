import { Reveal } from "@/components/Reveal";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
}) {
  const alignment = align === "center" ? "mx-auto text-center" : "text-left";
  return (
    <Reveal className={`max-w-2xl ${alignment}`}>
      {eyebrow && (
        <span className="inline-block rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
          {eyebrow}
        </span>
      )}
      <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}

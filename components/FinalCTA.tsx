import { ExternalCTA } from "@/components/ExternalCTA";
import { Reveal } from "@/components/Reveal";
import { CALENDLY_URL } from "@/lib/site";

export function FinalCTA({
  title = "Ready to see your earning potential?",
  subtitle,
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="container-page py-20 sm:py-28">
      <Reveal>
        <div className="relative overflow-hidden rounded-2xl border border-border bg-primary px-6 py-16 text-center text-primary-foreground sm:px-16">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)",
              backgroundSize: "22px 22px",
            }}
          />
          <div className="relative">
            <h2 className="mx-auto max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
              {title}
            </h2>
            {subtitle && (
              <p className="mx-auto mt-4 max-w-xl text-primary-foreground/70">
                {subtitle}
              </p>
            )}
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <ExternalCTA
                href={CALENDLY_URL}
                variant="secondary"
                className="border-transparent bg-primary-foreground text-primary hover:bg-primary-foreground/90"
              >
                Schedule Your Free Call
              </ExternalCTA>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

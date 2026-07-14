import { Reveal } from "@/components/Reveal";

// Shared shell for the legal/policy pages (Privacy, Terms, Cookies).
export function LegalShell({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <section className="border-b border-border">
        <div className="container-page py-14 text-center sm:py-16">
          <Reveal>
            <span className="inline-block rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Legal
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mx-auto mt-5 max-w-2xl text-3xl font-semibold tracking-tight text-primary sm:text-4xl">
              {title}
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 text-sm text-muted-foreground">
              Last updated: {updated}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="container-page py-14 sm:py-16">
        <article className="legal-content mx-auto max-w-3xl">{children}</article>
      </section>
    </>
  );
}

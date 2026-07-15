import type { Metadata } from "next";
import { CalendarClock, ArrowUpRight, Mail, Phone } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { CALENDLY_URL, STOREFRONT_DEMO_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact — PharmaBuilt",
  description:
    "Get in touch with the PharmaBuilt team, or schedule a free 15-minute call.",
};

export default function ContactPage() {
  return (
    <>
      <section className="border-b border-border">
        <div className="container-page py-16 text-center sm:py-20">
          <Reveal>
            <span className="inline-block rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Contact
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mx-auto mt-5 max-w-2xl text-4xl font-semibold tracking-tight text-primary sm:text-5xl">
              Let&apos;s start the{" "}
              <span className="text-brand-green">conversation</span>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-5 max-w-xl text-lg text-muted-foreground">
              Book a free 15-minute call with our team, or reach us directly
              using the details below.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="container-page py-16 sm:py-20">
        <div className="grid items-start gap-8 lg:grid-cols-[1.3fr_1fr]">
          {/* What to expect */}
          <Reveal>
            <div className="rounded-2xl border border-border bg-card p-7 shadow-sm sm:p-9">
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                What to expect on your call
              </h2>
              <p className="mt-3 max-w-md text-muted-foreground">
                A quick, no-pressure intro call — here&apos;s how it goes.
              </p>
              <ul className="mt-8 space-y-6">
                {[
                  {
                    title: "We learn about your practice",
                    desc: "Tell us about your patient base and how you work today.",
                  },
                  {
                    title: "You see realistic projections",
                    desc: "We map out what the program could earn for your practice.",
                  },
                  {
                    title: "We plan your next steps",
                    desc: "Walk away with a clear path to your branded site — no commitment.",
                  },
                ].map((step, i) => (
                  <li key={step.title} className="flex gap-4">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary text-sm font-semibold text-primary-foreground">
                      {i + 1}
                    </span>
                    <div>
                      <h3 className="text-base font-semibold">{step.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                        {step.desc}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="flex h-full flex-col gap-6">
              {/* Schedule card */}
              <div className="relative overflow-hidden rounded-2xl border border-border bg-primary p-8 text-primary-foreground shadow-sm">
                <div
                  className="pointer-events-none absolute inset-0 opacity-[0.08]"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)",
                    backgroundSize: "22px 22px",
                  }}
                />
                <div className="relative">
                  <CalendarClock className="h-8 w-8" strokeWidth={1.5} />
                  <h3 className="mt-4 text-xl font-semibold">
                    Prefer to talk it through?
                  </h3>
                  <p className="mt-2 text-sm text-primary-foreground/70">
                    Book a free 15-minute call at a time that works for you.
                  </p>
                  <a
                    href={CALENDLY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center justify-center rounded-lg bg-primary-foreground px-6 py-3 text-sm font-medium text-primary transition-opacity hover:opacity-90"
                  >
                    Schedule a Call
                  </a>
                </div>
              </div>

              {/* Contact details */}
              <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-sm">
                    <Mail className="h-5 w-5 text-muted-foreground" strokeWidth={1.75} />
                    <span>support@pharmabuilt.com</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Phone className="h-5 w-5 text-muted-foreground" strokeWidth={1.75} />
                    <span>(833) 255-8654</span>
                  </div>
                </div>
                <div className="mt-6 border-t border-border pt-5">
                  <a
                    href={STOREFRONT_DEMO_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm font-medium hover:underline"
                  >
                    See a live storefront demo
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

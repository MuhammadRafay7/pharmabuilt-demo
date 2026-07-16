import type { Metadata } from "next";
import {
  FlaskConical,
  HeartPulse,
  ShieldCheck,
  Users,
  Sparkles,
  Target,
  Check,
} from "lucide-react";
import { CTAGroup } from "@/components/ExternalCTA";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { FinalCTA } from "@/components/FinalCTA";

export const metadata: Metadata = {
  title: "About — PharmaBuilt",
  description:
    "PharmaBuilt helps healthcare providers offer evidence-based supplements through their own branded storefront — with zero cost, inventory, or fulfillment. Learn about our mission and how we work.",
};

const VALUES = [
  {
    icon: FlaskConical,
    title: "Evidence First",
    desc: "Every protocol is grounded in published research — 366 clinical studies and counting. If the science isn't there, neither are we.",
  },
  {
    icon: HeartPulse,
    title: "Better Patient Outcomes",
    desc: "The program only works when patients feel the difference. Real results keep them reordering, month after month.",
  },
  {
    icon: ShieldCheck,
    title: "No Risk to Providers",
    desc: "No startup fees, no inventory, no fulfillment. We remove the financial risk so you can focus on care, not logistics.",
  },
  {
    icon: Users,
    title: "Built Around You",
    desc: "Your storefront carries your name and reputation. We stay in the background — you own the relationship with your patients.",
  },
];

const STATS = [
  { value: "366", label: "Clinical studies" },
  { value: "$$$", label: "Recurring partner profit" },
  { value: "$0", label: "Cost to get started" },
  { value: "100%", label: "White-labeled" },
];

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="bg-grid pointer-events-none absolute inset-0" />
        <div className="container-page relative py-16 text-center sm:py-24">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-1.5 text-xs font-medium text-muted-foreground">
              <Sparkles className="h-3.5 w-3.5" />
              About PharmaBuilt
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mx-auto mt-6 max-w-3xl text-4xl font-semibold leading-[1.1] tracking-tight text-primary sm:text-5xl">
              Engineered healthspan, delivered through{" "}
              <span className="text-brand-green">your practice</span>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              PharmaBuilt gives providers a turnkey way to offer
              evidence-based supplements under their own brand — without the cost,
              inventory, or fulfillment headaches of running a store.
            </p>
          </Reveal>
        </div>
      </section>

      {/* MISSION */}
      <section className="container-page py-20 sm:py-28">
        <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.1fr]">
          <Reveal>
            <div className="lg:sticky lg:top-24">
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
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-foreground/10">
                    <Target className="h-6 w-6" strokeWidth={1.75} />
                  </div>
                  <p className="mt-6 text-xs font-semibold uppercase tracking-wider text-primary-foreground/60">
                    Our mission
                  </p>
                  <p className="mt-3 text-xl font-semibold leading-snug">
                    Put the value of trusted health guidance back where it
                    belongs — with the provider.
                  </p>
                  <ul className="mt-6 space-y-2.5 border-t border-primary-foreground/15 pt-6">
                    {[
                      "Evidence-based protocols",
                      "Fully white-labeled",
                      "Zero inventory or fulfillment",
                    ].map((point) => (
                      <li
                        key={point}
                        className="flex items-center gap-2.5 text-sm text-primary-foreground/90"
                      >
                        <Check className="h-4 w-4 shrink-0 text-brand-green" strokeWidth={2.5} />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <div>
              <h3 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                Why we built PharmaBuilt
              </h3>
              <p className="mt-5 text-lg leading-relaxed text-foreground">
                Providers have always been the most trusted source of health
                guidance. Yet when it comes to the supplements they recommend, the
                value has historically flowed to retailers and manufacturers —
                never to the clinician who built the trust.
              </p>
              <div className="mt-4 space-y-4 text-base leading-relaxed text-muted-foreground">
                <p>
                  PharmaBuilt exists to change that. We handle the hard parts —
                  manufacturing clinically-backed formulations, building your branded
                  storefront, and automating fulfillment — so you can recommend
                  products with confidence and earn recurring revenue on every
                  reorder.
                </p>
              </div>
              <div className="mt-6 rounded-xl border-l-2 border-brand-green bg-secondary/40 px-5 py-4">
                <p className="text-base leading-relaxed text-foreground">
                  The result is a program that helps your patients achieve better
                  health outcomes while growing your practice revenues, all without
                  taking on the operational complexity and risk of running a
                  supplements business yourself.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* STATS */}
      <section className="border-y border-border bg-secondary/30">
        <div className="container-page py-16">
          <Reveal>
            <dl className="mx-auto grid max-w-4xl grid-cols-2 gap-x-6 gap-y-10 text-center sm:grid-cols-4">
              {STATS.map((stat) => (
                <div key={stat.label}>
                  <dt className="text-3xl font-semibold tabular-nums text-primary sm:text-4xl">
                    {stat.value}
                  </dt>
                  <dd className="mt-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    {stat.label}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      {/* VALUES */}
      <section className="container-page py-20 sm:py-28">
        <SectionHeading
          eyebrow="What We Believe"
          title={
            <>
              The principles behind{" "}
              <span className="text-brand-green">the program</span>
            </>
          }
          subtitle="A few things we hold to, whether you're our first partner or our thousandth."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {VALUES.map(({ icon: Icon, title, desc }, i) => (
            <Reveal key={title} delay={(i % 2) * 0.08}>
              <div className="h-full rounded-xl border border-border bg-card p-7 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-border bg-secondary">
                  <Icon className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <h3 className="mt-5 text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <CTAGroup
            className="mt-14 justify-center"
            secondaryLabel="How It Works"
            secondaryHref="/how-it-works"
          />
        </Reveal>
      </section>

      <FinalCTA subtitle="Book a free 15-minute call and we'll show you exactly how the program fits your practice." />
    </>
  );
}

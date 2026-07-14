import {
  CalendarClock,
  Globe,
  BadgeCheck,
  Repeat,
  Boxes,
  Zap,
  TrendingUp,
  ClipboardList,
  ShieldCheck,
  FlaskConical,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";
import { STOREFRONT_DEMO_URL } from "@/lib/site";
import { CTAGroup } from "@/components/ExternalCTA";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { PodcastEmbed } from "@/components/PodcastEmbed";
import { FinalCTA } from "@/components/FinalCTA";

const TRUST_BADGES = [
  { icon: FlaskConical, label: "366 Clinical Studies Backed" },
  { icon: ShieldCheck, label: "Always Free — No Cost, Ever" },
  { icon: BadgeCheck, label: "Fully White-Labelled" },
];

const STEPS = [
  { icon: CalendarClock, title: "Schedule a 15-min call", desc: "Book a quick intro to see if the program fits your practice." },
  { icon: Globe, title: "Your branded site — built free", desc: "A polished site with your name, ready for your patients, at no cost." },
  { icon: BadgeCheck, title: "Your own orders always free", desc: "Every order you place for yourself ships at no cost." },
  { icon: Repeat, title: "Earn on every recurring order", desc: "Passive, recurring revenue on each patient reorder." },
];

const BENEFITS = [
  { icon: Globe, title: "Your Branded Website", desc: "A premium, patient-ready site carrying your name and reputation." },
  { icon: FlaskConical, title: "Evidence-Based Protocols", desc: "Clinically-backed supplement protocols your patients can trust." },
  { icon: Boxes, title: "Zero Inventory Risk", desc: "No stock to buy, store, or manage — ever." },
  { icon: Zap, title: "Automated Fulfillment", desc: "Orders are picked, packed, and shipped for you." },
  { icon: TrendingUp, title: "Recurring Revenue", desc: "Earn on every reorder, month after month." },
  { icon: ClipboardList, title: "Patient-Ready Programs", desc: "Turn-ready programs designed for real clinical outcomes." },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="bg-grid pointer-events-none absolute inset-0" />
        <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-[36rem] max-w-full -translate-x-1/2 rounded-full bg-brand-green/10 blur-3xl" />
        <div className="container-page relative pb-16 pt-20 sm:pb-24 sm:pt-28">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-1.5 text-xs font-medium text-muted-foreground">
                <Sparkles className="h-3.5 w-3.5" />
                For healthcare practitioners
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="mt-6 text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl">
                <span className="text-primary">
                  Supplements That Earn Up to{" "}
                  <span className="relative whitespace-nowrap text-brand-green">
                    $100k
                    <span className="absolute -bottom-1 left-0 h-1 w-full rounded-full bg-brand-green/30" />
                  </span>{" "}
                  in Your First Year
                </span>
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                You receive a branded website with your name. Your first order is
                free. Every order after provides recurring revenue — with zero
                cost, inventory, or fulfillment on your end.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <CTAGroup className="mt-9 justify-center" />
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-5 text-sm text-muted-foreground">
                Curious what your patients would see?{" "}
                <a
                  href={STOREFRONT_DEMO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-medium text-primary underline-offset-4 hover:underline"
                >
                  See a live storefront demo
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </p>
            </Reveal>
          </div>

          {/* Trust badges */}
          <Reveal delay={0.2}>
            <div className="mx-auto mt-14 grid max-w-3xl grid-cols-1 gap-3 sm:grid-cols-3">
              {TRUST_BADGES.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center justify-center gap-2.5 rounded-lg border border-border bg-card px-4 py-3.5 text-sm font-medium shadow-sm"
                >
                  <Icon className="h-5 w-5 shrink-0 text-brand-green" strokeWidth={1.75} />
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* HOW IT WORKS TIMELINE */}
      <section className="border-t border-border bg-secondary/30">
        <div className="container-page py-20 sm:py-28">
          <SectionHeading
            eyebrow="How It Works"
            title={
              <>
                Four steps to recurring{" "}
                <span className="text-brand-green">revenue</span>
              </>
            }
            subtitle="From intro call to passive income — we handle the heavy lifting."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map(({ icon: Icon, title, desc }, i) => (
              <Reveal key={title} delay={i * 0.08}>
                <div className="relative h-full rounded-xl border border-border bg-card p-6 shadow-sm">
                  <span className="text-xs font-semibold text-muted-foreground">
                    STEP {i + 1}
                  </span>
                  <div className="mt-3 flex h-11 w-11 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                    <Icon className="h-5 w-5" strokeWidth={1.75} />
                  </div>
                  <h3 className="mt-4 text-base font-semibold">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT YOU GET */}
      <section className="container-page py-20 sm:py-28">
        <SectionHeading
          eyebrow="What You Get"
          title={
            <>
              <span className="text-brand-green">Everything</span> you need,
              nothing you don&apos;t
            </>
          }
          subtitle="A complete supplement program that runs itself — so you can focus on patients."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {BENEFITS.map(({ icon: Icon, title, desc }, i) => (
            <Reveal key={title} delay={(i % 3) * 0.08}>
              <div className="group h-full rounded-xl border border-border bg-card p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-border bg-secondary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
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
      </section>

      {/* PODCAST */}
      <PodcastEmbed />

      {/* FINAL CTA */}
      <FinalCTA subtitle="Book a free 15-minute call and we'll map out exactly what your practice could earn." />
    </>
  );
}

import type { Metadata } from "next";
import {
  CalendarClock,
  Globe,
  BadgeCheck,
  Repeat,
  Check,
} from "lucide-react";
import { CTAGroup } from "@/components/ExternalCTA";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { Faq, type FaqItem } from "@/components/Faq";
import { FinalCTA } from "@/components/FinalCTA";

export const metadata: Metadata = {
  title: "How It Works — PharmaBuilt",
  description:
    "From a 15-minute call to recurring revenue. See exactly how the PharmaBuilt Partner Program works, step by step.",
};

const STEPS = [
  {
    icon: CalendarClock,
    title: "Schedule a 15-min call",
    desc: "Book a short, no-pressure intro call. We learn about your practice and patient base, then show you what the program could look like for you — including realistic earning projections.",
    points: ["No commitment required", "Personalized walkthrough", "Straight answers on earnings"],
  },
  {
    icon: Globe,
    title: "We build your branded site",
    desc: "Our team designs and launches a premium, white-labeled website carrying your name and brand. It's patient-ready from day one — you don't write a line of code or touch a design tool.",
    points: ["Fully white-labeled", "Patient-ready protocols", "Launched for you"],
  },
  {
    icon: BadgeCheck,
    title: "Onboard to the Success Program",
    desc: "You and your staff receive an \"Easy Button\" process that improves your Standard of Care with science-based supplements.",
    points: ["250 page Mechanism of Action reference guide", "Structured Clinical Growth Platform", "Ongoing Updates and Staff Training"],
  },
  {
    icon: Repeat,
    title: "Earn on every recurring order",
    desc: "When your patients reorder, you earn — automatically. No inventory, no packing, no fulfillment. The revenue is recurring and compounds as your patient base grows.",
    points: ["Passive recurring income", "Automated fulfillment", "Scales with your practice"],
  },
];

const FAQ_ITEMS: FaqItem[] = [
  {
    q: "How much does it cost to join?",
    a: "It's always free. There's no cost — ever — to launch and run your branded site. The program is designed to remove financial risk entirely.",
  },
  {
    q: "Do I have to hold inventory or ship anything?",
    a: "No. Fulfillment is fully automated on our end. Products are picked, packed, and shipped directly to your patients — you never touch inventory or logistics.",
  },
  {
    q: "How do I actually earn money?",
    a: "You earn recurring revenue on every order your patients place through your branded site. As patients reorder month over month, that income compounds — with no additional work from you.",
  },
  {
    q: "Are the supplements clinically backed?",
    a: "Yes. The protocols are built on evidence-based formulations supported by 366 clinical studies, so you can recommend them to patients with confidence.",
  },
  {
    q: "How long does it take to get set up?",
    a: "Most providers are up and running shortly after their intro call. We handle the site build and configuration, so you can start recommending products almost immediately.",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      {/* HERO */}
      <section className="border-b border-border">
        <div className="container-page py-16 text-center sm:py-20">
          <Reveal>
            <span className="inline-block rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
              How It Works
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mx-auto mt-5 max-w-2xl text-4xl font-semibold tracking-tight text-primary sm:text-5xl">
              A program that{" "}
              <span className="text-brand-green">runs itself</span>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-5 max-w-xl text-lg text-muted-foreground">
              Four simple steps stand between you and recurring, passive revenue
              from supplements your patients already need.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <CTAGroup
              className="mt-8 justify-center"
              secondaryLabel="Talk to Us"
              secondaryHref="/contact"
            />
          </Reveal>
        </div>
      </section>

      {/* DETAILED STEPS */}
      <section className="container-page py-20 sm:py-24">
        <div className="space-y-6">
          {STEPS.map(({ icon: Icon, title, desc, points }, i) => (
            <Reveal key={title} delay={0.04}>
              <div className="grid items-start gap-6 rounded-2xl border border-border bg-card p-7 shadow-sm sm:grid-cols-[auto_1fr] sm:p-9">
                <div className="flex items-center gap-4 sm:flex-col sm:items-start">
                  <span className="text-sm font-semibold text-muted-foreground">
                    0{i + 1}
                  </span>
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                    <Icon className="h-6 w-6" strokeWidth={1.75} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{title}</h3>
                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                    {desc}
                  </p>
                  <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-2">
                    {points.map((p) => (
                      <li key={p} className="flex items-center gap-2 text-sm font-medium">
                        <Check className="h-4 w-4 shrink-0" strokeWidth={2.5} />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-border bg-secondary/30">
        <div className="container-page py-20 sm:py-24">
          <SectionHeading
            eyebrow="FAQ"
            title={
              <>
                Questions, <span className="text-brand-green">answered</span>
              </>
            }
            subtitle="Everything providers ask before their first call."
          />
          <div className="mt-12">
            <Faq items={FAQ_ITEMS} />
          </div>
        </div>
      </section>

      <FinalCTA
        title="Still have questions? Let's talk."
        subtitle="A 15-minute call is the fastest way to see if the program fits your practice."
      />
    </>
  );
}

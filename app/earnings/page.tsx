import type { Metadata } from "next";
import { cookies } from "next/headers";
import { Check } from "lucide-react";
import { ExternalCTA } from "@/components/ExternalCTA";
import { Reveal } from "@/components/Reveal";
import { EarningsCalculator } from "@/components/EarningsCalculator";
import { ProfitGrowthChart } from "@/components/ProfitGrowthChart";
import { FinalCTA } from "@/components/FinalCTA";
import { EarningsGate } from "@/components/EarningsGate";
import { CALENDLY_URL } from "@/lib/site";

// Unlisted, password-gated page — keep it out of search results.
export const metadata: Metadata = {
  title: "How Much You Earn — PharmaBuilt",
  description:
    "See exactly how much your practice can earn with the PharmaBuilt Partner Program — a high-margin, 30% recurring revenue stream with no inventory and no risk.",
  robots: { index: false, follow: false },
};

// The flyer's headline example: adding just 10 new patients per month.
const EXAMPLE = {
  patients: 10,
  subscription: 155,
  monthlyRevenue: 1550,
  monthlyProfit: 465,
  annualProfit: 5580,
};

const HERO_STATS = [
  { value: "30%", label: "Profit margin" },
  { value: "Recurring", label: "Every month" },
  { value: "$0", label: "Inventory cost" },
  { value: "No risk", label: "No startup fees" },
];

const BENEFITS = [
  "No startup fees",
  "No inventory",
  "No risk",
  "Just results",
];

function currency(n: number) {
  return n.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  });
}

export default function EarningsPage() {
  const unlocked = cookies().get("earnings_access")?.value === "granted";
  if (!unlocked) {
    return <EarningsGate />;
  }

  return (
    <>
      <section className="border-b border-border">
        <div className="container-page py-16 text-center sm:py-20">
          <Reveal>
            <span className="inline-block rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Practice Revenue Model
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mx-auto mt-5 max-w-2xl text-4xl font-semibold tracking-tight text-primary sm:text-5xl">
              How much you <span className="text-brand-green">earn</span>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-5 max-w-xl text-lg text-muted-foreground">
              The PharmaBuilt Partner Program creates a sustainable, high-margin
              recurring revenue stream — while helping your patients achieve
              better health. You earn 30% profit on every subscription.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <dl className="mx-auto mt-10 grid max-w-2xl grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-4">
              {HERO_STATS.map((stat) => (
                <div key={stat.label}>
                  <dt className="text-2xl font-semibold tabular-nums text-primary sm:text-3xl">
                    {stat.value}
                  </dt>
                  <dd className="mt-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    {stat.label}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      {/* Headline example — straight from the flyer */}
      <section className="container-page py-16 sm:py-20">
        <Reveal>
          <div className="mx-auto max-w-3xl rounded-2xl border border-border bg-card p-7 shadow-sm sm:p-9">
            <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
              Example · adding just {EXAMPLE.patients} new patients per month
            </p>
            <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-4">
              <div>
                <p className="text-xs text-muted-foreground">Avg. subscription</p>
                <p className="mt-1 text-xl font-semibold tabular-nums">
                  {currency(EXAMPLE.subscription)}
                </p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Monthly revenue</p>
                <p className="mt-1 text-xl font-semibold tabular-nums">
                  {currency(EXAMPLE.monthlyRevenue)}
                </p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Your 30% profit</p>
                <p className="mt-1 text-xl font-semibold tabular-nums">
                  {currency(EXAMPLE.monthlyProfit)}
                </p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Annual profit</p>
                <p className="mt-1 text-xl font-semibold tabular-nums text-primary">
                  {currency(EXAMPLE.annualProfit)}
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Interactive calculator */}
        <Reveal delay={0.05}>
          <div className="mt-12">
            <EarningsCalculator />
          </div>
        </Reveal>

        {/* Growth chart */}
        <Reveal delay={0.05}>
          <div className="mt-12">
            <ProfitGrowthChart />
          </div>
        </Reveal>

        {/* Benefits */}
        <Reveal delay={0.05}>
          <div className="mx-auto mt-12 flex max-w-3xl flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {BENEFITS.map((b) => (
              <span
                key={b}
                className="flex items-center gap-2 text-sm font-medium text-foreground"
              >
                <Check className="h-4 w-4 text-primary" />
                {b}
              </span>
            ))}
          </div>
        </Reveal>

        {/* CTA */}
        <Reveal delay={0.1}>
          <div className="mx-auto mt-12 flex max-w-xl flex-col items-center gap-4 text-center">
            <p className="text-sm text-muted-foreground">
              Want numbers tailored to your exact practice?
            </p>
            <ExternalCTA href={CALENDLY_URL} variant="primary">
              Get Your Personalized Report
            </ExternalCTA>
          </div>
        </Reveal>
      </section>

      <FinalCTA subtitle="Book a call and we'll build a personalized earning projection for your practice." />
    </>
  );
}

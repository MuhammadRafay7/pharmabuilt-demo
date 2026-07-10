"use client";

import { useState } from "react";
import { motion } from "framer-motion";

// Potential Profit Growth — mirrors the Practice Revenue Model flyer.
// Each new patient/month adds a $155 subscription at a 30% partner margin.
const SUBSCRIPTION = 155;
const MARGIN_RATE = 0.3;

const STEPS = [10, 20, 30, 40, 50].map((patients) => {
  const monthly = Math.round(patients * SUBSCRIPTION * MARGIN_RATE);
  return { patients, monthly, annual: monthly * 12 };
});

type View = "monthly" | "annual";

function currency(n: number) {
  return n.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  });
}

export function ProfitGrowthChart() {
  const [view, setView] = useState<View>("annual");

  const key = view === "annual" ? "annual" : "monthly";
  const suffix = view === "annual" ? "/yr" : "/mo";
  const max = Math.max(...STEPS.map((s) => s[key]));

  return (
    <div className="rounded-2xl border border-border bg-card p-7 shadow-sm sm:p-9">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h3 className="text-lg font-semibold">
            Potential {view} profit growth
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Showing your 30% profit{" "}
            <span className="font-medium text-foreground">
              {view === "annual" ? "per year" : "per month"}
            </span>
          </p>
        </div>

        {/* Monthly / Annual toggle */}
        <div className="inline-flex rounded-lg border border-border bg-secondary/60 p-1 text-sm">
          {(["monthly", "annual"] as View[]).map((v) => (
            <button
              key={v}
              type="button"
              onClick={() => setView(v)}
              className={`relative rounded-md px-4 py-1.5 font-medium capitalize transition-colors ${
                view === v
                  ? "text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {view === v && (
                <motion.span
                  layoutId="profit-view-pill"
                  className="absolute inset-0 rounded-md bg-primary"
                  transition={{ type: "spring", stiffness: 400, damping: 32 }}
                />
              )}
              <span className="relative">{v}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="mt-10 flex items-end justify-between gap-3 sm:gap-6">
        {STEPS.map((s, i) => {
          const value = s[key];
          const height = (value / max) * 100;
          return (
            <div key={s.patients} className="flex flex-1 flex-col items-center">
              <span className="mb-2 text-xs font-semibold tabular-nums sm:text-sm">
                {currency(value)}
                <span className="font-normal text-muted-foreground">{suffix}</span>
              </span>
              <div className="flex h-48 w-full items-end sm:h-56">
                <motion.div
                  layout
                  initial={{ height: 0 }}
                  animate={{ height: `${height}%` }}
                  transition={{ duration: 0.5, delay: i * 0.05, ease: "easeOut" }}
                  className="w-full rounded-t-md bg-gradient-to-t from-primary to-brand-green"
                />
              </div>
              <span className="mt-3 text-xs font-medium tabular-nums text-foreground">
                {s.patients}
              </span>
            </div>
          );
        })}
      </div>

      <p className="mt-4 text-center text-xs font-medium uppercase tracking-wider text-muted-foreground">
        New patients per month
      </p>

      <p className="mt-6 border-t border-border pt-6 text-xs text-muted-foreground">
        Based on a $155 average subscription at your 30% partner profit.
        Results will vary.
      </p>
    </div>
  );
}

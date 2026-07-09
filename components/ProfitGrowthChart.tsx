"use client";

import { motion } from "framer-motion";

// Potential Annual Profit Growth — mirrors the Practice Revenue Model flyer.
// Each new patient/month adds a $155 subscription at a 30% partner margin.
const SUBSCRIPTION = 155;
const MARGIN_RATE = 0.3;

const STEPS = [10, 20, 30, 40, 50].map((patients) => {
  const monthly = Math.round(patients * SUBSCRIPTION * MARGIN_RATE);
  return { patients, monthly, annual: monthly * 12 };
});

const MAX_ANNUAL = Math.max(...STEPS.map((s) => s.annual));

function currency(n: number) {
  return n.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  });
}

export function ProfitGrowthChart() {
  return (
    <div className="rounded-2xl border border-border bg-card p-7 shadow-sm sm:p-9">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h3 className="text-lg font-semibold">Potential annual profit growth</h3>
        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-sm bg-primary" /> Annual profit
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-sm bg-primary/40" /> Monthly profit
          </span>
        </div>
      </div>

      <div className="mt-10 flex items-end justify-between gap-3 sm:gap-6">
        {STEPS.map((s, i) => {
          const height = (s.annual / MAX_ANNUAL) * 100;
          return (
            <div key={s.patients} className="flex flex-1 flex-col items-center">
              <span className="mb-2 text-xs font-semibold tabular-nums sm:text-sm">
                {currency(s.annual)}
              </span>
              <div className="flex h-48 w-full items-end sm:h-56">
                <motion.div
                  initial={{ height: 0 }}
                  whileInView={{ height: `${height}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.08, ease: "easeOut" }}
                  className="relative w-full overflow-hidden rounded-t-md bg-primary"
                >
                  {/* Monthly portion shaded lighter at the base of the bar. */}
                  <div
                    className="absolute inset-x-0 bottom-0 bg-primary-foreground/25"
                    style={{ height: `${(s.monthly / s.annual) * 100}%` }}
                  />
                </motion.div>
              </div>
              <span className="mt-3 text-xs font-medium tabular-nums text-muted-foreground">
                {s.patients}/mo
              </span>
              <span className="text-[11px] tabular-nums text-muted-foreground/70">
                {currency(s.monthly)}/mo
              </span>
            </div>
          );
        })}
      </div>

      <p className="mt-8 text-xs text-muted-foreground">
        New patients per month · $155 average subscription · your 30% profit.
        Results will vary.
      </p>
    </div>
  );
}

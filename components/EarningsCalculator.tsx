"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";

// PharmaBuilt Partner Program economics, mirrored from the Practice Revenue Model:
// Partners earn 30% profit on every monthly subscription — recurring, no inventory.
const MARGIN_RATE = 0.3;

function currency(n: number) {
  return n.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  });
}

function Slider({
  label,
  value,
  min,
  max,
  step,
  onChange,
  format,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (v: number) => void;
  format: (v: number) => string;
}) {
  const pct = ((value - min) / (max - min)) * 100;
  return (
    <div>
      <div className="flex items-baseline justify-between">
        <label className="text-sm font-medium">{label}</label>
        <span className="text-lg font-semibold tabular-nums">{format(value)}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="mt-3 h-2 w-full cursor-pointer appearance-none rounded-full outline-none
          [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:appearance-none
          [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-primary
          [&::-webkit-slider-thumb]:shadow [&::-webkit-slider-thumb]:transition-transform
          [&::-webkit-slider-thumb]:hover:scale-110
          [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:border-0
          [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-primary"
        style={{
          background: `linear-gradient(to right, hsl(var(--primary)) ${pct}%, hsl(var(--secondary)) ${pct}%)`,
        }}
      />
    </div>
  );
}

export function EarningsCalculator() {
  // Defaults mirror the flyer's headline example: 10 new patients/mo at a $155 subscription.
  const [patients, setPatients] = useState(10);
  const [subscription, setSubscription] = useState(155);

  const monthlyRevenue = patients * subscription;
  const monthlyProfit = Math.round(monthlyRevenue * MARGIN_RATE);
  const annualProfit = monthlyProfit * 12;

  return (
    <div className="grid gap-6 lg:grid-cols-[1.1fr_1fr]">
      {/* Inputs */}
      <div className="rounded-2xl border border-border bg-card p-7 shadow-sm sm:p-9">
        <h3 className="text-lg font-semibold">Estimate your recurring profit</h3>
        <p className="mt-1 text-sm text-muted-foreground">
          You earn 30% on every subscription — every month, after month.
        </p>
        <div className="mt-8 space-y-8">
          <Slider
            label="New patients per month"
            value={patients}
            min={5}
            max={100}
            step={5}
            onChange={setPatients}
            format={(v) => `${v}`}
          />
          <Slider
            label="Avg. monthly subscription"
            value={subscription}
            min={50}
            max={400}
            step={5}
            onChange={setSubscription}
            format={currency}
          />
        </div>

        <div className="mt-8 flex items-center justify-between rounded-xl border border-border bg-secondary/60 px-4 py-3">
          <span className="text-sm text-muted-foreground">Monthly revenue</span>
          <span className="text-base font-semibold tabular-nums">
            {currency(monthlyRevenue)}
          </span>
        </div>
      </div>

      {/* Results */}
      <div className="relative overflow-hidden rounded-2xl border border-border bg-primary p-7 text-primary-foreground shadow-sm sm:p-9">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)",
            backgroundSize: "22px 22px",
          }}
        />
        <div className="relative">
          <div className="flex items-center gap-2 text-primary-foreground/70">
            <TrendingUp className="h-4 w-4" />
            <span className="text-xs font-medium uppercase tracking-wider">
              Your 30% recurring profit
            </span>
          </div>

          <div className="mt-6">
            <p className="text-sm text-primary-foreground/70">Per month</p>
            <motion.p
              key={monthlyProfit}
              initial={{ opacity: 0.4, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
              className="text-4xl font-semibold tabular-nums sm:text-5xl"
            >
              {currency(monthlyProfit)}
            </motion.p>
          </div>

          <div className="mt-8 border-t border-primary-foreground/15 pt-6">
            <p className="text-sm text-primary-foreground/70">Per year</p>
            <motion.p
              key={annualProfit}
              initial={{ opacity: 0.4, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
              className="text-3xl font-semibold tabular-nums sm:text-4xl"
            >
              {currency(annualProfit)}
            </motion.p>
          </div>

          <p className="mt-8 text-xs leading-relaxed text-primary-foreground/60">
            No startup fees. No inventory. No risk. Projections are estimates —
            actual results vary.
          </p>
        </div>
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";

// Practitioners earn recurring revenue on each patient reorder.
// Assumed monthly reorder rate and partner margin used purely for illustration.
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
  const [patients, setPatients] = useState(60);
  const [orderValue, setOrderValue] = useState(120);

  const monthly = Math.round(patients * orderValue * MARGIN_RATE);
  const yearly = monthly * 12;

  return (
    <div className="grid gap-6 lg:grid-cols-[1.1fr_1fr]">
      {/* Inputs */}
      <div className="rounded-2xl border border-border bg-card p-7 shadow-sm sm:p-9">
        <h3 className="text-lg font-semibold">Estimate your revenue</h3>
        <p className="mt-1 text-sm text-muted-foreground">
          Adjust the sliders to match your practice.
        </p>
        <div className="mt-8 space-y-8">
          <Slider
            label="Active patients on a program"
            value={patients}
            min={10}
            max={500}
            step={5}
            onChange={setPatients}
            format={(v) => `${v}`}
          />
          <Slider
            label="Average order value"
            value={orderValue}
            min={40}
            max={300}
            step={5}
            onChange={setOrderValue}
            format={currency}
          />
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
              Projected recurring revenue
            </span>
          </div>

          <div className="mt-6">
            <p className="text-sm text-primary-foreground/70">Per month</p>
            <motion.p
              key={monthly}
              initial={{ opacity: 0.4, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
              className="text-4xl font-semibold tabular-nums sm:text-5xl"
            >
              {currency(monthly)}
            </motion.p>
          </div>

          <div className="mt-8 border-t border-primary-foreground/15 pt-6">
            <p className="text-sm text-primary-foreground/70">Per year</p>
            <motion.p
              key={yearly}
              initial={{ opacity: 0.4, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
              className="text-3xl font-semibold tabular-nums sm:text-4xl"
            >
              {currency(yearly)}
            </motion.p>
          </div>

          <p className="mt-8 text-xs leading-relaxed text-primary-foreground/60">
            Projections are estimates. Actual results vary.
          </p>
        </div>
      </div>
    </div>
  );
}

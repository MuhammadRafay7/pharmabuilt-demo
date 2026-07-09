"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";

const FIELDS = [
  { name: "name", label: "Name", type: "text", placeholder: "Dr. Jane Doe" },
  { name: "email", label: "Email", type: "email", placeholder: "jane@practice.com" },
  { name: "phone", label: "Phone", type: "tel", placeholder: "(555) 123-4567" },
  { name: "practice", label: "Practice Name", type: "text", placeholder: "Meridian Wellness Clinic" },
] as const;

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    // Demo only — no backend. Show a confirmation state.
    e.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-border bg-card p-12 text-center shadow-sm">
        <CheckCircle2 className="h-12 w-12" strokeWidth={1.5} />
        <h3 className="mt-4 text-xl font-semibold">Thanks — we&apos;ll be in touch</h3>
        <p className="mt-2 max-w-sm text-sm text-muted-foreground">
          This is a demo form, so nothing was actually sent. To reach us right
          now, book a call using the button on the right.
        </p>
        <button
          onClick={() => setSent(false)}
          className="mt-6 text-sm font-medium underline underline-offset-4"
        >
          Back to form
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-border bg-card p-7 shadow-sm sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        {FIELDS.map((f) => (
          <div key={f.name} className={f.name === "practice" ? "sm:col-span-2" : ""}>
            <label htmlFor={f.name} className="text-sm font-medium">
              {f.label}
            </label>
            <input
              id={f.name}
              name={f.name}
              type={f.type}
              placeholder={f.placeholder}
              className="mt-2 w-full rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-ring focus:ring-2 focus:ring-ring/20"
            />
          </div>
        ))}
        <div className="sm:col-span-2">
          <label htmlFor="message" className="text-sm font-medium">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            placeholder="Tell us a little about your practice…"
            className="mt-2 w-full resize-none rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-ring focus:ring-2 focus:ring-ring/20"
          />
        </div>
      </div>

      <button
        type="submit"
        className="mt-6 inline-flex w-full items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-sm transition-all hover:opacity-90 hover:shadow-md sm:w-auto"
      >
        Send Message
      </button>
      <p className="mt-3 text-xs text-muted-foreground">
        This is a demo form and does not submit anywhere.
      </p>
    </form>
  );
}

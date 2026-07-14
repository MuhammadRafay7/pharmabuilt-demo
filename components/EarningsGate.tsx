"use client";

import { useFormState, useFormStatus } from "react-dom";
import { Lock } from "lucide-react";
import { unlockEarnings } from "@/app/earnings/actions";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="inline-flex items-center justify-center rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground shadow-sm transition-all hover:opacity-90 disabled:opacity-60"
    >
      {pending ? "Checking…" : "Unlock"}
    </button>
  );
}

/** Password gate shown in place of the (unlisted) earnings content. */
export function EarningsGate() {
  const [error, formAction] = useFormState(unlockEarnings, null);

  return (
    <section className="container-page flex min-h-[70vh] items-center justify-center py-20">
      <div className="w-full max-w-md rounded-2xl border border-border bg-card p-8 text-center shadow-sm">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-primary">
          <Lock className="h-5 w-5" strokeWidth={1.75} />
        </div>
        <h1 className="mt-5 text-2xl font-semibold tracking-tight">
          Private page
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          The earnings breakdown is shared privately with prospective partners.
          Enter the access password to continue.
        </p>

        <form action={formAction} className="mt-6 flex flex-col gap-3 text-left">
          <label htmlFor="password" className="sr-only">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            required
            autoFocus
            placeholder="Access password"
            className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm outline-none transition-colors focus-visible:ring-2 focus-visible:ring-ring"
          />
          {error && (
            <p className="text-sm font-medium text-destructive">{error}</p>
          )}
          <SubmitButton />
        </form>

        <p className="mt-5 text-xs text-muted-foreground">
          Don&apos;t have the password?{" "}
          <a href="/contact" className="font-medium text-foreground hover:underline">
            Request access
          </a>
        </p>
      </div>
    </section>
  );
}

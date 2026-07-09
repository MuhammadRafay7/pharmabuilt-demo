import type { Metadata } from "next";
import { ExternalCTA } from "@/components/ExternalCTA";
import { Reveal } from "@/components/Reveal";
import { EarningsCalculator } from "@/components/EarningsCalculator";
import { FinalCTA } from "@/components/FinalCTA";
import { CALENDLY_URL, PHARMABUILT_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Earnings — PharmaBuilt Partners",
  description:
    "Estimate the recurring revenue your practice could earn with the PharmaBuilt Partners program.",
};

export default function EarningsPage() {
  return (
    <>
      <section className="border-b border-border">
        <div className="container-page py-16 text-center sm:py-20">
          <Reveal>
            <span className="inline-block rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Earnings Calculator
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mx-auto mt-5 max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl">
              See your earning potential
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-5 max-w-xl text-lg text-muted-foreground">
              Move the sliders to model recurring revenue based on your patient
              base and average order value.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="container-page py-16 sm:py-20">
        <Reveal>
          <EarningsCalculator />
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mx-auto mt-12 flex max-w-xl flex-col items-center gap-4 text-center">
            <p className="text-sm text-muted-foreground">
              Want numbers tailored to your exact practice?
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <ExternalCTA href={CALENDLY_URL} variant="primary">
                Get Your Personalized Report
              </ExternalCTA>
              <ExternalCTA href={PHARMABUILT_URL} variant="secondary" showArrow>
                See Products at PharmaBuilt
              </ExternalCTA>
            </div>
          </div>
        </Reveal>
      </section>

      <FinalCTA subtitle="Book a call and we'll build a personalized earning projection for your practice." />
    </>
  );
}

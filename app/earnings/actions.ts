"use server";

import { cookies } from "next/headers";

// The earnings page is intentionally unlisted and password-gated. The password
// is read from the EARNINGS_PASSWORD env var (set in Vercel / .env.local); the
// fallback is only for local development and should be overridden in production.
const COOKIE = "earnings_access";
const EARNINGS_PASSWORD = process.env.EARNINGS_PASSWORD ?? "pharmabuilt";

export async function unlockEarnings(
  _prevError: string | null,
  formData: FormData
): Promise<string | null> {
  const password = String(formData.get("password") ?? "");

  if (password !== EARNINGS_PASSWORD) {
    return "Incorrect password. Please try again.";
  }

  cookies().set(COOKIE, "granted", {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/earnings",
    maxAge: 60 * 60 * 24 * 7, // 7 days
  });

  return null;
}

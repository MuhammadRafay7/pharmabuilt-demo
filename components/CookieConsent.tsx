"use client";

import { useEffect, useState } from "react";
import { Cookie, X } from "lucide-react";

const STORAGE_KEY = "pb_cookie_consent";
const OPEN_EVENT = "pb:open-cookie-settings";

type Prefs = { analytics: boolean; marketing: boolean };

/** Footer control that re-opens the cookie preferences panel. */
export function CookieSettingsButton({ className = "" }: { className?: string }) {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event(OPEN_EVENT))}
      className={className}
    >
      Cookie Settings
    </button>
  );
}

function Toggle({
  checked,
  onChange,
  disabled = false,
  label,
}: {
  checked: boolean;
  onChange?: (v: boolean) => void;
  disabled?: boolean;
  label: string;
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={label}
      disabled={disabled}
      onClick={() => onChange?.(!checked)}
      className={`relative inline-flex h-5 w-9 shrink-0 items-center rounded-full transition-colors ${
        checked ? "bg-primary" : "bg-border"
      } ${disabled ? "cursor-not-allowed opacity-60" : ""}`}
    >
      <span
        className={`inline-block h-4 w-4 transform rounded-full bg-white shadow transition-transform ${
          checked ? "translate-x-4" : "translate-x-0.5"
        }`}
      />
    </button>
  );
}

/**
 * Complianz-style cookie consent. Shows a banner on first visit; lets visitors
 * accept all, decline non-essential, or customize categories. The choice is
 * stored in localStorage and can be revisited via the footer "Cookie Settings".
 */
export function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [showPrefs, setShowPrefs] = useState(false);
  const [analytics, setAnalytics] = useState(true);
  const [marketing, setMarketing] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) setVisible(true);

    const open = () => {
      const s = localStorage.getItem(STORAGE_KEY);
      if (s) {
        try {
          const p = JSON.parse(s) as Prefs;
          setAnalytics(!!p.analytics);
          setMarketing(!!p.marketing);
        } catch {
          /* ignore malformed value */
        }
      }
      setShowPrefs(true);
      setVisible(true);
    };

    window.addEventListener(OPEN_EVENT, open);
    return () => window.removeEventListener(OPEN_EVENT, open);
  }, []);

  const persist = (prefs: Prefs) => {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ essential: true, ...prefs, timestamp: new Date().toISOString() })
    );
    document.cookie = `pb_cookie_consent=1; path=/; max-age=${60 * 60 * 24 * 365}; samesite=lax`;
    setVisible(false);
    setShowPrefs(false);
  };

  const acceptAll = () => persist({ analytics: true, marketing: true });
  const declineAll = () => persist({ analytics: false, marketing: false });
  const savePrefs = () => persist({ analytics, marketing });

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-[60] p-4 sm:left-auto sm:right-4 sm:w-full sm:max-w-md">
      <div className="rounded-2xl border border-border bg-card p-6 shadow-lg">
        <div className="flex items-start gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary text-primary">
            <Cookie className="h-5 w-5" strokeWidth={1.75} />
          </div>
          <div className="min-w-0">
            <h2 className="text-sm font-semibold">We value your privacy</h2>
            <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
              We use cookies to run our site, analyze traffic, and improve your
              experience. You can accept all, decline non-essential, or choose
              which categories to allow. See our{" "}
              <a
                href="/cookies"
                className="font-medium text-primary underline underline-offset-2"
              >
                Cookie Policy
              </a>
              .
            </p>
          </div>
          {!showPrefs && (
            <button
              type="button"
              aria-label="Dismiss"
              onClick={declineAll}
              className="ml-auto -mr-1 -mt-1 rounded-md p-1 text-muted-foreground hover:text-foreground"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>

        {showPrefs && (
          <div className="mt-5 space-y-3 border-t border-border pt-4">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-semibold">Essential</p>
                <p className="text-[11px] text-muted-foreground">
                  Required for the site to function. Always on.
                </p>
              </div>
              <Toggle checked disabled label="Essential cookies" />
            </div>
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-semibold">Analytics</p>
                <p className="text-[11px] text-muted-foreground">
                  Helps us understand how the site is used.
                </p>
              </div>
              <Toggle
                checked={analytics}
                onChange={setAnalytics}
                label="Analytics cookies"
              />
            </div>
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-semibold">Marketing</p>
                <p className="text-[11px] text-muted-foreground">
                  Used to personalize and measure campaigns.
                </p>
              </div>
              <Toggle
                checked={marketing}
                onChange={setMarketing}
                label="Marketing cookies"
              />
            </div>
          </div>
        )}

        <div className="mt-5 flex flex-col gap-2 sm:flex-row">
          <button
            type="button"
            onClick={acceptAll}
            className="inline-flex flex-1 items-center justify-center rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground shadow-sm transition-opacity hover:opacity-90"
          >
            Accept all
          </button>
          {showPrefs ? (
            <button
              type="button"
              onClick={savePrefs}
              className="inline-flex flex-1 items-center justify-center rounded-lg border border-border bg-background px-4 py-2.5 text-sm font-medium transition-colors hover:bg-secondary"
            >
              Save preferences
            </button>
          ) : (
            <button
              type="button"
              onClick={declineAll}
              className="inline-flex flex-1 items-center justify-center rounded-lg border border-border bg-background px-4 py-2.5 text-sm font-medium transition-colors hover:bg-secondary"
            >
              Decline
            </button>
          )}
        </div>

        {!showPrefs && (
          <button
            type="button"
            onClick={() => setShowPrefs(true)}
            className="mt-3 w-full text-center text-xs font-medium text-muted-foreground underline underline-offset-4 hover:text-foreground"
          >
            Customize
          </button>
        )}
      </div>
    </div>
  );
}

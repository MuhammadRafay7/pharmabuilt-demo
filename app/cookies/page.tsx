import type { Metadata } from "next";
import { LegalShell } from "@/components/LegalShell";

export const metadata: Metadata = {
  title: "Cookie Policy — PharmaBuilt",
  description:
    "How PharmaBuilt uses cookies and similar technologies, and how you can control them.",
};

export default function CookiesPage() {
  return (
    <LegalShell title="Cookie Policy" updated="July 14, 2026">
      <h2>Introduction</h2>
      <p>
        This Cookie Policy explains how PharmaBuilt uses cookies and similar
        technologies to recognize you when you visit our website. It explains what
        these technologies are and why we use them, as well as your rights to
        control our use of them.
      </p>

      <h2>What Are Cookies?</h2>
      <p>
        Cookies are small data files that are placed on your computer or mobile
        device when you visit a website. Cookies are widely used by website owners
        to make their websites work, or to work more efficiently, as well as to
        provide reporting information.
      </p>
      <p>
        Cookies set by the website owner (in this case, us) are called
        &ldquo;first-party cookies.&rdquo; Cookies set by parties other than the
        website owner are called &ldquo;third-party cookies.&rdquo; Third-party
        cookies enable features or functionality to be provided on or through the
        website (such as analytics).
      </p>

      <h2>Types of Cookies We Use</h2>
      <h3>Essential Cookies</h3>
      <p>
        Essential cookies are necessary for the website to function properly. They
        enable basic functions like page navigation and access to secure areas of
        the website. The website cannot function properly without these cookies,
        and they cannot be disabled. These cookies do not store any personally
        identifiable information.
      </p>
      <h3>Analytical / Performance Cookies</h3>
      <p>
        We may use analytics tools to help us understand how visitors interact
        with our website — how many visitors we have and how they move around the
        site. This helps us improve the way our website works. The information
        collected through these cookies is aggregated and anonymous; it does not
        identify you personally.
      </p>
      <h3>Marketing Cookies</h3>
      <p>
        Marketing cookies may be used to deliver content and measure the
        effectiveness of our campaigns. You can decline these at any time through
        the cookie banner or your browser settings.
      </p>

      <h2>How Can You Control Cookies?</h2>
      <p>
        When you first visit our site, you can accept or decline non-essential
        cookies through our cookie consent banner. You can change your choice at
        any time using the &ldquo;Cookie Settings&rdquo; link in the footer.
      </p>
      <p>
        Most web browsers also automatically accept cookies, but you can usually
        modify your browser settings to decline cookies if you prefer. However,
        this may prevent you from taking full advantage of the website. You can
        learn more about cookies at{" "}
        <a href="http://www.allaboutcookies.org/" target="_blank" rel="noopener noreferrer">
          allaboutcookies.org
        </a>
        .
      </p>

      <h2>Updates to This Cookie Policy</h2>
      <p>
        We may update this Cookie Policy from time to time to reflect changes in
        technology, regulation, or our business practices. Any changes will become
        effective when we post the revised Cookie Policy on our website.
      </p>

      <h2>Contact Us</h2>
      <p>
        If you have any questions about our use of cookies or this Cookie Policy,
        please contact us at{" "}
        <a href="mailto:support@pharmabuilt.com">support@pharmabuilt.com</a>.
      </p>
    </LegalShell>
  );
}

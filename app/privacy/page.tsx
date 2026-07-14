import type { Metadata } from "next";
import { LegalShell } from "@/components/LegalShell";

export const metadata: Metadata = {
  title: "Privacy Policy — PharmaBuilt",
  description:
    "How PharmaBuilt collects, uses, and protects your personal information.",
};

export default function PrivacyPage() {
  return (
    <LegalShell title="Privacy Policy" updated="July 14, 2026">
      <h2>Introduction</h2>
      <p>
        PharmaBuilt (&ldquo;PharmaBuilt,&rdquo; &ldquo;we,&rdquo;
        &ldquo;us,&rdquo; and &ldquo;our&rdquo;) respects your privacy and is
        committed to protecting your personal information. This Privacy Policy
        explains how we collect, use, disclose, and safeguard your information
        when you visit our website or engage with the PharmaBuilt Partner
        Program.
      </p>
      <p>
        Please read this Privacy Policy carefully. By accessing or using our
        website, you acknowledge that you have read, understood, and agree to be
        bound by all the terms outlined in this Privacy Policy.
      </p>

      <h2>Information We Collect</h2>
      <h3>Personal Information</h3>
      <p>
        We may collect personal information that you voluntarily provide to us
        when you:
      </p>
      <ul>
        <li>Submit a contact or partnership inquiry</li>
        <li>Book an introductory call</li>
        <li>Create an account or storefront</li>
        <li>Subscribe to our communications</li>
      </ul>
      <p>This information may include:</p>
      <ul>
        <li>Name</li>
        <li>Email address</li>
        <li>Phone number</li>
        <li>Practice or business details</li>
        <li>Billing and shipping address</li>
        <li>Payment information (processed by Stripe)</li>
      </ul>

      <h3>Automatically Collected Information</h3>
      <p>
        When you visit our website, we may automatically collect certain
        information about your device, including:
      </p>
      <ul>
        <li>IP address</li>
        <li>Browser type</li>
        <li>Operating system</li>
        <li>Browsing actions and patterns</li>
        <li>Referring websites</li>
      </ul>

      <h2>How We Use Your Information</h2>
      <p>We may use the information we collect for various purposes, including to:</p>
      <ul>
        <li>Respond to your inquiries and provide support</li>
        <li>Set up and operate your branded storefront</li>
        <li>Process and fulfill orders</li>
        <li>Communicate with you about your account and the program</li>
        <li>Send marketing communications (with your consent)</li>
        <li>Improve our website and offerings</li>
        <li>Protect against fraudulent transactions and security risks</li>
      </ul>

      <h2>Third-Party Service Providers</h2>
      <h3>Payment Processing</h3>
      <p>
        We use Stripe for payment processing. When you provide payment
        information, you are providing it directly to Stripe, and their privacy
        policy applies to that information. We encourage you to review Stripe&apos;s
        Privacy Policy at{" "}
        <a href="https://stripe.com/privacy" target="_blank" rel="noopener noreferrer">
          https://stripe.com/privacy
        </a>
        .
      </p>
      <h3>Website Analytics</h3>
      <p>
        We may use analytics tools to help us understand how users engage with
        our website. These tools collect information automatically and may use
        cookies or similar technologies. See our{" "}
        <a href="/cookies">Cookie Policy</a> for more detail.
      </p>

      <h2>Cookies</h2>
      <p>
        Our website uses cookies to enhance your browsing experience. You can set
        your browser to refuse all or some browser cookies, or to alert you when
        cookies are being sent. For more information, see our{" "}
        <a href="/cookies">Cookie Policy</a>.
      </p>

      <h2>Data Security</h2>
      <p>
        We have implemented measures designed to secure your personal information
        from accidental loss and unauthorized access, use, alteration, and
        disclosure. However, the transmission of information via the internet is
        not completely secure, and we cannot guarantee the security of your
        personal information.
      </p>

      <h2>Data Sharing</h2>
      <ul>
        <li>
          Customer data is not shared with third parties for promotional or
          marketing purposes.
        </li>
        <li>
          Mobile opt-in and consent are never shared with anyone for any purpose.
          Any information sharing that may be mentioned elsewhere in this policy
          excludes mobile opt-in data.
        </li>
      </ul>

      <h2>Your Rights</h2>
      <p>
        Depending on your location, you may have certain rights regarding your
        personal information, including:
      </p>
      <ul>
        <li>The right to access your personal information</li>
        <li>The right to correct inaccurate personal information</li>
        <li>The right to request deletion of your personal information</li>
        <li>The right to opt out of marketing communications</li>
      </ul>
      <p>
        To exercise these rights, please contact us using the information in the
        &ldquo;Contact Us&rdquo; section below.
      </p>

      <h2>California Residents</h2>
      <p>
        If you are a California resident, you have specific rights under the
        California Consumer Privacy Act (CCPA) regarding your personal
        information. For more information about these rights and how to exercise
        them, please contact us.
      </p>

      <h2>Changes to This Privacy Policy</h2>
      <p>
        We may update our Privacy Policy from time to time. The updated version
        will be indicated by an updated &ldquo;Last Updated&rdquo; date. We
        encourage you to review this Privacy Policy periodically for any changes.
      </p>

      <h2>Contact Us</h2>
      <p>
        If you have any questions about this Privacy Policy or our privacy
        practices, please contact us at{" "}
        <a href="mailto:support@pharmabuilt.com">support@pharmabuilt.com</a>.
      </p>
    </LegalShell>
  );
}

import type { Metadata } from "next";
import { LegalShell } from "@/components/LegalShell";

export const metadata: Metadata = {
  title: "Terms of Use — PharmaBuilt",
  description:
    "The terms that govern your use of the PharmaBuilt website and program.",
};

export default function TermsPage() {
  return (
    <LegalShell title="Terms of Use" updated="July 14, 2026">
      <h2>Introduction</h2>
      <p>
        Welcome to PharmaBuilt. These Terms of Use govern your use of our website
        and participation in the PharmaBuilt Partner Program. By accessing our
        website or engaging with our services, you agree to be bound by these
        Terms of Use. Please read them carefully.
      </p>

      <h2>Definitions</h2>
      <ul>
        <li>
          &ldquo;Company,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; and
          &ldquo;our&rdquo; refer to PharmaBuilt.
        </li>
        <li>
          &ldquo;Website&rdquo; refers to our website and all related webpages.
        </li>
        <li>
          &ldquo;Product&rdquo; refers to any nutritional supplement or health
          product offered through the program.
        </li>
        <li>
          &ldquo;User,&rdquo; &ldquo;you,&rdquo; and &ldquo;your&rdquo; refer to
          the person accessing or using our Website or services.
        </li>
      </ul>

      <h2>Account Registration</h2>
      <p>
        To participate in the program, you may create an account. When you create
        an account, you agree to:
      </p>
      <ol>
        <li>Provide accurate, current, and complete information</li>
        <li>Maintain and promptly update your account information</li>
        <li>
          Keep your account password confidential and be responsible for all
          activities under your account
        </li>
        <li>Notify us immediately of any unauthorized use of your account</li>
      </ol>
      <p>
        We reserve the right to terminate or suspend your account at our sole
        discretion, without notice, for conduct that we believe violates these
        Terms of Use or is harmful to other users, us, or third parties.
      </p>

      <h2>Products and Purchases</h2>
      <h3>Product Information</h3>
      <p>
        We strive to display our Products and their features accurately. However,
        we do not guarantee that Product descriptions, images, or other content
        are accurate, complete, reliable, current, or error-free.
      </p>
      <h3>Ordering and Payment</h3>
      <p>
        When an order is placed, it constitutes an offer to purchase the Product
        at the price and terms indicated. We may accept or decline any order for
        any reason. After we receive an order, we will send a confirmation email
        with the order details.
      </p>
      <h3>Shipping and Delivery</h3>
      <p>
        We will arrange for the shipment of Products to the address provided.
        Shipping and delivery dates are estimates only and cannot be guaranteed.
        We are not liable for any delays in shipments.
      </p>
      <h3>Product Disclaimer</h3>
      <p>
        Our Products are nutritional supplements and are not intended to diagnose,
        treat, cure, or prevent any disease. The statements made about our
        Products have not been evaluated by the Food and Drug Administration. You
        are responsible for reading all labels, warnings, and directions before
        use, and for consulting a healthcare professional where appropriate.
      </p>

      <h2>Intellectual Property</h2>
      <p>
        The PharmaBuilt brand, logo, and all related content, features, and
        functionality on our Website — including but not limited to text,
        graphics, designs, and code — are owned by us and are protected by United
        States and international copyright, trademark, patent, trade secret, and
        other intellectual property laws. You may not use these marks without our
        prior written permission.
      </p>
      <p>
        We grant you a limited, non-exclusive, non-transferable, revocable license
        to access and use our Website for its intended purpose. This license does
        not include modifying or copying our Website, using it for any
        unauthorized commercial purpose, reverse engineering any software, or
        removing any proprietary notices.
      </p>

      <h2>User Conduct</h2>
      <p>You agree not to:</p>
      <ol>
        <li>Use our Website in any way that violates any applicable law or regulation</li>
        <li>Impersonate another person or entity</li>
        <li>
          Engage in any conduct that restricts or inhibits anyone&apos;s use or
          enjoyment of the Website
        </li>
        <li>Attempt to gain unauthorized access to any part of the Website</li>
        <li>Use the Website to distribute unsolicited promotional content</li>
      </ol>

      <h2>Disclaimer of Warranties</h2>
      <p>
        Our Website and Products are provided &ldquo;as is&rdquo; and &ldquo;as
        available&rdquo; without any warranties of any kind, either express or
        implied, including but not limited to warranties of merchantability,
        fitness for a particular purpose, and non-infringement.
      </p>

      <h2>Limitation of Liability</h2>
      <p>
        In no event shall we be liable for any indirect, incidental, special,
        consequential, or punitive damages, including loss of profits, data, or
        business opportunities, whether based on contract, tort, strict liability,
        or any other legal theory, even if we have been advised of the
        possibility of such damages.
      </p>

      <h2>Indemnification</h2>
      <p>
        You agree to defend, indemnify, and hold us harmless from and against any
        claims, liabilities, damages, judgments, awards, losses, costs, expenses,
        or fees (including reasonable attorneys&apos; fees) arising out of or
        relating to your violation of these Terms of Use or your use of the
        Website.
      </p>

      <h2>Governing Law</h2>
      <p>
        These Terms of Use shall be governed by and construed in accordance with
        the laws of the United States and the state where our principal place of
        business is located, without regard to its conflict of law provisions.
      </p>

      <h2>Changes to Terms of Use</h2>
      <p>
        We may revise these Terms of Use at any time without notice. By continuing
        to use our Website after such revisions are made, you agree to be bound by
        the revised terms.
      </p>

      <h2>Contact Us</h2>
      <p>
        If you have any questions about these Terms of Use, please contact us at{" "}
        <a href="mailto:partners@pharmabuilt.com">partners@pharmabuilt.com</a>.
      </p>
    </LegalShell>
  );
}

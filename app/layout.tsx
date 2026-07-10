import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "PharmaBuilt Partners — Supplements That Earn",
  description:
    "A supplement program for healthcare practitioners. Your own branded website, evidence-based protocols, and recurring revenue with zero cost, inventory, or fulfillment.",
  icons: {
    icon: "/brand/pharmabuilt-favicon.jpg",
  },
};

export const viewport: Viewport = {
  themeColor: "#1a3d8f",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen font-sans">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

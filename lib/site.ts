// Central config for external links and shared content used across the demo site.

export const CALENDLY_URL =
  "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2DG3lSFzZTufdLTI6vjFr8yLMdZ39xQc_Xg4r_CuAfrYUMq968CK2gNYUfASoJh6pG7QY6OAPJ";

export const PHARMABUILT_URL = "https://pharmabuilt.com";

// The live PharmaBuilt storefront — the branded e-commerce site partners get.
// Used for the "Storefront Demo" link and anywhere we point to the store.
export const STOREFRONT_DEMO_URL = "https://pharmabuilt.com";

// Podcast: "FOF 185 | John Linss. Maximizing Healthspan."
// https://www.youtube.com/watch?v=EP9XAxjNAvo
export const PODCAST_EMBED_ID = "EP9XAxjNAvo";

// Real tenant storefronts running on the platform (staging), served from the
// live CDN. Logo paths mirror the `tenants.logo` column.
export const CDN_BASE = "https://cdn.corespeedhealth.com";

export const PARTNER_TENANTS: { name: string; logo: string }[] = [
  { name: "Reliant Life", logo: "uploads/681abf3c82213.webp" },
  { name: "Vitality Forever", logo: "uploads/681abf3cb21ba.webp" },
  { name: "Phillips Clinic", logo: "uploads/681abf3c4f1fc.webp" },
  { name: "Concierge Wellness Center", logo: "uploads/681abf3ac7539.webp" },
  { name: "Genesis Lifestyle Medicine", logo: "uploads/681abf3b89927.webp" },
  { name: "Live Well Cumming", logo: "uploads/681abf3bb6b8f.png" },
  { name: "Mountain West Dental Specialist", logo: "uploads/681abf3bea769.svg" },
  { name: "Fit Club Vegas", logo: "uploads/fitclubvegas.corespeedhealth.com/68350fbe1fd44.png" },
  { name: "Utah Family Pharmacy", logo: "uploads/UtahFamilyPharmacy.corespeedhealth.com/68376a9a24e2d.gif" },
  { name: "Anatomy Fitness", logo: "uploads/anatomyfitness.corespeedhealth.com/68a269bacba6f.png" },
  { name: "Rachel Cook", logo: "uploads/rachelcook.corespeedhealth.com/68afc655c1d98.png" },
  { name: "Forget The Gym", logo: "uploads/forgetthegym.corespeedhealth.com/68c1d87db2fd3.PNG" },
];

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const LEGAL_LINKS = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Use", href: "/terms" },
  { label: "Cookie Policy", href: "/cookies" },
];

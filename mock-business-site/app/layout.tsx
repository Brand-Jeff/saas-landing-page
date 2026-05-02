import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// ─── FONT SETUP ───────────────────────────────────────────
// next/font/google downloads and self-hosts the font at build
// time. No external request to Google at runtime — better
// privacy and faster load. Geist is clean and professional.
const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

// ─── GLOBAL METADATA ──────────────────────────────────────
// This export is read by Next.js automatically. You never
// import or call it — just export it and Next.js handles it.
export const metadata = {

  // metadataBase tells Next.js what domain to prepend to
  // relative URLs like "/og-default.jpg" in your OG tags.
  // Without this, social share images will be broken.
  metadataBase: new URL("https://clearledgerbookkeeping.com"),

  // title.default = used when a page doesn't set its own title
  // title.template = wraps every page title automatically
  // A page with title: "Pricing" renders as:
  // "Pricing | Clear Ledger Bookkeeping"
  title: {
    default: "Clear Ledger Bookkeeping | Austin, TX",
    template: "%s | Clear Ledger Bookkeeping",
  },

  // The meta description. Shows in Google search results
  // under your page title. Keep under 160 characters.
  // Write it like ad copy — what do they get, why choose you?
  description:
    "Professional bookkeeping for small businesses and freelancers in Austin, TX. Clean books, clear numbers, zero stress. Free consultation.",

  // keywords are largely ignored by Google today but still
  // read by some smaller search engines and job site scrapers.
  keywords: [
    "bookkeeper Austin TX",
    "small business bookkeeping Austin",
    "freelancer bookkeeping Austin",
    "QuickBooks Austin",
    "Austin bookkeeping services",
  ],

  // Tells Google this is the authoritative version of the
  // site. Prevents duplicate content penalties if your site
  // is accessible at multiple URLs (www vs non-www etc.)
  alternates: {
    canonical: "https://clearledgerbookkeeping.com",
  },

  // ─── OPEN GRAPH ─────────────────────────────────────────
  // Controls how your page looks when shared on Facebook,
  // LinkedIn, Slack, iMessage, and most social platforms.
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Clear Ledger Bookkeeping",
    title: "Clear Ledger Bookkeeping | Austin, TX",
    description:
      "Professional bookkeeping for small businesses and freelancers in Austin, TX. Free consultation.",
    // This path is relative to metadataBase above.
    // The actual file lives at: public/og-default.jpg
    // Size must be 1200x630px for correct social previews.
    images: [
      {
        url: "/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "Clear Ledger Bookkeeping — Austin TX bookkeeping services",
      },
    ],
  },

  // ─── TWITTER / X CARD ───────────────────────────────────
  // Twitter uses its own tag set separate from OG.
  // summary_large_image = big preview card (always use this)
  twitter: {
    card: "summary_large_image",
    title: "Clear Ledger Bookkeeping | Austin, TX",
    description:
      "Professional bookkeeping for small businesses in Austin. Free consultation.",
    images: ["/og-default.jpg"],
  },

  // ─── ROBOTS ─────────────────────────────────────────────
  // Tells search engine crawlers what they're allowed to do.
  // index: true  = Google can list this page in results
  // follow: true = Google can follow links on this page
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  // ─── VERIFICATION ───────────────────────────────────────
  // You'll get this code from Google Search Console when you
  // add your site. Paste it here — no separate meta tag needed.
  // Leave the placeholder for now, replace after GSC setup.
  verification: {
    google: "your-google-verification-code-here",
  },
};

// ─── ROOT LAYOUT COMPONENT ────────────────────────────────
// This wraps every single page in your app. Think of it as
// your master template. The {children} is where each page
// renders inside it.
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
})  {
  return (
    <html lang="en" className={geist.variable}>
      {/*
        Next.js automatically injects all your metadata tags
        into <head> — you never write <head> manually in
        App Router. It handles title, meta, OG, twitter, etc.
      */}
      <body className="min-h-screen flex flex-col bg-white text-gray-900 antialiased">

        {/* Navbar renders on every page */}
        <Navbar />

        {/* main wraps page content for semantic HTML.
            flex-1 makes it grow to push footer to bottom. */}
        <main className="flex-1">
          {children}
        </main>

        {/* Footer renders on every page */}
        <Footer />

      </body>
    </html>
  );
}
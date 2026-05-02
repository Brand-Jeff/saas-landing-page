// app/robots.ts
// ─────────────────────────────────────────────────────────
// Another special Next.js App Router reserved filename.
// Placing robots.ts in app/ auto-serves its output at
// /robots.txt — no manual file creation needed.
//
// robots.txt controls which pages search engine crawlers
// are allowed to access. For a standard public site you
// allow everything and point crawlers to your sitemap.
// ─────────────────────────────────────────────────────────

import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {

    rules: [
      {
        // User-agent: * means "apply to all crawlers"
        // This includes Googlebot, Bingbot, and others.
        userAgent: "*",

        // Allow: "/" means crawlers can access all pages.
        // This is correct for any page you want in search.
        allow: "/",

        // Disallow specific paths you DON'T want indexed.
        // These are pages that should never appear in Google.
        // Add your own as needed.
        disallow: [
          "/api/",        // API routes — not for public indexing
          "/thank-you",   // Post-form submission page
          "/_next/",      // Next.js internal files
        ],
      },
    ],

    // Points all crawlers directly to your sitemap.
    // This tells them exactly where to find all your pages
    // without having to crawl and discover them manually.
    // Must be your full domain URL — not a relative path.
    sitemap: "https://clearledgerbookkeeping.com/sitemap.xml",

  };
}
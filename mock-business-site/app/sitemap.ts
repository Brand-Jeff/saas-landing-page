// app/sitemap.ts
// ─────────────────────────────────────────────────────────
// This is a special Next.js App Router file. Just by naming
// it sitemap.ts and placing it in the app/ folder, Next.js
// automatically serves its output at /sitemap.xml.
//
// You never create the XML manually. You export a function
// that returns an array of URL objects — Next.js handles
// the XML formatting entirely.
// ─────────────────────────────────────────────────────────

import { MetadataRoute } from "next";

// Your live domain. Update this when you deploy.
const BASE_URL = "https://clearledgerbookkeeping.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [

    // ── HOMEPAGE ────────────────────────────────────────
    // Priority 1.0 = most important page on the site.
    // changeFrequency tells Google how often to re-crawl.
    // "monthly" is correct for a homepage that rarely changes.
    {
      url:             `${BASE_URL}`,
      lastModified:    new Date(),
      changeFrequency: "monthly",
      priority:        1.0,
    },

    // ── SERVICES ────────────────────────────────────────
    // Second most important page — your main conversion page.
    // High priority, changes infrequently.
    {
      url:             `${BASE_URL}/services`,
      lastModified:    new Date(),
      changeFrequency: "monthly",
      priority:        0.9,
    },

    // ── ABOUT ───────────────────────────────────────────
    // Important for trust but changes rarely.
    {
      url:             `${BASE_URL}/about`,
      lastModified:    new Date(),
      changeFrequency: "yearly",
      priority:        0.7,
    },

    // ── CONTACT ─────────────────────────────────────────
    // Lead capture page — high priority, rarely changes.
    {
      url:             `${BASE_URL}/contact`,
      lastModified:    new Date(),
      changeFrequency: "yearly",
      priority:        0.8,
    },

    // ── BLOG INDEX ──────────────────────────────────────
    // Changes frequently as new posts are added.
    {
      url:             `${BASE_URL}/blog`,
      lastModified:    new Date(),
      changeFrequency: "weekly",
      priority:        0.8,
    },

    // ── BLOG POSTS ──────────────────────────────────────
    // Individual posts. Each gets its own entry.
    // When you add real posts, replace these slugs.
    // For a CMS-driven blog you'd fetch these dynamically
    // (see the Sitemap explained tab for how).
    {
      url:             `${BASE_URL}/blog/bookkeeping-mistakes-small-business-austin`,
      lastModified:    new Date(),
      changeFrequency: "yearly",
      priority:        0.6,
    },
    {
      url:             `${BASE_URL}/blog/quickbooks-setup-guide-freelancers`,
      lastModified:    new Date(),
      changeFrequency: "yearly",
      priority:        0.6,
    },
    {
      url:             `${BASE_URL}/blog/when-to-hire-bookkeeper-austin-small-business`,
      lastModified:    new Date(),
      changeFrequency: "yearly",
      priority:        0.6,
    },

  ];
}
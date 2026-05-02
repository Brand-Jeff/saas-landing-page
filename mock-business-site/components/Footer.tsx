// No "use client" needed — this component has no
// interactivity, no hooks, no event handlers.
// It renders entirely on the server. Faster, better for SEO.

import Link from "next/link";

// ─── FOOTER LINK GROUPS ────────────────────────────────────
// Organized into columns. Google crawls footer links and
// uses them to discover and understand your site structure.
const FOOTER_LINKS = [
  {
    heading: "Services",
    links: [
      { label: "Monthly Bookkeeping",  href: "/services#monthly" },
      { label: "Catch-Up Bookkeeping", href: "/services#catchup" },
      { label: "QuickBooks Setup",     href: "/services#quickbooks" },
      { label: "Tax Prep Support",     href: "/services#tax" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About Us",  href: "/about" },
      { label: "Blog",      href: "/blog" },
      { label: "Contact",   href: "/contact" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Free Consultation", href: "/contact" },
      { label: "Blog",              href: "/blog" },
    ],
  },
];

// ─── CONTACT INFO ──────────────────────────────────────────
// Displayed in the footer and also read by Google for
// local SEO. NAP consistency (Name, Address, Phone) is
// a local SEO ranking factor — keep this identical to
// what you put in your Schema markup.
const CONTACT = {
  phone:   "(512) 555-0142",
  email:   "hello@clearledgerbookkeeping.com",
  address: "Austin, TX",
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300" aria-label="Site footer">

      {/* ── MAIN FOOTER CONTENT ──────────────────────────── */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* ── BRAND COLUMN ───────────────────────────────── */}
          <div className="lg:col-span-1">

            {/* Logo lockup — mirrors Navbar for consistency */}
            <Link
              href="/"
              className="inline-flex items-center gap-2 font-semibold text-lg text-white hover:text-emerald-400 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-emerald-400"
                fill="none" viewBox="0 0 24 24"
                stroke="currentColor" strokeWidth={1.8}
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.966 8.966 0 0 0-6 2.292m0-14.25v14.25"
                />
              </svg>
              <span>
                <span className="text-emerald-400">Clear</span> Ledger
              </span>
            </Link>

            {/* Tagline — reinforces the value proposition   */}
            {/* and includes a soft keyword naturally.       */}
            <p className="mt-3 text-sm text-gray-400 leading-relaxed">
              Professional bookkeeping for small businesses
              and freelancers in Austin, TX. Clean books,
              clear numbers, zero stress.
            </p>

            {/* ── CONTACT DETAILS ──────────────────────── */}
            {/* address tag is semantic HTML for contact    */}
            {/* info — Google understands this element.     */}
            <address className="mt-5 not-italic space-y-2">
              <a
                href={`tel:${CONTACT.phone.replace(/\D/g, "")}`}
                className="flex items-center gap-2 text-sm text-gray-400 hover:text-emerald-400 transition-colors"
              >
                <svg className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg>
                {CONTACT.phone}
              </a>
              <a
                href={`mailto:${CONTACT.email}`}
                className="flex items-center gap-2 text-sm text-gray-400 hover:text-emerald-400 transition-colors"
              >
                <svg className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
                {CONTACT.email}
              </a>
              <p className="flex items-center gap-2 text-sm text-gray-400">
                <svg className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
                {CONTACT.address}
              </p>
            </address>
          </div>

          {/* ── LINK COLUMNS ─────────────────────────────── */}
          {/* Renders each group in FOOTER_LINKS as a column */}
          {FOOTER_LINKS.map((group) => (
            <div key={group.heading}>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                {group.heading}
              </h3>
              <ul className="space-y-2">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-emerald-400 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>
      </div>

      {/* ── BOTTOM BAR ───────────────────────────────────── */}
      <div className="border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-500">
            &copy; {currentYear} Clear Ledger Bookkeeping. All rights reserved.
          </p>
          <div className="flex gap-5">
            <Link href="/privacy" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>

    </footer>
  );
}
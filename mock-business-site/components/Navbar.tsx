"use client";
// ↑ Required because this component uses useState and
// event handlers (mobile menu toggle). Any component that
// uses React hooks or browser events needs "use client".
// Server components (no interactivity) don't need this.

import { useState } from "react";
import Link from "next/link";


// ─── NAV LINKS ─────────────────────────────────────────────
// Defined outside the component so it doesn't get recreated
// on every render. Add or remove pages here and the nav
// and mobile menu both update automatically.
const NAV_LINKS = [
  { label: "Home",     href: "/" },
  { label: "Services", href: "/services" },
  { label: "Blog",     href: "/blog" },
  { label: "About",    href: "/about" },
  { label: "Contact",  href: "/contact" },
];

export default function Navbar() {
  // Controls whether the mobile menu is open or closed.
  // False by default — menu starts closed.
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    // sticky top-0 z-50 = stays pinned to top when scrolling.
    // backdrop-blur adds a frosted glass effect on scroll.
    // border-b adds a subtle separator line below the nav.
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* ── LOGO / BRAND ─────────────────────────────── */}
          {/* Link wraps the logo so clicking it goes home.  */}
          {/* The span with text-emerald-600 adds a colored  */}
          {/* accent to "Clear" — easy to swap for a real    */}
          {/* logo image later using next/image.             */}
          <Link
            href="/"
            className="flex items-center gap-2 font-semibold text-lg text-gray-900 hover:text-emerald-600 transition-colors"
          >
            {/* Simple SVG ledger icon — replace with your   */}
            {/* actual logo. Inline SVG = no extra request.  */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 text-emerald-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.8}
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.966 8.966 0 0 0-6 2.292m0-14.25v14.25"
              />
            </svg>
            <span>
              <span className="text-emerald-600">Clear</span> Ledger
            </span>
          </Link>

          {/* ── DESKTOP NAV ──────────────────────────────── */}
          {/* Hidden on mobile (hidden), visible md and up.  */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-gray-600 hover:text-emerald-600 transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}

            {/* CTA button — stands out from nav links.     */}
            {/* Links to contact page lead form.            */}
            <Link
              href="/contact"
              className="ml-4 inline-flex items-center px-4 py-2 rounded-lg bg-emerald-600 text-white text-sm font-medium hover:bg-emerald-700 transition-colors"
            >
              Free Consultation
            </Link>
          </nav>

          {/* ── MOBILE MENU BUTTON ───────────────────────── */}
          {/* Only visible on small screens (md:hidden).     */}
          {/* aria-expanded tells screen readers if open.   */}
          {/* aria-controls links button to the menu panel. */}
          <button
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-emerald-600 hover:bg-gray-50 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle navigation menu"
          >
            {/* Swap icon based on menu state */}
            {menuOpen ? (
              // X icon when open
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // Hamburger icon when closed
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>

        </div>
      </div>

      {/* ── MOBILE MENU PANEL ────────────────────────────── */}
      {/* Conditionally rendered based on menuOpen state.   */}
      {/* Closes itself when a link is clicked.             */}
      {menuOpen && (
        <nav
          id="mobile-menu"
          className="md:hidden border-t border-gray-100 bg-white px-4 pb-4 pt-2"
          aria-label="Mobile navigation"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block py-2 text-sm text-gray-700 hover:text-emerald-600 font-medium transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="mt-3 block text-center px-4 py-2 rounded-lg bg-emerald-600 text-white text-sm font-medium hover:bg-emerald-700 transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Free Consultation
          </Link>
        </nav>
      )}

    </header>
  );
}
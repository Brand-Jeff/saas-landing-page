import Link from "next/link";
import Image from "next/image";

// ─── PAGE METADATA ─────────────────────────────────────────
// This overrides the default title from layout.js for the
// homepage specifically. Description is homepage-specific
// copy — more conversion-focused than the global default.
export const metadata = {
  title: "Bookkeeper for Small Businesses in Austin, TX",
  description:
    "Clear Ledger Bookkeeping keeps your finances organized so you can focus on growing your business. Serving Austin freelancers and small businesses. Free consultation.",
  alternates: {
    canonical: "https://clearledgerbookkeeping.com",
  },
};

// ─── DATA ──────────────────────────────────────────────────
// Defined outside the component — created once, not on
// every render. Easy to update without touching JSX.

const SERVICES = [
  {
    id: "monthly",
    icon: "📅",
    title: "Monthly Bookkeeping",
    description:
      "Recurring monthly reconciliation, categorization, and financial reporting so your books are always current and audit-ready.",
  },
  {
    id: "catchup",
    icon: "🔄",
    title: "Catch-Up Bookkeeping",
    description:
      "Months or years behind? We get your books fully caught up quickly and accurately — no judgment, just clean numbers.",
  },
  {
    id: "quickbooks",
    icon: "⚙️",
    title: "QuickBooks Setup",
    description:
      "New to QuickBooks Online? We set up your chart of accounts, connect your bank feeds, and train you to use it confidently.",
  },
  {
    id: "tax",
    icon: "🗂️",
    title: "Tax Prep Support",
    description:
      "We organize your books and prepare your financial statements so your CPA has everything they need — saving you time and fees.",
  },
];

const TESTIMONIALS = [
  {
    id: 1,
    name: "Maria T.",
    role: "Freelance Designer, Austin TX",
    quote:
      "I used to dread tax season. Clear Ledger got my books caught up in two weeks and now I actually know where my money goes.",
    rating: 5,
  },
  {
    id: 2,
    name: "James R.",
    role: "Owner, Ridgeline Landscaping",
    quote:
      "We were six months behind on our books. They cleaned everything up and set us up on QuickBooks. Total game changer.",
    rating: 5,
  },
  {
    id: 3,
    name: "Priya S.",
    role: "Co-founder, Bloom Candle Co.",
    quote:
      "Finally feel in control of our finances. The monthly reports are clear and they always answer my questions fast.",
    rating: 5,
  },
];

// Star rating component — reusable, clean, accessible
function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <svg
          key={i}
          className="h-4 w-4 text-amber-400"
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

// ─── LOCALBUSINESS SCHEMA ──────────────────────────────────
// JSON-LD structured data. Google reads this to understand
// exactly what your business is and can show rich results
// (star ratings, address, phone) directly in search results.
// This is invisible to users — it lives in a script tag.
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Clear Ledger Bookkeeping",
  description:
    "Professional bookkeeping for small businesses and freelancers in Austin, TX.",
  url: "https://clearledgerbookkeeping.com",
  telephone: "+15125550142",
  email: "hello@clearledgerbookkeeping.com",
  // priceRange gives Google a sense of your pricing tier.
  // $ = budget, $$ = mid, $$$ = premium
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Austin",
    addressRegion: "TX",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 30.2672,
    longitude: -97.7431,
  },
  // areaServed tells Google which areas you serve.
  // Helps you appear in searches from surrounding cities.
  areaServed: [
    { "@type": "City", name: "Austin" },
    { "@type": "City", name: "Round Rock" },
    { "@type": "City", name: "Cedar Park" },
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "17:00",
    },
  ],
  // aggregateRating feeds the star rating shown in
  // Google search results — highly visible, drives clicks.
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: "23",
  },
};

// ─── PAGE COMPONENT ────────────────────────────────────────
// No "use client" — this is a server component. Faster load,
// better SEO, no unnecessary JavaScript sent to the browser.
export default function HomePage() {
  return (
    <>
      {/* ── SCHEMA INJECTION ───────────────────────────── */}
      {/* dangerouslySetInnerHTML is required to inject raw  */}
      {/* JSON into a script tag. Safe here because we      */}
      {/* control 100% of the data — no user input involved.*/}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />

      {/* ══════════════════════════════════════════════════ */}
      {/*  SECTION 1 — HERO                                 */}
      {/* ══════════════════════════════════════════════════ */}
      <section className="relative bg-linear-to-br from-emerald-50 via-white to-teal-50 py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* LEFT — copy */}
            <div>
              {/* Trust badge — builds credibility immediately */}
              <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 text-sm font-medium px-3 py-1 rounded-full mb-6">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" aria-hidden="true" />
                Serving Austin, TX businesses
              </div>

              {/* h1 — ONE per page, contains primary keyword.  */}
              {/* "Bookkeeper Austin TX" is the target keyword. */}
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
                Austin's Bookkeeper for{" "}
                <span className="text-emerald-600">
                  Small Businesses
                </span>
              </h1>

              <p className="mt-5 text-lg text-gray-600 leading-relaxed max-w-lg">
                Clean books, clear numbers, zero stress. We handle
                your bookkeeping so you can focus on what you do
                best — running your business.
              </p>

              {/* Social proof stat row — builds trust fast */}
              <div className="mt-6 flex flex-wrap gap-6">
                {[
                  { stat: "150+", label: "Businesses served" },
                  { stat: "5★",   label: "Average rating" },
                  { stat: "100%", label: "On-time delivery" },
                ].map(({ stat, label }) => (
                  <div key={label}>
                    <p className="text-2xl font-bold text-emerald-600">{stat}</p>
                    <p className="text-sm text-gray-500">{label}</p>
                  </div>
                ))}
              </div>

              {/* CTA buttons — primary drives to lead form,   */}
              {/* secondary lets skeptics learn more first.   */}
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 rounded-lg bg-emerald-600 text-white font-semibold hover:bg-emerald-700 transition-colors shadow-sm"
                >
                  Book a Free Consultation
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center px-6 py-3 rounded-lg border border-gray-200 text-gray-700 font-semibold hover:border-emerald-300 hover:text-emerald-700 transition-colors"
                >
                  See Our Services
                </Link>
              </div>
            </div>

            {/* RIGHT — hero image */}
            {/* Replace /images/hero.jpg with your actual    */}
            {/* image. priority = preloads as LCP element.  */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-4/3">
              <Image
                src="/images/hero.jpg"
                alt="Bookkeeper reviewing financial statements at a desk in Austin TX"
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════ */}
      {/*  SECTION 2 — TRUST BAR                           */}
      {/* ══════════════════════════════════════════════════ */}
      {/* Social proof logos or credentials. Intuit        */}
      {/* certification is directly relevant to your       */}
      {/* bookkeeping knowledge — put it here.             */}
      <section className="border-y border-gray-100 bg-gray-50 py-8" aria-label="Credentials">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-gray-400 font-medium uppercase tracking-wider mb-6">
            Trusted by Austin small businesses
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 text-gray-400">
            {[
              "QuickBooks Online Certified",
              "Intuit Certified Bookkeeper",
              "5★ on Google",
              "Austin Chamber Member",
            ].map((cred) => (
              <span key={cred} className="text-sm font-medium">
                ✓ {cred}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════ */}
      {/*  SECTION 3 — SERVICES                            */}
      {/* ══════════════════════════════════════════════════ */}
      <section className="py-20 bg-white" id="services" aria-labelledby="services-heading">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-12">
            {/* h2 with keyword-rich copy. Each service card  */}
            {/* below has its own h3 — correct heading order.*/}
            <h2 id="services-heading" className="text-3xl font-bold text-gray-900">
              Bookkeeping Services for Austin Businesses
            </h2>
            <p className="mt-3 text-gray-500 max-w-xl mx-auto">
              Whether you need ongoing support or a one-time
              cleanup, we have a service built for you.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((service) => (
              <div
                key={service.id}
                id={service.id}
                className="group p-6 rounded-xl border border-gray-100 hover:border-emerald-200 hover:shadow-md transition-all"
              >
                <div className="text-3xl mb-4" aria-hidden="true">
                  {service.icon}
                </div>
                {/* h3 — correct hierarchy under the section h2 */}
                <h3 className="font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/services"
              className="inline-flex items-center text-emerald-600 font-semibold hover:text-emerald-700 transition-colors"
            >
              View all services →
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════ */}
      {/*  SECTION 4 — TESTIMONIALS                        */}
      {/* ══════════════════════════════════════════════════ */}
      <section className="py-20 bg-gray-50" aria-labelledby="testimonials-heading">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-12">
            <h2 id="testimonials-heading" className="text-3xl font-bold text-gray-900">
              What Austin Business Owners Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              // blockquote is the correct semantic element
              // for quoted content — Google understands it.
              <blockquote
                key={t.id}
                className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm flex flex-col gap-4"
              >
                <StarRating count={t.rating} />
                {/* cite wraps the quoted text correctly */}
                <p className="text-gray-700 text-sm leading-relaxed flex-1">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <footer className="text-sm">
                  <cite className="not-italic">
                    <span className="font-semibold text-gray-900">{t.name}</span>
                    <span className="text-gray-400 block">{t.role}</span>
                  </cite>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════ */}
      {/*  SECTION 5 — BOTTOM CTA                          */}
      {/* ══════════════════════════════════════════════════ */}
      {/* Every page should end with a clear next action.  */}
      {/* This reinforces the offer and drives conversions.*/}
      <section className="py-20 bg-emerald-600" aria-labelledby="cta-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 id="cta-heading" className="text-3xl font-bold text-white">
            Ready for Clean Books?
          </h2>
          <p className="mt-4 text-emerald-100 text-lg">
            Book a free 30-minute consultation. No pressure,
            no commitment — just clarity on your finances.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center px-8 py-4 rounded-lg bg-white text-emerald-700 font-bold text-lg hover:bg-emerald-50 transition-colors shadow-md"
          >
            Book My Free Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
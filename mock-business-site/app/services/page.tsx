import Link from "next/link";

// ─── PAGE METADATA ─────────────────────────────────────────
// Overrides layout.tsx defaults for this page specifically.
// Title uses the template: renders as
// "Bookkeeping Services Austin TX | Clear Ledger Bookkeeping"
// Description is conversion-focused with a clear CTA.
export const metadata = {
  title: "Bookkeeping Services Austin TX",
  description:
    "Monthly bookkeeping, catch-up bookkeeping, QuickBooks setup, and tax prep support for Austin small businesses and freelancers. Free consultation.",
  alternates: {
    canonical: "https://clearledgerbookkeeping.com/services",
  },
};

// ─── SERVICE DATA ──────────────────────────────────────────
// Each service maps directly to a section on the page.
// The id field matches the anchor links in the Footer
// (/services#monthly etc.) — keep these in sync.
const SERVICES = [
  {
    id: "monthly",
    icon: "📅",
    title: "Monthly Bookkeeping",
    subtitle: "Austin's most trusted ongoing bookkeeping service",
    description:
      "Stay on top of your finances every single month. We reconcile your accounts, categorize every transaction, and deliver clear monthly financial reports — so you always know exactly where your business stands.",
    includes: [
      "Bank and credit card reconciliation",
      "Transaction categorization",
      "Monthly profit & loss statement",
      "Monthly balance sheet",
      "Dedicated bookkeeper assigned to your account",
      "Unlimited email support",
    ],
    ideal: "Best for: Established businesses wanting clean, current books year-round.",
    cta: "Start monthly bookkeeping",
  },
  {
    id: "catchup",
    icon: "🔄",
    title: "Catch-Up Bookkeeping",
    subtitle: "Get months or years of books cleaned up fast",
    description:
      "Behind on your books? It happens to the best of us. We dig in, reconcile every month you've missed, and get you fully caught up — accurately and without judgment. You'll come out the other side with clean books and a clear picture of your business finances.",
    includes: [
      "Full reconciliation of all missed months",
      "Accurate transaction categorization",
      "Corrected financial statements",
      "QuickBooks cleanup if needed",
      "Summary report of findings",
      "Transition to monthly plan available",
    ],
    ideal: "Best for: Businesses behind on bookkeeping or preparing for tax season.",
    cta: "Get caught up now",
  },
  {
    id: "quickbooks",
    icon: "⚙️",
    title: "QuickBooks Online Setup",
    subtitle: "The right foundation from day one",
    description:
      "Getting QuickBooks set up correctly from the start saves you hours of headaches later. We configure your chart of accounts to match your business, connect your bank feeds, set up your invoice templates, and train you to use it confidently going forward.",
    includes: [
      "Chart of accounts configured for your industry",
      "Bank and credit card feed connections",
      "Opening balances entered",
      "Invoice and payment templates",
      "1-hour training session included",
      "30-day email support after setup",
    ],
    ideal: "Best for: New businesses or anyone switching to QuickBooks for the first time.",
    cta: "Set up QuickBooks right",
  },
  {
    id: "tax",
    icon: "🗂️",
    title: "Tax Prep Support",
    subtitle: "Everything your CPA needs, organized and ready",
    description:
      "We don't file your taxes — but we make sure your books are in perfect order so your CPA can. Clean, organized financials mean fewer CPA hours, lower accounting fees, and zero scrambling at tax time.",
    includes: [
      "Year-end books cleanup and review",
      "Profit & loss and balance sheet preparation",
      "1099 vendor tracking and preparation",
      "Organized documentation for your CPA",
      "Prior year comparison reports",
      "Direct communication with your CPA if needed",
    ],
    ideal: "Best for: Anyone who wants to hand their CPA a clean file instead of a shoebox.",
    cta: "Prepare for tax season",
  },
];

// ─── FAQ DATA ──────────────────────────────────────────────
// FAQs serve double duty: they answer real questions AND
// target long-tail keywords people actually search for.
// Each question is a phrase people type into Google.
const FAQS = [
  {
    q: "How much does bookkeeping cost for a small business in Austin?",
    a: "Monthly bookkeeping for a small Austin business typically ranges from $200–$800/month depending on transaction volume and complexity. We offer a free consultation to give you an exact quote based on your specific situation.",
  },
  {
    q: "Do I need a bookkeeper or an accountant?",
    a: "A bookkeeper handles the day-to-day recording and organizing of your financial transactions. An accountant (or CPA) analyzes that data, files your taxes, and gives strategic advice. Most small businesses need both — we handle the bookkeeping so your CPA can focus on higher-level work.",
  },
  {
    q: "How long does catch-up bookkeeping take?",
    a: "It depends on how far behind you are and your transaction volume. Most catch-up projects are completed within 2–4 weeks. We'll give you a specific timeline during your free consultation.",
  },
  {
    q: "Do you work with businesses outside of Austin?",
    a: "Yes — we work with businesses across Texas and nationally. All of our bookkeeping is done remotely using QuickBooks Online, so location is never a barrier.",
  },
];

// ─── PAGE COMPONENT ────────────────────────────────────────
// Server component — no interactivity needed on this page.
export default function ServicesPage() {
  return (
    <>
      {/* ══════════════════════════════════════════════════ */}
      {/*  HERO — PAGE HEADER                              */}
      {/* ══════════════════════════════════════════════════ */}
      <section className="bg-linear-to-br from-emerald-50 via-white to-teal-50 py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

          {/* Breadcrumb — helps Google understand page      */}
          {/* hierarchy and appears in search results.      */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex justify-center items-center gap-2 text-sm text-gray-400">
              <li><Link href="/" className="hover:text-emerald-600 transition-colors">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-gray-600 font-medium" aria-current="page">Services</li>
            </ol>
          </nav>

          {/* h1 — primary keyword for this page.           */}
          {/* "Bookkeeping services Austin TX" is the       */}
          {/* target — front-loaded in the heading.         */}
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
            Bookkeeping Services{" "}
            <span className="text-emerald-600">for Austin Businesses</span>
          </h1>

          <p className="mt-5 text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            From monthly bookkeeping to QuickBooks setup and tax prep support —
            everything your Austin small business needs to keep clean books and
            confident finances.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 rounded-lg bg-emerald-600 text-white font-semibold hover:bg-emerald-700 transition-colors shadow-sm"
            >
              Book a Free Consultation
            </Link>
            <a
              href="#monthly"
              className="inline-flex items-center px-6 py-3 rounded-lg border border-gray-200 text-gray-700 font-semibold hover:border-emerald-300 hover:text-emerald-700 transition-colors"
            >
              See All Services ↓
            </a>
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════ */}
      {/*  SERVICE SECTIONS                                 */}
      {/* ══════════════════════════════════════════════════ */}
      {/* Each service is a full section with its own id   */}
      {/* matching the footer anchor links. Alternating    */}
      {/* bg colors create visual rhythm down the page.    */}
      <div>
        {SERVICES.map((service, index) => (
          <section
            key={service.id}
            id={service.id}
            className={`py-16 sm:py-20 ${index % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
            aria-labelledby={`${service.id}-heading`}
          >
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

                {/* LEFT — service info */}
                <div>
                  <div className="text-4xl mb-4" aria-hidden="true">
                    {service.icon}
                  </div>

                  {/* h2 per service — keyword-rich, correct  */}
                  {/* heading hierarchy under the page h1.   */}
                  <h2
                    id={`${service.id}-heading`}
                    className="text-3xl font-bold text-gray-900 mb-2"
                  >
                    {service.title}
                  </h2>

                  <p className="text-emerald-600 font-medium mb-4">
                    {service.subtitle}
                  </p>

                  <p className="text-gray-600 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Ideal for — helps visitors self-qualify  */}
                  {/* before reaching out. Reduces bad-fit     */}
                  {/* consultation requests.                   */}
                  <p className="text-sm text-gray-500 italic">
                    {service.ideal}
                  </p>

                  <Link
                    href="/contact"
                    className="mt-6 inline-flex items-center px-5 py-2.5 rounded-lg bg-emerald-600 text-white text-sm font-semibold hover:bg-emerald-700 transition-colors"
                  >
                    {service.cta} →
                  </Link>
                </div>

                {/* RIGHT — what's included list */}
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
                  <h3 className="font-semibold text-gray-900 mb-5 text-lg">
                    What's included
                  </h3>
                  <ul className="space-y-3">
                    {service.includes.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        {/* Checkmark icon */}
                        <svg
                          className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2.5}
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4.5 12.75l6 6 9-13.5"
                          />
                        </svg>
                        <span className="text-gray-600 text-sm leading-relaxed">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </div>
          </section>
        ))}
      </div>

      {/* ══════════════════════════════════════════════════ */}
      {/*  FAQ SECTION                                      */}
      {/* ══════════════════════════════════════════════════ */}
      {/* FAQs target long-tail keywords and can trigger   */}
      {/* Google's FAQ rich results in search — showing    */}
      {/* your questions expanded directly in results.     */}
      <section className="py-16 sm:py-20 bg-white" aria-labelledby="faq-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-12">
            <h2 id="faq-heading" className="text-3xl font-bold text-gray-900">
              Frequently Asked Questions
            </h2>
            <p className="mt-3 text-gray-500">
              Common questions about bookkeeping services in Austin, TX.
            </p>
          </div>

          {/* dl/dt/dd is the correct semantic HTML for     */}
          {/* question/answer pairs — Google understands   */}
          {/* this structure for FAQ rich results.         */}
          <dl className="space-y-6">
            {FAQS.map((faq) => (
              <div
                key={faq.q}
                className="rounded-xl border border-gray-100 p-6 hover:border-emerald-200 transition-colors"
              >
                <dt className="font-semibold text-gray-900 mb-3">
                  {faq.q}
                </dt>
                <dd className="text-gray-600 leading-relaxed text-sm">
                  {faq.a}
                </dd>
              </div>
            ))}
          </dl>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════ */}
      {/*  BOTTOM CTA                                       */}
      {/* ══════════════════════════════════════════════════ */}
      <section className="py-20 bg-emerald-600" aria-labelledby="services-cta-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 id="services-cta-heading" className="text-3xl font-bold text-white">
            Not Sure Which Service You Need?
          </h2>
          <p className="mt-4 text-emerald-100 text-lg">
            Book a free 30-minute consultation. We'll look at your
            situation and tell you exactly what makes sense.
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
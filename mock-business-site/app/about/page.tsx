import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "About Clear Ledger Bookkeeping | Austin TX",
  description:
    "Clear Ledger Bookkeeping is an Austin-based bookkeeping firm helping small businesses and freelancers keep clean books and confident finances. Meet our team.",
  alternates: {
    canonical: "https://clearledgerbookkeeping.com/about",
  },
};

const VALUES = [
  {
    icon: "🎯",
    title: "Accuracy first",
    desc: "Clean books aren't optional. Every number we touch is verified, reconciled, and audit-ready.",
  },
  {
    icon: "🤝",
    title: "No judgment",
    desc: "Behind on your books? It happens. We've seen it all and we're here to fix it, not lecture you.",
  },
  {
    icon: "💬",
    title: "Always responsive",
    desc: "You'll never wonder where we are. Questions get answered within one business day, always.",
  },
  {
    icon: "📈",
    title: "Your growth is the goal",
    desc: "We're not just keeping score — we want your financial clarity to help you make better business decisions.",
  },
];

const STATS = [
  { stat: "150+", label: "Businesses served" },
  { stat: "5★",   label: "Average Google rating" },
  { stat: "8 yrs", label: "Serving Austin businesses" },
  { stat: "100%",  label: "Client retention rate" },
];

export default function AboutPage() {
  return (
    <>
      {/* ── HEADER ─────────────────────────────────────── */}
      <section className="bg-linear-to-br from-emerald-50 via-white to-teal-50 py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-sm text-gray-400">
              <li><Link href="/" className="hover:text-emerald-600 transition-colors">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-gray-600 font-medium" aria-current="page">About</li>
            </ol>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
                Austin&apos;s Bookkeeping Team That{" "}
                <span className="text-emerald-600">Actually Cares</span>
              </h1>
              <p className="mt-5 text-lg text-gray-600 leading-relaxed">
                Clear Ledger Bookkeeping was founded on a simple idea —
                small businesses in Austin deserve the same financial
                clarity that big companies take for granted. Clean books
                shouldn&apos;t be a luxury.
              </p>
              <Link
                href="/contact"
                className="mt-8 inline-flex items-center px-6 py-3 rounded-lg bg-emerald-600 text-white font-semibold hover:bg-emerald-700 transition-colors shadow-sm"
              >
                Book a Free Consultation
              </Link>
            </div>

            {/* Replace with a real team photo */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-4/3">
              <Image
                src="/images/about.jpg"
                alt="The Clear Ledger Bookkeeping team in their Austin TX office"
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ──────────────────────────────────── */}
      <section className="border-y border-gray-100 bg-gray-50 py-10" aria-label="Company statistics">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {STATS.map(({ stat, label }) => (
              <div key={label}>
                <p className="text-3xl font-bold text-emerald-600">{stat}</p>
                <p className="text-sm text-gray-500 mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STORY ──────────────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-white" aria-labelledby="story-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="story-heading" className="text-3xl font-bold text-gray-900 mb-6">
            Our story
          </h2>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              Clear Ledger started because we kept seeing the same problem
              over and over — talented Austin business owners who were great
              at what they did but drowning in financial chaos. Receipts in
              shoeboxes. Books that hadn&apos;t been touched in months.
              Tax seasons that felt like emergencies.
            </p>
            <p>
              We knew there was a better way. So we built a bookkeeping
              service designed specifically for small businesses and
              freelancers — straightforward, responsive, and priced for
              businesses that are still growing.
            </p>
            <p>
              Today we work with over 150 Austin businesses across
              industries — from freelance designers and consultants to
              restaurants, contractors, and e-commerce brands. Every
              client gets a dedicated bookkeeper, clean monthly reports,
              and the confidence that comes from knowing exactly where
              their business stands financially.
            </p>
          </div>
        </div>
      </section>

      {/* ── VALUES ─────────────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-gray-50" aria-labelledby="values-heading">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 id="values-heading" className="text-3xl font-bold text-gray-900">
              How we work
            </h2>
            <p className="mt-3 text-gray-500 max-w-xl mx-auto">
              The principles that guide every client relationship we build.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((value) => (
              <div
                key={value.title}
                className="bg-white rounded-xl p-6 border border-gray-100 hover:border-emerald-200 hover:shadow-md transition-all"
              >
                <div className="text-3xl mb-4" aria-hidden="true">{value.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────── */}
      <section className="py-20 bg-emerald-600" aria-labelledby="about-cta-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 id="about-cta-heading" className="text-3xl font-bold text-white">
            Ready to Work Together?
          </h2>
          <p className="mt-4 text-emerald-100 text-lg">
            Book a free 30-minute consultation. We&apos;ll learn about
            your business and tell you exactly how we can help.
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
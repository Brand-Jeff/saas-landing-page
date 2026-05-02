import Link from "next/link";

export const metadata = {
  title: "Bookkeeping Tips & Resources for Austin Small Businesses",
  description:
    "Practical bookkeeping advice for Austin small business owners and freelancers. Learn QuickBooks, avoid common mistakes, and know when to hire a bookkeeper.",
  alternates: {
    canonical: "https://clearledgerbookkeeping.com/blog",
  },
};

// ─── POST DATA ─────────────────────────────────────────────
// In a real CMS-driven blog this would be fetched from
// an API. For a portfolio site, static data is perfectly
// valid and demonstrates the same structural knowledge.
const POSTS = [
  {
    slug: "bookkeeping-mistakes-small-business-austin",
    title: "5 Bookkeeping Mistakes Austin Small Businesses Make (And How to Fix Them)",
    excerpt:
      "Mixing personal and business finances, skipping reconciliation, ignoring receipts — these common mistakes cost Austin business owners time and money every year.",
    date: "2024-11-15",
    readTime: "6 min read",
    category: "Common Mistakes",
  },
  {
    slug: "quickbooks-setup-guide-freelancers",
    title: "The Complete QuickBooks Online Setup Guide for Austin Freelancers",
    excerpt:
      "Step-by-step: how to set up QuickBooks Online correctly as a freelancer — chart of accounts, bank connections, invoice templates, and the settings most people miss.",
    date: "2024-12-01",
    readTime: "8 min read",
    category: "QuickBooks",
  },
  {
    slug: "when-to-hire-bookkeeper-austin-small-business",
    title: "When Should You Hire a Bookkeeper? 7 Signs Your Austin Business Is Ready",
    excerpt:
      "Doing your own books made sense when you started. But at some point it costs more than it saves. Here are the signs it's time to hand it off.",
    date: "2024-12-15",
    readTime: "5 min read",
    category: "Getting Started",
  },
];

// Format ISO date string to readable format
function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogIndexPage() {
  return (
    <>
      {/* ── HEADER ─────────────────────────────────────── */}
      <section className="bg-linear-to-br from-emerald-50 via-white to-teal-50 py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex justify-center items-center gap-2 text-sm text-gray-400">
              <li><Link href="/" className="hover:text-emerald-600 transition-colors">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-gray-600 font-medium" aria-current="page">Blog</li>
            </ol>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
            Bookkeeping{" "}
            <span className="text-emerald-600">Tips & Resources</span>
          </h1>
          <p className="mt-5 text-lg text-gray-600 max-w-2xl mx-auto">
            Practical bookkeeping advice for Austin small business owners
            and freelancers — from the team at Clear Ledger.
          </p>
        </div>
      </section>

      {/* ── POST CARDS ─────────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {POSTS.map((post) => (
              // article is the correct semantic element for
              // a self-contained piece of content like a
              // blog post card. Google understands this.
              <article
                key={post.slug}
                className="flex flex-col rounded-2xl border border-gray-100 hover:border-emerald-200 hover:shadow-md transition-all overflow-hidden"
              >
                {/* Category badge */}
                <div className="p-6 flex-1 flex flex-col">
                  <span className="inline-block text-xs font-semibold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full mb-4 self-start">
                    {post.category}
                  </span>

                  {/* h2 for post title — correct under page h1 */}
                  <h2 className="text-lg font-bold text-gray-900 mb-3 leading-snug">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="hover:text-emerald-600 transition-colors"
                    >
                      {post.title}
                    </Link>
                  </h2>

                  <p className="text-sm text-gray-500 leading-relaxed flex-1">
                    {post.excerpt}
                  </p>

                  {/* Post meta */}
                  <div className="mt-5 flex items-center justify-between text-xs text-gray-400">
                    <time dateTime={post.date}>
                      {formatDate(post.date)}
                    </time>
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <div className="px-6 pb-6">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-sm font-semibold text-emerald-600 hover:text-emerald-700 transition-colors"
                  >
                    Read article →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────── */}
      <section className="py-16 bg-emerald-600">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white">Ready to Get Your Books in Order?</h2>
          <p className="mt-4 text-emerald-100">Book a free consultation with Clear Ledger Bookkeeping.</p>
          <Link href="/contact" className="mt-8 inline-flex px-8 py-4 rounded-lg bg-white text-emerald-700 font-bold text-lg hover:bg-emerald-50 transition-colors shadow-md">
            Book My Free Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
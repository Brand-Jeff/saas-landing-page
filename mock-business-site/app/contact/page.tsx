import Link from "next/link";
import LeadForm from "@/components/LeadForm";

export const metadata = {
  title: "Book a Free Bookkeeping Consultation in Austin TX",
  description:
    "Schedule your free 30-minute bookkeeping consultation with Clear Ledger. No pressure, no commitment — just clarity on your finances.",
  alternates: {
    canonical: "https://clearledgerbookkeeping.com/contact",
  },
  robots: { index: true, follow: true },
};

const TRUST_ITEMS = [
  {
    icon: "🕐",
    title: "30-minute consultation",
    desc: "We look at your situation and tell you exactly what you need — no vague advice.",
  },
  {
    icon: "💸",
    title: "Completely free",
    desc: "No credit card, no commitment. The consultation costs you nothing.",
  },
  {
    icon: "📍",
    title: "Serving Austin & beyond",
    desc: "Based in Austin, TX — we work with businesses locally and across Texas remotely.",
  },
  {
    icon: "⚡",
    title: "Response within 1 business day",
    desc: "We don't let inquiries sit. You'll hear from us quickly.",
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="bg-linear-to-br from-emerald-50 via-white to-teal-50 py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex justify-center items-center gap-2 text-sm text-gray-400">
              <li><Link href="/" className="hover:text-emerald-600 transition-colors">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-gray-600 font-medium" aria-current="page">Contact</li>
            </ol>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
            Book a{" "}
            <span className="text-emerald-600">Free Consultation</span>
          </h1>
          <p className="mt-5 text-lg text-gray-600 max-w-xl mx-auto leading-relaxed">
            Tell us about your situation. We'll take a look and tell
            you exactly what you need — no pressure, no commitment.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-8">
                What to expect
              </h2>
              <div className="space-y-6">
                {TRUST_ITEMS.map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div
                      className="text-2xl shrink-0 w-10 h-10 bg-emerald-50 rounded-lg flex items-center justify-center"
                      aria-hidden="true"
                    >
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 pt-8 border-t border-gray-100">
                <h3 className="font-semibold text-gray-900 mb-4">
                  Prefer to reach out directly?
                </h3>
                <address className="not-italic space-y-3">
                  <a href="tel:+15125550142" className="flex items-center gap-3 text-sm text-gray-600 hover:text-emerald-600 transition-colors">
                    📞 (512) 555-0142
                  </a>
                  <a href="mailto:hello@clearledgerbookkeeping.com" className="flex items-center gap-3 text-sm text-gray-600 hover:text-emerald-600 transition-colors">
                    ✉️ hello@clearledgerbookkeeping.com
                  </a>
                  <p className="flex items-center gap-3 text-sm text-gray-600">
                    📍 Austin, TX — serving businesses remotely across Texas
                  </p>
                </address>
              </div>
            </div>

            <div>
              <LeadForm />
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
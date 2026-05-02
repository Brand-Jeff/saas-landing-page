"use client";

import { useForm, ValidationError } from "@formspree/react";
import Link from "next/link";

const SERVICES = [
  "Monthly Bookkeeping",
  "Catch-Up Bookkeeping",
  "QuickBooks Setup",
  "Tax Prep Support",
  "Not sure yet",
];

export default function LeadForm() {
  const [state, handleSubmit] = useForm(
    process.env.NEXT_PUBLIC_FORMSPREE_ID!
  );

  if (state.succeeded) {
    return (
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-10 text-center">
        <div className="text-5xl mb-4">✅</div>
        <h2 className="text-2xl font-bold text-gray-900 mb-3">
          We&apos;ll be in touch soon!
        </h2>
        <p className="text-gray-500 mb-6 leading-relaxed">
          Thanks for reaching out. A member of our team will contact
          you within one business day to schedule your free consultation.
        </p>
        <Link href="/" className="inline-flex px-6 py-3 rounded-lg bg-emerald-600 text-white font-semibold hover:bg-emerald-700 transition-colors">
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 space-y-6" noValidate>
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">
          Full name <span className="text-red-500" aria-hidden="true">*</span>
        </label>
        <input id="name" type="text" name="name" required autoComplete="name" placeholder="Jane Smith"
          className="w-full px-4 py-3 rounded-lg border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-shadow text-sm"
        />
        <ValidationError prefix="Name" field="name" errors={state.errors} className="mt-1 text-xs text-red-500" />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
          Email address <span className="text-red-500" aria-hidden="true">*</span>
        </label>
        <input id="email" type="email" name="email" required autoComplete="email" placeholder="jane@yourbusiness.com"
          className="w-full px-4 py-3 rounded-lg border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-shadow text-sm"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} className="mt-1 text-xs text-red-500" />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1.5">
          Phone number <span className="text-gray-400 font-normal ml-1">(optional)</span>
        </label>
        <input id="phone" type="tel" name="phone" autoComplete="tel" placeholder="(512) 555-0100"
          className="w-full px-4 py-3 rounded-lg border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-shadow text-sm"
        />
      </div>

      <div>
        <label htmlFor="business" className="block text-sm font-medium text-gray-700 mb-1.5">
          Business name <span className="text-gray-400 font-normal ml-1">(optional)</span>
        </label>
        <input id="business" type="text" name="business" placeholder="Acme LLC"
          className="w-full px-4 py-3 rounded-lg border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-shadow text-sm"
        />
      </div>

      <div>
        <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1.5">
          What service are you interested in?
        </label>
        <select id="service" name="service"
          className="w-full px-4 py-3 rounded-lg border border-gray-200 text-gray-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-shadow text-sm bg-white"
        >
          <option value="">Select a service...</option>
          {SERVICES.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">
          Tell us about your situation <span className="text-gray-400 font-normal ml-1">(optional)</span>
        </label>
        <textarea id="message" name="message" rows={4}
          placeholder="E.g. I'm a freelance designer, about 6 months behind on my books..."
          className="w-full px-4 py-3 rounded-lg border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-shadow text-sm resize-none"
        />
        <ValidationError prefix="Message" field="message" errors={state.errors} className="mt-1 text-xs text-red-500" />
      </div>

      <ValidationError errors={state.errors} className="text-sm text-red-500 bg-red-50 px-4 py-3 rounded-lg" />

      <button type="submit" disabled={state.submitting}
        className="w-full px-6 py-4 rounded-lg bg-emerald-600 text-white font-bold text-base hover:bg-emerald-700 disabled:opacity-60 disabled:cursor-not-allowed transition-colors shadow-sm"
      >
        {state.submitting ? "Sending..." : "Book My Free Consultation"}
      </button>

      <p className="text-xs text-gray-400 text-center">
        No spam. No commitment. We&apos;ll respond within one business day.
      </p>
    </form>
  );
}
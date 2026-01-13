"use client";

import { useEffect, useMemo, useState } from "react";

export default function QuoteForm() {
  // ✅ PUT YOUR REAL FORMSPREE ENDPOINT HERE (example format shown)
  // Example: https://formspree.io/f/abcdwxyz
  const FORMSPREE_URL = "https://formspree.io/f/xjgknnjo";

  const [nextUrl, setNextUrl] = useState<string>("");

  // show success if we come back with ?sent=1
  const sent = useMemo(() => {
    if (typeof window === "undefined") return false;
    return new URLSearchParams(window.location.search).get("sent") === "1";
  }, []);

  useEffect(() => {
    // After submission, Formspree can redirect back to your site
    // This builds a correct URL for localhost now and your domain later.
    if (typeof window !== "undefined") {
      setNextUrl(`${window.location.origin}/?sent=1#contact`);
    }
  }, []);

  return (
    <div className="rounded-3xl border border-white/15 bg-white/5 p-6">
      <div className="text-sm font-semibold text-white/70">Request a Quote</div>
      <div className="mt-1 text-xl font-extrabold">Fast estimate — no pressure</div>

      {sent && (
        <div className="mt-4 rounded-2xl border border-white/20 bg-white/10 p-4">
          <div className="font-extrabold">✅ Sent!</div>
          <div className="mt-1 text-sm text-white/75">
            We got your request. We’ll reach out soon.
          </div>
        </div>
      )}

      <form
        action={FORMSPREE_URL}
        method="POST"
        className="mt-4 grid grid-cols-1 gap-3"
      >
        {/* Redirect back to your site after submit (works best with full URL) */}
        {nextUrl ? <input type="hidden" name="_next" value={nextUrl} /> : null}

        {/* Optional: subject line in the email */}
        <input type="hidden" name="_subject" value="New Haven Quote Request" />

        {/* honeypot anti-spam */}
        <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />

        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          <Field label="Name" name="name" placeholder="Your name" required />
          <Field label="Phone" name="phone" placeholder="(251) ___-____" required />
        </div>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          <Field label="Email (optional)" name="email" type="email" placeholder="you@email.com" />
          <Field label="City" name="city" placeholder="Daphne / Fairhope / Baldwin County" />
        </div>

        <Field label="Address / Neighborhood" name="address" placeholder="Optional but helps for pricing" />

        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          <Select
            label="Service"
            name="service"
            required
            options={["Mowing", "Edging & Trimming", "Seasonal Cleanup", "Pressure Washing", "Other"]}
          />
          <Select
            label="Frequency"
            name="frequency"
            required
            options={["One-time", "Weekly", "Bi-weekly", "Monthly", "Not sure"]}
          />
        </div>

        <div>
          <label className="mb-1 block text-xs font-semibold text-white/70">Details</label>
          <textarea
            name="details"
            placeholder="Gate code, yard size estimate, what you want done, etc."
            className="h-24 w-full rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none focus:border-white/30"
          />
        </div>

        {/* NOTE: File uploads often require a paid plan on form tools.
            If you want zero issues, leave this out for now. */}
        {/* <div>
          <label className="mb-1 block text-xs font-semibold text-white/70">Photos (optional)</label>
          <input
            type="file"
            name="photos"
            multiple
            accept="image/*"
            className="w-full rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white file:mr-3 file:rounded-xl file:border-0 file:bg-white/10 file:px-3 file:py-2 file:text-xs file:font-extrabold file:text-white hover:file:bg-white/15"
          />
        </div> */}

        <button
          type="submit"
          className="mt-1 rounded-2xl bg-white px-5 py-3 text-sm font-extrabold text-slate-950"
        >
          Send Quote Request
        </button>

        <p className="text-xs text-white/45">
          Prefer faster?{" "}
          <a className="underline" href="tel:2514223362">Call</a>{" "}
          or{" "}
          <a className="underline" href="sms:12514223362">text</a>{" "}
          (251) 422-3362.
        </p>
      </form>
    </div>
  );
}

function Field({
  label,
  name,
  placeholder,
  required,
  type = "text",
}: {
  label: string;
  name: string;
  placeholder?: string;
  required?: boolean;
  type?: string;
}) {
  return (
    <div>
      <label className="mb-1 block text-xs font-semibold text-white/70">{label}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none focus:border-white/30"
      />
    </div>
  );
}

function Select({
  label,
  name,
  options,
  required,
}: {
  label: string;
  name: string;
  options: string[];
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-1 block text-xs font-semibold text-white/70">{label}</label>
      <select
        name={name}
        required={required}
        className="w-full rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white outline-none focus:border-white/30"
        defaultValue=""
      >
        <option value="" disabled className="text-slate-900">
          Select…
        </option>
        {options.map((o) => (
          <option key={o} value={o} className="text-slate-900">
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}

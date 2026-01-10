import Image from "next/image";
import QuoteForm from "@/components/QuoteForm";

export default function Page() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-black/10 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4">
          <div className="flex items-center gap-3">
            {/* NEW: icon logo */}
            <Image
              src="/brand/haven-icon.png"
              alt="Haven Lawn Care icon"
              width={36}
              height={36}
              priority
              className="rounded-xl"
            />

            <div className="leading-tight">
              <div className="font-extrabold tracking-tight">
                Haven <span className="font-semibold text-slate-700">Lawn Care</span>
              </div>
              <div className="text-xs text-slate-600">Daphne • Fairhope • Baldwin County</div>
            </div>
          </div>

          <nav className="hidden items-center gap-4 md:flex">
            <a className="text-sm font-semibold text-slate-700 hover:text-slate-950" href="#services">
              Services
            </a>
            <a className="text-sm font-semibold text-slate-700 hover:text-slate-950" href="#work">
              Work
            </a>
            <a className="text-sm font-semibold text-slate-700 hover:text-slate-950" href="#contact">
              Contact
            </a>
            <a
              className="rounded-full bg-slate-950 px-4 py-2 text-sm font-extrabold text-white shadow-xl hover:opacity-95"
              href="tel:2514223362"
            >
              Call (251) 422-3362
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-b from-white via-emerald-50/60 to-white">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-4 px-5 py-10 md:grid-cols-2">
          <div>
            {/* NEW: full logo */}

            <p className="inline-flex items-center rounded-full border border-black/10 bg-white/70 px-3 py-2 text-xs font-semibold text-slate-700">
              Local Lawn Care • “People you can trust” We care about you!
            </p>

            <h1 className="mt-4 text-4xl font-extrabold tracking-tight md:text-6xl">
              Clean lawns. <span className="text-slate-700">Sharp edges.</span>
              <br />
              <span className="bg-gradient-to-br from-slate-950 to-emerald-700 bg-clip-text text-transparent">
                Haven-level detail.
              </span>
            </h1>

            <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-700 md:text-lg">
              Serving <span className="font-bold text-slate-900">Daphne & Fairhope</span> with mowing, edging, trimming,
              seasonal cleanups, and pressure washing. Fast quotes. Reliable scheduling. Professional finish.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="rounded-full bg-gradient-to-br from-slate-950 to-emerald-800 px-5 py-3 text-sm font-extrabold text-white shadow-2xl"
              >
                Get a Quote
              </a>
              <a
                href="sms:12514223362"
                className="rounded-full border border-black/15 bg-white px-5 py-3 text-sm font-extrabold text-slate-950"
              >
                Text
              </a>
              <a
                href="tel:2514223362"
                className="rounded-full border border-black/15 bg-white px-5 py-3 text-sm font-extrabold text-slate-950"
              >
                Call
              </a>
            </div>

            <div className="mt-6 flex flex-wrap gap-2 text-xs text-slate-700">
              <span className="rounded-full border border-black/10 bg-white/70 px-3 py-2">✅ Weekly / Bi-weekly</span>
              <span className="rounded-full border border-black/10 bg-white/70 px-3 py-2">⭐ Consistent crew</span>
              <span className="rounded-full border border-black/10 bg-white/70 px-3 py-2">🧼 Clean finish</span>
            </div>
          </div>

          <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-2xl">
            <div className="flex items-baseline justify-between">
              <h3 className="text-lg font-extrabold">Quick Estimate</h3>
              <span className="text-xs font-semibold text-slate-600">Reply fast (edit)</span>
            </div>

            <div className="mt-4 space-y-3 text-sm">
              <Row label="Service Area" value="Daphne / Fairhope" />
              <Row label="Services" value="Lawn Care + Pressure washing" />
              <Row label="Phone" value="(251) 422-3362" />
            </div>

            <a
              href="#contact"
              className="mt-5 block rounded-2xl bg-slate-950 px-5 py-3 text-center text-sm font-extrabold text-white shadow-xl"
            >
              Request a Quote
            </a>

            <p className="mt-3 text-xs text-slate-600">
              Add 3 reviews + before/after pics for a huge trust boost.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-14">
        <div className="mx-auto max-w-6xl px-5">
          <h2 className="text-3xl font-extrabold tracking-tight">Services</h2>
          <p className="mt-2 max-w-2xl text-slate-700">Simple menu, premium execution.</p>

          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
            <Card title="Mowing" desc="Consistent cut height, straight lines, clean finish." />
            <Card title="Edging & Trimming" desc="Crisp edges + detailed trimming around beds and fences." />
            <Card title="Seasonal Cleanups" desc="Leaves, debris removal, curb-appeal resets." />
            <Card title="Pressure Washing" desc="Driveways, sidewalks, patios, fences (as needed)." />
            <Card title="Add-ons" desc="Weeding, light mulching, touch-ups (customize)." />
            <Card title="Recurring Plans" desc="Weekly / bi-weekly routes for predictable service." />
          </div>
        </div>
      </section>

      {/* Work */}
      <section id="work" className="bg-emerald-50/60 py-14">
        <div className="mx-auto max-w-6xl px-5">
          <h2 className="text-3xl font-extrabold tracking-tight">Recent Work</h2>

          <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="aspect-[4/3] rounded-2xl border border-black/10 bg-gradient-to-br from-slate-950/10 to-emerald-700/20"
                title="Replace with your photo"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-slate-950 py-14 text-white">
        <div className="mx-auto max-w-6xl px-5">
          <h2 className="text-3xl font-extrabold tracking-tight">Get a Quote</h2>
          <p className="mt-2 max-w-2xl text-white/75">
            Call or text and we’ll get you a fast estimate.
          </p>

          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
            <QuoteForm />

            <div className="rounded-3xl border border-white/15 bg-white/5 p-6">
              <div className="text-sm font-semibold text-white/70">Phone</div>
              <div className="mt-1 text-2xl font-extrabold">(251) 422-3362</div>
              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  className="rounded-full border border-white/20 px-5 py-3 text-sm font-extrabold"
                  href="tel:2514223362"
                >
                  Call
                </a>
                <a
                  className="rounded-full border border-white/20 px-5 py-3 text-sm font-extrabold"
                  href="sms:12514223362"
                >
                  Text
                </a>
              </div>

              <div className="mt-6 text-sm text-white/70">
                <div className="font-extrabold text-white">Service Area</div>
                Daphne • Fairhope • Nearby
              </div>
            </div>
          </div>

          <div className="mt-10 text-xs text-white/55">
            © {new Date().getFullYear()} Haven Lawn Care
          </div>
        </div>
      </section>
    </main>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-4">
      <div className="text-slate-600">{label}</div>
      <div className="font-bold text-slate-900">{value}</div>
    </div>
  );
}

function Card({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm">
      <div className="text-base font-extrabold">{title}</div>
      <div className="mt-2 text-sm leading-relaxed text-slate-700">{desc}</div>
    </div>
  );
}

import QuoteForm from "@/components/QuoteForm";

export default function Page() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-black/10 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-slate-950 via-emerald-900 to-slate-950 shadow-lg" />
            <div>
              <div className="font-extrabold tracking-tight">
                Haven <span className="font-semibold text-slate-700">Landscaping & Lawncare</span>
              </div>
              <div className="text-xs text-slate-600">
                Daphne • Fairhope • Baldwin County
              </div>
            </div>
          </div>

          <nav className="hidden gap-4 md:flex">
            <a href="#services" className="text-sm font-semibold text-slate-700 hover:text-slate-950">
              Services
            </a>
            <a href="#work" className="text-sm font-semibold text-slate-700 hover:text-slate-950">
              Work
            </a>
            <a href="#contact" className="text-sm font-semibold text-slate-700 hover:text-slate-950">
              Contact
            </a>
            <a
              href="tel:2514223362"
              className="rounded-full bg-slate-950 px-4 py-2 text-sm font-extrabold text-white shadow-xl"
            >
              Call (251) 422-3362
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-b from-white via-emerald-50/60 to-white">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-5 py-16 md:grid-cols-2">
          <div>
            <p className="inline-block rounded-full border border-black/10 bg-white/70 px-3 py-2 text-xs font-semibold text-slate-700">
              Premium lawn care • future-of-care service
            </p>

            <h1 className="mt-4 text-4xl font-extrabold tracking-tight md:text-6xl">
              Clean lawns. <span className="text-slate-700">Sharp edges.</span>
              <br />
              <span className="bg-gradient-to-br from-slate-950 to-emerald-700 bg-clip-text text-transparent">
                Haven-level detail.
              </span>
            </h1>

            <p className="mt-4 max-w-xl text-slate-700 md:text-lg">
              Serving <b>Daphne & Fairhope</b> with mowing, edging, trimming,
              seasonal cleanups, and pressure washing. Reliable scheduling and
              professional results.
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
                className="rounded-full border border-black/15 bg-white px-5 py-3 text-sm font-extrabold"
              >
                Text
              </a>
              <a
                href="tel:2514223362"
                className="rounded-full border border-black/15 bg-white px-5 py-3 text-sm font-extrabold"
              >
                Call
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-2xl">
            <h3 className="text-lg font-extrabold">Quick Estimate</h3>
            <p className="mt-1 text-sm text-slate-600">
              Fast response • No pressure
            </p>

            <div className="mt-4 space-y-2 text-sm">
              <Row label="Service Area" value="Daphne / Fairhope" />
              <Row label="Services" value="Lawn care + Pressure washing" />
              <Row label="Phone" value="(251) 422-3362" />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-14">
        <div className="mx-auto max-w-6xl px-5">
          <h2 className="text-3xl font-extrabold">Services</h2>
          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
            <Card title="Mowing" desc="Consistent cut height and clean lines." />
            <Card title="Edging & Trimming" desc="Sharp edges and detailed trimming." />
            <Card title="Seasonal Cleanups" desc="Leaves, debris, curb appeal resets." />
            <Card title="Pressure Washing" desc="Driveways, sidewalks, patios." />
            <Card title="Add-ons" desc="Weeding, light mulching, touch-ups." />
            <Card title="Recurring Plans" desc="Weekly or bi-weekly service." />
          </div>
        </div>
      </section>

      {/* Work */}
      <section id="work" className="bg-emerald-50/60 py-14">
        <div className="mx-auto max-w-6xl px-5">
          <h2 className="text-3xl font-extrabold">Recent Work</h2>
          <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="aspect-[4/3] rounded-2xl border border-black/10 bg-gradient-to-br from-slate-950/10 to-emerald-700/20"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-slate-950 py-16 text-white">
        <div className="mx-auto max-w-6xl px-5">
          <h2 className="text-3xl font-extrabold">Get a Quote</h2>
          <p className="mt-2 text-white/70">
            Fill out the form or call/text for a fast estimate.
          </p>

          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
            <QuoteForm />

            <div className="rounded-3xl border border-white/15 bg-white/5 p-6">
              <div className="text-sm font-semibold text-white/70">Phone</div>
              <div className="mt-1 text-2xl font-extrabold">(251) 422-3362</div>
              <div className="mt-4 flex gap-3">
                <a
                  href="tel:2514223362"
                  className="rounded-full border border-white/20 px-5 py-3 text-sm font-extrabold"
                >
                  Call
                </a>
                <a
                  href="sms:12514223362"
                  className="rounded-full border border-white/20 px-5 py-3 text-sm font-extrabold"
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

          <div className="mt-10 text-xs text-white/50">
            © {new Date().getFullYear()} Haven Landscaping & Lawncare
          </div>
        </div>
      </section>
    </main>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between text-sm">
      <span className="text-slate-600">{label}</span>
      <span className="font-bold text-slate-900">{value}</span>
    </div>
  );
}

function Card({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm">
      <div className="font-extrabold">{title}</div>
      <div className="mt-2 text-sm text-slate-700">{desc}</div>
    </div>
  );
}

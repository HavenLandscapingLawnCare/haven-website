import Image from "next/image";

export default function Page() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* NAVBAR */}
      <header className="flex items-center justify-between px-6 py-4 border-b">
        <div className="flex items-center gap-3">
          <Image
            src="/brand/haven-icon.png"
            alt="Haven Lawncare icon"
            width={36}
            height={36}
            priority
          />
          <span className="text-lg font-semibold tracking-wide">
            Haven Lawncare
          </span>
        </div>

        <nav className="flex gap-6 text-sm font-medium">
          <a href="#services">Services</a>
          <a href="#quote">Get a Quote</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* HERO */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-24">
        <Image
          src="/brand/haven-logo.png"
          alt="Haven Lawncare logo"
          width={300}
          height={90}
          priority
          className="mb-8"
        />

        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          A Safe Haven for Your Lawn
        </h1>

        <p className="text-lg text-gray-600 max-w-xl mb-8">
          Premium lawn care, landscaping, and pressure washing
          in Daphne & Fairhope.
        </p>

        <a
          href="#quote"
          className="bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-800 transition"
        >
          Get a Free Quote
        </a>
      </section>

      {/* SERVICES */}
      <section id="services" className="px-6 py-20 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Services
        </h2>

        <div className="grid gap-8 max-w-5xl mx-auto md:grid-cols-3">
          <ServiceCard title="Lawn Mowing" />
          <ServiceCard title="Edging & Trimming" />
          <ServiceCard title="Seasonal Cleanups" />
          <ServiceCard title="Pressure Washing" />
          <ServiceCard title="Mulch & Beds" />
          <ServiceCard title="Routine Maintenance" />
        </div>
      </section>

      {/* QUOTE */}
      <section
        id="quote"
        className="px-6 py-24 text-center bg-green-700 text-white"
      >
        <h2 className="text-3xl font-bold mb-4">
          Get a Free Quote
        </h2>

        <p className="mb-8">
          Fast responses. No pressure. Reliable service.
        </p>

        <a
          href="tel:2514223362"
          className="inline-block bg-white text-green-700 px-8 py-4 rounded-lg font-semibold"
        >
          Call (251) 422-3362
        </a>
      </section>

      {/* FOOTER */}
      <footer
        id="contact"
        className="px-6 py-10 text-center text-sm text-gray-500"
      >
        © {new Date().getFullYear()} Haven Lawncare • Daphne & Fairhope
      </footer>
    </main>
  );
}

function ServiceCard({ title }: { title: string }) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm text-center">
      <h3 className="font-semibold text-lg">{title}</h3>
    </div>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { Check, Clock, MapPin, Star } from "lucide-react";

import { DIRECTIONS_URL, Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import heroImage from "@/assets/hero-laundromat.jpg";
import towelsImage from "@/assets/folded-towels.jpg";

const TITLE = "Lavandería LaColada Teruel — Self-Service Laundry";
const DESCRIPTION =
  "Self-service laundry in Teruel: modern washers and dryers, detergent and softener included, 30-minute cycles. Open every day 8:00–22:00, Calle Santa Amalia 15.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
    ],
  }),
  component: Index,
});

const services = [
  {
    title: "Express Washing",
    text: "Modern washing machines with fast 30-minute cycles.",
  },
  {
    title: "Large Capacity Machines",
    text: "Perfect for blankets, duvets and family loads.",
  },
  {
    title: "Dryers",
    text: "Powerful dryers that leave clothes ready to wear.",
  },
  {
    title: "Eco-Friendly Products",
    text: "Detergent and softener included with every wash.",
  },
];

const reasons = [
  "Open every day",
  "Modern machines",
  "Eco-friendly detergents",
  "Quick wash cycles",
];

const reviews = [
  { quote: "Excellent service, good machines and the best prices.", author: "Paul" },
  { quote: "Detergent is included and the machines are easy to use.", author: "Nejc" },
  { quote: "Very clean laundry and reliable machines.", author: "Customer" },
];

function SectionTitle({ children, kicker }: { children: string; kicker?: string }) {
  return (
    <div className="max-w-2xl">
      {kicker && (
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary">{kicker}</p>
      )}
      <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">{children}</h2>
    </div>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main>
        {/* Hero */}
        <section id="home" className="relative isolate overflow-hidden bg-card">
          <img
            src={heroImage}
            alt="Interior of a bright self-service laundromat with a row of washing machines"
            width={1920}
            height={1088}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-foreground/65" aria-hidden="true" />
          <div className="container-site relative py-24 sm:py-32">
            <div className="fade-in-up max-w-2xl">
              <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-primary-foreground sm:text-5xl">
                Clean Clothes. Fast. Easy. Every Day.
              </h1>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-primary-foreground/85 sm:text-lg">
                Self-service laundry in Teruel with modern machines, eco-friendly detergents included,
                and quick washing cycles.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={DIRECTIONS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-secondary"
                >
                  Get Directions
                </a>
                <a
                  href="#prices"
                  className="rounded-md border border-primary-foreground/40 px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
                >
                  View Prices
                </a>
              </div>
              <p className="mt-8 flex items-center gap-2 text-sm text-primary-foreground/80">
                <Clock className="h-4 w-4" aria-hidden="true" />
                Open every day, 8:00 – 22:00
              </p>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="py-16 sm:py-24">
          <div className="container-site grid items-center gap-12 lg:grid-cols-2">
            <div>
              <SectionTitle kicker="About us">Your Local Self-Service Laundry</SectionTitle>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                Lavandería LaColada Teruel offers a quick and convenient laundry experience with modern
                washing and drying machines. Detergent and fabric softener are included, making every
                wash simple and hassle-free.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Open every day with easy-to-use machines designed for both locals and travelers.
              </p>
            </div>
            <img
              src={towelsImage}
              alt="Freshly washed white and blue towels folded in a laundry room"
              width={1200}
              height={912}
              loading="lazy"
              className="w-full rounded-md border border-border object-cover shadow-card"
            />
          </div>
        </section>

        {/* Services */}
        <section id="services" className="border-y border-border bg-card py-16 sm:py-24">
          <div className="container-site">
            <SectionTitle kicker="Services">What you can do here</SectionTitle>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {services.map((s) => (
                <article
                  key={s.title}
                  className="rounded-md border border-border bg-background p-6 transition-shadow hover:shadow-card"
                >
                  <h3 className="text-base font-bold text-foreground">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Prices */}
        <section id="prices" className="py-16 sm:py-24">
          <div className="container-site">
            <SectionTitle kicker="Prices">Simple, transparent pricing</SectionTitle>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              <div className="rounded-md border border-border bg-card p-6 shadow-card">
                <h3 className="text-lg font-bold text-foreground">Washing</h3>
                <dl className="mt-4 divide-y divide-border">
                  <div className="flex items-baseline justify-between py-3">
                    <dt className="text-sm text-muted-foreground">12 kg</dt>
                    <dd className="text-base font-semibold text-foreground">€5</dd>
                  </div>
                  <div className="flex items-baseline justify-between py-3">
                    <dt className="text-sm text-muted-foreground">16 kg</dt>
                    <dd className="text-base font-semibold text-foreground">€7</dd>
                  </div>
                </dl>
              </div>
              <div className="rounded-md border border-border bg-card p-6 shadow-card">
                <h3 className="text-lg font-bold text-foreground">Drying</h3>
                <dl className="mt-4 divide-y divide-border">
                  <div className="flex items-baseline justify-between py-3">
                    <dt className="text-sm text-muted-foreground">18 kg dryer</dt>
                    <dd className="text-base font-semibold text-foreground">from €3</dd>
                  </div>
                </dl>
              </div>
            </div>
            <p className="mt-6 text-sm text-muted-foreground">
              Detergent and fabric softener are included.
            </p>
          </div>
        </section>

        {/* Why choose us */}
        <section className="border-y border-border bg-card py-14">
          <div className="container-site grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {reasons.map((r) => (
              <div key={r} className="flex items-start gap-3">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                <p className="text-sm font-medium text-foreground">{r}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Reviews */}
        <section className="py-16 sm:py-24">
          <div className="container-site">
            <SectionTitle kicker="Reviews">What our customers say</SectionTitle>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {reviews.map((r) => (
                <figure key={r.author} className="rounded-md border border-border bg-card p-6">
                  <div className="flex gap-0.5" aria-label="Rated 5 out of 5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-secondary text-secondary" aria-hidden="true" />
                    ))}
                  </div>
                  <blockquote className="mt-4 text-sm leading-relaxed text-foreground">
                    “{r.quote}”
                  </blockquote>
                  <figcaption className="mt-4 text-sm font-medium text-muted-foreground">
                    — {r.author}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* Location */}
        <section id="location" className="border-y border-border bg-card py-16 sm:py-24">
          <div className="container-site grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <SectionTitle kicker="Location">Find Us</SectionTitle>
              <address className="mt-5 not-italic text-base leading-relaxed text-muted-foreground">
                Calle Santa Amalia 15
                <br />
                44003 Teruel
                <br />
                Spain
              </address>
              <a
                href={DIRECTIONS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-secondary"
              >
                <MapPin className="h-4 w-4" aria-hidden="true" />
                Get Directions
              </a>
            </div>
            <div className="overflow-hidden rounded-md border border-border bg-background shadow-card">
              <iframe
                title="Map showing Lavandería LaColada Teruel at Calle Santa Amalia 15"
                src="https://www.google.com/maps?q=Calle+Santa+Amalia+15,+44003+Teruel,+Spain&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-[320px] w-full border-0 sm:h-[380px]"
              />
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-16 sm:py-24">
          <div className="container-site">
            <SectionTitle kicker="Contact">Opening hours &amp; address</SectionTitle>
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              <div className="rounded-md border border-border bg-card p-6">
                <h3 className="text-base font-bold text-foreground">Opening Hours</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Open every day
                  <br />
                  8:00 – 22:00
                </p>
              </div>
              <div className="rounded-md border border-border bg-card p-6">
                <h3 className="text-base font-bold text-foreground">Address</h3>
                <address className="mt-3 not-italic text-sm leading-relaxed text-muted-foreground">
                  Calle Santa Amalia 15
                  <br />
                  44003 Teruel
                  <br />
                  Spain
                </address>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { Check, Clock, MapPin, Star } from "lucide-react";

import { DIRECTIONS_URL, Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { LangProvider, useLang } from "@/lib/i18n";
const heroUrl = "/interior-3.jpg";
const storefrontUrl = "/storefront.jpg";
const interior1Url = "/interior-1.jpg";
const interior2Url = "/interior-2.jpg";
const interior4Url = "/interior-4.jpg";
const waitingUrl = "/waiting-area.jpg";
const loungeUrl = "/lounge.jpg";
const clipUrl = "/lacolada-clip.mp4";
const posterUrl = "/poster.jpg";

const TITLE = "Lavandería LaColada Teruel — Lavandería autoservicio";
const DESCRIPTION =
  "Lavandería autoservicio en Teruel: lavadoras y secadoras modernas, detergente y suavizante incluidos, ciclos de 30 minutos. Abierto todos los días 8:00–22:00, Calle Santa Amalia 15.";

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
    <LangProvider>
      <Page />
    </LangProvider>
  );
}

function Page() {
  const { t } = useLang();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main>
        {/* Hero */}
        <section id="home" className="relative isolate overflow-hidden bg-card">
          <img
            src={heroUrl}
            alt={t.hero.imageAlt}
            width={1920}
            height={1088}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-foreground/65" aria-hidden="true" />
          <div className="container-site relative py-24 sm:py-32">
            <div className="fade-in-up max-w-2xl">
              <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-primary-foreground sm:text-5xl">
                {t.hero.title}
              </h1>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-primary-foreground/85 sm:text-lg">
                {t.hero.subtitle}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={DIRECTIONS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-secondary"
                >
                  {t.directions}
                </a>
                <a
                  href="#prices"
                  className="rounded-md border border-primary-foreground/40 px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
                >
                  {t.hero.viewPrices}
                </a>
              </div>
              <p className="mt-8 flex items-center gap-2 text-sm text-primary-foreground/80">
                <Clock className="h-4 w-4" aria-hidden="true" />
                {t.hero.hours}
              </p>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="py-16 sm:py-24">
          <div className="container-site grid items-center gap-12 lg:grid-cols-2">
            <div>
              <SectionTitle kicker={t.about.kicker}>{t.about.title}</SectionTitle>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">{t.about.p1}</p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">{t.about.p2}</p>
            </div>
            <img
              src={interior1Url}
              alt={t.about.imageAlt}
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
            <SectionTitle kicker={t.services.kicker}>{t.services.title}</SectionTitle>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {t.services.items.map((s) => (
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
            <SectionTitle kicker={t.prices.kicker}>{t.prices.title}</SectionTitle>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              <div className="rounded-md border border-border bg-card p-6 shadow-card">
                <h3 className="text-lg font-bold text-foreground">{t.prices.washing}</h3>
                <dl className="mt-4 divide-y divide-border">
                  <div className="flex items-baseline justify-between py-3">
                    <dt className="text-sm text-muted-foreground">{t.prices.kg12}</dt>
                    <dd className="text-base font-semibold text-foreground">€5</dd>
                  </div>
                  <div className="flex items-baseline justify-between py-3">
                    <dt className="text-sm text-muted-foreground">{t.prices.kg16}</dt>
                    <dd className="text-base font-semibold text-foreground">€7</dd>
                  </div>
                </dl>
              </div>
              <div className="rounded-md border border-border bg-card p-6 shadow-card">
                <h3 className="text-lg font-bold text-foreground">{t.prices.drying}</h3>
                <dl className="mt-4 divide-y divide-border">
                  <div className="flex items-baseline justify-between py-3">
                    <dt className="text-sm text-muted-foreground">{t.prices.dryer}</dt>
                    <dd className="text-base font-semibold text-foreground">{t.prices.from}</dd>
                  </div>
                </dl>
              </div>
            </div>
            <p className="mt-6 text-sm text-muted-foreground">{t.prices.note}</p>
          </div>
        </section>


        {/* Media / Gallery */}
        <section id="media" className="py-16 sm:py-24">
          <div className="container-site">
            <SectionTitle kicker={t.media.kicker}>{t.media.title}</SectionTitle>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
              {t.media.subtitle}
            </p>

            <Carousel opts={{ loop: true }} className="mt-10">
              <CarouselContent>
                <CarouselItem className="sm:basis-1/2 lg:basis-1/3">
                  <figure className="overflow-hidden rounded-md border border-border bg-card shadow-card">
                    <video
                      src={clipUrl}
                      poster={posterUrl}
                      controls
                      playsInline
                      preload="metadata"
                      className="h-56 w-full bg-foreground object-cover"
                    />
                    <figcaption className="px-4 py-3 text-sm text-muted-foreground">
                      {t.media.title}
                    </figcaption>
                  </figure>
                </CarouselItem>
                {[
                  storefrontUrl,
                  interior1Url,
                  interior2Url,
                  interior4Url,
                  waitingUrl,
                  loungeUrl,
                ].map((url, i) => (
                  <CarouselItem key={url} className="sm:basis-1/2 lg:basis-1/3">
                    <figure className="overflow-hidden rounded-md border border-border bg-card shadow-card">
                      <img
                        src={url}
                        alt={t.media.captions[i]}
                        loading="lazy"
                        className="h-56 w-full object-cover"
                      />
                      <figcaption className="px-4 py-3 text-sm text-muted-foreground">
                        {t.media.captions[i]}
                      </figcaption>
                    </figure>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2" />
              <CarouselNext className="right-2" />
            </Carousel>

          </div>
        </section>

        {/* Why choose us */}
        <section className="border-y border-border bg-card py-14">
          <div className="container-site grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {t.reasons.map((r) => (
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
            <SectionTitle kicker={t.reviews.kicker}>{t.reviews.title}</SectionTitle>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {t.reviews.items.map((r) => (
                <figure key={r.author} className="rounded-md border border-border bg-card p-6">
                  <div className="flex gap-0.5" aria-label={t.reviews.rating}>
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
              <SectionTitle kicker={t.location.kicker}>{t.location.title}</SectionTitle>
              <address className="mt-5 not-italic text-base leading-relaxed text-muted-foreground">
                Calle Santa Amalia 15
                <br />
                44003 Teruel
                <br />
                España
              </address>
              <a
                href={DIRECTIONS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-secondary"
              >
                <MapPin className="h-4 w-4" aria-hidden="true" />
                {t.directions}
              </a>
            </div>
            <div className="overflow-hidden rounded-md border border-border bg-background shadow-card">
              <iframe
                title={t.location.mapTitle}
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
            <SectionTitle kicker={t.contact.kicker}>{t.contact.title}</SectionTitle>
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              <div className="rounded-md border border-border bg-card p-6">
                <h3 className="text-base font-bold text-foreground">{t.contact.hoursTitle}</h3>
                <p className="mt-3 whitespace-pre-line text-sm leading-relaxed text-muted-foreground">
                  {t.contact.hoursValue}
                </p>
              </div>
              <div className="rounded-md border border-border bg-card p-6">
                <h3 className="text-base font-bold text-foreground">{t.contact.addressTitle}</h3>
                <address className="mt-3 not-italic text-sm leading-relaxed text-muted-foreground">
                  Calle Santa Amalia 15
                  <br />
                  44003 Teruel
                  <br />
                  España
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

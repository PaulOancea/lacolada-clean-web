import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { useLang } from "@/lib/i18n";
import { getLegalDoc } from "@/lib/legal";

type DocKey = "avisoLegal" | "privacidad" | "cookies";

export function LegalPage({ docKey }: { docKey: DocKey }) {
  const { lang } = useLang();
  const doc = getLegalDoc(lang, docKey);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="py-16 sm:py-20">
        <div className="container-site">
          <article className="mx-auto max-w-3xl">
            <h1 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
              {doc.title}
            </h1>
            <div className="mt-10 space-y-8">
              {doc.sections.map((s, i) => (
                <section key={i}>
                  {s.heading && (
                    <h2 className="text-lg font-bold tracking-tight text-foreground">{s.heading}</h2>
                  )}
                  <p className="mt-3 whitespace-pre-line text-base leading-relaxed text-muted-foreground">
                    {s.body}
                  </p>
                </section>
              ))}
            </div>
            {doc.disclaimer && (
              <p className="mt-12 border-t border-border pt-6 text-sm italic text-muted-foreground">
                {doc.disclaimer}
              </p>
            )}
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
}

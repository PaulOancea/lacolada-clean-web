import { DIRECTIONS_URL } from "./Navbar";
import { useLang } from "@/lib/i18n";

export function Footer() {
  const { t } = useLang();
  return (
    <footer className="border-t border-border bg-card">
      <div className="container-site flex flex-col gap-6 py-10 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-base font-bold tracking-tight text-primary">Lavandería LaColada Teruel</p>
          <p className="mt-1 text-sm text-muted-foreground">
            {t.footer.tagline}
          </p>
        </div>
        <nav aria-label={t.nav.home} className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
          <a href="#services" className="text-muted-foreground hover:text-primary">
            {t.nav.services}
          </a>
          <a href="#prices" className="text-muted-foreground hover:text-primary">
            {t.nav.prices}
          </a>
          <a href="#location" className="text-muted-foreground hover:text-primary">
            {t.nav.location}
          </a>
          <a href="#contact" className="text-muted-foreground hover:text-primary">
            {t.nav.contact}
          </a>
          <a
            href={DIRECTIONS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary"
          >
            {t.directions}
          </a>
        </nav>
      </div>
      <div className="border-t border-border/70">
        <div className="container-site py-5">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Lavandería LaColada Teruel. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
import { DIRECTIONS_URL } from "./Navbar";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container-site flex flex-col gap-6 py-10 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-base font-bold tracking-tight text-primary">Lavandería LaColada Teruel</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Calle Santa Amalia 15, 44003 Teruel, Spain · Open every day 8:00 – 22:00
          </p>
        </div>
        <nav aria-label="Footer navigation" className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
          <a href="#services" className="text-muted-foreground hover:text-primary">
            Services
          </a>
          <a href="#prices" className="text-muted-foreground hover:text-primary">
            Prices
          </a>
          <a href="#location" className="text-muted-foreground hover:text-primary">
            Location
          </a>
          <a href="#contact" className="text-muted-foreground hover:text-primary">
            Contact
          </a>
          <a
            href={DIRECTIONS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary"
          >
            Get Directions
          </a>
        </nav>
      </div>
      <div className="border-t border-border/70">
        <div className="container-site py-5">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Lavandería LaColada Teruel. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
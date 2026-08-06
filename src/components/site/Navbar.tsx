import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Prices", href: "#prices" },
  { label: "Location", href: "#location" },
  { label: "Contact", href: "#contact" },
];

export const DIRECTIONS_URL =
  "https://www.google.com/maps/dir/?api=1&destination=Calle+Santa+Amalia+15%2C+44003+Teruel%2C+Spain";

export function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const close = () => setOpen(false);
    window.addEventListener("hashchange", close);
    return () => window.removeEventListener("hashchange", close);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-card/95 backdrop-blur">
      <div className="container-site flex h-16 items-center justify-between gap-6">
        <a href="#home" className="flex flex-col leading-tight">
          <span className="text-base font-bold tracking-tight text-primary">Lavandería LaColada</span>
          <span className="text-[0.7rem] font-medium uppercase tracking-[0.18em] text-muted-foreground">
            Teruel
          </span>
        </a>

        <nav aria-label="Main navigation" className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-foreground transition-colors hover:text-primary"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={DIRECTIONS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-accent-foreground sm:inline-flex"
          >
            Get Directions
          </a>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border text-foreground md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav aria-label="Mobile navigation" className="border-t border-border bg-card md:hidden">
          <div className="container-site flex flex-col py-2">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b border-border/60 py-3 text-sm font-medium text-foreground last:border-0"
              >
                {l.label}
              </a>
            ))}
            <a
              href={DIRECTIONS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 mb-3 rounded-md bg-primary px-4 py-2.5 text-center text-sm font-semibold text-primary-foreground"
            >
              Get Directions
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
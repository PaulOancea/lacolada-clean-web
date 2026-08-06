import { Globe } from "lucide-react";

import { languages, useLang, type Lang } from "@/lib/i18n";

export function LanguageSelector({ className = "" }: { className?: string }) {
  const { lang, setLang, t } = useLang();

  return (
    <div className={`relative inline-flex items-center ${className}`}>
      <Globe
        className="pointer-events-none absolute left-2.5 h-4 w-4 text-muted-foreground"
        aria-hidden="true"
      />
      <label className="sr-only" htmlFor="language-selector">
        {t.langLabel}
      </label>
      <select
        id="language-selector"
        value={lang}
        onChange={(e) => setLang(e.target.value as Lang)}
        className="appearance-none rounded-md border border-border bg-card py-2 pl-8 pr-7 text-sm font-medium text-foreground transition-colors hover:border-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        {languages.map((l) => (
          <option key={l.code} value={l.code}>
            {l.short} — {l.label}
          </option>
        ))}
      </select>
      <span
        className="pointer-events-none absolute right-2.5 text-xs text-muted-foreground"
        aria-hidden="true"
      >
        ▾
      </span>
    </div>
  );
}
import { createFileRoute } from "@tanstack/react-router";

import { LegalPage } from "@/components/site/LegalPage";
import { LangProvider } from "@/lib/i18n";
import { getLegalDoc } from "@/lib/legal";

const doc = getLegalDoc("es", "privacidad");
const URL = "https://lacolada-clean-web.lovable.app/politica-privacidad";

export const Route = createFileRoute("/politica-privacidad")({
  head: () => ({
    meta: [
      { title: doc.metaTitle },
      { name: "description", content: doc.description },
      { property: "og:title", content: doc.metaTitle },
      { property: "og:description", content: doc.description },
      { property: "og:url", content: URL },
    ],
    links: [{ rel: "canonical", href: URL }],
  }),
  component: () => (
    <LangProvider>
      <LegalPage docKey="privacidad" />
    </LangProvider>
  ),
});

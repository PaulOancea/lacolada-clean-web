import type { Lang } from "@/lib/i18n";

export type LegalSection = { heading: string; body: string };
export type LegalDoc = {
  title: string;
  metaTitle: string;
  description: string;
  sections: LegalSection[];
  disclaimer?: string;
};

export const LAST_UPDATED = "6 de septiembre de 2026";

const TRANSLATION_NOTE: Record<Lang, string | undefined> = {
  es: undefined,
  en: "This is a translation. In case of discrepancy, the Spanish version prevails.",
  ro: "Aceasta este o traducere. În caz de discrepanță, prevalează versiunea în limba spaniolă.",
};

type DocKey = "avisoLegal" | "privacidad" | "cookies";

const docs: Record<Lang, Record<DocKey, LegalDoc>> = {
  es: {
    avisoLegal: {
      title: "Aviso legal",
      metaTitle: "Aviso legal — Lavandería LaColada Teruel",
      description:
        "Información legal del titular del sitio web de Lavandería LaColada Teruel, conforme al artículo 10 de la LSSI-CE.",
      sections: [
        {
          heading: "Titular del sitio web",
          body: `En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE), se informa de los siguientes datos:

Titular: Andreea Beatrice Postelnicu
Nombre comercial: Lavandería LaColada Teruel
NIF: X7471939K
Domicilio: Calle Santa Amalia 15, 44003 Teruel, España
Correo electrónico: lacoladateruel@gmail.com
Actividad: lavandería de autoservicio`,
        },
        {
          heading: "Objeto",
          body: "Este sitio web tiene como finalidad ofrecer información sobre los servicios, horarios, precios y ubicación de la lavandería de autoservicio Lavandería LaColada Teruel. No se realizan ventas ni contrataciones en línea a través de este sitio.",
        },
        {
          heading: "Condiciones de uso",
          body: "El acceso a este sitio web es gratuito y no requiere registro previo. El usuario se compromete a hacer un uso adecuado de los contenidos y a no emplearlos para actividades ilícitas o contrarias a la buena fe.",
        },
        {
          heading: "Propiedad intelectual e industrial",
          body: "Todos los contenidos del sitio web, incluidos textos, fotografías, vídeos, logotipos y diseño, son titularidad del titular del sitio o se utilizan con la debida autorización, y están protegidos por la normativa de propiedad intelectual e industrial. Queda prohibida su reproducción, distribución o transformación sin autorización expresa.",
        },
        {
          heading: "Responsabilidad",
          body: "El titular no se hace responsable de los daños derivados del uso indebido del sitio web, ni de las interrupciones del servicio por causas ajenas a su control. La información sobre precios y horarios se actualiza periódicamente, si bien pueden producirse variaciones; la información expuesta en el establecimiento físico prevalece sobre la publicada en este sitio.",
        },
        {
          heading: "Enlaces externos",
          body: "Este sitio contiene enlaces a servicios de terceros, como Google Maps, con la única finalidad de facilitar la localización del establecimiento. El titular no se responsabiliza del contenido ni de las políticas de dichos servicios.",
        },
        {
          heading: "Legislación aplicable",
          body: "Esta relación se rige por la legislación española. Para la resolución de cualquier controversia, las partes se someten a los juzgados y tribunales del domicilio del usuario cuando este tenga la condición de consumidor.",
        },
      ],
    },
    privacidad: {
      title: "Política de privacidad",
      metaTitle: "Política de privacidad — Lavandería LaColada Teruel",
      description:
        "Cómo trata Lavandería LaColada Teruel los datos personales: responsable, finalidad, conservación, destinatarios y derechos.",
      sections: [
        {
          heading: "Responsable del tratamiento",
          body: `Titular: Andreea Beatrice Postelnicu
NIF: X7471939K
Domicilio: Calle Santa Amalia 15, 44003 Teruel, España
Correo electrónico: lacoladateruel@gmail.com`,
        },
        {
          heading: "Datos que tratamos",
          body: `Este sitio web no dispone de formularios de contacto, área de usuario, registro ni suscripción, y no recoge datos personales de forma automática con fines comerciales o publicitarios.

Únicamente tratamos datos personales cuando el usuario nos escribe voluntariamente a la dirección de correo electrónico indicada. En ese caso tratamos su dirección de correo, su nombre si lo facilita, y el contenido del mensaje.`,
        },
        {
          heading: "Finalidad y base jurídica",
          body: "La finalidad es atender y responder a la consulta recibida. La base jurídica es el interés legítimo del responsable en atender las comunicaciones que se le dirigen, y, en su caso, la aplicación de medidas precontractuales a petición del interesado (artículo 6.1.b y 6.1.f del RGPD).",
        },
        {
          heading: "Conservación",
          body: "Los mensajes se conservan durante el tiempo necesario para atender la consulta y, posteriormente, durante los plazos legalmente exigibles. Después son suprimidos.",
        },
        {
          heading: "Destinatarios",
          body: `No se ceden datos a terceros, salvo obligación legal. Intervienen como encargados del tratamiento los siguientes proveedores:
- Vercel Inc., proveedor de alojamiento del sitio web.
- DonDominio (Soluciones Corporativas IP, S.L.U.), proveedor del servicio de correo electrónico y registro de dominio.`,
        },
        {
          heading: "Transferencias internacionales",
          body: "El alojamiento web puede implicar transferencias de datos a los Estados Unidos, amparadas en las garantías previstas en el Capítulo V del RGPD.",
        },
        {
          heading: "Derechos",
          body: "El usuario puede ejercer sus derechos de acceso, rectificación, supresión, oposición, limitación del tratamiento y portabilidad escribiendo a lacoladateruel@gmail.com, indicando el derecho que desea ejercer. Asimismo, puede presentar una reclamación ante la Agencia Española de Protección de Datos (www.aepd.es).",
        },
      ],
    },
    cookies: {
      title: "Política de cookies",
      metaTitle: "Política de cookies — Lavandería LaColada Teruel",
      description:
        "Este sitio no utiliza cookies de análisis, publicidad ni personalización. Información sobre cookies y almacenamiento local.",
      sections: [
        {
          heading: "Qué son las cookies",
          body: "Las cookies son pequeños archivos que un sitio web almacena en el navegador del usuario para recordar información sobre su visita.",
        },
        {
          heading: "Cookies utilizadas en este sitio",
          body: `Este sitio web no utiliza cookies de análisis, de publicidad, de personalización ni de ningún otro tipo que requiera consentimiento conforme al artículo 22.2 de la LSSI-CE.

No se cargan recursos de terceros que instalen cookies. El mapa de la sección Ubicación es una imagen estática y el botón "Cómo llegar" es un simple enlace que solo abre Google Maps si el usuario decide pulsarlo, en cuyo momento se aplicarán las políticas de Google.

En caso de utilizarse cookies o almacenamiento local estrictamente necesarios para el funcionamiento del sitio, como la preferencia de idioma, estos están exentos de consentimiento por ser imprescindibles para prestar el servicio solicitado por el usuario.`,
        },
        {
          heading: "Cambios en esta política",
          body: "Si en el futuro se incorporan herramientas que instalen cookies no esenciales, se actualizará esta política y se solicitará el consentimiento previo del usuario mediante un sistema de gestión de consentimiento.",
        },
        {
          heading: "",
          body: `Fecha de última actualización: ${LAST_UPDATED}`,
        },
      ],
    },
  },
  en: {
    avisoLegal: {
      title: "Legal notice",
      metaTitle: "Legal notice — Lavandería LaColada Teruel",
      description:
        "Legal information about the owner of the Lavandería LaColada Teruel website, under article 10 of the Spanish LSSI-CE.",
      sections: [
        {
          heading: "Website owner",
          body: `In compliance with article 10 of Act 34/2002 of 11 July, on Information Society Services and Electronic Commerce (LSSI-CE), the following details are provided:

Owner: Andreea Beatrice Postelnicu
Trade name: Lavandería LaColada Teruel
Tax ID (NIF): X7471939K
Address: Calle Santa Amalia 15, 44003 Teruel, Spain
Email: lacoladateruel@gmail.com
Activity: self-service laundry`,
        },
        {
          heading: "Purpose",
          body: "The purpose of this website is to provide information about the services, opening hours, prices and location of the self-service laundry Lavandería LaColada Teruel. No sales or online contracting take place through this site.",
        },
        {
          heading: "Terms of use",
          body: "Access to this website is free of charge and does not require prior registration. Users undertake to make appropriate use of the contents and not to use them for unlawful activities or activities contrary to good faith.",
        },
        {
          heading: "Intellectual and industrial property",
          body: "All contents of the website, including texts, photographs, videos, logos and design, are owned by the site owner or used with due authorisation, and are protected by intellectual and industrial property law. Their reproduction, distribution or transformation without express authorisation is prohibited.",
        },
        {
          heading: "Liability",
          body: "The owner is not liable for damages arising from improper use of the website, nor for service interruptions caused by circumstances beyond the owner's control. Information on prices and opening hours is updated periodically, although variations may occur; the information displayed at the physical premises prevails over that published on this site.",
        },
        {
          heading: "External links",
          body: "This site contains links to third-party services, such as Google Maps, for the sole purpose of making the premises easier to find. The owner is not responsible for the content or the policies of those services.",
        },
        {
          heading: "Applicable law",
          body: "This relationship is governed by Spanish law. For the resolution of any dispute, the parties submit to the courts and tribunals of the user's place of residence where the user is a consumer.",
        },
      ],
    },
    privacidad: {
      title: "Privacy policy",
      metaTitle: "Privacy policy — Lavandería LaColada Teruel",
      description:
        "How Lavandería LaColada Teruel handles personal data: controller, purpose, retention, recipients and your rights.",
      sections: [
        {
          heading: "Data controller",
          body: `Owner: Andreea Beatrice Postelnicu
Tax ID (NIF): X7471939K
Address: Calle Santa Amalia 15, 44003 Teruel, Spain
Email: lacoladateruel@gmail.com`,
        },
        {
          heading: "Data we process",
          body: `This website has no contact forms, user area, registration or subscription, and does not automatically collect personal data for commercial or advertising purposes.

We only process personal data when a user voluntarily writes to us at the email address indicated. In that case we process the email address, the name if provided, and the content of the message.`,
        },
        {
          heading: "Purpose and legal basis",
          body: "The purpose is to handle and reply to the enquiry received. The legal basis is the controller's legitimate interest in responding to the communications addressed to it and, where applicable, the taking of pre-contractual steps at the request of the data subject (articles 6.1.b and 6.1.f GDPR).",
        },
        {
          heading: "Retention",
          body: "Messages are kept for as long as necessary to handle the enquiry and, thereafter, for the periods required by law. They are then deleted.",
        },
        {
          heading: "Recipients",
          body: `Data is not disclosed to third parties, except where legally required. The following providers act as data processors:
- Vercel Inc., website hosting provider.
- DonDominio (Soluciones Corporativas IP, S.L.U.), email service and domain registration provider.`,
        },
        {
          heading: "International transfers",
          body: "Web hosting may involve transfers of data to the United States, covered by the safeguards set out in Chapter V of the GDPR.",
        },
        {
          heading: "Your rights",
          body: "Users may exercise their rights of access, rectification, erasure, objection, restriction of processing and portability by writing to lacoladateruel@gmail.com, stating the right they wish to exercise. They may also lodge a complaint with the Spanish Data Protection Agency (www.aepd.es).",
        },
      ],
    },
    cookies: {
      title: "Cookie policy",
      metaTitle: "Cookie policy — Lavandería LaColada Teruel",
      description:
        "This site uses no analytics, advertising or personalisation cookies. Information about cookies and local storage.",
      sections: [
        {
          heading: "What cookies are",
          body: "Cookies are small files that a website stores in the user's browser to remember information about their visit.",
        },
        {
          heading: "Cookies used on this site",
          body: `This website does not use analytics, advertising, personalisation or any other type of cookie requiring consent under article 22.2 of the LSSI-CE.

No third-party resources that install cookies are loaded. The map in the Location section is a static image and the "Get directions" button is a simple link that only opens Google Maps if the user chooses to click it, at which point Google's policies apply.

Where cookies or local storage strictly necessary for the operation of the site are used, such as the language preference, these are exempt from consent as they are essential to provide the service requested by the user.`,
        },
        {
          heading: "Changes to this policy",
          body: "If tools that install non-essential cookies are added in the future, this policy will be updated and the user's prior consent will be requested through a consent management system.",
        },
        {
          heading: "",
          body: "Last updated: 6 September 2026",
        },
      ],
    },
  },
  ro: {
    avisoLegal: {
      title: "Mențiuni legale",
      metaTitle: "Mențiuni legale — Lavandería LaColada Teruel",
      description:
        "Informații legale despre titularul site-ului Lavandería LaColada Teruel, conform articolului 10 din LSSI-CE.",
      sections: [
        {
          heading: "Titularul site-ului",
          body: `În conformitate cu articolul 10 din Legea 34/2002 din 11 iulie privind serviciile societății informaționale și comerțul electronic (LSSI-CE), se comunică următoarele date:

Titular: Andreea Beatrice Postelnicu
Denumire comercială: Lavandería LaColada Teruel
Cod fiscal (NIF): X7471939K
Adresă: Calle Santa Amalia 15, 44003 Teruel, Spania
E-mail: lacoladateruel@gmail.com
Activitate: spălătorie self-service`,
        },
        {
          heading: "Scop",
          body: "Acest site are ca scop oferirea de informații despre serviciile, programul, prețurile și locația spălătoriei self-service Lavandería LaColada Teruel. Prin intermediul acestui site nu se efectuează vânzări și nu se încheie contracte online.",
        },
        {
          heading: "Condiții de utilizare",
          body: "Accesul la acest site este gratuit și nu necesită înregistrare prealabilă. Utilizatorul se obligă să folosească în mod adecvat conținutul și să nu îl utilizeze pentru activități ilicite sau contrare bunei-credințe.",
        },
        {
          heading: "Proprietate intelectuală și industrială",
          body: "Tot conținutul site-ului, inclusiv textele, fotografiile, materialele video, logourile și designul, aparține titularului site-ului sau este utilizat cu autorizarea corespunzătoare și este protejat de legislația privind proprietatea intelectuală și industrială. Reproducerea, distribuirea sau transformarea acestuia fără autorizare expresă este interzisă.",
        },
        {
          heading: "Răspundere",
          body: "Titularul nu răspunde pentru prejudiciile rezultate din utilizarea necorespunzătoare a site-ului și nici pentru întreruperile serviciului din cauze independente de voința sa. Informațiile despre prețuri și program se actualizează periodic, însă pot apărea variații; informațiile afișate la sediul fizic prevalează asupra celor publicate pe acest site.",
        },
        {
          heading: "Linkuri externe",
          body: "Acest site conține linkuri către servicii ale unor terți, precum Google Maps, cu unicul scop de a facilita localizarea sediului. Titularul nu răspunde pentru conținutul sau politicile acestor servicii.",
        },
        {
          heading: "Legislație aplicabilă",
          body: "Această relație este guvernată de legislația spaniolă. Pentru soluționarea oricărui litigiu, părțile se supun instanțelor de la domiciliul utilizatorului, atunci când acesta are calitatea de consumator.",
        },
      ],
    },
    privacidad: {
      title: "Politica de confidențialitate",
      metaTitle: "Politica de confidențialitate — Lavandería LaColada Teruel",
      description:
        "Cum prelucrează Lavandería LaColada Teruel datele personale: operator, scop, păstrare, destinatari și drepturi.",
      sections: [
        {
          heading: "Operatorul de date",
          body: `Titular: Andreea Beatrice Postelnicu
Cod fiscal (NIF): X7471939K
Adresă: Calle Santa Amalia 15, 44003 Teruel, Spania
E-mail: lacoladateruel@gmail.com`,
        },
        {
          heading: "Datele pe care le prelucrăm",
          body: `Acest site nu are formulare de contact, zonă de utilizator, înregistrare sau abonare și nu colectează automat date personale în scopuri comerciale sau publicitare.

Prelucrăm date personale doar atunci când utilizatorul ne scrie voluntar la adresa de e-mail indicată. În acest caz prelucrăm adresa de e-mail, numele, dacă este furnizat, și conținutul mesajului.`,
        },
        {
          heading: "Scop și temei juridic",
          body: "Scopul este soluționarea și răspunsul la solicitarea primită. Temeiul juridic este interesul legitim al operatorului de a răspunde comunicărilor care îi sunt adresate și, după caz, aplicarea unor măsuri precontractuale la cererea persoanei vizate (articolele 6.1.b și 6.1.f din RGPD).",
        },
        {
          heading: "Păstrare",
          body: "Mesajele se păstrează pe durata necesară soluționării solicitării și, ulterior, pe termenele impuse legal. Apoi sunt șterse.",
        },
        {
          heading: "Destinatari",
          body: `Datele nu sunt cedate terților, cu excepția obligațiilor legale. Următorii furnizori intervin în calitate de persoane împuternicite:
- Vercel Inc., furnizor de găzduire a site-ului.
- DonDominio (Soluciones Corporativas IP, S.L.U.), furnizor al serviciului de e-mail și al înregistrării domeniului.`,
        },
        {
          heading: "Transferuri internaționale",
          body: "Găzduirea site-ului poate implica transferuri de date către Statele Unite, acoperite de garanțiile prevăzute în Capitolul V din RGPD.",
        },
        {
          heading: "Drepturi",
          body: "Utilizatorul își poate exercita drepturile de acces, rectificare, ștergere, opoziție, restricționare a prelucrării și portabilitate scriind la lacoladateruel@gmail.com, indicând dreptul pe care dorește să îl exercite. De asemenea, poate depune o plângere la Agenția Spaniolă pentru Protecția Datelor (www.aepd.es).",
        },
      ],
    },
    cookies: {
      title: "Politica de cookie-uri",
      metaTitle: "Politica de cookie-uri — Lavandería LaColada Teruel",
      description:
        "Acest site nu folosește cookie-uri de analiză, publicitate sau personalizare. Informații despre cookie-uri și stocarea locală.",
      sections: [
        {
          heading: "Ce sunt cookie-urile",
          body: "Cookie-urile sunt fișiere mici pe care un site le stochează în browserul utilizatorului pentru a reține informații despre vizita acestuia.",
        },
        {
          heading: "Cookie-uri utilizate pe acest site",
          body: `Acest site nu utilizează cookie-uri de analiză, de publicitate, de personalizare sau de orice alt tip care ar necesita consimțământ conform articolului 22.2 din LSSI-CE.

Nu se încarcă resurse ale terților care instalează cookie-uri. Harta din secțiunea Locație este o imagine statică, iar butonul „Vezi traseul” este un simplu link care deschide Google Maps doar dacă utilizatorul decide să îl apese, moment în care se aplică politicile Google.

În cazul utilizării unor cookie-uri sau a stocării locale strict necesare pentru funcționarea site-ului, precum preferința de limbă, acestea sunt exceptate de la consimțământ, fiind indispensabile pentru prestarea serviciului solicitat de utilizator.`,
        },
        {
          heading: "Modificări ale acestei politici",
          body: "Dacă în viitor vor fi integrate instrumente care instalează cookie-uri neesențiale, această politică va fi actualizată și se va solicita consimțământul prealabil al utilizatorului printr-un sistem de gestionare a consimțământului.",
        },
        {
          heading: "",
          body: "Data ultimei actualizări: 6 septembrie 2026",
        },
      ],
    },
  },
};

export function getLegalDoc(lang: Lang, key: DocKey): LegalDoc {
  return { ...docs[lang][key], disclaimer: TRANSLATION_NOTE[lang] };
}

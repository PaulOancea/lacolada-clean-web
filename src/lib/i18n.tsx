import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type Lang = "es" | "en" | "ro";

export const languages: { code: Lang; label: string; short: string }[] = [
  { code: "es", label: "Español", short: "ES" },
  { code: "en", label: "English", short: "EN" },
  { code: "ro", label: "Română", short: "RO" },
];

type Copy = {
  nav: { home: string; services: string; prices: string; location: string; contact: string };
  directions: string;
  hero: { title: string; subtitle: string; viewPrices: string; hours: string; imageAlt: string };
  about: { kicker: string; title: string; p1: string; p2: string; imageAlt: string };
  services: {
    kicker: string;
    title: string;
    items: { title: string; text: string }[];
  };
  prices: {
    kicker: string;
    title: string;
    washing: string;
    drying: string;
    kg12: string;
    kg16: string;
    dryer: string;
    from: string;
    note: string;
  };
  reasons: string[];
  reviews: { kicker: string; title: string; items: { quote: string; author: string }[]; rating: string };
  location: { kicker: string; title: string; mapTitle: string };
  contact: { kicker: string; title: string; hoursTitle: string; hoursValue: string; addressTitle: string };
  footer: { tagline: string; rights: string };
  langLabel: string;
};

const address = "Calle Santa Amalia 15\n44003 Teruel";

export const copy: Record<Lang, Copy> = {
  es: {
    nav: {
      home: "Inicio",
      services: "Servicios",
      prices: "Precios",
      location: "Ubicación",
      contact: "Contacto",
    },
    directions: "Cómo llegar",
    hero: {
      title: "Ropa limpia. Rápido. Fácil. Todos los días.",
      subtitle:
        "Lavandería autoservicio en Teruel con máquinas modernas, detergentes ecológicos incluidos y ciclos de lavado rápidos.",
      viewPrices: "Ver precios",
      hours: "Abierto todos los días, 8:00 – 22:00",
      imageAlt:
        "Interior de una lavandería autoservicio luminosa con una fila de lavadoras",
    },
    about: {
      kicker: "Sobre nosotros",
      title: "Tu lavandería autoservicio de barrio",
      p1: "Lavandería LaColada Teruel ofrece una experiencia de lavado rápida y cómoda con máquinas de lavado y secado modernas. El detergente y el suavizante están incluidos, para que cada lavado sea sencillo y sin complicaciones.",
      p2: "Abierto todos los días, con máquinas fáciles de usar pensadas tanto para vecinos como para viajeros.",
      imageAlt: "Toallas blancas y azules recién lavadas y dobladas",
    },
    services: {
      kicker: "Servicios",
      title: "Lo que puedes hacer aquí",
      items: [
        { title: "Lavado exprés", text: "Lavadoras modernas con ciclos rápidos de 30 minutos." },
        { title: "Máquinas de gran capacidad", text: "Ideales para mantas, edredones y coladas familiares." },
        { title: "Secadoras", text: "Secadoras potentes que dejan la ropa lista para usar." },
        { title: "Productos ecológicos", text: "Detergente y suavizante incluidos en cada lavado." },
      ],
    },
    prices: {
      kicker: "Precios",
      title: "Precios claros y sencillos",
      washing: "Lavado",
      drying: "Secado",
      kg12: "12 kg",
      kg16: "16 kg",
      dryer: "Secadora 18 kg",
      from: "desde 3 €",
      note: "El detergente y el suavizante están incluidos.",
    },
    reasons: [
      "Abierto todos los días",
      "Máquinas modernas",
      "Detergentes ecológicos",
      "Ciclos de lavado rápidos",
    ],
    reviews: {
      kicker: "Opiniones",
      title: "Lo que dicen nuestros clientes",
      rating: "Valoración 5 de 5",
      items: [
        { quote: "Excelente servicio, buenas máquinas y los mejores precios.", author: "Paul" },
        { quote: "El detergente está incluido y las máquinas son fáciles de usar.", author: "Nejc" },
        { quote: "Lavandería muy limpia y máquinas fiables.", author: "Cliente" },
      ],
    },
    location: {
      kicker: "Ubicación",
      title: "Dónde estamos",
      mapTitle: "Mapa con la ubicación de Lavandería LaColada Teruel, Calle Santa Amalia 15",
    },
    contact: {
      kicker: "Contacto",
      title: "Horario y dirección",
      hoursTitle: "Horario",
      hoursValue: "Abierto todos los días\n8:00 – 22:00",
      addressTitle: "Dirección",
    },
    footer: {
      tagline: `${address.replace("\n", ", ")}, España · Abierto todos los días 8:00 – 22:00`,
      rights: "Todos los derechos reservados.",
    },
    langLabel: "Idioma",
  },
  en: {
    nav: { home: "Home", services: "Services", prices: "Prices", location: "Location", contact: "Contact" },
    directions: "Get Directions",
    hero: {
      title: "Clean Clothes. Fast. Easy. Every Day.",
      subtitle:
        "Self-service laundry in Teruel with modern machines, eco-friendly detergents included, and quick washing cycles.",
      viewPrices: "View Prices",
      hours: "Open every day, 8:00 – 22:00",
      imageAlt: "Interior of a bright self-service laundromat with a row of washing machines",
    },
    about: {
      kicker: "About us",
      title: "Your Local Self-Service Laundry",
      p1: "Lavandería LaColada Teruel offers a quick and convenient laundry experience with modern washing and drying machines. Detergent and fabric softener are included, making every wash simple and hassle-free.",
      p2: "Open every day with easy-to-use machines designed for both locals and travelers.",
      imageAlt: "Freshly washed white and blue towels folded in a laundry room",
    },
    services: {
      kicker: "Services",
      title: "What you can do here",
      items: [
        { title: "Express Washing", text: "Modern washing machines with fast 30-minute cycles." },
        { title: "Large Capacity Machines", text: "Perfect for blankets, duvets and family loads." },
        { title: "Dryers", text: "Powerful dryers that leave clothes ready to wear." },
        { title: "Eco-Friendly Products", text: "Detergent and softener included with every wash." },
      ],
    },
    prices: {
      kicker: "Prices",
      title: "Simple, transparent pricing",
      washing: "Washing",
      drying: "Drying",
      kg12: "12 kg",
      kg16: "16 kg",
      dryer: "18 kg dryer",
      from: "from €3",
      note: "Detergent and fabric softener are included.",
    },
    reasons: ["Open every day", "Modern machines", "Eco-friendly detergents", "Quick wash cycles"],
    reviews: {
      kicker: "Reviews",
      title: "What our customers say",
      rating: "Rated 5 out of 5",
      items: [
        { quote: "Excellent service, good machines and the best prices.", author: "Paul" },
        { quote: "Detergent is included and the machines are easy to use.", author: "Nejc" },
        { quote: "Very clean laundry and reliable machines.", author: "Customer" },
      ],
    },
    location: {
      kicker: "Location",
      title: "Find Us",
      mapTitle: "Map showing Lavandería LaColada Teruel at Calle Santa Amalia 15",
    },
    contact: {
      kicker: "Contact",
      title: "Opening hours & address",
      hoursTitle: "Opening Hours",
      hoursValue: "Open every day\n8:00 – 22:00",
      addressTitle: "Address",
    },
    footer: {
      tagline: `${address.replace("\n", ", ")}, Spain · Open every day 8:00 – 22:00`,
      rights: "All rights reserved.",
    },
    langLabel: "Language",
  },
  ro: {
    nav: { home: "Acasă", services: "Servicii", prices: "Prețuri", location: "Locație", contact: "Contact" },
    directions: "Vezi traseul",
    hero: {
      title: "Haine curate. Rapid. Simplu. În fiecare zi.",
      subtitle:
        "Spălătorie self-service în Teruel, cu mașini moderne, detergenți ecologici incluși și cicluri rapide de spălare.",
      viewPrices: "Vezi prețurile",
      hours: "Deschis în fiecare zi, 8:00 – 22:00",
      imageAlt: "Interiorul unei spălătorii self-service luminoase, cu un rând de mașini de spălat",
    },
    about: {
      kicker: "Despre noi",
      title: "Spălătoria ta self-service din cartier",
      p1: "Lavandería LaColada Teruel oferă o experiență de spălare rapidă și comodă, cu mașini moderne de spălat și uscat. Detergentul și balsamul sunt incluse, așa că fiecare spălare este simplă și fără bătăi de cap.",
      p2: "Deschis în fiecare zi, cu mașini ușor de folosit, gândite atât pentru localnici, cât și pentru turiști.",
      imageAlt: "Prosoape albe și albastre proaspăt spălate și împăturite",
    },
    services: {
      kicker: "Servicii",
      title: "Ce poți face aici",
      items: [
        { title: "Spălare expres", text: "Mașini de spălat moderne, cu cicluri rapide de 30 de minute." },
        { title: "Mașini de mare capacitate", text: "Perfecte pentru pături, pilote și rufe de familie." },
        { title: "Uscătoare", text: "Uscătoare puternice care lasă hainele gata de purtat." },
        { title: "Produse ecologice", text: "Detergent și balsam incluse la fiecare spălare." },
      ],
    },
    prices: {
      kicker: "Prețuri",
      title: "Prețuri simple și transparente",
      washing: "Spălare",
      drying: "Uscare",
      kg12: "12 kg",
      kg16: "16 kg",
      dryer: "Uscător 18 kg",
      from: "de la 3 €",
      note: "Detergentul și balsamul de rufe sunt incluse.",
    },
    reasons: [
      "Deschis în fiecare zi",
      "Mașini moderne",
      "Detergenți ecologici",
      "Cicluri rapide de spălare",
    ],
    reviews: {
      kicker: "Recenzii",
      title: "Ce spun clienții noștri",
      rating: "Evaluare 5 din 5",
      items: [
        { quote: "Servicii excelente, mașini bune și cele mai bune prețuri.", author: "Paul" },
        { quote: "Detergentul este inclus, iar mașinile sunt ușor de folosit.", author: "Nejc" },
        { quote: "Spălătorie foarte curată și mașini de încredere.", author: "Client" },
      ],
    },
    location: {
      kicker: "Locație",
      title: "Unde ne găsești",
      mapTitle: "Hartă cu locația Lavandería LaColada Teruel, Calle Santa Amalia 15",
    },
    contact: {
      kicker: "Contact",
      title: "Program și adresă",
      hoursTitle: "Program",
      hoursValue: "Deschis în fiecare zi\n8:00 – 22:00",
      addressTitle: "Adresă",
    },
    footer: {
      tagline: `${address.replace("\n", ", ")}, Spania · Deschis în fiecare zi 8:00 – 22:00`,
      rights: "Toate drepturile rezervate.",
    },
    langLabel: "Limbă",
  },
};

const STORAGE_KEY = "lacolada-lang";

const LangContext = createContext<{ lang: Lang; setLang: (l: Lang) => void; t: Copy }>({
  lang: "es",
  setLang: () => {},
  t: copy.es,
});

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("es");

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY) as Lang | null;
    if (stored && stored in copy) setLang(stored);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const value = useMemo(
    () => ({
      lang,
      setLang: (l: Lang) => {
        setLang(l);
        window.localStorage.setItem(STORAGE_KEY, l);
      },
      t: copy[lang],
    }),
    [lang],
  );

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang() {
  return useContext(LangContext);
}
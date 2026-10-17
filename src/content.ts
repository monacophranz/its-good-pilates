/* ------------------------------------------------------------------
   ALLE INHALTE DER SEITE — hier kannst du Texte, Preise und Links
   bearbeiten, ohne den Code der Komponenten anfassen zu muessen.

   ZWEISPRACHIG:
   Unten im Objekt `texts` stehen alle Texte zweimal — einmal unter
   `de` (Deutsch, Standard) und einmal unter `en` (Englisch). Wer einen
   Text aendert, sollte ihn in BEIDEN Sprachen anpassen.

   Welche Sprache angezeigt wird, entscheidet die HTML-Seite:
     /index.html     -> <html lang="de">  -> Deutsch
     /en/index.html  -> <html lang="en">  -> Englisch
------------------------------------------------------------------ */

export type Lang = "de" | "en";

/** Sprache der gerade geladenen Seite (aus dem lang-Attribut von <html>). */
export const lang: Lang =
  typeof document !== "undefined" && document.documentElement.lang === "en"
    ? "en"
    : "de";

/**
 * Relativer Weg von der aktuellen Seite zurueck zur deutschen Startseite.
 * Die englische Seite liegt eine Ebene tiefer (/en/), daher "../".
 */
export const rootPrefix = lang === "en" ? "../" : "";

/** Gemeinsame Angaben, die in beiden Sprachen gleich sind. */
export const site = {
  /** Wortmarke in Navigation + Footer */
  brand: "its.good.pilates",
  /** E-Mail-Adresse, an die das Kontaktformular schreibt */
  email: "caroline.philippi@gmx.net",
  instagramUrl: "https://instagram.com/its.good.pilates",
  instagramHandle: "@its.good.pilates",
};

/** Sprachumschalter in der Navigation */
export const languages: { code: Lang; label: string; name: string }[] = [
  { code: "de", label: "DE", name: "Deutsch" },
  { code: "en", label: "EN", name: "English" },
];

/** Link zur jeweiligen Sprachversion, ausgehend von der aktuellen Seite. */
export function languageHref(target: Lang): string {
  if (target === lang) return "./";
  return target === "en" ? `${rootPrefix}en/` : rootPrefix;
}

export type Package = {
  id: string;
  label: string;
  price: string;
  unit: string;
  pricePerSession?: string;
  description: string;
  includes: string[];
  tag?: string;
};

type Detail = { label: string; value: string; href?: string };

type Field = {
  id: "name" | "email";
  label: string;
  type: "text" | "email";
  placeholder: string;
};

const texts = {
  /* ================================================================
     DEUTSCH
  ================================================================ */
  de: {
    ui: {
      menu: "Menü",
      languageSwitch: "Sprache wählen",
      mailSubject: "Anfrage Pilates Coaching",
      mailName: "Name",
      mailEmail: "E-Mail",
    },

    navItems: [
      { label: "Über mich", id: "about" },
      { label: "Methode", id: "philosophy" },
      { label: "Preise", id: "pricing" },
      { label: "Kontakt", id: "contact" },
    ],

    hero: {
      eyebrow: "PILATES COACHING — MÜNCHEN",
      title: "its.good.pilates",
      subtitle: "mit Caroline Philippi",
      scrollLabel: "Scrollen",
    },

    about: {
      eyebrow: "Über mich",
      /** Ueberschrift: Zeile 1 normal, Zeile 2 kursiv */
      titleLine1: "Klassisches Pilates,",
      titleEm: "präzise unterrichtet.",
      body: "Ich unterrichte professionelles, klassisches Pilates nach der Originalmethode von Joseph Pilates. Jede Stunde ist bewusst aufgebaut, präzise und darauf abgestimmt, wo dein Körper heute steht.",
      imageCaption: "Caroline Philippi",
      imageAlt: "Caroline Philippi — Pilates-Trainerin",
      facts: [
        { label: "Zertifiziert", value: "KEEP IN MOTION Mat Classic Lizenz" },
        { label: "Ausbildung", value: "STOTT Vollzertifizierung (laufend)" },
        { label: "Mitglied", value: "DPV — Deutscher Pilates Verband" },
      ],
    },

    method: {
      eyebrow: "Die Methode",
      titleLine1: "Die klassischen ",
      titleEm: "Prinzipien",
      quote: "„Körperliche Fitness ist die erste Voraussetzung für Glück.“",
      quoteAuthor: "— Joseph Pilates",
      principles: [
        {
          number: "01",
          title: "Konzentration",
          body: "Volle Aufmerksamkeit bei jeder Bewegung. Der Geist führt den Körper, niemals umgekehrt.",
        },
        {
          number: "02",
          title: "Kontrolle",
          body: "Kraft durch bewusste, kontrollierte Bewegung. Kein Schwung, keine Abkürzungen.",
        },
        {
          number: "03",
          title: "Zentrierung",
          body: "Jede Bewegung entsteht aus einer stabilen Mitte, dem Powerhouse, das alles trägt.",
        },
        {
          number: "04",
          title: "Präzision",
          body: "Eine perfekt ausgeführte Wiederholung wiegt mehr als zwanzig nachlässige.",
        },
        {
          number: "05",
          title: "Atmung",
          body: "Der Atem trägt die Bewegung. Voller, bewusster Atem versorgt den Körper mit Sauerstoff und vertieft jede Übung.",
        },
        {
          number: "06",
          title: "Fluss",
          body: "Bewegung ist fließend und anmutig. Die Übergänge gehören zur Arbeit und sind keine Pausen dazwischen.",
        },
      ],
    },

    pricing: {
      eyebrow: "Preise",
      titleLine1: "Personal Training",
      titleEm: "Pakete",
      body: "Alle Stunden sind Einzeltrainings und finden in München statt. Melde dich gern, um Ort und Termine abzustimmen.",
      note: "Preise in Euro. Alle Stunden nach Vereinbarung. Die erste Stunde enthält eine ausführliche Bewegungsanalyse ohne Aufpreis.",
      cta: "Stunde buchen",
      /** Welches Paket ist beim Laden hervorgehoben? (id) */
      defaultSelected: "five",
      packages: [
        {
          id: "single",
          label: "Einzelstunde",
          price: "120",
          unit: "/ Stunde",
          description:
            "Eine Privatstunde, ganz auf dich abgestimmt. Ideal, um die Methode kennenzulernen oder nach einer Pause wieder einzusteigen.",
          includes: [
            "60 Minuten Einzeltraining",
            "Individuelles Programm",
            "Bewegungsanalyse",
            "Notizen zur Nachbereitung",
          ],
        },
        {
          id: "five",
          label: "5er-Paket",
          price: "600",
          unit: "/ Paket",
          pricePerSession: "120 / Stunde",
          description:
            "Ein konzentrierter Block, um die Technik zu festigen und eine regelmäßige Praxis aufzubauen.",
          includes: [
            "5 × 60 Minuten Einzeltraining",
            "Individuelles Programm",
            "Fortschrittsgespräch",
            "Anleitung zum Üben zu Hause",
            "3 Monate gültig",
          ],
          tag: "Am beliebtesten",
        },
        {
          id: "ten",
          label: "10er-Paket",
          price: "1200",
          unit: "/ Paket",
          pricePerSession: "120 / Stunde",
          description:
            "Die volle Hingabe. Tiefgehender Fortschritt, nachhaltige Veränderung und eine Praxis, die Teil deines Lebens wird.",
          includes: [
            "10 × 60 Minuten Einzeltraining",
            "Individuelles Programm",
            "Regelmäßige Fortschrittsgespräche",
            "Anleitung zum Üben zu Hause",
            "Tipps zu Ernährung und Bewegung",
            "6 Monate gültig",
          ],
        },
      ] as Package[],
    },

    contact: {
      eyebrow: "Kontakt",
      titleLine1: "Starte deine",
      titleEm: "Praxis",
      body: "Schreib mir gern zu freien Terminen, zum Trainingsort oder dazu, welches Paket zu deinen Zielen passt. Ich melde mich innerhalb von 24 Stunden.",
      details: [
        {
          label: "Instagram",
          value: site.instagramHandle,
          href: site.instagramUrl,
        },
        { label: "Ort", value: "München" },
      ] as Detail[],
      fields: [
        { id: "name", label: "Name", type: "text", placeholder: "Dein Name" },
        {
          id: "email",
          label: "E-Mail",
          type: "email",
          placeholder: "deine@email.de",
        },
      ] as Field[],
      messageLabel: "Nachricht",
      messagePlaceholder:
        "Erzähl mir von deinen Zielen oder stell mir deine Fragen …",
      submit: "Nachricht senden",
      successTitle: "Danke.",
      successBody: "Ich melde mich bald bei dir.",
    },

    footer: {
      instagramLabel: "Instagram",
      impressumLabel: "Impressum",
      datenschutzLabel: "Datenschutz",
      copyright: (year: number) => `© ${year} Caroline Philippi · München`,
    },
  },

  /* ================================================================
     ENGLISCH
  ================================================================ */
  en: {
    ui: {
      menu: "Menu",
      languageSwitch: "Choose language",
      mailSubject: "Pilates Coaching Enquiry",
      mailName: "Name",
      mailEmail: "Email",
    },

    navItems: [
      { label: "About", id: "about" },
      { label: "Method", id: "philosophy" },
      { label: "Pricing", id: "pricing" },
      { label: "Contact", id: "contact" },
    ],

    hero: {
      eyebrow: "PILATES COACHING — MÜNCHEN",
      title: "its.good.pilates",
      subtitle: "by Caroline Philippi",
      scrollLabel: "Scroll",
    },

    about: {
      eyebrow: "About",
      titleLine1: "Classical Pilates,",
      titleEm: "precisely practiced.",
      body: "I teach professional, classical Pilates — rooted in the original method developed by Joseph Pilates. Every session is intentional, precise, and tailored to where your body is today.",
      imageCaption: "Caroline Philippi",
      imageAlt: "Caroline Philippi — Pilates Coach",
      facts: [
        { label: "Certified", value: "KEEP IN MOTION mat classic license" },
        { label: "Training", value: "STOTT full certification (ongoing)" },
        { label: "Member", value: "DPV — Deutscher Pilates Verband" },
      ],
    },

    method: {
      eyebrow: "The Method",
      titleLine1: "The classical ",
      titleEm: "principles",
      quote: '"Physical fitness is the first requisite of happiness."',
      quoteAuthor: "— Joseph Pilates",
      principles: [
        {
          number: "01",
          title: "Concentration",
          body: "Full attention to every movement. The mind leads the body — never the other way around.",
        },
        {
          number: "02",
          title: "Control",
          body: "Strength through deliberate, controlled motion. No momentum, no shortcuts.",
        },
        {
          number: "03",
          title: "Centring",
          body: "All movement flows from a stable core — the powerhouse that supports everything.",
        },
        {
          number: "04",
          title: "Precision",
          body: "One perfectly executed repetition outweighs twenty careless ones.",
        },
        {
          number: "05",
          title: "Breath",
          body: "Breathing fuels movement. Full, deliberate breath oxygenates the body and deepens every exercise.",
        },
        {
          number: "06",
          title: "Flow",
          body: "Movement is continuous and graceful — transitions are part of the work, not pauses between it.",
        },
      ],
    },

    pricing: {
      eyebrow: "Pricing",
      titleLine1: "Personal Training",
      titleEm: "Packages",
      body: "All sessions are one-to-one and take place in München. Get in touch to discuss location and scheduling.",
      note: "Prices are in EUR. All sessions by appointment. First session includes a full movement assessment at no extra charge.",
      cta: "Book a Session",
      defaultSelected: "five",
      packages: [
        {
          id: "single",
          label: "Single Session",
          price: "120",
          unit: "/ session",
          description:
            "One private session tailored entirely to you. Ideal for trying the method or returning after a break.",
          includes: [
            "60-minute private session",
            "Personalised programme",
            "Movement assessment",
            "Follow-up notes",
          ],
        },
        {
          id: "five",
          label: "5-Session Pack",
          price: "600",
          unit: "/ pack",
          pricePerSession: "120 / session",
          description:
            "A focused block of sessions to establish technique and build a consistent practice.",
          includes: [
            "5 × 60-minute private sessions",
            "Personalised programme",
            "Progress review",
            "Home practice guide",
            "Valid for 3 months",
          ],
          tag: "Most popular",
        },
        {
          id: "ten",
          label: "10-Session Pack",
          price: "1200",
          unit: "/ pack",
          pricePerSession: "120 / session",
          description:
            "The complete commitment. Deep progress, lasting change, and a practice that becomes part of your life.",
          includes: [
            "10 × 60-minute private sessions",
            "Personalised programme",
            "Regular progress reviews",
            "Home practice guide",
            "Nutritional movement tips",
            "Valid for 6 months",
          ],
        },
      ] as Package[],
    },

    contact: {
      eyebrow: "Contact",
      titleLine1: "Start your",
      titleEm: "practice",
      body: "Reach out to discuss availability, location, or which package suits your goals. I'll get back to you within 24 hours.",
      details: [
        {
          label: "Instagram",
          value: site.instagramHandle,
          href: site.instagramUrl,
        },
        { label: "Location", value: "München, Germany" },
      ] as Detail[],
      fields: [
        { id: "name", label: "Name", type: "text", placeholder: "Your name" },
        {
          id: "email",
          label: "Email",
          type: "email",
          placeholder: "your@email.com",
        },
      ] as Field[],
      messageLabel: "Message",
      messagePlaceholder: "Tell me about your goals or ask any questions…",
      submit: "Send Message",
      successTitle: "Thank you.",
      successBody: "I'll be in touch soon.",
    },

    footer: {
      instagramLabel: "Instagram",
      impressumLabel: "Legal notice",
      datenschutzLabel: "Privacy policy",
      copyright: (year: number) => `© ${year} Caroline Philippi · München`,
    },
  },
};

const t = texts[lang];

export const ui = t.ui;
export const navItems = t.navItems;
export const hero = t.hero;
export const about = t.about;
export const method = t.method;
export const pricing = t.pricing;
export const contact = t.contact;

export const footer = {
  ...t.footer,
  /**
   * Relative Pfade zu den Rechtsseiten (nur auf Deutsch). Sie werden je
   * nach Seite mit einem Praefix kombiniert ("" auf der Startseite,
   * "../" auf den Unterseiten), damit die Links auch unter einem
   * Unterverzeichnis funktionieren.
   */
  impressumHref: "impressum/",
  datenschutzHref: "datenschutz/",
};

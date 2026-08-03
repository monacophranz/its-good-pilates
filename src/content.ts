/* ------------------------------------------------------------------
   ALLE INHALTE DER SEITE — hier kannst du Texte, Preise und Links
   bearbeiten, ohne den Code der Komponenten anfassen zu muessen.
------------------------------------------------------------------ */

export const site = {
  /** Wortmarke in Navigation + Footer */
  brand: "its.good.pilates",
  /** E-Mail-Adresse, an die das Kontaktformular schreibt */
  email: "caroline.philippi@gmx.net",
  /** Betreff der Mail aus dem Kontaktformular */
  mailSubject: "Pilates Coaching Anfrage",
  instagramUrl: "https://instagram.com/its.good.pilates",
  instagramHandle: "@its.good.pilates",
};

export const navItems = [
  { label: "About", id: "about" },
  { label: "Method", id: "philosophy" },
  { label: "Pricing", id: "pricing" },
  { label: "Contact", id: "contact" },
];

export const hero = {
  eyebrow: "PILATES COACHING — MÜNCHEN",
  title: "its.good.pilates",
  subtitle: "by Caroline Philippi",
  scrollLabel: "Scroll",
};

export const about = {
  eyebrow: "About",
  /** Ueberschrift: Zeile 1 normal, Zeile 2 kursiv */
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
};

export const method = {
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
};

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

export const pricing = {
  eyebrow: "Pricing",
  titleLine1: "Personal Training",
  titleEm: "Packages",
  body: "All sessions are one-to-one and take place in München. Get in touch to discuss location and scheduling.",
  note: "Prices are in EUR. All sessions by appointment. First session includes a full movement assessment at no extra charge.",
  cta: "Book a Session",
  /** Welches Paket ist beim Laden hervorgehoben? (id) */
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
};

export const contact = {
  eyebrow: "Contact",
  titleLine1: "Start your",
  titleEm: "practice",
  body: "Reach out to discuss availability, location, or which package suits your goals. I'll get back to you within 24 hours.",
  details: [
    { label: "Instagram", value: site.instagramHandle, href: site.instagramUrl },
    { label: "Location", value: "München, Germany" },
  ] as { label: string; value: string; href?: string }[],
  fields: [
    { id: "name", label: "Name", type: "text", placeholder: "Your name" },
    { id: "email", label: "Email", type: "email", placeholder: "your@email.com" },
  ] as const,
  messageLabel: "Message",
  messagePlaceholder: "Tell me about your goals or ask any questions…",
  submit: "Send Message",
  successTitle: "Thank you.",
  successBody: "I'll be in touch soon.",
};

export const footer = {
  instagramLabel: "Instagram",
  copyright: (year: number) => `© ${year} Caroline Philippi · München`,
  /**
   * Relative Pfade zu den Rechtsseiten. Sie werden je nach Seite mit einem
   * Praefix kombiniert ("" auf der Startseite, "../" auf den Unterseiten),
   * damit die Links auch unter einem Unterverzeichnis funktionieren.
   */
  impressumHref: "impressum/",
  datenschutzHref: "datenschutz/",
};

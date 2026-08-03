import { site } from "./content";

/* ------------------------------------------------------------------
   RECHTLICHE INHALTE

   >>> WICHTIG <<<
   Die mit TODO markierten Felder MUESSEN ausgefuellt werden. Solange
   dort "TODO" steht, zeigen die Rechtsseiten einen Warnhinweis an —
   der verschwindet automatisch, sobald alle Felder befuellt sind.

   Diese Texte sind eine sorgfaeltig erstellte Vorlage, aber keine
   Rechtsberatung. Im Zweifel von einer Anwaeltin/einem Anwalt oder
   der IHK pruefen lassen.
------------------------------------------------------------------ */

const TODO = "TODO";

/** Stammdaten der Betreiberin — an EINER Stelle pflegen. */
export const operator = {
  name: "Caroline Philippi",
  /** Strasse + Hausnummer der ladungsfaehigen Anschrift */
  street: `${TODO}: Straße und Hausnummer`,
  /** PLZ + Ort */
  city: `${TODO}: PLZ München`,
  country: "Deutschland",
  email: site.email,
  /** Telefonnummer — § 5 DDG verlangt eine schnelle Kontaktaufnahme */
  phone: `${TODO}: Telefonnummer`,
  /**
   * Umsatzsteuer-Identifikationsnummer nach § 27a UStG.
   * Als Kleinunternehmerin nach § 19 UStG stattdessen eintragen:
   * "Kleinunternehmerin gemäß § 19 UStG — kein Ausweis von Umsatzsteuer"
   */
  vatId: `${TODO}: USt-IdNr. oder Kleinunternehmer-Hinweis`,
};

/** true, solange irgendwo noch ein TODO steht */
export const hasOpenPlaceholders = Object.values(operator).some((value) =>
  value.includes(TODO),
);

export const placeholderWarning = {
  title: "Diese Seite ist noch nicht vollständig",
  body: "Die mit TODO markierten Angaben müssen in src/legal.ts ergänzt werden. Erst danach erfüllt die Seite die gesetzlichen Anforderungen.",
};

export type LegalBlock =
  | { kind: "text"; value: string }
  | { kind: "list"; value: string[] }
  | { kind: "address"; value: string[] };

export type LegalSection = {
  heading: string;
  blocks: LegalBlock[];
};

export const legalNav = {
  back: "Zurück zur Startseite",
  impressum: "Impressum",
  datenschutz: "Datenschutz",
};

export const impressum = {
  title: "Impressum",
  intro: "Angaben gemäß § 5 DDG (Digitale-Dienste-Gesetz)",
  sections: [
    {
      heading: "Diensteanbieterin",
      blocks: [
        {
          kind: "address",
          value: [
            operator.name,
            operator.street,
            operator.city,
            operator.country,
          ],
        },
      ],
    },
    {
      heading: "Kontakt",
      blocks: [
        {
          kind: "address",
          value: [`Telefon: ${operator.phone}`, `E-Mail: ${operator.email}`],
        },
      ],
    },
    {
      heading: "Umsatzsteuer",
      blocks: [{ kind: "text", value: operator.vatId }],
    },
    {
      heading: "Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV",
      blocks: [
        {
          kind: "address",
          value: [operator.name, operator.street, operator.city],
        },
      ],
    },
    {
      heading: "Verbraucherstreitbeilegung",
      blocks: [
        {
          kind: "text",
          value:
            "Ich bin nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen (§ 36 VSBG).",
        },
      ],
    },
    {
      heading: "Haftung für Inhalte",
      blocks: [
        {
          kind: "text",
          value:
            "Als Diensteanbieterin bin ich gemäß § 7 Abs. 1 DDG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 DDG bin ich als Diensteanbieterin jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.",
        },
        {
          kind: "text",
          value:
            "Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden entsprechender Rechtsverletzungen entferne ich diese Inhalte umgehend.",
        },
      ],
    },
    {
      heading: "Haftung für Links",
      blocks: [
        {
          kind: "text",
          value:
            "Dieses Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte ich keinen Einfluss habe. Deshalb kann ich für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets die jeweilige Anbieterin oder der jeweilige Anbieter verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft; rechtswidrige Inhalte waren nicht erkennbar.",
        },
      ],
    },
    {
      heading: "Urheberrecht",
      blocks: [
        {
          kind: "text",
          value:
            "Die durch die Seitenbetreiberin erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung der jeweiligen Autorin bzw. des Autors. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.",
        },
      ],
    },
  ] as LegalSection[],
};

export const datenschutz = {
  title: "Datenschutzerklärung",
  intro:
    "Der Schutz deiner persönlichen Daten ist mir wichtig. Diese Website ist bewusst datensparsam gebaut: keine Cookies, keine Analyse-Werkzeuge, kein Tracking, keine eingebetteten Inhalte Dritter.",
  sections: [
    {
      heading: "1. Verantwortliche im Sinne der DSGVO",
      blocks: [
        {
          kind: "address",
          value: [
            operator.name,
            operator.street,
            operator.city,
            operator.country,
            `E-Mail: ${operator.email}`,
          ],
        },
      ],
    },
    {
      heading: "2. Hosting und Server-Logfiles",
      blocks: [
        {
          kind: "text",
          value:
            "Diese Website wird bei GitHub Pages gehostet, einem Dienst der GitHub Inc., 88 Colin P Kelly Jr Street, San Francisco, CA 94107, USA — einer Tochtergesellschaft der Microsoft Corporation.",
        },
        {
          kind: "text",
          value:
            "Beim Aufruf der Seite werden durch den Hoster automatisch Informationen erfasst, die dein Browser übermittelt. Dies sind insbesondere:",
        },
        {
          kind: "list",
          value: [
            "IP-Adresse des anfragenden Geräts",
            "Datum und Uhrzeit des Zugriffs",
            "Name und URL der abgerufenen Datei",
            "übertragene Datenmenge",
            "Meldung über den erfolgreichen Abruf",
            "Browsertyp, Browserversion und Betriebssystem",
            "Referrer-URL (die zuvor besuchte Seite)",
          ],
        },
        {
          kind: "text",
          value:
            "Diese Daten sind technisch erforderlich, um die Website auszuliefern und ihre Stabilität und Sicherheit zu gewährleisten. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse am technisch fehlerfreien und sicheren Betrieb).",
        },
        {
          kind: "text",
          value:
            "Da GitHub Daten auch in den USA verarbeiten kann, findet gegebenenfalls eine Übermittlung in ein Drittland statt. Microsoft und GitHub sind unter dem EU-US Data Privacy Framework zertifiziert; ergänzend bestehen Standardvertragsklauseln nach Art. 46 DSGVO.",
        },
      ],
    },
    {
      heading: "3. Keine Cookies, kein Tracking",
      blocks: [
        {
          kind: "text",
          value:
            "Diese Website setzt keine Cookies und verwendet keine Analyse-, Statistik- oder Marketing-Werkzeuge. Es findet kein Profiling statt. Deshalb gibt es hier auch kein Cookie-Banner — es gibt schlicht nichts einzuwilligen.",
        },
      ],
    },
    {
      heading: "4. Schriftarten",
      blocks: [
        {
          kind: "text",
          value:
            "Die verwendeten Schriftarten (Cormorant Garamond und Inter) werden lokal vom Server dieser Website ausgeliefert. Es besteht keine Verbindung zu Google Fonts oder anderen externen Schrift-Diensten; deine IP-Adresse wird dafür an niemanden übermittelt.",
        },
      ],
    },
    {
      heading: "5. Kontaktaufnahme",
      blocks: [
        {
          kind: "text",
          value:
            "Das Kontaktformular auf dieser Seite sendet keine Daten an einen Server. Beim Absenden öffnet sich dein eigenes E-Mail-Programm mit einer vorbereiteten Nachricht — die Übermittlung erfolgt also ausschließlich per E-Mail durch dich selbst.",
        },
        {
          kind: "text",
          value:
            "Wenn du mir per E-Mail schreibst, verarbeite ich deine Angaben (Name, E-Mail-Adresse, Inhalt der Nachricht) ausschließlich zur Bearbeitung deiner Anfrage. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO bei vertragsbezogenen Anfragen, ansonsten Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Beantwortung).",
        },
        {
          kind: "text",
          value:
            "Deine Anfragen lösche ich, sobald sie erledigt sind und keine gesetzlichen Aufbewahrungsfristen entgegenstehen.",
        },
      ],
    },
    {
      heading: "6. Instagram-Verlinkung",
      blocks: [
        {
          kind: "text",
          value:
            "Auf dieser Seite ist mein Instagram-Profil verlinkt. Es handelt sich um einen einfachen Hyperlink, nicht um ein eingebettetes Plugin. Es werden erst dann Daten an Instagram (Meta Platforms Ireland Ltd.) übertragen, wenn du den Link aktiv anklickst. Danach gilt die Datenschutzerklärung von Instagram.",
        },
      ],
    },
    {
      heading: "7. Verschlüsselung",
      blocks: [
        {
          kind: "text",
          value:
            "Diese Seite wird ausschließlich verschlüsselt per HTTPS (TLS) ausgeliefert. Aufrufe über http:// werden automatisch auf https:// umgeleitet.",
        },
      ],
    },
    {
      heading: "8. Deine Rechte",
      blocks: [
        { kind: "text", value: "Dir stehen jederzeit folgende Rechte zu:" },
        {
          kind: "list",
          value: [
            "Auskunft über die zu deiner Person gespeicherten Daten (Art. 15 DSGVO)",
            "Berichtigung unrichtiger Daten (Art. 16 DSGVO)",
            "Löschung (Art. 17 DSGVO)",
            "Einschränkung der Verarbeitung (Art. 18 DSGVO)",
            "Datenübertragbarkeit (Art. 20 DSGVO)",
            "Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)",
          ],
        },
        {
          kind: "text",
          value: `Für alle diese Anliegen genügt eine formlose E-Mail an ${operator.email}.`,
        },
      ],
    },
    {
      heading: "9. Beschwerderecht bei der Aufsichtsbehörde",
      blocks: [
        {
          kind: "text",
          value:
            "Wenn du der Ansicht bist, dass die Verarbeitung deiner Daten gegen die DSGVO verstößt, kannst du dich bei einer Datenschutz-Aufsichtsbehörde beschweren. Zuständig für den nicht-öffentlichen Bereich in Bayern ist:",
        },
        {
          kind: "address",
          value: [
            "Bayerisches Landesamt für Datenschutzaufsicht (BayLDA)",
            "Promenade 18",
            "91522 Ansbach",
            "www.lda.bayern.de",
          ],
        },
      ],
    },
    {
      heading: "10. Aktualität dieser Erklärung",
      blocks: [
        {
          kind: "text",
          value:
            "Diese Datenschutzerklärung wird angepasst, sobald sich die Website oder die Rechtslage ändert.",
        },
      ],
    },
  ] as LegalSection[],
};

import { site } from "../content";
import {
  hasOpenPlaceholders,
  type LegalSection,
  legalNav,
  placeholderWarning,
} from "../legal";
import Footer from "./Footer";

type Props = {
  title: string;
  intro: string;
  sections: LegalSection[];
};

export default function LegalLayout({ title, intro, sections }: Props) {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Kopfzeile */}
      <header className="border-b border-border">
        <div className="max-w-3xl mx-auto px-6 md:px-8 py-6 flex items-center justify-between gap-6">
          <a
            href="../"
            className="font-heading text-lg md:text-xl tracking-[0.14em] text-foreground hover:opacity-60 transition-opacity duration-200"
          >
            {site.brand}
          </a>
          <a
            href="../"
            className="text-[0.7rem] tracking-[0.18em] uppercase font-body text-muted-foreground hover:text-foreground transition-colors duration-200"
          >
            {legalNav.back}
          </a>
        </div>
      </header>

      <main className="flex-1">
        <div className="max-w-3xl mx-auto px-6 md:px-8 py-16 md:py-24">
          <h1 className="font-heading text-4xl md:text-6xl leading-[1.05] text-foreground">
            {title}
          </h1>
          <p className="mt-6 font-body text-sm md:text-base leading-relaxed text-muted-foreground max-w-xl">
            {intro}
          </p>

          {hasOpenPlaceholders && (
            <div className="mt-10 border-l-2 border-foreground bg-secondary px-5 py-4">
              <p className="font-body text-xs tracking-[0.14em] uppercase text-foreground">
                {placeholderWarning.title}
              </p>
              <p className="mt-2 font-body text-sm leading-relaxed text-muted-foreground">
                {placeholderWarning.body}
              </p>
            </div>
          )}

          <div className="mt-14 space-y-12">
            {sections.map((section) => (
              <section key={section.heading}>
                <h2 className="font-heading text-2xl md:text-3xl text-foreground">
                  {section.heading}
                </h2>
                <div className="mt-4 space-y-4">
                  {section.blocks.map((block, index) => {
                    const key = `${section.heading}-${index}`;

                    if (block.kind === "list") {
                      return (
                        <ul key={key} className="space-y-2">
                          {block.value.map((item) => (
                            <li
                              key={item}
                              className="font-body text-sm md:text-[0.95rem] leading-relaxed text-muted-foreground flex gap-3"
                            >
                              <span
                                aria-hidden="true"
                                className="mt-[0.6em] h-px w-3 shrink-0 bg-border"
                              />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      );
                    }

                    if (block.kind === "address") {
                      return (
                        <address key={key} className="not-italic">
                          {block.value.map((line) => (
                            <span
                              key={line}
                              className="block font-body text-sm md:text-[0.95rem] leading-relaxed text-foreground"
                            >
                              {line}
                            </span>
                          ))}
                        </address>
                      );
                    }

                    return (
                      <p
                        key={key}
                        className="font-body text-sm md:text-[0.95rem] leading-relaxed text-muted-foreground"
                      >
                        {block.value}
                      </p>
                    );
                  })}
                </div>
              </section>
            ))}
          </div>
        </div>
      </main>

      <Footer prefix="../" />
    </div>
  );
}

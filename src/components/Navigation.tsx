import { useEffect, useState } from "react";
import { lang, languageHref, languages, navItems, site, ui } from "../content";

function LanguageSwitch() {
  return (
    <div
      className="flex items-center gap-2 text-xs tracking-[0.18em] uppercase font-body"
      role="group"
      aria-label={ui.languageSwitch}
    >
      {languages.map((language, index) => (
        <span key={language.code} className="flex items-center gap-2">
          {index > 0 && (
            <span aria-hidden="true" className="text-muted-foreground">
              /
            </span>
          )}
          <a
            href={languageHref(language.code)}
            hrefLang={language.code}
            lang={language.code}
            aria-label={language.name}
            aria-current={language.code === lang ? "true" : undefined}
            className={`transition-opacity ${
              language.code === lang
                ? "text-foreground"
                : "text-foreground opacity-40 hover:opacity-80"
            }`}
          >
            {language.label}
          </a>
        </span>
      ))}
    </div>
  );
}

function InstagramIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-background border-b border-border" : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 md:px-12 flex items-center justify-between h-16">
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-lg tracking-[0.15em] text-foreground hover:opacity-60 transition-opacity font-medium [font-family:'Inter',_sans-serif]"
          >
            {site.brand}
          </button>

          <div className="hidden md:flex items-center gap-10">
            <a
              href={site.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:opacity-50 transition-opacity"
            >
              <InstagramIcon />
            </a>
            {navItems.map((item) => (
              <button
                type="button"
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-xs tracking-[0.18em] uppercase text-foreground hover:opacity-50 transition-opacity font-body"
              >
                {item.label}
              </button>
            ))}
            <LanguageSwitch />
          </div>

          <div className="md:hidden flex items-center gap-6">
            <LanguageSwitch />
          <button
            type="button"
            className="md:hidden flex flex-col gap-1.5 p-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={ui.menu}
            aria-expanded={menuOpen}
          >
            <span
              className={`block w-5 h-px bg-foreground transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-5 h-px bg-foreground transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-5 h-px bg-foreground transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
          </div>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-40 bg-background flex flex-col items-center justify-center gap-10 transition-all duration-500 ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {navItems.map((item) => (
          <button
            type="button"
            key={item.id}
            onClick={() => scrollTo(item.id)}
            className="font-heading text-4xl tracking-wider text-foreground hover:opacity-40 transition-opacity"
          >
            {item.label}
          </button>
        ))}
      </div>
    </>
  );
}

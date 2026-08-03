import { footer, site } from "../content";
import { legalNav } from "../legal";

type Props = {
  /** "" auf der Startseite, "../" auf den Unterseiten */
  prefix?: string;
};

export default function Footer({ prefix = "" }: Props) {
  return (
    <footer className="border-t border-border py-10 px-6 md:px-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <p className="font-heading text-base tracking-[0.1em] text-foreground">
          {site.brand}
        </p>

        <p className="text-xs tracking-[0.1em] text-muted-foreground font-body order-last md:order-none">
          {footer.copyright(new Date().getFullYear())}
        </p>

        <nav className="flex flex-wrap items-center gap-x-6 gap-y-2">
          <a
            href={`${prefix}${footer.impressumHref}`}
            className="text-xs tracking-[0.18em] uppercase text-muted-foreground font-body hover:text-foreground transition-colors duration-200"
          >
            {legalNav.impressum}
          </a>
          <a
            href={`${prefix}${footer.datenschutzHref}`}
            className="text-xs tracking-[0.18em] uppercase text-muted-foreground font-body hover:text-foreground transition-colors duration-200"
          >
            {legalNav.datenschutz}
          </a>
          <a
            href={site.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs tracking-[0.18em] uppercase text-muted-foreground font-body hover:text-foreground transition-colors duration-200"
          >
            {footer.instagramLabel}
          </a>
        </nav>
      </div>
    </footer>
  );
}

import { footer, site } from "../content";

export default function Footer() {
  return (
    <footer className="border-t border-border py-10 px-6 md:px-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <p className="font-heading text-base tracking-[0.1em] text-foreground">
          {site.brand}
        </p>
        <p className="text-xs tracking-[0.1em] text-muted-foreground font-body">
          {footer.copyright(new Date().getFullYear())}
        </p>
        <a
          href={site.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs tracking-[0.18em] uppercase text-muted-foreground font-body hover:text-foreground transition-colors duration-200"
        >
          {footer.instagramLabel}
        </a>
      </div>
    </footer>
  );
}

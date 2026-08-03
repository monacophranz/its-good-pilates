# its.good.pilates

Statische Website (Vite + React + TypeScript + Tailwind CSS).

## Lokal starten

```bash
bun install
bun run dev      # http://localhost:5173
bun run build    # Ergebnis liegt in dist/
```

## Inhalte bearbeiten

| Was                                   | Datei                              |
| ------------------------------------- | ---------------------------------- |
| Texte, Preise, Links, E-Mail-Adresse  | `src/content.ts`                   |
| Farben & Schriften                    | `src/index.css` (`:root`)          |
| Portraitfoto                          | `src/assets/caroline-philippi.jpg` |
| Favicon                               | `public/favicon.png`               |
| Seitentitel / SEO-Beschreibung        | `index.html`                       |
| Layout einzelner Abschnitte           | `src/components/`                  |

Das Kontaktformular öffnet das E-Mail-Programm der Besucher:innen
(`mailto:`). Die Zieladresse steht in `src/content.ts` unter `site.email`.

## Auf GitHub Pages veröffentlichen

1. Repository auf GitHub anlegen und diesen Ordner pushen:

   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/DEIN-NAME/DEIN-REPO.git
   git push -u origin main
   ```

2. Auf GitHub: **Settings → Pages → Build and deployment → Source: GitHub Actions**

3. Fertig. Der Workflow `.github/workflows/deploy.yml` baut die Seite bei jedem
   Push auf `main` und veröffentlicht sie unter
   `https://DEIN-NAME.github.io/DEIN-REPO/`.

Weil in `vite.config.ts` `base: "./"` gesetzt ist, funktioniert die Seite sowohl
unter einem Unterpfad (`/DEIN-REPO/`) als auch auf einer eigenen Domain.

### Eigene Domain

Domain unter **Settings → Pages → Custom domain** eintragen und beim
Domain-Anbieter einen CNAME auf `DEIN-NAME.github.io` setzen.

## Alternative Hoster

`dist/` ist reines HTML/CSS/JS und läuft auf jedem Static-Hoster
(Netlify, Vercel, Cloudflare Pages, klassisches Webhosting per FTP).
Für Netlify liegt bereits eine `netlify.toml` bei.

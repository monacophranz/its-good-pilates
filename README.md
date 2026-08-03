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

> **Wichtig:** Unter **Settings → Pages → Source** muss **GitHub Actions**
> ausgewählt sein — nicht "Deploy from a branch".
> Bei "Deploy from a branch" liefert GitHub die **unkompilierten Quelldateien**
> aus dem Repo-Root aus. Der Browser versucht dann `/src/main.tsx` zu laden,
> bekommt einen 404 bzw. einen Parse-Fehler, und die Seite bleibt leer.
> Veröffentlicht werden darf nur der Build-Output aus `dist/` — genau das
> erledigt der Workflow.

### Eigene Domain (Beispiel: Cloudflare)

Die Domain wird über die Repository-Variable `CUSTOM_DOMAIN` gesteuert.
Ist sie nicht gesetzt, läuft die Seite ganz normal unter `*.github.io`.

**1. Bestehende Weiterleitungen entfernen**

Falls die Domain aktuell woanders hin zeigt (z. B. eine alte Tilda-/Wix-Seite),
zuerst in Cloudflare unter **Rules → Redirect Rules** bzw. **Page Rules** die
Weiterleitung löschen. Cloudflare-Regeln greifen *vor* GitHub Pages — solange
eine Redirect-Regel existiert, sieht niemand die neue Seite.

**2. DNS-Einträge in Cloudflare setzen**

Alte `A`/`AAAA`/`CNAME`-Einträge für `@` und `www` löschen, dann:

| Typ   | Name  | Inhalt                    | Proxy    |
| ----- | ----- | ------------------------- | -------- |
| A     | `@`   | `185.199.108.153`         | DNS only |
| A     | `@`   | `185.199.109.153`         | DNS only |
| A     | `@`   | `185.199.110.153`         | DNS only |
| A     | `@`   | `185.199.111.153`         | DNS only |
| AAAA  | `@`   | `2606:50c0:8000::153`     | DNS only |
| AAAA  | `@`   | `2606:50c0:8001::153`     | DNS only |
| AAAA  | `@`   | `2606:50c0:8002::153`     | DNS only |
| AAAA  | `@`   | `2606:50c0:8003::153`     | DNS only |
| CNAME | `www` | `DEIN-NAME.github.io`     | DNS only |

> **Proxy zwingend auf „DNS only" (graue Wolke).** Bei orangener Wolke kann
> GitHub das Let's-Encrypt-Zertifikat nicht ausstellen und „Enforce HTTPS"
> bleibt gesperrt. Erst wenn das Zertifikat steht, kann der Proxy optional
> wieder aktiviert werden.

**3. Cloudflare SSL/TLS**

Unter **SSL/TLS → Overview** auf **Full (strict)** stellen.
`Flexible` erzeugt zusammen mit GitHub Pages eine Endlos-Weiterleitung
(`ERR_TOO_MANY_REDIRECTS`).

**4. Domain im Repository aktivieren**

**Settings → Secrets and variables → Actions → Variables → New variable**

```
Name:  CUSTOM_DOMAIN
Value: deine-domain.de
```

Danach **Actions → Deploy to GitHub Pages → Run workflow**. Der Workflow legt
die Datei `CNAME` im Build-Output an, GitHub übernimmt die Domain automatisch.

**5. HTTPS erzwingen**

Wenn unter **Settings → Pages** „Enforce HTTPS" anwählbar wird (kann bis zu
24 h dauern), Haken setzen. Fertig.

Zum Zurückschalten auf `*.github.io` einfach die Variable `CUSTOM_DOMAIN`
löschen und den Workflow erneut laufen lassen.

## Alternative Hoster

`dist/` ist reines HTML/CSS/JS und läuft auf jedem Static-Hoster
(Netlify, Vercel, Cloudflare Pages, klassisches Webhosting per FTP).
Für Netlify liegt bereits eine `netlify.toml` bei.

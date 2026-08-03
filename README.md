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

**4. Domain im Repository aktivieren — zwei Stellen**

> **Achtung:** Beim Veröffentlichen über GitHub **Actions** reicht eine
> `CNAME`-Datei im Build-Output *nicht* aus. Anders als beim Branch-Deploy
> liest GitHub die Domain dann nicht aus der Datei, sondern nur aus der
> Pages-Konfiguration. Beides muss gesetzt sein.

a) **Settings → Pages → Custom domain** → Domain eintragen → *Save*.
   Das ist die maßgebliche Einstellung.

b) **Settings → Secrets and variables → Actions → Variables → New variable**

```
Name:  CUSTOM_DOMAIN
Value: deine-domain.de
```

Damit schreibt der Workflow die Datei `CNAME` in den Build-Output, sodass die
Domain bei künftigen Deployments nicht verloren geht.

Danach **Actions → Deploy to GitHub Pages → Run workflow**.

**5. HTTPS erzwingen**

Sobald GitHub das Zertifikat ausgestellt hat (meist wenige Minuten, laut
Doku bis zu 24 h), unter **Settings → Pages** den Haken bei
„Enforce HTTPS" setzen. Danach leiten `http://` und `www.` automatisch auf
`https://deine-domain.de` weiter.

Zum Zurückschalten auf `*.github.io`: Custom domain unter Settings → Pages
leeren **und** die Variable `CUSTOM_DOMAIN` löschen.

**Aktueller Stand dieses Projekts**

| Adresse                            | Ergebnis                          |
| ---------------------------------- | --------------------------------- |
| `https://itsgoodpilates.com`       | 200 — die Seite                   |
| `https://www.itsgoodpilates.com`   | 301 → `https://itsgoodpilates.com`|
| `http://itsgoodpilates.com`        | 301 → `https://itsgoodpilates.com`|
| `monacophranz.github.io/its-good-pilates` | 301 → `https://itsgoodpilates.com` |

Zertifikat: Let's Encrypt, gültig für `itsgoodpilates.com` und
`www.itsgoodpilates.com`.

## Alternative Hoster

`dist/` ist reines HTML/CSS/JS und läuft auf jedem Static-Hoster
(Netlify, Vercel, Cloudflare Pages, klassisches Webhosting per FTP).
Für Netlify liegt bereits eine `netlify.toml` bei.

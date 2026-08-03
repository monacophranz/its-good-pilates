import react from "@vitejs/plugin-react";
import { type Plugin, defineConfig } from "vite";

/**
 * Entfernt die Same-Editor-Skripte (unpkg) aus dem Produktions-Build,
 * damit die veroeffentlichte Seite keine externen Dev-Tools laedt.
 */
function stripEditorScripts(): Plugin {
  return {
    name: "strip-editor-scripts",
    apply: "build",
    transformIndexHtml(html) {
      return html.replace(
        /\s*<script[^>]*unpkg\.com\/(react-grab|same-runtime)[^>]*><\/script>/g,
        "",
      );
    },
  };
}

// https://vite.dev/config/
export default defineConfig({
  // Relative Pfade -> funktioniert auf GitHub Pages (auch unter /repo-name/)
  base: "./",
  plugins: [react(), stripEditorScripts()],
  build: {
    outDir: "dist",
    assetsDir: "assets",
    rollupOptions: {
      // Mehrseiten-Build: jede Seite wird als eigene HTML-Datei gebaut,
      // damit /impressum/ und /datenschutz/ echte URLs sind (kein Router
      // noetig, funktioniert auf jedem statischen Hoster).
      input: {
        main: "index.html",
        impressum: "impressum/index.html",
        datenschutz: "datenschutz/index.html",
      },
    },
  },
  optimizeDeps: {
    exclude: [
      "same-runtime/dist/jsx-dev-runtime",
      "same-runtime/dist/jsx-runtime",
    ],
  },
});

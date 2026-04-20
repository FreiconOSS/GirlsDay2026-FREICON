---
name: deploy-to-pages
description: Deploy the finished app to GitHub Pages so it's publicly accessible. Use at the end of the workshop. The app will be live at https://freiconoss.github.io/GirlsDay2026-FREICON/
---

# 🌍 Deploy to GitHub Pages

Am Ende des Workshops: App online stellen! 🎉

Die fertige App wird unter dieser URL erreichbar sein:
**https://freiconoss.github.io/GirlsDay2026-FREICON/**

## Voraussetzungen prüfen

1. Die App liegt in `projects/<app-name>/index.html`
2. Sie funktioniert lokal im Browser
3. Git remote ist gesetzt auf `git@github.com:FreiconOSS/GirlsDay2026-FREICON.git`

## Schritt 1 — App ins Root kopieren (für GitHub Pages)

GitHub Pages serviert vom Repository-Root. Die fertige App muss als `index.html` im Root liegen:

```bash
# Fertige App-Dateien ins Root kopieren
cp projects/<app-name>/index.html ./index.html
cp projects/<app-name>/style.css ./style.css 2>/dev/null || true
cp projects/<app-name>/script.js ./script.js 2>/dev/null || true
```

## Schritt 2 — Committen & Pushen

```bash
git add .
git commit -m "🚀 GirlsDay 2026 — fertige App: [App-Name]"
git push origin main
```

## Schritt 3 — GitHub Pages aktivieren (einmalig)

Falls noch nicht aktiviert:
1. GitHub Repo öffnen: https://github.com/FreiconOSS/GirlsDay2026-FREICON
2. Settings → Pages
3. Branch: `main`, Folder: `/ (root)`
4. Save

## Schritt 4 — URL teilen 🎉

Nach ~2 Minuten ist die App live:
```
https://freiconoss.github.io/GirlsDay2026-FREICON/
```

**Den Mädels die URL aufschreiben / als QR-Code zeigen — die können sie sofort zuhause öffnen!**

## Tipp: QR-Code generieren

```
https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=https://freiconoss.github.io/GirlsDay2026-FREICON/
```

Diesen Link im Browser öffnen → QR-Code erscheint → Screenshot machen → ausdrucken oder per Chat schicken.

---
name: deploy-to-pages
description: Deploy the finished app to GitHub Pages. Use at the end of the workshop. Live at https://freiconoss.github.io/GirlsDay2026-FREICON/
---

# 🌍 Deploy to GitHub Pages — App live schalten!

**Live-URL:** https://freiconoss.github.io/GirlsDay2026-FREICON/

---

## Schritt 1 — App ins Root kopieren

GitHub Pages serviert vom Repository-Root. Die fertige `index.html` muss nach oben:

```bash
# Passe <app-name> an den echten Ordnernamen an
cp projects/<app-name>/index.html ./index.html
cp projects/<app-name>/style.css ./style.css 2>/dev/null || true
cp projects/<app-name>/script.js ./script.js 2>/dev/null || true
```

Kurz prüfen: `index.html` im Root vorhanden? Öffnen und testen.

## Schritt 2 — Committen & Pushen

```bash
git add .
git commit -m "🚀 GirlsDay 2026 FREICON — fertige App live!"
git push origin main
```

## Schritt 3 — GitHub Pages aktivieren (einmalig, Andreas macht das)

1. https://github.com/FreiconOSS/GirlsDay2026-FREICON öffnen
2. **Settings → Pages**
3. Source: **Deploy from a branch**
4. Branch: `main` / Folder: `/ (root)`
5. **Save**

## Schritt 4 — Warten & Feiern 🎉

Nach ~2 Minuten ist die App live unter:
```
https://freiconoss.github.io/GirlsDay2026-FREICON/
```

## Schritt 5 — QR-Code für die Mädels

Diesen Link im Browser öffnen → QR-Code erscheint → Screenshot → ausdrucken oder per Chat schicken:

```
https://api.qrserver.com/v1/create-qr-code/?size=400x400&data=https://freiconoss.github.io/GirlsDay2026-FREICON/
```

**Die Mädels können die URL sofort zuhause auf ihrem Handy öffnen und ihren Freunden zeigen! 📱**

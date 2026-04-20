---
name: brainstorming
description: Use this BEFORE writing any code. Turns a vague app idea into a clear, buildable plan. One question at a time. No code until the plan is approved.
---

# 💡 Brainstorming — App-Idee ausarbeiten

**Kein Code, bevor der Plan steht und alle "Ja!" gesagt haben.**

## Ablauf

### Schritt 1 — Idee verstehen

Frag eine Frage nach der anderen. Nie mehrere auf einmal. Beispiele:

- *"Was soll man damit machen können?"*
- *"Ist das eher ein Spiel oder eher ein Tool?"*
- *"Wie soll es aussehen — bunt und verspielt, oder eher schlicht?"*
- *"Was darf auf keinen Fall fehlen?"*
- *"Was wäre cool, aber nicht unbedingt nötig?"*

### Schritt 2 — Realitätscheck (leise, intern)

Bevor du den Plan präsentierst, prüfe:
- Ist das in einem Tag machbar? Wenn nein → sanft auf Kernfeatures reduzieren
- Braucht es einen Server oder eine Datenbank? → Umformulieren für Browser-only
- Braucht es komplizierte 3D-Grafik? → 2D-Alternative vorschlagen

### Schritt 3 — Plan präsentieren

```
🎯 App-Name: [Name]

📝 Was sie macht:
   [1-2 Sätze, einfache Sprache]

✨ Das kommt rein (Must-have):
   - ...
   - ...

🎁 Das wäre noch cool (falls Zeit bleibt):
   - ...

🛠️ Technik: HTML + CSS + JavaScript
   [+ ggf. Library: "wir holen uns p5.js, das macht Grafik ganz einfach"]
```

### Schritt 4 — Bestätigung

*"Klingt das gut? Fangen wir an?"*

Erst wenn alle Ja sagen → `vibe-coder` Skill starten.

---

## Rahmenbedingungen (immer im Hinterkopf)

- **Kein Backend** — alles läuft im Browser
- **localStorage** für Speichern — aber: "wenn du den Tab schließt, sind die Daten weg"
- **Zeitrahmen:** ein Tag → lieber 3 Features fertig als 10 halbfertig
- **Grafik:** 2D, Libraries per CDN erlaubt

---
name: vibe-coder
description: Main coding skill for the workshop. Write browser apps with HTML/CSS/JS, explain in simple German, iterate fast. Small steps, always runnable, celebrate wins.
---

# 🚀 Vibe Coder — Workshop-Coding

## Grundregeln

- **Erst zeigen, dann erklären** — Code schreiben, dann 2 Sätze was er macht
- **Immer lauffähig** — jeder Schritt funktioniert im Browser, kein halbfertiger Code
- **Kleine Schritte** — eine Sache nach der anderen
- **Fachbegriffe sofort übersetzen** — "das ist wie ein Notizzettel für den Browser"
- **Schön von Anfang an** — jede Zeile Code sieht sofort gut aus, kein "Design machen wir später"

## Projektstruktur

```
projects/
└── meine-app/
    └── index.html    ← alles erstmal hier rein
```

Erst wenn's größer wird: `style.css` und `script.js` auslagern.

---

## 🎨 Design-System — Immer anwenden!

Jede UI die du baust folgt diesen Regeln. Kein Element ohne Liebe.

### Farbpalette

Nutze eine stimmige Palette. Hier die Standard-Palette (kann je nach App angepasst werden):

```css
:root {
  /* Hintergrund — dunkle, weiche Töne */
  --bg-deep:    #0f0f1a;
  --bg-card:    rgba(255, 255, 255, 0.06);
  --bg-glass:   rgba(255, 255, 255, 0.08);

  /* Akzentfarben — lebendig und jugendlich */
  --accent-1:   #a78bfa;   /* Lila — Hauptakzent */
  --accent-2:   #f472b6;   /* Pink */
  --accent-3:   #34d399;   /* Mint/Grün — Erfolg */
  --accent-4:   #fbbf24;   /* Gold/Gelb — Highlights */

  /* Text */
  --text-main:  #f0f0f0;
  --text-soft:  #999;
  --text-muted: #555;

  /* Gradient für Hintergründe */
  --gradient-bg: linear-gradient(135deg, #0f0f1a 0%, #1a1028 50%, #0f1a2e 100%);

  /* Schatten */
  --shadow-soft:  0 4px 20px rgba(0, 0, 0, 0.3);
  --shadow-glow:  0 0 30px rgba(167, 139, 250, 0.15);

  /* Rundungen */
  --radius-sm:  8px;
  --radius-md:  16px;
  --radius-lg:  24px;
  --radius-full: 9999px;
}
```

### Wenn das Thema der App hell/bunt sein soll

Passe die Palette an, aber behalte die Struktur bei. Beispiel für ein helles Spiel:

```css
:root {
  --bg-deep:   #faf5ff;
  --bg-card:   rgba(167, 139, 250, 0.08);
  --text-main: #1a1a2e;
  --text-soft:  #666;
  /* ... Akzentfarben bleiben lebendig */
}
```

### Typografie

```css
body {
  font-family: 'Inter', 'Segoe UI', system-ui, sans-serif;
  font-size: 16px;
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
}
```

Lade Inter via Google Fonts:
```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap" rel="stylesheet">
```

### Glassmorphism — Für Karten, Panels, Dialoge

```css
.card {
  background: var(--bg-glass);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: var(--radius-md);
  padding: 24px;
  box-shadow: var(--shadow-soft);
}
```

### Buttons — Immer einladend und klickbar

```css
.btn {
  padding: 12px 28px;
  border: none;
  border-radius: var(--radius-full);
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;
  overflow: hidden;
}

/* Hauptbutton — Gradient */
.btn-primary {
  background: linear-gradient(135deg, var(--accent-1), var(--accent-2));
  color: white;
  box-shadow: 0 4px 15px rgba(167, 139, 250, 0.3);
}
.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 25px rgba(167, 139, 250, 0.4);
}
.btn-primary:active {
  transform: translateY(0) scale(0.97);
}

/* Sekundärbutton — Outline */
.btn-secondary {
  background: transparent;
  border: 2px solid var(--accent-1);
  color: var(--accent-1);
}
.btn-secondary:hover {
  background: rgba(167, 139, 250, 0.1);
}
```

### Animationen — Subtil aber spürbar

```css
/* Elemente sanft einblenden beim Laden */
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
}

.animate-in {
  animation: fadeInUp 0.5s ease-out both;
}

/* Für gestaffelte Animationen (Listen etc.) */
.animate-in:nth-child(1) { animation-delay: 0.1s; }
.animate-in:nth-child(2) { animation-delay: 0.2s; }
.animate-in:nth-child(3) { animation-delay: 0.3s; }
.animate-in:nth-child(4) { animation-delay: 0.4s; }

/* Puls-Effekt für wichtige Elemente */
@keyframes pulse-glow {
  0%, 100% { box-shadow: 0 0 20px rgba(167, 139, 250, 0.2); }
  50%      { box-shadow: 0 0 40px rgba(167, 139, 250, 0.4); }
}

/* Smooth Transitions überall */
* { transition: color 0.2s, background-color 0.2s, border-color 0.2s, box-shadow 0.2s; }
```

### Mobile-First — Sieht auf dem Handy genauso gut aus

```css
/* Grundlayout immer flexibel */
.container {
  width: min(600px, 90vw);
  margin: 0 auto;
  padding: 20px;
}

/* Media Queries nur wenn nötig */
@media (max-width: 480px) {
  body { font-size: 14px; }
  .btn { padding: 10px 20px; font-size: 0.9rem; }
}
```

### Wow-Effekte — Für besondere Momente

**Confetti bei Erfolg (immer einbauen bei Spielen!):**
```html
<script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.9.2/dist/confetti.browser.min.js"></script>
<script>
function feiern() {
  confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
}
</script>
```

**Animierter Gradient-Hintergrund:**
```css
body {
  background: linear-gradient(-45deg, #0f0f1a, #1a1028, #0f1a2e, #1a0f28);
  background-size: 400% 400%;
  animation: gradientShift 15s ease infinite;
}
@keyframes gradientShift {
  0%   { background-position: 0% 50%; }
  50%  { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
```

**Emoji als Deko-Element:**
```css
.emoji-bg::before {
  content: '✨🎮🚀';
  position: fixed;
  font-size: 8rem;
  opacity: 0.03;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
}
```

---

## 🧩 Design-Checkliste (vor jedem "Fertig!")

Geh diese Liste durch bevor du sagst "Das läuft!":

- [ ] **Farben** — stimmige Palette, keine default-Farben
- [ ] **Rundungen** — alle Ecken abgerundet (min 8px)
- [ ] **Schatten** — Karten und Buttons haben weiche Schatten
- [ ] **Hover-Effekte** — jeder klickbare Element reagiert auf Hover
- [ ] **Animationen** — Elemente faden sanft ein, keine harten Schnitte
- [ ] **Schrift** — Inter geladen, gute Lesbarkeit
- [ ] **Handy** — auf 375px Breite testen, sieht es gut aus?
- [ ] **Abstände** — genug Luft zwischen Elementen (min 16px)
- [ ] **Wow-Moment** — mindestens ein "Oh cool!"-Effekt (Confetti, Animation, Farbwechsel)

---

## Starter-Template (immer so beginnen)

```html
<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>🎮 [App-Name]</title>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap" rel="stylesheet">
  <style>
    :root {
      --bg-deep:    #0f0f1a;
      --bg-card:    rgba(255, 255, 255, 0.06);
      --bg-glass:   rgba(255, 255, 255, 0.08);
      --accent-1:   #a78bfa;
      --accent-2:   #f472b6;
      --accent-3:   #34d399;
      --accent-4:   #fbbf24;
      --text-main:  #f0f0f0;
      --text-soft:  #999;
      --radius-md:  16px;
      --radius-full: 9999px;
      --shadow-soft: 0 4px 20px rgba(0, 0, 0, 0.3);
    }

    * { box-sizing: border-box; margin: 0; padding: 0; }

    body {
      font-family: 'Inter', system-ui, sans-serif;
      background: linear-gradient(-45deg, #0f0f1a, #1a1028, #0f1a2e, #1a0f28);
      background-size: 400% 400%;
      animation: gradientShift 15s ease infinite;
      color: var(--text-main);
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      -webkit-font-smoothing: antialiased;
    }

    @keyframes gradientShift {
      0%   { background-position: 0% 50%; }
      50%  { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }

    @keyframes fadeInUp {
      from { opacity: 0; transform: translateY(20px); }
      to   { opacity: 1; transform: translateY(0); }
    }
  </style>
</head>
<body>

  <script>
    // Hier kommt die Magie ✨
  </script>
</body>
</html>
```

---

## Nützliche Libraries (per CDN, einfach in `<head>` einfügen)

| Was | Wann | CDN |
|---|---|---|
| **p5.js** | Grafik, Animationen, einfache Spiele | `<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.9.0/p5.min.js"></script>` |
| **Phaser** | Richtige Spiele-Engine | `<script src="https://cdn.jsdelivr.net/npm/phaser@3/dist/phaser.min.js"></script>` |
| **Confetti** | Sieges-Effekt 🎉 | `<script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.9.2/dist/confetti.browser.min.js"></script>` |
| **Anime.js** | Smooth Animationen | `<script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js"></script>` |

**Library-Doku nachschlagen:** Context7 MCP nutzen — `resolve_library_id` → `get_library_docs`

---

## Erklär-Modus (nach jedem größeren Schritt)

Erkläre was gerade passiert ist — in einer Analogie aus dem Alltag:

| Code-Konzept | Alltagsanalogie |
|---|---|
| Variable | "Ein Zettel auf dem wir uns was merken" |
| Funktion | "Ein Rezept — wir geben ihm einen Namen und können es jederzeit aufrufen" |
| Array/Liste | "Eine Einkaufsliste" |
| `if`-Bedingung | "Wenn es regnet, nimm einen Schirm — wenn nicht, lass ihn zuhause" |
| Event Listener | "Ein Türklingel-Sensor — wartet bis jemand klingelt, dann passiert was" |
| `localStorage` | "Ein Notizzettel im Browser — bleibt dort bis man ihn löscht" |
| CSS Transition | "Wie ein Aufzug — gleitet sanft statt zu springen" |
| Gradient | "Wie ein Sonnenuntergang — eine Farbe geht langsam in die andere über" |
| `border-radius` | "Wir runden die Ecken ab, wie bei einem Smartphone" |

## Nach jedem Feature

Frag: *"Was soll als nächstes dazu?"* — die Gruppe entscheidet, du setzt um.

Wenn etwas funktioniert: kurz feiern. *"Das läuft! 🎉 Was kommt als nächstes?"*

**Making-Of nicht vergessen!** → Nach jedem sichtbaren Fortschritt den `making-of` Skill aufrufen und die Making-Of Seite aktualisieren. Das passiert leise im Hintergrund — die Mädels merken nichts davon.

## Wenn etwas nicht funktioniert

1. Nicht in Panik verfallen
2. Fehlermeldung vorlesen (Konsole mit F12)
3. In einfachen Worten erklären was schief gelaufen ist
4. Maximal 3 Zeilen auf einmal ändern
5. Direkt wieder testen

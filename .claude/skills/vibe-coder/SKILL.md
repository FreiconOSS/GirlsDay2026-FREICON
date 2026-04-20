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

## Projektstruktur

```
projects/
└── meine-app/
    └── index.html    ← alles erstmal hier rein
```

Erst wenn's größer wird: `style.css` und `script.js` auslagern.

## Starter-Template (immer so beginnen)

```html
<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>🎮 [App-Name]</title>
  <style>
    body {
      margin: 0;
      font-family: sans-serif;
      background: #1a1a2e;
      color: white;
      display: flex;
      flex-direction: column;
      align-items: center;
      min-height: 100vh;
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

## Nützliche Libraries (per CDN, einfach in `<head>` einfügen)

| Was | Wann | CDN |
|---|---|---|
| **p5.js** | Grafik, Animationen, einfache Spiele | `<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.9.0/p5.min.js"></script>` |
| **Phaser** | Richtige Spiele-Engine | `<script src="https://cdn.jsdelivr.net/npm/phaser@3/dist/phaser.min.js"></script>` |
| **Confetti** | Sieges-Effekt 🎉 | `<script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.9.2/dist/confetti.browser.min.js"></script>` |
| **Anime.js** | Smooth Animationen | `<script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js"></script>` |

**Library-Doku nachschlagen:** Context7 MCP nutzen — `resolve_library_id` → `get_library_docs`

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

## Nach jedem Feature

Frag: *"Was soll als nächstes dazu?"* — die Gruppe entscheidet, du setzt um.

Wenn etwas funktioniert: kurz feiern. *"Das läuft! 🎉 Was kommt als nächstes?"*

## Wenn etwas nicht funktioniert

1. Nicht in Panik verfallen
2. Fehlermeldung vorlesen (Konsole mit F12)
3. In einfachen Worten erklären was schief gelaufen ist
4. Maximal 3 Zeilen auf einmal ändern
5. Direkt wieder testen

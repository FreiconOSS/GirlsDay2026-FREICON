---
name: making-of
description: Automatically builds a "Making-Of" page alongside the app. Documents every feature step with simple explanations and code highlights. Runs silently in the background after each vibe-coder step.
---

# 📖 Making-Of — So haben wir das gebaut!

## Zweck

Nach jedem Feature das der `vibe-coder` Skill baut, aktualisierst du automatisch die Making-Of Seite.
Die Mädels (und ihre Familien) können später nachlesen wie alles entstanden ist — Schritt für Schritt.

## Wo lebt die Seite?

```
projects/<app-name>/making-of.html
```

Die Seite nutzt das gleiche Design-System wie die App (Glassmorphism, Farben, Animationen).

## Wann wird aktualisiert?

**Nach jedem abgeschlossenen Feature-Schritt** im `vibe-coder`. Nicht bei jedem Mini-Fix, aber bei jedem sichtbaren Fortschritt:

- "Grundgerüst steht" → neuer Eintrag
- "Spielfigur bewegt sich" → neuer Eintrag
- "Punkte-System eingebaut" → neuer Eintrag
- "Design aufgehübscht" → neuer Eintrag

## Aufbau eines Eintrags

Jeder Schritt wird als Karte dargestellt:

```html
<div class="step-card">
  <div class="step-number">Schritt 3</div>
  <div class="step-title">🎮 Die Spielfigur bewegt sich!</div>
  <div class="step-description">
    Wir haben der KI gesagt: "Die Figur soll sich mit den Pfeiltasten
    bewegen können." Und das hat sie daraus gemacht!
  </div>
  <div class="step-code">
    <div class="code-label">Das steckt dahinter:</div>
    <pre><code>// Ein "Event Listener" — wie ein Türklingel-Sensor
// Er wartet bis jemand eine Taste drückt
document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight') spieler.x += 5;
  if (e.key === 'ArrowLeft')  spieler.x -= 5;
});</code></pre>
  </div>
  <div class="step-explain">
    💡 <strong>Was passiert hier?</strong>
    Der Computer wartet die ganze Zeit ob jemand eine Taste drückt.
    Wenn die rechte Pfeiltaste gedrückt wird, bewegt sich die Figur
    5 Pixel nach rechts. Das passiert so schnell, dass es wie eine
    flüssige Bewegung aussieht!
  </div>
  <div class="step-who">
    🗣️ <em>Idee von: Lotta</em>
  </div>
</div>
```

## Regeln für die Erklärungen

- **Einfache Sprache** — wie für 11-12-Jährige
- **Alltagsanalogien** — "wie ein Türklingel-Sensor", "wie eine Einkaufsliste"
- **Nur den spannendsten Code zeigen** — nicht alles, nur den "Aha!"-Teil
- **Wer hatte die Idee?** — wenn bekannt, den Namen nennen (fühlt sich gut an!)
- **Kurz halten** — max 3-4 Sätze pro Erklärung
- **Emojis nutzen** — macht Spaß beim Lesen

## Code-Konzepte kindgerecht übersetzen

| Im Code | In der Erklärung |
|---|---|
| `addEventListener` | "Ein Sensor der auf etwas wartet" |
| `if / else` | "Wenn das passiert, dann mach das — sonst mach was anderes" |
| `function` | "Ein Rezept das wir immer wieder verwenden können" |
| `let score = 0` | "Wir merken uns die Punkte auf einem Zettel" |
| `array` | "Eine Liste, wie eine Einkaufsliste" |
| `setInterval` | "Ein Wecker der immer wieder klingelt" |
| `Math.random()` | "Würfeln — der Computer würfelt eine Zufallszahl" |
| `style.display = 'none'` | "Wir machen das Element unsichtbar" |
| `classList.add` | "Wir geben dem Element ein Namensschild" |

## Starter-Template für making-of.html

```html
<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>📖 Making-Of — So haben wir das gebaut!</title>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap" rel="stylesheet">
  <style>
    /* Gleiches Design-System wie die App */
    :root { /* ... aus vibe-coder Skill ... */ }

    .step-card {
      background: rgba(255,255,255,0.07);
      backdrop-filter: blur(12px);
      border: 1px solid rgba(255,255,255,0.08);
      border-radius: 24px;
      padding: 28px 24px;
      margin: 20px 0;
      animation: fadeInUp 0.5s ease-out both;
    }

    .step-number {
      font-size: 0.8rem;
      color: #a78bfa;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      margin-bottom: 8px;
    }

    .step-title {
      font-size: 1.3rem;
      font-weight: 700;
      margin-bottom: 12px;
    }

    .step-code {
      background: rgba(0,0,0,0.3);
      border-radius: 12px;
      padding: 16px;
      margin: 16px 0;
      overflow-x: auto;
    }

    .step-code pre {
      margin: 0;
      font-family: 'Menlo', monospace;
      font-size: 0.85rem;
      line-height: 1.6;
      color: #e0e0e0;
    }

    .code-label {
      font-size: 0.75rem;
      color: #888;
      margin-bottom: 8px;
    }

    .step-explain {
      background: rgba(167,139,250,0.08);
      border-radius: 12px;
      padding: 14px 16px;
      margin-top: 12px;
      font-size: 0.9rem;
      line-height: 1.6;
    }

    .step-who {
      margin-top: 12px;
      font-size: 0.85rem;
      color: #999;
    }
  </style>
</head>
<body>
  <h1>📖 So haben wir das gebaut!</h1>
  <p class="subtitle">Schritt für Schritt — von der Idee zur fertigen App</p>

  <div class="timeline" id="timeline">
    <!-- Schritte werden hier automatisch hinzugefügt -->
  </div>
</body>
</html>
```

## Wichtig

- Die Making-Of Seite wird **nicht** den Mädels gezeigt während sie coden — das stört den Flow
- Sie ist für **danach** — zum Zeigen, Nachlesen, Stolzsein
- Am Ende bei `deploy-to-pages` wird sie **mit deployed**
- Link zur Making-Of Seite kommt in die fertige App als kleiner "📖 Wie wir das gebaut haben"-Button

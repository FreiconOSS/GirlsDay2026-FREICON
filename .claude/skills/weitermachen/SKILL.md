---
name: weitermachen
description: Creates a "How to continue" guide page for the girls to keep coding after the workshop. Simple, encouraging, with step-by-step instructions for different tools.
---

# 🚀 Weitermachen — So programmierst du zuhause weiter!

## Zweck

Am Ende des Workshops (oder wenn jemand fragt "Wie kann ich zuhause weitermachen?") erstellst du eine schöne Erklärseite. Die Mädels sollen sich trauen, alleine mit KI weiterzucoden.

## Wo lebt die Seite?

```
projects/<app-name>/weitermachen.html
```

Nutzt das gleiche Design-System wie die App.

## Inhalt der Seite

Die Seite erklärt **5 Wege** wie man nach dem Workshop weitermachen kann — vom einfachsten zum fortgeschrittensten:

### 1. 🌐 ChatGPT / Claude im Browser (Einfachster Weg)

- Einfach auf chatgpt.com oder claude.ai gehen
- Kostenlos nutzbar
- Sag der KI: "Ich bin [Name], ich möchte eine Browser-App bauen. Ich kann HTML, CSS und JavaScript."
- Kopiere den Code den die KI schreibt in eine Textdatei
- Speichere sie als `index.html`
- Öffne sie im Browser — fertig!

**Tipp:** Sag der KI immer genau was du willst. Je genauer, desto besser wird es!

### 2. 💻 GitHub Copilot in VS Code (Wie im Workshop)

- VS Code runterladen (kostenlos): https://code.visualstudio.com
- GitHub-Account erstellen (kostenlos für Schüler!)
- Copilot Extension installieren
- Jetzt kannst du genau so arbeiten wie im Workshop!

### 3. 🤖 Claude Code (Terminal-Profi)

- Terminal öffnen (auf Mac: Programme → Terminal)
- Claude Code installieren und starten
- Dann einfach sagen was gebaut werden soll — genau wie heute!

### 4. 📱 Replit (Direkt im Browser coden)

- https://replit.com aufrufen
- Kostenlosen Account erstellen
- "Create Repl" → HTML/CSS/JS auswählen
- Code schreiben und direkt live sehen — alles im Browser!

### 5. 🎮 Scratch (Für Spiele und Animationen)

- https://scratch.mit.edu
- Visuelles Programmieren mit Bausteinen
- Perfekt für Spiele, Geschichten und Animationen
- Riesige Community mit Millionen Projekten zum Remixen

## Design der Seite

- Jeder Weg ist eine Glassmorphism-Karte
- Schwierigkeitsgrad als Sterne (⭐ bis ⭐⭐⭐)
- "Das brauchst du"-Liste pro Karte
- Ermutigende Botschaft oben: "Du hast heute bewiesen dass du das kannst!"
- QR-Codes zu den wichtigsten Links
- Am Ende: Motivations-Sektion mit Confetti-Button

## Ton

- **Mega ermutigend** — "Du hast heute eine echte App gebaut. Das können die meisten Erwachsenen nicht!"
- **Keine Angst machen** — "Man kann nichts kaputt machen. Der Computer explodiert nicht 😄"
- **Ehrlich** — nicht verschweigen dass manches am Anfang verwirrend sein kann
- **Praktisch** — konkrete nächste Schritte, nicht nur "viel Erfolg!"

## Starter-Template

```html
<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>🚀 So machst du weiter!</title>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap" rel="stylesheet">
  <style>
    /* Design-System aus vibe-coder */
    :root {
      --bg-deep: #0f0f1a;
      --bg-glass: rgba(255, 255, 255, 0.08);
      --accent-1: #a78bfa;
      --accent-2: #f472b6;
      --accent-3: #34d399;
      --text-main: #f0f0f0;
      --text-soft: #999;
      --radius-lg: 24px;
    }

    * { box-sizing: border-box; margin: 0; padding: 0; }

    body {
      font-family: 'Inter', system-ui, sans-serif;
      background: linear-gradient(-45deg, #0f0f1a, #1a1028, #0f1a2e, #1a0f28);
      background-size: 400% 400%;
      animation: gradientShift 15s ease infinite;
      color: var(--text-main);
      min-height: 100vh;
      padding: 20px;
    }

    @keyframes gradientShift {
      0%   { background-position: 0% 50%; }
      50%  { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }

    .container { max-width: 700px; margin: 0 auto; }

    .hero {
      text-align: center;
      padding: 40px 20px;
      animation: fadeInUp 0.6s ease-out;
    }

    .hero h1 { font-size: 2rem; margin-bottom: 12px; }
    .hero p { color: var(--text-soft); font-size: 1.1rem; }

    .way-card {
      background: var(--bg-glass);
      backdrop-filter: blur(12px);
      border: 1px solid rgba(255,255,255,0.1);
      border-radius: var(--radius-lg);
      padding: 28px;
      margin: 20px 0;
      animation: fadeInUp 0.5s ease-out both;
    }

    .way-card h2 { font-size: 1.2rem; margin-bottom: 8px; }

    .difficulty {
      font-size: 0.8rem;
      color: var(--accent-1);
      margin-bottom: 12px;
    }

    .steps {
      list-style: none;
      padding: 0;
    }

    .steps li {
      padding: 8px 0;
      padding-left: 24px;
      position: relative;
      color: var(--text-soft);
    }

    .steps li::before {
      content: '→';
      position: absolute;
      left: 0;
      color: var(--accent-3);
    }

    @keyframes fadeInUp {
      from { opacity: 0; transform: translateY(20px); }
      to   { opacity: 1; transform: translateY(0); }
    }

    /* Gestaffelt */
    .way-card:nth-child(1) { animation-delay: 0.1s; }
    .way-card:nth-child(2) { animation-delay: 0.2s; }
    .way-card:nth-child(3) { animation-delay: 0.3s; }
    .way-card:nth-child(4) { animation-delay: 0.4s; }
    .way-card:nth-child(5) { animation-delay: 0.5s; }
  </style>
</head>
<body>
  <div class="container">
    <div class="hero">
      <h1>🚀 So machst du weiter!</h1>
      <p>Du hast heute bewiesen dass du programmieren kannst.<br>
      Hier sind 5 Wege wie du zuhause weitermachst!</p>
    </div>

    <div id="ways">
      <!-- Karten werden hier eingesetzt -->
    </div>

    <div class="motivation">
      <!-- Ermutigende Abschluss-Sektion -->
    </div>
  </div>
</body>
</html>
```

## Verknüpfung

Am Ende wird ein Link zur Weitermachen-Seite in die Haupt-App eingebaut:

```html
<a href="weitermachen.html" class="btn btn-secondary">🚀 So machst du weiter</a>
```

## Wichtig

- Die Seite wird **zusammen mit der App deployed** auf GitHub Pages
- Sie soll auch **auf dem Handy** gut aussehen
- Die Links sollten **alle klickbar** sein
- Kein Hinweis auf kostenpflichtige Tools — nur kostenlose/Schüler-kostenlose Optionen

---
name: code-reviewer
description: Reviews code for quality, accessibility, and best practices. Runs silently after each vibe-coder step to keep the codebase clean. Kid-friendly explanations for any fixes.
---

# 🔍 Code-Reviewer — Sauberer Code!

## Wann diesen Skill nutzen?

**Nach jedem größeren Feature** oder wenn Andreas sagt "Lass mal drüberschauen."
Der Review läuft leise im Hintergrund — die Mädels merken davon nichts, der Code wird einfach besser.

---

## Review-Checkliste

Geh diese Liste nach jedem größeren Schritt durch:

### 1. ✅ Funktioniert es?

- [ ] Seite lädt ohne Fehler in der Konsole
- [ ] Alle Buttons/Interaktionen funktionieren
- [ ] Auf dem Handy getestet (375px Breite)
- [ ] Kein weißer Bildschirm, kein Layout-Sprung

### 2. 🧹 Code-Qualität

- [ ] **Keine toten Code-Zeilen** — auskommentierter Code raus
- [ ] **Variablen haben sinnvolle Namen** — `punkte` statt `x`, `spielerPosition` statt `p`
- [ ] **Keine doppelten Code-Blöcke** — wenn was 2x vorkommt → Funktion draus machen
- [ ] **Einrückung konsistent** — 2 Spaces überall
- [ ] **Keine vergessenen console.log()** — Debug-Ausgaben aufräumen
- [ ] **Keine Inline-Styles wenn CSS besser wäre** — `style="..."` nur wenn dynamisch nötig

### 3. 🛡️ Robustheit

- [ ] **Null-Checks** — `getElementById` kann `null` zurückgeben
- [ ] **Event-Listener aufräumen** — keine doppelten Listener
- [ ] **localStorage-Zugriff** — `try/catch` oder Fallback falls leer
- [ ] **Audio/Media** — `.play()` kann fehlschlagen (Autoplay-Policy)

```javascript
// ❌ Kann crashen
document.getElementById('btn').onclick = start;

// ✅ Sicher
const btn = document.getElementById('btn');
if (btn) btn.onclick = start;
```

```javascript
// ❌ Kann fehlschlagen
audio.play();

// ✅ Sicher
audio.play().catch(() => {});
```

### 4. 📱 Responsiveness

- [ ] **Kein horizontales Scrollen** auf dem Handy
- [ ] **Touch-Targets mindestens 44x44px** — Finger sind größer als Mauszeiger
- [ ] **Text lesbar** auf kleinen Bildschirmen (min 14px)
- [ ] **Bilder/Canvas** skalieren mit dem Viewport
- [ ] **`viewport` Meta-Tag** vorhanden

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

### 5. ♿ Barrierefreiheit (Basics)

- [ ] **Farbkontrast** — Text muss auf dem Hintergrund lesbar sein
- [ ] **Alt-Texte** bei `<img>` Tags
- [ ] **Buttons haben Text** — nicht nur ein Icon
- [ ] **`lang="de"`** im `<html>` Tag

### 6. ⚡ Performance

- [ ] **Keine Memory-Leaks** — `setInterval` wird bei Spielende aufgeräumt
- [ ] **Keine riesigen Bilder** — wenn Bilder, dann optimiert
- [ ] **Keine unnötigen DOM-Manipulationen** in Schleifen
- [ ] **requestAnimationFrame** statt `setInterval` für Animationen

```javascript
// ❌ Memory-Leak — läuft endlos!
setInterval(update, 16);

// ✅ Aufräumbar
let gameLoop;
function start() {
  function update() {
    // Spiel-Logik
    if (spielLaeuft) gameLoop = requestAnimationFrame(update);
  }
  update();
}

function stop() {
  cancelAnimationFrame(gameLoop);
}
```

### 7. 🎨 Design-Konsistenz

- [ ] **CSS-Variablen verwendet** — keine hart-codierten Farben
- [ ] **Einheitliche Abstände** — nicht 10px hier und 17px da
- [ ] **Border-Radius konsistent** — gleiche Rundung überall
- [ ] **Hover/Active-States** — jedes klickbare Element reagiert
- [ ] **Transitions** — keine harten Sprünge bei Zustandswechseln

---

## Typische Probleme & Fixes

### Problem: Doppelter Event-Listener

```javascript
// ❌ Bei jedem Klick wird ein NEUER Listener hinzugefügt!
button.addEventListener('click', () => {
  canvas.addEventListener('click', handleClick);
});

// ✅ Listener nur einmal hinzufügen
canvas.addEventListener('click', handleClick);
```

### Problem: Globale Variablen-Verschmutzung

```javascript
// ❌ Alles global — kann andere Scripts stören
let x = 0;
let y = 0;
let speed = 5;

// ✅ In einem Objekt gruppieren
const spieler = { x: 0, y: 0, speed: 5 };
```

### Problem: Magische Zahlen

```javascript
// ❌ Was bedeutet 30? Und 500?
if (spieler.y > 500) {
  spieler.health -= 30;
}

// ✅ Benannte Konstanten
const BODEN_Y = 500;
const FALL_SCHADEN = 30;

if (spieler.y > BODEN_Y) {
  spieler.health -= FALL_SCHADEN;
}
```

### Problem: HTML in JavaScript (String-Chaos)

```javascript
// ❌ Unlesbar
element.innerHTML = '<div class="card"><h2>' + titel + '</h2><p>' + text + '</p></div>';

// ✅ Template-Literal
element.innerHTML = `
  <div class="card">
    <h2>${titel}</h2>
    <p>${text}</p>
  </div>
`;
```

---

## Wie kommuniziere ich Fixes?

### Wenn die Mädels zuschauen:

Sag einfach: *"Ich räume noch kurz auf — wie aufräumen nach dem Basteln!"*

### Größere Umbauten:

*"Ich mache den Code etwas ordentlicher. Das funktioniert danach genauso — sieht nur innen sauberer aus. Wie wenn man seinen Schrank aufräumt!"*

### Niemals:

- ❌ "Der Code war schlecht" (war er nicht — er war ein Anfang!)
- ❌ Lange Refactoring-Monologe (die Mädels wollen Features, nicht Aufräum-Sessions)

---

## Wann NICHT reviewen

- Mitten im kreativen Flow — nicht unterbrechen!
- Bei kleinen Experimenten — lass sie ausprobieren
- Wenn die Zeit knapp wird — lieber ein fertiges Feature als perfekter Code

**Sauberer Code ist wichtig, aber Spaß und Erfolgserlebnisse haben Vorrang!**

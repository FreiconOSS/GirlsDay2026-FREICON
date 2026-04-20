---
name: debugger
description: Systematic bug hunting skill. Explains browser console, common errors, and debugging strategies — all in kid-friendly "Käferjagd" mode. Use when something breaks.
---

# 🐛 Debugger — Käferjagd-Modus!

## Wann diesen Skill nutzen?

Wenn etwas **nicht funktioniert** oder **komisch aussieht**. Dann schalten wir in den Käferjagd-Modus!

## Grundregel

**Ruhe bewahren.** Fehler sind normal. Jeder Programmierer verbringt die Hälfte seiner Zeit mit Fehlersuche. Das ist kein Versagen — das ist Teil des Jobs!

---

## Schritt 1: Was genau funktioniert nicht?

Frag die Mädels:
- *"Was habt ihr gemacht?"* (Welchen Button geklickt, was eingegeben)
- *"Was sollte passieren?"*
- *"Was passiert stattdessen?"*

Das klingt einfach, aber oft liegt die Lösung schon in der Antwort!

## Schritt 2: Browser-Konsole aufmachen

```
F12 drücken → Tab "Console" (Konsole) klicken
```

Oder: Rechtsklick → "Untersuchen" → "Console"

**So erklärst du die Konsole:**
> "Das ist wie ein geheimes Logbuch des Browsers. Wenn irgendwas schief läuft, schreibt der Browser hier eine Nachricht rein — meistens in Rot."

## Schritt 3: Fehlermeldung lesen

### Die häufigsten Fehler und was sie bedeuten:

| Fehlermeldung | Was es bedeutet | Analogie | Typischer Fix |
|---|---|---|---|
| `Uncaught ReferenceError: x is not defined` | Eine Variable oder Funktion existiert nicht | "Du rufst jemanden beim falschen Namen" | Tippfehler prüfen! Groß/Kleinschreibung! |
| `Uncaught TypeError: x is not a function` | Man versucht etwas aufzurufen das keine Funktion ist | "Du versuchst ein Buch anzurufen — das geht nicht" | Klammern oder Funktionsname prüfen |
| `Uncaught SyntaxError: Unexpected token` | Ein Zeichen fehlt oder ist falsch | "Ein Satz ohne Punkt am Ende" | Klammer, Komma oder Anführungszeichen vergessen? |
| `Uncaught TypeError: Cannot read properties of null` | Ein Element wird nicht gefunden | "Du suchst einen Raum der nicht existiert" | ID im HTML prüfen, Script nach dem Element laden |
| `net::ERR_FILE_NOT_FOUND` | Eine Datei (Bild, Audio, CSS) wurde nicht gefunden | "Du schickst einen Brief an eine Adresse die es nicht gibt" | Dateiname und Pfad prüfen |

### So erklärst du eine Fehlermeldung:

1. **Rot = nicht schlimm!** "Rote Meldungen sehen bedrohlich aus, aber das ist nur der Browser der uns sagt wo der Käfer sitzt."
2. **Zeile nennen:** "Schau mal, hier steht `at line 42` — das heißt der Fehler ist in Zeile 42. Da schauen wir jetzt mal hin!"
3. **Maximal 3 Zeilen auf einmal ändern** — nicht alles auf einmal umbauen

---

## Häufige Fehlerquellen (Quick-Checks)

### Tippfehler-Check
```javascript
// ❌ Falsch — Groß/Kleinschreibung!
document.getElementByid('game')
document.queryselector('.card')

// ✅ Richtig
document.getElementById('game')
document.querySelector('.card')
```

### Klammern-Check
```javascript
// ❌ Klammer vergessen
if (punkte > 10 {
  feiern();
}

// ✅ Richtig
if (punkte > 10) {
  feiern();
}
```

### Anführungszeichen-Check
```javascript
// ❌ Gemischt
element.style.color = "red';

// ✅ Einheitlich
element.style.color = 'red';
```

### Reihenfolge-Check
```html
<!-- ❌ Script VOR dem Element — Element existiert noch nicht! -->
<script>
  document.getElementById('btn').onclick = start;
</script>
<button id="btn">Start</button>

<!-- ✅ Script NACH dem Element -->
<button id="btn">Start</button>
<script>
  document.getElementById('btn').onclick = start;
</script>
```

### Semikolon-Check
```javascript
// ❌ Semikolon nach if-Klammer — Block wird IMMER ausgeführt!
if (punkte > 100);
{
  gewonnen();
}

// ✅ Richtig
if (punkte > 100) {
  gewonnen();
}
```

---

## Debug-Werkzeuge

### console.log — Notizzettel im Code

```javascript
// Wo steckt der Käfer? Zettel verteilen!
console.log('Spieler Position:', spieler.x, spieler.y);
console.log('Punkte:', punkte);
console.log('Bin hier angekommen!'); // Wird diese Zeile überhaupt erreicht?
```

**Analogie:** "Das ist wie Brotkrumen auslegen — wir sehen genau wo der Computer lang gelaufen ist und was er sich gemerkt hat."

### Visuelles Debugging

```javascript
// Element rot umranden um zu sehen wo es ist
element.style.border = '3px solid red';
element.style.background = 'rgba(255,0,0,0.2)';
```

### Zeitlupen-Modus

```javascript
// Spiel langsamer machen zum Debuggen
let geschwindigkeit = 1; // Normal: 1, Zeitlupe: 0.2

function gameLoop() {
  // Alles mit geschwindigkeit multiplizieren
  spieler.x += 5 * geschwindigkeit;
  requestAnimationFrame(gameLoop);
}
```

---

## Kommunikation bei Fehlern

### Was du sagst:

- ✅ *"Oh, ein Käfer! Den fangen wir. Mal schauen wo er sich versteckt..."*
- ✅ *"Das passiert jedem — sogar Profis die seit 20 Jahren programmieren."*
- ✅ *"Ah, ich seh's! Da fehlt eine Klammer. Passiert mir auch ständig."*
- ✅ *"Wir sind Detektive — und die Konsole ist unsere Lupe! 🔍"*

### Was du NICHT sagst:

- ❌ "Das ist ein einfacher Fehler" (impliziert: du hättest ihn finden müssen)
- ❌ Technische Fachbegriffe ohne Erklärung
- ❌ "Das hätte nicht passieren dürfen" (klingt nach Vorwurf)

---

## Wenn gar nichts mehr geht

1. **Letzte funktionierende Version?** → `git stash` oder Strg+Z bis es wieder geht
2. **Browser Cache leeren:** Strg+Shift+R (Hard Reload)
3. **Anderer Browser:** Chrome ↔ Edge testen
4. **Neu anfangen?** Nur die letzte Änderung rückgängig machen, nicht alles!
5. **Pause machen:** Manchmal hilft 2 Minuten weg schauen. Ernsthaft!

## Nach dem Fix

Immer feiern! 🎉
*"Käfer gefangen! 🐛✅ Das war echte Detektivarbeit!"*

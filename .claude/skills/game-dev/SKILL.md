---
name: game-dev
description: Specialized skill for building browser games. Patterns for p5.js, Phaser, game loops, collision, scoring — all kid-friendly. Use when the girls want to build a game.
---

# 🎮 Game Dev — Spiele bauen!

## Wann diesen Skill nutzen?

Wenn die Mädels ein **Spiel** bauen wollen! Das ist der wahrscheinlichste Fall.
Dieser Skill ergänzt den `vibe-coder` mit spielspezifischen Patterns.

## Welche Engine nehmen?

### Option 1: Reines JavaScript + Canvas (einfachste Wahl)

Für einfache Spiele (Fangen, Quiz, Klick-Spiele). Kein extra Download nötig.

```html
<canvas id="game" width="400" height="600"></canvas>
<script>
  const canvas = document.getElementById('game');
  const ctx = canvas.getContext('2d');

  // Spielfigur
  let spieler = { x: 200, y: 500, breite: 40, hoehe: 40, farbe: '🚀' };

  // Spielschleife — läuft 60x pro Sekunde
  function gameLoop() {
    // 1. Alles löschen
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // 2. Spielfigur malen
    ctx.font = '40px serif';
    ctx.fillText(spieler.farbe, spieler.x, spieler.y);

    // 3. Nächstes Bild anfordern
    requestAnimationFrame(gameLoop);
  }

  gameLoop();
</script>
```

### Option 2: p5.js (beste Wahl für kreative Spiele)

Perfekt für Animationen, Partikel, bunte Grafik. Sehr anfängerfreundlich.

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.9.0/p5.min.js"></script>
<script>
  let spielerX, spielerY;

  function setup() {
    createCanvas(400, 600);
    spielerX = width / 2;
    spielerY = height - 50;
  }

  function draw() {
    background(20, 20, 40);

    // Spieler zeichnen
    textSize(40);
    textAlign(CENTER);
    text('🚀', spielerX, spielerY);

    // Maus-Steuerung
    spielerX = mouseX;
  }
</script>
```

### Option 3: Phaser (für anspruchsvolle Spiele)

Echte Game-Engine mit Physik, Sprites, Szenen. Nur wenn wirklich nötig.

```html
<script src="https://cdn.jsdelivr.net/npm/phaser@3/dist/phaser.min.js"></script>
```

**Empfehlung:** Starte mit **p5.js** — einfach, visuell, macht sofort Spaß!

---

## Game-Bausteine (Copy & Paste ready)

### 🕹️ Steuerung — Pfeiltasten

```javascript
// Tastatur-Steuerung
document.addEventListener('keydown', (e) => {
  const tempo = 5;
  if (e.key === 'ArrowLeft')  spieler.x -= tempo;
  if (e.key === 'ArrowRight') spieler.x += tempo;
  if (e.key === 'ArrowUp')    spieler.y -= tempo;
  if (e.key === 'ArrowDown')  spieler.y += tempo;
});
```

### 📱 Steuerung — Touch (Handy!)

```javascript
// Touch-Steuerung für Handy
canvas.addEventListener('touchmove', (e) => {
  e.preventDefault();
  const touch = e.touches[0];
  const rect = canvas.getBoundingClientRect();
  spieler.x = touch.clientX - rect.left;
  spieler.y = touch.clientY - rect.top;
}, { passive: false });
```

### 🎯 Kollisionserkennung (Treffer!)

```javascript
// Prüfen ob zwei Dinge sich berühren
function trifft(a, b) {
  const abstand = Math.sqrt(
    (a.x - b.x) ** 2 + (a.y - b.y) ** 2
  );
  return abstand < 30; // 30 Pixel nah = Treffer!
}

// Benutzen:
if (trifft(spieler, stern)) {
  punkte += 10;
  confetti({ particleCount: 30, spread: 40 });
}
```

### ⭐ Objekte spawnen (Sterne, Gegner, Items)

```javascript
let sterne = [];

// Alle 2 Sekunden neuen Stern erzeugen
setInterval(() => {
  sterne.push({
    x: Math.random() * canvas.width,
    y: 0,
    speed: 2 + Math.random() * 3,
    emoji: '⭐'
  });
}, 2000);

// Sterne bewegen (in der Spielschleife)
function sterneBewegen() {
  sterne.forEach(stern => {
    stern.y += stern.speed;
  });
  // Entferne Sterne die unten rausfallen
  sterne = sterne.filter(s => s.y < canvas.height + 50);
}
```

### 🏆 Punktestand

```javascript
let punkte = 0;
let highscore = parseInt(localStorage.getItem('highscore') || '0');

function punkteZeigen() {
  ctx.fillStyle = '#f0f0f0';
  ctx.font = 'bold 20px Inter';
  ctx.fillText(`⭐ ${punkte}`, 20, 30);
  ctx.fillText(`🏆 ${highscore}`, 20, 55);
}

function spielEnde() {
  if (punkte > highscore) {
    highscore = punkte;
    localStorage.setItem('highscore', highscore);
    confetti({ particleCount: 200, spread: 100 });
  }
}
```

### ⏱️ Timer / Countdown

```javascript
let zeitInSekunden = 30;
let timerLaeuft = true;

const timerInterval = setInterval(() => {
  if (!timerLaeuft) return;
  zeitInSekunden--;
  if (zeitInSekunden <= 0) {
    clearInterval(timerInterval);
    spielEnde();
  }
}, 1000);

function timerZeigen() {
  ctx.fillStyle = zeitInSekunden <= 5 ? '#f472b6' : '#f0f0f0';
  ctx.font = 'bold 24px Inter';
  ctx.fillText(`⏱️ ${zeitInSekunden}s`, canvas.width - 100, 30);
}
```

### 💥 Partikel-Effekt (Explosion, Funken)

```javascript
let partikel = [];

function explosion(x, y) {
  for (let i = 0; i < 15; i++) {
    partikel.push({
      x, y,
      vx: (Math.random() - 0.5) * 8,
      vy: (Math.random() - 0.5) * 8,
      leben: 30,
      farbe: ['#a78bfa', '#f472b6', '#fbbf24', '#34d399'][Math.floor(Math.random() * 4)]
    });
  }
}

function partikelZeichnen() {
  partikel.forEach(p => {
    p.x += p.vx;
    p.y += p.vy;
    p.leben--;
    ctx.globalAlpha = p.leben / 30;
    ctx.fillStyle = p.farbe;
    ctx.beginPath();
    ctx.arc(p.x, p.y, 3, 0, Math.PI * 2);
    ctx.fill();
  });
  ctx.globalAlpha = 1;
  partikel = partikel.filter(p => p.leben > 0);
}
```

### 🔊 Sound-Effekte (ohne Dateien!)

```javascript
// Piep-Töne mit der Web Audio API
const audioCtx = new AudioContext();

function piep(frequenz = 440, dauer = 0.1) {
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  osc.connect(gain);
  gain.connect(audioCtx.destination);
  osc.frequency.value = frequenz;
  gain.gain.value = 0.3;
  osc.start();
  gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + dauer);
  osc.stop(audioCtx.currentTime + dauer);
}

// Benutzen:
piep(800, 0.1);   // Treffer-Sound
piep(200, 0.3);   // Fail-Sound
piep(1200, 0.05); // Coin-Sound
```

---

## Spiel-Ideen mit Schwierigkeit

| Idee | Schwierigkeit | Engine | Zeit |
|------|:---:|---|---|
| ⭐ Sterne fangen | ⭐ | Canvas/p5 | 30 min |
| 🧠 Quiz-App | ⭐ | Reines HTML | 30 min |
| 🎨 Mal-App | ⭐ | Canvas/p5 | 30 min |
| 🐍 Snake | ⭐⭐ | Canvas | 45 min |
| 🏓 Pong | ⭐⭐ | Canvas/p5 | 45 min |
| 🧱 Breakout | ⭐⭐ | Canvas/p5 | 60 min |
| 🦘 Jump & Run | ⭐⭐⭐ | p5/Phaser | 90 min |
| 👾 Space Invaders | ⭐⭐⭐ | p5/Phaser | 90 min |

**Für einen Tag empfohlen:** ⭐ oder ⭐⭐ — mit Zeit für Design und Extras!

---

## Game-Design Checkliste

- [ ] **Steuerung** — Pfeiltasten UND Touch (Handy!)
- [ ] **Feedback** — Visuell + Sound bei Treffer/Fehler
- [ ] **Punkte** — Punktestand sichtbar, Highscore in localStorage
- [ ] **Game Over** — Klare Endmeldung mit Punkte + "Nochmal"-Button
- [ ] **Confetti** — bei Highscore oder Sieg 🎉
- [ ] **Responsive** — Canvas passt sich an Bildschirmgröße an
- [ ] **Start-Screen** — Titel + "Spielen"-Button (nicht direkt loslaufen)

## Responsive Canvas

```javascript
function canvasAnpassen() {
  const maxBreite = Math.min(window.innerWidth - 20, 500);
  canvas.width = maxBreite;
  canvas.height = maxBreite * 1.5;
}
window.addEventListener('resize', canvasAnpassen);
canvasAnpassen();
```

## Erklär-Analogien für Spiel-Konzepte

| Konzept | Analogie |
|---|---|
| Game Loop | "Wie ein Daumenkino — 60 Bilder pro Sekunde, so schnell dass es wie Bewegung aussieht" |
| Kollision | "Wie beim Fangen spielen — wenn zwei Sachen sich berühren, passiert was" |
| Spawn | "Wie Seifenblasen — es tauchen immer neue auf" |
| Highscore | "Wie eine Bestenliste beim Sport" |
| Partikel | "Wie Funken bei einem Feuerwerk" |
| requestAnimationFrame | "Der Browser sagt: 'Ich bin bereit fürs nächste Bild!'" |

---
name: asset-helfer
description: Creative asset helper — emoji sprites, color palettes, Google Fonts, and visual design patterns. Use when the app needs to look amazing without real image files.
---

# 🎨 Asset-Helfer — Alles was die App schön macht!

## Wann diesen Skill nutzen?

Wenn die App **Grafiken, Icons, Farben oder Schriften** braucht — ohne echte Bilddateien.
Wir verwenden Emojis als Grafik-Ersatz und CSS für alles andere!

---

## 🎭 Emoji-Sprites — Grafiken ohne Bilddateien

Emojis sind die einfachsten "Grafiken" die es gibt. Sie funktionieren überall, sehen auf jedem Gerät gut aus und brauchen keinen Download.

### Emoji-Katalog nach Kategorie

**Spielfiguren:**
| Rolle | Emojis |
|---|---|
| Held/Spieler | 🚀 🦸‍♀️ 🧙‍♀️ 🧑‍🚀 🐱 🐶 🦊 🐰 |
| Gegner | 👾 👻 🤖 💀 🦇 🕷️ 🐍 😈 |
| NPC/Helfer | 🧚‍♀️ 🦋 🐝 🌟 💫 🍄 |

**Sammelbare Items:**
| Typ | Emojis |
|---|---|
| Punkte | ⭐ 🌟 💎 💰 🪙 |
| Power-Ups | ❤️ 🛡️ ⚡ 🔥 🍄 🧲 |
| Essen | 🍕 🍔 🍩 🍪 🍎 🍓 🍰 🧁 |
| Natur | 🌸 🌺 🌻 🌹 🍀 🌈 |

**Hindernisse / Umgebung:**
| Typ | Emojis |
|---|---|
| Gefahr | 💣 🔥 ⚡ 🌊 🕳️ |
| Landschaft | 🌲 🏔️ 🏠 🏰 🌋 🗻 |
| Wetter | ☀️ 🌙 ⛈️ ❄️ 🌈 |
| Deko | ✨ 💫 🎵 💝 🎈 🎀 |

### Emojis im Canvas zeichnen

```javascript
function emojiZeichnen(emoji, x, y, groesse = 40) {
  ctx.font = `${groesse}px serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(emoji, x, y);
}

// Benutzen:
emojiZeichnen('🚀', spieler.x, spieler.y, 50);
emojiZeichnen('⭐', stern.x, stern.y, 30);
```

### Emoji als CSS-Element

```css
.spieler::before {
  content: '🚀';
  font-size: 3rem;
  display: block;
  text-align: center;
  filter: drop-shadow(0 0 10px rgba(167, 139, 250, 0.5));
  animation: schweben 2s ease-in-out infinite;
}

@keyframes schweben {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}
```

### Animierte Emoji-Rotation

```css
.spin-emoji {
  display: inline-block;
  animation: drehen 2s linear infinite;
}

@keyframes drehen {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
```

---

## 🎨 Farbpaletten — Fertige Kombinationen

### Nach Stimmung

**🌸 Mädchenhaft & Verspielt:**
```css
--farbe-1: #f472b6;  /* Pink */
--farbe-2: #c084fc;  /* Lila */
--farbe-3: #fb923c;  /* Orange */
--farbe-4: #fbbf24;  /* Gold */
--bg:      #1a0f28;  /* Dunkel-Lila */
```

**🌊 Cool & Beruhigend:**
```css
--farbe-1: #60a5fa;  /* Blau */
--farbe-2: #34d399;  /* Mint */
--farbe-3: #a78bfa;  /* Lila */
--farbe-4: #22d3ee;  /* Cyan */
--bg:      #0f172a;  /* Dunkel-Blau */
```

**🔥 Energetisch & Mutig:**
```css
--farbe-1: #ef4444;  /* Rot */
--farbe-2: #f97316;  /* Orange */
--farbe-3: #eab308;  /* Gelb */
--farbe-4: #f472b6;  /* Pink */
--bg:      #1c1917;  /* Dunkel-Braun */
```

**🌿 Natur & Frisch:**
```css
--farbe-1: #34d399;  /* Grün */
--farbe-2: #a3e635;  /* Lime */
--farbe-3: #fbbf24;  /* Gold */
--farbe-4: #2dd4bf;  /* Teal */
--bg:      #0f1a14;  /* Dunkel-Grün */
```

**🍬 Pastell & Sanft (Helles Theme):**
```css
--farbe-1: #f9a8d4;  /* Rosa */
--farbe-2: #c4b5fd;  /* Flieder */
--farbe-3: #93c5fd;  /* Himmelblau */
--farbe-4: #6ee7b7;  /* Mint */
--bg:      #faf5ff;  /* Fast-Weiß */
--text:    #1e1b4b;  /* Dunkel-Lila */
```

### Farb-Helfer: Kontrast prüfen

```javascript
// Ist der Text auf dem Hintergrund lesbar?
// Helle Farbe → dunkler Text, dunkle Farbe → heller Text
function textFarbe(bgHex) {
  const r = parseInt(bgHex.slice(1,3), 16);
  const g = parseInt(bgHex.slice(3,5), 16);
  const b = parseInt(bgHex.slice(5,7), 16);
  const helligkeit = (r * 299 + g * 587 + b * 114) / 1000;
  return helligkeit > 128 ? '#1a1a2e' : '#f0f0f0';
}
```

---

## 🔤 Schriften — Google Fonts Empfehlungen

### Für verschiedene Stimmungen

```html
<!-- Standard (bereits im Projekt) -->
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap" rel="stylesheet">

<!-- Verspielt & Rund -->
<link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;600;700&display=swap" rel="stylesheet">

<!-- Comic / Kindlich -->
<link href="https://fonts.googleapis.com/css2?family=Bubblegum+Sans&display=swap" rel="stylesheet">

<!-- Retro / Pixel -->
<link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet">

<!-- Handschrift -->
<link href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;700&display=swap" rel="stylesheet">

<!-- Modern & Clean -->
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700;800&display=swap" rel="stylesheet">
```

| Stimmung | Font | Gut für |
|---|---|---|
| Standard | Inter | Alles |
| Verspielt | Quicksand | Kindliche Apps, Quiz |
| Comic | Bubblegum Sans | Lustige Apps, Witze |
| Retro | Press Start 2P | Pixel-Spiele, Arcade |
| Handschrift | Caveat | Notiz-Apps, kreative Tools |
| Modern | Poppins | Stylische Apps |

---

## 🎭 CSS-Muster & Hintergründe (ohne Bilder!)

### Punkt-Raster

```css
.dotted-bg {
  background-image: radial-gradient(circle, rgba(167,139,250,0.15) 1px, transparent 1px);
  background-size: 20px 20px;
}
```

### Streifen

```css
.striped-bg {
  background: repeating-linear-gradient(
    45deg,
    transparent,
    transparent 10px,
    rgba(167,139,250,0.05) 10px,
    rgba(167,139,250,0.05) 20px
  );
}
```

### Schimmer-Effekt

```css
.shimmer {
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(255,255,255,0.1) 50%,
    transparent 100%
  );
  background-size: 200% 100%;
  animation: schimmer 2s infinite;
}

@keyframes schimmer {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}
```

---

## 🖼️ Kostenlose Bild-Quellen (wenn Emojis nicht reichen)

| Quelle | Was | URL |
|---|---|---|
| **Unsplash** | Fotos | unsplash.com |
| **Pexels** | Fotos | pexels.com |
| **OpenMoji** | Emoji-Stil Grafiken | openmoji.org |
| **SVG Repo** | Icons als SVG | svgrepo.com |

**Wichtig:** Nur kostenlose, lizenzfreie Bilder verwenden!

---

## Schnell-Tipp: Frag die Mädels!

Bevor du eine Farbpalette wählst, frag:
- *"Was ist eure Lieblingsfarbe?"*
- *"Soll es eher bunt und wild oder eher ruhig und elegant sein?"*
- *"Welches Emoji beschreibt eure App am besten?"*

Die Antworten bestimmen die komplette Optik! 🎨

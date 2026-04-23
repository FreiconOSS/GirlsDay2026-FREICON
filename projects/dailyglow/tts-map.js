// TTS Audio-Mapping — automatisch generiert
const ttsMap = {};

// Sprüche-Texte (erste 50 Zeichen) → Audio-Datei
const ttsSprueche = {
  `📎 Hinweis gefunden: Das Glück war die ganze Zeit i`: `audio/tts/spruch-001.mp3`,
  `🔮 Die Kristallkugel zeigt: Heute wird ein richtig `: `audio/tts/spruch-002.mp3`,
  `🕶️ Gute Detektive wissen: Die ungewöhnlichsten Spu`: `audio/tts/spruch-003.mp3`,
  `🐝 Du bist wie eine Biene auf doppeltem Espresso — `: `audio/tts/spruch-004.mp3`,
  `🌮 Sei dankbar für die Person, die Tacos erfunden h`: `audio/tts/spruch-005.mp3`,
  `🧗 Jeder Kletterer hat Momente, in denen er nach un`: `audio/tts/spruch-006.mp3`,
  `📋 Akte geschlossen: Du hast mehr drauf als du denk`: `audio/tts/spruch-007.mp3`,
  `🏰 Jedes Schloss wurde Stein für Stein gebaut — dei`: `audio/tts/spruch-008.mp3`,
  `⛵ Auch im tiefsten Tal bist du auf dem Weg — einen`: `audio/tts/spruch-009.mp3`,
  `✨ Dein Licht ist nicht erloschen — es sammelt gera`: `audio/tts/spruch-010.mp3`,
  `🐢 Selbst Schildkröten stecken manchmal den Kopf ra`: `audio/tts/spruch-011.mp3`,
  `🐧 Du watschelst vor Freude wie ein Pinguin nach de`: `audio/tts/spruch-012.mp3`,
  `⚡ Die Magie in dir ist stärker als jeder Sturm — l`: `audio/tts/spruch-013.mp3`,
  `💪 Agenten-Geheimnis: Wahre Stärke zeigt sich, wenn`: `audio/tts/spruch-014.mp3`,
  `📎 Geheimtipp: Drei tiefe Atemzüge. Ein... aus... e`: `audio/tts/spruch-015.mp3`,
  `🛸 Kein Asteroidengürtel kann dich aufhalten — du f`: `audio/tts/spruch-016.mp3`,
  `🔦 Taschenlampe aus. Notizbuch zu. Der Fall kann wa`: `audio/tts/spruch-017.mp3`,
  `🗝️ Rätsel: Ich habe Städte, aber keine Häuser. Ber`: `audio/tts/spruch-018.mp3`,
  `🗺️ Die wertvollste Entdeckung liegt nicht am Ende `: `audio/tts/spruch-019.mp3`,
  `🕵️ Jeder große Detektiv hatte Fälle, die ihm Angst`: `audio/tts/spruch-020.mp3`,
  `�� Im Zirkus deiner Gedanken bist du der Star in d`: `audio/tts/spruch-021.mp3`,
  `🌺 Leg dich gedanklich auf eine Wiese voller Wildbl`: `audio/tts/spruch-022.mp3`,
  `🐸 Ein Frosch hat mal eine Prinzessin geküsst. Das `: `audio/tts/spruch-023.mp3`,
  `🍕 Inspiration ist wie Pizza: Es gibt keine schlech`: `audio/tts/spruch-024.mp3`,
  `🔍 Jede große Entdeckung beginnt mit einer einzigen`: `audio/tts/spruch-025.mp3`,
  `📋 Geheimauftrag: Finde drei Dinge in deiner Nähe, `: `audio/tts/spruch-026.mp3`,
  `🌌 Im ganzen Universum gibt es nur eine Person wie `: `audio/tts/spruch-027.mp3`,
  `🧩 Das letzte Puzzleteil für heute: Ruhe. Morgen ge`: `audio/tts/spruch-028.mp3`,
  `🚀 Astronauten haben auch Angst vor dem Start — abe`: `audio/tts/spruch-029.mp3`,
  `🛸 Außerirdische beneiden uns um drei Dinge: Sonnen`: `audio/tts/spruch-030.mp3`,
  `🏔️ Vom Gipfel aus sieht man: Der Weg war es wert. `: `audio/tts/spruch-031.mp3`,
  `🦄 Einhörner galoppieren vor Freude, wenn sie dich `: `audio/tts/spruch-032.mp3`,
  `🔍 Mut ist wie eine Lupe: Er hilft dir, klarer zu s`: `audio/tts/spruch-033.mp3`,
  `💫 Die Sterne machen heute Nachtschicht — du darfst`: `audio/tts/spruch-034.mp3`,
  `🧭 Der Kompass deiner Neugier zeigt immer in die ri`: `audio/tts/spruch-035.mp3`,
  `🤪 Verrückte Ideen sind wie Pizza: Am Anfang denkt `: `audio/tts/spruch-036.mp3`,
  `🤖 Roboter-Analyse: Dein Glücks-Algorithmus läuft p`: `audio/tts/spruch-037.mp3`,
  `🧩 Wenn du alle guten Momente zusammenpuzzelst, erg`: `audio/tts/spruch-038.mp3`,
  `🧙 Weiser Zaubererspruch: Wer das Kleine schätzt, d`: `audio/tts/spruch-039.mp3`,
  `🏕️ Am Lagerfeuer zählen keine Likes — nur die Gesc`: `audio/tts/spruch-040.mp3`,
  `🏔️ Der Berg sieht von unten riesig aus — aber du b`: `audio/tts/spruch-041.mp3`,
  `🎭 Das Leben ist eine Bühne und deine Ideen sind de`: `audio/tts/spruch-042.mp3`,
  `🎉 Plot-Twist: Das Beste an deinem Leben bist du se`: `audio/tts/spruch-043.mp3`,
  `🛰️ Mut ist kein Programm, das man installiert — es`: `audio/tts/spruch-044.mp3`,
  `⚡ Herunterfahren ist kein Fehler — es ist ein gepl`: `audio/tts/spruch-045.mp3`,
  `🛸 Aliens sind auf die Erde gekommen — weil sie dei`: `audio/tts/spruch-046.mp3`,
  `✨ Deine Willenskraft ist purer Sternenstaub — dami`: `audio/tts/spruch-047.mp3`,
  `🕵️ Ermittlungsergebnis: Deine gute Laune ist anste`: `audio/tts/spruch-048.mp3`,
  `🗺️ Deine Landkarte hat noch weiße Flecken — perfek`: `audio/tts/spruch-049.mp3`,
  `😴 Dein Gehirn hat einen "Nicht stören"-Modus. Bitt`: `audio/tts/spruch-050.mp3`,
  `🔎 Fun Fact: Sherlock Holmes hat nie "Elementar, me`: `audio/tts/spruch-051.mp3`,
  `🌈 Dein Lächeln ist der stärkste Zauber im ganzen K`: `audio/tts/spruch-052.mp3`,
  `🐧 Wusstest du, dass Pinguine ihrem Partner einen S`: `audio/tts/spruch-053.mp3`,
  `🎪 Mut-Zirkus: Eintritt frei, Angst hat Platzverbot`: `audio/tts/spruch-054.mp3`,
  `🌊 Das Meer erinnert dich: Es gibt unendlich viel S`: `audio/tts/spruch-055.mp3`,
  `🌅 Jeder Sturm hat ein Ende — und danach kommt der `: `audio/tts/spruch-056.mp3`,
  `🧙 Der größte Zaubertrick? Gute Laune anstecken. Un`: `audio/tts/spruch-057.mp3`,
  `��‍🚀 Nachricht aus dem All: "Wir können dein Läche`: `audio/tts/spruch-058.mp3`,
  `🏔️ Du stehst auf dem Gipfel der guten Laune — und `: `audio/tts/spruch-059.mp3`,
  `🌊 Fun Fact: Der Mariannengraben ist so tief, dass `: `audio/tts/spruch-060.mp3`,
  `🌅 Am Horizont wartet etwas, das genau zu dir passt`: `audio/tts/spruch-061.mp3`,
  `🛸 In einer fernen Galaxie gibt es einen Planeten, `: `audio/tts/spruch-062.mp3`,
  `🎶 Dein Tag hat einen Soundtrack: "Happy" auf Repea`: `audio/tts/spruch-063.mp3`,
  `⛵ Es gibt eine Insel im Pazifik, die niemandem geh`: `audio/tts/spruch-064.mp3`,
  `👩‍🚀 Mission "Mut": Schwierig, aber nicht unmöglich`: `audio/tts/spruch-065.mp3`,
  `🌍 Auf diesem blauen Planeten hast du einen einziga`: `audio/tts/spruch-066.mp3`,
  `🔍 Fall "Unaufhaltsam" — Hauptverdächtige: Du! Bewe`: `audio/tts/spruch-067.mp3`,
  `🌿 Selbst der tiefste Dschungel wird hell, wenn du `: `audio/tts/spruch-068.mp3`,
  `🕵️ Agenten-Anweisung: Ruhezustand aktivieren. Auch`: `audio/tts/spruch-069.mp3`,
  `🗂️ Tipp aus der Ermittlung: Schreib drei Dinge auf`: `audio/tts/spruch-070.mp3`,
  `🌅 Der Sonnenuntergang malt den Himmel in warmen Fa`: `audio/tts/spruch-071.mp3`,
  `🌺 Pflücke einen gedanklichen Blumenstrauß aus all `: `audio/tts/spruch-072.mp3`,
  `🗝️ Du hast den Schlüssel zum Glück gefunden — Herz`: `audio/tts/spruch-073.mp3`,
  `⚙️ Deine innere Maschine läuft heute auf Höchstlei`: `audio/tts/spruch-074.mp3`,
  `🔍 Fall "Pause machen": Sofort erledigen. Anordnung`: `audio/tts/spruch-075.mp3`,
  `🧚 Feen-Challenge: Denk an fünf magische Dinge, die`: `audio/tts/spruch-076.mp3`,
  `🏕️ Das Lagerfeuer knistert leise. Die Sterne funke`: `audio/tts/spruch-077.mp3`,
  `💫 Jeder Stern am Himmel steht für einen schönen Mo`: `audio/tts/spruch-078.mp3`,
  `😄 Danke-Liste: 1. Wochenende. 2. Pizza. 3. Dass du`: `audio/tts/spruch-079.mp3`,
  `🌊 Wellen können einschüchtern — aber du bist die s`: `audio/tts/spruch-080.mp3`,
};

// Story-Texte (erste 50 Zeichen) → Audio-Datei
const ttsStories = {
  `🧙 Miras Weg durch den Nebelwald In dem kleinen Dor`: `audio/tts/story-01-nebelwald.mp3`,
  `🐉 Das Mädchen und der Glasdrache In der Stadt der `: `audio/tts/story-02-glasdrache.mp3`,
  `🎭 Die Talent-Show-Katastrophe Es begann als die sc`: `audio/tts/story-03-talentshow.mp3`,
  `🤖 ARI-7 und die Angst ARI-7 war der fortschrittlic`: `audio/tts/story-04-ari7.mp3`,
  `🏕️ Drei Tage allein Das Survival-Camp hatte eine A`: `audio/tts/story-05-dreitage.mp3`,
  `🌙 Die Sternsammlerin Naya hatte Angst vor der Dunk`: `audio/tts/story-06-sternsammlerin.mp3`,
  `😅 Der Vortrag Bens Vortrag war in fünf Minuten. Th`: `audio/tts/story-07-vortrag.mp3`,
  `🔍 Fall 17: Das verschwundene Lächeln In Emmas Klas`: `audio/tts/story-08-laecheln.mp3`,
  `🏰 Die Ritterin ohne Schwert Im Königreich Sonnenta`: `audio/tts/story-09-ritterin.mp3`,
  `🌍 Das Emotions-Update Im Jahr 2085 erfand Dr. Chen`: `audio/tts/story-10-emotionsupdate.mp3`,
};

// Finde TTS-Audio für einen Text
function findTTS(text) {
  const clean = text.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
  const snippet = clean.substring(0, 50);
  
  // Erst in Stories suchen
  for (const [key, file] of Object.entries(ttsStories)) {
    if (snippet.startsWith(key.substring(0, 30)) || key.startsWith(snippet.substring(0, 30))) {
      return file;
    }
  }
  
  // Dann in Sprüchen suchen
  for (const [key, file] of Object.entries(ttsSprueche)) {
    if (snippet.startsWith(key.substring(0, 30)) || key.startsWith(snippet.substring(0, 30))) {
      return file;
    }
  }
  
  return null;
}
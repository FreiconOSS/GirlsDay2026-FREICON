#!/bin/bash
# GirlsDay 2026 — Keybinding Setup
# Fügt F8 als Push-to-Talk in Copilot Chat hinzu.
# Stellt vorher eine Sicherungskopie her → teardown.sh macht es rückgängig.

KEYBINDINGS="$HOME/Library/Application Support/Code/User/keybindings.json"
BACKUP="$HOME/Library/Application Support/Code/User/keybindings.girlsday-backup.json"

# Sicherungskopie anlegen
cp "$KEYBINDINGS" "$BACKUP"
echo "✅ Backup gespeichert: keybindings.girlsday-backup.json"

# F8 Push-to-Talk einfügen (node-basiert, damit das JSON korrekt bleibt)
node -e "
const fs = require('fs');
const path = '$KEYBINDINGS';
const content = fs.readFileSync(path, 'utf8');

// Bestehende Einträge parsen (Kommentare tolerant überspringen via eval-Trick)
const cleaned = content.replace(/\/\/.*$/gm, '').replace(/\/\*[\s\S]*?\*\//g, '');
let bindings = JSON.parse(cleaned);

// Bereits vorhanden? Nichts doppelt einfügen.
const alreadySet = bindings.some(b => b.command === 'workbench.action.chat.holdToSpeakInChatInput');
if (alreadySet) {
  console.log('ℹ️  F8 Push-to-Talk war bereits gesetzt — nichts geändert.');
  process.exit(0);
}

bindings.push({
  key: 'f8',
  command: 'workbench.action.chat.holdToSpeakInChatInput',
  when: 'chatInputHasFocus'
});

// Kommentar-Header aus Original wiederherstellen + neue Bindings schreiben
const header = '// Geben Sie Ihre Tastenzuordnungen in dieser Datei ein, um die Standardwerte außer Kraft zu setzen.\n';
fs.writeFileSync(path, header + JSON.stringify(bindings, null, 4));
console.log('🎤 F8 Push-to-Talk aktiviert! VS Code neu laden (Cmd+Shift+P → Reload Window).');
"

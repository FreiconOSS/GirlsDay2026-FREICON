#!/bin/bash
# GirlsDay 2026 — Keybinding Teardown
# Stellt die originalen Keybindings aus dem Backup wieder her.

KEYBINDINGS="$HOME/Library/Application Support/Code/User/keybindings.json"
BACKUP="$HOME/Library/Application Support/Code/User/keybindings.girlsday-backup.json"

if [ ! -f "$BACKUP" ]; then
  echo "⚠️  Kein Backup gefunden — nichts zu tun."
  exit 1
fi

cp "$BACKUP" "$KEYBINDINGS"
rm "$BACKUP"
echo "✅ Keybindings wiederhergestellt. Backup gelöscht."
echo "   VS Code neu laden: Cmd+Shift+P → Reload Window"

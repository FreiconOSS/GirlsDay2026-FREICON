#!/bin/bash
# GirlsDay 2026 — Workshop Setup
# Prüft die Voraussetzungen und gibt eine Checkliste aus.

echo ""
echo "🚀 GirlsDay 2026 FREICON — Workshop Setup"
echo "=========================================="
echo ""

# VS Code Speech Extension prüfen
if ls ~/.vscode/extensions/ms-vscode.vscode-speech* &>/dev/null; then
  echo "✅ VS Code Speech Extension installiert"
else
  echo "⚠️  VS Code Speech fehlt — installieren mit:"
  echo "   code --install-extension ms-vscode.vscode-speech"
fi

echo ""
echo "📋 Manuelle Schritte (einmalig):"
echo ""
echo "1. macOS Diktat aktivieren:"
echo "   Systemeinstellungen → Tastatur → Diktat → Ein"
echo "   Empfohlener Shortcut: Fn-Taste zweimal drücken"
echo ""
echo "2. Mikrofon testen:"
echo "   tools/ptt.html in Chrome öffnen → sprechen → Text erscheint?"
echo ""
echo "3. Lautsprecher prüfen:"
echo "   Systemeinstellungen → Ton → Ausgabe → richtiges Gerät?"
echo ""
echo "4. VS Code Copilot Chat öffnen:"
echo "   Cmd+Shift+I → 'Hallo' tippen → Workshop beginnt"
echo ""
echo "Live-URL nach Deployment:"
echo "   https://freiconoss.github.io/GirlsDay2026-FREICON/"
echo ""

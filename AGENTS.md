# AGENTS Regeln für Beyond CV

- Arbeite nie direkt auf `main`, sofern Branches vorhanden sind.
- Nutze `staging` als Integrationsbranch, sobald der Branch existiert.
- Änderungen klein, nachvollziehbar und PR-fähig halten.
- Keine unnötige Komplexität.
- Kein Backend hinzufügen, solange nicht ausdrücklich beauftragt.
- Projekt muss statisch auf Vercel deploybar bleiben.
- Nach Änderungen `npm install` und `npm run build` ausführen.
- Am Ende immer zusammenfassen:
  - geänderte Dateien
  - ausgeführte Tests
  - bekannte Risiken
  - nächster sinnvoller Schritt

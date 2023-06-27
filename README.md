
# Ennos Stream Bot

Ein Twitch Bot zum selbst Hosten mit NodeJS und MariaDB



## Features

- Commands mit !
- Commands für Moderatoren
- Ein Counter zum hochzählen mit Datenbank anbindung
- more soonTM


## Installation

Du benötigst
```bash
Eine MariaDB Datenbank
npm install tmi.js
npm install mysql
npm install pm2 -g
```
MariaDB Datenbank erstellung
```bash
Erstelle eine neue Datenbank mit Wunsch Namen z.B. Twitch Bot
Erstelle eine Tabelle mit dem Namen count_table
Erstelle zwei Spalten eine mit dem Namen id und eine mit count
```

Twitch Informationen eintragen
```bash
Trage in Zeile 13 Zwischen den '' dein Bot Username ein (Beachte das du dir dafür selsbt einen Account erstellen musst
Trage in Zeile 14 zwischen den '' deinen OAuth Token ein von deinem Bot Account
Trage in Zeile 16 zwischen den '' den Channel ein auf dem der Bot laufen soll.
```

Datenbank Informationen eintragen
```bash
Trage in Zeile 21 Zwischen den '' deinen Hostname ein (Im normalfall sollte dieser nicht geändert worden sein bleibt er gleich)
Trage in Zeile 22 zwischen den '' deinen Username zum Einloggen in deiner Datenabnk
Trage in Zeile 23 zwischen den '' dein Passwort zum Einlogen in deiner Datenbank
Trage in Zeile 24 zwischen den '' dein Datenbank Name worin die beiden Spalten sind
```

Bot starten
```bash
pm2 --name WunschName start node . 
```
    
## FAQ

#### Woher bekomme ich meinen Twitch OAuth Code?
Du kannst deinen Twitch OAuth Code hier einsehen
https://twitchapps.com/tmi/

#### Verfügbare Variablen
```bash
${userstate.username} - Greift den Username ab der den Command ausgeführt hat
```

#### Wie füge ich weitere Befehle für alle Benutzer hinzu?

Kopiere dir hier zu einfach den Code Teil heraus und setze ihn unterhalb eines vorhanden Commands ein
```bash
  if (command === '!DEINCOMMANDHIER') {
    client.say(channel, `Deine Nachricht hier`);
  }
```

#### Wie füge ich weitere Befehle für Moderatoren hinzu?

Kopiere dir hier zu einfach den Code Teil heraus und setze ihn unterhalb eines vorhandenen Moderator Commands ein

```bash
  if (userstate.mod || userstate.username === channel.replace('#', '')) {
    if (command === '!DEINCOMMAND') {
      client.say(channel, `Deine Nachricht`);
    }
  } else {
    // Fehlermeldung für andere Benutzer
    if (command === '!DEINCOMMAND') {
      client.say(channel, `Entschuldigung, du hast nicht die erforderlichen Berechtigungen, um diesen Befehl zu nutzen.`);
    }
  }
```


## ToDo

- Command Cooldown
- Moderative Aufgaben (Zeichen Filter, Wort Filter...)
- und was mir noch so einfallen wird...


## Support

Für Probleme oder schwierigkeiten erstelle einfach ein Issue oder schreib mir eine Mail an admin@enno123.de


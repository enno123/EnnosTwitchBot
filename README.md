
# Ennos Stream Bot

Ein Twitch Bot zum selbst Hosten mit NodeJS und MySQL



## Features

- Commands mit !
- Commands für Moderatoren
- Ein Counter zum hochzählen mit Datenbank anbindung
- more soonTM


## Installation

Du benötigst
```bash
Eine MariaDB Datenbank
npm install mysql
npm install tmi.js
npm install pm2 -g
```
MariaDB Datenbank erstellung
```bash
Erstelle eine neue Datenbank mit Wunsch Namen z.B. Twitch Bot
Erstelle eine Tabelle mit dem Namen count_table
Erstelle zwei Spalten eine mit dem Namen id und eine mit count
```


Bot starten
```bash
pm2 --name WunschName start node . 
```
    
## FAQ

#### Verfügbare Variablen
```bash
${userstate.username} - Greift den Username ab der den Command ausgeführt hat
```

#### Wie füge ich weitere Befehle für alle Benutzer hinzu?

Kopiere dir hier zu einfach den Teil heraus
```bash
  if (command === '!DEIN COMMAND HIER') {
    client.say(channel, `Deine Nachricht hier`);
  }
```

#### more soon...




## ToDo

- Command Cooldown
- Moderative Aufgaben (Zeichen Filter, Wort Filter...)
- und was mir noch so einfallen wird...


## Support

Für Probleme oder schwierigkeiten erstelle einfach ein Issue oder schreib mir eine Mail an admin@enno123.de


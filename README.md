
# Ennos Stream Bot

Ein Twitch Bot zum selbst Hosten mit NodeJS und MySQL



## Features

- Commands mit !
- Commands für Moderatoren
- Ein Counter zum hochzählen
- soonTM


## Installation

Du benötigst
```bash
npm install mysql
npm install tmi.js
npm install pm2 -g
```

Zum ausführen
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


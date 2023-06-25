const tmi = require('tmi.js');
const mysql = require('mysql');

// Konfiguration
const config = {
  options: {
    debug: true
  },
  connection: {
    reconnect: true
  },
  identity: {
    username: 'BOT_USERNAME',
    password: 'OAUTH_TOKEN'
  },
  channels: ['YX']
};

// MySQL-Konfiguration
const mysqlConfig = {
  host: 'localhost',
  user: 'USERNAME',
  password: 'Passwort',
  database: 'TwitchBot'
};

// Erstellen des Twitch-Clients
const client = new tmi.client(config);

// Variable für die Zählung
let count = 0;

// MySQL-Verbindung erstellen
const connection = mysql.createConnection(mysqlConfig);

// Funktion zum Verbinden mit MySQL
function connectToMySQL() {
  connection.connect((error) => {
    if (error) {
      console.error('Fehler beim Verbinden mit MySQL:', error);
    } else {
      console.log('Verbunden mit MySQL');
      loadCountFromDatabase();
    }
  });
}

// Funktion zum Laden des Zählerwerts aus der Datenbank
function loadCountFromDatabase() {
  const query = 'SELECT * FROM count_table LIMIT 1';
  connection.query(query, (error, results) => {
    if (error) {
      console.error('Fehler beim Laden des Zählerwerts:', error);
    } else {
      if (results.length > 0) {
        count = results[0].count;
      }
    }
  });
}

// Funktion zum Speichern des Zählerwerts in der Datenbank
function saveCountToDatabase() {
  const query = 'REPLACE INTO count_table (id, count) VALUES (1, ?)';
  connection.query(query, [count], (error) => {
    if (error) {
      console.error('Fehler beim Speichern des Zählerwerts:', error);
    } else {
      console.log('Zählerwert in der Datenbank gespeichert');
    }
  });
}

// Event-Handler für den Verbindungsaufbau
client.on('connected', (address, port) => {
  console.log(`Verbunden mit ${address}:${port}`);
  connectToMySQL();
});

// Event-Handler für das Beenden des Programms
process.on('SIGINT', () => {
  console.log('Programm wird beendet');
  saveCountToDatabase();
  connection.end(() => {
    process.exit();
  });
});

// Event-Handler für Chat-Nachrichten
client.on('chat', (channel, userstate, message, self) => {
  // Befehl aus der Nachricht extrahieren
  const command = message.trim();

  // Befehl für alle Benutzer
  if (command === '!hallo') {
    client.say(channel, `${userstate.username} schaut wie Midna aus dem Schatten zu!`);
  }

  // Befehl für Moderatoren und Broadcaster
  if (userstate.mod || userstate.username === channel.replace('#', '')) {
    if (command === '!ennosbot') {
      client.say(channel, `Ich bin hier was gibts?`);
    }
  } else {
    // Fehlermeldung für andere Benutzer
    if (command === '!ennosbot') {
      client.say(channel, `Entschuldigung, du hast nicht die erforderlichen Berechtigungen, um diesen Befehl zu nutzen.`);
    }
  }
});

// Twitch-Client starten
client.connect();

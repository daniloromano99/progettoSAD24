### CrossChat
    CrossChat è un'app di messaggistica avanzata che offre un'esperienza di comunicazione in tempo reale, sicura e altamente reattiva. CrossChat garantisce ottime prestazioni e un'interfaccia utente intuitiva e piacevole.
 
    Caratteristiche principali
    - Tech stack: CrossChat è costruito utilizzando lo stack MERN (MongoDB, Express.js, React e Node.js), con l'aggiunta di Socket.io per la comunicazione in tempo reale e TailwindCSS insieme a Daisy UI per uno stile moderno e personalizzabile.
 
    - Autenticazione e Autorizzazione con JWT: La sicurezza è una priorità in CrossChat. Utilizziamo JSON Web Tokens (JWT) per garantire che solo gli utenti autorizzati possano accedere e interagire con l'app.
 
    - Messaggistica in tempo reale con Socket.io: Comunica con i tuoi amici e colleghi istantaneamente grazie all'integrazione di Socket.io, che assicura una trasmissione di messaggi rapida e affidabile.
 
    - Stato online degli utenti: Visualizza lo stato online dei tuoi contatti in tempo reale grazie all'uso combinato di Socket.io e React Context, migliorando l'interattività e la connessione con gli altri utenti.
 
    - Gestione dello stato globale con Zustand: Manteniamo l'applicazione altamente reattiva e gestita in modo efficiente con Zustand per la gestione dello stato globale.
 
    - Gestione degli errori: CrossChat gestisce gli errori sia sul lato server che sul lato client, garantendo un'esperienza utente senza intoppi e facile da risolvere in caso di problemi.
 
    - Distribuzione professionale gratuita: Alla fine del processo di sviluppo, CrossChat può essere distribuito professionalmente e gratuitamente, garantendo accessibilità e facilità d'uso.
 
 
### Setup .env file
 
```js
PORT=...
MONGO_DB_URI=...
JWT_SECRET=...
NODE_ENV=...
```
 
### Remove dependencies
 
```bash
npm run remove
```
### Build the app
 
```shell
npm run build
```
 
### Start the app
 
```shell
npm start
```
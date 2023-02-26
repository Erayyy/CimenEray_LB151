# Projekt-Dokumentation

👤 Eray Çimen

| Datum | Version | Zusammenfassung                                              |
| ----- | ------- | ------------------------------------------------------------ |
| 6.02.2023     | 0.0.1   | Anmeldung durch OAuth 2.0 wurde implementiert. |
| 6.02.2023     | 0.0.1   | Spielprinzip wurde implementiert. |
| 13.02.2023     | 0.0.2   | Datenbank wurde in das Projekt eingebunden.                                                             |
| 13.02.2023    | 0.0.3   | Admininterface wurde implementiert.                                                          |
| 20.02.2023      | 0.0.4   | Spiel mit Backend verknüpft.                                                              |
| 24.02.2023      | 0.0.5   | Highscoreliste wurde implementiert.                                                             |
| 26.02.2023      | 1.0.0   | Bugs wurden behoben.                                                             |


# 0 Ihr Projekt

👨‍🏫 Ich möchte in diesem Projekt eine Plattform bauen, worin man das Spielprinzip der Fernsehshow "Glücksrad" spielen kann.

# 1 Analyse

* Tier 1 (Presentation): Glücksrad und Ratewand anzeigen
* Tier 2 (Webserver): Eingaben validieren
* Tier 3 (Application Server): Glücksrad-Ausgabe generieren 
* Tier 4 (Dataserver): Namen und Highscore-Listen abspeichern

# 2 Technologie

* Tier 1 (Presentation): React JS, Javascript, HTML, CSS, Bootstrap-Komponentenbibliothek
* Tier 2 (Webserver): Next.js
* Tier 3 (Application Server): Next.js, Prisma
* Tier 4 (Dataserver): MySQL, XAMPP, MySQL Workbench

# 3 Datenbank

Next.js verfügt über ein integriertes Routing, worin man Pages und APIs managed. Das React-Frontend kann auf die APIs wie bei einer REST-API zugreiffen. Werden alle Daten auf der Website zusammengestellt durch den Next.js Server, wird das Frontend endlich dem Client übergeben.

Kausalkette (Beispiel):

* Client ruft Website auf dem Browser auf ->
* Reactjs (index.js) ruft den Endpunkt "/api/test" auf ->
* Die Funktion auf dem Endpunkt "/api/test" gibt eine Tabelle der Datenbank zurück ->
* Die Daten der API werden auf index.js gemäss dem Code verarbeitet ->
* Next.js gibt die index.js Seite zurück mit den vorher gesammelten Daten aus der API ->
* Der Client sieht nun die Webpage

# 4.1 User Stories

| US-№ | Verbindlichkeit | Typ        | Beschreibung                                                                                                |
|------|----------------|------------|-------------------------------------------------------------------------------------------------------------|
| 1    | Muss           | Funktional | Als Administrator möchte ich mich mit meinem Benutzernamen und Passwort anmelden, damit ich auf meine Adminfunktionen zugreifen kann. |
| 2    | Muss           | Funktional | Als Administrator möchte ich Phrasen und Rätselwörter anlegen und löschen können, damit ich die Inhalte der Rätsel aktualisieren kann.   |
| 3    | Muss           | Funktional | Als Administrator möchte ich Kategorien anlegen und jedem Wort bzw. jeder Phrase einer Kategorie zuordnen können, damit Spieler die Kategorie als Tipp beim Spielen verwenden können. |
| 4    | Muss           | Funktional | Als Administrator möchte ich einzelne Einträge der Highscore-Liste löschen können, damit ich unangemessene Highscoreseinträge nicht zusehen sind. |
| 5    | Muss           | Funktional | Als Kandidat möchte ich zu jeder Zeit den Kontostand sehen können, um meine Gewinne und Verluste zu verfolgen. |
| 6    | Muss           | Funktional | Als Kandidat möchte ich zu jeder Zeit die Anzahl meiner Lebenspunkte sehen, um meine Spielstrategie anpassen zu können.|
| 7    | Muss           | Funktional | Als Kandidat möchte ich nach jeder Spielrunde wissen, ob meine Antwort richtig oder falsch war, damit ich mein Wissen verbessern kann. |
| 8    | Muss           | Funktional | Als Kandidat möchte ich in der Highscore-Liste folgende Daten sehen: Rang, Name des Spielers, Zeitpunkt des Spiels, Geldbetrag und Anzahl der Spielrunden, um meine Leistung im Vergleich zu anderen Spielern zu vergleichen. |
| 9    | Muss           | Funktional | Als Administrator möchte ich sicherstellen, dass kein Rätsel-Wort oder keine Phrase einem Spieler mehr als einmal gestellt wird, damit die Fairness des Spiels gewährleistet ist.                         |
| 10    | Muss           | Funktional | Als Kandidat möchte ich jederzeit das Spiel aufhören aufhören können, damit ich in einem Spiel mit schlechten Karten mein Geld nicht verlieren muss. |
| 11    | Muss           | Funktional | Als Administrator möchte ich das Spiel mit einer spielbaren Anzahl von Wörtern und Fragen füllen, um den Spieler eine ausreichende Spielzeit zu bieten. |
| 12    | Muss           | Funktional | Als Benutzer möchte ich, dass die Anzahl der Runden in einem Spiel gezählt werden, damit ich diese Anzahl auf der Highscoreliste sehen kann. |
| 13    | Muss | Rand | Als Benutzer möchte ich, dass leere Formulareingaben auf Client- und Serverseite geprüft werden, damit Risiken vorgebeugt werden können. |


# 4.2 Testfälle

| TC-№ | Vorbereitung | Eingabe | Erwartete Ausgabe |
| ---- | ------------ | ------- | ----------------- |
| 1.1  | Die Plattform ist gestartet und der Tester ist nicht angemeldet. | Auf eines der Anmeldungsmöglichkeiten klicken (Discord, Github) und Name und Passwort eingeben | Der Nutzer wird zurück zur Seite weitergeleitet und sieht unter "Profil" das Admininterface. |
| 2.1  | Die Plattform ist gestartet und der Tester ist mit dem Githubprofil von Eray Çimen, dem Admin, angemeldet. | Auf "Profil" auf der Navigation klicken. | Der Admin kann nun Rätselwörter anlegen und löschen. |
| 3.1  | Die Plattform ist gestartet und der Tester ist mit dem Githubprofil von Eray Çimen, dem Admin, angemeldet. | Auf "Profil" auf der Navigation klicken. | Der Admin kann nun Kategorien zu Rätselwörter zuordnen. |
| 4.1  | Die Plattform ist gestartet und der Tester ist mit dem Githubprofil von Eray Çimen, dem Admin, angemeldet. | Auf "Highscore" auf der Navigation klicken.  | Der Admin kann nun einzelne Einträge aus der Highscoreliste entfernen. |
| 5.1  | Der Tester ist mit einem Account angelemdet. | Auf "Spielen" auf der Navigation klicken. | Der Kontostand ist zu allen Zeiten einsehbar. |
| 6.1  | Der Tester ist mit einem Account angelemdet. | Auf "Spielen" auf der Navigation klicken und absichtlich einen falschen Buchstaben eingeben. | Dem Tester wird ein Herz abgezogen. |
| 7.1  | Der Tester ist mit einem Account angelemdet. | Auf "Spielen" auf der Navigation klicken und absichtlich einen falschen Buchstaben eingeben. | Der Tester erhält eine Textausgabe, worin steht, dass er einen falschen Buchstaben versucht zu erraten hat. |
| 7.2  | Der Tester ist mit einem Account angelemdet. | Auf "Spielen" auf der Navigation klicken und einen richtigen Buchstaben eingeben. | Der Tester erhält eine Textausgabe, worin steht, dass er einen richtigen Buchstaben erraten hat. |
| 8.1  | Der Tester ist mit einem Account angelemdet | Auf "Highscore" auf der Navigation klicken. | Der Tester sieht nun die Highscores mit gennanten Daten. |
| 9.1  | Der Tester ist mit einem Account angelemdet | Auf "Spielen" auf der Navigation klicken und ein Spiel fertig spielen. | Klickt der Tester erneut auf "Spielen", so kommt eine andere Phrase. |
| 10.1  | Der Tester ist mit einem Account angelemdet | Ein neues Spiel beginnen und auf den Knopf "Aufhören" klicken.  | Auf der Highscoreliste ist das gestoppte Spiel zu sehen. |
| 12.1  | Der Tester ist mit einem Account angelemdet | Auf "Spielen" auf der Navigation klicken und ein Buchstaben raten. | Die Runde wird gezählt und die Anzahl wird angezeigt. |
| 13.1  | Der Tester ist mit einem Account angelemdet | Auf "Spielen" auf der Navigation klicken und trotz leerem Input, versuchen einen Buchstaben zu erraten. | Auf dem Eingabetext wird der Spieler informiert, dass er keinen Buchstaben eingegeben hat. |

# 5 Prototyp

✍️ Erstellen Sie Prototypen für das GUI (Admin-Interface und Quiz-Seite).

# 6 Implementation

| User Story | Datum | Beschreibung |
| ---------- | ----- | ------------ |
| 1        | 6.02.2023      | Anmeldung durch OAuth 2.0 |
| 2        | 13.02.2023      | - |
| 3        | 13.02.2023      | - |
| 4        | 25.02.2023      | - |
| 5        | 6.02.2023      | - |
| 6        | 6.02.2023      | - |
| 7        | 6.02.2023      | - |
| 8        | 24.02.2023      | - |
| 9        | 20.02.2023      | - |
| 10        | 6.02.2023      | - |
| 11        | 13.02.2023      | - |
| 12        | 6.02.2023      | - |
| 13        | 26.02.2023      | - |

# 7 Projektdokumentation

| US-№ | Erledigt? | Entsprechende Code-Dateien oder Erklärung |
| ---- | --------- | ----------------------------------------- |
| 1    | ja  | Siehe [...nextauth].js                                           |
| 2    | ja  | Siehe components/AdminInterface.js und /api/admin                                         |
| 3    | ja  | Siehe components/AdminInterface.js und /api/admin                                           |
| 4    | ja  | Siehe components/HighscoreTable.js und /api/admin                                          |
| 5    | ja  | Siehe components/phrase/Phrase.js und /api/game                                           |
| 6    | ja  | Siehe components/phrase/Phrase.js und /api/game                                          |
| 7    | ja  | Siehe components/phrase/Phrase.js und /api/game                                          |
| 8    | ja  | Siehe components/HighscoreTable.js und /api/highscore                                          |
| 9    | ja  | Siehe /api/game/getphrase.js                                          |
| 10    | ja  | Siehe components/phrase/Phrase.js und /api/game                                            |
| 11   | ja  | Siehe components/AdminInterface.js und /api/admin                                            |
| 12   | ja  | Siehe components/phrase/Phrase.js und /api/game                                          |
| 13   | ja  | Siehe components/phrase/Phrase.js und /api/game                                       |

Für das Sicherheitskonzept wurden in den Apiroutes jeweil Abfragen geschrieben.
Bspw. kann ein normaler Spieler nicht auf die Api's unter /api/admin zugreifen.

# 8 Testprotokoll

✍️ Fügen Sie hier den Link zu dem Video ein, welches den Testdurchlauf dokumentiert.

| TC-№ | Datum | Resultat | Tester |
| ---- | ----- | -------- | ------ |
| 1.1  |       |          |        |
| ...  |       |          |        |

✍️ Vergessen Sie nicht, ein Fazit hinzuzufügen, welches das Test-Ergebnis einordnet.

# 9 `README.md`

Projekt aufstarten:

1. Repo von Github Klonen.
2. .env Datei unter /src hinzufügen.
3. Folgende Variabeln eingeben:  
    DATABASE_URL: Die Url zur MySQL Datenbank (In diesem Fall "mysql://root:@localhost:3306/gluecksrad")  
    GITHUBID: Die ID der eigenen Github OAuth App  
    GITHUBSECRET: Die Secret ID der eigenen Github OAuth App  
    DISCORDID: Die ID der eigenen Discord Oauth App  
    DISCORDSECRET: Die Secret ID der eigenen Discord OAuth App
4. "npm install" in den Terminal eingeben.
5. Prisma Cli herunterladen ("npx prisma")
6. "npx prisma db pull" in den Terminal eingeben. (Erstellt automatisch die Tabellen, die unter /prisma/schma.prisma zu sehen sind, in die MySQL Datenbank)
7. Mit XAMPP die Apache und MySQL Module starten.
8. "npm run dev" in den Terminal eingeben. (Startet das Projekt)

# 10 Allgemeines

- [ ] Ich habe die Rechtschreibung überprüft
- [ ] Ich habe überprüft, dass die Nummerierung von Testfällen und User Stories übereinstimmen
- [ ] Ich habe alle mit ✍️ markierten Teile ersetzt

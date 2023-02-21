# Projekt-Dokumentation

👤 Eray Çimen

| Datum | Version | Zusammenfassung                                              |
| ----- | ------- | ------------------------------------------------------------ |
|       | 0.0.1   | ✍️ Jedes Mal, wenn Sie an dem Projekt arbeiten, fügen Sie hier eine neue Zeile ein und beschreiben in *einem* Satz, was Sie erreicht haben. |
|       | 0.0.2   |                                                              |
|       | 0.0.3   |                                                              |
|       | 0.0.4   |                                                              |
|       | 0.0.5   |                                                              |
|       | 0.0.6   |                                                              |
|       | 1.0.0   |                                                              |

# 0 Ihr Projekt

👨‍🏫 Ich möchte in diesem Projekt eine Plattform bauen, worin man das Spielprinzip der Fernsehshow "Glücksrad" spielen kann.

# 1 Analyse

* Tier 1 (Presentation): Glücksrad und Ratewand anzeigen
* Tier 2 (Webserver): Eingaben validieren
* Tier 3 (Application Server): Glücksrad-Ausgabe generieren 
* Tier 4 (Dataserver): Namen und Highscore-Listen abspeichern

# 2 Technologie

* Tier 1 (Presentation): React JS, Javascript, HTML, CSS, Bootstrap-Komponentenbibliothek
* Tier 2 (Webserver): Next.js, Postman (für Tests)
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

| US-№ | Verbindlichkeit | Typ  | Beschreibung                       |
| ---- | --------------- | ---- | ---------------------------------- |
| 1    | Muss                | Funktional     | Als Spieler möchte ich eine Highscore-Liste vorgeführt bekommen, damit ich sehen kann, wie ich mit anderen Spieler abgeschnitten habe.  |
| 2  | Muss                | Funktional     | Als Spieler möchte ich meine Lebenspunkte zu jeder Zeit sehen, damit ich weiss, wie viele Fehler ich mir noch erlauben kann. |
| 3  | Muss                | Funktional     | Als Administrator möchte ich einzelne Einträge der Highscore-Liste löschen können.  |
| A  | Muss                | Qualität     | Als Nutzer möchte ich jeweils eine Ladezeit von höchstens 3 Sekunden (lokal gehostete Plattform), damit ich nicht ungeduldig werde. |
| B  | Kann                | Rand     | Als Nutzer möchte ich, dass die Plattform responsive designet wurden, damit ich die Website auf meinem Rechner, wie auch auf meinem Handy benutzen kann. |

# 4.2 Testfälle

| TC-№ | Vorbereitung | Eingabe | Erwartete Ausgabe |
| ---- | ------------ | ------- | ----------------- |
| 1.1  | Die Plattform ist gestartet und der Nutzer sieht die Navigation vor sich auf dem Webbrowser. | Auf "Highscore-List" klicken. | Auf der folgende Seite wird eine Highscore-Liste mit Rang, Name, Zeitpunkt, Geldbetrag und Anzahl der Spielrunden der gespielten Runden angezeigt. |
| 2.1  | Es wurde ein neues Spiel gestartet. | Vokal kaufen, der nicht im Rätselwort oder Phrase vorkommt.         | Auf der Lebensleiste werden nun nur noch 2 Herzen angezeigt. |
| 2.2  | Es wurde ein neues Spiel gestartet.             | Konsonant raten, der nicht im Rätselword oder Phrase vorkommt. | Auf der Lebensleiste werden nun nur noch 2 Herzen angezeigt.                   |
| 3.1  | Der Administrator öffnet die MySQL-Workbench.              | Die vorgespeicherte Funktion zum Löschen ausführen und in die Eingane "1" eingeben. | Auf der Tabelle der Highscore-Liste fehlt nun der Eintrag mit dem Index "1". |
| A.1  | Der Tester hat seinen Lieblingsbrowser offen und das Frontend, Backend und die Datenbank lokal gestartet. | Die URL im Browser für die Plattform eingeben. | Die Ladezeit beträgt kürzer als drei Sekunden. |
| B.1  | Der Tester Hat die Website auf seinem Rechner offen. | Alle Knöpfe und Texte überprüfen, ob sie zugänglich sind.  | Alle Knöpfe führen die erwartete Aktionen aus, alle Texte aus dem HTML Quelltext werden im richtigen Layout angezeigt. |
| B.2  | Der Tester Hat die Website auf seinem Rechner offen und stellt bei den Entwicklertools ein, dass die Seitengrössen so, wie auf dem iPhone 12 Pro sind. | Alle Knöpfe und Texte überprüfen, ob sie zugänglich sind.  | Alle Knöpfe führen die erwartete Aktionen aus, alle Texte aus dem HTML Quelltext werden im richtigen Layout angezeigt. |
| B.3  | Der Tester Hat die Website auf seinem Rechner offen und stellt bei den Entwicklertools ein, dass die Seitengrössen so, wie auf dem iPad Air sind. | Alle Knöpfe und Texte überprüfen, ob sie zugänglich sind.  | Alle Knöpfe führen die erwartete Aktionen aus, alle Texte aus dem HTML Quelltext werden im richtigen Layout angezeigt. |

# 5 Prototyp

✍️ Erstellen Sie Prototypen für das GUI (Admin-Interface und Quiz-Seite).

# 6 Implementation

✍️ Halten Sie fest, wann Sie welche User Story bearbeitet haben

| User Story | Datum | Beschreibung |
| ---------- | ----- | ------------ |
| ...        |       |              |

# 7 Projektdokumentation

| US-№ | Erledigt? | Entsprechende Code-Dateien oder Erklärung |
| ---- | --------- | ----------------------------------------- |
| 1    | ja / nein |                                           |
| ...  |           |                                           |

# 8 Testprotokoll

✍️ Fügen Sie hier den Link zu dem Video ein, welches den Testdurchlauf dokumentiert.

| TC-№ | Datum | Resultat | Tester |
| ---- | ----- | -------- | ------ |
| 1.1  |       |          |        |
| ...  |       |          |        |

✍️ Vergessen Sie nicht, ein Fazit hinzuzufügen, welches das Test-Ergebnis einordnet.

# 9 `README.md`

✍️ Beschreiben Sie ausführlich in einer README.md, wie Ihre Applikation gestartet und ausgeführt wird. Legen Sie eine geeignete Möglichkeit (Skript, Export, …) bei, Ihre Datenbank wiederherzustellen.

# 10 Allgemeines

- [ ] Ich habe die Rechtschreibung überprüft
- [ ] Ich habe überprüft, dass die Nummerierung von Testfällen und User Stories übereinstimmen
- [ ] Ich habe alle mit ✍️ markierten Teile ersetzt

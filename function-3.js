function ladeContent() {
  let r = "";
  // *** //
  r +=
    tabellarischeDaten({
      tag: "table",
      inhalt: [
        {
          tag: "td",
          inhalt: [
            "Sprache",
            {
              tag: "select",
              inhalt: {
                tag: "option",
                inhalt: ["deutsch","Englisch","arabisch"],
              },
            },
          ],
        },
        {
          tag: "td",
          inhalt: [
            "Nationalität",
            { tag: "select", inhalt: { tag: "option", inhalt: ["Deutsch","amrikanisch","ägyptisch"] } },
          ],
        },
        {
          tag: "td",
          inhalt: ["Name", { tag: "input", type: "text" }],
        },
        {
          tag: "td",
          inhalt: ["Alter", { tag: "input", type: "number" }],
        },
        {
          tag: "td",
          inhalt: ["Geburtsdatum ", { tag: "input", type: "date" }],
        }
      ]
    }) + single("hr")
    +tabellarischeBilder(
      [
        {
          tag: "td",
          titel: "titel1",
          bild: "bilder/tobottom.png",
          text: "simple text1",
        },
        {
          tag: "td",
          titel: "titel2",
          bild: "bilder/toright.png",
          text: "simple text2",
        },
        {
          tag: "td",
          titel: "titel3",
          bild: "bilder/toleft.png",
          text: "simple text3",
        },
      ]
    )
    
  return r;
}

/* * * * * * * * * * * * * * * * * * * * * * * * *
 * Erstelle eine ANONYME Funktion, dass eine Tabelle
 * erstellt. In der Tabelle sollen drei Spalten
 * existieren:
 *
 * SPALTE 1       SPALTE 2
 *
 * Sprache        SELECT-Element mit Sprachoptionen
 * Nationalität   SELECT-Element mit Optionen
 * Name           INPUT-Feld für Eingabe (Text)
 * Alter          INPUT-Feld für Eingabe (Zahl)
 * Geburtsdatum   INPUT-Feld für Auswahl (Datum)
 *
 * Die Funktion erwartet einen JSON-Objekt, welches
 * die obige Anforderung formuliert. Die Funktion
 * soll das Objekt durcharbeiten und die Tabelle
 * erzeugen
 * * * * * * * * * * * * * * * * * * * * * * * * */
const tabellarischeDaten = function (myObiect) {
  let res = `<${myObiect.tag}>`;

  if (typeof myObiect.inhalt === "object") {
    for (let item of myObiect.inhalt) {
      res += `<tr>`;

      if (typeof item.inhalt === "object") {
        for (let i of item.inhalt) {
          res += `<${item.tag}>`;

          if (i.tag === `select`) {
            res += `<${i.tag}>`;

            for (let selectItem of i.inhalt.inhalt) {
              res += `<${i.inhalt.tag}>`;

              res += selectItem;

              res += `</${i.inhalt.tag}>`;
            }

            res += `</${i.tag}>`;
          } else if (i.tag === `input`) {
            res += `<${i.tag} type="${i.type}">`;
          } else {
            res += i;
          }

          res += `</${item.tag}>`;
        }
      }

      res += `</tr>`;
    }
  }

  res += `</${myObiect.tag}>`;
 
  return res;
};

/* * * * * * * * * * * * * * * * * * * * * * * * *
 * Erstelle eine PFEIL Funktion, dass eine Tabelle
 * mit Bildern anlegt. Über jedem Bild ist ein
 * H3 Titel und unter jedem Bild ein Paragraph
 * mit etwas Text.
 *
 * Die Tabelle hat 3 Spalten und 3 Zeilen.
 *
 * Die Funktion benötigt einen Array als Parameter.
 * In diesem Array liegen JSON-Objekte mit den
 * Daten für je Bild mit Titel und Paragraph-Text.
 * * * * * * * * * * * * * * * * * * * * * * * * */

const tabellarischeBilder = (myArray) => {
  let res = `<table>`;

  let myNum = 0;

  for (let i of myArray) {
    if (myNum === 0) {
      res += `<tr>`;

      res += `<${i.tag}>`;

      res += `<h3>${i.titel}</h3>`;

      res += `<img src="${i.bild}">`;

      res += `<p>${i.text}</p>`;

      res += `</${i.tag}>`;

      myNum++;
    } else if (myNum === 2) {
      res += `<${i.tag}>`;

      res += `<h3>${i.titel}</h3>`;

      res += `<img src="${i.bild}">`;

      res += `<p>${i.text}</p>`;

      res += `</${i.tag}>`;

      res += `</tr>`;

      myNum = 0;
    } else {
      res += `<${i.tag}>`;

      res += `<h3>${i.titel}</h3>`;

      res += `<img src="${i.bild}">`;

      res += `<p>${i.text}</p>`;

      res += `</${i.tag}>`;

      myNum++;
    }
  }

  res += `</table>`;

  return res;
};

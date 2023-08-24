function ladeContent() {
  let r = "";
  // *** //
  r +=
    /* * * * * * * * * * * * * * * * * * * * * * * * *
     * Es gibt ein Titel das angibt, welches Bild
     * gerade angezeigt wird. Wenn man auf das Bild
     * klickt, wird das Bild geändert. Der Titel
     * ändert sich auch. Insgesamt sind es 4 Bilder.
     * Behebe das Problem, damit es funktioniert.
     * Vergiss nicht bei der Funktion "bildWechseln"
     * vorbei zu schauen :-)
     * * * * * * * * * * * * * * * * * * * * * * * * */
    block(
      "div",
      /* Element 1 */
      block("h3", "Bild 1", [{ name: "id", wert: "bildTitel" }]) +
        /* ELement 2 */
        single("img", [
          {
            name: "src",
            wert: "bilder/screen-2.png"
          },
          {
            name: "id",
            wert: "bild-1"
          },
          {
            name: "onclick",
            wert: "bildWechseln(1,2)"
          },
          {
            name: "class",
            wert: "sichtbar"
          }
        ]) +
        /* ELement 3 */
        single("img", [
          {
            name: "src",
            wert: "bilder/tablet.png"
          },
          {
            name: "id",
            wert: "bild-2"
          },
          {
            name: "onclick",
            wert: "bildWechseln(2,3)"
          },
          {
            name: "class",
            wert: "versteckt"
          }
        ]) +
        /* ELement 4 */
        single("img", [
          {
            name: "src",
            wert: "bilder/world.png"
          },
          {
            name: "id",
            wert: "bild-3"
          },
          {
            name: "onclick",
            wert: "bildWechseln(3,4)"
          },
          {
            name: "class",
            wert: "versteckt"
          }
        ]) +
        /* ELement 5 */
        single("img", [
          {
            name: "src",
            wert: "bilder/like.png"
          },
          {
            name: "id",
            wert: "bild-4"
          },
          {
            name: "onclick",
            wert: "bildWechseln(4,1)"
          },
          {
            name: "class",
            wert: "versteckt"
          }
        ])
    ) 
    +
    single("hr") +
    /* * * * * * * * * * * * * * * * * * * * * * * * *
     * Es gibt einen OL, einen UL und eine DL, die
     * ein paar Informationen anzeigen sollen. Behebe
     * die Fehler, damit das gelingt.
     * * * * * * * * * * * * * * * * * * * * * * * * */
    block(
      "div",
      /* Geordnete Liste */
      list(
        "ol",
        [
          { wert: "Apfel" },
          { wert: "Birne" },
          { wert: "Mango" },
          { wert: "Kirsche" },
          { wert: "Kiwi" },
          { wert: "Mandarine" }
        ],
        [
          {
            name: "style",
            wert:
              "background-color: rgba(80,120,140,0.12); padding: 10px; margin: 10px;"
          }
        ]
      ) +
        /* Ungeordnete Liste */
        list(
          "ul",
          [
            { wert: "Erdbeere" },
            { wert: "Himbeere" },
            { wert: "Heidelbeere" },
            { wert: "Brombeere" },
            { wert: "Johannesbeere" }
          ],
          [
            {
              name: "style",
              wert:
                "background-color: rgba(110,140,120,0.12); padding: 10px; margin: 10px;"
            }
          ]
        ) +
        /* Beschreibungsliste */
        list(
          "dl",
          [
            {
              text: "Europa",
              wert: [
                { wert: "Deutschland" },
                { wert: "Österreich" },
                { wert: "Niederlande" },
                { wert: "Belgien" },
                { wert: "Polen" }
              ]
            },
            {
              text: "Asien",
              wert: [
                { wert: "Türkei" },
                { wert: "Aserbaidschan" },
                { wert: "Kazakstan" },
                { wert: "Uzbekistan" },
                { Wert: "Endonesien" },
                { wert: "Japan" },
                { wert: "Korea" },
                { wert: "Russland" }
              ]
            },
            {
              taxt: "Amerika",
              wert: [
                { wert: "USA" },
                { wert: "Kanada" },
                { wert: "Mexiko" },
                { wert: "Brasilen" },
                { wert: "Argentinien" },
                { wert: "Kolombien" },
                { wert: "Venezuela" }
              ]
            }
          ],
          [
            {
              name: "style",
              wert:
                "background-color: rgba(130,120,80,0.12); padding: 10px; margin: 10px;max-height:160px; overflow: auto;"
            }
          ]
        ),
      [
        {
          name: "style",
          wert: `display: flex;
                    flex-wrap: wrap;
                    justify-content: center;`
        }
      ]
    ) 
    single("hr") +
    /* * * * * * * * * * * * * * * * * * * * * * * * *
     * Folgendes Text soll angezeigt werden:
     *
     * Ein Mischtext lässt sich mit verschiedenen
     * Mitteln zusammensetzen. Dazu gehören einfacher
     * Text, Zahlen und wiederum Text und Zahlen aus
     * Arrays, Objekten, Funktionsrückgaben und so
     * weiter. Man muss unbedingt wissen, welche
     * Art Information an welcher Stelle hinzugefügt
     * werden muss, damit das Ergebnis so ausfällt,
     * wie es auch beabsichtigt ist. Dazu gehört viel
     * Konzentration und vor allem sorgfälltiges und
     * sauberes Programmieren.
     *
     * * * * * * * * * * * * * * * * * * * * * * * * *
     *
     * Nach jeder Zeile soll ein Zeilenumbruch kommen
     * mit einer durchgezogenen Linie.
     *
     * Folgende Begriffe sollen vollständig groß
     * geschrieben werden: Text, Zahlen, Arrays, Objekte
     *
     * Folgende Begriffe sollen unterstrichen werden:
     * Funktionsrückgaben, Information, Mitteln,
     * Konzentration
     *
     * Folgende Begriffe sollen fett dargestellt werden:
     * sorgfälltiges, sauberes, unbedingt, wissen
     *
     * WICHTIG: Verwende für das Unterstreichen und
     * Fett-Darstellen die block()-Funktion
     *
     * * * * * * * * * * * * * * * * * * * * * * * * *
     *
     * Wichtiger Hinweis 1:
     *
     * Wenn eine komplexe Struktur mit Array und
     * JSON-Objekt Zweigen vorliegt, so muss man
     * immer auf den Typ des nächsten Elements
     * achten. Ist es ein Array, so kommen die
     * Array-Klammer in Einsatz, ist es ein JSON,
     * der KEY mit dem Punkt. Beispiel:
     *
     * cosnt y = [ 1, 10, [20, 30, { a: 40 }], {b : 50, c : [60, 70], d { e : true }} ]
     *
     * let n;
     * n = y[1];       -> 10
     * n = y[2][1];    -> 30
     * n = y[2][2].a;  -> 40
     * n = y[3].b;     -> 50
     * n = y[3].c[1]   -> 70
     * n = y[3].d.e    -> true
     *
     * Wichtiger Hinweis 2:
     *
     * Wenn eine Funktion ein Array-Eintrag ist, dann
     * muss man an der Stelle die Funktionsklammern
     * mit angeben, um das Ergebnis der Funktion
     * abrufen zu können. Beispiel:
     *
     * const y = [ 1, 20, () => { return "Hallo" }, true, -3 ];
     *
     * let n = y[2]();
     *
     * Liefert die Funktion einen Array zurück, so
     * verkehrt man wie gewohnt mit den Array-Klammern:
     *
     * let n = y[2]()[0];
     *
     * Muss man das KEY eines zurückgegebenen Objekts
     * abrufen, so gilt die Regel KEY PUNKT ATTRIbUT:
     *
     * let n = y[2]().z;
     *
     * * * * * * * * * * * * * * * * * * * * * * * * */
    block(
      "div",
      (() => {
        /* Hier liegen die Daten vor, mit denen du
         * den Mischtext unten zusammensetzen sollst */
        const x = [
          "wissen",
          "mit",
          "unbedingt",
          ["so", "an", "es", "ist", "auch", "wie"],
          { artikel: "das", notwendig: "muss", anzahl: "viel" },
          { aus: ["Dazu", "aus", "welche"] },
          () => {
            return "Information";
          },
          () => {
            return ["Zahlen", "Text", "Objekten", "Arrays"];
          },
          () => {
            return { a: "Man", b: "Ein", c: "Art", d: "damit" };
          },
          (e) => {
            switch (e) {
              case 0:
                return "verschiedenen";
              case 1:
                return [".", ","];
              case 2:
                return { a: "Mischtext", b: "Stelle", c: "Programmieren" };
              default:
                return "<p>FEHLER</p>";
            }
          },
          (e) => {
            return typeof e === "string"
              ? "Funktionsrückgaben"
              : typeof e === "number"
              ? "sorgfälltiges"
              : "sauberes";
          },
          [
            {
              a: "weiter",
              b: { a: "wiederum", b: "gehören" },
              c: ["gehört", "zusammensetzen", "allem"]
            }
          ],
          "sich",
          "welcher",
          {
            a: [{ f: { f: "und", g: "lässt" }, g: ["vor", "Konzentration"] }],
            b: {
              p: "Mitteln",
              j: [
                "einfacher",
                "ausfällt",
                [
                  "beabsichtigt",
                  "Ergebnis",
                  [{ a: "werden", b: ["hinzugefügt"] }]
                ]
              ]
            }
          }
        ];
        /* Setze den Text hier zusammen */
        return `${x}`;
      })()
    ) +
    single("hr") +
    /* * * * * * * * * * * * * * * * * * * * * * * * *
     * Einige Fehler verhindern, dass der folgende
     * Code funktioniert. Behebe die Fehler
     * * * * * * * * * * * * * * * * * * * * * * * * */
    block(
      "div",
      block("h2", "Fast geschafft") +
        block(
          "p",
          "Die Fehler stecken im Detail. Sei aufmerksam. Schau genau hin :-)"
        ) +
        single("img", [
          {
            name: "src",
            wert: "bilder/phone.png"
          }
        ]) +
        single("img", [
          {
            name: "src",
            wert: "bilder/write.png"
          }
        ]) +
        single("img", [
          {
            name: "src",
            wert: "bilder/disk.png"
          }
        ]) +
        single("img", [
          {
            name: "src",
            wert: "bilder/files.png"
          }
        ]) +
        list("table", [
          {
            wert: [
              { tag: "th", wert: "Produkt" },
              { tag: "th", wert: "Menge" },
              { tag: "th", wert: "Preis" }
            ]
          },
          {
            wert: [
              { tag: "td", wert: "Hose" },
              { tag: "td", wert: "2x" },
              { tag: "td", wert: "80,00 €" }
            ]
          },
          {
            wert: [
              { tag: "td", wert: "Hemd" },
              { tag: "td", wert: "3x" },
              { tag: "td", wert: "60,00 €" }
            ]
          },
          {
            wert: [
              { tag: "td", wert: "Schuh" },
              { tag: "td", wert: "1x" },
              { tag: "td", wert: "49,99 €" }
            ]
          }
        ])
    );
  // *** //
  return r;
  
}

/*

  Diese Funktion sorgt dafür, dass zwischen den vier Bildern
  gewechselt werden kann.

  Aufgabe:

  1. Finde die Fehler und korrigiere sie, damit die
     Funktion funktioniert

  2. Erkläre in deinen eigenen Worten, was die Funktion
     genau tut. Beschreibe die einzelnen Schritte.

*/

const bildWechseln = (verstecken, anzeigen) => {
  html(`bild-${verstecken}`).classList.add("versteckt");
  html(`bild-${verstecken}`).classList.remove("sichtbar");
  // *** //
  html(`bild-${anzeigen}`).classList.remove("versteckt");
  html(`bild-${anzeigen}`).classList.add("sichtbar");
  // *** //
  html("bildTitel").innerHTML = `Bild ${anzeigen}`;
};

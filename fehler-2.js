/* * * * * * * * * * * * * * * * * * * * * * * * *
 * Finde die Fehler und behebe sie. Dann schau
 * die die anderen Kommentare an und beantworte
 * die Fragen.
 * * * * * * * * * * * * * * * * * * * * * * * * */

function ladeContent() {
  let r = "";
  // *** //
  r +=
    block(
      "div",
      block(
        "div",
        /* Feld 1 */
        block(
          "section",
          single("input", [
            {
              name: "type",
              wert: "text"
            },
            {
              name: "placeholder",
              wert: "Vorname"
            },
            {
              name: "onkeyup",
              wert: "eingabeAbfangen(1)"
            },
            {
              name: "id",
              wert: "feld-1"
            }
          ])
        ) +
          /* Feld 2 */
          block(
            "section",
            single("input", [
              {
                name: "type",
                wert: "text"
              },
              {
                name: "placeholder",
                wert: "Nachame"
              },
              {
                name: "onkeyup",
                wert: "eingabeAbfangen(2)"
              },
              {
                name: "id",
                wert: "feld-2"
              }
            ])
          ) +
          /* Feld 3 */
          block(
            "section",
            single("input", [
              {
                name: "type",
                wert: "number"
              },
              {
                name: "placeholder",
                wert: "Alter"
              },
              {
                name: "onkeyup",
                wert: "eingabeAbfangen(3)"
              },
              {
                name: "id",
                wert: "feld-3"
              }
            ])
          ) +
          /* Feld 4 */
          block(
            "section",
            block("textarea", "", [
              {
                name: "placeholder",
                wert: "Nachricht"
              },
              {
                name: "onkeyup",
                wert: "eingabeAbfangen(4)"
              },
              {
                name: "id",
                wert: "feld-4"
              }
            ])
          ) +
          /* Feld 5 */
          block(
            "section",
            block("button", "Hinzufügen", [
              {
                name: "onclick",
                wert: "neuerFeld()"
              }
            ])
          )
      ) +
        block("div", "", [
          {
            name: "style",
            wert: `display: flex;
      flex-wrap: wrap;
      justify-content: space-around;`
          }
        ]),
      [
        {
          name: "style",
          wert: `display: flex;
               flex-wrap: wrap;
               justify-content: space-around;`
        },
        {
          name: "id",
          wert: "ausgabe"
        }
      ]
    ) +
    single("hr") +
    /* * * * * * * * * * * * * * * * * * * * * * * * *
     * Man kann mit einer Pfeil-Funktion weitere
     * Daten erzeugen und zurückgeben!
     * * * * * * * * * * * * * * * * * * * * * * * * */
    (() => {
      let a = "";
      // *** //
      const o = [
        "clock.png",
        "code.png",
        "floppy.png",
        "info.png",
        "book.png",
        "people.png"
      ].forEach((bild) => {
        a += single("img", [
          {
            name: "src",
            wert: `bilder/${bild}`
          },
          {
            name: "style",
            wert: "max-width: 48px; margin: 10px;"
          }
        ]);
      });
      // *** //
      return block("div", a, [
        {
          name: "style",
          wert: `display: flex;
            flex-wrap: wrap;
            justify-content: center;`
        }
      ]);
    })();
  // *** //
  /* * * * * * * * * * * * * * * * * * * * * * * * *
   * Manche Klammer sind nicht geschlossen. Andere
   * Klammer sind nicht offen. Korrigiere den
   * Fehler.
   * * * * * * * * * * * * * * * * * * * * * * * * */
  {
    {
      {
        r += single("hr");
        {
          [
            {
              a: 120,
              b: 88,
              c: [
                [61, "Coole Sache", 12, "Wow"],
                ["Have a nice day :-)", 66, "The way of life ...", 73]
              ]
            },
            {
              a: "Hallo",
              b: "Merhaba",
              c: [
                [
                  50,
                  "Spieglen Spieglein an der Wand, welche Klammer sind im Trend?",
                  -8,
                  "Keine Ahnung, ich denke alle :-)"
                ],
                [
                  "Have a break, have a Kitkat :-)",
                  90,
                  "Breaking news ...",
                  -2.5
                ]
              ]
            }
          ].forEach((g) => {
            let Q = "";
            g.c.forEach((h) => {
              let v = "";
              h.forEach((i) => {
                v += block("li", i);
              });
              Q += block("ul", v);
            });
            r += `<p><u>${g.a}</u> und <u>${g.b}</u> sowie ${Q}</p>`;
          });
        }
      }
    }
  }
  // *** //
  return r;
};

/* * * * * * * * * * * * * * * * * * * * * * * * *
 * Sobald du in ein Eingabefeld etwas tippst,
 * wird die Information hier an die richtige
 * Stelle geschrieben. Finde heraus, wie das
 * genau geschieht und formuliere es in deinen
 * eigenen Worten.
 * * * * * * * * * * * * * * * * * * * * * * * * */

const daten ={
  vorname: "",
  nachname: "",
  alter: 0,
  text: ""
};

/* * * * * * * * * * * * * * * * * * * * * * * * *
 * Was macht diese Funktion?
 * * * * * * * * * * * * * * * * * * * * * * * * */

const eingabeAbfangen = (feldNummer) => {
  if (typeof feldNummer === "number") {
    feldNummer === 1
      ? (daten.vorname = html(`feld-${feldNummer}`).value)
      : feldNummer === 2
      ? (daten.nachname = html(`feld-${feldNummer}`).value)
      : feldNummer === 3
      ? (daten.alter = html(`feld-${feldNummer}`).value)
      : feldNummer === 4
      ? (daten.text = html(`feld-${feldNummer}`).value)
      : console.log("FEHLER: Falsche FeldNummer");
  } else console.log("FEHLER: Zahl als Parameter erwartet");
};

/* * * * * * * * * * * * * * * * * * * * * * * * *
 * Was macht diese Funktion?
 * * * * * * * * * * * * * * * * * * * * * * * * */

const neuerFeld = () => {
  for (let x = 1; x < 5; x++) {
    if (html(`feld-${x}`)) html(`feld-${x}`).value = "";
  }
  // *** //
  html("ausgabe").innerHTML += block(
    "div",
    list(
      "table",
      [{
          wert: [
            { tag: "th", wert: "Vorname" },
            { tag: "th", wert: "Nachname" },
            { tag: "th", wert: "Alter" },
            { tag: "th", wert: "Text" }
          ]
        },
        {
          wert: [
            { tag: "td", wert: daten.vorname },
            { tag: "td", wert: daten.nachname },
            { tag: "td", wert: daten.alter },
            { tag: "td", wert: daten.text }
          ]
        }
      ],
      [
        {
          name: "style",
          wert: `margin: 4px;
             background-color: rgba(200,200,200,0.25);
             border: 4px outset rgba(140, 140, 140, 0.25);`
        }
      ]
    )
  );
};

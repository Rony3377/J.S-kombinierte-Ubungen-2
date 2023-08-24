/* * * * * * * * * * * * * * * * * * * * * * * * *

 * Finde die Fehler und behebe sie. Dann schau

 * die die anderen Kommentare an und beantworte

 * die Fragen.

 *

 * Anschließend mache eigene Schleifen wie unten

 * beschrieben!

 * * * * * * * * * * * * * * * * * * * * * * * * */

 

function ladeContent() {

  let r = "";

  // *** //

  r += list("table", [

    {

      wert: [

        {

          tag: "td",

          wert: single("input", [

            {

              name: "id",

              wert: "feld"

            },

            {

              name: "style",

              wert: "text-align: right;"

            }

          ]),

          attr: [

            {

              name: "colspan",

              wert: "3"

            }

          ]

        },

        {

          tag: "td",

          wert: block("button", "=", [{ name: "onclick", wert: "resultat()" }])

        }

      ]

    },

    {

      wert: [

        {

          tag: "td",

          wert: block("button", "7", [{ name: "onclick", wert: "ziffer(7)" }])

        },

        {

          tag: "td",

          wert: block("button", "8", [{ name: "onclick", wert: "ziffer(8)" }])

        },

        {

          tag: "td",

          wert: block("button", "9", [{ name: "onclick", wert: "ziffer(9)" }])

        },

        {

          tag: "td",

          wert: block("button", ":", [{ name: "onclick", wert: "rechen(1)" }])

        }

      ]

    },

    {

      wert: [

        {

          tag: "td",

          wert: block("button", "4", [{ name: "onclick", wert: "ziffer(4)" }])

        },

        {

          tag: "td",

          wert: block("button", "5", [{ name: "onclick", wert: "ziffer(5)" }])

        },

        {

          tag: "td",

          wert: block("button", "6", [{ name: "onclick", wert: "ziffer(6)" }])

        },

        {

          tag: "td",

          wert: block("button", "*", [{ name: "onclick", wert: "rechen(2)" }])

        }

      ]

    },

    {

      wert: [

        {

          tag: "td",

          wert: block("button", "1", [{ name: "onclick", wert: "ziffer(1)" }])

        },

        {

          tag: "td",

          wert: block("button", "2", [{ name: "onclick", wert: "ziffer(2)" }])

        },

        {

          tag: "td",

          wert: block("button", "3", [{ name: "onclick", wert: "ziffer(3)" }])

        },

        {

          tag: "td",

          wert: block("button", "+", [{ name: "onclick", wert: "rechen(3)" }])

        }

      ]

    },

    {

      wert: [

        {

          tag: "td",

          wert: block("button", "0", [{ name: "onclick", wert: "ziffer(0)" }])

        },

        {

          tag: "td",

          wert: block("button", ",", [{ name: "onclick", wert: "ziffer(-1)" }])

        },

        {

          tag: "td",

          wert: block("button", "Neu", [{ name: "onclick", wert: "neues()" }])

        },

        {

          tag: "td",

          wert: block("button", "-", [{ name: "onclick", wert: "rechen(4)" }])

        }

      ]

    }

  ]);

  // *** //

 

  return r;

}

 

/* * * * * * * * * * * * * * * * * * * * * * * * *

 * Daten

 * * * * * * * * * * * * * * * * * * * * * * * * */

 

const daten = {

  zahl1: { text: "", zahl: 0.0 },

  zahl2: { text: "", zahl: 0.0 },

  ergeb: { text: "", zahl: 0.0 },

  reweg: ""

};

 

/* * * * * * * * * * * * * * * * * * * * * * * * *

 * Ziffer-Funktion

 * * * * * * * * * * * * * * * * * * * * * * * * *

 * Wenn reweg leer ist, dann wird der nächste

 * Ziffer an zahl1.text hinzugefügt (+=)

 *

 * Wenn reweg nicht leer ist, dann wird der

 * nächste Ziffer an zahl2.text hinzugefügt

 *

 * Wenn -1 erkannt wurde, soll ein .

 * an zahl1.text oder zahl2.text hinzugefügt

 * werden

 * * * * * * * * * * * * * * * * * * * * * * * * */

 

const ziffer = (wert) => {

  let korrekt = wert;

  if (korrekt == "-1") korrekt = ".";

 if(daten.reweg ==""){

  daten.zahl1.text += korrekt;

  daten.zahl1.zahl = parseFloat(

    daten.zahl1.text

  );

 }

 else {

 

  daten.zahl2.text += korrekt;

  daten.zahl2.zahl = parseFloat(

    daten.zahl2.text

  );

}

const ausgabe = document.getElementById("feld");

if (ausgabe)

{ausgabe.value =  daten.zahl1.text + daten.reweg + daten.zahl2.text};

};

 

/* * * * * * * * * * * * * * * * * * * * * * * * *

 * Rechen-Funktion

 * * * * * * * * * * * * * * * * * * * * * * * * *

 * 1 = :

 * 2 = *

 * 3 = +

 * 4 = -

 *

 * Schreib den Wert in daten.reweg

 * * * * * * * * * * * * * * * * * * * * * * * * */

 

const rechen = (wert) => {

  const ausgabe = document.getElementById("feld");

 

  /* Wenn auf = geklickt wurde... */

 

  let korrekt = wert;

  if (korrekt == 1) korrekt = ":";

  if (korrekt == 2) korrekt = "*";

  if (korrekt == 3) korrekt = "+";

  if (korrekt == 4) korrekt = "-";

  daten.reweg += korrekt;

  if (ausgabe)

{ausgabe.value +=  daten.reweg };

 

};

 

/* * * * * * * * * * * * * * * * * * * * * * * * *

 * Resultat-Funktion

 * * * * * * * * * * * * * * * * * * * * * * * * *

 * Ezeuge sowohl für zahl1.text, als auch für

 * zahl2.text mit Hilfe von parseFloat, den

 * mathematischen Wert und schreibe sie in

 * zahl1.zahl und in zahl2.zahl.

 *

 * Überprüfe daten.reweg

 *

 * Berechne entsprechend und schreibe das

 * Ergebnis in ergeb.text und in ergeb.zahl

 *

 * Beim ergeb.text prüfe, ob ein Punkt vorhanden

 * ist und mache daraus einen Komma. Also aus

 * 12.59 soll 12,59 werden.

 *

 * Überschreibe zahl1.text mit den Wert von

 * ergeb.text und zahl1.zahl mit den wert von

 * ergeb.zahl.

 *

 * Überschreibe den Wert zahl2.text mit "" und

 * den Wert von zahl2.zahl mit 0.0.

 *

 * Schreibe den wert von ergeb.text in das HTML

 * Element mit der ID "feld"

 * * * * * * * * * * * * * * * * * * * * * * * * */

 

const resultat = () => {

   /* Verbindung zum Sichtfeld herstellem */

   const ausgabe = document.getElementById("feld");

   /* Temporäre Ergebnis-Variable */

   let ergebnis = "";

   /* Wenn auf = geklickt wurde... */

   

     /* Lese beide Zahlenwerte als ZAHL ein */

     let a = daten.zahl1.zahl;

     let b = daten.zahl2.zahl;

     /* Bereite eine temporäre Zahl-Variable */

     let c = 0;

     if (daten.reweg == "+") c = a + b;

     ergebnis = ` = ${c}`;

     if (ausgabe)

    { ausgabe.value = daten.zahl1.text + daten.reweg + daten.zahl2.text+ergebnis};

    if (daten.reweg == "-") c = a - b;

     ergebnis = ` = ${c}`;

     if (ausgabe)

    { ausgabe.value = daten.zahl1.text + daten.reweg + daten.zahl2.text+ergebnis};

    if (daten.reweg == "*") c = a * b;

     ergebnis = ` = ${c}`;

     if (ausgabe)

    { ausgabe.value = daten.zahl1.text + daten.reweg + daten.zahl2.text+ergebnis};

    if (daten.reweg == ":") c = a / b;

     ergebnis = ` = ${c}`;

     if (ausgabe)

    { ausgabe.value = daten.zahl1.text + daten.reweg + daten.zahl2.text+ergebnis};

};

 

/* * * * * * * * * * * * * * * * * * * * * * * * *

 * neues-Funktion

 * * * * * * * * * * * * * * * * * * * * * * * * *

 * Mache alle Felder in JSON Objekt "daten"

 * wieder leer.

 * * * * * * * * * * * * * * * * * * * * * * * * */

 

const neues = () => {

  daten.zahl1.text="";

  daten.zahl2.text="";

  daten.reweg="";

 const ausgabe= html("feld") ;

 if(ausgabe) ausgabe.value = "";

};
 



 
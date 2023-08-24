/* * * * * * * * * * * * * * * * * * * * * * * * *

 * Erstelle eine eigene CSS-Datei mit vier

 * verschiedenen Keyframes:

 *

 * welle:

 *      - Es bewegt sich immer etwas hoch und etwas runter

 *        und bewegt sich  gleichzeitig von links nach

 *        rechts und wieder zurück

 *      - infinite (Endlosschleife)

 * minUndMax:

 *      - verwende width und height mit overflow:hidden

 *      - Element wird immer kleiner und größer

 *      - infinite (Endlosschleife)

 * halbkreis:

 *      - es dreht sich 90 Grad nach links und dann

 *        wiede 90 Grad nach rechts

 *      - infinite (Endlosschleife)

 *

 * Erstelle 6 Ball-Bilder jeweils mit einem IMG.

 *

 * Nutze classList und wechsle die Klassen für

 * die Keyframes:

 *

 * Das Bild           Wechseldauer

 *

 * 1 und 5            Wechselt die Klasse jede 5.25 Sekunden

 * 2 und 4            Wechselt die Klasse jede 3.5 Sekunden

 * 3 und 6            Wechselt die Klasse jede 7.20 Sekunden

 *

 * Entferne immer die aktuelle Klasse mit

 * .classList.remove(...) und füge eine

 * neue Klasse mit .classList.add(...)

 *

 * Verwende switch oder den ternary-operator

 * um zu ernscheiden, welche Klasse als nächstes

 * verbunden werden soll:

 *

 * switch(aktuell)

 * {

 *    case "ball":

 *      x.classList.remove("ball");

 *      x.classList.add("zerrung");

 *      break;

 * }

 *

 * Verwende die spezielle Schleife, um alle Bilder

 * an einem Stück zu bearbeiten. Dem zu Folge

 * erzeuge einen Array in dem du die IDs der

 * IMG-Elemente notierst. Arbeite mit diesem

 * Array.

 * * * * * * * * * * * * * * * * * * * * * * * * */

 

 // Erstelle ein Array mit den IDs der IMG-Elemente

 const animationsKlasse = [

  "ball1",

  "ball2",

  "ball3",

  "ball4",

  "ball5",

  "ball6"

];

 

 

function ladeContent() {

  let r = "";

   // *** //

r+= block("div",

single("img",[ {name: "src",wert: "bilder/ball1.png"},{name: "class",wert: "ballbild"},{name:"id",wert:"ball1"}])+

single("img",[ {name: "src",wert: "bilder/ball2.png"},{name: "class",wert: "ballbild"},{name:"id",wert:"ball2"}])+

single("img",[ {name: "src",wert: "bilder/ball3.png"},{name: "class",wert: "ballbild"},{name:"id",wert:"ball3"}])+

single("img",[ {name: "src",wert: "bilder/ball4.png"},{name: "class",wert: "ballbild"},{name:"id",wert:"ball4"}])+

single("img",[ {name: "src",wert: "bilder/ball1.png"},{name: "class",wert: "ballbild"},{name:"id",wert:"ball5"}])+

single("img",[ {name: "src",wert: "bilder/ball2.png"},{name: "class",wert: "ballbild"},{name:"id",wert:"ball6"}]));

 

  // *** //

  return r;

}

      // Funktion zum Wechseln der Klassen für alle Bilder

      function changeAllImageClasses() {

        animationsKlasse.forEach((imageId) => {

          const image = document.getElementById(imageId);

          const currentClass = image.classList[1];

          switch (currentClass) {

            case "welle":

              image.classList.remove("welle");

              image.classList.add("minUndMax");

 

              break;

            case "minUndMax":

              image.classList.remove("minUndMax");

              image.classList.add("halbkreis");

              break;

            case "halbkreis":

              image.classList.remove("halbkreis");

              image.classList.add("welle");

 

              break;

            default:

              image.classList.add("welle");

          }

        });

      }

 

      // Setze die Intervalle für den Klassenwechsel der Bilder

      setInterval(changeAllImageClasses, 5250); // Wechselt die Klasse alle 5.25 Sekunden

      setInterval(changeAllImageClasses, 3500);

      setInterval(changeAllImageClasses, 7200);
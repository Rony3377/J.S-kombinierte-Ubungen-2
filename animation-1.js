/* * * * * * * * * * * * * * * * * * * * * * * * *
 * Erstelle eine eigene CSS-Datei mit vier
 * verschiedenen Keyframes:
 *
 * fallenderBall:
 *      - Es dreht sich
 *      - Bewegt sich von links nach rechts und zurück
 *      - infinite (Endlosschleife)
 * zerren:
 *      - verwende Scale
 *      - wird groß und klein
 *      - ändert auch ständig sepia und hue-rotate
 *      - infinite (Endlosschleife)
 * farbenZauber:
 *      - ändert auch ständig sepia und hue-rotate
 *      - infinite (Endlosschleife)
 * gemischtes:
 *      - ändert auch ständig sepia und hue-rotate
 *      - Bewegt sich von oben nach unten und zurück
 *      - ändert auch ständig brightness und invert
 *      - infinite (Endlosschleife)
 *
 * Erstelle 4 Ball-Bilder jeweils mit einem IMG.
 *
 * Nutze classList und wechsle die Klassen für
 * die Keyframes:
 *
 * Das Bild           Wechseldauer
 *
 * 1                  Wechselt die Klasse jede 5.25 Sekunden
 * 2                  Wechselt die Klasse jede 3.5 Sekunden
 * 3                  Wechselt die Klasse jede 7.20 Sekunden
 * 4                  Wechselt die Klasse jede 9.50 Sekunden
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
const animationsKlasse = ["ball1", "ball2", "ball3", "ball4"];

 
function ladeContent() {

  let r = "";

  // *** //

r+= block("div",

single("img",[ {name: "src",wert: "bilder/ball1.png"},{name: "class",wert: "ball"},{name:"id",wert:"ball1"}])+

single("img",[ {name: "src",wert: "bilder/ball2.png"},{name: "class",wert: "ball"},{name:"id",wert:"ball2"}])+

single("img",[ {name: "src",wert: "bilder/ball3.png"},{name: "class",wert: "ball"},{name:"id",wert:"ball3"}])+

single("img",[ {name: "src",wert: "bilder/ball4.png"},{name: "class",wert: "ball"},{name:"id",wert:"ball4"}]));

return r;}

 // Funktion zum Wechseln der Klassen für alle Bilder

 function changeAllImageClasses() {

  animationsKlasse.forEach((imageId) => {

    const image = document.getElementById(imageId);

    const currentClass = image.classList[1];

    switch (currentClass) {

    case "fallenderBall":

      image.classList.remove("fallenderBall");

      image.classList.add("zerren");

     

      break;

    case "zerrung":

      image.classList.remove( "zerren");

      image.classList.add("farben-zauber");

      break;

    case "farben-zauber":

      image.classList.remove( "farben-zauber");

      image.classList.add("gemischtes");

      break;

    case "gemischtes":

      image.classList.remove( "gemischtes");

      image.classList.add("fallenderBall");

     

      break;

    default:

      image.classList.add("fallenderBall");

  }

 

});

}

  // *** //

 // Setze die Intervalle für den Klassenwechsel der Bilder
 setTimeout(changeAllImageClasses, 5250); 
 // Wechselt die Klasse alle 5.25 Sekunden
//setTimeout
setTimeout(changeAllImageClasses, 3500);

setTimeout(changeAllImageClasses,7200 );

setTimeout(changeAllImageClasses, 9500);

 

 

 
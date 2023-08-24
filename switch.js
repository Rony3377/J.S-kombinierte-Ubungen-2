/* * * * * * * * * * * * * * * * * * * * * * * * *
 * Finde die Fehler und behebe sie. Dann schau
 * die die anderen Kommentare an und beantworte
 * die Fragen.
 * * * * * * * * * * * * * * * * * * * * * * * * *
 *
 * switch prüft immer auf Gleichheit. Es ist vergleichbar mit
 * dem Ausdruck:
 *                 if (...)
 *                 else if (...)
 *                 else if (...)
 *                 else if (...)
 *                 else if (...)
 *                 else
 *
 * Der Aufbau ist wie folgt:
 *
 *                 switch(wert1)
 *                 {
 *                     case wert2:     // entspricht if
 *                     case wert3:     // entspricht else if
 *                     case wert4:     // entspricht else if
 *                     case wert5:     // entspricht else if
 *                     default:        // entspricht else
 *                 }
 *
 * Das logischer ODER wird erreicht, in dem man mehrere
 * case-Fälle einfach nebeneinander oder untereinander scheibt.
 *
 * Jede Prüfungsanteil wird mit einem "break" oder "return"
 * abgeschlossen. Beispiele:
 *
 * switch(x)         switch(x)         switch(x)
 * {                 {                 {
 *   case 1:           case 1:           case 1:
 *      ...               ...            case 2:
 *      break;            return n;         break; ODER return n;
 *   case 2:           case 2:           case 3:
 *      ...               ...            case 4:
 *      break;            return n;         break; ODER return n;
 *   default:           default:         default:
 *      ...               ...               ...
 *      break;            return n;         break; ODER return n;
 * }                 }                 }
 *
 * * * * * * * * * * * * * * * * * * * * * * * * */

function ladeContent() {
  let r = "";
  // *** //
  r +=
    block("div", "", [
      {
        name: "id",
        wert: "ausgabe"
      }
    ]) +
    single("hr") +
    block("button", "Neu", [
      {
        name: "onclick",
        wert: "hinzu()"
      }
    ]);
  // *** //
  return r;
}

/* * * * * * * * * * * * * * * * * * * * * * * * *
 * Die Funktion soll die Eingabe überprüfen und
 * eine passende Antwort in den HTML ausgeben:
 *
 * Wichtig: Kleine und große Buchstaben müssen
 * beide erkannt werden. Also a und A muss
 * erkannt werden. Nutze toLowerCase() oder
 * toUpperCase() als Lösung.
 *
 * 1. Wenn der erste Buchstabe A, C, J oder R
 *    ist, dann der Hintergrund SkyBlue, der Text
 *    in navy Farben sein. Außerdem soll der Text
 *    wie folgt formuliert werden:
 *
 *    Deine Eingabe lautet: ...
 *
 * 2. Wenn der erste Buchstabe G, H, P oder R ist,
 *    dann wird der Hintergrund Grau, der Text
 *    in crimson Farben sein. Der Text soll wie
 *    folgt formuliert werden:
 *
 *    Du hast folgendes eingegeben: ...
 *
 * 3. In allen anderen Fällen gilt:
 *
 *    3.1 wenn der Text mindestens 10 Zeichen lang
 *        ist und nicht mehr als 20 Zeichen lang
 *        ist, dann wird der Text komplett in
 *        Großbuchstaben dargestellt. Der Hintergrund
 *        ist dann Rot und der Text ist Gelb.
 *
 *    3.2 wenn der Text mindestens 21 Zeichen lang
 *        ist und nicht mehr als 30 Zeichen lang
 *        ist, dann wird der Text komplett in
 *        Kleinbuchstaben dargestellt. Der
 *        Hintergrund wird Indigo, der Text wird
 *        aliceblue Farben.
 *
 *    3.3 Wenn der Text länger als 31 Zeichen lang
 *        ist und der zweite Buchstabe ist eines
 *        eines der folgenden:
 *
 *        3.3.1 A, B, M, N, D enthält, dann wird
 *              die Textfarbe Indigo und
 *              die Hintergrundfarbe Gray.
 *
 *        3.3.1 E, I, O, U enthält, dann wird
 *              die Textfarbe aliceblue und
 *              die Hintergrundfarbe navy.
 *
 *     Tipp:
 *
 *          Für >= und <= sowie für && und ||
 *          gibt es in switch keine direkte Lösung.
 *          Du kannst jedoch mehrere case-Angaben
 *          machen, die für denselben Stück Code
 *          führen sollen. Beispiel:
 *
 *          case a: case b: case c: case d:
 *                ...;
 *                break;
 *          case e: case f: case g:
 *                ...;
 *                break;
 * * * * * * * * * * * * * * * * * * * * * * * * */

const hinzu = () => {
  const eingabe = prompt("Tipp was ein:");
  // *** //
  let ergebnis = "";
  // *** //
  switch (eingabe[0].toUpperCase()) {
    case "A":
    case "C":
    case "J":
    case "R":
      ergebnis += `<p style = "background-color:skyblue:color:navy;">Deine Eingabe lautet: ${eingabe} </p>`;
      break;
    case "G":
    case "H":
    case "B":
    case "R":
      ergebnis += `<p style = "background-color:gray:color:crimson;">Du hast folgendes eingegeben: ${eingabe} </p>`;
      break;
    case 10: case 11: case 12: case 13: case 14: case 15:
    case 16: case 17: case 18: case 19: case 20:
      ergebnis += `<p style = "background-color:red:color:yellow;"> ${eingabe.toUpperCase()} </p>`;
      break;
    case 21: case 22: case 23: case 24: case 25: case 26: case 27: case 28: case 29: case 30:
      ergebnis += `<p style = "background-color:Indigo:color:aliceblue;"> ${eingabe.toLowerCase()} </p>`;
      break;
    default: {
      switch (eingabe[1].toUpperCase()) {
        case "A":
        case "B":
        case "M":
        case "N":
        case "D": {
          let status = false;
          for (let x = 0; x < eingabe.length; x++) {
            switch (x) {
              case 0:
                ergebnis += `<span style = "background-color:gray;color:Indigo;">${eingabe[x]}</span>`;
                break;
              default:
                switch (eingabe[x]) {
                  case ' ': case '.': case ',':
                    status = true;
                    ergebnis += `<span style = "color:Indigo;">${eingabe[x]} </span>`;
                    break;
                  default:
                    switch (status) {
                      case true:
                        status = false;
                        ergebnis += `<span style = "background-color:gray;color:Indigo;">${eingabe[x]}</span>`;
                        break;
                      default:
                        ergebnis += `<span style = "color:black;">${eingabe[x]}</span>`;
                        break;
                    }
                }
            }
          }
        }
      }
    }
    
      switch (eingabe[1].toUpperCase()) {
        case "E":
        case "I":
        case "O":
        case "U":
          {
            let status = false;
            for (let x = 0; x < eingabe.length; x++) {
              switch (x) {
                case 0:
                  ergebnis += `<span style = "background-color:navy;color:aliceblue;">${eingabe[x]}</span>`;
                  break;
                default:
                  switch (eingabe[x]) {
                    case '': case '.': case ',':
                      status = true;
                      ergebnis += `<span style = "background-color:navy;color:aliceblue;">${eingabe[x]} </span>`;
                      break;
                    default:
                      switch (status) {
                        case true:
                          status = false;
                          ergebnis += `<span style = "background-color:navy;">${eingabe[x]}</span>`;
                          break;
                        default:
                          ergebnis += `<span style = "color:black;">${eingabe[x]}</span>`;
                          break;
                      }
                  }
              }
            }
          }
      
    }
  }






  // *** //
  html("ausgabe").innerHTML += block("p", ergebnis);
};

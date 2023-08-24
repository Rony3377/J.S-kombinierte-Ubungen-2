/* * * * * * * * * * * * * * * * * * * * * * * * *
 * Finde die Fehler und behebe sie. Dann schau
 * die die anderen Kommentare an und beantworte
 * die Fragen.
 * * * * * * * * * * * * * * * * * * * * * * * * *
 *
 * Der if-Statement sieht wie folgt aus:
 *
 * if ( ... )       -> Beispiel -> if ( x == b )  -> WENN
 *    ...;
 * else if (...)    -> Beispiel -> else if (x==b) -> ODER WENN
 *    ...;
 * else ...;        -> Beispiel else ...;         -> SONST
 *
 * Das was in einem Statement liegt, nennt man
 * Bedingung:
 *
 * if ( Bedingung )
 *      ---------
 *
 * Eine Bedingung besteht aus mindestens einem
 * Argument:
 *
 * if ( x == b )
 *      ------
 *
 * Es ist möglich, das eine Bedingung aus mehreren
 * Argumenten zusammengesetzt wird:
 *
 * if ( x == b && a > c && d < e )
 *      ------    -----    -----
 *             UND      UND
 *
 * Es ist ebenso möglich, dass mehrere Bedingungen
 * für denselben Block definiert werden können:
 *
 * if ( x == b && a > c || x != b && d < e )
 *      ------    -----                        Bedingung 1
 *            UND
 *                         ------    -----     Bedingung 2
 *                                UND
 *                     ODER
 *
 * Ein Argument besteht aus entweder einen Begriff:
 *
 *    1. Variable         -> Hat der Variable einen Wert?
 *    2. Konstante        -> Hat der Variable einen Wert?
 *    3. Array            -> Hat der Array verfügbare Einträge?
 *    4. Objekt           -> Ist das Objekt gültig?
 *    5. Funktion         -> Liefert die Funktion irgendwas ungleich 0?
 *    6. Mischtext        -> Ist der Text NICHT leer?
 *    7. Komplexer Ausdruck z.B. (a + b) * c -> Ist das Ergebnis ungleich 0?
 *
 * Ein Argument kann auch aus zwei Operanden und
 * einem Operator besteht.
 *
 * if ( LinkerOperand  Operator  RechterOperand )
 *
 * Ein Operand kann wiederum sein:
 *
 *    1. Variable
 *    2. Konstante
 *    3. Array
 *    4. Objekt
 *    5. Funktion
 *    6. Mischtext
 *    7. Komplexer Ausdruck
 *
 * Der Operator entscheidet, was für ein Vergleich
 * durchgeführt wird:
 *
 * ==      Wert1 und Wert2 sollen gleich sein
 * ===     Wert1 und Wert2 sollen gleich sein und vom selben Typ sein
 *
 * !=      Wert1 und Wert2 sollen unterschiedlich sein
 * !==     Wert2 und Wert2 sollen unterschiedlich sein und verschiedene Typen haben
 *
 * >=      Wert1 soll größer oder gleich Wert2 sein
 * >       Wert1 soll größer als Wert2 sein
 *
 * <=      Wert1 soll kleiner oder gleich Wert2 sein
 * <       Wert1 soll kleiner als Wert2 sein
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
 *        3.3.1 E, I, O, U. Dann werden alle
 *              Buchstaben, mit denen je ein Wort
 *              beginnt Fett (<b>) und Indigo. Der
 *              restliche Text wird klein, kursiv
 *              (<i>) und in Farbe dunkelgrau.
 *
 *        3.3.1 A, B, M, N, D. Dann werden alle
 *              Buchstaben, mit denen je ein Wort
 *              beginnt oder endet, Fett (<b>)
 *              und der Hintergrund wird indigo,
 *              der Buchstabe wird hotpink. Der
 *              restliche Text bleibt in Schwarz.
 *
 *        Tipp:
 *             Für den Wortanfang und Wortende
 *             prüfe auf das Leerzeichen ' ' davor
 *             bzw. danach.
 * * * * * * * * * * * * * * * * * * * * * * * * */

const hinzu = () => {
  const eingabe = prompt("Tipp was ein:");
  // *** //
  let ergebnis = "";
  // *** //
  if (eingabe[0].toUpperCase() === "A" ||
    eingabe[0].toUpperCase() === "C" ||
    eingabe[0].toUpperCase() === "J" ||
    eingabe[0].toUpperCase() === "R")
    ergebnis += `<p style = "background-color:skyblue:color:navy;">Deine Eingabe lautet: ${eingabe} </p>`;
  else if (eingabe[0].toUpperCase() === "G" ||
    eingabe[0].toUpperCase() === "H" ||
    eingabe[0].toUpperCase() === "B" ||
    eingabe[0].toUpperCase() === "R")
    ergebnis += `<p style = "background-color:gray:color:crimson;">Du hast folgendes eingegeben: ${eingabe} </p>`;
  else {
    if (eingabe.length >= 10 && eingabe.length <= 20)
      ergebnis += `<p style = "background-color:red:color:yellow;"> ${eingabe.toUpperCase()} </p>`;
    else if (eingabe.length >= 21 && eingabe.length <= 30)
      ergebnis += `<p style = "background-color:Indigo:color:aliceblue;"> ${eingabe.toLowerCase()} </p>`;
    else if (eingabe.length >= 31) {
      if (eingabe[1].toUpperCase() === "E" ||
        eingabe[1].toUpperCase() === "I" ||
        eingabe[1].toUpperCase() === "O" ||
        eingabe[1].toUpperCase() === "U") {
        let status = false;
        for (let x = 0; x < eingabe.length; x++) {
          if (x == 0)
            ergebnis += `<b style = "color:Indigo;">${eingabe[x]}</b>`;
          else {
            if (eingabe[x] == ' ' || eingabe[x] == '.' || eingabe[x] == ',') {
              status = true;
              ergebnis += `<i style = "color:darckgray;">${eingabe[x]}</i>`;
            }
            else {
              if (status == true) {
                status = false;
                ergebnis += `<b style = "color:Indigo;">${eingabe[x]}</b>`;
              }
              else
                ergebnis += `<i style = "color:darckgray;">${eingabe[x]}</i>`;
            }
          }
        }
      }
    }
    else if (eingabe[1].toUpperCase() === "A" ||
      eingabe[1].toUpperCase() === "B" ||
      eingabe[1].toUpperCase() === "M" ||
      eingabe[1].toUpperCase() === "N" ||
      eingabe[1].toUpperCase() === "D") {
      let status = false;
      for (let x = 0; x < eingabe.length; x++) {
        if (x == 0)
          ergebnis += `<b style = "background-color:Indigo;">${eingabe[x]}</b>`;
        else {
          if (eingabe[x] == '' || eingabe[x] == '.'  || eingabe[x] == ',') {
            status = true;
            ergebnis += `<i style = "color:hotpink;">${eingabe[x]} </i>`;
          }
          else {
            if (status == true) {
              status = false;
              ergebnis += `<b style = "background-color:Indigo;">${eingabe[x]}</b>`;
            }
            else
              ergebnis += `<i style = "color:black;">${eingabe[x]}</i>`;
          }
        }
      }
    }
  }

  // *** //
  html("ausgabe").innerHTML += block("p", ergebnis);
};

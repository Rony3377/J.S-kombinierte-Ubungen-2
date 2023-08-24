/* * * * * * * * * * * * * * * * * * * * * * * * *
 * Finde die Fehler und behebe sie. Dann schau
 * die die anderen Kommentare an und beantworte
 * die Fragen.
 * * * * * * * * * * * * * * * * * * * * * * * * *
 *
 * Der Ternary Operator ist eine Art Kurzschreibweise vom
 * if-else-Statement. Beispiel:
 *
 *                 if (...)                ... ?      WENN
 *                       ...                 ...
 *                 else                    :          SONST
 *                       ...                 ...
 *
 * Es ist möglich den Ternary Operator zu verschachteln:
 *
 *                 if (...)                ... ?      WENN
 *                       ...                 ...
 *                 else                    :          ODER
 *                 if (...)                ... ?      WENN
 *                       ...                 ...
 *                 else                    :          ODER
 *                 if (...)                ... ?      WENN
 *                       ...                 ...
 *                 else                    :          SONST
 *                       ...                 ...
 *
 * Logische Verknüpfungen werden mit && realisiert.
 * Zum Beispiel: a == 1 && b == 2 ? ... -> Wenn a = 1 und b = 2
 *
 * Logisches ODER wird mit zweich Strichen || gemacht.
 * Zum Beispiel: a == 1 || a == 2 ? ... -> Wenn a = 1 oder a = 2
 *
 * Eine Bedingung wird mit Hilfe von Operatoren geprüft.
 * Eine Bedingung besteht aus zwei Werten und einem Operator.
 * Beispiel: Wert1 == Wert2
 *
 * Die Operatoren sind:
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
 * 3. In allen anderen Fällen gibt den Text
 *    ohne Farben, einfach normal, folgendermaßen
 *    aus:
 *
 *    Text: ...
 *
 * * * * * * * * * * * * * * * * * * * * * * * * */

const hinzu = () => {
  const eingabe = prompt("Tipp was ein:");
  // *** //
  let ergebnis = "";
  // *** //
  
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
  else
  ergebnis += `text: ${eingabe} `;
  // *** //
  html("ausgabe").innerHTML += block("p", ergebnis);
};

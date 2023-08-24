/* * * * * * * * * * * * * * * * * * * * * * * * *
 * Finde die Fehler und behebe sie. Dann schau
 * die die anderen Kommentare an und beantworte
 * die Fragen.
 * * * * * * * * * * * * * * * * * * * * * * * * */

/* * * * * * * * * * * * * * * * * * * * * * * * *
 * Was bedeutet (x, y) => ... ?
 * * * * * * * * * * * * * * * * * * * * * * * * */

const rechnen = (a, b, c) => {
  switch (a) {
    case "+":
      return nimmWert(b, c, (x, y) => x + y);
    case "-":
      return nimmWert(b, c, (x, y) => x - y);
    case "*":
      return nimmWert(b, c, (x, y) => x * y);
    case ":":
    case "/":
      return nimmWert(b, c, (x, y) => x / y);
    default:
      return 0;
  }
};

/* * * * * * * * * * * * * * * * * * * * * * * * *
 * Woher weiß diese Funktion, welche Rechenmethode
 * sie anwenden muss?
 * * * * * * * * * * * * * * * * * * * * * * * * */

const nimmWert = (a, b, c) => c(a, b);

/* * * * * * * * * * * * * * * * * * * * * * * * *
 * Beschreibe was hier Schritt für Schritt passiert
 * * * * * * * * * * * * * * * * * * * * * * * * */

function ladeContent() {
  let r = "";
  // *** //
  const werte = [
    { zahl: [5, -8], weg: "+" },
    { zahl: [5, 8], weg: "+" },
    { zahl: [-5, 8], weg: "-" },
    { zahl: [7, 12], weg: "*" },
    { zahl: [4, 9], weg: "/" },
    { zahl: [12, -4], weg: "+" },
    { zahl: [7, -9], weg: "-" },
    { zahl: [21, 12], weg: "/" },
    { zahl: [13, 11], weg: "*" },
    { zahl: [8, 0.75], weg: "%" },
    { zahl: [0.25, 1.75], weg: "-" },
    { zahl: [8, 0.75], weg: "*" }
  ].forEach((e) => {
    r += block(
      "p",
      `${e.zahl[0]} ${e.weg} ${e.zahl[1]} = ${rechnen(
        e.weg,
        e.zahl[0],
        e.zahl[1]
      )}`
    );
  });
  // *** //
  return r;
}

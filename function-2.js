/* * * * * * * * * * * * * * * * * * * * * * * * *
 * Finde die Fehler und behebe sie. Dann schau
 * die die anderen Kommentare an und beantworte
 * die Fragen.
 * * * * * * * * * * * * * * * * * * * * * * * * */

function ladeContent() {
  let r = "";
  // *** //
  r +=
    /* * * * * * * * * * * * * * * * * * * * * * *
     * Abschnitt 1
     * * * * * * * * * * * * * * * * * * * * * * */
    abschnittA({
      a: "div",
      b: "table",
      c: [
        {
          wert: [
            { tag: "th", wert: "Land" },
            { tag: "th", wert: "Stadt" },
            { tag: "th", wert: "Sprache" },
            { tag: "th", wert: "Währung" }
          ]
        },
        {
          wert: [
            { tag: "td", wert: "Süd Korea" },
            { tag: "td", wert: "Seoul" },
            { tag: "td", wert: "Koreanisch" },
            { tag: "td", wert: "Won" }
          ]
        },
        {
          wert: [
            { tag: "td", wert: "Aserbaidschan" },
            { tag: "td", wert: "Baku" },
            { tag: "td", wert: "Türkisch" },
            { tag: "td", wert: "Manat" }
          ]
        },
        {
          wert: [
            { tag: "td", wert: "Saudi Arabien" },
            { tag: "td", wert: "Riyad" },
            { tag: "td", wert: "Arabisch" },
            { tag: "td", wert: "Riyal" }
          ]
        },
        {
          wert: [
            { tag: "td", wert: "Argentinien" },
            { tag: "td", wert: "Buenos Aires" },
            { tag: "td", wert: "Spanisch" },
            { tag: "td", wert: "Peso" }
          ]
        }
      ]
    }) +
    /* * * * * * * * * * * * * * * * * * * * * * *
     * Abschnitt 2
     * * * * * * * * * * * * * * * * * * * * * * */
    abschnittB({
      titel: "Länder der Welt",
      daten: [
        {
          tag: "ul",
          felder: ["Brasilien", "Venezuela", "Equador", "Peru", "Chile"]
        },
        {
          tag: "ol",
          felder: ["Turkmenistan", "Nepal", "Burundi", "China", "Malaysia"]
        }
      ]
    });
  // *** //
  return r;
}

/* * * * * * * * * * * * * * * * * * * * * * * * *
 * Erstelle die Funktion für Abschnitt 1
 * * * * * * * * * * * * * * * * * * * * * * * * */


const abschnittA = ({ a, b, c }) => {

  let result = "";

  result += `<${a}>`;

  result += `<${b}>`;

  c.forEach((item) => {

    result += `<tr>`;

    for (let i of item.wert) {

      result += `<${i.tag}>${i.wert}</${i.tag}>`;

    }

    result += `</tr>`;

  });

  result += `</${b}>`;

  result += `</${a}>`;

  return result;

};

/* * * * * * * * * * * * * * * * * * * * * * * * *
 * Erstelle die Funktion für Abschnitt 2
 * * * * * * * * * * * * * * * * * * * * * * * * */
const abschnittB = ({ titel, daten }) => {

  let a = "";

  a += `<h3>${titel}</h3>`;

  for (let i of daten) {

    a += `<${i.tag}>`;

    i.felder.forEach((e) => {

      a += `<li>${e}</li>`;

    });

    a += `</${i.tag}>`;

  }

  return a;

};

 


/* * * * * * * * * * * * * * * * * * * * * * * * *
 * Finde die Fehler und behebe sie. Dann schau
 * die die anderen Kommentare an und beantworte
 * die Fragen.
 * * * * * * * * * * * * * * * * * * * * * * * * */

function ladeContent() {
  let r = "";
  // *** //
  /* * * * * * * * * * * * * * * * * * * * * * * * *
   * Aufgabe 1
   * * * * * * * * * * * * * * * * * * * * * * * * */
  const daten = {
    name: [
      { text: "Neue Testdaten", tag: "h3" },
      { text: "Mit etwas Pepp", tag: "h4" }
    ],
    feld: {
      a: [
        { typ: "Frucht", bez: ["Apfel", "Orange"] },
        { typ: "Frucht", bez: ["Birne", "Pflaume"] },
        { typ: "Frucht", bez: ["Kiwi", "Avocado"] },
        { typ: "Frucht", bez: ["Mango", "Kokosnuss"] },
        { typ: "Frucht", bez: ["Erdbeer", "Brombeer"] }
      ],
      b: [
        { typ: "Schokolade", bez: ["Milka", "Hanuta"] },
        { typ: "Schokolade", bez: ["Bounty", "Snickers"] },
        { typ: "Schokolade", bez: ["Knoppers", "Riegel"] },
        { typ: "Schokolade", bez: ["Kitkat", "Crunchy"] },
        { typ: "Schokolade", bez: ["Cadburry", "Lindt"] }
      ],
      c: [
        { typ: "Gebäck", bez: ["Waffel", "Crepe"] },
        { typ: "Gebäck", bez: ["Keks", "Müsli"] },
        { typ: "Gebäck", bez: ["Brownie", "Muffin"] },
        { typ: "Gebäck", bez: ["Kuchen", "Donut"] },
        { typ: "Gebäck", bez: ["Torte", "Pudding"] }
      ]
    }
  };
  // *** //
  daten.name.forEach((e) => {
    r += block(e.tag , e.text);
  });
  // *** //
  r +=
    list(
      "ul",
      (() => {
        const j = [];
        // *** //
        daten.feld.a.forEach((e) =>
          j.push({ wert: `${e.bez[0]} und ${e.bez[1]} sind ${e.typ}` })
        );
        // *** //
        return j;
      })()
    ) +
    single("hr") 
    list(
      "ul",
      (() => {
        const j = [];
        // *** //
        daten.feld.b.forEach((e) =>
          j.push({ wert: `${e.bez[0]} und ${e.bez[1]} ${e.typ}` })
        );
        // *** //
        return j;
      })()
    ) +
    single("hr") +
    list(
      "ul",
      (() => {
        const j = [];
        // *** //
        daten.feld.c.forEach((e) =>
          j.push({ wert: `${e.bez[0]} und ${e.bez[1]} sind ${e.typ}` })
        );
        // *** //
        return j;
      })()
    );
  /* * * * * * * * * * * * * * * * * * * * * * * * *
   * Aufgabe 2
   * * * * * * * * * * * * * * * * * * * * * * * * */
  r += block("h3", "Testdaten mal anders");
  // *** //
  const neu = [];
  // *** //
  for (let f of daten.feld.a) {
    neu.push({
      a: f.bez[0],
      b: f.bez[1],
      c: f.typ
    });
  }
  // *** //
  for (let f of daten.feld.b) {
    neu.push({
      a: f.bez[0],
      b: f.bez[1],
      c: f.typ
    });
  }
  // *** //
  for (let f of daten.feld.c) {
    neu.push({
      a: f.bez[0],
      b: f.bez[1],
      c: f.typ
    });
  }
  // *** //
  r += block(
    "ul",
    (() => {
      let rr = "";
      // *** //
      for (let j = neu.length - 1; j > -1; j--) {
        let e = neu[j];
        // *** //
        rr += block(
          "li",
          `${e.c} &rarr; ${e.a} und ${
            e.b
          } &rarr; Buchstaben : ${e.c.toLowerCase()}, ${e.a[
            e.a.length - 1
          ].toUpperCase()}, ${e.b[e.b.length - 1].toUpperCase()}`
        );
      }
      // *** //
      return rr;
    })()
  );
  /* * * * * * * * * * * * * * * * * * * * * * * * *
   * Aufgabe 3
   * * * * * * * * * * * * * * * * * * * * * * * * */
  r += block("h3", "Abschließend");
  // *** //
  let mengen = {
    a: 0,
    b: 0,
    c: 0
  };
  // *** //
  for (let n of neu) {
    switch (n.a[0].toLowerCase()) {
      case "k":
      case "m":
        mengen.a += n.a.length;
        break;
      case "c":
      case "b":
        mengen.b += n.a.length;
        break;
      default:
        mengen.c += n.a.length;
        break;
    }
    // *** //
    switch (n.b[0].toLowerCase()) {
      case "k":
      case "m":
        mengen.a += n.b.length;
        break;
      case "c":
      case "b":
        mengen.b += n.b.length;
        break;
      default:
        mengen.c += n.b.length;
        break;
    }
  }
  // *** //
  r +=
    block("p", `Anzahl mit K und M beginnender Bezeichner: ${mengen.a}`) +
    block("p", `Anzahl mit C und B beginnender Bezeichner: ${mengen.b}`) +
    block("p", `Anzahl sonstiger Bezeichner: ${mengen.c}`) +
    block("p", `Gesamt: ${mengen.a + mengen.b + mengen.c}`);
  // *** //
  return r;
}

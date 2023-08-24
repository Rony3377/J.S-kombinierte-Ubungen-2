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
    name: { text: "Testdaten", tag: "h3" },
    feld: [
      [
        { typ: "Frucht", bez: "Apfel" },
        { typ: "Frucht", bez: "Birne" },
        { typ: "Frucht", bez: "Kiwi" },
        { typ: "Frucht", bez: "Mango" },
        { typ: "Frucht", bez: "Erdbeer" }
      ],
      [
        { typ: "Schokolade", bez: "Milka" },
        { typ: "Schokolade", bez: "Bounty" },
        { typ: "Schokolade", bez: "Knoppers" },
        { typ: "Schokolade", bez: "Kitkat" },
        { typ: "Schokolade", bez: "Cadburry" }
      ],
      [
        { typ: "Gebäck", bez: "Waffel" },
        { typ: "Gebäck", bez: "Keks" },
        { typ: "Gebäck", bez: "Brownie" },
        { typ: "Gebäck", bez: "Kuchen" },
        { typ: "Gebäck", bez: "Torte" }
      ]
    ]
  };
  // *** //
  r +=
    block(daten.name.tag, daten.name.text) +
    list(
      "ul",
      (() => {
        const j = [];
        // *** //
        daten.feld[0].forEach((e) => j.push({ wert: `${e.bez} ist ${e.typ}` }));
        // *** //
        return j;
      })()
    )+
    single("hr") +
    list(
      "ul",
      (() => {
        const j = [];
        // *** //
        daten.feld[1].forEach((e) => j.push({ wert: `${e.bez} ist ${e.typ}` }));
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
        daten.feld[2].forEach((e) => j.push({ wert: `${e.bez} ist ${e.typ}` }));
        // *** //
        return j;
      })()
    );
  /* * * * * * * * * * * * * * * * * * * * * * * * *
   * Aufgabe 2
   * * * * * * * * * * * * * * * * * * * * * * * * */
  r += block("h3" ,"Testdaten mal anders");
  // *** //
  const neu = [];
  // *** //
  for (let f of daten.feld) {
    for (let g of f) neu.push(g);
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
          `${e.typ} &rarr; ${
            e.bez
          } &rarr; Buchstaben : ${e.typ[0].toLowerCase()}, ${e.bez[
            e.bez.length - 1
          ].toUpperCase()}`
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
    switch (n.bez[0].toLowerCase()) {
      case "k":
      case "m":
        mengen.a += n.bez.length;
        break;
      case "c":
      case "b":
        mengen.b += n.bez.length;
        break;
      default:
        mengen.c += n.bez.length;
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

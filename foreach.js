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
  const a = ["Apfel", "Birne", "Mango", "Kiwi", "Pflaume", "Orange"];
  // *** //
  const b = [
    ["Max", "Mustermann"],
    ["Olaf", "Scholz"],
    ["Ed", "Harris"],
    ["Jackie", "Chan"]
  ];
  // *** //
  const c = [
    { a: "Deutschland", b: "Berlin" },
    { a: "Polen", b: "Warschau" },
    { a: "Türkei", b: "Ankara" }
  ];
  // *** //
  const d = [
    { a: ["USA", "Washington D.C."] },
    { a: ["Kanada", "Ottawa"] },
    { a: ["Russland", "Moskau"] },
    { a: ["China", "Peking"] }
  ];
  // *** //
  r += block("h3", "Array a");
  a.forEach((e) => (r += block("p", e)));
  r += single("hr");
  // *** //
  r += block("h3", "Array b");
  b.forEach((e) => {
    let n = "";
    // *** //
    e.forEach((g) => {
      n += block("li", g);
    });
    r += single("hr");
    // *** //
    r += block("h4", "Feld") + block("ul", n);
  });
  // *** //
  r += block("h3", "Array c");
  c.forEach((e) => {
    r += block("h4", e.a) + block("p", e.b);
  });
  r += single("hr");
  // *** //
  r += block("h3", "Array d");
  d.forEach((e) => {
    let n = "";
    // *** //
    e.a.forEach((g) => {
      n += block("li", g);
    });
    // *** //
    r += block("h4", "Feld") + block("p", n);
  });
  r += single("hr");
  /* * * * * * * * * * * * * * * * * * * * * * * * *
   * Erstelle eigene Arrays insgesamt 4 Stück,
   * die ähnlich sind wie die Array a, b, c und d.
   *
   * Gib jedes davon aus. Kommentiere deinen Code
   * und beschreibe, wie die Daten gelesen und
   * geschrieben werden.
   * * * * * * * * * * * * * * * * * * * * * * * * */
  const deinArray1 = ["salat", "tomaten", "gürken", "übergeni", "zukini", "katoffel"];
  const deinArray2 = [
    ["amina", "elsayed"],
    ["fatma", "ali"],
    ["amira", "mohamed"],
    ["hend", "ashraf"],
  ];
  const deinArray3 = [
    { a: "ägypten", b: "kairo" },
    { a: "maroko", b: "eldar elpaidaa" },
    { a: "libia", b: "tarablos" },
  ];
  const deinArray4 = [
    { a: ["deutschland", "berlin"] },
    { a: ["italia", "rom"] },
    { a: ["frankreisch", "paris"] },
    { a: ["niederland", "amsterdam"] },
  ];
  // *** //
   r += block("h3", "Array a");
   deinArray1.forEach((e) => (r += block("p", e)));
   r += single("hr");
  // *** //
  r += block("h3", "Array b");
  deinArray2.forEach((e) => {
    let n = "";
    // *** //
    e.forEach((g) => {
      n += block("li", g);
    });
    r += single("hr");
    // *** //
    r += block("h4", "Feld") + block("ul", n);
  });
  // *** //
  r += block("h3", "Array c");
  deinArray3.forEach((e) => {
    r += block("h4", e.a) + block("p", e.b);
  });
  r += single("hr");
  // *** //
  r += block("h3", "Array d");
  deinArray4.forEach((e) => {
    let n = "";
    // *** //
    e.a.forEach((g) => {
      n += block("li", g);
    });
    // *** //
    r += block("h4", "Feld") + block("p", n);
  });
  return r;
}

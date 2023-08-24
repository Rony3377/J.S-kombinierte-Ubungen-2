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
    ["Jackie", "Chan"],
  ];
  // *** //
  const c = [
    { a: "Deutschland", b: "Berlin" },
    { a: "Polen", b: "Warschau" },
    { a: "Türkei", b: "Ankara" },
  ];
  // *** //
  const d = [
    { a: ["USA", "Washington D.C."] },
    { a: ["Kanada", "Ottawa"] },
    { a: ["Russland", "Moskau"] },
    { a: ["China", "Peking"] },
  ];
  // *** //
  r += block("h3", "Beispiele");
  // *** //
  for (let e of a) r += block("p", e);
  r += single("hr");
  // *** //
  for (let e of b) r += block("p", block("b", e[0]) + " " + block("u", e[1]));
  r += single("hr");
  // *** //
  for (let e of c)
    r += block(
      "p",
      "Land: " + block("b", e. a) + ", Hauptstadt: " + block("u", e. b)
    );
  r += single("hr");
  // *** //
  for (let e of d)
    r += block(
      "p",
      "Land: " + block("b", e.a[0]) + ", Hauptstadt: " + block("u", e.a[1])
    );
  // *** //
  r += single("hr");
  // *** //
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
  r += block("h3", "Beispiele");
  // *** //
  for (let e of deinArray1) r += block("p", e);
  r += single("hr");
  // *** //
  for (let e of deinArray2) r += block("p", block("b", e[0]) + " " + block("u", e[1]));
  r += single("hr");
  // *** //
  for (let e of  deinArray3)
    r += block(
      "p",
      "Land: " + block("b", e.a) + ", Hauptstadt: " + block("u", e.b)
    );
  r += single("hr");
  // *** //
  for (let e of deinArray4)
    r += block(
      "p",
      "Land: " + block("b", e.a[0]) + ", Hauptstadt: " + block("u", e.a[1])
    );
  // *** //
  return r;
}

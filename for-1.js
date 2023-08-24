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
  // -------------------------------------------- //
  // Einer Schritt
  // -------------------------------------------- //
  r += block("h3", "Einer Schritte");
  // *** //
  r += block("h4", "Vorwerts");
  // *** //
  for (let x = 0; x < a.length; x++) r += block("p", a[x]);
  r += single("hr");
  // *** //
  for (let x = 0; x < b.length; x++)
    r += block("p", block("b", b[x][0]) + " " + block("u", b[x][1]));
  r += single("hr");
  // *** //
  for (let x = 0; x < c.length; x++)
    r += block(
      "p",
      "Land: " + block("b", c[x].a) + ", Hauptstadt: " + block("u", c[x].b)
    );
  r += single("hr");
  // *** //
  for (let x = 0; x < d.length; x++)
    r += block(
      "p",
      "Land: " +
        block("b", d[x].a[0]) +
        ", Hauptstadt: " +
        block("u", d[x].a[1])
    );
  // *** //
  r += single("hr");
  // *** //
  r += block("h4", "Rückwerts");
  // *** //
  for (let x = a.length - 1; x > -1; x--) r += block("p", a[x]);
  r += single("hr");
  // *** //
  for (let x = b.length - 1; x > -1; x--)
    r += block("p", block("b", b[x][0]) + " " + block("u", b[x][1]));
  r += single("hr");
  // *** //
  for (let x = c.length - 1; x > -1; x--)
    r += block(
      "p",
      "Land: " + block("b", c[x].a) + ", Hauptstadt: " + block("u", c[x].b)
    );
  r += single("hr");
  // *** //
  for (let x = d.length - 1; x > -1; x--)
    r += block(
      "p",
      "Land: " +
        block("b", d[x].a[0]) +
        ", Hauptstadt: " +
        block("u", d[x].a[1])
    );
  // *** //
  // -------------------------------------------- //
  // Zweier Schritt
  // -------------------------------------------- //
  r += block("h3", "Zweier Schritte");
  // *** //
  r += block("h4", "Vorwerts");
  // *** //
  for (let x = 0; x < a.length; x += 2) r += block("p", a[x]);
  r += single("hr");
  // *** //
  for (let x = 0; x < b.length; x += 2)
    r += block("p", block("b", b[x][0]) + " " + block("u", b[x][1]));
  r += single("hr");
  // *** //
  for (let x = 0; x < c.length; x += 2)
    r += block(
      "p",
      "Land: " + block("b", c[x].a) + ", Hauptstadt: " + block("u", c[x].b)
    );
  r += single("hr");
  // *** //
  for (let x = 0; x < d.length; x += 2)
    r += block(
      "p",
      "Land: " +
        block("b", d[x].a[0]) +
        ", Hauptstadt: " +
        block("u", d[x].a[1])
    );
  // *** //
  r += single("hr");
  // *** //
  r += block("h4", "Rückwerts");
  // *** //
  for (let x = a.length - 1; x > -1; x -= 2) r += block("p", a[x]);
  r += single("hr");
  // *** //
  for (let x = b.length - 1; x > -1; x -= 2)
    r += block("p", block("b", b[x][0]) + " " + block("u", b[x][1]));
  r += single("hr");
  // *** //
  for (let x = c.length - 1; x > -1; x -= 2)
    r += block(
      "p",
      "Land: " + block("b", c[x].a) + ", Hauptstadt: " + block("u", c[x].b)
    );
  r += single("hr");
  // *** //
  for (let x = d.length - 1; x > -1; x -= 2)
    r += block(
      "p",
      "Land: " +
        block("b", d[x].a[0]) +
        ", Hauptstadt: " +
        block("u", d[x].a[1])
    );
  /* * * * * * * * * * * * * * * * * * * * * * * * *
   * Erstelle einen Array deiner Wahl mit Zahlen und
   * Text. Das Array soll mindestens 12 Werte enthalten.
   *
   * 1. Gib das Array vorwärts in einer Schritte aus
   * 2. Dann rückwerts in einer Schritte
   * 3. Dann wieder vorwärts in dreier Schritte
   * 4. Dann wieder rückwerts in vierer Schritte
   * * * * * * * * * * * * * * * * * * * * * * * * */
  const deinArray = ["salat", "tomaten", "gürken", "übergeni", "zukini", "katoffel","zwibel","zitrone","blumenkohl","paprika","spinat","ortopiede"]

  r += `<h3>Mein Array</h3>`;

  for (let x = 0; x < deinArray.length; x++) {

    r += block("p", deinArray[x]);

  }

  r += `<h3>Mein Array Reverse</h3>`;

  for (let x = deinArray.length - 1; x > -1; x--) {

    r += block("p", deinArray[x]);

  }

  r += `<h3>Mein Array step 2</h3>`;

  for (let x = 0; x < deinArray.length; x += 2) {

    r += block("p", deinArray[x]);

  }

  r += `<h3>Mein Array Reverse step 2</h3>`;

  for (let x = deinArray.length - 1; x > -1; x -= 2) {

    r += block("p", deinArray[x]);
    
    
  }
  return r;
}
  
 
  

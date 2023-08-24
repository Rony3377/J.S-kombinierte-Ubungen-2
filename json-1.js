/* * * * * * * * * * * * * * * * * * * * * * * * *
 * Finde die Fehler und behebe sie. Dann schau
 * die die anderen Kommentare an und beantworte
 * die Fragen.
 * * * * * * * * * * * * * * * * * * * * * * * * */

function ladeContent() {
  let r = "";
  // *** //
  /* * * * * * * * * * * * * * * * * * * * * * * * *
   * Die Struktur muss mittels block() sinnvoll
   * in das HTML-Element mit der ID "inhalt"
   * geschrieben wird.
   * * * * * * * * * * * * * * * * * * * * * * * * */
  const daten = {
    a: 102,
    b: {
      a: "Hallo",
      b: "Welt"
    },
    c: ["Die", "Welt", "ist", "rund", ":-)"],
    d: {
      a: {
        x: 23,
        y: 41
      },
      b: {
        x: [-8,11],
        y: [
          { a: 102, b: -21 },
          { a: 46, b: -17 }
        ]
      }
    },
    e: [
      {
        x: {
          a: ["Eins", "Zwei"],
          b: { a: "Cool", b: ["Drei", "Vier", "Fünf"] }
        },
        y: () => "Das ist ein Text aus einer Pfeil-Funktion :-)",
        z: (a, b) => {
          return `Wenn man ${a} und ${b} addiert, erhält man ${a + b}`;
        }
      },
      {
        x: {
          a: ["Sechs", "Sieben"],
          b: { a: "Wow", b: ["Acht", "Neun", "Zehn"] }
        },
        y: () => "Das ist ein weiterer Text aus einer Pfeil-Funktion :-)",
        z: (a, b) => {
          return `Wenn man ${a} und ${b} multipliziert, erhält man ${a * b}`;
        }
      }
    ]
  };
  //
  // Gebe immer den vollen Weg zum Wert an wie zum Beispiel:
  // daten.x.y.z[...].a[...][...].d = ...
  r += block("p", `in daten.a steht = ${daten.a}`) 
       + block("p",`${daten.b.a} ${daten.b.b}`)
       + block("p",`${daten.c[0]} ${daten.c[1]} ${daten.c[2]} ${daten.c[3]} ${daten.c[4]} `)
       + block("p",`${daten.d.a.x} ${daten.d.a.y}`)
       + block("p",`${daten.d.b.x[0]} ${daten.d.b.x[1]} ${daten.d.b.y[0].a} ${daten.d.b.y[0].b} ${daten.d.b.y[1].a} ${daten.d.b.y[1].b}`)
       + block("p",`${daten.e[0].x.a[0]} ${daten.e[0].x.a[1]} ${daten.e[0].x.b.a} ${daten.e[0].x.b.b[0]} ${daten.e[0].x.b.b[1] }${daten.e[0].x.b.b[2]} ${daten.e[0].y()} ${daten.e[0].z(5,7)}`)
       + block("p",`${daten.e[1].x.a[0]} ${daten.e[1].x.a[1]} ${daten.e[1].x.b.a} ${daten.e[1].x.b.b[0]} ${daten.e[1].x.b.b[1] }${daten.e[1].x.b.b[2]} ${daten.e[1].y()} ${daten.e[1].z(3,4)}`)
  ;
  // *** //
  return r;
}

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
    a: { a: [{ a: 302 }, { a: -88 }] },
    b: {
      a: [
        () => "Hallo Welt",
        () => "Hello World",
        function () {
          return "Hola Mondo";
        }
      ],
      b: {
        a: {
          a: {
            b: [99, 66, 33, 11],
            c: { a: "Abstrakt...", b: ["Komplex", "Übertrieben"] }
          },
          b: (e) => (e * 25) / 0.75
        }
      }
    },
    c: [
      [8, 11, 9, -2, 12, -51, 62, 18],
      [true, false, true, true, false ,false, false, true, false],
      ["Abc", "Def", "Ghi", "Jkl", "Mno", "Pqr"]
    ],
    d: {
      a: [{ n: 23 }, { n: 41 }],
      b: {
        x: { v: [-8, 11] },
        y: {
          z: [
            { a: 102, b: -21 },
            { a: 46, b: -17 }
          ]
        }
      }
    },
    e: [
      {
        x: {
          a: () => ["Eins", "Zwei"],
          b: { a: () => "Cool", b: () => ["Drei", "Vier", "Fünf"] }
        },
        y: [() => "Das ist ein Text aus einer Pfeil-Funktion :-)"],
        z: [
          {
            d: (a, b) => {
              return `Wenn man ${a} und ${b} addiert, erhält man ${a + b}`;
            }
          }
        ]
      },
      {
        x: [
          {
            a: ["Sechs", "Sieben"],
            b: { a: "Wow", b: ["Acht", "Neun", "Zehn"] }
          }
        ],
        y: [() => "Das ist ein weiterer Text aus einer Pfeil-Funktion :-)"],
        z: [
          (a, b) => {
            return `Wenn man ${a} und ${b} multipliziert, erhält man ${a * b}`;
          }
        ]
      }
    ]
  };
  //
  // Gebe immer den vollen Weg zum Wert an wie zum Beispiel:
  // daten.x.y.z[...].a[...][...].d = ...
  r += block(
    "p",
    `in daten.a steht = ${daten.a.a[0].a} ${daten.a.a[1].a} ` ) 
    + block("p",`${daten.b.a[0]()} <br> ${daten.b.a[1]()} <br> ${daten.b.a[2]()}`)
  + block("p",`${daten.b.b.a.a.b[0]} ${daten.b.b.a.a.b[1]} ${daten.b.b.a.a.b[2]} ${daten.b.b.a.a.b[3]} </br>
  ${daten.b.b.a.a.c.a}  ${daten.b.b.a.a.c.b[0]} ${daten.b.b.a.a.c.b[1]} </br>
  ${daten.b.b.a.b(7)}`)
  + block("p",`${daten.c[0][0]} ${daten.c[0][1]} ${daten.c[0][2]} ${daten.c[0][3]} ${daten.c[0][4]} ${daten.c[0][5]} ${daten.c[0][6]} ${daten.c[0][7]} </br>
  ${daten.c[1][0]} ${daten.c[1][1]} ${daten.c[1][2]} ${daten.c[1][3]} ${daten.c[1][4]} ${daten.c[1][5]} ${daten.c[1][6]} ${daten.c[1][7]} ${daten.c[1][8]} </br>
   ${daten.c[2][0]} ${daten.c[2][1]} ${daten.c[2][2]} ${daten.c[2][3]} ${daten.c[2][4]} ${daten.c[2][5]}`)
  + block("p",`${daten.d.a[0].n} ${daten.d.a[1].n} </br>
   ${daten.d.b.x.v[0]}  ${daten.d.b.x.v[1]} </br>
    ${daten.d.b.y.z[0].a} ${daten.d.b.y.z[0].b} ${daten.d.b.y.z[1].a} ${daten.d.b.y.z[1].b}`)
  + block("p",`${daten.e[0].x.a()[0]}  
  ${daten.e[0].x.a()[1]} ${daten.e[0].x.b.a()} 
   ${daten.e[0].x.b.b()[0]}  ${daten.e[0].x.b.b()[1]} 
    ${daten.e[0].x.b.b()[2]} ${daten.e[0].y[0]()}  ${daten.e[0].z[0].d(2,5)}</br> 
    ${daten.e[1].x[0].a[0]}  ${daten.e[1].x[0].a[1]} 
    ${daten.e[1].x[0].b.a} ${daten.e[1].x[0].b.b[0]} ${daten.e[1].x[0].b.b[1]}
     ${daten.e[1].x[0].b.b[2]} ${daten.e[1].y[0]()}  ${daten.e[1].z[0](2,5) }
    `)
 ; 
  // *** //
  return r;
}
 
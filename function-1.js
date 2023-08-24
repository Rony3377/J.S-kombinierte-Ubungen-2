/* * * * * * * * * * * * * * * * * * * * * * * * *
 * Finde die Fehler und behebe sie. Dann schau
 * die die anderen Kommentare an und beantworte
 * die Fragen.
 * * * * * * * * * * * * * * * * * * * * * * * * */

function ladeContent() {
  let r = "";
  // *** //
  r +=
    ladeMaske() +
    ladeExtras({
      a: "div",
      b: "h4",
      c: "Hallo Leute :-)"
    }) +
    single("hr") +
    ladeExtras({
      a: "div",
      b: "select",
      c: [
        { wert: "Köln" },
        { wert: "Berlin" },
        { wert: "Würzburg" },
        { wert: "Darmstadt" },
        { wert: "Mannheim" },
        { wert: "Magdeburg" }
      ]
    });
  // *** //
  return r;
}

/* * * * * * * * * * * * * * * * * * * * * * * * *
 * Erzeugt extra HTML-Elemente
 * * * * * * * * * * * * * * * * * * * * * * * * */

const ladeExtras = function ({ a, b, c }) {
  if (typeof c === "object") {
    return block(a, list(b, c));
  } else return block(a, block(b, c));
};

/* * * * * * * * * * * * * * * * * * * * * * * * *
 * Erzeugt eine Maske
 * * * * * * * * * * * * * * * * * * * * * * * * */

function ladeMaske() {
  let g = "";
  // *** //
  g +=
    block("h3", "Funktionen 1") +
    single("input", [
      {
        name: "id",
        wert: "f-1"
      },
      {
        name: "type",
        wert: "text"
      },
      {
        name: "placeholder",
        wert: "Tipp was ein..."
      }
    ]) +
    single("hr") +
    single("input", [
      {
        name: "id",
        wert: "f-2"
      },
      {
        mame: "type",
        wert: "number"
      },
      {
        name: "placeholder",
        wert: "Gib eine Zahl ein..."
      }
    ]) +
    single("hr") +
    block("button", "Auswerten", [
      {
        name: "onclick",
        wert: "auswerten()"
      }
    ]) +
    single("hr") +
    block("div", "", [
      {
        name: "id",
        wert: "ergebnis"
      }
    ]);
  // *** //
  return g;
}

/* * * * * * * * * * * * * * * * * * * * * * * * *
 * Klick auf den Button "Auswerten"
 * * * * * * * * * * * * * * * * * * * * * * * * */

const styles = {
  index: 0,
  style: [
    [
      {
        name: "style",
        wert:
          "background-color: rgba(120,120,120,0.25); padding: 4px; margin-bottom: 2px; border-radius: 6px;"
      }
    ],
    [
      {
        name: "style",
        wert:
          "background-color: rgba(110,110,140,0.25); padding: 4px; margin-bottom: 2px; border-radius: 6px;"
      }
    ],
    [
      {
        name: "style",
        wert:
          "background-color: rgba(135,140,110,0.25); padding: 4px; margin-bottom: 2px; border-radius: 6px;"
      }
    ]
  ]
};

const auswerten = () => {
  const e = html("ergebnis");
  // *** //
  e.innerHTML += block(
    "div",
    block("h5", html("f-2").value) + block("p", html("f-1").value),
    styles.style[styles.index]
  );
  // *** //
  if (styles.index < 2) styles.index++;
  else styles.index = 0;
  // *** //
  html("f-1").value = "";
  html("f-2").value = "";
};

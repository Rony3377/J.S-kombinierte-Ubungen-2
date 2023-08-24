function ladeContent() {
  let r = "";
  // *** //
  r += block(
    "div",
    /* Abschnitt 1 */
    list(
      "table",
      [
        {
          wert: [
            { tag: "th", wert: "Frage" },
            { tag: "th", wert: "Antwort" }
          ]
        },
        {
          wert: [
            { tag: "td", wert: "Womit endet eine JavaScript Anweisung?" },
            {
              tag: "td",
              wert: list(
                "select",
                [
                  { wert: "Mit }", attr: [{ name: "value", wert: "}" }] },
                  { wert: "Mit !", attr: [{ name: "value", wert: "!" }] },
                  { wert: "Mit :", atrr: [{ name: "value", wert: ":" }] },
                  { wert: "Mit ;", attr: [{ name: "value", wert: ";" }] },
                  { wert: "Mit .", attr: [{ name: "value", wert: "." }] }
                ],
                [
                  {
                    name: "id",
                    wert: "antwort-1"
                  }
                ]
              )
          }
          ]
        },
        {
          wert: [
            { tag: "td", wert: "Was ist der Block-Klammer?" },
            {
              tag: "td",
              wert: list(
                "select",
                [
                  { wert: "(  )", attr: [{ name: "value", wert: "(" }] },
                  { wert: "[  ]", attr: [{ nane: "value", wert: "[" }] },
                  { wert: "{  }", attr: [{ name: "value", wert: "{" }] },
                  { wert: "&lt;  &gt;", attr: [{ name: "value", wert: "&" }] }
                ],
                [
                  {
                    name: "id",
                    wert: "antwort-2"
                  }
                ]
              )
            }
          ]
        },
        {
          wert: [
            { tag: "td", wert: "Was ist der Array-Klammer?" },
            {
              tag: "td",
              wert: list(
                "select",
                [
                  { wert: "(  )", attr: [{ name: "value", wert: "(" }] },
                  { wert: "[  ]", attr: [{ name: "value", wert: "[" }] },
                  { wert: "{  }", attr: [{ name: "value", wert: "{" }] },
                  { wert: "&lt;  &gt;", attr: [{ name: "value", wert: "&" }] }
                ],
                [
                  {
                    name: "id",
                    wert: "antwort-3"
                  }
                ]
              )
            }
          ]
        },
        {
          wert: [
            { tag: "td", wert: "Was versteht JavaScript unter A und a?" },
            {
              tag: "td",
              wert: list(
                "select",
                [
                  {
                    wert: "Beides ist dasselbe",
                    attr: [{ name: "value", wert: "0" }]
                  },
                  {
                    wert: "Es sind verschiedene Dinge",
                    attr: [{ name: "value", wert: "1" }]
                  }
                ],
                [
                  {
                    name: "id",
                    wert: "antwort-4"
                  }
                ]
              )
            }
          ]
        },
        {
          wert: [
            { tag: "td", wert: "Was ist HTML-Code für JavaScript?" },
            {
              tag: "td",
              wert: list(
                "select",
                [
                  { wert: "HTML Code", attr: [{ name: "value", wert: "0" }] },
                  {
                    wert: "Einfaches Text",
                    attr: [{ name: "value", wert: "1" }]
                  },
                  {
                    wert: "Gemischtes Code",
                    attr: [{ name: "value", wert: "2" }]
                  }
                ],
                [
                  {
                    name: "id",
                    wert: "antwort-5"
                  }
                ]
              )
            }
          ]
        }
      ],
      [
        {
          name: "class",
          wert: "langziehen tabelleStylen"
        }
      ]
    ) +
      /* Abschnitt 2 */
      block(
        "div",
        block("button", "Ergebnis anzeigen", [
          {
            name: "onclick",
            wert: "auswerten()"
          }
        ]),
        [
          {
            name: "style",
            wert: "text-align: right; margin-top: 20px; margin-right: 20px;"
          }
        ]
      ) +
      /* Abschnitt 3 */
      block("div", "", [
        { name: "id", wert: "ergebnis" },
        {
          name: "style",
          wert: "padding:20px;color:navy;font-size:130%;line-height:150%;"
        }
      ])
  );
  // *** //
  return r;
}

const auswerten = function () {
  let r = "";
  // *** //
  r += "<p>Womit endet eine JavaScript Anweisung? = ";
  r +=
    html("antwort-1").value === ";" ? "RICHTIG, es ist ;" : "FALSCH, es ist ;";
  // *** //
  r += "</p><p>" + "Was ist der Block-Klammer? = ";
  r +=
    html("antwort-2").value === "{"
      ? "RICHTIG, es ist {  }"
      : "FALSCH, es ist {  }";
  // *** //
  r += "</p><p>" + "Was ist der Array-Klammer? = ";
  r +=
    html("antwort-3").value === "["
      ? "RICHTIG, es ist [  ]"
      : "FALSCH, es ist [  ]";
  // *** //
  r += "</p><p>" + "Was versteht JavaScript unter A und a? = ";
  r +=
    html("antwort-4").value === "1"
      ? "RICHTIG, es sind verschiedene Dinge"
      : "FALSCH, es sind verschiedene Dinge";
  // *** //
  r += "</p><p>" + "Was ist HTML-Code für JavaScript? = ";
  r +=
    html("antwort-5").value === "1"
      ? "RICHTIG, Einfaches Text"
      : "FALSCH, Einfaches Text";
  // *** //
  r += "</p>";
  // *** //
  html("ergebnis").innerHTML = r;
};

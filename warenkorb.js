

/* * * * * * * * * * * * * * * * * * * * * * * * *

 * Finde die Fehler und behebe sie. Dann schau

 * die die anderen Kommentare an und beantworte

 * die Fragen.

 * * * * * * * * * * * * * * * * * * * * * * * * */

 

function ladeContent() {

  let r = "";

  // *** //

  r +=

    block("div", "", [

      {

        name: "id",

        wert: "korb"

      }

    ]) +

    single("hr") +

    single("input", [

      {

        name: "id",

        wert: "produkt"

      },

      {

        name: "placeholder",

        wert: "Produktname..."

      },

      {

        name: "type",

        wert: "text"

      }

    ]) +

    single("input", [

      {

        name: "id",

        wert: "menge"

      },

      {

        name: "placeholder",

        wert: "Menge"

      },

      {

        name: "type",

        wert: "number"

      }

    ]) +

    single("input", [

      {

        name: "id",

        wert: "preis"

      },

      {

        name: "placeholder",

        wert: "0,00 €"

      },

      {

        name: "type",

        wert: "text"

      }

    ]) +

    block("button", "Hinzufügen", [

      {

        name: "onclick",

        wert: "hinzu()"

      }

    ]);

  // *** //

  return r;

}

 

/* * * * * * * * * * * * * * * * * * * * * * * * *

 * Füge einen neuen Eintrag in das HTML-Element

 * mit der ID "korb" im folgenden Format hinzu:

 *

 * <div FLEX>

 *      <div SCHWARZ>

 *           <b>Produkt</b>

 *           ...

 *      </div>

 *      <div INDIGO>

 *           <b>Menge</b>

 *           ...

 *      </div>

 *      <div NAVY>

 *           <b>Preis</b>

 *           ...

 *      </div>

 *      <div GRAU>

 *           <button onclick = "mengeNeu(NUMMER)">

 *               Menge

 *           </button>

 *           <button onclick = "entfernen(NUMMER)">

 *               Entfernen

 *           </button>

 *      </div>

 * </div>

 * <hr>

 *

 * Füge die Daten auch unter warenkorbDaten in

 * dem folgenden JSON Struktur:

 *

 * {

 *      produkt: ...,

 *      menge: ...,

 *      preis: ...

 * }

 *

 * Die NUMMER bei mengeNeu() und entfernen()

 * ist die Positionsnummer im Array warenkorbDaten.

 *

 * Nachdem ein neuer Eintrag hinzugefügt wurde,

 * leere die Felder mit den IDs produkt, menge

 * und preis. Merke, bei Eingabefeldern ließt und

 * schreibst du in *.value

 * * * * * * * * * * * * * * * * * * * * * * * * */

 

 

let warenkorbDaten = [];

const hinzu = function () {

  const produktInput = document.getElementById("produkt");

  const mengeInput = document.getElementById("menge");

  const preisInput = document.getElementById("preis");

 

  const produkt = produktInput.value;

  const menge = parseInt(mengeInput.value);

  const preis = parseFloat(preisInput.value);

 

  const eintrag = {

    produkt: produkt,

    menge: menge,

    preis: preis

  };

  warenkorbDaten.push(eintrag);

 

  updateWarenkorb();

 

  produktInput.value = "";

  mengeInput.value = "";

  preisInput.value = "";

};

 

/* * * * * * * * * * * * * * * * * * * * * * * * *

 * Wenn diese Funktion aufgerufen wird, lade

 * einen prompt(). Prüfe, dass der eingegebene

 * Wert eine Zahl ist. Nutze dafür parseInt() und

 * typeof x === "number".

 *

 * Wenn die Zahl größer 0 und kleiner 50 ist,

 * schreibe den Wert im Array warenkorbDaten

 * an die richtige Stelle, dessen Position du

 * durch den Parameter "nummer" erhältst.

 * Anschließend lösche den Inhalt vom HTML

 * Element mit der ID "korb" und erzeuge sie

 * erneut.

 *

 * Falls die Zahl außer von 0 bis 50 ist oder

 * der Wert keine Zahl ist, dann gib mit alert()

 * eine Fehlermeldung aus:

 * "Menge konnte nicht geändert werden!"

 * * * * * * * * * * * * * * * * * * * * * * * * */

 

const mengeNeu = function (nummer) {

  const neueMenge = prompt("Neue Menge eingeben:");

  if (neueMenge > 0 && neueMenge <= 50) {

    warenkorbDaten[nummer].menge = parseInt(neueMenge);

    updateWarenkorb();

  } else {

    alert("Menge konnte nicht geändert werden!");

  }

};

 

/* * * * * * * * * * * * * * * * * * * * * * * * *

 * Wenn diese Funktion aufgerufen wird, stelle

 * eine Frage mit confirm() innerhalb von

 * if-statement. Stell die Frage:

 *

 * "Soll der Eintrag wirklich gelöscht werden?"

 *

 * Wenn bestätigt wird, dann lösche den Inhalt

 * vom HTML Element mit der ID "korb" und leere

 * den Array warenkorbDaten.

 *

 * Falls nicht bestätigt wird, mach nichts.

 * * * * * * * * * * * * * * * * * * * * * * * * **/

 

const entfernen = function (nummer) {

  if (confirm("Soll der Eintrag wirklich gelöscht werden?")) {

    warenkorbDaten.splice(nummer, 1);

    updateWarenkorb();

  }

};

 

 

 

 

 

 

const updateWarenkorb = function () {

  const korbElement = document.getElementById("korb");

  korbElement.innerHTML = "";

 

  for (let i = 0; i < warenkorbDaten.length; i++) {

   

    const warenkorb = `

      <div>

      <div>

        <div><b  style="color: red;">Produkt : </b>${warenkorbDaten[i].produkt}</div>

        <div><b  style="color: blue;">Menge : </b>${warenkorbDaten[i].menge}</div>

        <div><b style="color: indigo;">Preis : </b>${warenkorbDaten[i].preis+ "€"}</div>

      </div>

      <div>

          <button onclick="mengeNeu(${i})">Menge</button>

          <button onclick="entfernen(${i})">Entfernen</button>

        </div>

      </div>

    `;

    korbElement.innerHTML += warenkorb;

  }

 

  korbElement.innerHTML += "<hr>";

};

 

 

 

updateWarenkorb();
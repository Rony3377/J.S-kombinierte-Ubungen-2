/* * * * * * * * * * * * * * * * * * * * * * * * *

 * Finde die Fehler und behebe sie. Dann schau

 * die die anderen Kommentare an und beantworte

 * die Fragen.

 * * * * * * * * * * * * * * * * * * * * * * * * *

 *

 * Der if-Statement sieht wie folgt aus:

 *

 * if ( ... )       -> Beispiel -> if ( x == b )  -> WENN

 *    ...;

 * else if (...)    -> Beispiel -> else if (x==b) -> ODER WENN

 *    ...;

 * else ...;        -> Beispiel else ...;         -> SONST

 *

 * Das was in einem Statement liegt, nennt man

 * Bedingung:

 *

 * if ( Bedingung )

 *      ---------

 *

 * Eine Bedingung besteht aus mindestens einem

 * Argument:

 *

 * if ( x == b )

 *      ------

 *

 * Es ist möglich, das eine Bedingung aus mehreren

 * Argumenten zusammengesetzt wird:

 *

 * if ( x == b && a > c && d < e )

 *      ------    -----    -----

 *             UND      UND

 *

 * Es ist ebenso möglich, dass mehrere Bedingungen

 * für denselben Block definiert werden können:

 *

 * if ( x == b && a > c || x != b && d < e )

 *      ------    -----                        Bedingung 1

 *            UND

 *                         ------    -----     Bedingung 2

 *                                UND

 *                     ODER

 *

 * Ein Argument besteht aus entweder einen Begriff:

 *

 *    1. Variable         -> Hat der Variable einen Wert?

 *    2. Konstante        -> Hat der Variable einen Wert?

 *    3. Array            -> Hat der Array verfügbare Einträge?

 *    4. Objekt           -> Ist das Objekt gültig?

 *    5. Funktion         -> Liefert die Funktion irgendwas ungleich 0?

 *    6. Mischtext        -> Ist der Text NICHT leer?

 *    7. Komplexer Ausdruck z.B. (a + b) * c -> Ist das Ergebnis ungleich 0?

 *

 * Ein Argument kann auch aus zwei Operanden und

 * einem Operator besteht.

 *

 * if ( LinkerOperand  Operator  RechterOperand )

 *

 * Ein Operand kann wiederum sein:

 *

 *    1. Variable

 *    2. Konstante

 *    3. Array

 *    4. Objekt

 *    5. Funktion

 *    6. Mischtext

 *    7. Komplexer Ausdruck

 *

 * Der Operator entscheidet, was für ein Vergleich

 * durchgeführt wird:

 *

 * ==      Wert1 und Wert2 sollen gleich sein

 * ===     Wert1 und Wert2 sollen gleich sein und vom selben Typ sein

 *

 * !=      Wert1 und Wert2 sollen unterschiedlich sein

 * !==     Wert2 und Wert2 sollen unterschiedlich sein und verschiedene Typen haben

 *

 * >=      Wert1 soll größer oder gleich Wert2 sein

 * >       Wert1 soll größer als Wert2 sein

 *

 * <=      Wert1 soll kleiner oder gleich Wert2 sein

 * <       Wert1 soll kleiner als Wert2 sein

 *

 * * * * * * * * * * * * * * * * * * * * * * * * */

 

function ladeContent() {

  let r = "";

  // *** //

  const faktor = {

    a: { wert: 20, weg: "+" },

    b: { wert: 35, weg: "-" },

    c: { wert: 12, weg: "*" },

    d: { wert: -8, weg: "/" },

    e: { wert: 1, weg: "+" },

    f: { wert: -1, weg: "-" }

  };

  // *** //

  const gelistet = [10, 15, 18, 22, 31, -40, -52, 60, 65, 72, 73, 81, -94];

  // *** //

  /* * * * * * * * * * * * * * * * * * * * * * * * *

   * 1. Erstelle einen speziellen Array, der die

   *    Liste "gelistet" durchläuft.

   *

   * 2. Vergleiche jedes Array-Eintag mit den

   *    verschiedenen Faktoren.

   *

   * 3. Wenn der aktuelle Array-Wert innerhalb

   *    einer bestimmten Bandbreite liegt,

   *    (zum Beispiel x >= n.a && x <= n.b)

   *    dann nimm den Rechenweg vom ersten

   *    Vergleichsoperand (n.a).

   *

   * 4. Rechne den Wert aus und gib folgendes

   *    zurück:

   *

   *       r += block("p",

   *                 `${x} ${weg} ${y} = ${x weg y}`);

   * * * * * * * * * * * * * * * * * * * * * * * * */

  // *** //

  for (const x of gelistet) {

    let weg = "";

    let y = 0;

 

    //

    for (const key in faktor) {

      const factor = faktor[key];

      if (x >= factor.wert && x <= factor.wert + 30) {

        weg = factor.weg;

        y = factor.wert;

        break;

      }

    }

 

    //

    if (weg !== "") {

      //

      let result = 0;

      switch (weg) {

        case "+":

          result = x + y;

          break;

        case "-":

          result = x - y;

          break;

        case "*":

          result = x * y;

          break;

        case "/":

          result = x / y;

          break;

      }

 

      //

      r +=block("p",`${x} ${weg} ${y} = ${result}`);

    }

  }

 

  // *** //

  return r;

}

 

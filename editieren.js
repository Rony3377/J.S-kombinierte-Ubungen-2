/* * * * * * * * * * * * * * * * * * * * * * * * *
 * Erstelle eine Oberfläche mit einer Tabelle,
 * mit geordnete und ungeordnete Lise und einer
 * Beschreibungsliste.
 *
 * Verwende Bilder aus bilder/
 *
 * Benutzte für die Tabelle eine eigene Funktion.
 * Für die geordnete Liste eine eigene Funktion.
 * Für die ungeordnete Liste eine eigene Funktion.
 * für die Beschreibungsliste eine eigene Funktion.
 * * * * * * * * * * * * * * * * * * * * * * * * */


 

function ladeContent() {

  let r = "";

  // *** //

  r+=block("div",Tabelle() + OListe() + UListe() + BeListe(),[{name:"style", wert:"  display: flex; justify-content: center;"}]);

 

  // *** //

  return r;

}
function Tabelle(){

  let t="";

  t+=block("h4"," Tabelle")

  t+=`<table>`;

  t+=`<tr><td><img src="bilder/tobottom.png"></td></tr>`;

  t+=`<tr> <td><img src="bilder/toleft.png"></td></tr>`;

  t+=`<tr><td><img src="bilder/toright.png"></td></tr>`;

  t+=`<tr> <td><img src="bilder/totop.png"></td></tr>`;

  t+=`</table>`;

  return t;

}

function OListe(){

  let t="";

  t+=block("h4"," geordnete Liste")

  t+=`<ol>`;

  t+=`<li><img src="bilder/open.png"></li><li><img src="bilder/pen.png"></li>

  <li><img src="bilder/phone.png"></li><li><img src="bilder/screen-1.png"></li>`;

  t+=`</ol>`;

  return t;

}

function UListe(){

  let t="";

  t+=block("h4"," ungeordnete Liste")

  t+=`<ul>`;

  t+=`<li><img src="bilder/book.png"></li><li><img src="bilder/disk.png"></li>

  <li><img src="bilder/files.png"></li><li><img src="bilder/floppy.png"></li>`;

  t+=`</ul>`;

  return t;

}

function BeListe(){

  let t="";

  t+=block("h4"," Beschreibungsliste")

 

  t+=`<dl>`;

  t+=single("br");

  t+=`<dt>`;

  t+=`<dd><img src="bilder/ball1.png"></dd><dd><img src="bilder/ball2.png"></dd>

  <dd><img src="bilder/ball3.png"></dd><dd><img src="bilder/ball4.png"></dd>`;
  t+=`</dt>`;


  t+=`</dl>`;

  return t;

}

 


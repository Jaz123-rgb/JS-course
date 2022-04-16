'use strict';

// 
var caja = document.querySelector("#mi-caja");


caja.innerHTML="Texto desde Js";

caja.style.padding = "20px"; 
caja.style.console = "white";
caja.className = "clase-2"
caja.style.background="red";

// Conseguir elementos por su etiqueta

var todosLosdivs = document.getElementsByTagName('div');
// console.log(todosLosdivs);


var seccion = document.querySelector('#miseccion');
var hr = document.createElement("hr");

for (let valor in todosLosdivs) {
  if (typeof todosLosdivs[valor].textContent == 'string') {
      var parrafo =document.createElement("p");
      var texto = document.createTextNode(todosLosdivs[valor].textContent);
      parrafo.append(texto);
      seccion.append(parrafo);
  }
}
seccion.append(hr);


console.log(caja);   

// conseguit los elementos por su clase css ose GetElementByClassName
 var divsRojos = document.getElementsByClassName('rojo');
 var divAmarillo = document.getElementsByClassName('amarillo');

 divAmarillo[0].style.background = "yellow"

for (let div in divsRojos) {
  if (divsRojos[div].className == "rojo") {
      divsRojos[div].style.background = "red";
    }
}

///Quiery selector


var id = document.querySelector("#encabezado");
console.log(id);

var claseRojo = document.querySelector("div.rojo");

var etiqueta = document.querySelector('div');
console.log(etiqueta);


'use strict'


var nombres = ['Jaz','Juan','lopez',2,true];


var lenguajes = new Array("PHP", "Java", "go", "Ruby");


// var elemento = parseInt(prompt("que elemento del arraya quieres"));

// if (elemento >= nombres.length) {
//   alert("Introduce un numero menor que: "+ nombres.length);
// }else{
//   alert(nombres[elemento]);

// }
  
document.write("Lenguajes de programacion");

document.write("<ul>");

// for(var i = 0; i < lenguajes.length; i++){
//    document.write("<li>"+lenguajes[i]+"</li>");
// }

lenguajes.forEach((elemento, iteraciones)=>{
  document.write("<li>"+iteraciones+" -- "+elemento+"</li>");
});

document.write("</ul>");





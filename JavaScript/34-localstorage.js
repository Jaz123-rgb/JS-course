'use strict'

//local sotage podemos guarda infomacion dentro de nuesto buscador meanstack


// Comprobar disponibilidad del local storege
if (typeof(Storage) !== 'undefined'){
  console.log("Local storgae disponible"); 
}else{
  console.log("iconpatible");
}

// guardar datos 

localStorage.setItem("titulo", "Cursos de Symfony");

// recuperar elemento y meterlo en mi pagina wb
document.querySelector("#peliculas").innerHTML = localStorage.getItem("titulo");

// gurada un Ojson en mi localStorage
var usuario = {
  nombre: 'Jaziel Perez',
  email: 'jaziellpv@outlook.com',
  web: 'jazz.teddy.com'
}

localStorage.setItem("usuario", JSON.stringify(usuario));

// recuperar objeto

var usejs = JSON.parse(localStorage.getItem("usuario"));
console.log(usejs);

document.querySelector("#peliculas").append(" "+usejs.web+" - "+usejs.nombre);
localStorage.clear();

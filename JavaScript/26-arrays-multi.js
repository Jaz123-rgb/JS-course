'use strict'


var categorias = ['accion','terror','comedia'];
var peliculas = ['movie-1', 'movie-2', 'movie-3'];



// var cine = [categorias,peliculas];
// console.log(cine[0]);

// var elemento = "";

// do {
    
//   elemento = prompt("Introduce peliculas");
//   peliculas.push(elemento);
// } while (elemento != "acabar");
// console.log(peliculas);


// var cadena = "dato1, dato2, dato3, dato4";
// var cadena_str = cadena.split(",");
// console.log(cadena_str)


document.write("Lenguajes de programacion");

document.write("<ul>");

for (let pelicula in  peliculas) {
    
  document.write("<li>"+peliculas[pelicula]+"</li>");
} 

document.write("</ul>");
   
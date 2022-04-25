'use strict'
//jason Java scrpit Notation


var pelicula = {
  titulo: 'batman vs superman',
  year: 2017,
  pais: 'Estados Unidos'
};

var peliculas = [ 
  {titulo: 'la verda duele', year: 2016, pais: 'francia'},
  pelicula
];
var caja_peliculas = document.querySelector("#peliculas");
for (let index in peliculas) {
  var p = document.createElement("p");
  p.append(peliculas[index].titulo+"-"+peliculas[index].pais);
  caja_peliculas.append(p);

};

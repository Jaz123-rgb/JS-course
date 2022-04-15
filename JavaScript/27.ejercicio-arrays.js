'use strict'



function MostrarArray(Param1, text = " ") {
  document.write("<h1>Contedio"+text+" del Array</h1>");

document.write("<ul>")

Param1.forEach((Param1, iteraciones)=> { document.write("<li>"+Param1+"</li>");
});

document.write("<ul>")
}




//Aqui se esta creando el arreglo y la funcionn del promprt
var numeros = []

for(var i =0; i <= 5; i++){
   
  numeros.push(parseInt(prompt("introduce un numero")))
   
}
// Aqui mostramos el arreglo al documento
document.write(`
 <h1>Contedio del Array</h1>
`);

document.write("<ul>")

numeros.forEach((num_s, iteraciones)=> { document.write("<li>"+num_s+"</li>");
});

document.write("<ul>")
// Qui lo mostramos en consola
console.log(numeros);

1
//Ordenar un Array

numeros.sort((a, b)=>{return(a-b);});
MostrarArray(numeros, ' ordenado ');

// invertir y mostrat

numeros.reverse();
MostrarArray(numeros, ' revertido ');


document.write("<h1>El contenido del arrays es: "+numeros.length+"</h1>");


// Buesqueda

var busqueda = parseInt(prompt('Busca un numero'));


var posicion  = numeros.findIndex(numero => numero == busqueda );

if (posicion && posicion != -1){
  document.write("<hr/><h1>Encontrado</h1>");
  document.write("<h1>Posicion de Busqueda: "+posicion+"</h1></hr>");

}else{
  document.write("<hr/><h1> No Encontrado</h1><hr/>");
}

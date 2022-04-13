'use strict '

var suma = 0;
var cont = 0;

do {
  var numero = parseInt(prompt('instroduce numeros hasta que introduzcas un  numero negativo'));
   
  if(isNaN(numero)){
       numero = 0;

  }else if(numero >= 0){
   
    suma += numero;
    cont++;
  }
  console.log(suma);
  console.log(cont);


} while (numero >= 0);


alert('el resultado de la suma es: '+suma);
alert('la media de la suma es'+ (suma/cont));

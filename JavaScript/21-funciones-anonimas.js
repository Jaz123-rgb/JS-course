'use strict'


function sumame(numero1, numero2, sumaYmuestra, sumaPorDos) {

  var sumar = numero1 + numero2;
  
  sumaYmuestra(sumar);
  sumaPorDos(sumar);
  
}

sumame(2, 4, function (dato){
  console.log("la suma es"+dato);
  },
function (dato) {
console.log("la por dos es: "+ (dato*2));
  
}  
);

'use strict'


var numeros = parseInt(prompt('introduce el limite de numeros a dividir'));

for (var i = 1; i <= numeros; i++) {
    
  if (numeros%i==0) {
    console.log('divisor '+i);
  }
  
  
}

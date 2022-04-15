'use strict'
//Funciones
//es una agrupacion reutilizable de un conjunto de instrucciones



function verConsola(num1, num2) {
  console.log("suma-> "+(num1+num2));
  console.log("resta-> "+(num1-num2));
  console.log("multiplicacion-> "+(num1*num2));
  console.log("division-> "+(num1/num2));
  console.log("******************");
}
  function verPantalla(num1, num2) {
    document.write("suma-> "+(num1+num2)+"<br/>");
    document.write("resta-> "+(num1-num2)+"<br/>");
    document.write("multiplicacion-> "+(num1*num2)+"<br/>");
    document.write("division-> "+(num1/num2)+"<br/>");
    document.write("******************"+"<br/>");

  }

function calculadora(num1, num2, mostrar = false) {

   if (mostrar == false) {
    verConsola(num1, num2);
   }else{
     verPantalla(num1, num2);
   }
    
}

calculadora(2, 2, true);
calculadora(23, 12);


// for(var i = 0; i <= 10; i++){
   
//    for (var c = 0; c <= 10; c++)  {
//     console.log("iteracion de i-> "+i+" intecion de c-> "+c);
//     calculadora(i, c);
//     }

// }



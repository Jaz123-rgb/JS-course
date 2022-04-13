'use strict'
/*
Progrmam que me diga que numero es mayor y meno 
Plus y si los numero no son nuero o son menor o iggual

*/


var num1 = parseInt(prompt("numero 1: "));
var num2 = parseInt(prompt("numer 2: "));

while (num1 <= 0 || num2 <= 0 || isNaN(num1) || isNaN(num2)){
  num1 = parseInt(prompt("numero 1: "));
  num2 = parseInt(prompt("numer 2: "));
}


if (num1 > num2 ) {
  alert("el numero uno "+num1+" es mayor que el dos "+ num2 );
} else if (num2 > num1) {111
  alert("el numero dos "+num2+" es mayor que el uno "+ num1 );
}else if( num1 == num2){
 alert("El numero uno "+num1+" es igual al numero dos "+num2);

}

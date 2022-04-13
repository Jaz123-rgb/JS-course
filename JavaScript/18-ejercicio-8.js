'use strict'

/*Una calculadora que ppida dos numeros por pantalla
-si  mentemos uno mal que nos lo vuelva a pedir
*/

var num1 = parseInt(prompt('ingresa el primer numero')); 


var num2= parseInt(prompt('ingresa el segundo numero'));

while(isNaN(num1) || isNaN(num2)){
  num1 = parseInt(prompt('ingresa el primer numero')); 

  num2= parseInt(prompt('ingresa el segundo numero'));
}


if(num1 >= 0 || num2 >= 0){
  var suma = num1 + num2;
  var resta = num1 - num2;
  var mul = num1 * num2;
  var divide = num1 / num2;
document.write("<h1>la suma es: "+suma+"<h1>");
document.write("<h1>la resta es: "+resta+"<h1>");
document.write("<h1>la multiplicacion es: "+mul+"<h1>");
document.write("<h1>la division es: "+divide+"<h1>");
console.log('suma-> '+suma);
console.log('resta-> '+resta);
console.log('multiplicacion-> '+mul);
console.log('division-> '+divide);
alert('suma-> '+suma);
alert('resta-> '+resta);
alert('multiplicacion-> '+mul);
alert('division-> '+divide);
}

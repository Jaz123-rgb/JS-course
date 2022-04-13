'use strict'


var num1 = parseInt(prompt('introduce el primer numero'));
var num2 = parseInt(prompt('introduce el segundo numero'));


document.write("<h2> De "+num1+" a "+num2+" estan estos numeros<h2>");
for (var i = num1; i <= num2; i++) {
  document.write(i+"<br/>");  


}

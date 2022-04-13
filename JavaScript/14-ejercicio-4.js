'use strict'

var num1 = parseInt(prompt('introduce el primer numero'));
var num2 = parseInt(prompt('introduce el segundo numero'));


while (num1 < num2 ) {
  num1++;
  if (num1%2 != 0){
    document.write(num1+"<br/>");
  }
}

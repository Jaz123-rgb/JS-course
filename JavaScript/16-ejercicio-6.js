'use strict'

/*Que nos diag si un numero es imapr o impar*/

var num = parseInt(prompt('inserta el numero'));

while(isNaN(num)){
  num = parseInt(prompt('inserta el numero'));
}
if(num%2 == 0){

  console.log("el numero: "+ num +"es par");
}else{
  console.log("el numero: "+ num +"es impar");

}



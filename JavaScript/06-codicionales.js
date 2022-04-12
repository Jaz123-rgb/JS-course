'use strict'
// COndicional If

// estructura de control o condiciones si a es igual a b entonces haz algo
// istrucciolnes que nos permiten comparar


var edad1 = 10;
var edad2 = 12;

// si pasa esto
if(edad1 > edad2){
 console.log("you are gronw up")

  // ejecta esto 
}else{
  console.log("to young");
}

// operadores relacionales 
// mayor:> 
// menor: <
// mayor o igual : >=
// menor o igual: <=
// igual: ==
// distinto: !=

var edad = 24;
var name = "Jaziel";
 
if(edad >= 18){
  alert(name+" tiene "+ edad+" es mayor de edad");
  console.log("puede pasar");
   if ( edad <= 26 ){
     console.log("eres menor de 34 anos ");
   }else if(edad >= 50){
     console.log("eres anciano");
   }else{
       console.log("Estas en medio mano");
   }
}else{
  alert(name + " es menor de edad, tiene "+edad+" de edad");
  console.log(name + " es menor de edad, tiene "+edad+" de edad");
}
// Operadores logicos 
//  && and
// || or 
// ! negacion

// 
var year  = 2018;

// ejemplo and &&
if ( year == 2018 && year >= 2018){
  console.log("se cumplio la snetecia and")
}
else{ 
  console.log(" no se cumplio la condicion and")
}
// Ejemplo con or
if(year == 2017 || (year >= 2000 && year <= 2018) ){
  console.log(" la sentecia or conbinada se cumplio se cumplio")

}else{
  console.log("la sentencia or no se cumplio");
}
  

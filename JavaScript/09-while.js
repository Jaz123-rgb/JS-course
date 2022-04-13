'user strict'

//Bucle While 

var year = 2018


while (year<=2051) {
  console.log("Estamos en el ano"+year);
  year++;

  if(year==2020){
    break;
  }
}
 
var years = 30;

do {
  
   console.log("solo cuando sea diferente a 20 "+years);
   years--;

} while (years > 25);

/// BOM BROWSER OBJECT MODEL 
function getBom() {
   
// console.log(window.innerHeight);
// console.log(window.innerWidth);
console.log(screen.width, screen.height);
console.log(window.location);
  
}


function redirect(url) {
  window.location.href = url;
}

function abriVentana(url) {
  window.open(url,"","width=400,heigth=300");
  
}


getBom();

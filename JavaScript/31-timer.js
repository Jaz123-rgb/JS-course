'use strict'
window.addEventListener('load', ()=>{



  function intervalo(){
    var tiempo = setInterval(()=>{
      console.log("set interval ejecutado");
      
      var encabezado = document.querySelector("h1");
  
      if(encabezado.style.fontSize == "50px"){
        encabezado.style.fontSize = "20px";
      }else{
        encabezado.style.fontSize = "50px";
      }
    
    }, 3000);
     return tiempo;
  }

  var tiempo = intervalo();
  
  
  var stop = document.querySelector('#stop');
  stop.addEventListener('click', ()=>{
            alert("Has parado el intervalo en bucle");
            clearInterval(tiempo); 
  });

  
  var start = document.querySelector('#stop');
  start.addEventListener('click', ()=>{
    alert("has iniciado el intervalo");
    tiempo();
  });
  
});

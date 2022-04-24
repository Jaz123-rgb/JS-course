'use strict'
// eventos del raton


window.addEventListener('load', () => {
  
  function ChangeColor() {
    console.log("Me has dado click")
    var bg = boton.style.background;
    if (bg == "green") {
      boton.style.background = "red";
    } else {
      boton.style.background = "green";
    }
    return true;
  }

  var boton = document.querySelector('#boton');
  boton.addEventListener('click', () => {
    ChangeColor();
  });

  // mousee over- caundo pasas por el boton te cambia de color

  boton.addEventListener('mouseover', () => {
    boton.style.background = "yellow";
  });
  boton.addEventListener('mouseout', () => {
    boton.style.background = "#ccc";
  });

  // eventoos de teclas
  var input = document.querySelector("#campo-nombre");

  // Focuos
  input.addEventListener('focus', () => {
    console.log("[focus] entras detro del input");
  });

  // Blur

  input.addEventListener('blur', () => {
    console.log("[blur] estas afuera del input");
  });

  // keydown

  input.addEventListener('keydown', () => {
    console.log("[keydown] presionaste esta tecla", String.fromCharCode(event.keyCode));
  });
  // keypress
  input.addEventListener('keypress', () => {
    console.log("[keypress] estas presionando", String.fromCharCode(event.keyCode));
  });
  // keyup 
  input.addEventListener('keyup', () => {
    console.log("[keyup] dejaste de presionar esta tecla", String.fromCharCode(event.keyCode));
  });


});

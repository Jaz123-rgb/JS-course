'usd strict'

window.addEventListener('load', ()=>{
  console.log("Dom cargado");
  
   var formulario = document.querySelector("#formulario")
   var boxdashed =  document.querySelector(".dashed");
    
   boxdashed.style.display = "none";

   formulario.addEventListener('submit', ()=>{
     console.log('evento submit cpaturados');
     
     var nombre = document.querySelector("#nombre").value;
     var apellido =document.querySelector("#apellidos").value;
     var edad = parseInt(document.querySelector("#edad").value);

     if (nombre.trim() == null || nombre.trim().length == 0 ) {
       alert("el nombre no es valido");
       document.querySelector("#error_nombre").innerHTML = "el Nombre no es validos";
       document.querySelector("#error_nombre").style.background ="red";
       return false; 
     }else{
      document.querySelector("#error_nombre").style.display = "none";
       
     }
     
     if (apellido.trim() == null || apellido.trim().length == 0 ) {
      document.querySelector("#error_apellidos").innerHTML = "el Nombre no es validos";
      alert("el apellido no es valido");
      return false; 
    }else{
      document.querySelector("#error_nombre").style.display = "none";
       
     }
    
    if (edad == null || edad <= 0 || isNaN(edad)) {
      document.querySelector("#error_edad").innerHTML = "la edad no es valida no es validos";
      alert("el edad no es valido");
      return false; 
    }else{
      document.querySelector("#error_nombre").style.display = "none";
       
     }

     boxdashed.style.display = "block";

     var p_nombre = document.querySelector("#p-nombre span");
     var p_edad = document.querySelector("#p-edad span");
     var p_apellidos = document.querySelector("#p-apellidos span");

     p_nombre.innerHTML = nombre;
     p_apellidos.innerHTML = apellido;
     p_edad.innerHTML = edad;

    //  var datosUsuaroio = [nombre,apellido,edad];

    //  for (let indice in datosUsuaroio) {
    //   var parrafo = document.createElement("p");
    //   parrafo.append(datosUsuaroio[indice]);
    //   boxdashed.append(parrafo);

    //  }


   });


});

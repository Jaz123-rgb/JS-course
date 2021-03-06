'use strict';

//fetch (ajax) y peticiones a servicion rest full

var div_usuarios = document.querySelector('#usuarios');
var div_Janet = document.querySelector('#janet');
var div_profesor = document.querySelector('#profesor');

var usuarios = [];


GetUsuarios()
.then(data => data.json())
.then(users => {
  ListadoUusarios(users.data)
  return getInfo();
}).then(data => {
  
  div_profesor.innerHTML = data;  
  return GetJanet();
})
.then(data => data.json())
.then(user => {
  MostrarJanet(user.data);
});


function GetUsuarios(){
  return fetch('https://reqres.in/api/users');
}

function GetJanet(){
  return fetch('https://reqres.in/api/users/2');
}


function getInfo(){
  var profesor = {
     nombre: 'Jaziel',
     apellidos: 'Perez',
     url: 'https://www.teddy-jaz.com/'
  };

  return new Promise((resolve, reject) => {
    
    var profesor_string = "";
    setTimeout(() => {
      profesor_string = JSON.stringify(profesor);

      if(typeof profesor_string != 'string' || profesor_string == "")return reject('error');
      
      return resolve(profesor_string);

    }, 3000);
  });

}


function ListadoUusarios(usuarios) {
  usuarios.map((users, i)=>{
    let nombre = document.createElement("h3");
    nombre.innerHTML = i+" . "+ users.first_name +" " +users.last_name;
    div_usuarios.appendChild(nombre);

    document.querySelector(".loading").style.display = "none";
 
    });

}
 

function MostrarJanet(user) {
  console.log(user);
  let nombre = document.createElement("h3");
  
  let avatar = document.createElement('img');
  
  nombre.innerHTML = user.first_name +" " +user.last_name;

  avatar.src = user.avatar;
  avatar.width = '100';

  div_Janet.appendChild(nombre);
  div_Janet.appendChild(avatar);

  document.querySelector("#janet .loading").style.display = "none";

}

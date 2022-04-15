'use strict'



var nombre = prompt("inserta tu nombre");
var apellid = prompt("inserta tu apelido");

var texto = `
<h1> Hola que tal</h1>
<h2> mi nombre es ${nombre}</h2>
<h2> mi apellido es ${apellid}</h2>
`;

document.write(texto);

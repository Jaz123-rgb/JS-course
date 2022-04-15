'use strict'


// Parametro  de REST Y SPRED

function frutas(fruta1, fruta2, ...resto) {
       console.log('fruta uno: '+fruta1);
       console.log('fruta uno: '+fruta2);
       console.log(resto);
}

var sfrutas = ['naranja','sandia'];
frutas(...sfrutas, 'manzana','uva','cereza');


const { inicioSesion, minimoMaximo } = require('./proy_modules/functions.js');
const colors = require('colors');

inicioSesion('kevin'); 
inicioSesion('nico'); 
inicioSesion('belan '); 
inicioSesion('cost')

const numeros = [52, 1123,65, -4, 4, 104];
console.log('$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$'.bgMagenta)
console.log('Análisis del arreglo de números:', numeros);
console.log('$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$'.bgMagenta)
minimoMaximo(numeros);

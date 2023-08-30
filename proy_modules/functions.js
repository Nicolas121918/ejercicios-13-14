const { bgCyan } = require('colors');

const claves = ['kevin', 'nico', 'beltran', 'jeje'];
let intentos = 1;

function inicioSesion(clave) {
  if (claves.includes(clave)) {
    console.log(''.bgCyan)
    console.log('$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$'.bgMagenta)
    console.log('Acceso concedido');
  } else {
    intentos++;
    console.log('$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$'.magenta)
    console.log('Acceso denegado');
    console.log('444444444444444444444444444444444444444444444444444444444444444444444444'.magenta)
    
    if (intentos >= 3) {
      mostrarAlertaIntruso();
    }
  }
}

function mostrarAlertaIntruso() {
  require('colors'); 
  console.log(''.bgRed)
  console.log('¡Alerta de intruso!'.bgGreen);
  console.log('44444444444444444444444444444444444444444444444444444444444444444444444'.bgMagenta)
}

function minimoMaximo(numeros) {
  if (!numeros || numeros.length === 0) {
    console.log('4444444444444444444444444444444444444444444444444444444444444444444444'.bgRed)
    console.log(('El arreglo de números está vacío.'.red));
    console.log('4444444444444444444444444444444444444444444444444444444444444444444444'.bgRed)
    return;
  }

  let minimo = numeros[0];
  let maximo = numeros[0];
  let suma = 0;

  for (const numero of numeros) {
    if (numero < minimo) {
      minimo = numero;
    }
    if (numero > maximo) {
      maximo = numero;
    }
    suma += numero;
  }

  const promedio = suma / numeros.length;

  console.log(('Número menor:'), minimo);
  console.log('$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$'.bgYellow)
  console.log(('Número mayor:'), maximo);
  console.log('$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$'.bgMagenta)
  console.log(('Promedio:'), promedio);
  console.log('$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$'.bgGreen)
}

module.exports = {
  inicioSesion,
  minimoMaximo,
};

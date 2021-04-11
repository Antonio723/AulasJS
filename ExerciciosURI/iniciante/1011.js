'mode strict'

var lines = prompt('Digite o numero da soma:').split(' ');
const raio = lines[0];
console.log(raio);
const pi = 3.14159;
const resultado = (4/3) * pi * Math.pow(raio,3);
console.log(`VOLUME = ${resultado.toFixed(3)}`);

/*devido a problemas com a validação da entrada o codigo a ser 
validado deve ser o descrito a abaixo:

const raio = input;
const pi = 3.14159;
const resultado = (4.0/3) * pi * Math.pow(raio,3);
console.log(`VOLUME = ${resultado.toFixed(3)}`);
*/

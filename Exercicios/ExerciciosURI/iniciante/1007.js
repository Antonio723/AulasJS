'mode strict'

var lines = prompt('Digite o numero da soma:').split(' ');

const [A,B,C,D]=lines.map(Number);
const DIFERENCA =  (A * B - C * D); 
console.log(`DIFERENCA = ${DIFERENCA}`);

'mode strict'

var lines = prompt('Digite o numero da soma:').split(' ');
const [A,B]=lines.map(Number);
SOMA=A+B;
console.log(`SOMA = ${SOMA}`)
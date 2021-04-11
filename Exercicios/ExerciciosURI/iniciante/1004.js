'mode strict'

var lines = prompt('Digite o numero da soma:').split(' ');
const [A,B]=lines.map(Number);
PROD=A*B;
console.log(`PROD = ${PROD}`)
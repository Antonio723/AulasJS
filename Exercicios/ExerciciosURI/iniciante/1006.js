'mode strict'

var lines = prompt('Digite o numero da soma:').split(' ');

const [A,B,C]=lines.map(Number);
const MEDIA = ( (A*2) + (B*3) + (C*5) )/10; 
console.log(`MEDIA = ${MEDIA.toFixed(1)}`);

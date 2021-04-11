'mode strict'
var lines = prompt('Digite o numero da soma:').split(' ');
const [A,B] = lines.map(Number);
const X = A+B;
console.log(`X = ${X}`);

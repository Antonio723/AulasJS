'mode strict'

var lines = prompt('Digite o numero da soma:').split(' ');

const [A,B,C]=lines.map(Number);
const TotalHoraExtra = (B*C);
console.log(`NUMBER = ${A}`);
console.log(`SALARY = U$ ${TotalHoraExtra.toFixed(2)}`);

'mode strict'

var lines = prompt('Digite o numero da soma:').split(' ');

const [A,B,C]=lines.map(Number);
const MEDIA = (A*3.5+B*7.5)/11; 
console.log(`MEDIA = ${MEDIA.toFixed(5)}`);
/*O peso das notas é definido pelo valor da nota vezes o 
seu pesso dividido pela nota maxima possivel*/

'mode strict'
/*Para validação o split da platafroma deve ser subistituido de "/n" por " "*/
var lines = prompt('Digite o numero da soma:').split(' ');
const [A,B,C] = lines.map(Number);
const areaTriangulo = (A*C)/2;
const pi = 3.14159;
const areaCirculo = pi*Math.pow(C,2);
const areaTrapezio = ((A+B)*C)/2;
const areaQuadrado = B*B;
const areaRetangulo = A*B;

console.log(`TRIANGULO: ${areaTriangulo.toFixed(3)}`);
console.log(`CIRCULO: ${areaCirculo.toFixed(3)}`);
console.log(`TRAPEZIO: ${areaTrapezio.toFixed(3)}`);
console.log(`QUADRADO: ${areaQuadrado.toFixed(3)}`);
console.log(`RETANGULO: ${areaRetangulo.toFixed(3)}`);
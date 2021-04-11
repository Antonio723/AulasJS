'mode strict'

var lines = prompt('Digite o numero da soma:').split(' ');
const [a,b,c] = lines.map(Number);
const maiorAB = (a+b + Math.abs(a-b))/2;
const maiorBC = (c+b + Math.abs(c-b))/2;
const resultado =(maiorAB + maiorBC + Math.abs (maiorAB - maiorBC) ) / 2;
console.log(`${resultado} eh o maior`);
`mode strict`

const lines = prompt("digite:");
let valor = lines;
const hora = parseInt(valor/3600);
valor = valor%3600;
const minuto = parseInt(valor/60);
valor = valor%60;
const segundo = valor;
console.log(`${hora}:${minuto}:${segundo}`);
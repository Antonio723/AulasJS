`mode strict`

const lines = prompt("Digite seu problema: ");
let valor = parseInt(lines);
const valores = [100,50,20,10,5,2,1];
console.log(valor);
for(let nota of valores)
{
let quantidade = parseInt(valor/nota);
console.log(`${quantidade} nota(s) de R$ ${nota},00`);
valor = valor%nota;
};
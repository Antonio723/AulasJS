'mode strict'

var lines = prompt('Digite o numero da soma:').split(' ');

const [Nome,salario,Vendas]=lines.map(Number);
const comisao = Vendas*0.15;
const salarioTotal = comisao + salario;
console.log(`TOTAL = R$ ${salarioTotal.toFixed(2)}`);

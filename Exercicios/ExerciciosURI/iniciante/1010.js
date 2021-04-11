'mode strict'

var lines = prompt('Digite codigo peca, quantidade, valor:').split('\n');

const [CodPeca1,qtd1,preco1] = lines[0].split(" ");
const [CodPeca2,qtd2,preco2] = lines[1].split(" ");
const total = (qtd1*preco1)+(qtd2*preco2);
console.log(`VALOR A PAGAR: R$ ${total.toFixed(2)}`);

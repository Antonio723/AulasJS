`mode sstrict`

const lines = prompt("DIgite a quantida de dias:");
let dias = lines;
const ano = parseInt(dias/365);
dias = dias%365;
const mes = parseInt(dias/30);
dias = dias%30;
console.log(`${ano} ano(s)`);
console.log(`${mes} mes(s)`);
console.log(`${dias} dia(s)`);

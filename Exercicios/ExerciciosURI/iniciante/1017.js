`mode strict`
const lines = prompt("Digite ").split("/n");
const [tempo,velocidade] = lines.map(Number);
const resultado = velocidade/12*tempo;
console.log(resultado.toFixed(3));
'mode strict'
/*as entradas no teste local deu erro, pois não estão aceitando a quebra de linha
comum, apenas se for digitado /n entre os valoes, porém foi validadono URI*/

var lines = prompt('Digite o numero da soma:').split('/n');
const [distancia,gasolina] = lines.map(Number);
const consumo = distancia/gasolina;
console.log(`${consumo.toFixed(3)} km/l`);
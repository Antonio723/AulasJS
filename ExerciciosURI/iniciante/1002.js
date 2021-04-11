'mode strict'

var lines = prompt('AREA:').split(' ');

const r = parseFloat(lines);
const n = 3.14159;
const area = n * Math.pow(r,2);

console.log(`A=${area.toFixed(4)}`)

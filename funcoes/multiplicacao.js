const readline = require('readline-sync');

let n1 = readline.question('Digite um numero: ');
let n2 = readline.question('Digite outro numero: ');

// Converter as strings para números decimais.
n1 = parseFloat(n1);
n2 = parseFloat(n2);

let multiplicacao = n1 * n2;

console.log(`Sua multiplicacao será: ${multiplicacao}`);
const readline = require('readline-sync')

let somar

numero1 = readline.questionInt('Digite o numero: ')
numero2 = readline.questionInt('Digite outro numero: ')

somar = numero1 + numero2

console.log(`Sua soma será: ${somar}`)
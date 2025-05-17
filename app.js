const readline = require('readline-sync')
const funcoes = require('./funcoes/atualizacao');
function main(){
let valorInicial;
let valorSecundario;
let operador;

valorInicial = readline.questionInt("Insira um numero: ")
valorSecundario = readline.questionInt("insira outro valor: ")
console.log("1 soma | 2 subtracao | 3 multiplicacao | 4 divisao")
operador = readline.questionInt("digite operador: ")
switch(operador){
    case 1:       
        funcoes.somar(valorInicial,valorSecundario);
        break;
    case 2: 
       funcoes.subtracao(valorInicial,valorSecundario)
        break;
    case 3: 
        funcoes.multiplicacao(valorInicial,valorSecundario)
        break;    
    case 4: 
       funcoes.divisao(valorInicial,valorSecundario);
        break;
    default: 
        console.log("operador invalido");
        break;        
}
}
main();
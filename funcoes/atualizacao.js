//função divisão 
function divisao(valorInicial,valorSecundario){
  //checar se divisão será por zero ou negativo
    if(valorSecundario <= 0 ){
        return "impossivel dividir por negativo ou zero";
    }
    else{console.log(valorInicial/valorSecundario)}
}

function somar(valorInicial,valorSecundario){
    console.log(valorInicial+valorSecundario)
}

function multiplicacao(valorInicial,valorSecundario){
    console.log(valorInicial*valorSecundario)
}

function subtracao(valorInicial,valorSecundario){
     console.log(valorInicial-valorSecundario)
}

module.exports = {divisao,somar,multiplicacao,subtracao}
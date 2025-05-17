//função divisão 
function divisao(valorInicial,valorSecundario){
  //checar se divisão será por zero ou negativo
    if(valorSecundario <= 0 ){
        return "impossivel dividir por negativo ou zero";
    }
    else{return valorInicial/valorSecundario;}
}

module.exports = {divisao}
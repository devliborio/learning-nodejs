function soma(a,b){
    return a + b;
}

function subtracao(a,b){
    return a - b; 
}

function multiplicacao(a,b){
    return a * b;
}

function divisao(a,b){
    return a / b;
}

module.exports = {
    soma,
    subtracao,
    multiplicacao,
    divisao
}; 
// * Aqui estamos exportando essas funções para serem utilizadas em outro arquivo que no nosso caso será o arquivo "calculadora-input-console.js" perceba que pra exportas varias de uma vez, foi usada uma estrutura de Objeto do JS, pois usando o méotodo convencional, nunca irá funcionar por exemplo: module.exports = soma, subtracao, divisão... (ISSO ESTÁ ERRADO).
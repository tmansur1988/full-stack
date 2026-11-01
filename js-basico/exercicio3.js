/*
FORMULA DO IMC = PESO / (ALTURA * ALTURA)

ELABORE UM ALGORITMO QUE DADO O PESO E A ALTURA DE UM ADULTO MOSTRE A SUA CONDIÇÃO DE ACORDO COM A TABELA ABAIXO.

ABAIXO DE 18.5 ABAIXO DO PESO/;
ENTRE 18.5 E 25 PESO NORMAL;
ENTRE 25 E 30 ACIMA DO PESO;
ENTRE 30 E 40 OBESO
ACIMA DE 40 OBESIDADE GRAVE

NOTA: NESSE EXERCICIO EU TOMEI UM CAMINHO "DIFERENTE" QUE NO FINAL, ATÉ PODERIA DAR CERTO, ENTRETANTO ESTAVA SENDO MUITO
MAIS COMPLICADO E COM MUITAS "GAMBIARRAS". A PARTE DO IF EU IMAGINEI QUE TRABALHARIA DESSA FORMA (IF, ELSE IF E ELSE POR FIM)
MAS A PARTE DO ""console.log('Seu IMC é: '+ imc.toFixed(2));"" EU ME CONFUNDI.

Math.pow - BIBLIOTECA DE FUNÇÕES MATEMATICAS - Math.pow(altura,2) -> seria altura²
*/



let peso = 88
let altura = 1.80
const imc = peso / (altura * altura)
console.log('Seu IMC é: '+ imc.toFixed(2));

if (imc < 18.5) {
    console.log('Abaixo do Peso');
}

else if (imc >= 18.5 && imc <25) {
    console.log('Peso Normal');   
}

else if (imc >=25 && imc <30) {
    console.log('Acima do Peso');
}

else if (imc >=30 && imc <40){
    console.log('Obeso');
}

else
    console.log('Obesidade Grave');
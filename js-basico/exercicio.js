/*Faça um programa para calcular o valor de uma viagem.

Você terá 5 variáveis, sendo elas:
1 - Preçop do combustível;
2 - Preço da Gasolina;
3 - tipo de combustível que está no seu carro;
4 - Gasto médio de combustível do carro por KM;
5 - Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar esta viagem.



*/

let etanol = 4.47;
let gasolina = 6.66;
let KmPorLitro = 13;
let distancia = 1800;
const litrosConsumidos = distancia / KmPorLitro;

if (etanol){
    console.log('Estou usando etanol e meu gasto médio é de ' + (litrosConsumidos * etanol).toFixed(2) + ' reais');
}
if( gasolina){
    console.log('Estou usando gasolina e meu gasto médio é de ' + (litrosConsumidos * gasolina).toFixed(2) + ' reais');
}

/* Tentei inicialmente com if e else, mas não consegui fazer funcionar justamente pela estrutura se/senão. 
Então optei por fazer com dois ifs, um para cada tipo de combustível. 
Entendi que era pra imprimir o valor gasto levando em consideração todos os tipos de combustíveis.

O correto segundo o proposto seria:
Declarar o tipo de combustível (const tipoConmbustivel = 'etanol' ou gasolina) depois fazer uma verificação com o else) ficaria dessa forma:

if (tipoCombustivel === 'etanol') {
    const valorGasto = litrosConsumidos * etanol;
    console.log('Estou usando etanol e meu gasto médio é de ' + (litrosConsumidos * etanol).toFixed(2) + ' reais');
}
    else {
        const valorGasto = litrosConsumidos * gasolina;
        console.log('Estou usando gasolina e meu gasto médio é de ' + (litrosConsumidos * gasolina).toFixed(2) + ' reais');
        }



No caso teria que preencher no tipo de combustivel qual seria o combustivel. No que eu fiz, mostra o valor com ambos os tipo
*/
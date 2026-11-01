/*  DECKARAÇÃO DE VARIÁVEIS  

    LET - SÃO VARIÁVEIS QUE PODEM SER REATRIBUIDAS
    CONST - SÃO VARIÁVEIS QUE NÃO PODEM SER REATRIBUIDAS
    toFixed(2) - ARREDONDA O VALOR PARA 2 CASAS DECIMAIS
    CONSOLE.LOG - MOSTRA O RESULTADO NO CONSOLE DO NAVEGADOR
*/


let ConsumoporKm = 10;
const PrecoCombus = 5.87;
let DistanciaKM = 50;

let ValorGasto = (DistanciaKM / ConsumoporKm) * PrecoCombus;

console.log("O valor gasto foi de " + ValorGasto.toFixed(2) + " reais");



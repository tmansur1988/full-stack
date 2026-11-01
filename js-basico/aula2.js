

/* CONDICIONAIS 
    BOOLEAN - TRUE or FALSE
    OPERADORES > < >= <=  % == ===
    = atribuição    == igualdade de valor  === igualdade de valor e tipo
    %  - operador de resto da divisão
    if - SE
    else - SENÃO (DEVE IR APENAS NO FINAL DO IF / ELSE IF / ELSE. PODE TER QUANTOS ELSE IF QUISER, MAS APENAS UM ELSE)
    else if - SENÃO SE
    ! - NEGAÇÃO (NÃO PODE SER USADA NO ELSE)
    console.log() - MOSTRA O RESULTADO NO CONSOLE DO NAVEGADOR  
*/

let numero = 3;

const numeroPar = (numero % 2) === 0;

if (numeroPar === 0) {
    console.log('O número é invalido');
    }

else if (numeroPar) {
    console.log('Executei o bloco do ELSE IF');

}
else {
    console.log('Executei o bloco do ELSE');
    }

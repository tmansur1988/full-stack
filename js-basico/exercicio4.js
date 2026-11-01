
/*
ELABORE UM ALGORITMO QUE CALCULE O QUE DEVE SER PAGO POR UM PRODUTO, CONSIDERANDO O PREÇO NORMAL DE ETIQUITA
E A ESCOLHA DA CONDIÇÃO DE PAGAMENTO.
UTILIZE OS CÓDIGOS DA TABELA A SEGUIR PARA LER QUAL A CONDIÇÃO DE PAGAMENTO ESCOLHIDA E EFETUAR O CALCULO ADEQUADO

CODIGO CONDIÇÃO DE PAGAMENTO:

- A VISTA DÉBITO, RECEBE 10% DE DESCONTO;
- A VISTA NO DINHEIRO OU PIX, RECEBE 15% DE DESCONTO;
- EM DUAS VEZES, PREÇO NORMAL SEM JUROS;
- ACIMA DE DUAS VEZES, PREÇO NORMAL DA ETIQUETA MAIS JUROS DE 10%;


NOTAS: FIQUEI CONFUSO NA CRIAÇÃO DA VARIÁVEL LET FORMAPAGAMENTO, ALGO QUE TEM QUE SER ALTERADO MANUALMENTE, ACABEI ME ENRROLANDO E A
CONST PRECOPICANHA PARA PEGAR O VALOR, ME APAGUEI AS IDEIAS QUE VIERAM QUE DEIXEI ESSA PASSAR.

A RESOLUÇÃO DO EXERCICIO FOI ALGO BEM MAIS SIMPLES EM QUESTÃO DE LINHA DE CÓDIGO. DECLAROU APENAS DUAS VARIAVEIS E EM SEGUIDA AVANÇOU PARA
O IF, ELSE IF, E ELSE. DECLAROU APENAS PREÇO ETIQUETA E FORMA DE PAGAMENTO=1. ENTRETANDO ELE NÃO COLOCOU DE FATO A INFORMAÇÃO DA FORMA
QUE EU COLOQUEI, QUE FICOU MAIS CLARA, CONSTANDO A FORMA DE PAGAMENTO. PELA MINHA FALTA DE EXPERIÊNCIA NÃO SEI AFIRMAR SE
ESSAS VARIAS CONSTANTES FACILITAM OU DIFICULTAM O DIA A DIA. ACHEI A MINHA MAIS TRABALHOSA MAS MAIS CLARA.


*/ 

const produto = 'picanha'
const precoPicanha = 85.00
const pix = 0.90;
const debito = 0.90;
const dinheiro = 0.90;
const duasVezes = 1;
const maisVezes = 1.10;
let formaPagamento = 'maisVezes'

if (formaPagamento === 'pix') {
    console.log('O valor pago em pix é de ' + (precoPicanha * pix).toFixed(2));
}

else if (formaPagamento === 'debito') {
    console.log('O valor pago em débito é de ' + (precoPicanha * debito).toFixed(2));
}

else if (formaPagamento === 'dinheiro') {
    console.log('O valor pago em dinheiro é de ' + (precoPicanha * dinheiro).toFixed(2));
}

else if (formaPagamento === 'duasVezes'){
    console.log('O valor pago em duas vezes sem juros é de ' + (precoPicanha * duasVezes).toFixed(2));
}

else
    console.log('O valor pago em três vezes ou mais é de ' + (precoPicanha * maisVezes).toFixed(2));
    

/*
Faça um algoritmo que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprima sua média
e a sua classificação conforme a tabela abaixo:

Média = (nota1 + nota2 + nota3) / 3;

Classificação:
- Média < 5: Reprovado
- Média >= 5 e < 7: Recuperação
- Média >= 7: Aprovado

tive problema neste trecho 

else if (media >=5 && media< 7){
    console.log('Recuperação');

    Pois não me lembrava do "&&". testei else if mas não estava dando certo. Como a sequencia se trata de true or false, ele verificava o
    >=5 e depois parada no <7
*/

let nota1 = 8;
let nota2 = 8;
let nota3 = 8;
const media = (nota1 + nota2 + nota3) / 3;

if (media < 5) {
    console.log('Reprovado');
}

else if (media >=5 && media<= 7){
    console.log('Recuperação');
}

else 
    console.log('Aprovado');
    

       
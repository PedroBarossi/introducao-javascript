//tipos primitivos

//boolean
var vOuF = false;
console.log(vOuF);
console.log(typeof(vOuF));

//number
var numero = 3;
console.log(typeof(numero));

//string
var nome = "Pedro";
console.log(typeof(nome));

//declaração
var variavel;
console.log(variavel);
variavel = 27;
console.log(variavel);

//constante
/*const constante;
console.log(constante);
Precisa ter valor*/
const melhorBanda = "Iron Maiden";
//melhorBanda = "Metallica";
//erro desconhecido se por constante ser inalterável ou JavaScript se recusar a mentir
console.log(melhorBanda);

//escopo
var escopoGlobal = "global";

function escopoLocal() {
    let escopoLocalInterno = "local";
    console.log(escopoLocalInterno);
}

console.log(escopoGlobal);
//console.log(escopoLocalInterno); esta variável não pode ser vista fora da function
escopoLocal();

//atribuição, comparação e comparação idêntica
var atribuicao = "Pedro";

var comparacao = "0" == 0;
console.log(comparacao);

var comparacaoIdentica = "0" === 0;
console.log(comparacaoIdentica);

//operadores aritméticos
var adicao = 1+2;
console.log(adicao);
var subtracao = 6-4;
console.log(subtracao);
var multiplicacao = 3 * 4;
console.log(multiplicacao);
var divisaoReal = 5 / 2;
console.log(divisaoReal);
var resto = 5 % 2;
console.log(resto);
var potenciacao = 2 ** 3;
console.log(potenciacao);

//operadores relacionais
var maior = 5 > 2;
console.log(maior);
var menor = 5 < 2;
console.log(menor);
var maiorIgual = 6 >= 7;
console.log(maiorIgual);
var menorIgual = 4 <= 4;
console.log(menorIgual);

//operadores lógicos
var e = true && false;
console.log(e);
var ou = true || false;
console.log(ou);
var nao = !false;
console.log(nao);

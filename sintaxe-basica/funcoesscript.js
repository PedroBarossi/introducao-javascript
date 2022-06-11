function funcaoteste() {
    console.log("Sim")
}

console.log("Está funcionando?")
funcaoteste();

function comParametros(primeiro, segundo) {
    console.log(primeiro, segundo);
}

comParametros("Parace que", "deu certo");

//funções declarativas
function declarativa() {
    console.log("Esta é uma função declarativa")
}

//expressões de funções
//com nome
var funcao = function funcao(){
    console.log("Esta é uma função de expressão")
}
funcao();
//sem nome
var semNome = function(){
    console.log("Esta também")
}

semNome();

//arrow function
var arrow = () => {
    console.log("Sou uma arrow function")
}

arrow();
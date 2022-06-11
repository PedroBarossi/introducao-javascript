let array = ["valor 1", "valor 2", "valor 3", "valor 4", "valor 5"];
let object = {
    propriedade1: "valor 1",
    propriedade2: "valor 2",
    propriedade3: "valor 3"
}

//for
for(let c=0;c<array.length;c++) {
    console.log(c);
}

//for/in (propriedades)
for (let c in array) {
    console.log(c);
}

for (i in object) {
    console.log(i);
}

//for/of (valores)
for (c of array) {
    console.log(c);
}

/*Não funciona para objetos, pois não são iteráveis
for (i of object) {
    console.log(i);
}*/

//while
var a = 0;

while (a < 10) {
    a++;
    console.log(a);
}

do {
    a--;
    console.log(a);
} while (a > 1);
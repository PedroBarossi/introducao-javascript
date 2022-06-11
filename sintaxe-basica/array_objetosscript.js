//vetores ou arrays
let array = ['string', 1, true, ['array1']];
//console.log(array);
console.log(array[0]);

//funções
array.forEach(function(item, index){console.log(item, index)});

array.push('novo item');
array.push(7);
console.log(array);

array.pop();
console.log(array);

array.shift(); //remove do início do array
console.log(array);

array.unshift('novo início'); //adiciona no início
console.log(array);

console.log(array.indexOf(true));

/*array.splice(0, 3);   //deletar parte delimitada (início, fim)
console.log(array);*/

let novoarray = array.slice(0,3);
console.log(novoarray);

//objetos

let object = {
    string: "string",
    num: 0,
    boolean: true,
    array: ['arrayInterno'],
    objectInterno: {propriedade: "interno"}
};

//console.log(object);
console.log(object.boolean);

//desestruturação do objeto
var string = object.string;
var num = object.num;
var boolean = object.boolean;
var arrayDoObjeto = object.array;

var {string, boolean, objectInterno} = object;

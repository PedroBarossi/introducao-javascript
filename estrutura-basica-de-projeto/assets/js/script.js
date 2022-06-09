//console.log('teste');

var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;

function increment() {
    if (currentNumber<10){
        currentNumber++;
        currentNumberWrapper.innerHTML = currentNumber;
        if (currentNumber>=0) document.getElementById('currentNumber').className = "";
    } else alert("Sentimos muito, o programador é iniciante e só sabe contar até 10 :(");
}

function decrement() {
    if (currentNumber>-5){
        currentNumber--;
        currentNumberWrapper.innerHTML= currentNumber;
        if (currentNumber<0) document.getElementById('currentNumber').className = "negativo";
    } else alert("O quê!? Não era pra conseguir chegar abaixo de zero... Preciso consertar o código")
}

document.getElementById("subtrair").addEventListener("click", decrement);

document.getElementById("adicionar").addEventListener("click", increment);
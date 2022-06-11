function calculadora() {
    const operacao = Number(prompt("Escolha uma operação:\n 1- Soma (+)\n 2- Subtração (-)\n 3- Multiplicação (*)\n 4- Divisão real (/)\n 5- Resto (%)\n 6- Potenciação (**)"));

    if (!operacao || operacao > 6) {
        alert("Ocorreu um erro. Por favor, escolha uma operação válida");
        calculadora();
    } else {
        var n1 = Number(prompt("Insira o primeiro valor:"));
        var n2 = Number(prompt("Insira o segundo valor:"));
        var resultado;

        if (!n1 || !n2) {
            alert("Ocorreu um erro. Por favor, utilize apenas números")
            calculadora();
        } else {
            function soma() {
                resultado = n1 + n2;
                alert(`${n1} + ${n2} = ${resultado}`);
                novaOperacao();
            }

            function subtracao() {
                resultado = n1 - n2;
                alert(`${n1} + ${n2} = ${resultado}`);
                novaOperacao();
            }

            function multiplicacao() {
                resultado = n1 * n2;
                alert(`${n1} X ${n2} = ${resultado}`);
                novaOperacao();
            }

            function divReal() {
                resultado = n1 / n2;
                alert(`${n1} / ${n2} = ${resultado}`);
                novaOperacao();
            }

            function resto() {
                resultado = n1 % n2;
                alert(`O resto da divisão de ${n1} por ${n2} é ${resultado}`)
                novaOperacao();
            }

            function potencia() {
                resultado = n1 ** n2;
                alert(`${n1} elevado à ${n2}ª potência é igual a ${resultado}`);
                novaOperacao();
            }

            function novaOperacao() {
                let opcao = prompt("Deseja fazer uma outra operação?\n 1- Sim\n 2- Não");

                if(opcao == 1) calculadora();
                else if (opcao == 2) alert("Até a próxima!");
                else {
                    alert("Por favor, digite uma opção válida");
                    novaOperacao();
                }
            }

            switch (operacao) {
                case 1:
                    soma();
                    break;
                case 2:
                    subtracao();
                    break;
                case 3:
                    multiplicacao();
                    break;
                case 4:
                    divReal();
                    break;
                case 5:
                    resto();
                    break;
                case 6:
                    potencia();
                    break;
            }
        }    
    }
}
    calculadora();
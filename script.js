function inputNumeros(num1, num2){
    var num1, num2; //declarando os numeros

    //verificando se os numeros sao iguais
    if(num1 === num2){
        console.log("Os numeros " + num1 + " e " + num2 + " sao iguais.")
    }else{
        console.log("Os numeros " + num1 + " e " + num2 + " nao sao iguais.")
    }

    //soma dos numeros
    var soma = num1 + num2;
    console.log("Sua soma e " + soma + ".");

    //verificando se a maior/menor que 10 e 20

    if (soma > 10 && soma < 20) {
        console.log("A soma dos numeros e maior que 10 e menor que 20.");
    }else if(soma < 10 && soma < 20){
        console.log("A soma dos numeros e menor que 10 e menor que 20.");
    }else if(soma > 10 && soma > 20){
        console.log("A soma dos numeros e maior que 10 e maior que 20.");
    }
}

//executando a funcao
inputNumeros(1, 11);

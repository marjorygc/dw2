//Crie uma função que receba uma string por parâmetro e verifique se é um palíndromo (uma palavra que é lida da mesma forma de trás para frente, por exemplo, a palavra arara) utilizando o método de string reverse(). Retorne true se for um palíndromo e false caso contrário. Imprima o resultado no console.

let str = "macarrão"

function palindromo(palavra){

    //o split divide as letras da string uma por uma, pra que possa ser avaliada como um array já que strings são imutáveis, o reverse inverte os itens do array e o join junta em uma nova string.

    let inverssao = palavra.split('').reverse().join('')

    if (palavra == inverssao){
        console.log("A palavra", str,"é um palíndromo.")
    } else {
        console.log("A palavra", str, "não é um palíndromo.")
    }
}

function palindromo2(palavra){
    let inverssao = ''
    for(let i = palavra.length - 1; i >= 0; i--){
        inverssao += palavra[i]
    }
    if (palavra == inverssao){
        console.log("A palavra", str,"é um palíndromo.")
    } else {
        console.log("A palavra", str, "não é um palíndromo.")
    }
}
palindromo(str)
palindromo2(str)

// 3. A empresa ABC resolveu conceder um aumento de salários a seus funcionários de acordo com a tabela abaixo. Crie uma função que receba por parâmetro o salário do funcionário e calcule e mostre o novo salário, bem como o valor de reajuste ganho e o índice reajustado, em percentual. Imprima 3 linhas na saída: o novo salário, o valor ganho de reajuste (ambos devem ser apresentados com 2 casas decimais) e o percentual de reajuste ganho, conforme exemplo abaixo.

function aumento(salario_atual){
    let novo_salario = 0
    let indice_reajustado = 0

    if(salario_atual > 2000){
        novo_salario = salario_atual * 1.04
        indice_reajustado = 1.04
    }
    if (salario_atual >= 1200.01 && salario_atual <= 2000){
        novo_salario = salario_atual * 1.07
        indice_reajustado = 1.07
    }
    if (salario_atual >= 800.01 && salario_atual <= 1200){
        novo_salario = salario_atual * 1.10
        indice_reajustado = 1.10
    }
    if (salario_atual >= 400.01 && salario_atual <= 800 ){
        novo_salario = salario_atual * 1.12
        indice_reajustado = 1.12
    } else {
        novo_salario = salario_atual * 1.15
        indice_reajustado = 1.15
    }

    valor_de_reajuste = novo_salario - salario_atual
    

    console.log("Novo salário:", novo_salario, "valor de reajuste:", valor_de_reajuste,"índice reajustado:", indice_reajustado)
}

aumento(3000)

//Crie uma função que receba 2 valores (x e y), que devem representar as coordenadas de um ponto em um plano. A seguir, determine o quadrante ao qual pertence o ponto, ou se está sobre um dos eixos cartesianos (x = 0 ou y = 0) ou na origem (x = y = 0).
//Se o ponto estiver na origem, escreva a mensagem “Origem”. Se o ponto estiver sobre um dos eixos escreva “Eixo X” ou “Eixo Y”, conforme for a situação. Considere os exemplos abaixo.

function quadrante(x,y){
    let mensagem = ""
    if(x == y && y == 0){
        mensagem = "Origem"
    } 
    else if (x == 0){
        mensagem = "Eixo X"
    }
    else if (y == 0){
        mensagem = "Eixo y"
    }
    else if (x > 0 && y > 0){
        mensagem = "Primeiro quadrante"
    }
    else if (x < 0 && y > 0){
        mensagem = "Segundo quadrante"
    }
    else if (x < 0 && y < 0){
        mensagem = "Terceiro quadrante"
    }
    else if (x > 0 && y < 0){
        mensagem = "Quarto quadrante"
    }
    console.log(mensagem)
}

quadrante(0,0)

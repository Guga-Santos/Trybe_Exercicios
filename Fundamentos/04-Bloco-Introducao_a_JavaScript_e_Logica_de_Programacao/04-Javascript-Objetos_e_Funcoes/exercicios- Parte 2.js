// 1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.
// Exemplo de palíndromo: arara .
// verificaPalindrome('arara') ;
// Retorno esperado: true
// verificaPalindrome('desenvolvimento') ;
// Retorno esperado: false
console.log("Exercício 01:")

function verificaPalindrome(string) {
    let reverso = ''
    for(let i = string.length -1; i >= 0; i -= 1) {
        reverso += string[i]
    }
    if (string === reverso) {
        console.log(true)
    } else {
        console.log(false)
    }
}

verificaPalindrome("hannah")

console.log() // Apenas um espaço
// 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
console.log("Exercício 02:")

function maiorValor(array) {
    let maior = array[0];
    let posicao = 0
    for(let i = 0; i < array.length; i += 1) {
        if(array[i] > maior) {
            maior = array[i]
            posicao = i
        }  
    }
    console.log(posicao)
}

maiorValor([2, 3, 6, 7, 10, 1])

console.log() // Apenas um espaço 
// 3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
console.log("Exercício 03:")

function menorValor(array) {
    let menor = array[0]
    let posicao = 0
    for(let i = 0; i < array.length; i += 1) {
        if(array[i] < menor) {
            menor = array[i]
            posicao = i
        }
    }
    console.log(posicao)
}
menorValor([2, 4, 6, 7, 10, 0, -3])

console.log() // Apenas um espaço
// 4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
console.log("Exercício 04:")

function nomeMaior(array) {
    let maior = array[0]
    for(let i = 0; i < array.length; i += 1) {
        if(array[i].length > maior.length) {
            maior = array[i]
        }
    }
    console.log(maior)
}
nomeMaior(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'])
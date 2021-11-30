//  Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .

// Exercicio anterior:
let array = [];
for(let i = 0; i < 25; i += 1) {
    array.push(i + 1)
}
//console.log(array)
// Fim do exercício anterior.

/*
for(let divisao of array) {
    divisao = divisao / 2
    console.log(divisao)
}
*/
let arrayDiv =[]
for(let divisao of array) {
    divisao = divisao / 2
    arrayDiv.push(divisao)
}
console.log(arrayDiv)
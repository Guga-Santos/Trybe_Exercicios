let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

// 1 - Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome
console.log("Exercício 01:")
console.log("Bem-vinda, " + info.personagem + "!")
console.log() // Apenas uma espaço

// 2 - Insira no objeto uma nova propriedade com o nome de chave 'recorrente' e o valor 'Sim' e, em seguida, imprima o objeto no console.
console.log("Exercício 02:")
info['recorrente'] = 'Sim'
console.log(info)
console.log() // Apenas um espaço

// 3 - Faça um for/in que mostre todas as chaves do objeto.
console.log("Exercício 03:")
for(let i in info) {
    console.log(i)
}

console.log() // Apenas um espaço

// 4 - Faça um novo for/in , mas agora mostre todos os valores das chaves do objeto.
console.log("Exercício 04:")
for(let i in info) {
    console.log(info[i])
}

console.log() // Apenas um espaço

// 5 - Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: 'Tio Patinhas', 'Christmas on Bear Mountain, Dell's Four Color Comics #178', 'O último MacPatinhas', 'Sim'. Então, imprima os valores de cada objeto juntos de acordo com cada uma das chaves.
console.log("Exercício 05:")
let info2 = {
    personagem: 'Tio Patinhas',
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: 'O último MacPatinhas',
    recorrente: 'Sim'
}

// console.log(info.personagem + ' e ' + info2.personagem)
// console.log(info.origem + ' e ' + info2.origem)
// console.log(info.nota + ' e ' + info2.nota)
// if(info.recorrente === 'Sim' && info.recorrente === info2.recorrente) {
//     console.log("Ambos recorrentes")
// }

for (let i in info, info2) {
    if (info[i] !== info2[i]) {
        console.log(info[i] + " e " + info2[i])
    }
}
if (info.recorrente == info2.recorrente) {
    console.log('Ambos recorrentes')
}

console.log() // Apenas um espaço

// 
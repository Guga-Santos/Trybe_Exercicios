// O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero.
//  Com base nessas informações, crie um algoritmo que retorne o fatorial de 10.

function fatorial(n) {
    let contador = 1
    for (let i = 1; i <= n; i +=1) {
        contador = contador * i
    }
    return(contador)

}

console.log(fatorial(10))
// Um número primo é aquele divisível apenas por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 0 e 50.

function primo(n) {
    let maiorPrimo = 2

    for(let i = 2; i < n; i += 1) {
        let contador = 0
        for(let j = 2; j < i; j += 1) {
            if (i % j === 0) {
                contador += 1
            }
        }
        if (contador === 0 && i > maiorPrimo) {
            maiorPrimo = i
        }
    }
    return "O maior número primo entre " + "0 " + "e " + n + " é " + maiorPrimo + "!"
}

console.log(primo(50))
function numeroPrimo(n) {
    var contador = 0
    for(let i = 2; i < n; i += 1) {
        if (n % i === 0) {
            contador += 1
        }
    }
    if (contador == 0) {
        console.log (n + " é um número primo")
    }
}

numeroPrimo(5)
numeroPrimo(6)
numeroPrimo(17)
numeroPrimo(21)
numeroPrimo(33)
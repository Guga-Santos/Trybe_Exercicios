function posicaoDoMaiorNumero(numeros) {
    let maiorNumero = "0";
    for(key in numeros) {
        if (numeros[key] > numeros[maiorNumero]) {
            maiorNumero = key;
        }
    }
    console.log(maiorNumero)
}
    

posicaoDoMaiorNumero([1,2,3,4,5,10,6,7,8,9,8,7,6,5,4,3,2])
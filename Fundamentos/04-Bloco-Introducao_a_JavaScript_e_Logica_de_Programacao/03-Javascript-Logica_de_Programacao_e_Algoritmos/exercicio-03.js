function asteriscos(n) {
    let posicao = n //Aqui está a chave!
    for(let i = 0; i < n; i += 1){
        let linha = ''
        for(let j = 0; j <= n; j += 1){
            if(j < posicao) {
                linha += ' '
            } else {
                linha += '*'
            }
        }
        console.log(linha)
        posicao -= 1
        
    }
}

asteriscos(5)
    
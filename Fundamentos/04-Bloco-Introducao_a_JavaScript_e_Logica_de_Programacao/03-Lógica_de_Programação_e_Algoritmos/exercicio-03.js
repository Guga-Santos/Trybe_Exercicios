/*function asteriscos(n) {
    for(let i = n -2; i >= 0; i -= 1){
        let linha = ''
        for (let j = 0; j <= i; j += 1) {
            linha += '.'
        }
        var asterisco = "*"
        
        console.log(linha + asterisco)
    }
}

asteriscos(5) */



function asteriscos(n) {
    let posicao = n
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
    
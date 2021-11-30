function asteriscos(n) {
    for(let i = 0; i < n; i += 1){
        let linha = ''
        for(let j = 0; j <= i; j += 1){
            linha += '*'
        }
        console.log(linha)
    }
}

asteriscos(5)
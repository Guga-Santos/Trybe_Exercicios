function asteriscos(n) {
    let meio = (n +1) / 2
    let margemD = meio 
    let margemE = meio 

    for(let i = 1; i <= meio; i += 1) { 
        let linha = '' 
        for(let j = 1; j <= n; j += 1) { 
           if( j == margemE || j == margemD || i == meio) { // a última linha cheia de asteriscos 
               linha += '*'                                 // é representada por essa condição: || i == meio
           } else {
               linha += ' '
           }
        }
        
        margemD += 1
        margemE -= 1
        console.log(linha)
    }
}

asteriscos(7)
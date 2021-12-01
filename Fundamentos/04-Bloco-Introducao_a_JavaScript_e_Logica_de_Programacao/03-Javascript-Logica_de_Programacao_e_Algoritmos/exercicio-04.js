function asteriscos(n) {                      // Função criada com parametro n
    let meio = (n +1) / 2                     // Defini onde é o meio de n
    let margemD = meio                        // Defini a margem da direita que serão espaços
    let margemE = meio                        // Defini a margem da esquerda que serão espaços

    for(let i = 0; i <= meio; i += 1) {       // Loop percorrendo de 0 até o meio (quantidade de linhas)
        let linha = ''                        // Linha tem valor de string vazia
        for(let j = 0; j <= n; j += 1) {       // Loop percorrendo de 0 até n (quantidade de casas por linha)
           if( j > margemE && j < margemD) {   // Condicional - ver alteração após o console.log para entender.
               linha += '*'
           } else {
               linha += ' '
           }
        }
        console.log(linha)
        margemD += 1                          // Acrescenta +1 à margemD que agora está na posição meio + 1
        margemE -= 1                          // Decrescenta 1 à margemE que agora está na posição meio - 1
    }
}

asteriscos(5)

/*let i vai criar 4 linhas pois percorre de 0 até 3 ([0,1,2,3]).
let j vai criar seis posições pois percorre de 0 até 5 ([0,1,2,3,4,5])
A primeira casa [0] estará sempre vazia.
A margemD vai subindo posições para a direita [3] > [4] > [5]
A margemE vai descendo posições para a esquerda [0] < [1] < [2] < [3]*/
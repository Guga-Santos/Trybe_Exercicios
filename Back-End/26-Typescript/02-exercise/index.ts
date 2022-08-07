enum diasDaSemana {
    domingo = 1,
    segunda,
    terca,
    quarta,
    quinta,
    sexta,
    sabado
}

const dataDeHoje : diasDaSemana = diasDaSemana.sabado;

console.log(dataDeHoje);

enum coresDoArco {
    primeira = 'roxo',
    segunda = 'lilas',
    terceira = 'vermelho',
    quarta = 'laranja',
    quinta = 'amarelo',
    sexta = 'verde',
    setima = 'azul'
}

const qualAcor : coresDoArco = coresDoArco.quarta;

console.log(qualAcor);

enum impressora{
    salvar = 1,
    imprimir,
    abrir,
    visualizar,
    fechar
}

const novaImpressao : impressora = impressora.abrir;

console.log(novaImpressao);

enum direcao {
    Norte = 'N',
    Leste = 'L',
    Sul = 'S',
    Oeste = 'O'
}

const newDirection : direcao = direcao.Sul;

console.log(newDirection);
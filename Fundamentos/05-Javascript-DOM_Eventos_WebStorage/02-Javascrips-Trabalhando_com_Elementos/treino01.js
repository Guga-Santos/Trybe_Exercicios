function acrescentaLista(array) {
    let local = document.querySelector('.colorList');

    for(let i = 0; i < array.length; i += 1) {
        let cores = array[i]

        let lista = document.createElement('li');
        lista.innerText = cores

        local.appendChild(lista)
    }
}

acrescentaLista(["Azul", "Amarelo", "Branco", "Roxo", "Rosa", "Vermelho", "Laranja", "Lilás", "Preto", "Salmão", "Cinza", "Creme", "Verde"])
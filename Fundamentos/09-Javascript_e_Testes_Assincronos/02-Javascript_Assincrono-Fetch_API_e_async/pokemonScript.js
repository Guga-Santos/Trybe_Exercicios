function append(data) {
    const ul = document.querySelector('ul');

    const li = document.createElement('li');
    const divNome = document.createElement('div');
    const divImage = document.createElement('div');
    const img = document.createElement('img')

    divNome.innerHTML = data.name;
    img.src = data.imageUrl;
    divImage.appendChild(img);

    li.appendChild(divNome);
    li.appendChild(divImage);

    ul.appendChild(li);
}

const fetchPokemon = (nome) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${nome}`

    const promise = fetch(url);

    
    promise.then((response) => {
        const promiseJson = response.json();

        promiseJson.then((data) => {
            const pokemon = {
                name: data.name,
                imageUrl: data.sprites.front_default
            }
            append(pokemon)
        })
    })
}

const button = document.querySelector('#button');

button.addEventListener('click', () => {
    const ul = document.querySelector('ul');
    ul.innerHTML = ''
    const input = document.querySelector('#text');
    fetchPokemon(input.value)
})
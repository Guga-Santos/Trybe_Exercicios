const fetch = require('node-fetch');

// const fetchJoke = async () => {
//   const url = 'https://api.chucknorris.io/jokes/random?category=dev';

//   fetch(url)
//   .then((response) => response.json())
//   .then((data) => console.log(data.value))
//   .catch((error) => console.log(`Algo deu errado =( \n${error}`));
// }

// fetchJoke();

const fetchJoke = async () => {
    const url = 'https://api.chucknorris.io/jokes/random?category=dev';

    const resultado = await fetch(url)
    .then((response) => response.json())
    .then((data) => data.value)
    .catch((error) => `Algo de errado aconteceu =( \n${error}!`)

    console.log(resultado)
}

fetchJoke()

/* ou:

const fectchJoke = async () => {
    const url = 'https://api.chucknorris.io/jokes/random?category=dev';

    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data.value)
    } catch(error) {
        console.log(Algo de errado aconteceu =( \n${error}!)
    }
}
fetchJoke();
*/

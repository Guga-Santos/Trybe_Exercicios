const botao = document.querySelector('#btn');
const h1 = document.querySelector('#contador');
let contador = 0

botao.addEventListener('click', () => {
    contador += 1

    // contador > 1 ? h1.innerHTML = `Você já clicou ${contador} vezes!` : h1.innerText = `Você já clicou ${contador} vez!`;

    h1.innerHTML = `Você já clicou ${contador} ${contador > 1 ? 'vezes!' : 'vez!'}`;

    // if(contador == 1) {
    //     h1.innerText = `Você já clicou ${contador} vez!`
    // } else {
    //     h1.innerText = `Você já clicou ${contador} vezes!`
    // }
})


/* Crie uma constante que receba a nota de uma pessoa candidata em um desafio técnico e implemente uma lógica
que verifique se a pessoa candidata foi aprovada, reprovada ou ficou em lista de espera.
*/

const nota = 35

if (nota >= 80) {
    console.log("Parabéns, você foi aprovada(o)")
} else if (nota >= 60) {
    console.log("Você está na lista de espera")
} else {
    console.log("Você foi reprovado(o)")
}

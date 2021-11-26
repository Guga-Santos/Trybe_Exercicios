/* 01 - Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter 
duas constantes, a e b , definidas no começo com os valores que serão operados. Faça programas para:
Adição (a + b)
Subtração (a - b)
Multiplicação (a * b)
Divisão (a / b)
Módulo (a % b)
*/

const a = 6
const b = 3

console.log(a + b)
console.log(a - b)
console.log(a * b)
console.log(a / b)
console.log(a % b)

/* 02 - Faça um programa que retorne o maior de dois números. Defina no começo do programa duas 
constantes com os valores que serão comparados.
*/

const c = 12
const d = 12
// o exercício pede para retornar, porém usarei console.log apenas para que retorne um output visível.****
if (c > d) {
    console.log(c)
} else if (d > c) {
    console.log(d)
} else {
    console.log("São iguais")
}


/* 03 - Faça um programa que retorne o maior de três números. Defina no começo do programa três 
constantes com os valores que serão comparados.
*/

const e = 30
const f = 20
const g = 30
// o exercício pede para retornar, porém usarei console.log apenas para que retorne um output visível.****
if (e > f && e > g) {
    console.log(e)
} else if (f > e && f > g) {
    console.log(f)
} else if (g > e && g > f) {
    console.log(g)
} else {
    console.log("Há números que empataram")
}

/* 04 - Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse 
valor for positivo, "negative" se for negativo e "zero" caso contrário.
*/

const h = 0
// o exercício pede para retornar, porém usarei console.log apenas para que retorne um output visível.****
if (h > 0) {
    console.log("positive")
} else if (h === 0) {
    console.log("zero")
} else {
    console.log("negative")
}

/* 05 - Faça um programa que defina três constantes com os valores dos três ângulos internos de 
um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso 
contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.
*/

const i = 60
const j = 130
const k = -10

const triangulo = i + j + k
// o exercício pede para retornar, porém usarei console.log apenas para que retorne um output visível.****
if (i < 0 || j < 0 || k < 0) {
    console.log(false)
} else if (triangulo === 180) {
    console.log(true)
} else if (triangulo < 180 || triangulo > 180) {
    console.log(false)
}
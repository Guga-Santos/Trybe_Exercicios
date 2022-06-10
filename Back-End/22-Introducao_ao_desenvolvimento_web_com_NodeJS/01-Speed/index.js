const calculo = require('./velocidade');
const readline = require('readline-sync');

const distancia = readline.questionInt('Qual a distância percorrida (em metros)? : ');
const tempo = readline.questionInt('Qual o tempo percorrido (em segundos) ? : ')

console.log(calculo.velocidadeMedia(distancia, tempo))
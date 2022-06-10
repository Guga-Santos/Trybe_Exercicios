const calc = require('./imc');
const readline = require('readline-sync');

const altura = readline.questionFloat("Me diga a sua altura em metros: ")
const peso = readline.questionFloat("Me diga o seu peso: ")

calc.IMC(peso, altura)

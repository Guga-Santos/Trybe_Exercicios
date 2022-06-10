const operations = require('./operacoes');
const readline = require('readline-sync')

console.log("Calculadora Simples");

const num1 = readline.questionInt("Digite um número: ");
const oper = readline.question("Digite a sua operação (+, -, *, /): ");
const num2 = readline.questionInt("Digite um número: ");

switch(oper) {
    case "+":
    operations.sum(num1, num2)
    break;
    case "-":
    operations.sub(num1, num2)
    break;
    case "/":
    operations.div(num1, num2)
    break;
    case "*":
    operations.mult(num1, num2)
    break;
    default:
        console.log("Opa! Essa operação ai é estranha!")
}
// 1 - (Difícil) Faça um programa que receba uma string em algarismos romanos e retorne o número que a string representa.
function converteRomanos(romanos) {
    romanos = romanos.toUpperCase()
    let romanArray = [];
    for(let i = 0; i < romanos.length; i += 1) {
        if(romanos[i] == 'I') {
            romanArray.push(1)
        } else if (romanos[i] == 'V') {
            romanArray.push(5)
        } else if (romanos[i] == 'X') {
            romanArray.push(10)
        } else if (romanos[i] == 'L') {
            romanArray.push(50)
        } else if (romanos[i] == 'C') {
            romanArray.push(100)
        } else if (romanos[i] == 'D') {
            romanArray.push(500)
        } else if (romanos[i] == 'M') {
            romanArray.push(1000)
        } else {
            romanArray = "Caracteres inválidos"
            console.log(romanArray)
            break;
        }
    }
    let = resultadoSoma = 0;
    for(let i = 0; i < romanArray.length; i += 1) {
        if (romanArray[i] < romanArray[i + 1]) {
            resultadoSoma -= romanArray[i]
        } else {
            resultadoSoma += romanArray[i]
        }
    }
console.log(resultadoSoma)
}

converteRomanos('abcs')

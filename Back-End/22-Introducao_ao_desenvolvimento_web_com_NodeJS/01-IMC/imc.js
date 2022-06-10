const IMC = (peso, altura) => {
    const result = peso / (altura ** 2)

    if(result > 40) console.log(`${result.toFixed(2)} - Obesidade grau III e IV`);
    else if(result > 35) console.log(`${result.toFixed(2)} - Obesidade grau II`);
    else if(result > 30) console.log(`${result.toFixed(2)} - Obesidade grau I`);
    else if(result > 25) console.log(`${result.toFixed(2)} - Acima do peso (sobrepeso)`);
    else if(result > 18.5) console.log(`${result.toFixed(2)} - Peso normal`);
    else if(result < 18.5) console.log(`${result.toFixed(2)} - Abaixo do peso (magreza)`)

}

module.exports = {
    IMC
}
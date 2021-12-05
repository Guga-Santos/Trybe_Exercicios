// Crie uma função chamada arrayOfNumbers que receberá a variável vector como parâmetro. Através de um loop for , percorra essa variável, busque os números pares e os adicione a um novo array que deverá ser retornado ao final pela pela função.

let vector = [[1, 2], [3,4,5,6], [7,8,9,10]];
function arrayOfNumbers(vector) {
    let arrayRetorno = []
    for(let i = 0; i < vector.length; i += 1) {
        for(let key in vector[i]) {
        if(vector[i][key] % 2 === 0) {
            arrayRetorno.push(vector[i][key])
        }
        }
    }
    return arrayRetorno
    }


console.log(arrayOfNumbers(vector))
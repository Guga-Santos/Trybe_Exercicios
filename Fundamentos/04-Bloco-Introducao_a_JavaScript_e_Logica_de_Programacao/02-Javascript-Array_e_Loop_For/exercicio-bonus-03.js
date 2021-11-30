let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let resultado = [];
for(let i = 1; i < numbers.length; i += 1) {
        resultado.push(numbers[i] * numbers[i-1])
        if(i === numbers.length -1) {
            resultado.push(numbers[i] * 2)
        }
}
console.log(resultado)
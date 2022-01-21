// const numbers = [32, 15, 3, 2, -5, 56, 10];

// const sumNumbers = numbers.reduce((result, number) => result + number); // O parâmetro `result` é o acumulador. Ele recebe, do `reduce`, o retorno da função a cada iteração.
// console.log(sumNumbers); // 113

// // Ou seja:

// const getSum = (result, number) => result + number;
// const sumNumbers = numbers.reduce(getSum);
// console.log(sumNumbers); // 113

// const numbers = [32, 15, 3, 2, -5, 56, 10];

// const getSum = (result, number) => {
//   console.log(result); // 0 32 47 50 52 47 103
//   return result + number;
//   };
// const sumNumbers = numbers.reduce(getSum, 0); // Parâmetro adicionado ao reduce: o "0"
// console.log(sumNumbers); // 113

// const bla = () => numbers.reduce((acc, num) => acc + num)

// console.log(bla())

// const bigger = () => numbers.reduce((acc, num) => acc < num ? acc = num : acc)

// console.log(bigger())


// const menorNum = (acc, num) => acc > num ? acc = num : acc;

// const result = numbers.reduce(menorNum, 100)

// console.log(result)

const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

//  Faça uma função que some todos os números pares do array.

const somaDosPares = (array) => {
   const filter = array.filter((objeto) => objeto % 2 === 0)
// Código que eu intui
   return filter.reduce((acc, num) => acc + num);

}

console.log(somaDosPares(numbers))

const somaDosPares2 = (array) => {
    let filter = (objeto) => objeto % 2 === 0
    let soma = (acc, num) => acc + num;
// Gabarito forma 2
    return array.filter(filter).reduce(soma)
}

console.log(somaDosPares2(numbers))

const somaDosPares3 = (array) => {
    let soma = (acc, num) => num % 2 === 0 ? acc + num : acc;
//  gabarito forma 1
    return array.reduce(soma, 0)
}

console.log(somaDosPares3(numbers))
const arrayOfValues = ['josé', 50, 0.25, { comida: 'Chocolate' }];


// arrayOfValues.forEach((eabc) => {
//   console.log('Cada elemento do array:', eabc);
// });

// arrayOfValues.forEach((elemento, indiceDoElemento) => {
//     console.log(`O elemento ${elemento}, está na posição ${indiceDoElemento} da array.`)
// });

arrayOfValues.forEach((elemento, indiceDoElemento, arrayCompleta) => {
    console.log('O elemento', elemento, '. Está na posição', indiceDoElemento, '. Da array', arrayCompleta)
});

// ------------------------------------------------------------------- //

const numbers = [19, 21, 30, 3, 45, 22, 15];

const verifyEven = (number) => number % 2 === 0;

const isEven = numbers.find(verifyEven);

console.log(isEven); // 30

console.log(verifyEven(9)); // False
console.log(verifyEven(14)); // True

// Outra forma de ser realizada sem a necessidade de criar uma nova função.
const isEven2 = numbers.find((number) => number % 2 === 0);

console.log(isEven2); // 30

//-----------------------------------------------------------------------//

const numbers = [19, 21, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = (number) => number % 15 === 0; 

console.log(numbers.find(findDivisibleBy3And5))

const bla = numbers.find((number) => number % 15 === 0)
console.log(bla)

// ----------------------------------------------------------------//

const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = (nome) => nome.length === 5;

console.log(names.find(findNameWithFiveLetters))

// -------------------------------------------------------------//

const musicas = [
    { id: '31031685', title: 'Partita in C moll BWV 997' },
    { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
    { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
  ]
  
  function findMusic(id) {
    return (musicas.find((parametro) => parametro.id === id)).title
  }
  
  console.log(findMusic('31031685'))

  console.log({ id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' }.title)

  //---------------------------------------------------------------//

  const listNames = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];

const verifyFirstLetter = (busca, array) => array.some((nomes) => nomes[3] === busca);

console.log(verifyFirstLetter('o', listNames)); // true
console.log(verifyFirstLetter('x', listNames)); // false

// ------------------------------------------------- //

const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => {
  return arr.some((nome) => nome === name )
}

console.log(hasName(names, 'Ana'))
console.log(hasName(names, 'Gustavo'))

// ---------------------------------------------------//

const people = [
    { name: 'Mateus', age: 18 },
    { name: 'José', age: 16 },
    { name: 'Ana', age: 23 },
    { name: 'Cláudia', age: 20 },
    { name: 'Bruna', age: 19 },
  ];

  
  
  const verifyAges = (arr, minimumAge) => {
      return arr.some((objeto) => objeto.age >= minimumAge)
  }
  
  console.log(verifyAges(people, 18));

//   -------------------------------------------------------------//

const people = [
    { name: 'Mateus', age: 18 },
    { name: 'José', age: 16 },
    { name: 'Ana', age: 23 },
    { name: 'Cláudia', age: 20 },
    { name: 'Bruna', age: 19 },
  ];
  
  const ordernar = (array) => array.sort((a, b) => a.age - b.age);
  
  console.log(ordernar(people));
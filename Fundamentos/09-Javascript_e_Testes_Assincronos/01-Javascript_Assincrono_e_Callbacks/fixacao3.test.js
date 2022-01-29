// test('Não deveria passar!', (done) => {
//     setTimeout(() => {
//         try { 
//       expect(10).toBe(5);
//       console.log('Deveria falhar!');
//       done();
//         } catch (error) {
//             done(error);
//         }
//     }, 500);
//   });

// const asyncSum = (a, b, callback) => {
//     setTimeout(() => {
//       const result = a + b + 1;
//       callback(result);
//     }, 500);
//   };
  
//   test('Testando asyncSum, soma 5 mais 10', (done) => {
//     asyncSum(5, 10, (result) => {
//       try {
//         expect(result).toBe(15);
//         done();
//       } catch (error) {
//         done(error);
//       }
//     });
//   });


let cities = [];

const addCity = (city) => {
cities.push(city);
};

const removeCity = (city) => {
cities = cities.filter((eachCity) => eachCity !== city);
};

beforeEach(() => {
    cities = ['Pindamonhangaba'];
  });
  
//   afterEach(() => {
//     cities = [];
//   });
  
  test('Testa a função addCity utilizando o beforeEach', () => {
    expect.assertions(3);
    addCity('Piraporinha');
    expect(cities).toHaveLength(2);
    expect(cities).toContain('Pindamonhangaba');
    expect(cities).toContain('Piraporinha');
  });
  
  test('Testa a função removeCity utilizando o beforeEach', () => {
    expect.assertions(2);
    removeCity('Pindamonhangaba');
    expect(cities).not.toContain('Pindamonhangaba');
    expect(cities).toHaveLength(0);
  });
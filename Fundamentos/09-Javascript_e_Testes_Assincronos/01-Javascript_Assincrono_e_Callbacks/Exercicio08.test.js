// Verifique se a importação do arquivo correto está sendo feita.
const { getPokemonDetails } = require("./Exercicio08");

describe("A função getPokemonDetails", (done) => {
  it("retorna erro quando procuramos um pokemon que não existe no banco de dados", (done) => {
    const erroX = new Error('Não temos esse pokémon para você :(')

 function callback(erro, resultado) {
     expect(erro).toEqual(erroX);
     done();
 }
 getPokemonDetails((pokemon) => pokemon.name === 'Jobson', callback)
});

  it("retorna um pokemon que existe no banco de dados", (done) => {
      const expected = 'Olá, seu pokémon é o Squirtle, o tipo dele é Water e a habilidade principal dele é Water Gun'
      
      function callback(err, result) {
        expect(result).toBe(expected);
        done();
      }
 
    
getPokemonDetails((pokemon) => pokemon.name === 'Squirtle', callback)
  });

});

const abal = ['Abla', 'Ébla', 'Bliu', 'Ecatu'];

abal.forEach((idx) => console.log(idx))

// describe("A função getPokemonDetails", () => {
//     it("retorna erro quando procuramos um pokemon que não existe no banco de dados", (done) => {
//       const expectedError = new Error('Não temos esse pokémon para você :(');
  
//       function callback(error, result) {
//         expect(error).toEqual(expectedError);
//         done();
//       }
  
//       getPokemonDetails((pokemon) => pokemon.name === 'Pikachu', callback);
//     });
  
//     it("retorna um pokemon que existe no banco de dados", (done) => {
//       const expectedString = 'Olá, seu pokémon é o Charmander, o tipo dele é Fire e a habilidade principal dele é Ember';
  
    //   function callback(err, result) {
    //     expect(result).toBe(expectedString);
    //     done();
    //   }
  
//       getPokemonDetails((pokemon) => pokemon.name === 'Charmander', callback);
//     });
//   });
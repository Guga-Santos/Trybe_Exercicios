// Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.

const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
  ];
  
  function containsA() {
      const letraA = names.reduce((acc, curr) => acc += curr.split('').reduce((acc2, curr2) => curr2 == "a"|| curr2 == "A" ? acc2 += 1 : acc2, 0), 0)
      return letraA
   
  }

  console.log(containsA())
function generatePhoneNumber(array) {
    // seu código aqui
    if(array.length !== 11) {
      return "Array com tamanho incorreto."
    }
    let contador = 0
    for(let i = 0; i < array.length; i += 1) {
      
      for (let j = 0; j < array.length; j += 1){
        if(array[i] === array[j]) {
          contador += 1
        }
      }
      if(array[i] > 9 || array[i] < 0 || contador >= 3) {
        return "não é possível gerar um número de telefone com esses valores"
      }
    }
    array.splice(0,0,"(");
    array.splice(3,0,")");
    array.splice(4,0," ");
    array.splice(10,0,"-");
    return array.join('');
  }

  generatePhoneNumber([5,2,8,1,5,3,7,2,8,9,0])
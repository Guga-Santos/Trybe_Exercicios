// Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra.

function maiorMenor(array) {
 let maior = array[0];
 let menor = array[0];
 let comparador;
 for(let i = 0; i < array.length; i += 1) {
     comparador = array[i]
     if(maior.length < comparador.length) {
         maior = comparador
     } else if (menor.length > comparador.length) {
         menor = comparador
     }
 }
return "A maior palavra é " + maior + " e a menor palavra é " + menor + "!"
}

console.log(maiorMenor(['java', 'javascript', 'python', 'html', 'css']))
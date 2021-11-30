/*   Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , 
 imprima na tela um quadrado feito de asteriscos de lado de tamanho n . */

 function asteriscos(n) {
     for(let i = 0; i < n; i += 1){
         let linha = ''
         for(let j = 0; j < n; j += 1){
             linha += '*'
         }
         console.log(linha)
     }
 }

 asteriscos(5)

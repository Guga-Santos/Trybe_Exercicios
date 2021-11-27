function converte(nota){
    if(nota > 100 || nota < 0) {
     console.log("ERROR - Wrong input")
    } else if(nota >= 90) {
     console.log("A") 
    } else if(nota >= 80) {
     console.log("B") 
    } else if(nota >= 70) {
     console.log("C") 
    } else if(nota >= 60) {
     console.log("D") 
    } else if(nota >= 50) {
     console.log("E") 
    } else if(nota < 50) {
     console.log("F") 
    }
}


converte(91)

converte(45)

converte(77)

converte(-23)

converte(110)

converte(68)
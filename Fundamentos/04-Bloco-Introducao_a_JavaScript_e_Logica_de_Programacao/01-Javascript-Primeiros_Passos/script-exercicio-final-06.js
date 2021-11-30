
function xadrez(nome) {
    let lower = nome.toLowerCase()

    if(lower === "peão") {
        console.log("Anda uma casa para frente")
    } else if (lower === "cavalo") {
        console.log("Anda três casas e uma casa em 90 graus")
    } else if (lower === "bispo") {
        console.log("Anda em diagonais")
    } else if (lower === "torre") {
        console.log("Anda para os lados, para frente e para trás")
    } else if (lower === "rainha") {
        console.log("Anda em qualquer direção")
    } else if (lower === "rei") {
        console.log("Anda em qualquer direção mas apenas uma casa")
    } else {
        console.log("ERROR - Esta peça não existe")
    }
}

xadrez("BALEIA")
xadrez("PEÃO")
xadrez("peão")
xadrez("Rei")
xadrez("cavaLo")
xadrez("BISpo")

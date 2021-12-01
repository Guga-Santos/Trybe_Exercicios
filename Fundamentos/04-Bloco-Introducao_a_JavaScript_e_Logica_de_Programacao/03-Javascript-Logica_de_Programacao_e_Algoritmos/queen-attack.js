/*  Problema: Dada a posição da rainha e a posição do oponente, 
devemos verificar se ela pode ou não pode atacar. */
// Nós não vamos efetivamente movimentar a rainha.

// Posição da rainha:
let queenRowPosition = 6
let queenColumnPosition = 4

// Posição do oponente:
let opponentRowPosition = 6
let opponentColumnPosition = 8

// Verifica se o ataque foi bem sucedido:
let canAttack = false;

// Verifica se a peça está na mesma linha e coluna:
if (opponentRowPosition === queenRowPosition || 
    opponentColumnPosition === queenColumnPosition) {
        canAttack = true
        console.log("Pode atacar na horizontal/vertical!")
}

// Verifica diagonal superior direita:
for(let iSupDir = 1; iSupDir < 8; iSupDir += 1) {
    let currentQueenRow = queenRowPosition + iSupDir
    let currentQueenColumn = queenColumnPosition + iSupDir
    if (currentQueenRow > 8 || currentQueenColumn > 8) {
        break;
    }
    if (currentQueenRow === opponentRowPosition && 
        currentQueenColumn === opponentColumnPosition) {
            canAttack = true
            console.log ("Pode atacar na diagonal superior direita!")
            break;
        }
}
for(let iSupEsq = 1; iSupEsq< 8; iSupEsq += 1) {
    let currentQueenRow = queenRowPosition + iSupEsq
    let currentQueenColumn = queenColumnPosition - iSupEsq
    if (currentQueenRow > 8 || currentQueenColumn < 1) {
        break;
    }
    if (currentQueenRow === opponentRowPosition && 
        currentQueenColumn === opponentColumnPosition) {
            canAttack = true
            console.log ("Pode atacar na diagonal superior esquerda!")
            break;
        }
}
for(let iInfpEsq = 1; iInfpEsq < 8; iInfpEsq += 1) {
    let currentQueenRow = queenRowPosition - iInfpEsq
    let currentQueenColumn = queenColumnPosition - iInfpEsq
    if (currentQueenRow < 1 || currentQueenColumn < 1) {
        break;
    }
    if (currentQueenRow === opponentRowPosition && 
        currentQueenColumn === opponentColumnPosition) {
            canAttack = true
            console.log ("Pode atacar na diagonal inferior esquerda!")
            break;
        }
}
for(let iSupEsq = 1; iSupEsq< 8; iSupEsq += 1) {
    let currentQueenRow = queenRowPosition - iSupEsq
    let currentQueenColumn = queenColumnPosition + iSupEsq
    if (currentQueenRow < 1 || currentQueenColumn > 8) {
        break;
    }
    if (currentQueenRow === opponentRowPosition && 
        currentQueenColumn === opponentColumnPosition) {
            canAttack = true
            console.log ("Pode atacar na diagonal inferior direita!")
            break;
        }
}
if(canAttack === false) {
    console.log ("Não é possível atacar!")
}

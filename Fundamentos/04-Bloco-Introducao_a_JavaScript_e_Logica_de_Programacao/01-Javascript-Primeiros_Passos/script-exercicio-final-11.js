function salarioLiquido(bruto) {
    let inss;
    if (bruto < 0) {
        inss = null
    } else if(bruto <= 1556.94) {
        inss = (bruto / 100) * 8
    } else if(bruto <= 2594.92) {
        inss = (bruto / 100) * 9
    } else if(bruto <= 5189.82) {
        inss = (bruto / 100) * 11
    } else if(bruto > 5189,82) {
        inss = 570.88
    }

    let salarioBase = bruto - inss


    let IR; 
    if (salarioBase < 0) {
        IR = null
    } else if (salarioBase <= 1903.98) {
        IR = 0
    } else if (salarioBase <= 2826.66) {
        IR = ((salarioBase / 100) * 7.5) - 142.80
    } else if (salarioBase <= 3751.05) {
        IR = ((salarioBase / 100) * 15) - 354.80
    } else if (salarioBase <= 4664.68) {
        IR = ((salarioBase / 100) * 22.5) - 636.13
    } else if (salarioBase > 4664.68) {
        IR = ((salarioBase / 100) * 27.5) - 869.36
    }

let liquido = salarioBase - IR 

console.log(liquido.toFixed(2))
}

salarioLiquido(3000)
salarioLiquido(5000)
salarioLiquido(1800)
salarioLiquido(4000)
salarioLiquido(500)
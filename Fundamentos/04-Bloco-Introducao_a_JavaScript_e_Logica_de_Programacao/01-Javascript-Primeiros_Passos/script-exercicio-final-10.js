function lucros(custo, venda) {
    let imposto = (custo / 100) * 20
let custoTotal = custo + imposto
let lucro = venda - custoTotal

console.log(lucro)
}

lucros(100,150)
lucros(200,400)
lucros(100,111)
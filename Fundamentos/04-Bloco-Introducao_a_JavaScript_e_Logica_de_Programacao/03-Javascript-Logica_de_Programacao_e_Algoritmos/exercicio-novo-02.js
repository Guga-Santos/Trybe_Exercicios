// Agora, desenvolva um algoritmo que é capaz de inverter uma palavra. Por exemplo, a palavra "banana" seria invertida para "ananab". Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.

function inversor(palavra) {
    let invertida = ""
    for(let i = palavra.length -1; i >= 0; i -= 1) {
        invertida += palavra[i]
    }
    return invertida
}

console.log(inversor("gustavo"))
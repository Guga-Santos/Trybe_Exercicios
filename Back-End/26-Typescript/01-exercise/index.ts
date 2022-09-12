function Calculate(VI:number, JM:number, AP:number, QTM:number): string {
    let counter: number = 0;

    for(let i = 0; i < QTM; i += 1) {
        counter += ((counter + JM) + AP);
    }
    const aporteFinal: number = (AP * QTM) + VI;
    const jurosFinal: number = counter - AP;

    return `Ao final de ${QTM} meses você terá R$${counter.toFixed(2)}. Você terá aportado R$${aporteFinal} e terá recebido R$${jurosFinal.toFixed(2)} em juros!`
}


function Calculate(VI, JM, AP, QTM) {
    var counter = 0;
    for (var i = 0; i < QTM; i += 1) {
        counter += ((counter + JM) + AP);
    }
    var aporteFinal = (AP * QTM) + VI;
    var jurosFinal = counter - AP;
    return "Ao final de ".concat(QTM, " meses voc\u00EA ter\u00E1 R$").concat(counter.toFixed(2), ". Voc\u00EA ter\u00E1 aportado R$").concat(aporteFinal, " e ter\u00E1 recebido R$").concat(jurosFinal.toFixed(2), " em juros!");
}

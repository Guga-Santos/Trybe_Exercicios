class PessoasEstudantes {
    private _matricula: number;
    private _nome: string;
    private _notasProva: number[];
    private _notasTrabalho: number[];

    constructor(m:number, n:string, nP:number[], nT:number[]){
        this._matricula = m;
        this._nome = n;
        this._notasProva = nP;
        this._notasTrabalho = nT;
    }

    get somaNotas() {
        return this._notasProva.reduce((a, b) => a +b);
    }

    get mediaNotas() {
        return ((this._notasProva.reduce((a, b) => a +b))/4).toFixed(2);
    }
}

const gustavo = new PessoasEstudantes(11234, 'Gustavo Santos', [9, 9, 5, 6], [5, 5]);

console.log(gustavo.somaNotas)
console.log(gustavo.mediaNotas)
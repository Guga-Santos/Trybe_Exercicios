class Data {
    private _dia: number;
    private _mes: number;
    private _ano: number;

    constructor(d: number, m:number, a:number) {
        const dateStr = `${a}-${m}-${d}`;

        if (new Date(dateStr).getDate() !== d) {
            this._dia = 1;
            this._mes = 1;
            this._ano = 1990;
        } else {
            this._dia = d;
            this._mes = m;
            this._ano = a;
        }

    }

    get dia() {return this._dia};
    set dia(newValue: number) {this._dia = newValue};

    get mes() {return this._mes};
    set mes(newValue: number) {this._mes = newValue};

    get ano() {return this._ano};
    set ano(newValue: number) {this._ano = newValue};

    getMonthName() {
        return new Date(this._ano, this._mes -1, this._dia).toLocaleDateString('default', {month: 'long'});
    }

    anoBi() {
        if (this._ano % 4 === 0) {
            return 'O ano é bissexto';
        }
        return 'O ano não é bissexto';
    }

    compareDatas(date: Data): number {
        const currentDate = `${this._ano}-${this._mes}-${this._dia}`;
        const dateToCompare = `${date._ano}-${date._mes}-${date._dia}`;

        if(new Date(currentDate) > new Date(dateToCompare)) return 1;
        if(new Date(currentDate) < new Date(dateToCompare)) return -1;

        return 0;
    }


}

const testDate = new Data(29, 1, 1989);

console.log(testDate)
console.log(testDate.getMonthName());
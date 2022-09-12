class Client {
    private _name: string;
    constructor(name:string) {
        this._name = name;
    }

    get name() { return this._name}

    set name(newValue: string) {
        if (newValue.length < 3) {
            console.log ("O nome deve conter no mínimo 3 caracteres");
        }
        this._name = newValue
    }
}

class Item {
    private _name: string;
    public _price: number;

    constructor(n:string, p:number) {
        this._name = n;
        this._price = p;
    }

    get name() { return this._name}
    get price() { return this._price};

    set name(newValue: string) {
        if (newValue.length < 3) {
            console.log ("O nome deve conter no mínimo 3 caracteres.");
        }
        this._name = newValue
    }

    set price(newValue: number) {
        if (newValue < 0) console.log('O preço deve ser positivo.');
    
        this._price = newValue;
      }


}

class Pedido {
    private _client: Client;
    private _items: Item[] = [];
    private _payment: string;
    private _discount: number;

    constructor(c:Client, i:Item[], p:string, d:number) {
        this._client = c;
        this._items = i;
        this._payment = p;
        this._discount = d;
    }

    get client(): Client {
        return this._client;
      }
    
    set client(value: Client) {
        this._client = value;
      }
    
    get items(): Item[] {
        return this._items;
      }
    
    set items(value: Item[]) {
        if (value.length === 0) {
          console.log('O pedido deve ter pelo meno um item.');
        }
        this._items = value;
    }

    get paymentMethod(): string {
        return this._payment;
      }
    
    set paymentMethod(value: string) {
        this._payment = value;
      }
    
    get discount(): number {
        return this._discount;
      }
    
    set discount(value: number) {
        if (value < 0) {
          console.log('O desconto não pode ser um valor negativo.');
        }
    
        this._discount = value;
      }

    getBill(): number {
        return this.items.reduce((a, b) => {
            const total = a + b._price;

            return total
        }, 0)
    }

    getBillWithDiscount(): number {
        return this.getBill() * (1 - this._discount);
    }
 }

const client = new Client('João');

const sandwich = new Item('Sanduíche Natural', 5.00);
const juice = new Item('Suco de Abacaxi', 5.00);
const dessert = new Item('Gelatina de Uva', 2.50);

const order = new Pedido(client, [sandwich, juice, dessert], 'dinheiro', 0.10);

console.log(order);
console.log('Valor normal: ', order.getBill());
console.log('Valor com desconto: ', order.getBillWithDiscount());
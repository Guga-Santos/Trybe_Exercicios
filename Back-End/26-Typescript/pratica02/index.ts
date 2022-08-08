enum Color {
    preta = 'preta',
    branca = 'branca',
    vermelha = 'vermelha',
    prata = 'prata'
}

enum Porta {
    motorista = 'Porta do Motorista',
    passageiro = 'Porta do Passageiro',
    atras = 'Porta de trás',
    mala = 'Porta mala'
}

enum Direction{
    left = 'esquerda',
    right = 'direita'
}

class Car {
    brand: string;
    color: Color;
    doors: number;

    constructor(b: string, c: Color, d: number) {
        this.brand = b;
        this.color = c;
        this.doors = d
    }

    honk() {
        console.log('Fom Fom');
    };

    openDoor(door: Porta){
        console.log(`Abrindo ${door}`)
    }

    closeDoor(door: Porta){
        console.log(`Fechando ${door}`)
    }

    turnOn(){
        console.log('Ligando o carro');
    }

    turnOff() {
        console.log('Desligando o carro');
    }

    speedUp() {
        console.log('O carro está acelerando');
    }

    speedDown() {
        console.log('O carro está desacelerando');
    }

    stop() {
        console.log('O carro parou!');
    }

    turn(direction: Direction) {
        console.log(`Virando o carro à ${direction}`)
    }
};


const Fiat = new Car('Fiat Uno', Color.prata , 5);

console.log(Fiat.speedUp());

console.log('Se passaram 600 metros');

console.log(Fiat.turn(Direction.left));

console.log('Se passaram 200 metros');

console.log('Entrando na rotarória');

console.log('Chegando na segunda saída');

console.log(Fiat.turn(Direction.right));

console.log(Fiat.speedUp());

console.log('Passaram-se 1 quilometro');

console.log(Fiat.speedDown());

console.log(Fiat.stop());

console.log('Chegamos ao destino final');

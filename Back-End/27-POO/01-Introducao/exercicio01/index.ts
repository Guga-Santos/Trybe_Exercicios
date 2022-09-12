class Tv {
    brand: string;
    size: string;
    resolution: string;
    connections: string;
    connectedTo?: string;

    constructor(b:string, s:string, r:string, c:string) {
        this.brand = b,
        this.size = s,
        this.resolution = r,
        this.connections = c
    }

    turnOn () {
        console.log('Essa televisão é da marca',
         this.brand,
         ', tem', this.size,
          'e possui resolução', this.resolution,
           'e pode ser conectada via: ',
            this.connections);

    }
}

const samsung = new Tv('Samsung', '50 polegadas', 'Full HD', 'HDMI' );

samsung.turnOn();
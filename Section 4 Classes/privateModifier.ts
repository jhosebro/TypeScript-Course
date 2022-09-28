class Animal2{
    private name: string
    private size: number

    public constructor(name: string, size: number) {
        this.name = name;
        this.size = size;
    }

    public getName(): string {
        return this.name;
    }

    public getSize(): number {
        return this.size;
    }

    public move(): void {
        console.log(`${this.name} is moving`);
    }
}

const animal2 = new Animal2('Lion', 100);
animal2.move();
console.log(animal2.getName())

class Connect{
    public url: string
}

const connect = new Connect();
connect.url